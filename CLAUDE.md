@AGENTS.md

# Project

Next.js App Router + React + TypeScript + Tailwind.

**Mode: discovery.** (Set in `PROJECT.md`.)

Do not invent business facts, branding, offerings, prices, reviews, site architecture, content,
or technical requirements. Every fact in `PROJECT.md` carries a source label.

In **pitch** mode a visual direction may be proposed before the client agrees. Mark it
`[Proposal]` in `DESIGN.md`. Facts still come only from the client or their public sources.

## Source of truth

- `PROJECT.md`: the brief, scope and decisions log. Read before non-trivial work.
- `DESIGN.md`: direction, tokens, imagery rules, Hero Lab log.
- `assets.csv`: every image and video, with rights and intervention ceiling.
- `CONTEXT.md`: agreed vocabulary.
- `docs/project/open-questions.md`: what we don't know yet.

## Checks

- `npm run lint && npm run build` before every commit.
- `npm run shots` after any visual change (dev server running): look at desktop (1440) and
  mobile (390) before calling it done. Screenshots land in `shots/` and are never committed.

## Agent skills

### Issue tracker

GitHub Issues. See `docs/agents/issue-tracker.md`.

### Domain docs

Single-context project using `CONTEXT.md` and `docs/adr/`.
See `docs/agents/domain.md`.
