# Tasks

## In progress

## Up next

## Done

- [x] R01 — Verified the installed release layout. The `Package skill` job extracts the committed ZIP, checks the installed skill files, and verifies the four links from `SKILL.md`. The workflow Bash commands passed locally against a ZIP from a commit, and `actionlint` passed. Local regression checks rejected a missing CI reference and an incorrect link to the task template.

- [x] R02 — Published [v0.1](https://github.com/Mike-Animal-Counseling/repo-launch-kit/releases/tag/v0.1). The public ZIP matched the uploaded hash and worked in fresh setup and PR-maintenance sessions. The generated Node 22 workspace checks passed on [GitHub Actions](https://github.com/Mike-Animal-Counseling/repo-launch-kit/actions/runs/44687533394).

- [x] R03 — Reorganized the installable package under `skills/repo-launch-kit/`. GitHub CLI source installation and fresh setup and PR-maintenance sessions passed. The seven archived files matched v0.1 byte for byte. `actionlint` and the archive workflow passed locally. The workflow rejected committed license and PR template drift.
