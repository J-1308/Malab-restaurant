import type { Metadata } from "next";
import Image from "next/image";
import { CompareSlider } from "../_components/compare-slider";
import { NoticeBar, SiteHeader } from "../_components/site-header";

export const metadata: Metadata = {
  title: "Before & after · Malab concept",
};

// Pitch page, not part of the customer site. Photo edits are L1 (clean-up) or a surface swap
// with the food left untouched; see assets.csv. Add `after` as each AI edit comes back.
const photos: { title: string; what: string; before: string; after?: string; w: number; h: number }[] = [
  {
    title: "The Somali spread",
    what: "Drinks removed from the table. Food untouched.",
    before: "/media/pitch/spread-original.jpg",
    w: 900,
    h: 1200,
  },
  {
    title: "Breakfast",
    what: "Moved off the pavement onto your marble. Food untouched.",
    before: "/media/pitch/breakfast-original.jpg",
    w: 900,
    h: 1200,
  },
  {
    title: "Dessert",
    what: "Portrait-mode blur fixed, warmer light.",
    before: "/media/pitch/dessert-original.jpg",
    w: 900,
    h: 1200,
  },
  {
    title: "The room",
    what: "TV and blur removed.",
    before: "/media/pitch/interior-original.jpg",
    w: 675,
    h: 1200,
  },
];

export default function BeforeAfterPage() {
  return (
    <>
      <NoticeBar />
      <SiteHeader />
      <main className="mx-auto max-w-6xl gutter py-14 lg:px-0 lg:py-20">
        <p className="caps text-gold-deep">For Malab</p>
        <h1 className="mt-3 font-heading text-[clamp(2.8rem,7vw,4.8rem)] leading-[0.9] font-extrabold text-maroon uppercase">
          Before &amp; after
        </h1>
        <p className="mt-5 max-w-[52ch] text-[1.15rem] leading-relaxed text-ink/80">
          Your own photos and videos, cleaned up, re-lit and reframed. Nothing invented: the food
          stays exactly as you serve it.
        </p>

        <h2 className="mt-14 border-b-2 border-maroon/80 pb-2 font-heading text-[2.2rem] font-extrabold text-maroon uppercase">
          Photos
        </h2>
        <div className="mt-8 grid gap-10 md:grid-cols-2">
          {photos.map((p) => (
            <figure key={p.title}>
              {p.after ? (
                <CompareSlider before={p.before} after={p.after} alt={p.title} width={p.w} height={p.h} />
              ) : (
                <div className="relative overflow-hidden rounded-2xl bg-card" style={{ aspectRatio: `${p.w}/${p.h}` }}>
                  <Image src={p.before} alt={`${p.title}, original`} fill sizes="(min-width: 768px) 34rem, 100vw" className="object-cover" />
                  <span className="caps absolute top-3 left-3 rounded-full bg-black/60 px-3 py-1 text-[0.68rem] text-white">
                    Original · edit in progress
                  </span>
                </div>
              )}
              <figcaption className="mt-3">
                <span className="font-heading text-[1.4rem] font-bold uppercase">{p.title}</span>
                <span className="block text-muted">{p.what}</span>
              </figcaption>
            </figure>
          ))}
        </div>

        <h2 className="mt-20 border-b-2 border-maroon/80 pb-2 font-heading text-[2.2rem] font-extrabold text-maroon uppercase">
          Video
        </h2>
        <div className="mt-8 grid gap-10 md:grid-cols-2">
          <figure>
            <video
              className="aspect-[9/16] w-full rounded-2xl bg-ink object-cover"
              src="/media/pitch/video-before-after.mp4"
              poster="/media/pitch/video-before-after-poster.jpg"
              controls
              playsInline
              muted
              preload="none"
            />
            <figcaption className="mt-3">
              <span className="font-heading text-[1.4rem] font-bold uppercase">Your clips, before and after</span>
              <span className="block text-muted">Steadied, reframed, colour corrected.</span>
            </figcaption>
          </figure>
          <figure>
            <video
              className="aspect-[9/16] w-full rounded-2xl bg-ink object-cover"
              src="/media/pitch/reel-draft.mp4"
              poster="/media/pitch/reel-draft-poster.jpg"
              controls
              playsInline
              muted
              preload="none"
            />
            <figcaption className="mt-3">
              <span className="font-heading text-[1.4rem] font-bold uppercase">A 15-second reel</span>
              <span className="block text-muted">Cut from the same clips. Add a trending sound when posting.</span>
            </figcaption>
          </figure>
        </div>
      </main>
    </>
  );
}
