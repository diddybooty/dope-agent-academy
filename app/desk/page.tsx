"use client";

import { FormEvent, useState } from "react";
import { API_BASE } from "@/lib/config";
import { MODULES } from "@/lib/modules";

type Agent = {
  id: string;
  name: string;
  done?: Record<string, boolean>;
  quizScore?: number | null;
  quizPassed?: boolean;
  quizMisses?: string[];
  quizAttempts?: number;
  gymScore?: number | null;
  drillScore?: number | null;
  startedAt?: string;
  updatedAt?: string;
  lastQuizAt?: string;
};

type Completion = {
  id: string;
  name: string;
  passed: boolean;
  score: number | null;
  total: number;
  misses?: string[];
  at: string;
};

export default function DeskPage() {
  const [key, setKey] = useState("");
  const [err, setErr] = useState("");
  const [agents, setAgents] = useState<Agent[]>([]);
  const [completions, setCompletions] = useState<Completion[]>([]);

  async function load(k: string) {
    setErr("");
    if (!API_BASE) {
      setErr("API is not configured.");
      return;
    }
    const res = await fetch(`${API_BASE}/desk?k=${encodeURIComponent(k)}`);
    if (res.status === 401) {
      setErr("Wrong desk key.");
      return;
    }
    if (!res.ok) {
      setErr("Could not load desk.");
      return;
    }
    const data = await res.json();
    const list = Object.values(data.agents || {}) as Agent[];
    list.sort((a, b) => (b.updatedAt || "").localeCompare(a.updatedAt || ""));
    setAgents(list);
    setCompletions(data.completions || []);
  }

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    void load(key.trim());
  }

  return (
    <article className="prose">
      <p className="kicker">Doel only</p>
      <h1>Floor desk</h1>
      <p className="lede">
        Who started, which modules they finished, quiz score. Agents never see
        this page in the nav.
      </p>
      <form className="row" onSubmit={onSubmit}>
        <input
          type="password"
          placeholder="Desk key"
          value={key}
          onChange={(e) => setKey(e.target.value)}
        />
        <button className="btn" type="submit">
          Load
        </button>
      </form>
      {err ? <p className="never">{err}</p> : null}

      {agents.length ? (
        <>
          <h2>People ({agents.length})</h2>
          <div className="table-wrap">
            <table className="desk">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Modules</th>
                  <th>Quiz</th>
                  <th>Gym</th>
                  <th>Classify</th>
                  <th>Updated</th>
                </tr>
              </thead>
              <tbody>
                {agents.map((a) => {
                  const n = MODULES.filter((m) => a.done?.[m.id]).length;
                  return (
                    <tr key={a.id}>
                      <td>
                        <strong>{a.name}</strong>
                        <div className="faint">{a.id.slice(0, 8)}</div>
                      </td>
                      <td>
                        {n}/{MODULES.length}
                        <div className="faint">
                          {MODULES.filter((m) => a.done?.[m.id])
                            .map((m) => m.num)
                            .join(" ")}
                        </div>
                      </td>
                      <td>
                        {a.quizScore == null ? (
                          "—"
                        ) : (
                          <>
                            {a.quizPassed ? "PASS" : "FAIL"} {a.quizScore}/22
                            {a.quizAttempts ? ` · ${a.quizAttempts} try` : ""}
                            {a.quizMisses?.length ? (
                              <div className="faint">miss {a.quizMisses.join(", ")}</div>
                            ) : null}
                          </>
                        )}
                      </td>
                      <td>{a.gymScore == null ? "—" : a.gymScore}</td>
                      <td>{a.drillScore == null ? "—" : a.drillScore}</td>
                      <td className="faint">{(a.updatedAt || "").replace("T", " ").replace("Z", "")}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <h2>Quiz attempts</h2>
          <ol className="ol-tight">
            {completions
              .slice()
              .reverse()
              .map((c, i) => (
                <li key={`${c.id}-${c.at}-${i}`}>
                  <strong>{c.name}</strong> {c.passed ? "passed" : "failed"}{" "}
                  {c.score}/{c.total} · {c.at.replace("T", " ").replace("Z", " UTC")}
                  {c.misses?.length ? ` · missed ${c.misses.join(", ")}` : ""}
                </li>
              ))}
          </ol>
        </>
      ) : null}
    </article>
  );
}
