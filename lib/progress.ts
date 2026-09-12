"use client";

import type { ModuleId } from "./modules";
import { syncProgress, type SyncEvent } from "./sync";

const KEY = "dope-academy-v1";

export type Progress = {
  id: string;
  name: string;
  startedAt: string;
  done: Partial<Record<ModuleId, boolean>>;
  quizScore: number | null;
  quizPassed: boolean;
  quizMisses: string[];
  quizAttempts: number;
  gymScore: number | null;
  drillScore: number | null;
};

const empty: Progress = {
  id: "",
  name: "",
  startedAt: "",
  done: {},
  quizScore: null,
  quizPassed: false,
  quizMisses: [],
  quizAttempts: 0,
  gymScore: null,
  drillScore: null,
};

function uid() {
  if (typeof crypto !== "undefined" && crypto.randomUUID) return crypto.randomUUID();
  return `a_${Date.now()}_${Math.random().toString(16).slice(2)}`;
}

export function loadProgress(): Progress {
  if (typeof window === "undefined") return empty;
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) return empty;
    return { ...empty, ...JSON.parse(raw) };
  } catch {
    return empty;
  }
}

export function saveProgress(next: Progress, event: SyncEvent = "progress") {
  localStorage.setItem(KEY, JSON.stringify(next));
  window.dispatchEvent(new Event("dope-progress"));
  void syncProgress(next, event);
}

export function patchProgress(partial: Partial<Progress>, event: SyncEvent = "progress") {
  const cur = loadProgress();
  const next: Progress = {
    ...cur,
    ...partial,
    done: { ...cur.done, ...(partial.done ?? {}) },
  };
  saveProgress(next, event);
  return next;
}

export function markDone(id: ModuleId) {
  return patchProgress({ done: { [id]: true } });
}

export function startAgent(name: string) {
  const cur = loadProgress();
  const trimmed = name.trim();
  if (!trimmed) return cur;
  if (cur.id && cur.name) {
    return patchProgress({ name: trimmed }, "start");
  }
  return patchProgress(
    {
      id: uid(),
      name: trimmed,
      startedAt: new Date().toISOString(),
    },
    "start",
  );
}
