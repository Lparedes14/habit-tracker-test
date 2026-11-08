# Design: StudyStreak

_Written by the Design swarm (Swarms `GroupChat`: Architect, UX/UI Designer, Security Reviewer and MVP Cutter) for issue #1, from the approved PRD._

A mobile-first habit tracker is built as a Next.js app that uses Supabase JS client with anonymous sign-in for persistence across days and devices. The streak is computed client-side from the last 7 days of full completions with no custom backend API.

## Stack

| Layer | Choice | Why |
|---|---|---|
| Frontend | Next.js 14 App Router + TS + Tailwind | enables fast mobile-first UI with good DX and Vercel deployment |
| Database | Supabase Postgres | provides persistence and RLS for anonymous users as mandated |
| Client Library | @supabase/supabase-js | allows direct authenticated queries from browser without custom API routes |
| Hosting | Vercel | simple deployment for Next.js with easy env var management |

## Pages

| Route | Purpose | Components | Stories |
|---|---|---|---|
| `/` | main habit dashboard where user views today's date, adds habits via modal with preset chips, checks off habits, deletes them with confirmation, and sees first-visit tooltip | habit list, checkboxes, add modal, delete confirmation modal, tooltip, today header | US-1, US-2, US-3 |
| `/streak` | dedicated view to isolate and verify streak visualization and history | 7-flame row, streak counter, 7-day history bars | US-4 |

## Data model

### `habits`

stores each user's habits

- `id uuid pk`
- `user_id uuid references auth.users not null`
- `name text`
- `created_at timestamptz`

### `completions`

records whether a habit was completed on a specific date

- `id uuid pk`
- `habit_id uuid references habits on delete cascade`
- `date date`
- `completed bool`

## API routes
- None

## Security rules
- RLS enabled on every table with policies using auth.uid() = user_id for SELECT/INSERT/UPDATE/DELETE
- FK on user_id to auth.users(id) required and indexed
- completions table policy also filters date >= CURRENT_DATE - INTERVAL '7 days'
- BEFORE INSERT trigger on habits that raises exception when habit count per user_id >= 5
- client uses anon key only, never service_role, and always adds .eq('user_id', uid) filters
- anon auto-signin on load with no UI; each preview/incognito session is isolated fresh user
- habit name length ≤50, max 5 habits per user enforced in DB trigger and UI

## Environment variables (names only)
- `SUPABASE_URL`
- `SUPABASE_ANON_KEY`

## Decisions

| Topic | Decision | Why |
|---|---|---|
| persistence mechanism | Supabase anon sign-in + RLS over localStorage | data survives across days/devices to meet preservation metric |
| streak definition | consecutive days where all habits are completed (full-completion days) ending today | matches US and is computed client-side from last 7 days |
| onboarding | tooltip on first visit to / | satisfies open question and speeds first-use metric |
| quick-add presets | 4 common student habits on add modal | hits first-use metric and speeds onboarding |
| streak UI | 7 colored flames that intensify with current streak length | provides delight and visual separation on dedicated page |

## Scope: in
- all 4 user stories (habits, checks, 7-day streak, delete)
- 4 quick-add presets as chips in add modal
- onboarding tooltip on first visit
- dedicated /streak page for verifiable ACs

## Scope: out
- sync across devices
- history >7d
- reminders
- accounts UI
- sharing

## Risks
- streak edge cases (missing days, habit deletion mid-streak) — reduce by unit-testing computation in CI and manual incognito tests
- misconfigured RLS allowing cross-user data — reduce by auditing policies and testing in fresh incognito sessions

## Steps only a human can do
- create Supabase project in dashboard.supabase.com
- turn on Anonymous sign-ins under Authentication > Settings
- run the migration that the build writes under supabase/migrations in the Supabase SQL editor
- add SUPABASE_URL and SUPABASE_ANON_KEY in Vercel project settings
- add BEFORE INSERT trigger on habits and extra RLS date filter policy on completions

## Open questions
- exact visual design of intensifying flames to outperform existing trackers
