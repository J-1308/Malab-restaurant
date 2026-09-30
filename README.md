# Website starter

A neutral Next.js starter for client websites, with the agent context scaffolding
already wired up. It is deliberately blank: no design system, no component library,
no branding, no business assumptions.

Next.js App Router · React · TypeScript · Tailwind

## Starting a new client project

1. Create a repo from this one (GitHub → *Use this template*, or clone and re-init).
2. Set `name` in `package.json`.
3. Fill in `PROJECT.md` from the client kick-off (or from public sources, for a pitch).
4. Log every supplied image and video in `assets.csv`.
5. Work through `docs/project/open-questions.md`; move answers into `PROJECT.md`.
6. Set the direction in `DESIGN.md`, then run Hero Lab before building the rest.
7. Replace `src/app/page.tsx`, the metadata in `src/app/layout.tsx`, and add a
   favicon once there is a real identity to apply.

## Project context files

| File | Holds |
| --- | --- |
| `CLAUDE.md` | Auto-loaded routing file. Keep it minimal. |
| `PROJECT.md` | The brief: business, offer, conversion, scope, decisions log. Every fact source-labelled. |
| `DESIGN.md` | Direction, references, tokens, imagery ladder, Hero Lab log. |
| `assets.csv` | One row per image or video: source, rights, quality, role, intervention ceiling. |
| `CONTEXT.md` | Agreed vocabulary and glossary. |
| `docs/project/open-questions.md` | Unresolved questions that affect the build. |
| `docs/adr/` | Accepted decisions with trade-offs, one file each. |
| `docs/agents/` | How agents use the issue tracker and domain docs in this repo. |
| `.agents/skills/` | Engineering skills, symlinked into `.claude/skills/`. |
| `.claude/commands/` | `/review-checkpoint`: verify, commit, push, report. |

Work is tracked as GitHub Issues — see `docs/agents/issue-tracker.md`.

### assets.csv columns

`quality`: S strong · U usable · W weak · X unusable.
`auth_critical`: Y if a customer could rely on it (real people, premises, products, food,
results). `ceiling`: highest intervention level allowed (see the ladder in `DESIGN.md`).
`status`: todo · in-use · placeholder · requested · rejected.

## Commands

```bash
npm install
npm run dev     # http://localhost:3000
npm run build
npm run start
npm run lint
npm run shots   # screenshots at 1440 and 390 into shots/ (needs the dev server)
```

First time on a machine, `npm run shots` needs a browser: `npx playwright install chromium`.
Other URL or pages: `BASE_URL=https://preview.example.com npm run shots -- / /menu`.

## Discover, don't invent

Every project starts in discovery. Branding, offerings, tone, site architecture,
and technical requirements are **findings, not defaults** — they come from the
client, not from a sensible guess.

So: do not write placeholder company names, invented services, fake testimonials,
or stand-in imagery. If a fact is missing, leave a `TBD`, add it to
`docs/project/open-questions.md`, or open an issue. An empty section is information;
a plausible invention is a bug that ships.

**Pitch mode** is the one exception, and only for design. When building a spec hero
to win a client, a visual direction can be proposed before they agree; mark it
`[Proposal]` in `DESIGN.md`. Facts (menu, prices, hours, reviews, claims) still come
only from the client or their own public sources, and any stand-in image is logged in
`assets.csv` as a placeholder that never ships.

Add dependencies per project, when the project justifies them. This starter stays bare;
the only extra is Playwright, for screenshots.
