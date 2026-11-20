# GitHub CI

Inspect existing workflow triggers, names, job IDs, display names, matrix values, and required checks before editing. Existing checks may be referenced by branch protection, rulesets, or a merge queue. Leave a working workflow untouched by default. If a change is needed, keep its check identity and order of dependencies.

## Choose commands from the repository

| Detected evidence | Default approach |
| --- | --- |
| `package.json` and a lockfile | Use the matching package manager and lockfile install. Run declared lint, typecheck, test and build scripts as applicable. Derive the runtime from `.nvmrc`, `.node-version`, `engines`, or existing CI. |
| `pyproject.toml` or requirements files | Use the project's Python version and its existing uv, Poetry or pip workflow. Install the declared test tooling and run its configured tests and checks. |
| `Cargo.toml` | Honor the toolchain and workspace. Reuse CI commands if present. Otherwise consider `cargo fmt --check`, `cargo clippy`, and `cargo test` where the repository supports them. |
| `go.mod` | Use its Go version. Run the documented checks, commonly `go vet ./...` and `go test ./...`. |
| An existing task runner | Prefer the existing Makefile, taskfile, workspace, or CI entry point. Avoid maintaining a second list of commands. |

Prefer the actual checks documented in contributor instructions or exposed by the repository's task runner. Run the intended commands from the workflow's working directory. For a monorepo, use its root runner when present. Otherwise scope each job to the package whose command you verified, and set the working directory on its `run` steps. If there is no reliable check command, leave CI pending. Avoid placeholder jobs and commands that hide failure.

## Workflow boundaries

- For new workflows, run ordinary checks on `pull_request` and pushes to the actual default branch. Omit the branch filter if the default branch is undecided. If the project uses a merge queue and requires the checks, preserve or configure its `merge_group` trigger as appropriate.
- Grant only the permissions required, typically `contents: read` for checkout. Pin actions to verified full commit SHAs. Disable checkout credential persistence unless a specific job requires it.
- Keep PR jobs free of deployment credentials and untrusted PR execution away from privileged workflows. Preserve any existing concurrency policy and required check names.
- When deployment is requested, establish the target, trigger, environment, credential mechanism and rollback path first. Put deployment behind its own workflow and protected environment. A missing target means CD is pending.

Validate new or edited workflow YAML with an available GitHub Actions linter. Run the declared checks locally where possible, then verify the actual GitHub job on the relevant PR or commit when authorized. Record local check results and hosted run links separately.
