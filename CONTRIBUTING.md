# Contributing to Repo Launch Kit

Work on the [installable skill](skills/repo-launch-kit/SKILL.md) to change agent behavior. Its adjacent `assets/` contains templates that are copied into target repositories. Keep the package self-contained so the archive and source installs resolve the same files.

## Verify a change

1. Check the repo instructions in [AGENTS.md](AGENTS.md) and the related tasks in [TODO.md](TODO.md).
2. Run `git diff --check`. Run `actionlint` from the repository root for workflow edits.
3. For changes to the skill, templates, or packaging, run the archive check in the `Package skill` workflow. Install the result in a disposable repository and exercise the changed workflow in a fresh session. See [Release verification](RELEASING.md) for the package command and examples.

## Open a PR

Use the [PR template](.github/pull_request_template.md). In `任务变化`, list the affected tasks and their changes. Update their status or next step in the same PR. Write `无任务变化` if no task changes. Include the actual checks and results in the PR body.

For a bug report, include the skill version, client, and a minimal reproduction with synthetic repository content.
