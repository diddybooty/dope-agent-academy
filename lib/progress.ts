"use client";

import type { ModuleId } from "./modules";

const KEY = "dope-academy-v1";

export type Progress = {
  name: string;
  done: Partial<Record<ModuleId, boolean>>;
  quizScore: number | null;
  quizPassed: boolean;
  gymScore: number | null;
  drillScore: number | null;
};

const empty: Progress = {
  name: "",
  done: {},
  quizScore: null,
  quizPassed: false,
  gymScore: null,
  drillScore: null,
};

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

export function saveProgress(next: Progress) {
  localStorage.setItem(KEY, JSON.stringify(next));
  window.dispatchEvent(new Event("dope-progress"));
}

export function patchProgress(partial: Partial<Progress>) {
  const cur = loadProgress();
  const next: Progress = {
    ...cur,
    ...partial,
    done: { ...cur.done, ...(partial.done ?? {}) },
  };
  saveProgress(next);
  return next;
}

export function markDone(id: ModuleId) {
  return patchProgress({ done: { [id]: true } });
}
