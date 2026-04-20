# Phase 2 — Setup: Summary

End-of-phase reference. Phase 2 ran Steps 1–8: repo, folders, env example, Claude project memory, documentation scaffold, doc-update workflow, tools, and MCP inventory. No app code was written in Phase 2 by design — this phase prepares the ground.

---

## Artifacts produced

- **GitHub repo:** <https://github.com/paneerpakoda/ValleyOS> (public, `main` branch-protected, PRs required, admin-enforced).
- **Repo files:** `README.md`, `.gitignore`, `.env.example`, `CLAUDE.md`.
- **Folder scaffold:** `/app`, `/src/{components,lib,logic,db}`, `/content/{tasks,bundles,mini-wiki}`, `/docs`, `/scripts`, `/assets` (all empty except `/docs`; `.gitkeep` placeholders where needed).
- **Docs added:** `docs/architecture.md`, `docs/changelog.md`, `docs/project_status.md`, `docs/tools.md`, `docs/phase-2-summary.md` (this file).
- **Slash command:** `.claude/commands/update-docs-and-commit.md` — project-level command for maintaining docs on each branch.
- **PR trail:** [#1](https://github.com/paneerpakoda/ValleyOS/pull/1) `.env.example`, [#2](https://github.com/paneerpakoda/ValleyOS/pull/2) `CLAUDE.md`, [#3](https://github.com/paneerpakoda/ValleyOS/pull/3) docs scaffold + slash command, [#4](https://github.com/paneerpakoda/ValleyOS/pull/4) `tools.md`, and the wrap-up PR that ships this summary.

---

## Step-by-step

| Step | Output | Key decision |
|---|---|---|
| 1 | GitHub repo + branching rules | Public repo, `main` protected, PR required, force-pushes blocked. Branch names: `feature/*`, `fix/*`, `refactor/*`, `docs/*`. |
| 2 | Folder scaffold | Adapted the web-flavored template for Expo: `/app` for expo-router routes, `/src` for code, `/content` for bundled JSON (tasks, bundles, mini-wiki), `/assets` instead of `/public`. Empty dirs tracked with `.gitkeep`. |
| 3 | `.env.example` | Honest minimal surface: `EXPO_PUBLIC_APP_ENV`, `EXPO_PUBLIC_LOG_LEVEL`, optional `EXPO_TOKEN` (commented). No fake keys for absent services. Whitelisted in `.gitignore`. |
| 4 | `CLAUDE.md` | 9 sections: goals, architecture, design/UX, constraints, repo etiquette, commands (TBD until scaffold), testing guidance, doc rules, conventions. Links to spec for detail rather than duplicating. ~130 lines. |
| 5 | Automated docs (`architecture.md`, `changelog.md`, `project_status.md`) | Architecture doc is a thin 1-pager pointing to spec sections. Changelog follows Keep-a-Changelog, backfilled from commit history. Project status is the living snapshot. |
| 6 | `/update-docs-and-commit` slash command | Conditional updates — only touches a doc if its rule triggers. Refuses to run on `main`. Never pushes or opens PRs. Handles all four planned docs on first trigger. |
| 7 | Tools / plugins | Zero installed. Every candidate was either premature (needs Expo scaffold) or N/A (no backend, no browser). |
| 8 | MCP servers | Zero installed. Library-docs MCP flagged to install just before `npx create-expo-app`; everything else deferred or ruled out. |
| — | Planned docs convention | Reserved paths for `decisions.md`, `testing.md`, `deployment.md`, `known_issues.md` in `CLAUDE.md §8` — no empty placeholders; slash command creates each file on its own trigger. |

---

## Locked decisions (carry into Phase 3)

**Repo & process**
- Never commit directly to `main`. Branch protection enforces.
- Feature branches: `feature/<desc>`, `fix/<desc>`, `refactor/<desc>`, `docs/<desc>`.
- Squash-merge PRs.
- Commit messages: lowercase imperative prefix, focus on *why*.
- `/update-docs-and-commit` is the sanctioned workflow for keeping docs in sync.

**Project layout**
- `/app` (routes), `/src` (code), `/content` (bundled JSON), `/docs` (product/engineering docs).
- Static content lives outside SQLite (JSON modules bundled into the APK).
- No global state library; React state + repo calls.

**Documentation model**
- `docs/project-spec.md` — source of truth for locked product/technical decisions.
- `docs/project_status.md` — living snapshot, updated at end of each work session.
- `docs/changelog.md` — Keep-a-Changelog, `[Unreleased]` accumulates until a real-device ship bumps to `v0.1.0`.
- `docs/architecture.md` — navigation-layer doc pointing into spec.
- `docs/tools.md` — conscious tool/MCP ledger.
- Planned docs (`decisions.md`, `testing.md`, `deployment.md`, `known_issues.md`) are path-reserved; files are created on first trigger, not preemptively.
- `CLAUDE.md §8` is the canonical list of which doc to update for which kind of change.

**Deferred installs (carry into Phase 3)**
- `eas-cli` — install alongside Expo scaffold.
- Library-docs MCP (Context7 or equivalent) — install just before `npx create-expo-app`.
- SQLite GUI + SQLite MCP — install once the dev DB has content worth inspecting.
- GitHub Actions CI — install when a test runner lands.

---

## Still open going into Phase 3

All seven of Phase 1's "still open" items remain genuinely unresolved. Phase 2 was setup, not decisions — these are Phase 3's inheritance.

1. **Dev-device workflow.** Expo Go vs custom dev client vs signed-APK sideload from day one. **Decide before the next step** — it determines what the scaffold needs.
2. **Atomic task definition.** Granularity of a single task. Best decided in early v0, once real tasks are on a real screen.
3. **v0 content source.** Hand-written or placeholder for the 7-day spike.
4. **Time budget.** Rough hours/days for v0 and MVP — a pace, not a deadline.
5. **Schema-migration strategy.** Concrete first cut of the runner. Needed when SQLite is wired.
6. **Design system.** Minimal visual language (dark mode, typography, spacing). Deferred until v0 reveals what UI density feels right.
7. **Task ordering within a day.** Implicit in today-view design but not yet explicit — matters once real content is authored.

(Numbers 1 and 5 are immediate blockers for Phase 3's first code commit. The rest can be decided during v0.)

---

## Phase 2 review — issues found and fixed

Caught before closing the phase:

- **Stale phase labels** — `CLAUDE.md:5` and `README.md:5` still said "Phase 2 — Setup" as ongoing. Updated to reflect Phase 2 complete.
- **Duplicate `### Docs` subsections** in `[Unreleased]` — PRs #3 and #4 each added their own, violating Keep-a-Changelog format. Merged into one.
- **PR #4 was still open** at review time — merged before writing this summary so it reflects reality on `main`.

Observations (not fixed, not bugs):

- `.obsidian/` config committed to the public repo. Intentional — personal project, settings travel with the repo.
- `/update-docs-and-commit` was never actually invoked during Phase 2 — doc updates were hand-edited inside each PR. The command is untested in practice. **First real use is Phase 3's responsibility.**

---

## Main risks to keep watching

Unchanged from Phase 1, but sharpened by what Phase 2 revealed or deferred:

1. **Phone-as-companion reach** (behavioral, untested) — v0 still addresses this.
2. **Content throughput** (operational) — now exposed because there is no content authoring workflow yet and no time budget named. **The biggest risk coming out of Phase 2.**
3. **Day-level sufficiency** (product).
4. **Scope creep into moment-level guidance, AI, or community features** — `CLAUDE.md §4` and spec §7.7 codify pushback.

---

## Phase 3 — Build

Phase 3 starts implementation. Per the roadmap: **follow milestone order, not the feature dump.**

First work in Phase 3:
1. Resolve dev-device workflow (open item #1 above).
2. Install library-docs MCP + `eas-cli`.
3. `npx create-expo-app` into a feature branch; wire TypeScript + expo-router + expo-sqlite; first route renders.
4. Build pipeline working end-to-end — the empty app opens on the target Android phone. **This is the Phase 2 exit gate that carries into Phase 3's start gate.**
5. Author v0 content (Y1 Spring days 1–7) and ship the v0 spike. Play 3+ real sessions. See [`project-spec.md` §7.1](./project-spec.md) for v0 exit criteria.

Phase 3 ends when the MVP exit criteria from [`project-spec.md` §7.2](./project-spec.md) are met: one complete Y1 Spring run played end-to-end with the app as primary companion.
