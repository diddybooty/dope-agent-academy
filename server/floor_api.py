#!/usr/bin/env python3
"""Floor school progress API. Local source of truth + GitHub mirror."""

from __future__ import annotations

import json
import os
import subprocess
import threading
from datetime import datetime, timezone
from http.server import BaseHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path
from urllib.parse import parse_qs, urlparse

ROOT = Path(__file__).resolve().parents[1]
DATA = ROOT / "data"
STATE_PATH = DATA / "state.json"
KEY_PATH = DATA / "desk.key"
PORT = int(os.environ.get("FLOOR_API_PORT", "8788"))
GH_REPO = os.environ.get("FLOOR_SAVES_REPO", "diddybooty/dope-agent-academy-saves")
LOCK = threading.Lock()


def utcnow() -> str:
    return datetime.now(timezone.utc).replace(microsecond=0).isoformat()


def load_state() -> dict:
    if not STATE_PATH.exists():
        return {"agents": {}, "completions": []}
    try:
        return json.loads(STATE_PATH.read_text())
    except json.JSONDecodeError:
        return {"agents": {}, "completions": []}


def save_state(state: dict) -> None:
    DATA.mkdir(parents=True, exist_ok=True)
    tmp = STATE_PATH.with_suffix(".tmp")
    tmp.write_text(json.dumps(state, indent=2, ensure_ascii=False) + "\n")
    tmp.replace(STATE_PATH)
    mirror_github(state)


def mirror_github(state: dict) -> None:
    try:
        content = json.dumps(state, indent=2, ensure_ascii=False) + "\n"
        get = subprocess.run(
            [
                "gh",
                "api",
                f"repos/{GH_REPO}/contents/state.json",
                "--jq",
                ".sha",
            ],
            capture_output=True,
            text=True,
            timeout=20,
        )
        cmd = [
            "gh",
            "api",
            "--method",
            "PUT",
            f"repos/{GH_REPO}/contents/state.json",
            "-f",
            f"message=floor sync {utcnow()}",
            "-f",
            "content="
            + __import__("base64").b64encode(content.encode()).decode(),
        ]
        sha = (get.stdout or "").strip()
        if get.returncode == 0 and sha:
            cmd += ["-f", f"sha={sha}"]
        subprocess.run(cmd, capture_output=True, text=True, timeout=20)
    except Exception:
        pass


def desk_key() -> str:
    return KEY_PATH.read_text().strip() if KEY_PATH.exists() else ""


def cors(handler: BaseHTTPRequestHandler) -> None:
    handler.send_header("Access-Control-Allow-Origin", "*")
    handler.send_header("Access-Control-Allow-Methods", "GET, POST, OPTIONS")
    handler.send_header("Access-Control-Allow-Headers", "Content-Type")


class Handler(BaseHTTPRequestHandler):
    def log_message(self, format: str, *args) -> None:
        __import__("sys").stderr.write("%s - %s\n" % (self.address_string(), format % args))

    def _json(self, code: int, obj: dict) -> None:
        raw = json.dumps(obj).encode()
        self.send_response(code)
        cors(self)
        self.send_header("Content-Type", "application/json")
        self.send_header("Cache-Control", "no-store")
        self.send_header("Content-Length", str(len(raw)))
        self.end_headers()
        self.wfile.write(raw)

    def do_OPTIONS(self) -> None:
        self.send_response(204)
        cors(self)
        self.end_headers()

    def do_GET(self) -> None:
        path = urlparse(self.path).path.rstrip("/") or "/"
        qs = parse_qs(urlparse(self.path).query)
        if path in ("/health", "/"):
            self._json(200, {"ok": True, "name": "dope-floor-api"})
            return
        if path == "/alerts":
            with LOCK:
                state = load_state()
            lines = []
            for c in state.get("completions", []):
                lines.append(
                    "|".join(
                        [
                            str(c.get("id", "")),
                            str(c.get("name", "")),
                            "pass" if c.get("passed") else "fail",
                            f"{c.get('score')}/{c.get('total')}",
                            str(c.get("at", "")),
                        ]
                    )
                )
            text = "\n".join(lines) if lines else "NONE"
            raw = text.encode()
            self.send_response(200)
            cors(self)
            self.send_header("Content-Type", "text/plain; charset=utf-8")
            self.send_header("Cache-Control", "no-store")
            self.send_header("Content-Length", str(len(raw)))
            self.end_headers()
            self.wfile.write(raw)
            return
        if path == "/desk":
            key = (qs.get("k") or [""])[0]
            if not desk_key() or key != desk_key():
                self._json(401, {"ok": False, "error": "bad_key"})
                return
            with LOCK:
                state = load_state()
            self._json(200, {"ok": True, **state})
            return
        self._json(404, {"ok": False})

    def do_POST(self) -> None:
        path = urlparse(self.path).path.rstrip("/") or "/"
        if path != "/progress":
            self._json(404, {"ok": False})
            return
        n = int(self.headers.get("Content-Length") or 0)
        if n > 80_000:
            self._json(413, {"ok": False})
            return
        try:
            body = json.loads(self.rfile.read(n) or b"{}")
        except json.JSONDecodeError:
            self._json(400, {"ok": False})
            return
        name = str(body.get("name") or "").strip()
        aid = str(body.get("id") or "").strip()
        if not name or not aid or len(name) > 80 or len(aid) > 80:
            self._json(400, {"ok": False, "error": "need_name"})
            return
        event = str(body.get("event") or "progress")
        now = utcnow()
        quiz_event = False
        with LOCK:
            state = load_state()
            agents = state.setdefault("agents", {})
            prev = agents.get(aid) or {}
            rec = {
                **prev,
                "id": aid,
                "name": name,
                "done": body.get("done") if isinstance(body.get("done"), dict) else prev.get("done", {}),
                "quizScore": body.get("quizScore", prev.get("quizScore")),
                "quizPassed": bool(body.get("quizPassed", prev.get("quizPassed", False))),
                "gymScore": body.get("gymScore", prev.get("gymScore")),
                "drillScore": body.get("drillScore", prev.get("drillScore")),
                "quizMisses": body.get("quizMisses", prev.get("quizMisses", [])),
                "quizAttempts": int(body.get("quizAttempts") or prev.get("quizAttempts") or 0),
                "startedAt": prev.get("startedAt") or body.get("startedAt") or now,
                "updatedAt": now,
            }
            if event == "quiz":
                rec["quizAttempts"] = int(rec.get("quizAttempts") or 0)
                rec["lastQuizAt"] = now
                comps = state.setdefault("completions", [])
                comps.append(
                    {
                        "id": aid,
                        "name": name,
                        "passed": rec["quizPassed"],
                        "score": rec.get("quizScore"),
                        "total": 22,
                        "misses": rec.get("quizMisses") or [],
                        "at": now,
                    }
                )
                quiz_event = True
            agents[aid] = rec
            save_state(state)
        if quiz_event:
            result = "PASS" if rec["quizPassed"] else "FAIL"
            print(
                f"QUIZ_COMPLETE name={name} result={result} score={rec.get('quizScore')}/22 id={aid}",
                flush=True,
            )
        self._json(200, {"ok": True, "at": now})


def main() -> None:
    DATA.mkdir(parents=True, exist_ok=True)
    if not STATE_PATH.exists():
        save_state({"agents": {}, "completions": []})
    if not KEY_PATH.exists():
        raise SystemExit("missing data/desk.key")
    httpd = ThreadingHTTPServer(("127.0.0.1", PORT), Handler)
    print(f"floor-api http://127.0.0.1:{PORT}", flush=True)
    httpd.serve_forever()


if __name__ == "__main__":
    main()
