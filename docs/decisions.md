# Decisions

Architecture-decision log. One entry per consequential product/technical choice — stack shifts, workflow pivots, trade-offs we'll forget the reasoning for in six weeks. Not a journal of every small call.

**Trigger to add an entry** (per [`CLAUDE.md §8`](../CLAUDE.md)): a locked decision changes, or a new significant product/technical decision is made.

Format per entry:
- `## YYYY-MM-DD — <title>`
- **Context** — what problem / forcing function
- **Decision** — what we chose
- **Consequences** — what this enables, what it locks in, what revisits look like

---

## 2026-04-22 — Dev-device workflow for v0: Expo Go over tunnel

**Context.** Phase 2 left "dev-device workflow" as a pending decision: Expo Go, custom dev client, or sideloaded signed APK. During V0-1 smoke testing, Metro's LAN mode (`expo start`) failed to serve bundles to the phone despite firewall off, port listening, and matching Wi-Fi — likely AP-isolation or one of four active `utun` interfaces on the Mac redirecting `192.168.1.x`. Tunnel mode (`expo start --tunnel` via `@expo/ngrok`) worked immediately and rendered V0-1 on-device.

**Decision.** For the v0 spike we use **Expo Go with tunnel mode**. Added `npm run dev:tunnel` as the primary dev command; `npm run dev` (LAN) is kept as a fallback. `@expo/ngrok` installed as a devDependency (local, not global — Expo CLI only finds it in `node_modules`).

**Consequences.**
- First bundle load per session is slower (~30–60 s for tunnel negotiation), subsequent hot reloads are fast.
- No need to colocate phone and laptop on the same Wi-Fi — works across cellular, guest networks, VPNs.
- **Locks in Expo Go for v0 only.** SQLite (V0-3) runs inside Expo Go, but **EAS Build lands in M9** and switches distribution to signed APK sideload. Revisit the dev-client question if V0-3's SQLite behavior diverges from Expo Go's bundled runtime.
- Ngrok free tier is sufficient for a single personal-use project. No account needed for `exp.direct` URLs.

Revisit: at M9 (first EAS build) confirm whether sideloaded APK + direct install matches or supersedes this workflow. Record the follow-up decision here.
