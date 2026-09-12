"use client";

import { useEffect, useState } from "react";
import { HELP, LICENCE, REFER, RESTRICTED, SITE } from "@/lib/modules";
import { markDone } from "@/lib/progress";

const TASKS = [
  {
    id: "licence",
    href: LICENCE,
    t: "Open /licence. Confirm entity 3-102-938908 SRL and licence ALSI-202511053-FI2.",
  },
  {
    id: "geo",
    href: RESTRICTED,
    t: "Open /restricted-territories. Tick that US and UK are named (also AU, FR, NL, ES).",
  },
  {
    id: "originals",
    href: `${SITE}/casino/originals`,
    t: "Open Originals. 17 titles. Provably fair is here — not on every slot.",
  },
  {
    id: "sports",
    href: `${SITE}/sports`,
    t: "Open /sports. It is live. Don’t tell anyone sports is unshipped.",
  },
  {
    id: "refer",
    href: REFER,
    t: "Open /refer. This is affiliate only. You will never send an agent here as their pay.",
  },
  {
    id: "rewards",
    href: `${SITE}/rewards`,
    t: "Open /rewards. Instant rakeback is a player product. Not agent NGR. Not lossback.",
  },
  {
    id: "help",
    href: HELP,
    t: "Open /help. Support is 24/7 in the menu. Never seed / magic link / “move funds” DMs.",
  },
] as const;

const KEY = "dope-academy-walk";

export function Scavenger() {
  const [on, setOn] = useState<Record<string, boolean>>({});

  useEffect(() => {
    try {
      const raw = localStorage.getItem(KEY);
      if (raw) setOn(JSON.parse(raw));
    } catch {
      /* ignore */
    }
  }, []);

  function toggle(id: string) {
    const next = { ...on, [id]: !on[id] };
    setOn(next);
    localStorage.setItem(KEY, JSON.stringify(next));
    if (TASKS.every((t) => next[t.id])) markDone("site");
  }

  const n = TASKS.filter((t) => on[t.id]).length;

  return (
    <div>
      <p className="progress-mini">
        Walked {n}/{TASKS.length} live pages — check them off after you actually open them
      </p>
      {TASKS.map((t) => (
        <label className="check" key={t.id}>
          <input
            type="checkbox"
            checked={!!on[t.id]}
            onChange={() => toggle(t.id)}
          />
          <span>
            <a href={t.href} target="_blank" rel="noreferrer">
              {t.href.replace("https://dope.xyz", "") || "/"}
            </a>
            {" — "}
            {t.t}
          </span>
        </label>
      ))}
    </div>
  );
}
