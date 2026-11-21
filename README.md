# Repo Launch Kit

[![CI](https://github.com/Mike-Animal-Counseling/repo-launch-kit/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/Mike-Animal-Counseling/repo-launch-kit/actions/workflows/ci.yml)
[Latest release](https://github.com/Mike-Animal-Counseling/repo-launch-kit/releases/latest)

An [Agent Skill](skills/repo-launch-kit/SKILL.md) that turns a project brief into a repository you can work in. It sets up the first run and check, the contributor workflow, and the task list that a fresh session in your coding agent can pick up.

## Quick start

1. For the behavior documented here, [install from this source checkout](docs/install.md#install-from-a-source-checkout). The [latest release](https://github.com/Mike-Animal-Counseling/repo-launch-kit/releases/latest) also provides a ZIP for installing a tagged version.
2. Open a session in your coding agent in the directory where you want to start the project.
3. Give the skill the project brief and any stack decisions you have made.

```text
Use the repo-launch-kit skill to scaffold a new project in this directory. Show the plan, apply it, and verify what can run. The project will be a Node.js CLI that converts titles to slugs. Use npm.
```

See the [installation guide](docs/install.md) for client-specific folders, source installs, and manual loading.

## When to use it

| Situation | What the skill does |
| --- | --- |
| New project | Creates the README, Git ignore rules, repository instructions, task list, and GitHub PR template. With an established stack and project kind, creates a runnable entry point, a behavior check, and CI based on that check. |
| Existing repository | Fills gaps while preserving conventions, the current task source, workflow commands, and check names. |
| PR in progress | Reviews affected tasks against the PR diff, updates their status with the code, and drafts `任务变化` with the relevant entries and verification. |

Use this prompt when adopting an existing project.

```text
Use the repo-launch-kit skill to adopt this repository. Keep its contributor instructions, task source, and CI checks.
```

Use this prompt when preparing a PR. Include its intended base branch if the repository has more than one.

```text
Use the repo-launch-kit skill to check task changes and draft the PR body against main.
```

## See it in use

- [New project example](examples/new-project.md). See what the skill sets up for a runnable CLI and for a project whose stack is still open.
- [Two-PR handoff](examples/pull-requests.md). The first PR left an actionable task. A fresh agent session picked it up from the merged repository and closed it after verification.
- [npm workspace example](https://github.com/Mike-Animal-Counseling/repo-launch-kit/tree/examples/npm-workspace-ci). The skill generated a CI workflow that ran the repository's workspace checks on GitHub Actions.

## Work on the project

The installable package lives in [`skills/repo-launch-kit/`](skills/repo-launch-kit/). Its standard entry point is `SKILL.md` and it ships its Markdown guides and templates alongside it. `agents/openai.yaml` provides optional Codex interface metadata. Start with [Contributing](CONTRIBUTING.md) to make a change, [Release verification](RELEASING.md) to build and check a package, or the [changelog](CHANGELOG.md) to see what shipped.

[MIT License](LICENSE)
