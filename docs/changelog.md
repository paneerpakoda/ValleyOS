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

### Docs
- Added `docs/tools.md` — tools & MCP inventory (installed / deferred with triggers / consciously skipped). Zero tools installed today; Phase 2 Steps 7+8 deliberately deferred until Expo scaffold lands.
- Updated `CLAUDE.md §8` and `README.md` doc index to reference `tools.md`.

### Added
- `/update-docs-and-commit` slash command (`.claude/commands/update-docs-and-commit.md`) — analyzes branch changes, updates the right docs conditionally, stages and commits. Refuses to run on `main`. Now handles all four planned docs (`decisions.md`, `testing.md`, `deployment.md`, `known_issues.md`) on their respective triggers.

### Docs
- Added `docs/architecture.md` (focused architecture overview, links to spec for detail).
- Added `docs/changelog.md` (this file).
- Added `docs/project_status.md` (living state-of-the-project doc).
- Added `CLAUDE.md §8 → Planned docs` table — reserves paths and triggers for `decisions.md`, `testing.md`, `deployment.md`, `known_issues.md` without creating empty placeholders.

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
