# Repository instructions

## Working in this repository

- Run `actionlint` from the repository root after changing a workflow. The `Package skill` job in `.github/workflows/ci.yml` defines the release archive smoke check. Run its Bash commands against a commit that contains the changes you intend to package.
- Keep the installable package in `skills/repo-launch-kit/`. Its release archive contains the package contents under a top-level `repo-launch-kit/` folder. Keep archives and extracted copies out of Git.
- Keep `skills/repo-launch-kit/assets/pull_request_template.md` and `.github/pull_request_template.md` in sync. The package `LICENSE` must match the repository license.

## Task handoff

Read [TODO.md](TODO.md) against every PR diff. Update related entries in the same PR when their status or next step changes. Keep partial work open with its remaining step and acceptance conditions. Record acceptance evidence when closing a task.

Use `## 任务变化` in the PR body. List only affected tasks and their changes, or write `无任务变化`. When reconciling with the base branch, keep independent changes from other PRs. Reopen a task if a revert invalidates its acceptance.
