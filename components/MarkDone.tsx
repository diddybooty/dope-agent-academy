"use client";

import { useEffect, useState } from "react";
import type { ModuleId } from "@/lib/modules";
import { loadProgress, markDone } from "@/lib/progress";

export function MarkDone({ id, label }: { id: ModuleId; label?: string }) {
  const [on, setOn] = useState(false);
  useEffect(() => {
    setOn(!!loadProgress().done[id]);
  }, [id]);
  return (
    <div className="row" style={{ marginTop: 28 }}>
      <button
        className="btn"
        type="button"
        onClick={() => {
          markDone(id);
          setOn(true);
        }}
        disabled={on}
      >
        {on ? "Marked complete" : label ?? "Mark this module complete"}
      </button>
    </div>
  );
}
