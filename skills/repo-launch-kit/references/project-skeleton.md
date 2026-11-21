# Project skeleton

## Establish the target

- Resolve the requested project directory and its Git root before editing. Read applicable `AGENTS.md` files and inspect tracked and untracked files, including hidden project configuration. Distinguish a directory outside Git from an unreadable repository or missing Git executable before choosing to initialize.
- If the request calls for a new Git repository and the target is outside an existing Git work tree, initialize Git only in the exact project directory. Honor a specified initial branch or the local Git default. For a target inside an existing work tree, keep package files in the requested subdirectory and use the enclosing repository's conventions. Change repo-wide PR templates and workflows at the Git root only when that root is in scope. A separate nested Git repository requires explicit intent. [Git init](https://git-scm.com/docs/git-init)
- Use the project kind, stack, and layout named by the user or evidenced by the target repository. Treat installed tools as evidence of availability. Separate project files from local skill installations and personal tooling when evaluating an empty target. Keep local installations out of project commits. Use a short preview to state the inferred project root, which files will be created or merged, the check you expect to run, and decisions still open.

## Start a new repository

| Situation | Start with |
| --- | --- |
| Stack undecided | A short `README.md`, a narrow `.gitignore`, `AGENTS.md`, one task source, and a PR template when using GitHub. Record the real decision that blocks a runnable project or CI as a next step. |
| Stack confirmed and runnable scaffolding in scope | The same foundation plus a minimal runnable entry point and a meaningful check. Use the selected stack's normal package layout, runtime version source, and dependency manager. Wire CI to commands the scaffold actually supports. |
| Starter already present | Derive setup and checks from the starter's manifests and docs. Fill gaps in place and retain the starter's conventions and generated assets. |

- **README.** Use the project's actual name and purpose. Give prerequisites, install and first-run commands, and a verification command when each is established. State the working directory and a useful success signal. If the stack is undecided, describe the current state and point to the task that will establish a runnable baseline.
- **Git ignore rules.** Start with a short list of files this project will produce or is likely to encounter, such as OS metadata (`.DS_Store`, `Thumbs.db`). Add generated directories and local configuration names once the stack makes them concrete. Keep lockfiles, example configuration, and test fixtures visible where the project expects to commit them. For an installation intended only for this checkout, use `.git/info/exclude` or locate it with `git rev-parse --git-path info/exclude`. Check representative paths with `git check-ignore --no-index -- <path>`. Check already tracked files separately when handling local config. [Git ignore patterns](https://git-scm.com/docs/gitignore)
- **Project instructions and tasks.** Document actual commands and boundaries in `AGENTS.md`. Use one task source for the next concrete decision, check, or handoff. For GitHub, use the PR template to collect the change, affected tasks, and verification.
- **Environment and configuration.** Derive variable names from the code or documented configuration. Add `.env.example` or an equivalent sample when the program consumes those names. Document how to use it with safe dummy values. Ignore private local files by their known names and verify that the sample remains visible to Git. Keep credentials and machine-specific values out of generated files and logs.

## Build a runnable baseline

| Project kind | First usable result |
| --- | --- |
| Application or service | A documented local run command, an actual entry point, and a bounded check of observable behavior. |
| Library | A small public API through the declared package entry point and a test that exercises it. |
| Command-line tool | A documented local invocation and a test of a meaningful command or exit status. |

Use an existing project generator if the repository specifies one. Otherwise, when the stack and scaffold choice are clear, use the ecosystem's official generator or a small implementation that fits the project's scope. Verify its preset, supported tool version, and any automatic Git changes, installation, telemetry, or parent workspace edits. Choose flags that keep those effects within the request. Run it in a fresh directory when its file writes could collide with existing content, then review what it produced before moving files into the project. [Vite scaffold options](https://vite.dev/guide/#scaffolding-your-first-vite-project) · [uv init](https://docs.astral.sh/uv/reference/cli/#uv-init)

Run setup and the first check from their documented locations when prerequisites are available. For a process-based check, bound the run and stop the process you started. Only add a CI check with a concrete command, required setup steps, and a clear failure result. Follow the [GitHub CI reference](github-ci.md) when wiring that command to a workflow. If local tools or network access block verification, record the blocker and the remaining validation.

## Add project-specific files when supported

| File or setting | Add when |
| --- | --- |
| `LICENSE` | The maintainer has chosen the license and confirmed the correct attribution. Preserve an existing license. [GitHub licensing guide](https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/licensing-a-repository) |
| `CONTRIBUTING.md` | Contributors need a workflow beyond the README and repository instructions. |
| Issue templates or `CODE_OF_CONDUCT.md` | The maintainers have an issue triage or community process they can support. |
| `SECURITY.md` | There is a verified vulnerability-reporting route and a policy the maintainers can honor. |
| `CODEOWNERS` | The responsible people or teams and their repository access are confirmed. [GitHub code owners](https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/about-code-owners) |
| `.editorconfig`, `.gitattributes`, or tool configuration | The stack or repository calls for a shared convention. Preserve existing formatting outside the requested changes. |
| `Dockerfile` or Compose setup | Containers are part of the confirmed local workflow. Use the documented build, configuration, ports, and health check. |
| Dependency update automation | A supported ecosystem, owner, and review process are established. Follow the existing project cadence. |
| Release, deployment, or hosted settings | The operation was requested and the target is known. Verify the needed permissions and credentials before enabling automation. |

For an existing GitHub owner, reuse applicable organization defaults before adding local copies of community files. Repository-specific issue templates can replace inherited ones. [GitHub community defaults](https://docs.github.com/en/communities/setting-up-your-project-for-healthy-contributions/creating-a-default-community-health-file)

Keep a local scaffold as a local change. Creating a hosted repository, changing its visibility or settings, enabling deployment, and publishing require authorization for the concrete target.

## Reconcile and verify

- In an existing or partly scaffolded repository, reuse the established source of truth and layer in missing pieces. Merge ignore rules, setup instructions, and task references into existing files. Add to the appropriate package in a workspace. Preserve user edits, existing entry points, workspace configuration, task plans and roadmaps, and workflow check names.
- Review the diff for stray generated files, unresolved placeholders, broken paths, and sensitive values. Run the documented checks when possible and report actual outcomes and blockers. A runnable baseline should have a usable entry point and evidence for its first check.
- If a scaffold is interrupted, inspect the files already present before continuing. Resume only the missing or explicitly requested steps. Repeating setup with the same inputs should produce the same files and contents. Before the first commit, compare the untracked file list and contents as well as `git diff`.
