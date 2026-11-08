# Task 001: Scaffold Next.js app with basic layout and empty state

_Part of StudyStreak (issue #1). Depends on: none. Stories: US-1._

Read `.cursor/rules/project.mdc`, `docs/PRD.md` and `docs/DESIGN.md` first. Implement only this task.

## Goal

Create a working Next.js + TypeScript + Tailwind app that builds and shows the initial mobile-first empty state on Vercel preview.

## Files to touch
- `app/globals.css`
- `app/layout.tsx`
- `app/page.tsx`
- `components/HabitList.tsx`
- `components/StreakCalendar.tsx`
- `components/AddHabitModal.tsx`

## Steps
1. Create a new Next.js 15 app with TypeScript and Tailwind using create-next-app
2. Update app/globals.css with mobile-first Tailwind base styles and custom habit/streak theme colors
3. Implement app/layout.tsx with proper metadata, viewport, and a clean sans-serif font
4. Build app/page.tsx with a mobile-first single-column layout: header with title and today's date, empty state message with prominent 'Add Habit' button, and placeholders for StreakCalendar and HabitList
5. Create stub components for HabitList.tsx, StreakCalendar.tsx, and AddHabitModal.tsx that render minimal placeholders matching the design
6. Ensure the app builds cleanly, runs on localhost, and deploys to Vercel preview with responsive empty state

## Acceptance criteria
- [ ] On first visit, the page shows an empty state with a prominent 'Add Habit' button

## Done when

The app builds, runs, and displays a clean mobile-first empty state page with header, date, and Add Habit button.

## Out of scope
- Any localStorage logic, habit persistence, streak calculation, checkboxes, delete functionality, or modals that actually open

## Pull request

Title: `[task-001] Scaffold Next.js app with basic layout and empty state`. The description says `Part of issue #1`. Run the app and the tests before you open the PR.
