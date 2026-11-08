# Task 005: Delete habits with confirmation + cleanup (US-4)

_Part of StudyStreak (issue #1). Depends on: task 004. Stories: US-4._

Read `.cursor/rules/project.mdc`, `docs/PRD.md` and `docs/DESIGN.md` first. Implement only this task.

## Goal

Add delete (×) button per habit, confirmation modal, cascade deletion from completions, update streak after removal, and ensure streak/history stays correct.

## Files to touch
- `src/components/DeleteConfirmationModal.tsx`
- `src/components/HabitList.tsx`
- `lib/habits.ts`
- `src/app/page.tsx`

## Steps
1. Create src/components/DeleteConfirmationModal.tsx with a clear confirmation dialog
2. Update HabitList.tsx to include a small × delete button next to each habit that opens the confirmation modal
3. On confirmed delete, remove the habit and all its completions from Supabase (using cascade)
4. Refresh both habit list and streak display after deletion
5. Update lib/habits.ts with a deleteHabit function that cleans up related data
6. Ensure deleting a habit correctly updates the streak and 7-day history

## Acceptance criteria
- [ ] Each habit has a small delete (×) button
- [ ] Clicking delete shows a confirmation and removes the habit from the list and from all past streak data
- [ ] After deletion, the habit no longer appears on future days and the streak view updates accordingly

## Done when

Users can delete habits with confirmation; deletions cascade properly and streak/history updates correctly.

## Out of scope
- Tooltip, any new features

## Pull request

Title: `[task-005] Delete habits with confirmation + cleanup (US-4)`. The description says `Part of issue #1`. Run the app and the tests before you open the PR.
