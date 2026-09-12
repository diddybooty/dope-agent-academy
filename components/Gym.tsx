"use client";

import { useState } from "react";
import { GYM } from "@/lib/gym";
import { markDone, patchProgress } from "@/lib/progress";

export function Gym() {
  const [i, setI] = useState(0);
  const [picked, setPicked] = useState<number | null>(null);
  const [correct, setCorrect] = useState(0);
  const [done, setDone] = useState(false);

  const q = GYM[i];
  const total = GYM.length;

  function choose(idx: number) {
    if (picked !== null) return;
    setPicked(idx);
    if (q.choices[idx].ok) setCorrect((c) => c + 1);
  }

  function next() {
    if (i + 1 >= total) {
      patchProgress({ gymScore: correct });
      markDone("objections");
      setDone(true);
      return;
    }
    setI((n) => n + 1);
    setPicked(null);
  }

  if (done) {
    return (
      <div className={correct === total ? "pass" : "fail"}>
        <h2>
          Gym: {correct}/{total}
        </h2>
        <p>
          {correct === total
            ? "You held the line. Same offer, split the product, one next step."
            : "Misses are the special-deal reflex. Re-run it. The house that auctions % trains partners to shop."}
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
          Run it again
        </button>
      </div>
    );
  }

  return (
    <div>
      <p className="progress-mini">
        Pressure {i + 1} / {total} · held {correct}
      </p>
      {q.setup ? (
        <p className="lede" style={{ fontSize: 15 }}>
          {q.setup}
        </p>
      ) : null}
      <div className="card" style={{ marginBottom: 14 }}>
        <div className="meta">They say</div>
        <h3 style={{ marginBottom: 0 }}>{q.they}</h3>
      </div>
      {q.choices.map((c, idx) => {
        let cls = "choice";
        if (picked !== null) {
          if (c.ok) cls += " ok";
          else if (idx === picked) cls += " no";
        }
        return (
          <button
            key={idx}
            type="button"
            className={cls}
            disabled={picked !== null}
            onClick={() => choose(idx)}
          >
            {c.t}
          </button>
        );
      })}
      {picked !== null ? (
        <div
          className={q.choices[picked].ok ? "good" : "never"}
          style={{ marginTop: 14 }}
        >
          <strong>{q.choices[picked].ok ? "Hold" : "Leak"}</strong>
          {q.choices[picked].why}
        </div>
      ) : null}
      <div className="row" style={{ marginTop: 16 }}>
        <button className="btn" type="button" disabled={picked === null} onClick={next}>
          {i + 1 === total ? "Finish gym" : "Next pressure"}
        </button>
      </div>
    </div>
  );
}
