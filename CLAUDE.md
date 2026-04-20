# CLAUDE.md

Project context for Claude Code. Keep this file high-signal — link to docs for detail.

**Phase: 2 — Setup.** No app code yet. The folder scaffold and planning docs are in place; the Expo project is not yet initialized.

---

## 1. Project goals

Valley OS is a personal-use mobile companion for Stardew Valley that tells the player **what to do next** during a session. Day-level guidance, not moment-level. MVP covers a single hardcoded playstyle for **Year 1 Spring**, with Community Center bundle requirements integrated into step instructions.

Primary user = the project owner (intermediate SDV, Android, optimized-but-forgiving). No second user for MVP.

Full intent + success criteria + scope: [`docs/project-spec.md`](./docs/project-spec.md) §1–§2.

## 2. Architecture overview

Single Expo app, offline-first, Android-only for MVP.

```
UI (expo-router routes in /app)
   ↓
Logic (pure TS in /src/logic)   ← business rules, day-advance, deadlines
   ↓
Repo (/src/db)                  ← SQLite read/write
   ↓
SQLite (run state)              + bundled JSON (/content) for static content
```

- No backend, no auth, no cloud, no analytics, no AI.
- Static content (tasks, bundles, mini-wiki) lives in `/content` as JSON, **outside** SQLite.
- External wiki links open the OS browser via `Linking.openURL`.
- No global state library; React state + repo calls.

Detailed architecture: [`docs/project-spec.md`](./docs/project-spec.md) §3–§6.

## 3. Design & UX guidelines

Deferred — minimal visual language (dark mode, typography, spacing) lands during v0 once the screen is on a real phone. Until then:

- **Calm over busy.** Dense info is the failure mode; the user must see the next action within seconds.
- **Day-level granularity.** Not moment-level. Don't add minute-by-minute prompts.
- **One screen does the work.** Today view is the home and the workhorse — don't fragment it across tabs early.
- **Offline always works.** Anything that requires network must degrade gracefully (the wiki link is the only exception).

UX failure test (from spec §6): *Can the user see what to do next within seconds of opening the app?* If no, the change is wrong.

## 4. Constraints & policies

**Locked decisions — do not relitigate without an explicit "let's reopen X":**
- Stack: TypeScript + Expo (RN) + expo-router + SQLite. EAS Build → sideload APK.
- One hardcoded playstyle for MVP; playstyle selection ships in V1.
- Bundle requirements integrated into step instructions; no separate tracker.
- Day-advance auto-carries forward incomplete tasks.
- Deadline misses computed eagerly at advance-day; missed-tag + consequence note surfaced.

**Dangerous distractions** (project-spec §7.7) — push back if these creep in:
- AI-generated daily plans.
- Save-file parsing.
- Custom route builder for other users.
- Heavy design system / branding before core usage is proven.
- Multi-platform refactor.
- Community / collaboration features.

**Not in scope for MVP** (spec §7.6): full wiki replacement, real-time save sync, advanced AI, social features, iOS/desktop, Play Store, monetization, multiplayer.

## 5. Repository etiquette

- **Never commit directly to `main`.** Branch protection enforces this.
- Branch names: `feature/<desc>`, `fix/<desc>`, `refactor/<desc>`, `docs/<desc>`.
- Open a PR for every change. Squash-merge.
- Commit messages: imperative, lowercase prefix, focused on *why* not *what*. Example: `feat: integrate bundle requirements into step instructions`.
- Pressure tests for each phase live in [`docs/pressure-tests/`](./docs/pressure-tests/) — `YYYY-MM-DD-<phase>.md`.
- Do not commit secrets. `.env` is ignored; `.env.example` is the template.

## 6. Commands

App not yet scaffolded — most commands TBD. Current state:

```bash
# Repo
gh pr create                       # open PR for current branch
gh pr merge <n> --squash --delete-branch
```

To be filled in after the Expo scaffold lands:

```bash
# npm run dev          # expo start (dev server)
# npm run android      # expo run:android (dev build on device)
# npm run typecheck    # tsc --noEmit
# npm run lint         # eslint
# npm run test         # jest / vitest (TBD)
# npm run build        # eas build --platform android
# npm run db:migrate   # apply pending migrations (runner TBD)
```

## 7. Testing guidance

Strategy not yet decided — to be designed alongside the first real logic module (`/src/logic`). Working assumptions:

- **Logic layer (`/src/logic`)**: pure functions, fully unit-tested. This is where day-advance, deadline computation, and carry-forward live — the highest-leverage tests.
- **Repo layer (`/src/db`)**: integration-tested against a real in-memory SQLite.
- **UI**: smoke tests only for MVP. The validation that matters is real play sessions, not snapshot tests.
- **No e2e / device automation** for MVP. Personal-use, manual play is the loop.

## 8. Documentation rules

After meaningful work, update the relevant doc — not all of them.

- **`docs/project_status.md`** — update at end of each work session or when status changes. This is the living snapshot.
- **`docs/changelog.md`** — add an entry under `[Unreleased]` for every PR that changes user-visible behavior, architecture, or docs. Bump version on release.
- **`docs/architecture.md`** — update in the same PR as any structural change (new layer, new top-level folder, new key component, dependency added/removed).
- **`docs/project-spec.md`** — update when a *locked decision* changes (stack, schema, milestone scope, API surface). Changing this should be rare and deliberate. If a change touches the schema, also update §5 in the same PR.
- **`docs/brainstorm.md`** — add new ideas, risks, or open questions here freely. This is the scratch space.
- **`docs/phase-N-summary.md`** — write at the end of each phase, not mid-phase.
- **`docs/pressure-tests/`** — add a new file when a phase is pressure-tested.
- **`README.md`** — keep the layout and stack sections accurate. Don't put detail here that belongs in `/docs`.
- **`CLAUDE.md`** (this file) — update when a constraint, command, or convention changes. Keep it short.

### Planned docs (paths reserved — create when triggered)

These files don't exist yet on purpose. Empty placeholders rot into TODO lists; conventions in `CLAUDE.md` don't. Create the file the first time its trigger fires (the `/update-docs-and-commit` command will do this automatically for the ones it can detect).

| Path | Trigger to create | Holds |
|---|---|---|
| `docs/decisions.md` | A locked decision changes, or a new significant product/technical decision is made | ADR-style entries: `## YYYY-MM-DD — <title>` with **Context**, **Decision**, **Consequences** |
| `docs/testing.md` | First test runner wired into `package.json`, or first non-trivial logic module needs a documented test strategy | Test runner setup, what to test at which layer, fixtures conventions, how to run locally |
| `docs/deployment.md` | First successful `eas build` produces a sideloadable APK | Build commands, signing/credentials, device install steps, version bumping, release checklist |
| `docs/known_issues.md` | First time a real limitation or recurring bug is identified that won't be fixed immediately | One entry per issue: short title, what happens, workaround if any, link to upstream issue if applicable |

Do **not** create any of these files preemptively. If you find yourself wanting to create one without a clear trigger, the convention probably belongs in `CLAUDE.md` instead.

## 9. Conventions (lightweight)

- **TypeScript strict mode** assumed. No `any` without a comment explaining why.
- **File naming**: `kebab-case.ts` for files, `PascalCase` for component files (`TodayView.tsx`).
- **Imports**: absolute from `/src` via tsconfig paths once configured.
- **Error handling**: throw in the logic layer, catch at the UI boundary. No silent catches.
- **No premature abstraction.** Inline first, extract on the third use.
