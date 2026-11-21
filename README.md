# Repo Launch Kit

[![CI](https://github.com/Mike-Animal-Counseling/repo-launch-kit/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/Mike-Animal-Counseling/repo-launch-kit/actions/workflows/ci.yml)
[Latest release](https://github.com/Mike-Animal-Counseling/repo-launch-kit/releases/latest)

An [Agent Skill](skills/repo-launch-kit/SKILL.md) for setting up a GitHub repository, adopting an existing project, and handing work off through pull requests. It uses plain Markdown and the checks your repository already runs.

## Quick start

1. Download the skill ZIP from the [latest release](https://github.com/Mike-Animal-Counseling/repo-launch-kit/releases/latest).
2. Extract the `repo-launch-kit` folder into `.agents/skills/` in your target repository. Open a new Codex session there.
3. Ask the skill to show its proposed setup before applying it.

```text
Use $repo-launch-kit to set up this repository. Show me the proposed changes first.
```

See the [installation guide](docs/install.md) for user-wide installation, installing from a source checkout, and uninstalling.

## When to use it

| Situation | What the skill does |
| --- | --- |
| New repository | Adds repository instructions, a task list, and a PR template. Sets up CI after finding a check command it can verify. |
| Existing repository | Fills gaps while preserving conventions, the current task source, workflow commands, and check names. |
| PR in progress | Reviews affected tasks against the PR diff, updates their status with the code, and drafts `任务变化` with the relevant entries and verification. |

Use this prompt when adopting an existing project.

```text
Use $repo-launch-kit to adopt this repository. Keep its contributor instructions, task source, and CI checks.
```

Use this prompt when preparing a PR. Include its intended base branch if the repository has more than one.

```text
Use $repo-launch-kit to check task changes and draft the PR body against main.
```

## See it in use

- [Two-PR handoff](examples/pull-requests.md). The first PR left an actionable task. A fresh agent session picked it up from the merged repository and closed it after verification.
- [npm workspace example](https://github.com/Mike-Animal-Counseling/repo-launch-kit/tree/examples/npm-workspace-ci). The skill generated a CI workflow that ran the repository's workspace checks on GitHub Actions.

## Work on the project

The installable package lives in [`skills/repo-launch-kit/`](skills/repo-launch-kit/). It contains the skill instructions, three Markdown templates, a CI reference, and Codex metadata. Start with [Contributing](CONTRIBUTING.md) to make a change, [Release verification](RELEASING.md) to build and check a package, or the [changelog](CHANGELOG.md) to see what shipped.

[MIT License](LICENSE)
