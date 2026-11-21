# Release verification

## Candidate checks

After committing the candidate, run `actionlint` and `git diff --check`. Run the `Package skill` job's Bash commands against that commit. Use a temporary output path for the ZIP.

Build an archive from a source revision with the package in `skills/repo-launch-kit/`. Run this command from the repository root.

```sh
git archive --format=zip --prefix=repo-launch-kit/ -o repo-launch-kit-dev.zip HEAD:skills/repo-launch-kit
```

The archive should contain `repo-launch-kit/SKILL.md` alongside the templates, CI reference, Codex metadata, and MIT license. Install the complete folder following the [installation guide](docs/install.md).

Exercise launch, adoption, and PR maintenance in fresh sessions using the archive at project scope. Start one project before choosing a stack and another with a runtime and a runnable first check. Verify the generated project from its README and run the commands in its CI configuration. For adoption, compare the existing task source, dirty files, conventions, and check names with their starting state. Reapply the same inputs and check tracked and untracked files for changes.

## v0.2 skeleton candidate

Independent agents used the candidate archive in isolated projects. The checks below ran locally.

| Scenario | Verified result |
| --- | --- |
| No stack selected | Initialized the requested directory and generated the README, Git ignore rules, contributor instructions, task list, and GitHub PR template. The task list kept the stack and first runnable check pending. The same inputs produced no additional differences. |
| Node.js CLI | The generated code printed `hello-world` from the README command. `npm ci`, all three CLI tests, and `actionlint` passed on Node 24. The second pass kept the same 11 Git-visible files and contents. |
| Python library | The public API imported from the checkout on Python 3.12. It returned the expected result, all four standard-library tests passed, and `actionlint` accepted the workflow. |
| Existing GitHub project | Kept the dirty README, `ROADMAP.md`, and the existing workflow and check name. Reapplying the same adoption inputs produced no additional changes. |
| Nested package | Kept the new files within the requested package. The existing parent repository and its CI stayed intact. |
| PR draft | Kept the existing English `Task changes` section and its no-change wording. The task source remained untouched. |

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

## Public v0.1 verification

The ZIP downloaded from the [v0.1 release](https://github.com/Mike-Animal-Counseling/repo-launch-kit/releases/tag/v0.1) matched the published SHA-256 digest. Fresh Codex CLI sessions on Windows used the installed skill to generate the repository setup and complete task D01 through PR maintenance. The PR draft listed D01 under `任务变化`, and the task file recorded the passing mixed-case regression test.

The [npm workspace example](https://github.com/Mike-Animal-Counseling/repo-launch-kit/tree/examples/npm-workspace-ci) retains the generated workflow and task list. GitHub Actions ran `npm ci` and `npm test` on Node 22. All three workspace tests passed. [Passing example run](https://github.com/Mike-Animal-Counseling/repo-launch-kit/actions/runs/44687533394)

## Hosted handoff

- [PR #1](https://github.com/Mike-Animal-Counseling/repo-launch-kit/pull/1) and [its passing check](https://github.com/Mike-Animal-Counseling/repo-launch-kit/actions/runs/44686133595/job/136120780106) established the handoff and left R01 active.
- [PR #2](https://github.com/Mike-Animal-Counseling/repo-launch-kit/pull/2) and [its passing check](https://github.com/Mike-Animal-Counseling/repo-launch-kit/actions/runs/44686764580/job/136122834987) closed R01 from a fresh session started on the merged base.

## Publish on GitHub

1. Confirm the repository owner, public visibility, and public commit attribution. Look up the exact owner and repository name before creating a repository. Prepare public commits with the confirmed GitHub noreply identity. Review the proposed public commits, diffs, package contents, PR bodies, logs, and release notes for private information and credentials.
2. Wait for `Package skill` before merging release changes. Link the relevant PRs and passing checks in the release notes. The [handoff example](examples/pull-requests.md) shows how to document work that spans two PRs.
3. Finish the candidate review and confirm the final default-branch checks. Tag that revision. Build `repo-launch-kit-<version>.zip` using the archive command above with the tag in place of `HEAD`, and attach it to the GitHub release. Use the corresponding section in [CHANGELOG.md](CHANGELOG.md) as the release notes.
4. Download the published ZIP into a clean checkout, install it at project scope, and run the setup and PR-maintenance prompts from the README in new sessions. Record the repository URL, release URL, relevant PR and hosted check URLs, and the installation outcome. Close the release task with that evidence.
