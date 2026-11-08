# Tasks: StudyStreak

_Written by the Plan swarm (Swarms `SequentialWorkflow`: Tech Lead, then Cursor Prompt Writer) for issue #1. Cursor builds one task at a time, in this order._

| # | Task | Depends on | Stories | File |
|---|---|---|---|---|
| 001 | Scaffold Next.js + Supabase client with anonymous auth and empty dashboard | - | - | `tasks/001-scaffold-nextjs-supabase.md` |
| 002 | Add habits (US-1) with DB trigger and add modal | 001 | US-1 | `tasks/002-add-habits-with-modal.md` |
| 003 | Daily completions with checkboxes (US-2) | 002 | US-2 | `tasks/003-daily-completions-checkboxes.md` |
| 004 | 7-day streak visualization (US-3) + dedicated /streak page | 003 | US-3 | `tasks/004-streak-visualization-and-page.md` |
| 005 | Delete habits with confirmation + cleanup (US-4) | 004 | US-4 | `tasks/005-delete-habits-with-confirmation.md` |
| 006 | Onboarding tooltip, polish, and final integration | 005 | US-1, US-2, US-3 | `tasks/006-onboarding-tooltip-and-polish.md` |
