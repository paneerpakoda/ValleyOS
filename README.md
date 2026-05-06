# Valley OS

A calm companion app for efficient Stardew Valley runs. Mobile, offline-first, Android-only for MVP.

> **Status:** Phases 1 (Plan) and 2 (Setup) complete. Entering Phase 3 (Build). No app code yet; planning artifacts are in [`/docs`](./docs).

---

## What it is

Valley OS is a personal-use mobile companion that tells you what to do *next* during a Stardew Valley session — day-level guidance, not moment-level. The MVP covers a single hardcoded playstyle for **Year 1 Spring**, including Community Center bundle requirements integrated into step instructions.

The thesis: scattered guide info → clear real-time steps + tracking + quick reference, so runs feel both efficient and forgiving.

## Stack

- **TypeScript** + **Expo (React Native)** with `expo-router`
- **SQLite** for run state (offline-first, on-device)
- Static content (tasks, bundles, mini-wiki) bundled as JSON outside the DB
- **EAS Build** → signed APK → sideload to personal Android device
- No backend, no auth, no cloud, no analytics, no AI

## Run it

Daily path: phone running [Expo Go](https://expo.dev/client), Mac on the same wifi.

```bash
npm install
npm run dev          # LAN mode — scan the QR with Expo Go
```

If the QR loads but the phone can't reach the dev server (AP isolation, work VPN, etc.), use the ngrok fallback:

```bash
npm run dev:tunnel
```

Mac-only quick loop while the UI is still static (no native modules):

```bash
npm run web
```

## Layout

```
/app         expo-router routes
/src         components, lib, logic, db
/content     static JSON: tasks, bundles, mini-wiki
/docs        product spec, brainstorm, phase summaries, pressure tests
/scripts     build / content tooling
/assets      images, icons, fonts
```

## Documentation

- [Project status](./docs/project_status.md) — where the project stands right now
- [Architecture](./docs/architecture.md) — system overview (links to spec for detail)
- [Project spec](./docs/project-spec.md) — implementation-oriented spec (product, tech, architecture, schema, API, milestones)
- [Tools & MCP servers](./docs/tools.md) — what's installed, deferred, and consciously skipped
- [Changelog](./docs/changelog.md) — what changed and when
- [Brainstorm](./docs/brainstorm.md) — exploration doc with feature dump and risks
- [Phase 1 summary](./docs/phase-1-summary.md) — locked decisions carried into Phase 2
- [Phase 2 summary](./docs/phase-2-summary.md) — end-of-Setup reference; what's locked and what's still open for Phase 3
- [Pressure tests](./docs/pressure-tests/) — adversarial reviews of each phase

## Branching

- `main` is protected — never commit directly.
- Feature branches: `feature/<desc>`, `fix/<desc>`, `refactor/<desc>`, `docs/<desc>`.
- Open a PR for every meaningful change.
