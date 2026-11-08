# Task 006: Onboarding tooltip, polish, and final integration

_Part of StudyStreak (issue #1). Depends on: task 005. Stories: US-1, US-2, US-3._

Read `.cursor/rules/project.mdc`, `docs/PRD.md` and `docs/DESIGN.md` first. Implement only this task.

## Goal

Add first-visit tooltip explaining streaks, final mobile styling tweaks, ensure all acceptance criteria pass, and verify data isolation per anonymous session.

## Files to touch
- `src/components/OnboardingTooltip.tsx`
- `src/app/page.tsx`
- `src/app/globals.css`

## Steps
1. Create src/components/OnboardingTooltip.tsx that shows only on first visit explaining the streak concept
2. Integrate the tooltip into the main page so it appears on first load and can be dismissed
3. Add final Tailwind styling polish in src/app/globals.css for delightful mobile experience and flame visuals
4. Ensure the entire flow works end-to-end: add habits, check them off, see streak update, delete habits
5. Verify that each anonymous/incognito session is isolated with its own data
6. Test all acceptance criteria from US-1 through US-4
7. Make final responsive adjustments so the app feels focused and delightful on mobile

## Acceptance criteria
- [ ] Onboarding tooltip appears on first visit explaining streaks
- [ ] All previous acceptance criteria from US-1, US-2, US-3, and US-4 are satisfied
- [ ] Data is correctly isolated per anonymous user session
- [ ] The UI is clean, mobile-first, and delightful with proper visual feedback

## Done when

The app is fully polished, all user stories are complete, the onboarding tooltip is present, and all acceptance criteria pass in the browser.

## Out of scope
- New backend changes, history >7 days, accounts UI

## Pull request

Title: `[task-006] Onboarding tooltip, polish, and final integration`. The description says `Part of issue #1`. Run the app and the tests before you open the PR.
