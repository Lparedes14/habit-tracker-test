# Task 006: Add comprehensive tests and edge-case handling

_Part of StudyStreak (issue #1). Depends on: task 005. Stories: US-1, US-2, US-3, US-4._

Read `.cursor/rules/project.mdc`, `docs/PRD.md` and `docs/DESIGN.md` first. Implement only this task.

## Goal

Add unit tests for streak calculation, date utilities, and storage; ensure all acceptance criteria pass including persistence across refresh and delete impact.

## Files to touch
- `__tests__/streak.test.ts`
- `__tests__/storage.test.ts`
- `lib/streak.ts`
- `lib/storage.ts`

## Steps
1. Add Jest + React Testing Library to package.json if needed and configure test environment for localStorage
2. Write __tests__/storage.test.ts covering habit limits, completions CRUD, and delete purge behavior
3. Write __tests__/streak.test.ts with cases for current streak, all-habits-complete days, edge dates, and empty data
4. Refine lib/streak.ts and lib/storage.ts if tests reveal edge cases (e.g. date boundaries, missing habits)
5. Run full test suite and manual verification that every PRD acceptance criterion passes on refresh and after delete

## Acceptance criteria
- [ ] Habits are persisted in localStorage and reappear after a page refresh
- [ ] Checked habits show a different style (e.g. green checkmark and strikethrough) and remain checked after refresh
- [ ] Streak data and history persist correctly after closing and reopening the browser
- [ ] The streak correctly updates when today's habits are all checked off
- [ ] After deletion, the habit no longer appears on future days and the streak view updates accordingly

## Done when

All tests pass, edge cases are handled, and every acceptance criterion from the PRD can be verified in the browser.

## Out of scope
- New UI features

## Pull request

Title: `[task-006] Add comprehensive tests and edge-case handling`. The description says `Part of issue #1`. Run the app and the tests before you open the PR.
