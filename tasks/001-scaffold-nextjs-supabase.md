# Task 001: Scaffold Next.js + Supabase client with anonymous auth and empty dashboard

_Part of StudyStreak (issue #1). Depends on: none. Stories: none listed._

Read `.cursor/rules/project.mdc`, `docs/PRD.md` and `docs/DESIGN.md` first. Implement only this task.

## Goal

Create a working Next.js 14 app that builds, deploys to Vercel preview, auto-signs in anonymously to Supabase on load, shows a clean mobile-first empty state, and reads the required environment variables.

## Files to touch
- `package.json`
- `src/app/globals.css`
- `src/app/layout.tsx`
- `src/app/page.tsx`
- `lib/supabase.ts`
- `supabase/migrations/000001_create_initial_tables.sql`

## Steps
1. Initialize a new Next.js 14 project with TypeScript and Tailwind using create-next-app
2. Install @supabase/supabase-js and date-fns
3. Create lib/supabase.ts with a createClient function that uses process.env.NEXT_PUBLIC_SUPABASE_URL and process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
4. Update src/app/layout.tsx with proper metadata, Tailwind, and a root layout that includes a mobile viewport
5. Implement anonymous sign-in on app load in a client component using the Supabase client
6. Create a clean mobile-first empty dashboard in src/app/page.tsx with a header showing today's date and a prominent 'Add Habit' button (non-functional for now)
7. Write the initial Supabase migration in supabase/migrations/000001_create_initial_tables.sql that creates the habits and completions tables with proper foreign keys, indexes, and RLS policies as defined in the design
8. Update package.json with necessary scripts and dependencies
9. Ensure the app builds and runs with 'npm run build' and shows the empty state

## Acceptance criteria
- [ ] The app loads with a clean mobile-first empty state showing today's date and a prominent 'Add Habit' button
- [ ] On first load, it automatically signs in anonymously to Supabase (check browser console or network tab for auth call)
- [ ] Environment variables SUPABASE_URL and SUPABASE_ANON_KEY are read from NEXT_PUBLIC_ prefixed env vars
- [ ] The migration file contains the correct tables, RLS policies, and BEFORE INSERT trigger for max 5 habits
- [ ] Page is fully responsive and looks good on mobile

## Done when

The app scaffolds successfully, connects to Supabase anonymously, shows the empty dashboard, and the migration is ready for the human to run in the Supabase dashboard.

## Out of scope
- Any habits, checkboxes, streak UI, modals, or tooltip

## Pull request

Title: `[task-001] Scaffold Next.js + Supabase client with anonymous auth and empty dashboard`. The description says `Part of issue #1`. Run the app and the tests before you open the PR.
