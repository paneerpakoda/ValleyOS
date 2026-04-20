# Project Brainstorm

## 1. Working Title
Valley OS

## 2. One-Line Idea
A calm Android companion app that tells an intermediate Stardew Valley player what to do next each day during a run — with light progress tracking and quick reference support.

## 3. Why I Want to Build This
- I play Stardew Valley and repeatedly hit the same friction: guides, wiki, videos, and personal notes are all fragmented and painful to use during live play.
- I want an efficient but forgiving run — no tryhard min-max, but I don't want to feel lost or behind either.
- Tab switching and mental tracking cause real confusion and anxiety.
- I want to solve this for myself first, then possibly for similar players.
- Classic "scratch your own itch" — the pain is repeated, concrete, and testable during real gameplay.

## 4. Primary Goal
Build a personal MVP companion app that reduces confusion and anxiety while playing Stardew Valley in real time via clear step-by-step guidance, quick wiki access, and lightweight progress tracking.

## 5. Secondary Goal
Support distinct playstyles per save file, and make the app useful for other intermediate SDV players with similar needs.

## 6. Success Criteria
Success:
- Usable during active play
- Follow a run plan without confusion
- Reduce tab switching between videos, notes, wiki
- Next step fast to find
- Progress tracking effortless
- Feels calm, simple, supportive
- Multiple saves can follow different playstyles

Evidence it worked:
- A full real play session completed with the app as main companion
- Run followed without external notes
- Value delivered in first 5 minutes of use
- Less anxiety vs current method
- One full run / meaningful early-game segment supported end-to-end
- Second playstyle creatable without breaking structure

Failure:
- Slower / more confusing than wiki or video
- Too many clicks to find next step
- Tracking feels like work, not relief
- Still falls back to scattered notes/videos

Partial failure:
- Works for one playstyle but not multiple
- Guide+tracking OK but info lookup weak
- Useful only after heavy setup
- Functional but not calming

Definition of Done for MVP:
- Create/use a run/save inside the app
- Run has a defined playstyle or guide structure
- Clear step-by-step guidance visible
- Progress/completed steps easy to mark
- Current position in the run is clear
- Reference info accessible in-app or via clearly integrated flow
- Works during real SDV session
- Value in first 5 minutes
- Stable enough for repeated personal use
- One complete early-game path or meaningful slice fully supported end-to-end

## 7. Target User
Primary: self — an intermediate Stardew Valley player who prefers optimized but forgiving gameplay. Wants efficiency without tryhard perfection; likes guides that leave buffer for mistakes.

Context: plays on PC; uses an Android phone as a live companion screen while playing. Pain comes from tab switching and mental tracking overload across overlapping systems (crops, bundles, money, energy, mining, fishing, relationships, deadlines).

Secondary for MVP: none.

Future user group: intermediate/returning SDV players wanting structured efficient runs without extreme min-max pressure.

## 8. Problem Statement
An intermediate Stardew Valley player who wants optimized but forgiving guidance struggles with managing what to do, when to do it, and how to track progress during active gameplay, which leads to confusion, anxiety, frequent tab switching, and reduced flow.

Key insight: the problem is not *finding* information — it is *using the right information at the right moment without breaking gameplay flow*.

Why alternatives fail:
- Wiki → info, not guidance
- Videos → strategy, not live companion
- Personal notes → flexible but high-maintenance, rot quickly
- Memory → unreliable across overlapping systems, creates anxiety

## 9. Value Proposition
This product helps intermediate Stardew Valley players follow an efficient but forgiving run with less confusion by turning scattered guide information into clear real-time steps, progress tracking, and quick reference support.

Tagline: *A calm companion app for efficient Stardew Valley runs.*

## 10. Core User Outcome
The user can open the app during an SDV play session and confidently know what to do next in their current run — without relying on memory, scattered notes, or multiple external sources.

MVP granularity: **day-level** (morning/in-session day plan). Moment-level ("at 2pm with 80 energy do X") is deferred post-MVP.

Failure test: if the user opens the app during play, can they understand their next best actions within a few seconds? If no → MVP is failing its core job.

## 11. Feature Dump

Full categorized dump before prioritization. Note format: **Value** / **Complexity (Low/Med/High/Very High)** / **Dependency**.

### A. Core Workflow Features
1. **Run / Save File Creation** — dedicated companion space for a run / Low / none
2. **Playstyle Selection for a Run** — each run follows a different strategy / Med / run creation
3. **Current Run Dashboard** — resume and see current state / Med / run creation
4. **What To Do Next View** — immediate next meaningful actions / Med / task/step structure
5. **Step-by-Step Daily Guidance** — reduce confusion during play / Med / run structure + task data
6. **Today Checklist** — actionable list for current in-game day / Med / task/step structure
7. **Season Checklist** — avoid missing seasonal goals / Med / season/task data
8. **Task Completion / Progress Marking** — track what's done / Low / tasks/steps
9. **Run Progress Overview** — how far the user has progressed / Med / progress tracking
10. **Milestone Tracking** — longer-term goals beyond daily tasks / Med / task hierarchy
11. **Deadline / Due Date Tracking** — prevent missing time-sensitive tasks / Med / task system w/ timing
12. **Due Time Indicators** — plan day timing / Med / task timing metadata
13. **Current Priorities Panel** — show what matters most now / Med / task ranking/rules
14. **Mistake Recovery / Fallback Guidance** — recover when steps/deadlines missed / High / run rules, branching
15. **Flexible Guidance Buffer** — forgiving guide, not strict / High / task logic, alt states
16. **Resume Session Quickly** — friction-free reopen / Low / dashboard
17. **Day-Based Planning View** — organize around gameplay loop / Med / day/task data
18. **Season-Based Planning View** — broader level view / Med / season/task data
19. **Hybrid Planning View (day+season+milestones)** — switch tactical↔strategic / High / all planning structures
20. **Notes Attached to a Run** — custom reminders / Low / run creation

### B. Onboarding Features
1. **First-Time Welcome Flow** — explain what app does / Low / none
2. **Create First Run Onboarding** — get into core workflow fast / Low / run creation
3. **Select Experience Level** — tailor guidance / Med / onboarding, content variations
4. **Select Preferred Playstyle** — align guidance / Med / playstyle model
5. **Quick App Tour** — reduce initial confusion / Low / stable nav
6. **Sample Demo Run** — value immediately, no setup / Med / seed content
7. **Import Existing Run State Manually** — start mid-run / Med / run model, progress editing
8. **Set Current Season / Day During Setup** — align with real save / Low / run creation

### C. Supporting Features
1. **Quick Reference / Mini Wiki** — fast in-app info access / Med / reference content structure
2. **Search** — find info fast / Med / reference data
3. **Filters by Season/Day/Category** — navigate easier / Low / tagged content
4. **Crop Planning Support** — optimize crop decisions/timing / Med / crop data, planning logic
5. **Bundle / Community Center Tracking** — manage collection goals / Med / bundle data + progress
6. **Energy Management Tips** — avoid inefficient energy use / Low / content layer
7. **Money Optimization Tips** — better economic decisions / Low / content layer
8. **Relationship / Gifting Help** — social progression + gifts / Med / villager/gift data
9. **Mining Guidance** — when/how to prioritize mining / Low-Med / content layer
10. **Fishing Guidance** — use fishing well in run / Low-Med / content layer
11. **Important Missables / Alerts** — surface high-risk forgettables / Med / task timing/event data
12. **Reference Links to Official Wiki** — trusted fallback / Low / reference mapping
13. **Favorite / Pin Items or Tasks** — keep priorities reachable / Low / task/reference system
14. **Run Summary** — snapshot of current state / Med / progress system
15. **Offline Reference Cache** — info without network / Med / local storage

### D. Admin / Settings Features
1. **Theme Settings** — comfort + preference / Low / design system
2. **Text Size / Accessibility** — readability during play / Low / design system
3. **Notification Preferences** — control reminders / Med / reminders system
4. **Manage Runs** — edit, archive, delete runs / Med / multi-run support
5. **Edit Progress Manually** — fix mismatches with save file / Med / progress system
6. **Reset Playstyle / Reconfigure Run** — change course without restart / Med / run/playstyle model
7. **Backup / Export Run Data** — protect + portability / Med / data model
8. **Import Run Data** — restore run data / Med / export structure

### E. Intelligence / AI Features
1. **Dynamic Best Next Step Suggestions** — smarter prioritization / High / robust task model or AI
2. **Adaptive Recommendations Based on Mistakes** — intelligent recovery / High / state modeling, branching
3. **Natural Language Search / Ask a Question** — conversational info / High / search + AI
4. **AI Run Assistant** — contextual live guide / High / structured data + AI
5. **Auto-Generated Daily Plans** — reduce planning effort / High / run state + rules/AI planning
6. **Contextual Tips Based on Current Day/Season** — right advice at right time / Med-High / state logic
7. **Smart Fallback Suggestions** — when route no longer possible / High / branching guidance

### F. Collaboration Features
1. **Share Run Template** — share playstyles/routes / Med / template system
2. **Import Community Template** — start from others' strategies / Med / template storage
3. **Share Progress Snapshot** — discussion/feedback / Low-Med / run summary
4. **Collaborative Guide Authoring** — build guides jointly / High / accounts, permissions, editor
5. **Friend Comparison / Parallel Runs** — social motivation / Med-High / accounts, shared data

### G. Analytics Features
1. **Completion Analytics** — consistency of run-following / Med / progress system
2. **Most Missed Tasks Analysis** — improve weak areas / Med / event logging
3. **Run Efficiency Summary** — overall performance feedback / Med-High / metrics model
4. **Time-to-Value Tracking** — validate fast-usefulness / Med / event instrumentation
5. **Guide Friction Analysis** — identify confusing flows / High / analytics + research instrumentation
6. **Feature Usage Analytics** — product improvement signal / Med / instrumentation

### H. Speculative Features
1. **Full Wiki Mirror Inside App** — complete in-app info / High / ingestion/storage/legal
2. **Visual Farm Planner** — plan farm layout / High / custom planning UI
3. **Season Simulator / What-If Planning** — model decisions before committing / High / simulation logic
4. **Route Builder / Custom Guide Authoring** — custom playstyle paths / High / editable content architecture
5. **Voice Companion Mode** — hands-free during play / High / voice I/O
6. **Widget / Lock Screen Companion** — glanceable access / Med-High / platform integration
7. **Screenshot-Based Progress Detection** — reduce manual tracking / High / CV/parsing
8. **Save File Sync / Parsing** — auto-sync from game / Very High / platform-specific file access
9. **Cross-Game Companion Framework** — beyond Stardew / Very High / generalized architecture
10. **Reward / Motivation Layer** — engagement boost / Med / progress system
11. **Persona-Based Guidance Modes** — tone/style customization / Med / templated content styles

## 12. Milestone Breakdown

**Tightened MVP definition:** *One hardcoded playstyle, one run, full Y1 Spring including CC bundles, one clean next-step flow.*

**MVP slice (decided at Step 10):** full Y1 Spring including Community Center bundles.

**Post-pressure-test adjustment (2026-04-19):** insert v0 spike before MVP. Bundle tracking is *not* a standalone feature — bundle items are integrated into step-by-step instructions. Mini-wiki uses placeholder content until the interaction model is validated by real play.

### v0 — behavioral & data-pointer spike
Goals:
- Test phone-as-companion model with real play sessions
- Discover what data pointers (characters, items, mechanics) actually get reached for during play — this informs the mini-wiki and content model before any real writing begins
- Validate that step-level tasks are usable in-session

Features:
1. Today view with hardcoded day-indexed tasks for Y1 Spring
2. Task completion (checkboxes, local state)
3. "Advance day" button
4. Per-task wiki link (external only; placeholder allowed)

Explicitly not in v0: run/playstyle concept, bundle tracking, in-app mini-wiki, crop planner, deadlines banner, onboarding, real content.

Exit criteria before MVP work begins:
- User reaches for phone at least a few times per in-game day across 3+ sessions
- User has a rough list of data pointers they repeatedly wanted during play (seeds the mini-wiki structure)
- Today-view interaction model feels right (or known adjustments identified)

### MVP — 9 features, post-decision-filter
Core
1. **Default run** — single hardcoded run, no creation UI, no playstyle picker, one predefined playstyle baked in.
2. **Today view** — one screen combining next-step / ordered checklist / priorities / inline deadlines / upcoming-deadlines banner. This is the product.
3. **Task completion** — tap to check off, local persistence.
4. **Deadlines as task metadata** — no separate deadline system; tasks carry "due by day X" and surface inline.
5. **Per-task wiki link** — tap opens official SDV wiki for that task.
6. **Day control** — "set current day" / "advance day" on the main view; keeps app in sync with real save.

Slice-dependent (kept because MVP slice = full Y1 Spring + CC)
7. **Crop planning support (light)** — day tasks handle plant/harvest; light planner helps Spring crop decisions.
8. **Bundle items integrated into steps** — CC bundle needs are surfaced inside the relevant step-by-step instructions (e.g. "keep 1 parsnip for Pantry bundle"). No separate bundle tracker. Wiki link is sufficient for bundle-level context.
9. **Mini-wiki (placeholder content for now)** — structure first, content later. Real entries only after v0 reveals which data pointers the user actually reaches for.

### Cuts made at Step 10 (moved to V1)
- Playstyle selection UI
- Separate run dashboard (merged into today view)
- Separate "step-by-step daily guidance" feature (it IS the today view)
- Separate today checklist (merged)
- Separate season checklist (replaced by upcoming-deadlines banner)
- Separate current priorities panel (merged — ordered list IS priority)
- Onboarding flow (app opens straight to today view)
- Create-first-run onboarding flow

### V1 — important improvements after MVP proves concept
Promoted out of MVP at Step 10:
1. Playstyle Selection UI (multiple playstyles per save)
2. Create First Run Onboarding
3. Separate Season View / Checklist
4. Separate Run Dashboard (if day view isn't enough)

Originally V1:
5. Day-Based Planning View
6. Season-Based Planning View
7. Run Progress Overview
8. Milestone Tracking
9. Search
10. Filters by Season / Day / Category
11. Relationship / Gifting Help
12. Energy Management Tips
13. Money Optimization Tips
14. Mining Guidance
15. Fishing Guidance
16. Important Missables / Alerts
17. Notes Attached to a Run
18. Edit Progress Manually
19. Manage Runs
20. Import Existing Run State Manually
21. Sample Demo Run

### V2 — deeper improvements once core is proven
1. Flexible Guidance Buffer
2. Mistake Recovery / Fallback Guidance
3. Hybrid Planning View (day + season + milestones)
4. Run Summary
5. Favorite / Pin Items or Tasks
6. Offline Reference Cache
7. Select Experience Level
8. Richer Playstyle Selection + logic
9. Notification Preferences
10. Reset Playstyle / Reconfigure Run
11. Backup / Export Run Data
12. Import Run Data
13. Completion Analytics
14. Most Missed Tasks Analysis
15. Run Efficiency Summary
16. Time-to-Value Tracking
17. Feature Usage Analytics

### Later — nice, ambitious, or speculative
AI / intelligence
1. Dynamic Best Next Step Suggestions
2. Adaptive Recommendations Based on Mistakes
3. Natural Language Search / Ask a Question
4. AI Run Assistant
5. Auto-Generated Daily Plans
6. Contextual Tips Based on Current Day/Season
7. Smart Fallback Suggestions

Collaboration / social
8. Share Run Template
9. Import Community Template
10. Share Progress Snapshot
11. Collaborative Guide Authoring
12. Friend Comparison / Parallel Runs

Speculative product expansion
13. Full Wiki Mirror Inside the App
14. Visual Farm Planner
15. Season Simulator / What-If Planning
16. Route Builder / Custom Guide Authoring
17. Voice Companion Mode
18. Widget / Lock Screen Companion
19. Screenshot-Based Progress Detection
20. Save File Sync / Parsing
21. Cross-Game Companion Framework
22. Reward / Motivation Layer
23. Persona-Based Guidance Modes

Polish extras
24. Quick App Tour
25. Theme Settings
26. Text Size / Accessibility Settings

### Not in Scope — guardrail against drift
1. Full wiki replacement
2. Real-time save file sync / parsing
3. Advanced AI assistant features
4. Collaboration and community systems
5. Cross-game platform vision
6. Deep analytics before core usage is proven
7. Gamification / reward systems
8. Social comparison features
9. Highly customizable route builder
10. Enterprise-scale architecture
11. Heavy account systems and permissions
12. Complex automation and adaptive intelligence
13. Extreme design polish before core workflow is validated
14. Trying to support every Stardew player type at once
15. Trying to cover every system in full depth in MVP
- Cross-platform parity on day 1

## 13. Risks and Unknowns

### Product risks
- **Phone-as-companion flow break** — you may not reach for the phone mid-session as often as imagined; the gesture itself breaks flow.
- **Day-level granularity may feel too coarse** — 20 min into a day, "today's plan" may not tell you what to do *now*.
- **Hardcoded single playstyle may chafe** — even for personal use, may feel wrong once a second run is wanted.
- **Mini-wiki + wiki-links uncanny valley** — too shallow internally but still forcing taps out → worst of both worlds.
- **Task structure ↔ real play mismatch** — pre-written tasks may not line up with how a day actually unfolds (weather, energy, random events).
- **Bundle tracking manual burden** — tapping every turn-in could feel like work, not relief.

### Technical risks
- **Tech stack not chosen** — Kotlin native / React Native / Flutter / PWA; affects everything downstream.
- **Content authoring model undefined** — markdown vs structured JSON/YAML; determines if guide edits require a rebuild.
- **Data model unsketched** — run / day / task / deadline / bundle / wiki-entry relationships.
- **Day-advance state semantics** — incomplete tasks, undo, editing past days — gets hairy fast.
- **Offline-first implications** — likely required; implications for content updates.
- **Legal/sourcing for wiki-derived content** — attribution/licensing if the app ever goes public.

### Operational risks
- **Content effort may dwarf app effort** — Y1 Spring guide + CC bundles + crops + core NPCs is substantial writing.
- **Time budget undefined** — no sense of hours/weeks allocated.
- **Solo build, no design assets** — calm UX is stated, easy to fall short without a style system.
- **Guide updates without app release** — baked-in content means every fix ships a build; remote content means more infra.

### Assumptions under test (from Step 2)
1. Structured companion beats fragmented alternatives during play.
2. Day-level granularity is enough for MVP.
3. One hardcoded playstyle is sufficient for a first usable slice.
4. Narrow mini-wiki + external wiki links is the right reference split.
5. Checking a phone mid-play isn't itself a flow break.
6. Writing the Y1 Spring content is feasible in the time budget.
7. Personal-use MVP generalizes to similar players later.

### Unknowns (explicit)
- Tech stack choice
- Data model
- Content authoring workflow
- Update cadence and delivery (baked vs remote)
- Day-advance UX and undo semantics
- Handling weather + player deviations
- Minimum content unit for a day (3 tasks? 5? full schedule?)

### Confidence tiers

**High confidence**
- Pain is real, repeated, concrete for the primary user.
- User will use it themselves (no market risk).
- Current alternatives are genuinely insufficient.
- Day-level core outcome is a defensible MVP scope.
- Task completion + deadlines + wiki links is a low-risk technical core.

**Medium confidence**
- Day-level granularity is enough — may need moment-level sooner than expected.
- Narrow mini-wiki is the right split — could need more or less.
- One hardcoded playstyle is sufficient — may want a second fast.
- Bundle tracking manual burden is acceptable.
- Content authoring effort is manageable.

**Low confidence** (test early)
- User will reach for the phone during play at the needed frequency.
- Pre-written task structure will map to real-play moments.
- Weather + deviations handled gracefully without branching logic.
- Tech stack choice doesn't create disproportionate cost.
- Content layer can be edited without shipping a new build.

## 14. Open Questions
- Which single playstyle ships in MVP?
- What is the minimum content unit for a day? (e.g. 3–5 prioritized tasks? full schedule?)
- Does the day plan branch by weather, or assume a default and offer manual override?
- How is "current day" set — user taps "advance day", or enters the in-game date?
- How deep should in-app reference be vs linking out to wiki?
- Is there a notion of "milestone" beyond day-level (e.g. week goals, season goals)?
- Tech stack: native Android (Kotlin), React Native, Flutter, or installable PWA?
- How are playstyles authored — hand-written markdown-ish content, or structured data?
- What happens when the user deviates from the plan (falls behind, skips a task, does something unplanned)?
- How is the app seeded — empty run, or sensible defaults per playstyle?
- How are updates to guide content delivered — baked in, or updatable without app release?
- Is offline-first required? (Probably yes, since it sits beside the game.)
