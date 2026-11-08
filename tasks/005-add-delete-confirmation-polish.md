# Task 005: Add delete confirmation and final polish

_Part of StudyStreak (issue #1). Depends on: task 004. Stories: US-4._

Read `.cursor/rules/project.mdc`, `docs/PRD.md` and `docs/DESIGN.md` first. Implement only this task.

## Goal

Add confirmation dialog for delete, ensure streak updates correctly after deletion, and finalize layout, a11y, and responsive behavior.

## Files to touch
- `components/DeleteConfirmModal.tsx`
- `components/HabitList.tsx`
- `app/page.tsx`

## Steps
1. Create DeleteConfirmModal.tsx as a simple confirmation dialog with habit name, Cancel/Delete buttons
2. Update HabitList.tsx to open the confirmation modal before deleting and call storage purge for that habit from all past completions
3. Wire modal and updated delete flow into app/page.tsx ensuring streak recalculates after purge
4. Apply final mobile-first Tailwind polish, add proper ARIA labels, keyboard support, focus management, and responsive behavior across all components
5. Verify all prior acceptance criteria still pass

## Acceptance criteria
- [ ] Each habit has a small delete (×) button
- [ ] Clicking delete shows a confirmation and removes the habit from the list and from all past streak data
- [ ] After deletion, the habit no longer appears on future days and the streak view updates accordingly

## Done when

Delete flow includes confirmation, purges history, updates streak instantly, and entire UI is polished, accessible, and responsive.

## Out of scope
- Onboarding tooltip, presets, any backend or auth

## Pull request

Title: `[task-005] Add delete confirmation and final polish`. The description says `Part of issue #1`. Run the app and the tests before you open the PR.
