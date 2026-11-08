# Idea: Habit tracker for students

_Copied from the Idea Inbox: https://github.com/Lparedes14/sharkbyte_hackathon/issues/2_

## The idea

A habit tracker for students: add a few daily habits, check them off each day, and see a weekly streak. First version: no accounts, just a clean mobile-friendly page.

## Idea Lab score card

Idea Lab score card. Four agents scored this idea in parallel (Swarms `ConcurrentWorkflow`).

**Overall: 7.8/10**

| Agent | Score | Summary |
|---|---|---|
| Idea Scout | 7/10 | Simple no-account mobile habit tracker focused on weekly streaks for students. |
| Market Researcher | 7/10 | Clean no-account habit tracker aimed at students is a viable 8-hour MVP with a clear differentiation hook, though competition is high and retention may be challenging without sync. |
| Feasibility Analyst | 8/10 | Very feasible MVP in 8 hours with Next.js + localStorage; main risks are clean streak UI and persistence UX. |
| MVP Cutter | 9/10 | Extremely small localStorage habit tracker focused only on daily checkoffs + 7-day streak view – perfect first version for students. |

**Idea Scout**
- Fast 8-hour MVP feasible with localStorage
- Clear student user and low friction
- Weekly streak focus is relevant
- Idea is quite generic with many existing alternatives

**Market Researcher**
- Extremely low friction (no login) is the strongest advantage for busy students
- One dev + AI tools can realistically ship a polished mobile web version in <8 hours
- Easy to expand later with optional accounts, class templates, or parent reports
- Risk: many students already have built-in reminders in Apple Health / Google Fit / existing apps

**Feasibility Analyst**
- Simple local-only state with Next.js/Tailwind is quick to build
- Streak calendar logic is the only non-trivial part
- No auth or Supabase keeps complexity low

**MVP Cutter**
- Clean mobile web UI with habit add/checkoff
- localStorage persistence + weekly streak visual
- Cut all accounts, sync, history, reminders

### Open questions
1. How will students discover it?
2. What real student habit pain isn't solved by existing tools?
3. How will the UI/streaks be noticeably better?
4. How will students remember to open the specific URL every day?
5. What school-specific habit presets would make it instantly useful?
6. Would schools or universities be willing to link or sponsor this as a student-wellness tool?

Answer the questions through Project Lead (it posts them with `/revise`) to score the idea again, or tell Project Lead to build it.
