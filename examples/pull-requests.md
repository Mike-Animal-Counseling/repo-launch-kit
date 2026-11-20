# Two-PR handoff

## First PR · Add repository adoption and PR handoffs

The first PR added the repository maintenance workflow and built the installable ZIP. It left R01 active with a concrete acceptance condition. The next contributor needed to extract the ZIP and verify the links in the installed skill while keeping the `Package skill` check name. [PR #1](https://github.com/Mike-Animal-Counseling/repo-launch-kit/pull/1) · [Passing CI](https://github.com/Mike-Animal-Counseling/repo-launch-kit/actions/runs/44686133595/job/136120780106)

## Second PR · Verify the installed release layout

A fresh agent session started from the merged checkout and used its instructions and task list to find R01. It added the installed-file and link checks, ran local validation, and moved R01 to Done in the same PR. The task section in the PR body lists R01, and the previous check name is preserved. The negative cases rejected a missing CI reference and an incorrect link to the task template. No additional handoff context was needed. [PR #2](https://github.com/Mike-Animal-Counseling/repo-launch-kit/pull/2) · [Passing CI](https://github.com/Mike-Animal-Counseling/repo-launch-kit/actions/runs/44686764580/job/136122834987)
