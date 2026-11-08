# Task 002: Add habits (US-1) with DB trigger and add modal

_Part of StudyStreak (issue #1). Depends on: task 001. Stories: US-1._

Read `.cursor/rules/project.mdc`, `docs/PRD.md` and `docs/DESIGN.md` first. Implement only this task.

## Goal

Implement the full habit creation flow with a modal containing preset chips, enforce the 5-habit limit via the DB trigger, persist via Supabase, and show the habit list on the main dashboard.

## Files to touch
- `src/components/AddHabitModal.tsx`
- `src/app/page.tsx`
- `src/types/index.ts`
- `supabase/migrations/000001_create_initial_tables.sql`

## Steps
1. Create src/types/index.ts with TypeScript interfaces for Habit and Completion
2. Update the migration file if needed to match the exact schema (habits and completions tables, trigger for max 5 habits)
3. Build src/components/AddHabitModal.tsx with a dialog that includes 4 preset chips (Study, Exercise, Water, Sleep), a text input (max 50 chars), and Save/Cancel buttons
4. Integrate the modal into src/app/page.tsx so clicking 'Add Habit' opens it
5. On save, insert the habit into Supabase with the current user's ID, refresh the habit list, and close the modal
6. Display the list of habits below the header in the main page (simple list for now)
7. Prevent adding more than 5 habits in the UI (disable button when limit reached) and rely on DB trigger for enforcement
8. Ensure habits are fetched on load and after adding using Supabase with proper user_id filter

## Acceptance criteria
- [ ] On first visit, the page shows an empty state with a prominent 'Add Habit' button
- [ ] Clicking 'Add Habit' opens a simple input form with preset chips; after entering a name and clicking Save, the habit appears in the daily list
- [ ] I cannot add more than 5 habits (UI prevents additional entries when limit is reached)
- [ ] Habits are persisted in Supabase and reappear after a page refresh

## Done when

Users can add up to 5 habits via the modal with presets; habits persist across refreshes via Supabase and the 5-habit limit is enforced.

## Out of scope
- Checking off habits, streak visualization, delete functionality, /streak page, tooltip

## Pull request

Title: `[task-002] Add habits (US-1) with DB trigger and add modal`. The description says `Part of issue #1`. Run the app and the tests before you open the PR.
