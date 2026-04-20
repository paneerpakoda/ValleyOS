# Phase 1 — Plan: Summary

End-of-phase reference. Phase 1 ran Steps 1–13 plus Product Requirements, Tech Design, Architecture, Schema, API, and Milestone planning.

---

## Artifacts produced

- **[brainstorm.md](brainstorm.md)** — 14 sections; exploration doc with feature dump, milestone breakdown, risks, open questions.
- **[project-spec.md](project-spec.md)** — 9 sections; implementation-oriented spec covering product requirements, tech design, architecture, DB schema, API, and milestone roadmap. §8 Risks and §9 Open Questions intentionally left empty (covered in brainstorm §13 / §14).
- **[pressure-tests/2026-04-19-phase1-plan.md](pressure-tests/2026-04-19-phase1-plan.md)** — first pressure test, with user response notes inline.
- Memory files updated in `~/.claude/projects/-Users-root1-Projects-ValleyOS/memory/`: project intent, success criteria, target user, problem statement, value proposition, core outcome, MVP scope, tech stack.

---

## Step-by-step

| Step | Output | Key decision |
|---|---|---|
| 1 | Project intent | Primary: personal MVP for in-play clarity. Secondary: per-save playstyles, reusable for similar players. |
| 2 | Success criteria | Success/failure/partial-failure bars, 6 assumptions under test, 10-bullet MVP Definition of Done. |
| 3 | Target user | Intermediate SDV player on Android; optimized-but-forgiving; primary = self, no secondary for MVP. |
| 4 | Problem statement | Real-time in-play decision friction — not info discovery. Key insight: problem is *using* info at the right moment, not *finding* it. |
| 5 | Value proposition | Scattered guide info → clear real-time steps + tracking + quick reference. Tagline: *A calm companion app for efficient Stardew Valley runs.* |
| 6 | Core user outcome | "Know what to do next within seconds." MVP granularity = **day-level**; moment-level deferred. Failure test: can the user see their next actions in a few seconds? |
| 7 | brainstorm.md scaffold | 14-section doc instantiated and seeded with Steps 1–6. |
| 8 | Full feature dump | 72 features across 8 categories (A–H) with value / complexity / dependency notes. |
| 9 | Milestone bucketing | Tightened rule: *one playstyle, one run, one slice, one next-step flow.* 17 MVP features initially. |
| 10 | Decision filters | Ran 7 filters over MVP. Tightened to 9 features. MVP slice decided: **full Y1 Spring + CC bundles**. |
| 11 | Risks & unknowns | Product / technical / operational risks; 7 assumptions under test; confidence tiers (high/med/low). |
| 12 | Pressure test | Identified top 3 killers (phone-reach, content throughput, day-level sufficiency). Inserted **v0 spike** before MVP. Bundle tracking reframed as "integrated into steps." Mini-wiki → placeholder content first. |
| 13 | project-spec.md scaffold | 9-section implementation spec created. |
| PR | Product Requirements (§2) | 8 JTBDs, 5 core user flows, v0+MVP scope, non-goals, success metrics split (validation / functional / failure), scenarios (core / edge / failure). Day-advance rule = auto-carry-forward. Missed deadlines = missed-tag + consequence. Skipped days = summary screen. |
| TD | Tech Design (§3) | Stack locked: **TypeScript + Expo (React Native) + expo-router + SQLite**. No backend, no auth, no cloud, no analytics, no AI. EAS Build → sideload APK. |
| Arch | Architecture (§4) | Single-app, offline-first. UI → logic (pure TS) → repo → SQLite. Static content (tasks, bundles, mini-wiki) bundled as JSON *outside* SQLite. External linking opens OS browser for wiki. No global state library. |
| DB | Schema (§5) | 4 entities: `run`, `task_state`, `skipped_day_log`, `app_meta`. Carry-forward is implicit via `status=pending` + `origin_day ≤ current_day`. Indexes defined; validation in repo layer. |
| API | API design (§6) | No HTTP API. Documented internal `logic/` module (`getTodayView`, `completeTask`, `advanceDay`, `setCurrentDay`, `getSkippedDaysSummary`, `dismissTask`) and `db/` repo surface. One external call: `Linking.openURL` for wiki. |
| MS | Milestone roadmap (§7) | 6 stages: v0 → MVP → V1 → V2 → Later → Not in Scope, each with goals / features / dependencies / success & exit criteria. Added 7.7 "Dangerous distractions" guardrail. |

---

## Locked decisions (carry into Phase 2)

**Product**
- Primary user = self (intermediate SDV, Android, optimized-but-forgiving).
- Core outcome = day-level "know what to do next" within seconds.
- MVP slice = full Y1 Spring + Community Center bundles.
- One hardcoded playstyle for MVP; playstyle selection → V1.
- Bundle requirements integrated into step instructions (no separate tracker).
- Mini-wiki ships with placeholder content until v0 reveals needed data pointers.
- Day-advance rule: auto-carry-forward incomplete tasks.
- Missed deadlines surface with "missed" tag + consequence note.
- Set-current-day triggers a skipped-days summary.

**Technical**
- TypeScript + Expo (RN) + expo-router + SQLite (offline-first, on-device).
- Static content bundled as JSON, outside the SQLite DB.
- No backend, no auth, no cloud, no analytics, no AI for MVP.
- EAS Build → signed APK → sideload to personal device.
- No global state library; React state + repo calls.
- Deadline misses computed eagerly at advance-day.

**Process**
- v0 spike ships before MVP to validate phone-as-companion assumption.
- Every pressure test archived in `pressure-tests/`.

---

## Still open going into Phase 2

These are genuine unknowns to resolve or accept during Setup:

- **Content authoring workflow.** Exactly how task templates, bundle mappings, and mini-wiki entries are authored (file layout, format, validation).
- **Atomic task definition.** The granularity of a single task (e.g. "plant 15 parsnips" vs "do farming this morning") — needs a concrete writing convention.
- **v0 content.** What real text goes into the 7-day spike? Hand-written, or placeholder?
- **Time budget.** Hours/weeks allocated to v0 and MVP are not sized.
- **Dev-device workflow.** How the Android phone gets the dev build (Expo Go during v0? Custom dev client? Signed APK sideload?).
- **Schema-migration strategy.** Concrete first cut of the migration runner.
- **Design system.** Minimal visual language — dark mode, typography, spacing. Deferred but needed soon.

---

## Main risks to keep watching

1. **Phone-as-companion reach** (behavioral, untested) — v0 addresses this.
2. **Content throughput** (operational, unsized) — risk of content work dwarfing code.
3. **Day-level sufficiency** (product) — may need moment-level sooner than expected.
4. **Scope creep into moment-level guidance, AI, or community features** — see §7.7 Dangerous distractions.

---

## Phase 2 — Setup

Phase 2 prepares the environment: project scaffold, dependencies installed, SQLite + migrations wired up, content directory structured, first Expo route rendering, device build pipeline working. Phase 2 ends when v0 can be built, installed, and opened on the target Android device — without any real gameplay content yet.
