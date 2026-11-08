# Design: StudyStreak

_Written by the Design swarm (Swarms `GroupChat`: Architect, UX/UI Designer, Security Reviewer and MVP Cutter) for issue #1, from the approved PRD._

A single-page habit tracker that lets users add up to 5 daily study habits, mark them complete for today, and visualize a 7-day streak. It is built entirely client-side with Next.js App Router, TypeScript, Tailwind, and localStorage persistence with no backend or accounts.

## Stack

| Layer | Choice | Why |
|---|---|---|
| Frontend | Next.js (App Router, TS) + Tailwind | Matches PRD and founder mandate for simple local-only web app |
| Persistence | localStorage only | Explicit PRD requirement of local persistence without any backend |
| Hosting | Vercel | Zero-config deployment for a static client-only Next.js app |

## Pages

| Route | Purpose | Components | Stories |
|---|---|---|---|
| `/` | add/view habits, check off today's, see streak | HabitList, StreakCalendar, AddHabitModal, DeleteConfirm | US-1, US-2, US-3, US-4 |

## Data model

### `localStorage`

persist habits and daily completions client-side

- `habits: string[] (max 5 names)`
- `completions: Record<string, string[]> (YYYY-MM-DD → completed habit names)`

## API routes
- None

## Security rules
- All persistence is localStorage-only; no network requests or backend

## Environment variables (names only)
- None

## Decisions

| Topic | Decision | Why |
|---|---|---|
| localStorage vs Supabase | localStorage | explicit PRD goal of no backend or accounts |
| Streak definition | current consecutive days ending today where every habit was completed that day | simple and matches AC |
| Presets | none | out of scope for MVP |
| Onboarding | no tooltip | cut for MVP simplicity |
| Delete impact | purge that habit from all past completions | matches AC |
| Mobile-first single-column layout | header with title/date, streak row of 7 labeled circles, habit list with checkboxes and delete, floating + button, empty state | ensures every AC and a11y is browser-checkable |
| Streak calc | ends on today only (no future dates) | avoids complexity |
| Max habits | 5 enforced at add time | keeps UI simple |

## Scope: in
- all 4 US: add habits, mark complete, view streak, delete habit with history purge

## Scope: out
- accounts, sync, >7d history, reminders, presets, cross-device, sharing

## Risks
- streak calc edge cases on date boundaries (reduce with exhaustive date tests in component)
- localStorage cleared on private browsing or manual clear – document in empty state

## Steps only a human can do
- None

## Open questions
- Should we pre-populate 3 common student habits on first visit despite 'no presets' out-of-scope?
