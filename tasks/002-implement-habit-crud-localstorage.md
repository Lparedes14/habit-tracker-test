# Task 002: Implement habit CRUD with localStorage persistence

_Part of StudyStreak (issue #1). Depends on: task 001. Stories: US-1, US-4._

Read `.cursor/rules/project.mdc`, `docs/PRD.md` and `docs/DESIGN.md` first. Implement only this task.

## Goal

Allow users to add up to 5 habits and delete them, with full localStorage persistence for habits.

## Files to touch
- `lib/storage.ts`
- `components/AddHabitModal.tsx`
- `components/HabitList.tsx`
- `app/page.tsx`

## Steps
1. Create lib/storage.ts with typed functions to load/save habits array (max 5) from localStorage
2. Implement AddHabitModal.tsx as a controlled dialog with input for habit name, Save/Cancel buttons, and logic to prevent adding beyond 5 habits
3. Update HabitList.tsx to render the list of habits with name, delete (×) button, and pass callbacks to parent
4. Wire AddHabitModal and HabitList into app/page.tsx with React state synced to storage, open/close modal logic, and prevent adds over limit
5. Ensure habits persist across page refresh and UI prevents >5 habits

## Acceptance criteria
- [ ] On first visit, the page shows an empty state with a prominent 'Add Habit' button
- [ ] Clicking 'Add Habit' opens a simple input form; after entering a name and clicking Save, the habit appears in the daily list
- [ ] I cannot add more than 5 habits (UI prevents additional entries when limit is reached)
- [ ] Habits are persisted in localStorage and reappear after a page refresh
- [ ] Each habit has a small delete (×) button

## Done when

Users can add (max 5) and delete habits that persist via localStorage across refreshes; UI blocks adding over limit.

## Out of scope
- Checkboxes, completions, streak logic, confirmation dialogs, date handling

## Pull request

Title: `[task-002] Implement habit CRUD with localStorage persistence`. The description says `Part of issue #1`. Run the app and the tests before you open the PR.
