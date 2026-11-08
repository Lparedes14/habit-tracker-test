# Task 003: Add daily completion tracking with checkboxes

_Part of StudyStreak (issue #1). Depends on: task 002. Stories: US-2, US-4._

Read `.cursor/rules/project.mdc`, `docs/PRD.md` and `docs/DESIGN.md` first. Implement only this task.

## Goal

Enable checking/unchecking of today’s habits with visual feedback and localStorage persistence of completions.

## Files to touch
- `lib/storage.ts`
- `lib/date.ts`
- `components/HabitList.tsx`
- `app/page.tsx`

## Steps
1. Extend lib/storage.ts with functions to load/save completions as Record<string, string[]> (date → habit names)
2. Create lib/date.ts with getToday() and format utilities returning YYYY-MM-DD strings
3. Update HabitList.tsx to show today's date, render checkbox per habit, handle toggle with visual strikethrough/green style, and persist completions
4. Integrate into app/page.tsx so checkboxes update instantly, persist on refresh, and UI separates date/habits from streak area
5. Ensure unchecking works and today's completions are isolated from streak

## Acceptance criteria
- [ ] Each habit displays a checkbox for today; clicking it marks the habit as complete with a visual change
- [ ] Checked habits show a different style (e.g. green checkmark and strikethrough) and remain checked after refresh
- [ ] Unchecking a habit is possible and updates instantly
- [ ] The UI clearly separates today's date and habits from the streak view
- [ ] Clicking delete shows a confirmation and removes the habit from the list and from all past streak data

## Done when

Habits can be checked/unchecked for today with visual feedback; all completion data persists correctly in localStorage.

## Out of scope
- Streak visualization and calculation

## Pull request

Title: `[task-003] Add daily completion tracking with checkboxes`. The description says `Part of issue #1`. Run the app and the tests before you open the PR.
