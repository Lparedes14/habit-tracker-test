"use client";

import { useEffect, useState } from "react";

type DayMark = {
  iso: string;
  weekday: string;
  dayNum: string;
};

const WEEKDAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"] as const;

function toISODate(date: Date): string {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function lastSevenDays(today: Date): DayMark[] {
  return Array.from({ length: 7 }, (_, index) => {
    const date = new Date(today);
    date.setDate(today.getDate() - (6 - index));
    return {
      iso: toISODate(date),
      weekday: WEEKDAYS[date.getDay()],
      dayNum: String(date.getDate()),
    };
  });
}

const placeholders: DayMark[] = Array.from({ length: 7 }, (_, index) => ({
  iso: `placeholder-${index}`,
  weekday: "—",
  dayNum: "",
}));

export default function StreakCalendar() {
  const [days, setDays] = useState<DayMark[]>(placeholders);

  useEffect(() => {
    setDays(lastSevenDays(new Date()));
  }, []);

  return (
    <section
      aria-label="7-day streak"
      className="rounded-2xl border border-line bg-surface p-4 shadow-sm"
    >
      <div className="mb-3 flex items-baseline justify-between gap-3">
        <h2 className="text-sm font-semibold">7-day streak</h2>
        <p className="text-xs text-muted">Your week will light up here.</p>
      </div>
      <ol className="grid grid-cols-7 gap-1">
        {days.map((day) => (
          <li key={day.iso} className="flex flex-col items-center gap-1">
            <span
              className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-streak-muted bg-surface text-xs font-semibold text-muted"
              role="img"
              aria-label={
                day.dayNum
                  ? `${day.iso} not tracked yet`
                  : "Streak day placeholder"
              }
            >
              {day.dayNum}
            </span>
            <span className="text-[10px] font-medium uppercase tracking-wide text-muted">
              {day.weekday}
            </span>
          </li>
        ))}
      </ol>
    </section>
  );
}
