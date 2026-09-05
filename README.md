# Website starter

A neutral Next.js starter for client websites, with the agent context scaffolding
already wired up. It is deliberately blank: no design system, no component library,
no branding, no business assumptions.

Next.js App Router · React · TypeScript · Tailwind

## Starting a new client project

1. Create a repo from this one (GitHub → *Use this template*, or clone and re-init).
2. Set `name` in `package.json`.
3. Fill in `docs/project/brief.md` from the client kick-off.
4. Work through `docs/project/open-questions.md` and move confirmed answers into
   `CONTEXT.md`.
5. Replace `src/app/page.tsx`, the metadata in `src/app/layout.tsx`, and add a
   favicon once there is a real identity to apply.

## Project context files

| File | Holds |
| --- | --- |
| `CLAUDE.md` | Auto-loaded routing file. Keep it minimal. |
| `CONTEXT.md` | Durable, confirmed project knowledge and glossary. |
| `docs/project/brief.md` | The client brief. |
| `docs/project/open-questions.md` | Unresolved questions that affect the build. |
| `docs/adr/` | Accepted decisions with trade-offs, one file each. |
| `docs/agents/` | How agents use the issue tracker and domain docs in this repo. |
| `.agents/skills/` | Engineering skills, symlinked into `.claude/skills/`. |

Work is tracked as GitHub Issues — see `docs/agents/issue-tracker.md`.

## Commands

```bash
npm install
npm run dev     # http://localhost:3000
npm run build
npm run start
npm run lint
```

## Discover, don't invent

Every project starts in discovery. Branding, offerings, tone, site architecture,
and technical requirements are **findings, not defaults** — they come from the
client, not from a sensible guess.

So: do not write placeholder company names, invented services, fake testimonials,
or stand-in imagery, and do not pick a visual direction before one is agreed. If a
fact is missing, leave a `TBD`, add it to `docs/project/open-questions.md`, or open
an issue. An empty section is information; a plausible invention is a bug that ships.

Add dependencies per project, when the project justifies them. This starter stays bare.
