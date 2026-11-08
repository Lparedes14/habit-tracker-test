"use client";

import { useEffect, useState } from "react";
import AddHabitModal from "@/components/AddHabitModal";
import HabitList from "@/components/HabitList";
import StreakCalendar from "@/components/StreakCalendar";

function formatLocalISODate(date: Date): string {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

export default function Home() {
  const [today, setToday] = useState<string | null>(null);
  const [weekday, setWeekday] = useState<string | null>(null);

  useEffect(() => {
    const now = new Date();
    setToday(formatLocalISODate(now));
    setWeekday(now.toLocaleDateString("en-US", { weekday: "long" }));
  }, []);

  return (
    <main className="mx-auto flex min-h-screen w-full max-w-md flex-col gap-5 px-4 py-6 sm:py-10">
      <header className="flex items-start justify-between gap-4">
        <div>
          <p className="text-sm font-medium text-habit">Daily habits</p>
          <h1 className="text-3xl font-semibold tracking-tight">StudyStreak</h1>
        </div>
        <div className="text-right">
          <p className="text-xs font-medium uppercase tracking-wide text-muted">
            Today
          </p>
          <p className="text-sm font-medium" aria-live="polite">
            {weekday ?? "—"}
          </p>
          <time
            dateTime={today ?? undefined}
            className="text-sm font-semibold tabular-nums"
          >
            {today ?? "YYYY-MM-DD"}
          </time>
        </div>
      </header>

      <StreakCalendar />

      <section
        aria-labelledby="empty-heading"
        className="flex flex-col gap-4 rounded-2xl border border-line bg-surface p-5 shadow-sm"
      >
        <h2 id="empty-heading" className="text-lg font-semibold">
          No habits yet
        </h2>
        <p className="text-sm leading-6 text-muted">
          Add up to 5 daily habits. They stay on this device only — a private
          window or clearing browser data removes them.
        </p>
        <HabitList />
        <button
          type="button"
          className="mt-1 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-xl bg-habit-strong px-4 py-3 text-base font-semibold text-white shadow-sm hover:bg-habit focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground"
        >
          <svg
            aria-hidden="true"
            viewBox="0 0 20 20"
            className="h-5 w-5"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M10 4v12M4 10h12" strokeLinecap="round" />
          </svg>
          Add Habit
        </button>
      </section>

      <AddHabitModal />
    </main>
  );
}
