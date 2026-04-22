# Architecture

A focused overview. The deep reference is [`project-spec.md`](./project-spec.md) §3–§6. This doc is the navigation layer; if you need detail, follow the link.

> **Status: partially as-built.** S0 scaffold plus V0-1 today view have landed. SQLite, repos, and logic layer remain as-designed until V0-3+. The first divergence from this document should update it in the same PR.

---

## App structure

Single Expo (React Native) app. Android-only for MVP. Sideloaded APK; no Play Store.

```
/app           expo-router routes (UI entry points)
/src
  /components  reusable UI
  /logic       pure-TS business rules (day-advance, deadlines, carry-forward)
  /db          SQLite repo layer (typed reads/writes)
  /lib         small utilities
/content       static JSON: tasks, bundles, mini-wiki (bundled into APK)
/scripts       build/content tooling
/assets        images, icons, fonts
```

Static content (`/content/*.json`) ships **inside the APK**, not in SQLite. Run state ships in SQLite.

## Layers and data flow

```
UI (/app, /src/components)
   ↓  user action (e.g. tap "Complete")
Logic (/src/logic)               ← pure functions, no I/O
   ↓  needs persistence?
Repo (/src/db)                   ← typed wrapper over SQLite
   ↓
SQLite                           ← run state only
```

- **UI never talks to SQLite directly.** Goes through logic → repo.
- **Logic is pure.** Takes inputs, returns outputs. Easy to unit-test.
- **Repo owns SQL.** No raw SQL outside `/src/db`.
- **Static content is read-only** and loaded as JSON modules at app startup.

## Key components (planned)

| Component | Responsibility | Lives in |
|---|---|---|
| `TodayView` | The home screen — ordered list of next steps for the current day | `/app/index.tsx` (no route groups yet) |
| `getTodayView` | Compose today's task list from run state + static content | `/src/logic/today.ts` |
| `advanceDay` | Move to next day; auto-carry-forward incomplete tasks; compute missed deadlines | `/src/logic/advance-day.ts` |
| `runRepo` | CRUD for `run`, `task_state`, `skipped_day_log`, `app_meta` | `/src/db/run-repo.ts` |
| `migrate` | Apply pending schema migrations on app boot | `/src/db/migrate.ts` |
| Wiki link | `Linking.openURL` to external SDV wiki | inline at point of use |

Names are tentative — adjust when the code lands.

## Key services

None. There's no backend, no auth, no analytics, no AI. The only external call is `Linking.openURL` to open the SDV wiki in the OS browser.

## Dependencies (intended)

Installed (S0):

| Package | Why |
|---|---|
| `expo` (SDK 54) | Toolchain |
| `expo-router` (6.x) | File-based routing |
| `expo-linking` | External wiki links (used at V0-6) |
| `expo-status-bar`, `expo-system-ui`, `expo-splash-screen` | Boot + chrome |
| `expo-constants` | Runtime constants for repos/migrations |
| `react` 19, `react-native` 0.81 | Runtime |
| `react-native-gesture-handler`, `react-native-reanimated`, `react-native-worklets`, `react-native-safe-area-context`, `react-native-screens` | Required by expo-router |
| `@react-navigation/native` | expo-router peer |
| `typescript` (strict + `noUncheckedIndexedAccess`), `eslint`, `eslint-config-expo` | Dev |

Planned (not yet installed):

| Package | Lands with |
|---|---|
| `expo-sqlite` | V0-3 (repo layer) |

A test runner is TBD — landing alongside the first `/src/logic` module (see `docs/testing.md` when it's created per CLAUDE.md §8).

## Data shape (summary)

Four entities in SQLite:
- `run` — one row per playthrough (MVP ships a single hardcoded run)
- `task_state` — per-task status (`pending` / `done` / `dismissed`) with `origin_day`
- `skipped_day_log` — entries for days the user advanced past
- `app_meta` — schema version, current day, etc.

Carry-forward is **implicit**: a task is "today's" if `status = pending AND origin_day ≤ current_day`. No backfill writes on day-advance.

Full schema: [`project-spec.md`](./project-spec.md) §5.

## Boundaries

- **No global state library.** React state + repo calls are sufficient.
- **No server.** If a feature needs one, it's out of scope (see spec §7.6).
- **No moment-level guidance for MVP.** Day-level only.
- **Mini-wiki is placeholder content** until v0 reveals what the user actually reaches for.
