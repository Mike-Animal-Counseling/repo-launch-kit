# Tasks

## In progress

- [ ] R01 — Verify the installed release layout. The package job creates a ZIP from committed files and checks that it is nonempty. Next, have the same job extract the ZIP into a temporary directory and verify that the installed `SKILL.md` can find each shipped asset and the CI reference at the paths it links to. Keep the `Package skill` check name. Verify against a committed archive locally, run `actionlint`, and record both results here when closing this task.

## Up next

- [ ] R02 — Publish the GitHub acceptance PRs and `v0.1` after the PR handoff and hosted checks pass. Install the downloaded asset in a new session and exercise setup and PR maintenance.

## Done
