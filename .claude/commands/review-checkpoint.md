---
description: Verify, commit and push the current work; report a review handoff.
---

Take the current work to a reviewable checkpoint.

1. Finish anything half-done. No stubs or TODOs left from this session.
2. Run `npm run lint && npm run build` in one call. Both must pass.
3. If the change is visible, run `npm run shots` against the dev server and look at the
   desktop and mobile screenshots. Fix anything broken before going on.
4. Commit the genuine project changes. Exclude scratch files, editor state and
   screenshots (`shots/` is gitignored; never commit screenshots). Push the current branch.
   **If the current branch is `main`, ask before pushing**: it may be wired to a
   production deployment.
5. Report only:
   - repository, branch, commit hash
   - preview URL — only if the change is visible; otherwise "n/a"
   - what passed (lint, build, screenshots checked; there is no test suite)
   - unresolved errors

No handoff files. No summary unless asked.
