# PRD: StudyStreak

_Written by the Deep Dive swarm (Swarms `HierarchicalSwarm`: Product Owner, Product Manager and UX Researcher, coordinated by a director) for issue #1._

## Problem

Students struggle to build consistent daily habits like studying, exercising, or sleeping on time. Existing habit trackers often require accounts, feel overwhelming with complex features, or lack a simple visual weekly streak that motivates them. A clean, no-login, mobile-first habit tracker focused only on adding a few habits, checking them off daily, and seeing a 7-day streak would lower the barrier and help students maintain momentum without friction.

## Users
- Busy high-school or college student who wants to build 3-5 daily habits but forgets or loses motivation without simple visual feedback

## Goals
- Enable students to quickly add, check off, and track daily habits with zero account setup
- Provide an instantly understandable weekly streak visualization to motivate consistency
- Deliver a clean, mobile-friendly experience that feels delightful and focused
- Use local persistence so progress is saved between visits without any backend

## User stories

### US-1

**As a** student, **I want** to add up to 5 daily habits, **so that** I can track the specific routines I want to build.

Acceptance criteria:
- [ ] On first visit, the page shows an empty state with a prominent 'Add Habit' button
- [ ] Clicking 'Add Habit' opens a simple input form; after entering a name and clicking Save, the habit appears in the daily list
- [ ] I cannot add more than 5 habits (UI prevents additional entries when limit is reached)
- [ ] Habits are persisted in localStorage and reappear after a page refresh

### US-2

**As a** student, **I want** to check off today's habits, **so that** I can mark what I completed each day.

Acceptance criteria:
- [ ] Each habit displays a checkbox for today; clicking it marks the habit as complete with a visual change
- [ ] Checked habits show a different style (e.g. green checkmark and strikethrough) and remain checked after refresh
- [ ] Unchecking a habit is possible and updates instantly
- [ ] The UI clearly separates today's date and habits from the streak view

### US-3

**As a** student, **I want** to see my current 7-day streak, **so that** I can stay motivated by visual progress.

Acceptance criteria:
- [ ] A dedicated streak section shows the last 7 days as a row of circles or bars
- [ ] Days where all habits were completed are highlighted (e.g. filled green) with a current streak counter displayed
- [ ] The streak correctly updates when today's habits are all checked off
- [ ] Streak data and history persist correctly after closing and reopening the browser

### US-4

**As a** student, **I want** to remove a habit I no longer want to track, **so that** I can keep my list clean and relevant.

Acceptance criteria:
- [ ] Each habit has a small delete (×) button
- [ ] Clicking delete shows a confirmation and removes the habit from the list and from all past streak data
- [ ] After deletion, the habit no longer appears on future days and the streak view updates accordingly

## Out of scope
- User accounts or login
- Data synchronization across devices
- Habit history beyond 7 days
- Reminders or notifications
- Pre-made habit templates or school-specific presets
- Sharing or social features

## Success metrics
- At least 70% of first-time users add 2+ habits within 2 minutes of landing
- Average of 4+ daily check-offs per active user in the first week
- 80% of returning users (same browser) have their habits and streak data preserved
- Users complete all habits on 3+ days within the first 7 days of use

## Open questions
- How will students discover and remember to visit this specific URL daily?
- What specific student habits (e.g. study, exercise, water, sleep) are most common and should be suggested as quick-add presets?
- How should the streak UI be designed to feel noticeably better than existing habit trackers?
- Should we include a very lightweight onboarding tooltip on first visit explaining streaks?
