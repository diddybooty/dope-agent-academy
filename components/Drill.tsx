"use client";

import { useState } from "react";
import { CASES, DOORS, type Door } from "@/lib/drills";
import { markDone, patchProgress } from "@/lib/progress";

export function Drill() {
  const [i, setI] = useState(0);
  const [picked, setPicked] = useState<Door | null>(null);
  const [correct, setCorrect] = useState(0);
  const [done, setDone] = useState(false);

  const c = CASES[i];

  function choose(d: Door) {
    if (picked) return;
    setPicked(d);
    if (d === c.answer) setCorrect((n) => n + 1);
  }

  function next() {
    if (i + 1 >= CASES.length) {
      patchProgress({ drillScore: correct });
      markDone("drill");
      setDone(true);
      return;
    }
    setI((n) => n + 1);
    setPicked(null);
  }

  if (done) {
    return (
      <div className={correct === CASES.length ? "pass" : "fail"}>
        <h2>
          Classify: {correct}/{CASES.length}
        </h2>
        <p>
          {correct === CASES.length
            ? "Door first, talk second. That’s the whole job."
            : "Wrong door is how agents get sent to /refer and players get Agent Room. Run it again."}
        </p>
        <button
          className="btn"
          type="button"
          onClick={() => {
            setI(0);
            setPicked(null);
            setCorrect(0);
            setDone(false);
          }}
        >
          Classify again
        </button>
      </div>
    );
  }

  return (
    <div>
      <p className="progress-mini">
        Case {i + 1} / {CASES.length} · {correct} right
      </p>
      <div className="card">
        <div className="meta">Who</div>
        <p style={{ color: "var(--ink)", marginBottom: 8 }}>{c.who}</p>
        <div className="meta">They say</div>
        <h3 style={{ margin: 0 }}>{c.line}</h3>
      </div>
      <div className="doors">
        {DOORS.map((d) => {
          let cls = "door";
          if (picked) {
            if (d.id === c.answer) cls += " ok";
            else if (d.id === picked) cls += " no";
          }
          return (
            <button
              key={d.id}
              type="button"
              className={cls}
              disabled={!!picked}
              onClick={() => choose(d.id)}
              title={d.hint}
            >
              {d.label}
            </button>
          );
        })}
      </div>
      {picked ? (
        <div className={picked === c.answer ? "good" : "never"}>
          <strong>{picked === c.answer ? "Right door" : "Wrong door"}</strong>
          {c.why}
        </div>
      ) : null}
      <div className="row">
        <button className="btn" type="button" disabled={!picked} onClick={next}>
          {i + 1 === CASES.length ? "Finish" : "Next case"}
        </button>
      </div>
    </div>
  );
}
