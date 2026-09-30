# DESIGN.md — Malab

**Status:** proposed [Proposal] — pitch direction, not owner-approved.

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

## 3. Direction — "Honey, marble, velvet"

Malab's room is its brand. The site takes its materials literally: near-black marble grounds,
bands in the booths' emerald and plum, brass hairlines, and honey from the sign as the only bright
colour, kept for actions. The restaurant's own food carries the page. Warm and generous, a little
theatrical, never generic black-and-gold "luxury".

Rules:

1. **Food first.** The hero and the first section are Malab's own food. No stock, no generated
   dishes, no dishes from anywhere else.
2. **Honey is for actions.** `honey` fills the primary buttons and the small hex mark only.
3. **Brass is a line.** `brass` for hairlines, small caps and numerals. Never a gradient or fill.
4. **One ground per band, taken from the room.** Marble for hero, reviews and visit; emerald
   velvet for the kitchen; plum velvet for the room.
5. **Type.** Young Serif for headlines, big and tight. Outfit for everything else; labels in
   Outfit capitals with wide tracking (the fascia's "SOMALI CUISINE" voice).
6. **Mobile first.** Hero image fills the phone screen; the call button sits within thumb reach.
7. **Motion is footage.** Real clips loop muted and inline, poster first. One slow drift on the
   hero still. All motion stops under `prefers-reduced-motion`.
8. **Copy is sourced.** Dish names and descriptions as published; review lines verbatim. No
   claim we can't point to.

## 4. Tokens

| Token | Value | Use |
| --- | --- | --- |
| `marble` | `#0E0C0B` | Main ground |
| `marble-2` | `#191614` | Raised ground, cards on marble |
| `cream` | `#F4ECDF` | Text on dark (plate white, warmed) |
| `cream-dim` | `#BDB2A2` | Secondary text on dark |
| `brass` | `#C9A063` | Hairlines, labels, numerals |
| `honey` | `#E8A317` | Primary action fill, hex mark |
| `emerald` | `#1D3A31` | Kitchen band (velvet booth, in shadow) |
| `plum` | `#351421` | Room band (velvet chair, in shadow) |
| `burgundy` | `#6E2B30` | Accents on plum (booth in light) |

Type: `font-display` Young Serif 400 · `font-sans` Outfit 300–600. Headline scale
`clamp(3.5rem, 12vw, 9.5rem)` for the wordmark; section heads `clamp(2.25rem, 5vw, 4rem)`.
Labels `0.72rem`, tracking `0.28em`, uppercase. Gutter `clamp(1.25rem, 4vw, 4rem)`.

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

- Automated removal of the drinks from A01 (OpenCV Telea): smeared the booth and table edge.
  Cropped instead (L2) until a proper L1 edit is done.
- IMG_7288 as the full-screen mobile hero: 540p is too soft at phone resolution. Used as a framed
  section video instead, pending the original file.
