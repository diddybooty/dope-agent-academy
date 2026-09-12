"use client";

import { useMemo, useState } from "react";
import { QUIZ } from "@/lib/quiz";
import { loadProgress, markDone, patchProgress } from "@/lib/progress";

function shuffle<T>(arr: T[]) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export function Quiz() {
  const order = useMemo(() => shuffle(QUIZ.map((_, i) => i)), []);
  const [step, setStep] = useState(0);
  const [picked, setPicked] = useState<number | null>(null);
  const [correct, setCorrect] = useState(0);
  const [misses, setMisses] = useState<string[]>([]);
  const [done, setDone] = useState(false);
  const [name, setName] = useState("");

  const q = QUIZ[order[step]];
  const total = QUIZ.length;

  function choose(idx: number) {
    if (picked !== null) return;
    setPicked(idx);
    if (idx === q.answer) setCorrect((c) => c + 1);
    else setMisses((m) => [...m, q.id]);
  }

  function next() {
    if (step + 1 >= total) {
      const passed = correct === total;
      patchProgress({
        quizScore: correct,
        quizPassed: passed,
        name: loadProgress().name,
      });
      if (passed) markDone("quiz");
      setDone(true);
      return;
    }
    setStep((s) => s + 1);
    setPicked(null);
  }

  if (done) {
    const passed = correct === total;
    return (
      <div className={passed ? "pass" : "fail"}>
        <h2>
          {passed ? "Floor test passed" : "Not yet"} · {correct}/{total}
        </h2>
        {passed ? (
          <>
            <p>
              100%. You can sit on the floor without leaking a special deal or
              mixing /refer into an agent book.
            </p>
            <p>
              Type your name, screenshot this, send it to Adam. Passing this is
              not permission to invent copy or mint invites.
            </p>
            <div className="row">
              <input
                type="text"
                placeholder="Your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <button
                className="btn"
                type="button"
                onClick={() => patchProgress({ name, quizPassed: true, quizScore: correct })}
              >
                Save name
              </button>
            </div>
            {name.trim() || loadProgress().name ? (
              <p style={{ marginTop: 16 }}>
                <strong>
                  {(name.trim() || loadProgress().name).toUpperCase()}
                </strong>{" "}
                passed Dope Floor School — 22/22 — NGR only, XOR, geo honest.
              </p>
            ) : null}
          </>
        ) : (
          <>
            <p>
              Hire track is 100%. Misses are below. Re-read the module, then
              retake. Do not send as if you passed.
            </p>
            <ul>
              {misses.map((id) => {
                const item = QUIZ.find((x) => x.id === id);
                return (
                  <li key={id}>
                    <strong>{item?.q}</strong>
                    <br />
                    {item?.why}
                  </li>
                );
              })}
            </ul>
            <button
              className="btn"
              type="button"
              onClick={() => window.location.reload()}
            >
              Retake (new shuffle)
            </button>
          </>
        )}
      </div>
    );
  }

  return (
    <div>
      <p className="progress-mini">
        Q {step + 1} / {total} · {correct} correct · 100% to pass
      </p>
      <h2 style={{ marginTop: 0 }}>{q.q}</h2>
      {q.choices.map((c, idx) => {
        let cls = "choice";
        if (picked !== null) {
          if (idx === q.answer) cls += " ok";
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
            {c}
          </button>
        );
      })}
      {picked !== null ? (
        <div className={picked === q.answer ? "good" : "never"} style={{ marginTop: 14 }}>
          <strong>{picked === q.answer ? "Correct" : "Wrong"}</strong>
          {q.why}
        </div>
      ) : null}
      <div className="row" style={{ marginTop: 16 }}>
        <button className="btn" type="button" disabled={picked === null} onClick={next}>
          {step + 1 === total ? "See result" : "Next"}
        </button>
      </div>
    </div>
  );
}
