# Project Status

Living snapshot. Update at the end of each work session or when status changes meaningfully. Older snapshots are not preserved here — git history is the audit trail.

**Last updated:** 2026-04-22 (S0 + V0-1 merged and smoke-tested on device; dev-device workflow decided)

---

## Current milestone

**Phase 3 — Build: in progress.** S0 scaffold + V0-1 today view merged ([#6](https://github.com/paneerpakoda/ValleyOS/pull/6)) and smoke-tested on device via Expo Go tunnel. Now on parallel tracks: user writing Days 2–7 content in the raw dump; code side moves through V0-2 → V0-6.

Stage in roadmap: v0 spike (pre-MVP). See [`project-spec.md` §7.1](./project-spec.md) and [`milestone-plan.md`](./milestone-plan.md).

## Completed

- **Phase 1 — Plan** ✅ (see [`phase-1-summary.md`](./phase-1-summary.md))
- **Phase 2 — Setup** ✅ (see [`phase-2-summary.md`](./phase-2-summary.md))
- **Phase 3 Step 2** ✅ — [`milestone-plan.md`](./milestone-plan.md) committed.
- **S0 scaffold + V0-1 today view** ✅ ([#6](https://github.com/paneerpakoda/ValleyOS/pull/6)). Expo SDK 54 + expo-router + TypeScript strict boots into a dark-themed today screen rendering 10 compressed Day 1 tasks. Smoke-tested on Android via Expo Go over tunnel.
- **Dev-device workflow decided** ✅ — Expo Go + tunnel mode for v0. See [`decisions.md`](./decisions.md).

## In progress

- **User-authored Y1 Spring guide** at [`y1-spring-guide-raw.md`](./y1-spring-guide-raw.md) — Day 1 drafted; Days 2–7 being written. Source material for V0-7 content import.
- **V0-2** — move Day 1 content to `/content/tasks/y1-spring.json` and render from file.

## Next priorities

In order:

1. **V0-2** — content → JSON (resolve image-handling question inline).
2. **V0-3** — SQLite + `runRepo` + `taskStateRepo` + default run seeded.
3. **V0-4** — task completion persists to SQLite.
4. **V0-5** — advance-day button.
5. **V0-6** — per-task wiki link via `Linking.openURL`.
6. **V0-7** — fill Y1 Spring days 1–7 once your raw dump is complete.
7. **v0 exit gate** — one real SDV session with the app (scoped from spec's 3+ sessions per user preference).
8. Move to MVP slices M1–M9.

## Blockers

None.

## Decisions pending

| Decision | Why it matters | When to decide |
|---|---|---|
| Image handling (Obsidian `![[...]]` embeds in the raw guide) | Determines content JSON shape | Before V0-2 commits the shape |
| Atomic task granularity | Compressed 10-task v0 rendering vs fuller dump | Revisit after first real session |
| Schema-migration strategy (concrete first cut) | Needed for V0-3 | When SQLite is wired (V0-3) |
| Design system (typography, spacing, dark mode tokens) | Currently minimal inline styles | After v0 reveals what feels right |
| Dev-client vs APK sideload for MVP | EAS-built APK is the intended distribution per spec §4.7 | At M9 (first EAS build) |

## Decisions resolved

| Decision | Outcome | Recorded in |
|---|---|---|
| Dev-device workflow for v0 | Expo Go + tunnel mode (`npm run dev:tunnel`) | [`decisions.md`](./decisions.md) |

## Risks being watched

(From [`phase-1-summary.md`](./phase-1-summary.md), unchanged.)

1. Phone-as-companion reach — v0 addresses this.
2. Content throughput — risk of content work dwarfing code.
3. Day-level sufficiency — may need moment-level sooner than expected.
4. Scope creep into AI / save-parsing / community features — see `CLAUDE.md §4`.
