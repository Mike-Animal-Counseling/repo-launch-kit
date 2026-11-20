# Release verification

## Candidate checks

After committing the candidate, run `actionlint` and `git diff --check`. Run the `Package skill` job's Bash commands against that commit. Use a temporary output path for the ZIP. Compare its contents with the release packaging command in [README.md](README.md).

Exercise setup and PR maintenance in fresh sessions using the archive at project scope. Verify that adoption still produces an empty diff on a second run with the same inputs. Check the existing repository's task source, conventions, CI commands, and check names against its starting revision.

## v0.1-rc.1 results

| Scenario | Local result |
| --- | --- |
| Project-scope ZIP installation | Codex CLI 0.160.0 on Windows loaded the extracted skill in fresh sessions for setup and PR maintenance. |
| Empty repository and unknown stack | Both setup calls created repository instructions, a task list, and the PR template. Both recorded CI as pending because there were no verified commands. |
| Existing repository | On an isolated `agentmemory` snapshot at `f0f7378`, setup added a task handoff to `AGENTS.md` and a PR template. The original instructions, `ROADMAP.md`, `CONTRIBUTING.md`, and all four workflows were preserved. The second invocation produced no additional diff. |
| npm monorepo | Generated CI reused the root workspace test command and the Node version declared in `.nvmrc`. `actionlint`, `npm ci`, and `npm test` passed locally with Node 24 on Windows. The generated workflow targets Node 22. |
| Parallel PR changes | PR maintenance completed one task with two passing `node --test` cases, retained two independent changes from the base, and included only the completed task in `任务变化`. |
| PR with no task changes | The draft used `无任务变化`. `TODO.md` retained its original file hash. |
| Revert PR | When a revert invalidated acceptance, the skill reopened the completed task, preserved the unrelated task, and listed only the reopened task in the PR body. |
| Release package | `actionlint` and the package job's Bash commands passed against a committed archive. The installed skill's relative links resolved. The check rejected an archive missing a referenced template. |
| Archive replacement and uninstall | Replacing the installed folder with the earlier local archive and then removing it left repository tasks intact. |

The public release and clean installation are tracked in R02.

## Hosted handoff

- [PR #1](https://github.com/Mike-Animal-Counseling/repo-launch-kit/pull/1) and [its passing check](https://github.com/Mike-Animal-Counseling/repo-launch-kit/actions/runs/44686133595/job/136120780106) established the handoff and left R01 active.
- [PR #2](https://github.com/Mike-Animal-Counseling/repo-launch-kit/pull/2) and [its passing check](https://github.com/Mike-Animal-Counseling/repo-launch-kit/actions/runs/44686764580/job/136122834987) closed R01 from a fresh session started on the merged base.

## Publish on GitHub

1. Confirm the repository owner, public visibility, and public commit attribution. Look up the exact owner and repository name before creating a repository. Prepare public commits with the confirmed GitHub noreply identity. Review the proposed public commits, diffs, package contents, PR bodies, logs, and release notes for private information and credentials.
2. Open the first handoff PR and wait for its `Package skill` check before merging. Prepare the second PR from the merged base in a fresh agent session using the checked-in task list. Verify and merge the second PR and link both PRs and their checks in the release notes. The [handoff example](examples/pull-requests.md) illustrates the expected evidence.
3. Finish the candidate review and confirm the final default-branch checks. Tag that revision as `v0.1`. Build `repo-launch-kit-v0.1.zip` using the README command with `v0.1` in place of `HEAD`, and attach it to the GitHub release. Use the corresponding section in [CHANGELOG.md](CHANGELOG.md) as the release notes.
4. Download the published ZIP into a clean checkout, install it at project scope, and run the setup and PR-maintenance prompts from the README in new sessions. Record the repository URL, release URL, both PR URLs, hosted check URLs, and the installation outcome. Close the release task with that evidence.
