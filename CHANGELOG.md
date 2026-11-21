# Changelog

## Unreleased

- Document Agent Skills installation across six coding clients, retain shared project rules, and support explicit manual loading.
- Add a new-project skeleton workflow. Set up a usable baseline before the stack is decided, or create and verify a runnable starter when the stack and project kind are established.
- Give new projects a README, focused Git ignore rules, and a first task with acceptance criteria. Add configuration, licensing, ownership, and other community files when their inputs are known.
- Tie new CI to the selected runtime, package manager, lockfile, and real check commands. Preserve existing workflow check identities during adoption.
- Put the installable skill in `skills/repo-launch-kit/` so it can be discovered by source installers.
- Rework the README, installation and contribution guides, and add a focused bug report form.
- Build release ZIPs from the skill directory and check that the bundled license and the shared PR template match their repository copies.

## v0.1

- Add an adoption workflow that keeps existing repository conventions, authoritative task lists, and GitHub check names.
- Add PR maintenance with task state updates, evidence for completed work, and concise PR summaries under `任务变化`.
- Ship one installable skill with Markdown templates for contributor instructions, tracked tasks, and the PR body.
