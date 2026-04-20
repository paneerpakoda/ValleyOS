# Project Spec

> Main planning deliverable. Unlike `brainstorm.md`, this document is clear, structured, implementation-oriented, decisive, and less exploratory. Contains both product requirements and technical design.

---

## 1. Project Overview

- **Project name:**
- **One-line summary:**
- **Primary goal:**
- **Secondary goal:**
- **Success criteria:**
- **Current phase:**

---

## 2. Product Requirements

### 2.1 Product Purpose
Valley OS is a calm Android companion app for Stardew Valley that tells the player what to do next during active gameplay. It replaces the fragmented combination of wiki tabs, videos, and personal notes with a single focused flow: open the app mid-session, see your current day's plan, mark progress, and return to the game.

The product exists because existing alternatives solve *finding* information but not *using* the right information at the right moment. The value is clarity during play, not content volume.

### 2.2 Target Users

**Primary (MVP):** self — an intermediate Stardew Valley player who wants optimized-but-forgiving gameplay. Uses an Android phone as a live companion while playing SDV. Values efficiency without tryhard min-max discipline. Likes guides with buffer for mistakes.

**Secondary (MVP):** none.

**Future (V1+):** other intermediate/returning SDV players with the same profile — efficient runs, no min-max pressure, prefer structure over scattered guides.

### 2.3 Problem Statement
An intermediate Stardew Valley player who wants optimized but forgiving guidance struggles with managing what to do, when to do it, and how to track progress during active gameplay — which leads to confusion, anxiety, frequent tab switching, and reduced flow.

The core friction is not *finding* information. It is *using the right information at the right moment without breaking gameplay flow*.

### 2.4 Jobs To Be Done

1. **When** I start a Stardew play session, **I want to** immediately see what to do today, **so I can** start playing without thinking from scratch.
2. **When** I'm mid-session and finish a task, **I want to** quickly mark it done and see what's next, **so I can** stay in flow instead of re-deriving priorities.
3. **When** I need context on a task (a crop, a bundle item, an NPC), **I want to** get just enough info in one tap, **so I can** decide and return to the game without falling into a wiki rabbit hole.
4. **When** a new in-game day starts, **I want to** advance the app so it matches my save, **so I can** trust it as my source of truth for what's planned.
5. **When** a seasonal deadline is approaching (bundles, festivals, crop spoilage), **I want to** see it surfaced ahead of time, **so I can** plan the coming days without mental tracking.
6. **When** I made a mistake or missed something, **I want to** know whether I can recover and what it costs, **so I can** keep playing without starting over or spiraling into anxiety.
7. **When** I want to pause and come back, **I want to** the app to hold state exactly where I left it, **so I can** resume mid-session or mid-run without re-setup.
8. **When** I'm unsure what matters most right now, **I want to** the app to tell me the single most important thing to do, **so I can** cut through overload and act.

### 2.5 Core Functionality

Valley OS provides, for a single hardcoded Y1 Spring run:

- **Today view** — an ordered list of the current day's tasks (what to do next + priorities + inline deadlines + an upcoming-deadlines banner), as a single screen.
- **Task completion** — tap to check off; state persists locally.
- **Day control** — advance day or set current day to match the real save.
- **Step-integrated bundle context** — bundle requirements appear inside the relevant task instructions (e.g. "keep 1 parsnip for the Pantry bundle"); no separate bundle tracker.
- **Crop planning (light)** — plant/harvest actions surfaced inside day tasks.
- **Reference layer** — per-task external link to the official SDV wiki; optional internal mini-wiki (placeholder content until v0 reveals which data pointers matter).

The product is explicitly day-level in granularity. Moment-level ("at 2pm with 80 energy do X") is deferred post-MVP.

### 2.6 Core User Flows

1. **Open app → see today's plan.**
   App opens directly to the today view. No splash, no dashboard, no onboarding. The ordered task list for the current in-game day is the first thing visible.

2. **Complete a task.**
   Player finishes a task in-game → taps the checkbox in the app → task marks complete, list reflows so the next priority is at top.

3. **Look up context for a task.**
   Player taps a task's info/link affordance → external wiki opens (or internal mini-wiki entry if present) → player returns to app via back gesture.

4. **Advance the day.**
   Player sleeps in-game → taps "advance day" in app → today view updates to the next day's plan. **Incomplete tasks from the previous day auto-carry forward** onto tomorrow's list, flagged "from yesterday."

5. **Set current day (recovery).**
   Player has played without the app open for several in-game days → taps "set current day" → picks the correct Spring day → app shows a **"skipped days summary"** listing missed items from the skipped range → user dismisses → today view syncs to chosen day.

### 2.7 MVP Scope

The MVP ships *after* a v0 behavioral spike validates that the phone-as-companion model works.

**v0 spike (pre-MVP):** today view with hardcoded Y1 Spring days 1–7 tasks, task completion, advance-day, per-task external wiki link (placeholder content OK). No run concept, no playstyle, no bundles, no mini-wiki, no banner.

**MVP (post-v0):** see [brainstorm.md](brainstorm.md) §12. The 9 MVP features, summarized:
1. Single hardcoded default run (no creation UI, one playstyle baked in)
2. Today view (next-step + checklist + priorities + deadlines + banner, one screen)
3. Task completion
4. Deadlines as task metadata
5. Per-task wiki link
6. Day control
7. Crop planning (light, via day tasks)
8. Bundle requirements integrated into step instructions
9. Mini-wiki structure with placeholder content

### 2.8 Non-Goals

Explicitly excluded from MVP and V1:
- Full wiki replacement or mirror
- Real-time save file sync / parsing
- AI assistant features
- Community / collaboration / sharing
- Multiplayer
- Cross-game companion framework
- Deep analytics before core usage is proven
- Gamification / rewards layer
- Custom route / guide authoring by users
- Accounts, permissions, multi-role systems
- Extreme design polish before core workflow is validated
- iOS, desktop, tablet (Android only for MVP)
- Moment-level guidance (real-time time-of-day / energy-aware suggestions)
- Full Y1 (only Y1 Spring)
- Multiple playstyles simultaneously (one hardcoded for MVP)
- Public launch / monetization

### 2.9 Success Metrics

**Validation-level (are we solving the right problem?):**
- After 3+ sessions with v0, user reports reaching for the phone meaningfully during play.
- User identifies a concrete list of data pointers they repeatedly wanted (→ seeds mini-wiki).
- Anxiety / mental-load felt lower vs prior method (subjective, journaled).

**Functional-level (does MVP work?):**
- One full Y1 Spring run supported end-to-end without needing external notes.
- App is usable within 5 minutes of first open.
- Second playstyle can be added post-MVP without structural changes.
- User naturally reaches for the app in subsequent sessions (retention-by-preference).

**Failure signals (abandon or pivot):**
- User finds the app slower than Alt-Tab to wiki.
- Marking progress feels like work.
- Today view goes stale mid-day and user stops trusting it.
- User plays sessions without opening the app.

---

### 2.10 Scenarios

#### Core scenarios

1. **First-time use (v0).**
   App installs, opens to day 1 Spring Y1 tasks. User plays a full in-game day, checks 3 tasks off, taps advance-day at bedtime. Repeats for day 2.

2. **Repeat use (MVP).**
   User opens app on day 12 Spring. Sees ordered today list with 4 tasks + an "upcoming: Egg Festival (day 13), Pantry bundle deadline (day 28)" banner. Completes 3 tasks, leaves 1, sleeps, advances day.

3. **Mid-session lookup.**
   User is about to sell crops, taps a "sell parsnips at Pierre's" task's wiki link, confirms price, returns to app, marks task done.

4. **Step-integrated bundle encounter.**
   Day 15 task: "harvest cauliflower (keep 1 for Pantry bundle)." User harvests, drops 1 in a chest, marks task complete. No separate bundle tracker consulted.

#### Edge scenarios

5. **Played without the app for 3 in-game days.**
   User opens app on Spring 7 but app still thinks it's Spring 4. User taps "set current day," picks Spring 7 → app shows a **"skipped days summary"** listing what was planned for days 5 and 6 → user reviews → today view syncs to day 7.

6. **Didn't complete day 1's key task (e.g. didn't plant parsnips).**
   User advances day without the task checked. Task **auto-carries forward** onto day 2's list with a "from yesterday" flag. Stays on the list until completed or explicitly dismissed.

7. **Task has a deadline that has passed.**
   Task was "clear this area by day 5" — user is now on day 7. Task surfaces with a **"missed" tag plus a consequence note** (e.g. "missed: Spring 5 deadline. Consequence: delayed greenhouse prep"). Stays visible for awareness, not actionable.

8. **Festival / weather day with a different structure.**
   Day 13 (Egg Festival) has a different default plan than a normal day. App surfaces the festival context prominently (scope TBD for MVP).

9. **Rainy day changes viable actions.**
   MVP treats weather as static pre-written content; actual weather mismatch is handled by player deviation (they simply don't do the irrelevant tasks). Adaptive weather branching = V2.

#### Failure scenarios

10. **App crashes mid-session.**
    Task state must persist locally on each check-off. Next open returns to same day, same completion state.

11. **Wiki link fails (offline / wiki down).**
    External wiki link shows browser error; user falls back to memory or internal mini-wiki entry if present. No in-app retry logic in MVP.

12. **User taps advance-day twice.**
    Day jumps by 2. Undo is not in MVP — user uses "set current day" to correct.

13. **User forgets to advance day for several real-world days.**
    App remains on old day. No background logic. On next open, user either plays per the stale plan or corrects via set-current-day.

14. **No in-app data for a task (placeholder wiki entry, no external link).**
    Task still displays; tap opens a "no content yet" state. User falls back to external wiki browse. v0-specific; MVP should not ship tasks with no reference path.

---

## 3. Technical Design

### 3.1 Tech Stack

- **Programming language:** TypeScript — standard for RN/Expo, strong Claude Code leverage.
- **Frontend framework:** Expo (React Native) with `expo-router` — file-based routing, fast iteration, single codebase.
- **Backend framework:** None for MVP — app is fully local/offline.
- **Database:** SQLite via `expo-sqlite` — local, offline-first, zero-cost, sufficient for run/day/task/bundle/wiki-entry.
- **Auth / login:** None (MVP) — personal-use, single-user, single-device.
- **Payments:** None.
- **Email:** None.
- **Object storage:** None — reference content bundled locally or linked out.
- **Analytics:** None (MVP) — product usage learned through personal-play journaling.
- **AI models:** None (MVP).
- **Hosting / cloud / VMs:** None (runtime); EAS Build (free tier) for producing signed APKs. Distribution = sideloaded APK to personal device. Play Store deferred.

### 3.2 Stack selection criteria

Every stack decision must be tested against these questions:

1. Is it fast to build with?
2. Is it easy to maintain?
3. Is it compatible with Claude Code workflows?
4. Is it appropriate for the project goal?
5. Is it cost-effective?
6. Does it create unnecessary complexity?
7. Does it support the features actually planned?

**Rule:** do not choose a stack because it is trendy. Choose a stack that matches:
- the project goal
- build speed
- skill level
- deployment needs
- future flexibility

### 3.3 Why This Stack

**Chosen:** Expo (React Native) + TypeScript + SQLite.

Scored against §3.2 criteria:

1. **Fast to build** — `npx create-expo-app` + hot reload + `expo-router` for the today view + `expo-sqlite` for persistence = days to a working v0.
2. **Easy to maintain** — TypeScript, single codebase, conventional structure, large ecosystem, long-lived libraries.
3. **Claude Code compatible** — the strongest criterion. TS/JSX is Claude's most reliable surface; Expo conventions are well-represented in training data; file-based routing is legible.
4. **Appropriate for goal** — Android-native feel, offline-first via SQLite, no server, sideload-friendly for a personal MVP.
5. **Cost-effective** — zero recurring cost; EAS free tier for builds; sideload APK for distribution.
6. **No unnecessary complexity** — no auth, no backend, no cloud; matches the §2.8 Non-Goals list line-for-line.
7. **Supports planned features** — today view, check-off persistence, day advance, external wiki links via `Linking.openURL`, placeholder mini-wiki screens — all trivial in this stack.

**Alternatives considered:**
- **Flutter** — close second on technical merit. Deciding factor: Claude Code leverage favored RN/TS for a solo-with-AI build.
- **PWA** — right answer only if zero-friction distribution to other players becomes a priority. Revisit at V1.

**Deferred until V1 or later:** native platform-specific modules, iOS build, Play Store publication, backend sync, auth.

### 3.4 Constraints

- **Budget:**
- **Timeline:**
- **Skill level:**
- **Maintainability expectations:**
- **Performance expectations:**
- **Security / privacy needs:**
- **Deployment target:** Android (MVP). No desktop, iOS, or web.
- **Offline behavior:** likely offline-first — app sits beside the game on PC; network is not required for core flow.

---

## 4. Technical Architecture

Single-app, offline-first. No backend, no cloud, no auth. All state and content lives on-device.

### 4.1 Block diagram

```
┌──────────────────────────────────────────────────────────────┐
│                       Valley OS (Android)                    │
│                                                              │
│   ┌──────────────┐     ┌──────────────────┐                  │
│   │  UI Layer    │◄───►│  State / Stores  │                  │
│   │ (Expo Router │     │  (React state +  │                  │
│   │  + screens)  │     │   SQLite repo)   │                  │
│   └──────┬───────┘     └────────┬─────────┘                  │
│          │                      │                            │
│          │                      ▼                            │
│          │             ┌────────────────┐                    │
│          │             │ Business Logic │                    │
│          │             │  (pure TS fns: │                    │
│          │             │   day advance, │                    │
│          │             │   carry-fwd,   │                    │
│          │             │   deadlines)   │                    │
│          │             └────────┬───────┘                    │
│          │                      │                            │
│          │                      ▼                            │
│          │             ┌────────────────┐    ┌────────────┐  │
│          │             │ Data Access    │◄──►│   SQLite   │  │
│          │             │ (repo modules) │    │ (on-device)│  │
│          │             └────────┬───────┘    └────────────┘  │
│          │                      │                            │
│          │                      ▼                            │
│          │             ┌────────────────┐                    │
│          │             │ Static Content │                    │
│          │             │ (bundled JSON: │                    │
│          │             │   tasks,       │                    │
│          │             │   bundles,     │                    │
│          │             │   mini-wiki)   │                    │
│          │             └────────────────┘                    │
│          │                                                   │
│          ▼                                                   │
│    ┌──────────────┐                                          │
│    │ Linking API  │─────────► Android browser ──► SDV Wiki   │
│    │ (expo-linking│                                          │
│    └──────────────┘                                          │
└──────────────────────────────────────────────────────────────┘
```

### 4.2 Major components

**UI Layer**
- React Native screens rendered by `expo-router`.
- Primary route: `/` → Today view.
- Secondary routes: set-day / skipped-days-summary / task detail (mini-wiki entry).
- Navigation is file-based; no complex nav state.

**State / Stores**
- Ephemeral UI state → React local state + context.
- Persistent state → SQLite, accessed via a thin repo layer. No Redux / Zustand needed for MVP (keep it small).

**Business Logic**
- Pure TypeScript functions, no React dependency.
- Responsible for: advance-day rules, carry-forward of incomplete tasks, deadline computation, skipped-days diff, task ordering.
- Unit-testable in isolation.

**Data Access**
- Repo modules per entity (`runRepo`, `taskRepo`, etc.).
- Encapsulates SQL; callers use typed functions.
- Handles schema migrations on app boot.

**SQLite (persistent state)**
- On-device, no cloud. One DB file per install.
- Stores: run state, current day, task completion, carry-forward flags, deadline-missed flags, user notes if added later.
- Schema defined in §5.

**Static Content (bundled)**
- Shipped inside the app bundle as JSON (or TS modules) — NOT stored in SQLite.
- Contains: task templates per Y1 Spring day, bundle mappings, mini-wiki entries (placeholder in v0).
- Updates ship via app version bumps. Remote content delivery is a V2 concern.
- Separation from SQLite keeps user progress and authored content independent — schema changes to content never collide with user DB migrations.

**External linking**
- `expo-linking` / `Linking.openURL()` opens the Android browser for SDV wiki URLs.
- No in-app browser in MVP.

### 4.3 Data flow

1. **App boot.** SQLite DB opens → migrations run → bundled static content loaded → current run row fetched → current day resolved → today view renders.
2. **Render today view.** Today view queries SQLite for current-day task states + joins against bundled task templates for titles / wiki links / bundle annotations.
3. **Task completion.** Tap → UI dispatches update → repo writes row to SQLite → UI re-queries affected slice (or uses optimistic state).
4. **Advance day.** Tap → business-logic function runs: write completion snapshot, compute carry-forward items, increment current_day → SQLite update → today view refreshes.
5. **Set current day.** Tap → user picks target day → business-logic function computes skipped-day range → skipped-days summary screen renders → user dismisses → SQLite updates current_day → today view refreshes.
6. **Wiki link.** Tap → `Linking.openURL(task.wiki_url)` → OS browser opens.

### 4.4 Where logic lives

| Concern | Location |
|---|---|
| Rendering | UI components (screens) |
| Day/task rules | Pure TS in `logic/` module |
| SQL / persistence | Repo modules in `db/` |
| Content definitions | Bundled JSON in `content/` |
| Navigation | `expo-router` (file-based) |
| External links | `expo-linking` wrapper |

### 4.5 Where state lives

- **Durable:** SQLite (run state, task completion, current day, flags).
- **Ephemeral:** React component state (loading, modal visibility, form input).
- **Static / read-only:** bundled JSON content files (task templates, bundle data, wiki entries).
- **None of the above:** no server-side state, no remote cache, no cloud sync, no global store.

### 4.6 AI / external services

- **AI model integrations:** none for MVP.
- **Auth provider:** none.
- **External APIs:** none (the SDV wiki is reached via OS browser, not via API).
- **Analytics:** none.
- **Payments / email / object storage:** none.

### 4.7 Deployment environment

- **Build pipeline:** EAS Build (free tier) produces signed release APKs.
- **Distribution:** sideload APK to personal Android device. No Play Store for MVP.
- **Update mechanism:** rebuild + reinstall on each content / logic change. OTA updates (`expo-updates`) considered for V1 if iteration speed demands it.
- **Target:** single Android device (personal phone). No device matrix testing; no minimum-API-level optimization work.

---

## 5. Database Schema

SQLite, on-device, single DB file per install. Only **user state** lives here. **Static content** (task templates, bundle data, mini-wiki entries) is bundled JSON — see §4.2.

### 5.1 Entities

#### `run`
Represents the player's active run. MVP ships with exactly one row (hardcoded default); the table exists so V1 can add multiple runs without migration.

| Field | Type | Null | Notes |
|---|---|---|---|
| `id` | TEXT (uuid) | No | PK |
| `name` | TEXT | No | Default `"My Farm"`; user-editable in V1. |
| `playstyle_id` | TEXT | No | MVP: `"default"` (hardcoded). V1+: references a static playstyle definition. |
| `current_day` | INTEGER | No | 1-indexed within the current season. MVP: Spring only, so 1–28. |
| `current_season` | TEXT | No | MVP: always `"spring"`. Reserved for V2. |
| `current_year` | INTEGER | No | MVP: always `1`. |
| `created_at` | INTEGER | No | Unix ms. |
| `updated_at` | INTEGER | No | Unix ms. |

Constraints: at least one row always exists (seeded on first boot). Soft-delete not needed for MVP.

#### `task_state`
Per-task user state. Joins to static task templates by `task_id`. One row per (run, task) pair; created lazily when a task first appears in a day's view.

| Field | Type | Null | Notes |
|---|---|---|---|
| `id` | TEXT (uuid) | No | PK |
| `run_id` | TEXT | No | FK → `run.id` |
| `task_id` | TEXT | No | References a task defined in bundled static content. Not a FK (target lives outside SQLite). |
| `origin_day` | INTEGER | No | The day the task was originally scheduled for. Source of the "from yesterday" flag when `origin_day < run.current_day`. |
| `status` | TEXT | No | `pending` \| `completed` \| `missed` \| `dismissed`. |
| `completed_at` | INTEGER | Yes | Unix ms; set when `status → completed`. |
| `missed_at` | INTEGER | Yes | Set when `status → missed` (deadline passed). |
| `notes` | TEXT | Yes | V1 user note field; nullable, unused in MVP. |
| `created_at` | INTEGER | No | |
| `updated_at` | INTEGER | No | |

Constraints: `UNIQUE(run_id, task_id)`. Status transitions enforced in business logic, not DB. Carry-forward is implicit: any `pending` row with `origin_day <= run.current_day` appears on today's view.

#### `skipped_day_log` (optional MVP, required for skipped-days summary)
Created when the user jumps the current day forward via "set current day." Stores a snapshot so the skipped-days summary can be shown once.

| Field | Type | Null | Notes |
|---|---|---|---|
| `id` | TEXT (uuid) | No | PK |
| `run_id` | TEXT | No | FK → `run.id` |
| `from_day` | INTEGER | No | Start of skipped range (inclusive). |
| `to_day` | INTEGER | No | End of skipped range (inclusive). |
| `reviewed_at` | INTEGER | Yes | Set when user dismisses the summary. |
| `created_at` | INTEGER | No | |

Constraints: one row per skip event. Cleared/ignored after `reviewed_at` is set — retained for audit, not functional.

#### `app_meta`
Key-value store for non-entity app state (schema version, last-opened timestamp, feature flags if ever needed).

| Field | Type | Null | Notes |
|---|---|---|---|
| `key` | TEXT | No | PK |
| `value` | TEXT | No | JSON-encoded. |
| `updated_at` | INTEGER | No | |

### 5.2 Relationships

```
run (1) ──< task_state (many)
run (1) ──< skipped_day_log (many)
task_state.task_id ──→ static content (not FK)
```

### 5.3 Indexes

- `task_state (run_id, origin_day)` — primary query is "tasks for current day in current run."
- `task_state (run_id, status)` — for "all pending" queries on advance-day.
- `skipped_day_log (run_id, reviewed_at)` — for finding unreviewed skips.

### 5.4 Validation rules

Enforced in repo layer (pure TS), not DB:
- `run.current_day` must be in `[1, 28]` for MVP (Y1 Spring).
- `task_state.status` must be one of the 4 enum values.
- `task_state.completed_at` required if `status = 'completed'`; null otherwise.
- `skipped_day_log.from_day <= to_day`.

### 5.5 Required vs optional

Required (NOT NULL): all `id`, FKs, timestamps, `status`, day/season/year fields on `run`.
Optional: `notes`, `completed_at`, `missed_at`, `reviewed_at`.

### 5.6 Soft delete

Not used in MVP. If V1 adds run management, introduce `deleted_at` on `run` rather than hard delete.

### 5.7 Ownership / access

Single-user, single-device. No multi-tenancy, no user_id column. Backups = manual device backup for now. Export/import is V2.

### 5.8 Migrations

- Schema version tracked in `app_meta` under key `schema_version`.
- On boot, repo layer compares stored version to code-defined version and runs forward migrations idempotently.
- No down-migrations. Breaking content-model changes require a version bump.

---

## 6. API Design

**MVP has no backend and no HTTP API.** This section documents the two interfaces that *do* exist:

1. **Internal API** — the typed function surface between UI and business logic / repo layers. This is the "API" that matters for MVP.
2. **External integration** — the one outward-facing call: opening the SDV wiki in the OS browser.

If a backend is introduced in V2+, add HTTP endpoint specs here alongside these.

### 6.1 Internal API — business logic module (`logic/`)

All pure TS. No side effects beyond calling the repo layer. Unit-testable in isolation.

#### `getTodayView(runId: string): TodayView`
- **Purpose:** assemble everything needed to render the today view.
- **Returns:**
  ```ts
  {
    run: Run;
    tasks: Array<{
      task: TaskTemplate;         // from static content
      state: TaskState;           // from SQLite
      carriedForward: boolean;    // state.origin_day < run.current_day
      missed: boolean;            // status === 'missed'
      deadline?: { day: number; consequence?: string };
    }>;
    upcomingDeadlines: Array<{ day: number; label: string }>;
  }
  ```
- **Errors:** throws if `runId` not found.

#### `completeTask(runId: string, taskId: string): void`
- **Purpose:** mark a task completed.
- **Side effects:** writes `task_state` row (status=completed, completed_at=now).
- **Errors:** throws if task already completed, or task doesn't exist in current view.

#### `dismissTask(runId: string, taskId: string): void`
- **Purpose:** user explicitly removes a carried-forward task without completing it.
- **Side effects:** `task_state.status = 'dismissed'`.

#### `advanceDay(runId: string): AdvanceResult`
- **Purpose:** move `run.current_day` forward by 1.
- **Logic:**
  1. For all `pending` tasks on current day with a deadline that has passed → mark `missed`.
  2. Remaining `pending` tasks → stay `pending` (implicit carry-forward).
  3. Increment `run.current_day`.
  4. Return list of newly-missed tasks for optional UI surfacing.
- **Returns:** `{ newlyMissed: TaskTemplate[] }`

#### `setCurrentDay(runId: string, targetDay: number): SetDayResult`
- **Purpose:** jump the current day (forward or backward).
- **Logic:**
  1. If `targetDay > current_day`, create `skipped_day_log` row for the range `[current_day, targetDay - 1]`.
  2. Apply deadline-miss logic across the skipped range.
  3. Set `run.current_day = targetDay`.
- **Returns:** `{ skippedRange?: { from: number; to: number }; newlyMissed: TaskTemplate[] }`
- **Errors:** throws if `targetDay` out of `[1, 28]`.

#### `getSkippedDaysSummary(runId: string): SkippedDaysSummary | null`
- **Purpose:** feed the skipped-days summary screen.
- **Returns:** latest unreviewed `skipped_day_log` with the task list that would have appeared in the range, or `null` if nothing unreviewed.

#### `markSkippedSummaryReviewed(runId: string, logId: string): void`
- **Purpose:** user dismissed the summary.
- **Side effects:** `skipped_day_log.reviewed_at = now`.

### 6.2 Internal API — repo modules (`db/`)

Thin typed wrappers around SQLite. Callers never write SQL directly. Representative surface:

- `runRepo.get(runId): Run`
- `runRepo.getDefault(): Run` (seeds if missing)
- `runRepo.updateCurrentDay(runId, day): void`
- `taskStateRepo.getForDay(runId, day): TaskState[]` — all states for a given origin_day
- `taskStateRepo.getPendingThroughDay(runId, day): TaskState[]` — pending with origin_day ≤ day (drives carry-forward)
- `taskStateRepo.upsert(state): void`
- `taskStateRepo.setStatus(id, status, timestamps): void`
- `skippedDayLogRepo.create(runId, from, to): SkippedDayLog`
- `skippedDayLogRepo.latestUnreviewed(runId): SkippedDayLog | null`
- `skippedDayLogRepo.markReviewed(id): void`
- `appMetaRepo.get(key): string | null`
- `appMetaRepo.set(key, value): void`

Every repo call is synchronous from the caller's perspective via `expo-sqlite`'s async API — wrapped in awaited promises.

### 6.3 External integration — SDV wiki

- **Mechanism:** `Linking.openURL(url)` from `expo-linking`.
- **Inputs:** URL string taken from a task template's `wiki_url` field (static content).
- **Auth:** none.
- **Error handling:** if `Linking.canOpenURL` returns false (unlikely on Android with a default browser), show a toast and leave the user on the task view. No in-app retry, no fallback UI.
- **Rate limiting:** N/A — user-initiated.
- **Timeout:** N/A — handled by the OS browser.

### 6.4 Cross-cutting concerns

- **Rate limiting:** not applicable (no network in the hot path).
- **Pagination:** not applicable at MVP data sizes (Y1 Spring = at most a few dozen tasks per run).
- **Retry strategy:** not applicable — no flaky external service. SQLite writes are local; failures are programmer errors, not transient.
- **Timeouts:** not applicable for internal calls. External wiki link handed to OS.
- **Error surfaces:** business-logic errors throw typed errors; UI shows a simple toast and logs. No crash-reporting service for MVP.

### 6.5 Out of scope for MVP (listed for V2+ planning)

- HTTP API / backend sync
- Auth endpoints
- OTA content delivery endpoints
- Remote logging / crash reporting
- Push notifications API
- Community / sharing API

---

## 7. Milestone Roadmap

Six stages: **v0 spike → MVP → V1 → V2 → Later → Not in Scope.** Every stage has goals, features, dependencies, success criteria, and exit criteria. Each stage must clear its exit criteria before the next begins.

---

### 7.1 v0 — behavioral spike (pre-MVP)

**Goal.** Validate the two riskiest assumptions before writing real content or building real features:
1. You'll actually reach for the phone during an SDV session.
2. Which data pointers (items, NPCs, mechanics) you actually want during play.

**Features.**
- Today view with hardcoded day-indexed tasks for Y1 Spring days 1–7.
- Task completion (checkboxes, local SQLite state).
- "Advance day" button.
- Per-task external wiki link via `Linking.openURL` (placeholder URLs OK).

Explicitly NOT in v0: run / playstyle concept, bundle integration, internal mini-wiki, crop planner, deadlines banner, onboarding, set-current-day, skipped-days summary.

**Dependencies.** None — stack is chosen, no prior milestone required.

**Success criteria.**
- 3+ real SDV sessions played with v0 in hand.
- User reaches for the phone at least several times per in-game day.
- User produces a rough list of data pointers they kept wanting → seeds mini-wiki scope.
- Today-view interaction feels right, or concrete adjustments are identified.

**Exit criteria (must all be true to start MVP).**
- Phone-as-companion validated (Risk 1 closed or consciously accepted).
- Mini-wiki initial content scope identified.
- No architectural blocker discovered.
- User still wants to continue (no kill decision).

---

### 7.2 MVP

**Goal.** Ship the smallest real product that supports a full Y1 Spring run end-to-end for one hardcoded playstyle, usable as a personal-play companion in real sessions.

**Features.**
1. Single hardcoded default run (no creation UI; one baked-in playstyle).
2. Today view — ordered list combining next-step + checklist + priorities + inline deadlines + upcoming-deadlines banner, one screen.
3. Task completion.
4. Deadlines as task metadata (with missed-tag + consequence note).
5. Per-task external wiki link.
6. Day control — advance-day (auto-carry-forward), set-current-day, skipped-days summary.
7. Crop planning (light) — via day tasks, not a separate planner.
8. Bundle requirements integrated into step instructions (no separate tracker).
9. Mini-wiki skeleton with placeholder content.

**Dependencies.** v0 exit criteria met. Task content for Y1 Spring written. Bundled content format pinned.

**Success criteria.**
- One complete Y1 Spring run played end-to-end with the app as primary companion, no external notes.
- First-value felt within 5 minutes of first open.
- User naturally reaches for the app in subsequent sessions (not forced).
- Full MVP Definition of Done from §2.9 satisfied.

**Exit criteria (must all be true to start V1).**
- End-to-end Y1 Spring run completed using only the app.
- No major usability blocker outstanding.
- At least one other playstyle sketched mentally (V1's first promoted feature is multiple playstyles).
- User is still using the app regularly (not abandoned).

---

### 7.3 V1

**Goal.** Make the product usable for repeated runs and richer weekly/seasonal decision-making — still personal-use, still Android.

**Features (promoted from MVP cuts).**
- Playstyle selection UI — pick a playstyle per run; at least 2 playstyles shipped.
- Create-first-run onboarding (light).
- Separate season view / checklist.
- Separate run dashboard (if today view alone is insufficient).

**Features (originally planned V1).**
- Day-based planning view (richer than today list).
- Season-based planning view.
- Run progress overview.
- Milestone tracking.
- Search.
- Filters by season / day / category.
- Relationship / gifting help.
- Energy management tips.
- Money optimization tips.
- Mining guidance.
- Fishing guidance.
- Important missables / alerts.
- Notes attached to a run.
- Edit progress manually.
- Manage runs (rename, archive, delete).
- Import existing run state manually.
- Sample demo run.
- Real mini-wiki content (replacing v0/MVP placeholders).

**Dependencies.** MVP exit criteria met. Playstyle data model designed (the neutral-aspect + playstyle-layer approach from prior project scaffold). Additional Spring content written where needed.

**Success criteria.**
- User completes at least one run per playstyle, comfortably.
- Second playstyle is creatable / switchable without structural rework.
- Relationship + mining + fishing guidance actually referenced during sessions.
- Mini-wiki holds its weight (user tabs out to external wiki meaningfully less).

**Exit criteria (must all be true to start V2).**
- At least 2 playstyles proven in real play.
- Run management (create/archive/switch) used without friction.
- No outstanding high-severity product risk.

---

### 7.4 V2

**Goal.** Deepen adaptability and add reflection/audit layers. Begin to handle the harder guidance cases (mistake recovery, flexibility).

**Features.**
- Flexible guidance buffer — guidance bends rather than breaks.
- Mistake recovery / fallback guidance.
- Hybrid planning view (day + season + milestones).
- Run summary.
- Favorite / pin items or tasks.
- Offline reference cache (may already be effectively true, but explicit).
- Select experience level (beginner / intermediate / advanced tailoring).
- Richer playstyle logic (beyond templates — per-decision branches).
- Notification preferences (only once reminders exist).
- Reset playstyle / reconfigure run.
- Backup / export run data.
- Import run data.
- Completion analytics.
- Most-missed-tasks analysis.
- Run efficiency summary.
- Time-to-value tracking.
- Feature usage analytics.
- Expansion to full Y1 (not just Spring) — only if content writing is sustainable.

**Dependencies.** V1 exit criteria met. Analytics instrumentation chosen. Content authoring pipeline mature enough to sustain full Y1.

**Success criteria.**
- User completes multi-season runs without the app going stale.
- Recovery / flexibility features are used (not just present).
- Export/import has proven useful at least once.

**Exit criteria (for continuing or stopping).**
- V2 is the natural end of the "deeply core" roadmap. If usage plateaus here, stopping is a valid outcome.
- Continue into Later only if the product earns further investment through usage or community interest.

---

### 7.5 Later

**Goal.** Optional enrichment and ambition. None of these are required.

**AI / intelligence.** Dynamic next-step suggestions, adaptive recommendations, natural-language ask-a-question, AI run assistant, auto-generated daily plans, contextual tips, smart fallback suggestions.

**Collaboration / social.** Share run template, import community template, share progress snapshot, collaborative guide authoring, friend comparison / parallel runs.

**Speculative product expansion.** Full wiki mirror, visual farm planner, season simulator / what-if planning, route builder / custom guide authoring, voice companion mode, widget / lock-screen companion, screenshot-based progress detection, save file sync / parsing, cross-game companion framework, reward / motivation layer, persona-based guidance modes.

**Polish extras.** Quick app tour, theme settings, text size / accessibility settings, OTA content updates (`expo-updates`) if iteration pace demands it.

**Dependencies.** Varies per item; none committed.

**Success criteria.** N/A — these ship opportunistically, never as a single release.

---

### 7.6 Not in Scope

Explicit exclusions. These are the guardrails against drift — if a feature-request sounds like one of these, push back.

1. Full wiki replacement.
2. Real-time save file sync / parsing.
3. Advanced AI assistant features (as a core product pillar).
4. Collaboration / community systems as core product.
5. Cross-game platform vision.
6. Deep analytics before core usage is proven.
7. Gamification / reward systems as motivation tactic.
8. Social comparison features.
9. Highly customizable route builder.
10. Enterprise-scale architecture.
11. Heavy account systems and permissions.
12. Complex automation and adaptive intelligence.
13. Extreme design polish before core workflow is validated.
14. Trying to support every Stardew player type at once.
15. Trying to cover every system in full depth in MVP.
16. iOS / desktop / tablet parity (V2+ at earliest).
17. Public launch, Play Store release, monetization.
18. Multiplayer / coop support.

### 7.7 Dangerous distractions

Items that *look* like near-term work but belong much further out. Flag if they re-enter conversation:
- Auto-generated daily plans via AI — tempting, expensive, and masks the real content work.
- Save-file parsing — very high complexity, platform-specific, undermines the "thin companion" thesis.
- Custom route builder for other users — social/tooling rabbit hole.
- Heavy design system / branding exercises before core usage is proven.
- Premature multi-platform refactor.
- Community content pipeline.

---

## 8. Risks and Assumptions

_List major risks and current assumptions._

---

## 9. Open Questions

_Things still undecided._
