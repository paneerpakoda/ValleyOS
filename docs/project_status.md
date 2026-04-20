# Project Status

Living snapshot. Update at the end of each work session or when status changes meaningfully. Older snapshots are not preserved here — git history is the audit trail.

**Last updated:** 2026-04-20 (Phase 2 Steps 7+8 complete — deferred installs, inventory captured)

---

## Current milestone

**Phase 2 — Setup.** Preparing the project environment so building is smooth. Phase 2 ends when the v0 app can be built, installed, and opened on the target Android device.

Stage in roadmap: pre-v0. See [`project-spec.md` §7.1](./project-spec.md) for v0 definition.

## Completed

- **Phase 1 — Plan** ✅ (see [`phase-1-summary.md`](./phase-1-summary.md))
- **Phase 2, Steps 1–4:**
  - Step 1: GitHub repo created, `main` protected, branching rules in `CLAUDE.md`. ✅
  - Step 2: Folder scaffold (`/app`, `/src`, `/content`, `/docs`, `/scripts`, `/assets`). ✅
  - Step 3: `.env.example` with honest minimal surface. ✅ ([#1](https://github.com/paneerpakoda/ValleyOS/pull/1))
  - Step 4: `CLAUDE.md` project memory. ✅ ([#2](https://github.com/paneerpakoda/ValleyOS/pull/2))
  - Step 5: Automated docs (`architecture.md`, `changelog.md`, `project_status.md`). ✅
  - Step 6: `/update-docs-and-commit` slash command. ✅
  - Step 7+8: Tools & MCP — inventory captured in `docs/tools.md`; all installs deliberately deferred until Expo scaffold. ✅

## In progress

- Nothing. Phase 2 setup steps (1–8) are done. Next: lock dev-device workflow, then initialize the Expo app.

## Next priorities

In order:

1. **Lock dev-device workflow** — Expo Go vs custom dev client vs signed APK sideload from day one. Drives the next step.
2. **Install library-docs MCP** (e.g. Context7) before `npx create-expo-app` — per `docs/tools.md`.
3. **Install `eas-cli`** globally alongside the Expo scaffold.
4. **Initialize the Expo app** — `npx create-expo-app` into a feature branch, wire TypeScript + expo-router + expo-sqlite, first route renders "hello".
5. **Build pipeline working end-to-end** — open the empty app on the target Android phone. This is the Phase 2 exit gate.
6. **Move into v0** — author hardcoded Y1 Spring days 1–7 task content, ship a build, play 3+ real sessions.

## Blockers

None.

## Decisions pending

Carried from [`phase-1-summary.md`](./phase-1-summary.md) "Still open going into Phase 2":

| Decision | Why it matters | When to decide |
|---|---|---|
| Dev-device workflow (Expo Go / dev client / APK sideload) | Determines what the scaffold needs and how iteration speed feels | Before Step 6 (Expo init) |
| Atomic task definition (granularity of one task) | Affects content authoring throughput and today-view density | Early v0 — once we see real tasks on a real screen |
| v0 content source (hand-written vs placeholder) | Affects time budget for v0 | Just before v0 starts |
| Time budget for v0 and MVP | Sets pace; not a deadline | Anytime — best to name a rough number now |
| Schema-migration strategy (concrete first cut) | Needed once SQLite is wired | When the first migration is needed (during Expo init or shortly after) |
| Design system (typography, spacing, dark mode) | Currently deferred | After v0 reveals what UI density actually feels right |

## Risks being watched

(From [`phase-1-summary.md`](./phase-1-summary.md), unchanged.)

1. Phone-as-companion reach — v0 addresses this.
2. Content throughput — risk of content work dwarfing code.
3. Day-level sufficiency — may need moment-level sooner than expected.
4. Scope creep into AI / save-parsing / community features — see `CLAUDE.md §4`.
