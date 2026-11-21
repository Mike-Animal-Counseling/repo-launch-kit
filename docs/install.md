# Install Repo Launch Kit

Repo Launch Kit ships a standard [Agent Skills](https://agentskills.io/specification) folder. It uses Git for repository inspection and the project's own tooling for checks. The coding agent needs access to the project files and permission to run any commands it verifies. Creating PRs or running hosted checks requires access to the target GitHub repository.

## Install a ZIP

1. Download `repo-launch-kit-*.zip` from the [GitHub releases](https://github.com/Mike-Animal-Counseling/repo-launch-kit/releases).
2. Extract the entire `repo-launch-kit` folder into the project location in the table for your client.
3. Open a session in the target directory and ask the agent to use the `repo-launch-kit` skill.

| Client | `gh skill install --agent` | Project location |
| --- | --- | --- |
| [Codex](https://learn.chatgpt.com/docs/build-skills#where-codex-loads-local-skills) | `codex` | `.agents/skills/repo-launch-kit/` |
| [Claude Code](https://code.claude.com/docs/en/skills) | `claude-code` | `.claude/skills/repo-launch-kit/` |
| [GitHub Copilot](https://docs.github.com/en/copilot/concepts/customizations/agent-skills) | `github-copilot` | `.agents/skills/repo-launch-kit/` |
| [Cursor](https://cursor.com/docs/skills) | `cursor` | `.agents/skills/repo-launch-kit/` |
| [Gemini CLI](https://geminicli.com/docs/cli/skills/) | `gemini-cli` | `.agents/skills/repo-launch-kit/` |
| [OpenCode](https://opencode.ai/docs/skills/) | `opencode` | `.agents/skills/repo-launch-kit/` |

The table lists the verified GitHub CLI project install locations and links to each client's discovery rules. See the [verification record](../RELEASING.md) for the difference between installer checks and workflow execution in a client.

## Install from GitHub

Use GitHub CLI with `gh skill install`. Replace `REVISION` with the commit SHA or a release tag that contains the `skills/repo-launch-kit/` layout. Pinning selects that revision ahead of any older tagged release.

```sh
gh skill install Mike-Animal-Counseling/repo-launch-kit repo-launch-kit --pin REVISION --agent codex --scope project
```

Use the `--agent` value for your client. Pass `--scope user` to use the client's personal install location.

## Install from a source checkout

From the target Git repository, copy the skill out of your Repo Launch Kit checkout. For a new directory before Git initialization, use a user-scope install or copy the folder manually.

```sh
gh skill install "/path/to/repo-launch-kit" repo-launch-kit --from-local --agent codex --scope project
```

You can also copy the whole [`skills/repo-launch-kit/`](../skills/repo-launch-kit/) folder into a supported location. GitHub CLI adds local source-tracking metadata. For a personal project-scope install, put the actual installed folder in the target repository's `.git/info/exclude` to keep it out of commits.

## Load the instructions manually

For a client that loads instructions on request, place the complete `repo-launch-kit` folder where it can read it. Give it the exact path to `SKILL.md` and keep the referenced files beside it.

```text
Read the repo-launch-kit/SKILL.md file at the path I provide and the files it links for this task. Use its launch workflow to prepare this project.
```

The generated project uses `AGENTS.md` for shared rules. When a client needs a separate entry point, use its documented import or project rule format and preserve existing rules.

## Uninstall or roll back

Remove the installed `repo-launch-kit` folder from the scope where you installed it and start a new session. For a version rollback, replace the full installed folder with the one from an earlier release ZIP. To undo a repository change the skill made, review and revert the relevant Git changes in that repository.

[GitHub CLI skill installation](https://cli.github.com/manual/gh_skill_install)
