# Task 004: Build streak visualization and calculation logic

_Part of StudyStreak (issue #1). Depends on: task 003. Stories: US-3._

Read `.cursor/rules/project.mdc`, `docs/PRD.md` and `docs/DESIGN.md` first. Implement only this task.

## Goal

Display a 7-day streak row with correct highlighting and counter, fully driven by persisted completion data.

## Files to touch
- `lib/streak.ts`
- `components/StreakCalendar.tsx`
- `app/page.tsx`

## Steps
1. Implement lib/streak.ts with calculateStreak() that computes current consecutive days (all habits completed) ending today using completions data
2. Build StreakCalendar.tsx to render a horizontal row of 7 labeled date circles/bars, highlight completed days in green, and display current streak counter
3. Integrate StreakCalendar into app/page.tsx so it re-renders when completions change and correctly reflects today's check-offs
4. Ensure streak only considers days where every habit was completed and never looks into the future

## Acceptance criteria
- [ ] A dedicated streak section shows the last 7 days as a row of circles or bars
- [ ] Days where all habits were completed are highlighted (e.g. filled green) with a current streak counter displayed
- [ ] The streak correctly updates when today's habits are all checked off
- [ ] Streak data and history persist correctly after closing and reopening the browser

## Done when

7-day streak row displays with accurate highlighting and counter that updates live from persisted data.

## Out of scope
- Delete confirmation dialog, any polish beyond functional ACs

## Pull request

Title: `[task-004] Build streak visualization and calculation logic`. The description says `Part of issue #1`. Run the app and the tests before you open the PR.
