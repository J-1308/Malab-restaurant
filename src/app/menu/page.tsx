import type { Metadata } from "next";
import Image from "next/image";
import { MenuCategoryBlock } from "../_components/menu-items";
import { FloatingCall, NoticeBar, SiteHeader } from "../_components/site-header";
import { StoryCards } from "../_components/story-cards";
import { menu, place } from "../_lib/malab";
import { Footer } from "../_sections/footer";

export const metadata: Metadata = {
  title: "Menu · Malab, West Ealing",
};

export default function MenuPage() {
  return (
    <>
      <NoticeBar />
      <SiteHeader current="menu" />
      <main>
        <section className="relative isolate flex h-[34svh] min-h-64 items-center justify-center overflow-hidden lg:h-[46svh]">
          <Image
            src="/media/menu-banner.jpg"
            alt=""
            fill
            preload
            sizes="100vw"
            className="-z-10 object-cover object-[50%_40%]"
          />
          <div className="absolute inset-0 -z-10 bg-black/40" />
          <h1 className="font-heading text-[clamp(3.2rem,10vw,6rem)] font-extrabold tracking-[0.02em] text-white uppercase [text-shadow:0_2px_24px_rgb(0_0_0/0.35)]">
            Our menu
          </h1>
        </section>

        <div className="gutter py-12 lg:py-16">
          <StoryCards />
        </div>

        <div className="mx-auto max-w-6xl gutter pb-24 lg:px-0">
          <nav aria-label="Menu sections" className="no-scrollbar -mx-[var(--gutter)] flex gap-2 overflow-x-auto gutter lg:mx-0 lg:flex-wrap lg:px-0">
            {menu.map((c) => (
              <a
                key={c.title}
                href={`#${c.title.toLowerCase()}`}
                className="shrink-0 rounded-full border border-line px-4 py-2 font-heading text-[1rem] font-semibold tracking-[0.04em] uppercase transition-colors hover:border-maroon hover:text-maroon"
              >
                {c.title}
              </a>
            ))}
          </nav>
          {menu.map((c) => (
            <MenuCategoryBlock key={c.title} category={c} />
          ))}
          <p className="mt-12 text-sm text-muted">
            Allergies? Please ask before you order. Call {place.phoneDisplay}.
          </p>
        </div>
      </main>
      <Footer />
      <FloatingCall />
    </>
  );
}
