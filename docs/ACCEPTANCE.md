# Acceptance criteria: StudyStreak

QA Tester checks each item on the preview, like a real user, and reports pass or fail on the PR.

## US-1

**As a** student, **I want** to add up to 5 daily habits, **so that** I can track the specific routines I want to build.

- [ ] On first visit, the page shows an empty state with a prominent 'Add Habit' button
- [ ] Clicking 'Add Habit' opens a simple input form; after entering a name and clicking Save, the habit appears in the daily list
- [ ] I cannot add more than 5 habits (UI prevents additional entries when limit is reached)
- [ ] Habits are persisted in localStorage and reappear after a page refresh

## US-2

**As a** student, **I want** to check off today's habits, **so that** I can mark what I completed each day.

- [ ] Each habit displays a checkbox for today; clicking it marks the habit as complete with a visual change
- [ ] Checked habits show a different style (e.g. green checkmark and strikethrough) and remain checked after refresh
- [ ] Unchecking a habit is possible and updates instantly
- [ ] The UI clearly separates today's date and habits from the streak view

## US-3

**As a** student, **I want** to see my current 7-day streak, **so that** I can stay motivated by visual progress.

- [ ] A dedicated streak section shows the last 7 days as a row of circles or bars
- [ ] Days where all habits were completed are highlighted (e.g. filled green) with a current streak counter displayed
- [ ] The streak correctly updates when today's habits are all checked off
- [ ] Streak data and history persist correctly after closing and reopening the browser

## US-4

**As a** student, **I want** to remove a habit I no longer want to track, **so that** I can keep my list clean and relevant.

- [ ] Each habit has a small delete (×) button
- [ ] Clicking delete shows a confirmation and removes the habit from the list and from all past streak data
- [ ] After deletion, the habit no longer appears on future days and the streak view updates accordingly
