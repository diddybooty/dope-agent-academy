"use client";

import { API_BASE } from "./config";
import type { Progress } from "./progress";

export type SyncEvent = "start" | "progress" | "quiz";

export async function syncProgress(
  p: Progress,
  event: SyncEvent = "progress",
): Promise<void> {
  if (!API_BASE || !p.id || !p.name.trim()) return;
  const body = JSON.stringify({
    id: p.id,
    name: p.name.trim(),
    done: p.done,
    quizScore: p.quizScore,
    quizPassed: p.quizPassed,
    gymScore: p.gymScore,
    drillScore: p.drillScore,
    quizMisses: p.quizMisses ?? [],
    quizAttempts: p.quizAttempts ?? 0,
    startedAt: p.startedAt,
    event,
  });
  try {
    await fetch(`${API_BASE}/progress`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body,
      keepalive: true,
    });
  } catch {
    // local progress still saved
  }
}
