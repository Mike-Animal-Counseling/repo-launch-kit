# Install Repo Launch Kit

The skill uses Git to inspect the target repository and its existing tooling to run checks. Setup and PR drafting can run locally. Creating PRs or running hosted checks requires access to the target GitHub repository.

## Install a release in Codex

1. Download `repo-launch-kit-*.zip` from the [GitHub releases](https://github.com/Mike-Animal-Counseling/repo-launch-kit/releases).
2. Extract its `repo-launch-kit` folder into `.agents/skills/` in the target Git repository or `~/.agents/skills/` for all your projects. A project install should have `.agents/skills/repo-launch-kit/SKILL.md`.
3. Open a new Codex session in the target repository. Type `$repo-launch-kit` in a prompt to invoke it.

The [v0.1 ZIP](https://github.com/Mike-Animal-Counseling/repo-launch-kit/releases/tag/v0.1) was tested with Codex CLI 0.160.0 on Windows. See the [verification record](../RELEASING.md) for the tested workflows.

## Install from a source checkout

From the target Git repository, use a GitHub CLI version with `gh skill install` to copy the skill out of your Repo Launch Kit checkout. For a new directory whose Git repository has yet to be initialized, use a user-scope install from an existing checkout or copy the folder manually.

```sh
gh skill install "/path/to/repo-launch-kit" repo-launch-kit --from-local --agent codex --scope project
```

Pass `--scope user` to install for your account. You can also copy the whole [`skills/repo-launch-kit/`](../skills/repo-launch-kit/) folder into the chosen scope manually. GitHub CLI adds local source tracking metadata. For a personal project-scope install, add `/.agents/skills/repo-launch-kit/` to the target repository's `.git/info/exclude` to keep it out of commits.

## Uninstall or roll back

Remove the installed `repo-launch-kit` folder from the scope where you installed it and start a new session. For a version rollback, replace the full installed folder with the one from an earlier release ZIP. To undo a repository change the skill made, review and revert the relevant Git changes in that repository.

[GitHub CLI skill installation](https://cli.github.com/manual/gh_skill_install) · [Codex skill documentation](https://developers.openai.com/codex/skills/)
