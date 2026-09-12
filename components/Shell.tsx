"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { MODULES } from "@/lib/modules";
import { loadProgress, type Progress } from "@/lib/progress";
import { NameGate } from "./NameGate";

export function Shell({ children }: { children: React.ReactNode }) {
  const path = usePathname();
  const [p, setP] = useState<Progress | null>(null);
  const desk = path.replace(/\/$/, "") === "/desk";

  useEffect(() => {
    const read = () => setP(loadProgress());
    read();
    window.addEventListener("dope-progress", read);
    window.addEventListener("storage", read);
    return () => {
      window.removeEventListener("dope-progress", read);
      window.removeEventListener("storage", read);
    };
  }, []);

  const doneCount = p ? MODULES.filter((m) => p.done[m.id]).length : 0;
  const pct = Math.round((doneCount / MODULES.length) * 100);

  const body = desk ? children : <NameGate>{children}</NameGate>;

  return (
    <div className="app">
      <aside className="rail">
        <div className="brand">
          <em>Dope · internal</em>
          <strong>Floor school</strong>
        </div>
        {p?.name ? <p className="you">Signed in as {p.name}</p> : null}
        <div className="meter">
          <div className="bar">
            <i style={{ width: `${pct}%` }} />
          </div>
          <p>
            {doneCount}/{MODULES.length} modules
            {p?.quizPassed ? " · quiz passed" : ""}
          </p>
        </div>
        <nav className="nav">
          {MODULES.map((m) => {
            const on = path === m.href || path === `${m.href}/`;
            const tick = p?.done[m.id];
            return (
              <Link key={m.id} href={m.href} className={on ? "on" : ""}>
                <span className="n">{m.num}</span>
                <span>{m.title}</span>
                <span className="tick">{tick ? "done" : ""}</span>
              </Link>
            );
          })}
        </nav>
        <div className="rail-foot">
          18+ · play responsibly
          <br />
          Facts from the company brain + live{" "}
          <a href="https://dope.xyz" target="_blank" rel="noreferrer">
            dope.xyz
          </a>
          . Not a player promo. Don’t post this in a public bio.
        </div>
      </aside>
      <main className="main">
        <div className="wrap">{body}</div>
      </main>
    </div>
  );
}
