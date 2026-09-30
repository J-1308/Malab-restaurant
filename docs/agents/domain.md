# Domain docs

How the engineering skills should consume this repo's domain documentation.

## Before exploring, read these

- **`PROJECT.md`** at the repo root: the brief and scope
- **`CONTEXT.md`** at the repo root: agreed vocabulary
- **`docs/adr/`**: read any ADRs touching the area you are about to work in

This repo is **single-context**: one root `CONTEXT.md`, one `docs/adr/`. There is no
`CONTEXT-MAP.md` and no per-context docs, because there is no monorepo or multi-package layout.

If a file listed above doesn't exist, proceed silently. Don't flag its absence and don't propose
creating it upfront; these get created lazily, when a term or decision is actually resolved.

## File structure

```
/
├── CLAUDE.md                        ← auto-loaded, minimal, routes to everything else
├── AGENTS.md                        ← Next.js agent rules (managed by `next dev`)
├── PROJECT.md                       ← brief, scope, decisions log
├── DESIGN.md                        ← direction, tokens, imagery rules
├── assets.csv                       ← asset register
├── CONTEXT.md                       ← vocabulary + glossary
├── docs/
│   ├── project/                     ← open questions
│   ├── agents/                      ← how agents work in this repo
│   └── adr/                         ← accepted decisions
├── scripts/shots.mjs                ← desktop + mobile screenshots
└── src/app/
```

## Use the glossary's vocabulary

When output names a domain concept (an issue title, a refactor proposal, a hypothesis, a test name),
use the term as defined in `CONTEXT.md`. Don't drift to synonyms the glossary avoids.

The glossary is currently empty. During discovery that means product vocabulary is genuinely
unfixed: don't mint terms and use them as if settled. Note the gap, or open an issue.

## Flag ADR conflicts

If output contradicts an existing ADR, surface it rather than silently overriding:

> _Contradicts ADR-0007 (…), but worth reopening because…_

## Don't invent facts

While the project is in discovery, business facts, branding, offerings, site architecture and
technical requirements are not yet established. Pitch mode relaxes this for visual direction only
(marked `[Proposal]`), never for facts. Absence of a fact is information: leave a `TBD`,
add a row to `docs/project/open-questions.md`, or open an issue. Do not fill gaps with plausible
defaults.
