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

### `docs/decisions.md` — only if a decision was made

If a *locked decision* changed or a new one was made:

- If the file exists, append a new ADR-style entry: `## YYYY-MM-DD — <short title>` with **Context**, **Decision**, **Consequences**.
- If the file does not exist and a decision was made, create it with a brief header explaining the format and the first entry.

If no decision was made, skip — do not create the file.

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
