# GitHub CI

## Choose commands from the repository

| Detected evidence | Default approach |
| --- | --- |
| `package.json` and a lockfile | Use the matching package manager and lockfile install. Run declared lint, typecheck, test and build scripts as applicable. Derive the runtime from `.nvmrc`, `.node-version`, `engines`, or existing CI. |
| `pyproject.toml` or requirements files | Use the project's Python version and its existing uv, Poetry or pip workflow. Install the declared test tooling and run its configured tests and checks. |
| `Cargo.toml` | Honor the toolchain and workspace. Reuse CI commands if present. Otherwise consider `cargo fmt --check`, `cargo clippy`, and `cargo test` where the repository supports them. |
| `go.mod` | Use its Go version. Run the documented checks, commonly `go vet ./...` and `go test ./...`. |
| An existing task runner | Prefer the existing Makefile, taskfile, workspace, or CI entry point. Avoid maintaining a second list of commands. |

If there is no reliable test command, report that gap. A workflow that silently skips missing commands gives an inaccurate green check.

## Workflow boundaries

- Run ordinary checks on `pull_request` and pushes to the default branch. If the project uses a merge queue and requires the checks, preserve or configure its `merge_group` trigger as appropriate.
- Give jobs read-only repository permissions by default. Pin third-party actions to verified full commit SHAs. Disable checkout credential persistence unless a specific job requires it.
- Keep PR jobs free of deployment credentials and untrusted PR execution away from privileged workflows. Preserve any existing concurrency policy and required check names.
- When deployment is requested, establish the target, trigger, environment, credential mechanism and rollback path first. Put deployment behind its own workflow and protected environment. A missing target means CD is pending.
