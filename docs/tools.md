# Tools & MCP Servers

A conscious, short list of what's installed, what's deferred, and what's consciously skipped. Every tool has cognitive cost — this doc exists to resist installing things "just in case."

**Last reviewed:** 2026-04-20

---

## Currently installed

### CLI

| Tool | Purpose | Notes |
|---|---|---|
| `git` | Version control | Global identity set in `~/.gitconfig`. |
| `gh` | GitHub operations (PRs, issues, repo management) | Authed as `paneerpakoda`. |

### MCP servers

None yet.

---

## Deferred until triggered

Install the moment the trigger fires — not earlier.

### Tools

| Tool | Trigger | Why |
|---|---|---|
| `eas-cli` (global npm) | Expo app scaffolded | Needed for every `eas build` → APK. Install command: `npm install -g eas-cli`. |
| SQLite GUI (DB Browser for SQLite / TablePlus) | Dev DB has data worth inspecting | Optional — `sqlite3` CLI on macOS works too. Install only if the dev loop feels slow without a GUI. |
| GitHub Actions CI workflow (`.github/workflows/ci.yml`) | First test file lands, or before a second contributor | Typecheck + lint + test on PR. Not worth the YAML for a solo, no-test repo. |

### MCP servers

| Server | Trigger | Why |
|---|---|---|
| Library-docs MCP (Context7 or equivalent) | Just before `npx create-expo-app` | Keep Claude's Expo / expo-router / expo-sqlite knowledge current instead of relying on possibly-stale pre-training. |
| SQLite MCP | Dev DB has real content | Let Claude query the dev DB directly during development instead of asking for dumps. |

---

## Consciously skipped

Categories the Phase 2 template suggested that don't apply to this project. If reality changes (e.g. a backend appears — which the spec rules out — or design source lands), revisit.

| Category | Why skipped |
|---|---|
| Browser testing (Playwright, Cypress) | React Native app — no browser. |
| API inspection (Postman, Insomnia, HTTPie) | No backend, no API. |
| Logging / monitoring (Sentry, Datadog) | `project-spec.md §3` excludes analytics for MVP. |
| Figma MCP | No design source exists; design deferred per Phase 1. |
| GitHub MCP | `gh` CLI via Bash covers every need so far — marginal value. |
| Filesystem MCP | Duplicates Claude Code's built-in Read/Edit/Glob/Grep. |

---

## How to update this doc

- When a tool is **installed**: move it from "Deferred" to "Currently installed", note the install command and any relevant config.
- When a new tool becomes **genuinely needed**: add a row to "Deferred" with a trigger. Resist speculative rows.
- When a category is **consciously ruled out**: add to "Consciously skipped" with a one-line rationale.
- Bump "Last reviewed" whenever you touch this file.
