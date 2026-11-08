# Task 004: 7-day streak visualization (US-3) + dedicated /streak page

_Part of StudyStreak (issue #1). Depends on: task 003. Stories: US-3._

Read `.cursor/rules/project.mdc`, `docs/PRD.md` and `docs/DESIGN.md` first. Implement only this task.

## Goal

Implement client-side streak computation (consecutive full-completion days), display a flame row + counter on the main page, and build a clean dedicated `/streak` page with intensified flame visuals and 7-day history.

## Files to touch
- `src/components/StreakFlames.tsx`
- `src/app/streak/page.tsx`
- `lib/streak.ts`
- `src/app/page.tsx`

## Steps
1. Create lib/streak.ts with functions to fetch last 7 days of completions and compute current streak (consecutive days where all habits were completed)
2. Build src/components/StreakFlames.tsx that renders 7 flame icons (use emoji or SVG) that intensify in color based on streak length
3. Add the StreakFlames component to the main dashboard in src/app/page.tsx below the habits list with current streak counter
4. Create a dedicated src/app/streak/page.tsx with a larger, more detailed flame visualization, streak counter, and 7-day history bars
5. Update streak when today's habits are all checked off
6. Ensure all streak data is queried from Supabase with date filters and persists correctly

## Acceptance criteria
- [ ] A dedicated streak section shows the last 7 days as a row of circles or bars
- [ ] Days where all habits were completed are highlighted (e.g. filled green) with a current streak counter displayed
- [ ] The streak correctly updates when today's habits are all checked off
- [ ] Streak data and history persist correctly after closing and reopening the browser

## Done when

The 7-day streak is computed and displayed with delightful flame visuals on both the main page and dedicated /streak page, updating correctly with completions.

## Out of scope
- Delete habit, confirmation modals, tooltip

## Pull request

Title: `[task-004] 7-day streak visualization (US-3) + dedicated /streak page`. The description says `Part of issue #1`. Run the app and the tests before you open the PR.
