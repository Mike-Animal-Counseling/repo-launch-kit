---
name: repo-launch-kit
description: Bootstrap GitHub repository standards for a new or newly adopted project. Add or reconcile a pull request template, AGENTS.md, contributor commands, and stack-aware GitHub CI. Use for repository setup or standards onboarding, not routine feature edits or PR reviews.
---

# Repo Launch Kit

Set up the current repository for its first maintainable pull request.

1. Inspect the Git root, status, existing instructions, workflow files, PR templates, and stack manifests. In a new repository with no language selected, install only stack-neutral files and leave CI pending. In an existing repository, preserve its commands, check names, template variants, and stricter rules.
2. Add missing pieces. Use [the PR template](assets/pull_request_template.md). Add or extend root `AGENTS.md` with the actual run and check commands, working directories, generated-file boundaries, and repository-specific constraints. Put human onboarding in `CONTRIBUTING.md` only when it has separate instructions worth documenting.
3. Build CI from verified repository commands using [the CI reference](references/github-ci.md). Prefer the existing workflow and job names. For a monorepo, use the existing workspace runner or narrowly scoped jobs with explicit working directories. Preserve the check that branch protection expects.
4. Run the checks you wired up where dependencies are available. Validate workflow YAML and document any check you could only inspect. Summarize the files added or adapted and the exact commands CI will run.

Repository setup authorizes local files. Configure external repository settings, publish artifacts, or add deployment automation only when the user has asked for that operation and the target is known. Keep deployment separate from pull-request CI.
