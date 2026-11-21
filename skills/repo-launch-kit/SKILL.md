---
name: repo-launch-kit
description: Scaffold a new project and its GitHub repository, adopt an existing repository, or maintain task handoffs in a pull request. Use for a project skeleton with a README, Git hygiene, contributor instructions, a task list, PR templates, and CI from verified checks. When the stack and project kind are established, create a runnable starter within the requested scope.
license: MIT
metadata:
  version: "0.2"
---

# Repo Launch Kit

Choose launch for a new project, adoption for an existing project, or PR maintenance for a change in progress. Read applicable `AGENTS.md` and client-specific repository instructions. Resolve the target directory and any enclosing Git root before editing. Inspect Git status when a repository exists. Protect existing files and working-tree changes.

## Launch a new project

1. Read the [project skeleton guide](references/project-skeleton.md). Infer the project kind, stack, and scope from the brief and existing files. Show a short plan with the files, commands, and pending decisions before applying it. Initialize local Git only when the requested target is a new standalone repository. Keep the parent repository intact.
2. When the stack and project kind are established and implementation is in scope, provide one runnable entry point and one check that exercises real behavior. Reuse an existing usable starter and add only the missing pieces. Use the established toolchain or the confirmed framework initializer. Inspect produced files before proceeding. When a stack decision is still open, finish the stack-neutral foundation and record the decision needed to add code and checks.
3. Set up the README, focused `.gitignore`, repository instructions, task source, and GitHub PR template where applicable. Add the first actionable task and its acceptance check from the brief. Record only real setup, run, and verification commands. Add ownership, licensing, configuration, and contributor files when their inputs are established.
4. Follow the [CI reference](references/github-ci.md) to run the initial checks and configure CI around the verified commands. Review the planned files against the actual diff, check what Git will ignore, and verify that the same inputs produce no extra changes on a second pass. Report what works locally, what ran in hosted CI, and what is pending with its next step.

## Adopt an existing repository

1. Inspect contributor docs, task lists, referenced issue trackers or specs, PR templates, workflows, manifests, and check commands. Show a brief plan and the proposed diff for existing files before editing. Keep conventions, history, and formatting outside the scoped changes.
2. Fill documented gaps in place. Keep existing setup commands, check names, template variants, and authoritative task sources. Use the [CI reference](references/github-ci.md) to add missing CI when verified commands and the request support it, or to amend a workflow that needs a change. Run applicable checks and report the result. A second run with the same inputs should produce an empty diff from the first result.

## Set up the contribution workflow

- Add or extend root `AGENTS.md` using the [instructions template](assets/AGENTS.md). Point to the authoritative task source and project commands. Document working directories and generated-file boundaries where relevant. Keep existing stricter or scoped instructions. If an explicitly selected client needs a separate instruction entry point, follow its documented import mechanism where available and keep shared rules in one place.
- Use an established `TODO.md`, issue tracker, roadmap, or OpenSpec task file. If there is no task source, start with the [TODO template](assets/TODO.md) and add only substantiated items.
- Add `.github/pull_request_template.md` from the [PR template](assets/pull_request_template.md) for GitHub repositories that lack a template. Reuse equivalent task-change sections and their prompts in existing templates. Add `## 任务变化` where the section is missing. Preserve other sections and template selection behavior.

## Maintain a pull request

1. Read the documented task source and compare the PR diff against its actual base. Use stable task IDs or issue links when present. When the base has moved, reconcile changed entries against the latest available base before handing off or merging. Preserve concurrent additions and status updates. Flag overlapping changes you cannot reconcile from the evidence.
2. Update affected tasks alongside the code. Keep partial work active with its next step, acceptance conditions, or blocker. Mark completion only when acceptance is met and record the verification result or link. Capture follow-ups worth tracking. Reopen completed work when a revert invalidates its acceptance. For an external tracker, follow the existing linking and update conventions within the user's authorization, and report any pending tracker update.
3. Use the repository's PR template and list only affected tasks in its task-change section. With the default template, this is `## 任务变化`; use `无任务变化` if no tasks changed. For an established template, follow its equivalent heading and no-change wording. Leave the task source untouched when nothing changed. Include actual verification in the PR body. For review-only requests, report missing updates as findings.

Keep repository setup local. Creating or changing a hosted repository, pushing, publishing, setting protection rules, and deploying require authorization for the specific target.
