---
description: Analyze recent changes, update the right docs, and commit on the current branch
---

# /update-docs-and-commit

Update project documentation to reflect work done on this branch, then commit the doc changes. Be honest — only touch a file if it earns the update. An empty or speculative doc edit is worse than no edit.

---

## Step 1 — Refuse if on `main`

Run `git rev-parse --abbrev-ref HEAD`. If the result is `main`, stop immediately with:

> Current branch is `main`. Switch to a feature branch first (`git checkout -b docs/<desc>`). Branch protection blocks direct commits to `main` anyway.

## Step 2 — Survey what changed

Run in parallel:

- `git status --porcelain` — uncommitted work
- `git log main..HEAD --oneline` — commits on this branch since `main`
- `git diff main...HEAD --stat` — full file change summary vs `main`

If working tree is clean **and** there are zero commits ahead of `main`, stop with: *"No changes to document."*

## Step 3 — Decide which docs to update

Apply each rule independently. Only edit a file if its rule triggers.

### `docs/changelog.md` — almost always update

Add or extend an entry under `## [Unreleased]`. Categorize each meaningful change as one of:

- **Added** (new features)
- **Changed** (changes to existing behavior)
- **Fixed** (bug fixes)
- **Removed** (features dropped)
- **Architecture** (structural changes — schema, layering, dependencies)
- **Docs** (documentation-only changes)

If `[Unreleased]` already has an entry that overlaps with this work, **extend it in place** — do not duplicate.

Skip if the change is purely internal noise (whitespace, comment fix in one file, etc.).

### `docs/architecture.md` — only on structural change

Triggers (any one is enough):

- New top-level folder, or new sub-folder under `/src` or `/content`.
- New "key component" — a file under `/src/logic` or `/src/db` that introduces a new responsibility worth naming in the components table.
- Dependency added or removed in `package.json`.
- A change to layering, data flow, or a documented boundary.
- Schema change.

If none trigger, do not touch this file.

### `docs/project_status.md` — almost always update

- Bump the `**Last updated:**` date to today.
- Move items from "In progress" to "Completed" if they finished.
- Add anything genuinely new to "Next priorities" — do not pad.
- Update "Blockers" and "Decisions pending" only if reality changed.

Skip if the doc would say exactly the same thing after editing (date bump alone doesn't justify a commit).

### Planned docs — create only when their trigger fires

These four files have reserved paths but don't exist yet. See `CLAUDE.md §8 → Planned docs` for the canonical trigger table. Apply each rule independently; create the file on first trigger, then append on subsequent triggers.

#### `docs/decisions.md`
**Trigger:** a locked decision changed or a new significant product/technical decision was made on this branch.
**On trigger:** append `## YYYY-MM-DD — <short title>` with **Context**, **Decision**, **Consequences**. Create the file with a brief format header on first use.
**Skip if:** no decision was made — do not create the file.

#### `docs/testing.md`
**Trigger:** test runner appears in `package.json` for the first time (jest, vitest, @testing-library/*), OR a test config file lands (`jest.config.*`, `vitest.config.*`), OR the first test file is added.
**On trigger:** create the file with: how to run tests, what to test at which layer (per `CLAUDE.md §7`), fixture conventions, and any setup gotchas.
**Skip if:** no test infrastructure changed.

#### `docs/deployment.md`
**Trigger:** `eas.json` lands for the first time, OR a successful build artifact / install step is documented in this branch's work.
**On trigger:** create the file with: build commands, signing/credentials notes, device install steps, version bump procedure.
**Skip if:** nothing build-related changed.

#### `docs/known_issues.md`
**Trigger:** the user explicitly flagged a known issue, limitation, or recurring bug in this branch's work or in conversation. This one is hard to auto-detect — require an explicit signal, not a guess.
**On trigger:** add an entry with title, what happens, workaround if any, upstream link if applicable.
**Skip if:** no explicit "known issue" was raised — do not infer.

## Step 4 — Sanity check

For each doc you edited, run `git diff -- <path>` and confirm every edit traces to a concrete change from Step 2. Remove anything speculative.

## Step 5 — Stage and commit

If no doc actually changed after Steps 3–4, stop with: *"No doc updates needed for these changes."* Do not create an empty commit.

Otherwise:

1. `git add` only the doc files you edited.
2. Commit with this message shape (use a HEREDOC):

   ```
   docs: update <comma-separated list of files, short form>

   <one short paragraph: what work on this branch prompted these doc updates>
   ```

   Example: `docs: update changelog, project_status`

3. Do **not** push, open a PR, or amend a previous commit. The user decides when to push.

## Out of scope for this command

- `CLAUDE.md`, `README.md`, `docs/project-spec.md`, `docs/brainstorm.md`, `docs/phase-*-summary.md`, `docs/pressure-tests/*` — these have their own update rules in `CLAUDE.md §8`. Do not edit them here.
