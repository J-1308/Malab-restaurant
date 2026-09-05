# Issue tracker: GitHub

Issues and specs for this project live in the GitHub Issues section of the current repository. This is the
work queue: if a piece of work is worth doing, it exists as an issue. Use the `gh` CLI for all
operations (it infers the repo from `git remote` when run inside the clone).

## Conventions

- **Create**: `gh issue create --title "..." --body "..."`. Use a heredoc for multi-line bodies.
- **Read**: `gh issue view <number> --comments`
- **List**: `gh issue list --state open --json number,title,body,labels,comments --jq '[.[] | {number, title, body, labels: [.labels[].name], comments: [.comments[].body]}]'`, with `--label` / `--state` filters as needed.
- **Comment**: `gh issue comment <number> --body "..."`
- **Label**: `gh issue edit <number> --add-label "..."` / `--remove-label "..."`
- **Close**: `gh issue close <number> --comment "..."`

## When a skill says "publish to the issue tracker"

Create a GitHub issue.

## When a skill says "fetch the relevant ticket"

Run `gh issue view <number> --comments`.

## Pull requests as a triage surface

**PRs as a request surface: no.** _(Set to `yes` if this repo should treat external PRs as feature
requests.)_ While this is `no`, only issues form the queue.

## Discovery-stage note

The project is in discovery, so many issues will be questions rather than tasks. Prefer opening an
issue over guessing an answer, and link it from the matching row in
`docs/project/open-questions.md`.

## Not installed

The `triage` and `wayfinder` skills are not installed in this repo, so no triage label vocabulary
(`docs/agents/triage-labels.md`) and no wayfinding conventions are defined. Add them here if those
skills are installed later.
