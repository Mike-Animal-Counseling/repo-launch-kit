# Repo Launch Kit

An installable skill for setting up a GitHub repository, adopting an existing project, and handing off work through ordinary pull requests. It uses Markdown and the checks your repository already runs.

| Workflow | What it does |
| --- | --- |
| Set up a new repo | Adds repository instructions, a small task list, and a PR template. Configures CI when it can verify a check command. |
| Adopt an existing repo | Reuses the task source, contributor instructions, PR templates, and CI check names. Fills gaps in place. |
| Maintain a PR | Checks task state against the PR diff, updates related tasks with the code, and fills in `任务变化` and verification in the PR body. |

## Install in Codex

Download `repo-launch-kit-v0.1.zip` from the GitHub release. Extract its `repo-launch-kit` folder directly into `.agents/skills/` inside a Git repository, or `~/.agents/skills/` for your user account. The installed file should be `.agents/skills/repo-launch-kit/SKILL.md` at project scope. Open a new Codex session in the target repository. The skill requires Git for repository inspection and the repository's own tooling for checks. Hosted PRs and CI require access to the target GitHub repository.

To try a local checkout before release, build the same ZIP from a committed revision at the repository root. Use a writable destination outside the source tree, or remove the ZIP after installing it.

```sh
git archive --format=zip --prefix=repo-launch-kit/ -o repo-launch-kit-v0.1.zip HEAD LICENSE SKILL.md agents assets references
```

Run the same install procedure with the ZIP for an earlier version to roll back. Replace the installed `repo-launch-kit` folder in full so stale files cannot survive. To uninstall, remove that folder from the scope where you installed it and start a new session. Use ordinary Git review and revert for changes the skill applied to a repository.

[Codex skill installation docs](https://developers.openai.com/api/reference/cli#skills)

## Try it

In a new Git repository, ask: “Use `$repo-launch-kit` to set up this repository. Show me the proposed changes first.”

In an existing Git repository, ask: “Use `$repo-launch-kit` to adopt this repository's existing contributor rules, work list, and CI.”

When a PR is ready, ask: “Use `$repo-launch-kit` to check task changes and draft the PR body from this diff.” The PR body lists the affected tasks and how they changed. It says `无任务变化` when the task source stays unchanged.

See [TODO.md](TODO.md) for the project's current release progress and [CHANGELOG.md](CHANGELOG.md) for the candidate contents. The skill and templates are [MIT licensed](LICENSE).
