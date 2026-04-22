# Milestone Plan — Phase 3 Build

> Ordered implementation slices for v0 and MVP. Derived from [project-spec.md](./project-spec.md) §7 and Phase 3 Step 2.
> Each numbered row below = one branch = one PR. Squash-merge to main.

---

## S0 — Scaffold

Expo + TypeScript (strict) + expo-router + path aliases. No features, no SQLite, no content. App boots to a blank screen.

**Branch:** `feature/scaffold-and-today-v0` (folded with V0-1 — a blank-app PR carries no product signal).

---

## v0 — behavioral spike

Goal (per spec §7.1): validate phone-as-companion before investing in real content or the full data model.

| # | Slice | Layers touched |
|---|---|---|
| V0-1 | Today view renders hardcoded Day 1 tasks inline in component | UI |
| V0-2 | Move content to `/content/tasks/y1-spring.json`; render from file | UI + content |
| V0-3 | SQLite + `runRepo` + `taskStateRepo`; default run seeded on boot | repo + db + migration runner |
| V0-4 | Task completion persists to SQLite (checkbox state survives reload) | UI → logic → repo → db |
| V0-5 | Advance-day button increments `run.current_day`; today view re-queries | logic + repo |
| V0-6 | Per-task wiki link via `Linking.openURL` (placeholder URLs acceptable) | external |
| V0-7 | Fill content for Y1 Spring days 1–7 | content only |

### v0 exit gate (blocks MVP)

Per spec §7.1 the gate is "3+ real SDV sessions." **User has scoped this down to one real session** for their own validation. Recording this deviation here; revisit if one session doesn't give enough signal.

Gate conditions:
- One real SDV session played with v0 in hand (scoped from 3+).
- Phone-reach validated or consciously accepted.
- Data-pointer list produced (seeds mini-wiki).
- No architectural blocker surfaced.

---

## MVP — post-v0

Goal (per spec §7.2): ship the smallest real product that supports a full Y1 Spring run end-to-end.

| # | Slice | Notes |
|---|---|---|
| M1 | Expand content to all 28 Spring days | content only |
| M2 | Deadline metadata on tasks + missed-tag + consequence note | logic + UI |
| M3 | Upcoming-deadlines banner on today view | logic + UI |
| M4 | Bundle requirements integrated into step text | content + render |
| M5 | Crop planning surfaced inside day tasks | content |
| M6 | Set-current-day + skipped-days summary screen | logic + new route |
| M7 | Mini-wiki skeleton route + placeholder entries | new routes + content |
| M8 | Carry-forward "from yesterday" flag in UI | UI polish on existing logic |
| M9 | First EAS build → sideloaded APK | deployment |

### MVP exit gate

Per spec §7.2: one full Y1 Spring run played end-to-end using only the app; first-value felt within 5 minutes of first open; app still being reached for in subsequent sessions.

---

## Dependencies (critical path)

- S0 blocks everything.
- V0-3 blocks V0-4 and V0-5 (both need the repo).
- V0-1 and V0-2 can land before the repo exists (render from array/JSON, no persistence).
- M6 depends on V0-5 (same day-state code path).
- M3 depends on M2 (banner reads deadline metadata).
- M9 depends on M1–M8 (nothing to ship otherwise).

---

## Open questions (parked, to resolve before the relevant slice)

- **Image handling.** The raw Y1 Spring guide dump (`docs/y1-spring-guide-raw.md`) uses Obsidian `![[Pasted image...]]` embeds. Images are not in the repo and won't render in the app. Decision needed before V0-2 (first JSON shape). Options: (a) drop images, rely on text; (b) extract attachments into `/assets/guide/` and reference relative paths; (c) defer images to mini-wiki layer only.
- **Task granularity for Day 1.** The raw dump has ~22 micro-steps. The "see-what-to-do-within-seconds" UX test (CLAUDE.md §3) argues for ~10 compressed tasks. V0-1 ships the compressed version; revisit after the real session.
