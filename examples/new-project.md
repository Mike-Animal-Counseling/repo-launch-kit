# Start a new project

Install the skill and open a fresh session in an empty target directory. Give the agent the purpose, project kind, and any technology choices already made.

## Start a runnable CLI

```text
Use $repo-launch-kit to start Title Slug in this directory. It is a GitHub-hosted Node.js CLI that turns a title into a lowercase, hyphen-separated slug. Use npm and the built-in Node test runner. Set up the repository, implement and verify the first CLI behavior, and wire its tests into CI.
```

Check the resulting project for a CLI entry point, a test of real slug behavior, a manifest and lockfile that agree, and a quick start you can run from the README. Contributor instructions describe the checks and point to the task list. CI installs from the lockfile and runs the same test command as the README.

In the acceptance run, the project included `src/cli.js`, `test/cli.test.js`, `.nvmrc`, `package.json`, `package-lock.json`, and `.github/workflows/ci.yml`. From the project root, `npm start -- "Hello, World!"` produced `hello-world`, and `npm test` passed three CLI tests.

## Start before choosing a stack

```text
Use $repo-launch-kit to start Reading Queue in this directory. It will collect links to read later. Prepare the GitHub repository skeleton. The application stack is still open.
```

The project starts with a README that explains the goal, useful Git ignore rules, contributor and task instructions, and a PR template. The task list captures the stack decision and what the first runnable slice needs to demonstrate. CI begins once a real check can run.

For the transition from an initial PR to a fresh agent session, see the [two-PR handoff](pull-requests.md).
