# Task 003: Daily completions with checkboxes (US-2)

_Part of StudyStreak (issue #1). Depends on: task 002. Stories: US-2._

Read `.cursor/rules/project.mdc`, `docs/PRD.md` and `docs/DESIGN.md` first. Implement only this task.

## Goal

Add today’s date header, per-habit checkboxes that write to the completions table, visual feedback (strikethrough + green), and ensure state survives refresh using Supabase queries.

## Files to touch
- `src/components/HabitList.tsx`
- `src/app/page.tsx`
- `lib/habits.ts`

## Steps
1. Create lib/habits.ts with helper functions to fetch habits, toggle completion for a date, and query today's completions
2. Build src/components/HabitList.tsx that receives habits and renders each with a large checkbox for today
3. Integrate HabitList into src/app/page.tsx with a clear header showing today's full date
4. On checkbox toggle, update the completions table in Supabase (upsert with date = today) and refresh UI
5. Show completed habits with green checkmark, strikethrough text, and different background
6. Allow unchecking a habit and ensure changes are persisted and restored on refresh
7. Clearly separate today's habits section from where the streak will appear later

## Acceptance criteria
- [ ] Each habit displays a checkbox for today; clicking it marks the habit as complete with a visual change
- [ ] Checked habits show a different style (e.g. green checkmark and strikethrough) and remain checked after refresh
- [ ] Unchecking a habit is possible and updates instantly
- [ ] The UI clearly separates today's date and habits from the streak view

## Done when

Users can check and uncheck daily habits with visual feedback that persists across refreshes via Supabase.

## Out of scope
- Streak UI, delete button, /streak page, tooltip

## Pull request

Title: `[task-003] Daily completions with checkboxes (US-2)`. The description says `Part of issue #1`. Run the app and the tests before you open the PR.
