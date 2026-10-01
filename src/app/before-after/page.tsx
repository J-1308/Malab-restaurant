import type { Metadata } from "next";
import Image from "next/image";
import { NoticeBar, SiteHeader } from "../_components/site-header";

export const metadata: Metadata = {
  title: "Before & after · Malab concept",
};

// Pitch page, not part of the customer site. Each "after" must still be the dish Malab serves:
// check it side by side with the original before anything goes live (assets.csv A12, A13).
const pairs = [
  {
    title: "The shopfront",
    what: "Overcast afternoon turned into a lit evening.",
    before: "/media/pitch/shopfront-original.jpg",
    after: "/media/hero-shopfront.jpg",
  },
  {
    title: "Brunch",
    what: "Off the pavement and onto your marble, in warm light.",
    before: "/media/pitch/breakfast-original.jpg",
    after: "/media/menu/brunch.jpg",
  },
  {
    title: "Beef suqaar",
    what: "One bowl, cleaned up and re-lit as a menu photo.",
    before: "/media/pitch/suqaar-original.jpg",
    after: "/media/menu/suqaar.jpg",
  },
  {
    title: "Pancakes",
    what: "Portrait-mode blur gone, the dessert put on your table.",
    before: "/media/pitch/dessert-original.jpg",
    after: "/media/menu/pancakes.jpg",
  },
  {
    title: "Burger meal",
    what: "A still from your video, turned into a menu photo.",
    before: "/media/pitch/burger-original.jpg",
    after: "/media/menu/burger-meal.jpg",
  },
];

function Frame({ src, alt, label, after }: { src: string; alt: string; label: string; after?: boolean }) {
  return (
    <div className="relative aspect-[4/5] overflow-hidden rounded-xl bg-card">
      <Image src={src} alt={alt} fill sizes="(min-width: 1024px) 18rem, 45vw" className="object-cover" />
      <span
        className={`caps absolute top-2.5 left-2.5 rounded-full px-2.5 py-1 text-[0.62rem] ${
          after ? "bg-gold text-ink" : "bg-black/65 text-white"
        }`}
      >
        {label}
      </span>
    </div>
  );
}

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
        <p className="mt-5 max-w-[54ch] text-[1.15rem] leading-relaxed text-ink/80">
          Your own photos and videos, cleaned up, re-lit and reframed for the website, Google and
          Instagram. The food stays exactly as you serve it.
        </p>

        <h2 className="mt-14 border-b-2 border-maroon/80 pb-2 font-heading text-[2.2rem] font-extrabold text-maroon uppercase">
          Photos
        </h2>
        <div className="mt-8 grid gap-x-10 gap-y-12 lg:grid-cols-2">
          {pairs.map((p) => (
            <figure key={p.title}>
              <div className="grid grid-cols-2 gap-3">
                <Frame src={p.before} alt={`${p.title}, original`} label="Before" />
                <Frame src={p.after} alt={`${p.title}, edited`} label="After" after />
              </div>
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
