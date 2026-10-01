# DESIGN.md — Malab

**Status:** proposed [Proposal] — concept v2 (2026-09-30), modelled on Sabiib's site at the studio owner's request. Not owner-approved.

The rules Claude Code builds from. Tokens live in `src/app/globals.css` (`@theme`).

## 1. Brand evidence

- Fascia: black, with "MALAB" in 3D gold-and-white capitals and "SOMALI CUISINE" in geometric
  capitals; honeycomb logo with a fork and dripping honey, purple cells [Observed: shopfront video].
- Room: black marble tables with brass edges; emerald and plum velvet booths and chairs with gold
  frames; gold textured wall panels; crystal chandelier; white tile, glossy grey floor
  [Observed: interior video, food photo].
- Tableware: white rimmed bowls dusted with paprika and herbs; lemon wedge, red onion and a small
  salsa pot on each suqaar-style bowl [Observed: food photo].

## 2. References

From the Malab reference deck (Aug 2026).

| Site | Take | Don't take |
| --- | --- | --- |
| Al Kahf (alkahf.co.uk) | Somali neighbourhood restaurant leading with a real grilled dish | Generic template chrome |
| Chishuru | Full-bleed food photography, confident single line of positioning | Apricot ground (not Malab's colour) |
| Berenjak | Dark, atmospheric ground; heritage stated plainly | Particle effects, portrait-led hero |
| Fallow | Dark plate photography under large serif type | Fine-dining restraint that would hide the room |
| Ave Mario | A maximalist room treated as the draw | Theatrical overload; their Italian kitsch |

## 3. Direction — "Sabiib-clean, Malab colours" (v2)

v1 ("Honey, marble, velvet": dark grounds, Young Serif) was rejected by the studio owner on
2026-09-30: no logo, weak font, images underused, no menu. v2 follows the reference he chose,
Sabiib (sabiibrestaurant.com, a Somali restaurant on Popmenu): a light, menu-led site with photo
"story" cards, bold condensed headings and dish cards with photos. Colours come from Malab's own
logo (maroon and gold).

Rules:

1. **Food and menu first.** Hero banner of Malab's food, then photo cards, then the menu with photos.
2. **Logo always visible.** Header lockup (emblem tile + MALAB + SOMALI CUISINE), footer badge, favicon.
   Redrawn as vectors from the 100px file at the studio owner's request (A14); swap for the original if it exists.
3. **Maroon for actions and headings, gold for small accents.** White page, warm-grey cards.
4. **Type.** Barlow Condensed 800 uppercase for headings and buttons; Barlow for text; small tracked
   capitals for nav and labels.
5. **Menu cards like the reference.** Square photo left, uppercase name, "price · description";
   featured dishes on a card. Dishes without a photo go text-only rather than using a filler image.
6. **One fixed "Call to book" pill** (the reference's "Reserve a table"), plus the header button.
7. **Concept honesty.** A top bar says it's a concept and links to the before/after page.
8. **Copy is sourced.** Dish names, descriptions and prices as published on their delivery listings
   (to confirm); review lines verbatim.

## 4. Tokens (v2)

| Token | Value | Use |
| --- | --- | --- |
| `paper` | `#FFFFFF` | Page |
| `card` | `#F5F0E9` | Featured dishes, alternate bands |
| `line` | `#E6DDD2` | Rules |
| `ink` | `#1E1715` | Text |
| `muted` | `#6E645C` | Secondary text |
| `maroon` | `#4B0E13` | Logo ground: headings, buttons, footer |
| `maroon-2` | `#6E1C22` | Hover |
| `gold` | `#C9A04E` | Logo gold: stars, small accents on dark |
| `gold-deep` | `#7C5C1D` | Gold for labels on white |

Type: `font-heading` Barlow Condensed 600/700/800 · `font-sans` Barlow 400/500/600, self-hosted (OFL).

## 5. Imagery

Ladder as in the starter: R · L0 Original · L1 Enhance · L2 Recompose · **ceiling for real
food, room and people** · L3 Composite · L4 Generative · L5 Synthetic · P Photographer.

- Food is authenticity-critical: capped at L2. Removing the drinks from A01 is L1 (cleanup);
  swapping the surface under food would be L3, so recapture instead.
- One shared grade across all images: +4–6% contrast, slight warmth, blacks deepened a touch.
- Every edit of food gets a side-by-side check at 100% against the original.

## 6. Hero Lab

| # | Date | What changed | Verdict |
| --- | --- | --- | --- |
| 1 | 2026-09-30 | First coded pass. Mobile: full-bleed spread photo, wordmark and call button over a marble fade. Desktop: 7/5 split, type on marble, photo right. | Mobile label lost over the pancakes; desktop left column empty above the type |
| 2 | 2026-09-30 | Fade starts higher on mobile; desktop gets an address / hours / phone bar under a brass rule, type block anchored above it. | Passes the checklist at 1440 and 390. Remaining ceiling is the asset (drinks crop, 540p video), not the layout |
| 3 | 2026-09-30 | **New direction (v2)** after studio-owner review: Sabiib-style light layout, logo, Barlow, story cards, menu with photos, /menu and /before-after pages. | Desktop hero still shows the two drinks until the AI clean-up of A01 comes back |
| 4 | 2026-10-01 | Temporary AI shopfront hero (Sabiib's homepage uses its shopfront), spaced-caps headline below the sign; welcome box; menu photos from the studio owner's AI edits; full-width photos on phones like the reference; vector logo lockup | Superseded by #5 |
| 5 | 2026-10-01 | "Honey" hero, after the Damal reference (damalrestaurant.uk): Somali welcome "Ku soo dhawoow", gold MALAB wordmark, dictionary line "malab · n. · honey, in Somali", food slideshow led by the brunch with its jar of honey; maroon panel; shopfront moved to Visit. Floating call appears after scrolling | Studio owner to review |

Exit checklist, at **both 1440 and 390** (`npm run shots`):

- [x] Visitor knows what this is and who it's for in 5 seconds
- [x] One primary action, visible without scrolling on mobile
- [x] Image carries a real subject of this business
- [x] Mobile composition was designed, not shrunk
- [x] Type and colour follow this file
- [x] LCP image or poster loads without animation gating it (preloaded; the drift is a transform)
- [x] Would sit comfortably in the client's competitor set, and above it

## 7. Never

- Stock or AI-generated food; a faked busy room; invented prices, awards or claims.
- Gold gradients, glassmorphism, drop-shadow "luxury", honeycomb wallpaper.
- Carousels, sound, pop-ups, emoji.

## 8. Rejected

- v1 direction "Honey, marble, velvet" (dark grounds, Young Serif + Outfit): no logo, weak type,
  images underused, no menu. Kept in git history (commit 721f5f5).

- Automated removal of the drinks from A01 (OpenCV Telea): smeared the booth and table edge.
  Cropped instead (L2) until a proper L1 edit is done.
- IMG_7288 as the full-screen mobile hero: 540p is too soft at phone resolution. Used as a framed
  section video instead, pending the original file.
