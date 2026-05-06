# Changelog

All notable changes to Valley OS land here. Format: [Keep a Changelog](https://keepachangelog.com/en/1.1.0/). Versioning starts at `v0.0.x` and bumps to `v0.1.0` when the v0 spike ships on a real device.

Categories:
- **Added** — new features.
- **Changed** — changes to existing behavior.
- **Fixed** — bug fixes.
- **Removed** — features dropped.
- **Architecture** — structural changes (schema, layering, dependencies).
- **Docs** — documentation-only changes.

---

## [Unreleased]

### Added
- **S0 scaffold** — first real app code: `package.json`, `tsconfig.json`, `app.json`, `eslint.config.js`. Expo SDK 54 + expo-router 6 + React 19 + RN 0.81. Path aliases `@/*` → `./src/*` and `@content/*` → `./content/*`. TypeScript strict mode plus `noUncheckedIndexedAccess`.
- **V0-1 today view** — `app/_layout.tsx` (single Stack) and `app/index.tsx` (hardcoded Day 1 task list, dark theme inline styles). Data module at `src/lib/sample-day-1.ts`.
- **User-authored guide dump** — `docs/y1-spring-guide-raw.md` holds the player's own Y1 Spring notes; Day 1 drafted. Source for V0-2 JSON import.
- `/update-docs-and-commit` slash command (`.claude/commands/update-docs-and-commit.md`) — analyzes branch changes, updates the right docs conditionally, stages and commits. Refuses to run on `main`. Handles all four planned docs (`decisions.md`, `testing.md`, `deployment.md`, `known_issues.md`) on their respective triggers.

### Changed
- Refined `.gitignore` Obsidian policy: track small config files but ignore installed plugin/theme binaries (`.obsidian/plugins/`, `.obsidian/themes/`) and root-level scratch attachments (`/Pasted image *.png`, `/Untitled*.base`). Also ignore `.claude/worktrees/` (Claude Code harness state, can be hundreds of MB). Refines, not reverses, the phase-2 "Obsidian settings travel with the repo" decision.

### Docs
- Parked a third V0-2 open question in `docs/milestone-plan.md` — content-type richness for the JSON shape. References closed [PR #8](https://github.com/paneerpakoda/ValleyOS/pull/8) (`feature/early-test-proto`) for the rich-types alternative that was set aside in favor of the smaller "inline first" shape on main.
- Added `docs/milestone-plan.md` — Phase 3 Step 2 artifact. Orders v0 and MVP into 7 + 9 thin vertical slices with dependencies and a parked open-questions list.
- Added `docs/architecture.md` (focused architecture overview, links to spec for detail).
- Added `docs/changelog.md` (this file).
- Added `docs/project_status.md` (living state-of-the-project doc).
- Added `docs/tools.md` — tools & MCP inventory (installed / deferred with triggers / consciously skipped). Zero tools installed today; Phase 2 Steps 7+8 deliberately deferred until Expo scaffold lands.
- Added `docs/phase-2-summary.md` — end-of-phase reference for Phase 2 (Setup).
- Added `CLAUDE.md §8 → Planned docs` table — reserves paths and triggers for `decisions.md`, `testing.md`, `deployment.md`, `known_issues.md` without creating empty placeholders.
- Updated `CLAUDE.md §8` and `README.md` doc index to reference `tools.md` and `phase-2-summary.md`.
- Updated phase labels in `CLAUDE.md` and `README.md` to reflect Phase 2 complete.
- Updated `docs/architecture.md` — `TodayView` lives at `/app/index.tsx` (no route groups yet); dependency table reflects the actual installed set (Expo 54, expo-router 6, Reanimated 4, RN Screens, Safe Area, Worklets, Splash Screen, System UI); `expo-sqlite` listed as **planned** until V0-3 lands.

### Architecture
- Adopted Expo's default new architecture (`newArchEnabled: true`), React Compiler experiment, and typed routes. Android-only build target; iOS and web intentionally stripped from `app.json` and `package.json`.

### Dev workflow
- Chose **Expo Go + tunnel mode** as the v0 dev-device workflow after LAN mode failed to reach the phone during V0-1 smoke testing (likely AP-isolation or a `utun` VPN capturing `192.168.1.x`). Full reasoning in [`docs/decisions.md`](./decisions.md). Added `npm run dev:tunnel` as the primary dev command; `@expo/ngrok@^4.1.3` installed as a devDependency.
- `.gitignore` auto-updated by `expo` CLI to ignore `expo-env.d.ts` (regenerated on each `expo start`).
- Added `docs/decisions.md` — first ADR entry covers the dev-device choice above (triggered per `CLAUDE.md §8`).

---

## [0.0.3] — 2026-04-20

### Docs
- Added `CLAUDE.md` — project memory for Claude Code sessions. Sections: goals, architecture, design/UX, locked constraints, repo etiquette, commands (TBD), testing guidance, doc-update rules, conventions. ([#2](https://github.com/paneerpakoda/ValleyOS/pull/2))

## [0.0.2] — 2026-04-20

### Added
- `.env.example` documenting the (currently minimal) env surface. Whitelisted in `.gitignore` while real `.env*` files stay ignored. ([#1](https://github.com/paneerpakoda/ValleyOS/pull/1))

## [0.0.1] — 2026-04-20

### Added
- Initial project scaffold: folder layout (`/app`, `/src`, `/content`, `/docs`, `/scripts`, `/assets`), `.gitignore`, `README.md`.
- Phase 1 planning artifacts moved into `/docs/`: `brainstorm.md`, `project-spec.md`, `phase-1-summary.md`, `pressure-tests/`.
- Public GitHub repo created: <https://github.com/paneerpakoda/ValleyOS>.
- `main` branch protection enabled (PR required, force-pushes blocked, admin-enforced).
