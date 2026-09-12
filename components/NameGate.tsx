"use client";

import { FormEvent, useEffect, useState } from "react";
import { loadProgress, startAgent } from "@/lib/progress";

export function NameGate({ children }: { children: React.ReactNode }) {
  const [ready, setReady] = useState(false);
  const [named, setNamed] = useState(false);
  const [name, setName] = useState("");

  useEffect(() => {
    const p = loadProgress();
    setName(p.name);
    setNamed(Boolean(p.name.trim() && p.id));
    setReady(true);
  }, []);

  if (!ready) return <div className="gate">Loading…</div>;
  if (named) return <>{children}</>;

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    const next = startAgent(name);
    if (next.name.trim() && next.id) setNamed(true);
  }

  return (
    <div className="gate">
      <p className="kicker">Dope Floor School</p>
      <h1>What’s your name?</h1>
      <p className="lede">
        Real name. Doel sees who started, which modules you finished, and your
        quiz score. You can’t skip this.
      </p>
      <form onSubmit={onSubmit}>
        <input
          autoFocus
          type="text"
          name="name"
          autoComplete="name"
          placeholder="First and last"
          value={name}
          onChange={(e) => setName(e.target.value)}
          minLength={2}
          required
        />
        <button className="btn" type="submit" disabled={name.trim().length < 2}>
          Start homework
        </button>
      </form>
    </div>
  );
}
