# Project Status

Living snapshot. Update at the end of each work session or when status changes meaningfully. Older snapshots are not preserved here — git history is the audit trail.

**Last updated:** 2026-04-22 (Phase 3 Step 3 — S0 scaffold + V0-1 today view in flight)

---

## Current milestone

**Phase 3 — Build: in progress.** Phase 3 Step 2 complete ([`milestone-plan.md`](./milestone-plan.md) landed). Phase 3 Step 3 underway on branch `claude/compassionate-robinson-434708` — Expo scaffold and the first v0 slice folded into one PR.

Stage in roadmap: v0 spike (pre-MVP). See [`project-spec.md` §7.1](./project-spec.md) and [`milestone-plan.md`](./milestone-plan.md).

## Completed

- **Phase 1 — Plan** ✅ (see [`phase-1-summary.md`](./phase-1-summary.md))
- **Phase 2 — Setup** ✅ (see [`phase-2-summary.md`](./phase-2-summary.md))
- **Phase 3 Step 2** ✅ — [`milestone-plan.md`](./milestone-plan.md) committed; v0 and MVP slices sequenced.

## In progress

- **Phase 3 Step 3 — S0 scaffold + V0-1 today view** (branch: `claude/compassionate-robinson-434708`).
  - Expo SDK 54 + expo-router + TypeScript strict + `noUncheckedIndexedAccess`.
  - Path aliases: `@/*` → `./src/*`, `@content/*` → `./content/*`.
  - Day 1 tasks rendered inline on the today screen (compressed from the raw dump to 10 ordered items).
  - No SQLite yet; no completion state; no day control.
- **User-authored Y1 Spring guide** at [`y1-spring-guide-raw.md`](./y1-spring-guide-raw.md) — Day 1 drafted, rest pending.

## Next priorities

In order:

1. Finish S0 + V0-1 PR — verify `npm run typecheck` and `npm run dev` on device, merge.
2. **V0-2** — move Day 1 content to `/content/tasks/y1-spring.json`, adjust the image-handling question before the JSON shape is committed.
3. **V0-3 / V0-4 / V0-5** — SQLite + repo + completion + advance-day.
4. **V0-6** — per-task wiki link via `Linking.openURL`.
5. **V0-7** — fill Y1 Spring days 1–7 (user authoring + JSON import).
6. **v0 exit gate** — one real SDV session with the app in hand (scoped down from the spec's 3+ sessions by user preference; recorded in `milestone-plan.md`).
7. Move to MVP slices M1–M9.

## Blockers

None.

## Decisions pending

| Decision | Why it matters | When to decide |
|---|---|---|
| Image handling (Obsidian `![[...]]` embeds in the raw guide) | Determines content JSON shape | Before V0-2 |
| Dev-device workflow (Expo Go vs dev client vs signed APK) | Decides how the app reaches the phone during v0 | Before the v0 exit-gate session |
| Atomic task granularity | Compressed 10-task v0 rendering vs fuller dump | Revisit after first real session |
| Schema-migration strategy (concrete first cut) | Needed for V0-3 | When SQLite is wired (V0-3) |
| Design system (typography, spacing, dark mode tokens) | Currently minimal inline styles | After v0 reveals what feels right |

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
