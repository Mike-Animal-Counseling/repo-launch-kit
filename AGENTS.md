# Repository instructions

## Working in this repository

- Run `npm test` from the repository root to test all npm workspaces.
- The Node version is specified in `.nvmrc`. CI installs the locked workspace with `npm ci` before testing.
- Packages live under `packages/`; keep generated `node_modules/` out of version control.

## Task handoff

Use [TODO.md](TODO.md) as the task source.

- Check the task source against every PR diff. Update related entries in the same PR when their status or next step changes. Keep partial work open with the remaining work and how to verify it. Record acceptance evidence when closing a task.
- Use `## 任务变化` in the PR body. List only the affected entries and their changes, or write `无任务变化` if none apply.
- Keep independent changes from other PRs when reconciling with the base branch. Reopen a task if a revert invalidates its acceptance.
