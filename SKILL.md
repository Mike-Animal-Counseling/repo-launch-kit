---
name: repo-launch-kit
description: Set up a new GitHub repository, adopt an existing repository, or maintain task handoffs in a pull request. Reconcile AGENTS.md, the existing task source, PR templates, and repository-backed CI. Use when establishing repository conventions, taking over a project, or preparing or updating a PR and its task status.
license: MIT
metadata:
  version: "0.1"
---

# Repo Launch Kit

Choose setup for new or existing repositories, or PR maintenance for changes already in progress. Start at the Git root. Read applicable `AGENTS.md` files and check Git status before editing. Preserve working-tree changes and repository conventions.

## Set up or adopt a repository

1. Inspect contributor docs, task lists, referenced issue trackers/specs, PR template locations and variants, workflows, manifests, and check commands. Show a brief plan and the proposed diff before applying local edits. Keep existing text, formatting, and line endings outside the edits needed for setup.
2. Add or extend root `AGENTS.md` using the [instructions template](assets/AGENTS.md). Point to the authoritative task source and document actual commands, working directories, and relevant boundaries. Keep existing stricter or scoped instructions. Reuse an established `TODO.md`, issue tracker, roadmap, or OpenSpec task file. If there is no task source, start with the [TODO template](assets/TODO.md) and add only substantiated items.
3. Add `.github/pull_request_template.md` from the [PR template](assets/pull_request_template.md) if no supported template exists. Otherwise adapt the active default and applicable variants in place to include `## 任务变化`. Reuse an equivalent section and keep its useful prompts. Preserve each template's other sections and selection behavior.
4. Follow the [CI reference](references/github-ci.md) when adding or changing workflow files. Reuse existing workflows, commands, and required check names. With no verifiable commands, finish the Markdown setup and record that CI is pending. Add other contributor docs or automation only when the project calls for them.
5. Review the diff, run applicable checks, and report commands and results, including anything only inspected. A second run with the same inputs should produce an empty diff from the first result.

## Maintain a pull request

1. Read the documented task source and compare the PR diff against its actual base. Use stable task IDs or issue links when present. When the base has moved, reconcile changed entries against the latest available base before handing off or merging. Preserve concurrent additions and status updates. Flag overlapping changes you cannot reconcile from the evidence.
2. Update affected tasks alongside the code. Keep partial work active with its next step, acceptance conditions, or blocker. Mark completion only when acceptance is met and record the verification result or link. Capture follow-ups worth tracking. Reopen completed work when a revert invalidates its acceptance. For an external tracker, follow the existing linking and update conventions within the user's authorization, and report any pending tracker update.
3. Use the repository's PR template. In `## 任务变化`, list only the affected tasks and what changed for each. If there is no change, write `无任务变化` and leave the task source untouched. Include actual verification in the PR body. For review-only requests, report missing updates as findings.

Keep changes local unless the user authorized the external action and its target is known.
