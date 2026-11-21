# GitHub CI

## Decide when CI is ready

1. For an existing repository, inspect workflow triggers, names, job IDs, display names, matrix labels, and required checks. Preserve working workflows by default. When changes are needed, keep the observed check names, dependencies, and behavior on protected branches and merge queues.
2. For a new project with a chosen stack, write CI once there is a real check and enough evidence to run it on a clean runner. Identify the runtime, working directory, dependency install command if required, and check command. Use the same commands in CI and the project docs. A single test, type check, or build is enough when it exercises the actual starter.
3. If the stack or commands are undecided, record the missing decision and the next verification step in the task source. Leave CI pending until a real check can run. Require the chosen commands and let failures propagate.

## Match commands to the project

Use the repository's task runner or documented checks first. Read manifests and scripts to confirm what commands do before running them. These are starting points for projects that use the listed tools.

| Evidence | Runtime and install | Checks |
| --- | --- | --- |
| `package.json` and a lockfile | Use the Node version from `.nvmrc`, `.node-version`, or existing CI, or select a compatible version within the declared `engines` range. Use the package manager that owns the lockfile. `npm ci` requires a committed `package-lock.json` or `npm-shrinkwrap.json` and the same install settings used to create it. Resolve conflicting package managers before wiring CI. [npm CI documentation](https://docs.npmjs.com/cli/v11/commands/npm-ci/) | Run the meaningful test, lint, type check, or build scripts declared in `package.json`. |
| Python package or project files | Use the project's Python version and existing uv, Poetry, or pip workflow. Install declared dependencies when needed. With `uv.lock`, use `uv sync --locked` and preserve the documented groups and extras. A standard-library-only starter that imports directly from the checkout can run its checks without an install step. [uv locking and syncing](https://docs.astral.sh/uv/concepts/projects/sync/) | Run the configured test runner and other project checks. For a standard-library test suite, use `python -m unittest discover` with the actual test directory and confirm it finds the intended tests. |
| `Cargo.toml` | Use the configured Rust toolchain and components. Honor `rust-toolchain.toml` where present. Use `--locked` for a checked-in `Cargo.lock`. [Cargo test documentation](https://doc.rust-lang.org/cargo/commands/cargo-test.html) | Use `cargo test`, with `--workspace` for a workspace-wide check. Include `cargo fmt --check` or `cargo clippy` where the project uses them. |
| `go.mod` or `go.work` | Use the repository's Go version and declared toolchain. [Setup Go documentation](https://github.com/actions/setup-go) | Run the documented checks. `go test ./...` and `go vet ./...` are common from a module root. In a multi-module workspace, use the project runner or run the checks from each intended module. |

For a monorepo, prefer its root runner with its root lockfile or workspace configuration. Otherwise give each selected package an explicit working directory and matching setup inputs. `defaults.run.working-directory` applies to `run` steps. Supply repository-relative paths to actions that need version files or lockfiles.

## Workflow boundaries

- Run ordinary checks on `pull_request` and pushes to the confirmed default branch. If the default branch is undecided, use `push.branches: ['**']` until it is known. Add `merge_group` when a merge queue needs these required checks. Keep required workflows eligible to run on relevant PRs so a branch or path filter cannot leave the check pending. [Workflow syntax](https://docs.github.com/en/actions/reference/workflows-and-actions/workflow-syntax) · [Workflow events](https://docs.github.com/en/actions/reference/workflows-and-actions/events-that-trigger-workflows#merge_group)
- Grant the minimum permissions, usually `contents: read`. Pin actions to full commit SHAs verified in their upstream repositories. Set `persist-credentials: false` for ordinary checkout. Use `pull_request` for PR code execution and keep its runner and credentials separate from privileged automation. [GitHub Actions security guidance](https://docs.github.com/en/actions/reference/security/secure-use)
- When deployment is requested, establish the target, trigger, environment, credential mechanism, and rollback path first. Use a separate workflow and protected environment. Leave deployment pending until those inputs exist.

## Example for an npm project

Use this when the default branch is `main`, `.nvmrc` declares the Node version, the npm lockfile is present, and `npm test` runs an actual check. The pins correspond to [checkout v6.1.0](https://github.com/actions/checkout/releases/tag/v6.1.0) and [setup-node v7.1.0](https://github.com/actions/setup-node/releases/tag/v7.1.0).

```yaml
name: CI
on:
  pull_request:
  push:
    branches: [main]
permissions:
  contents: read
jobs:
  test:
    name: Test
    runs-on: ubuntu-latest
    timeout-minutes: 15
    steps:
      - uses: actions/checkout@d23441a48e516b6c34aea4fa41551a30e30af803 # v6.1.0
        with:
          persist-credentials: false
      - uses: actions/setup-node@949feb2413d6458794dcd2491c4babbbce0c15c1 # v7.1.0
        with:
          node-version-file: .nvmrc
          package-manager-cache: false
      - run: npm ci
      - run: npm test
```

## Verify the workflow

Run the install and checks from the workflow's intended working directory. For installs that replace existing generated state, such as `npm ci`, use a clean or isolated checkout. Validate the YAML with a GitHub Actions linter if available. Record the commands and local results, including any unavailable prerequisites. When authorized, verify the hosted run on the relevant PR or commit and record its link and result separately.
