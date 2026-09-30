import Image from "next/image";
import { LoopVideo } from "../_components/loop-video";
import { alsoOnTheMenu, dishes, place } from "../_lib/malab";

export function Kitchen() {
  return (
    <section id="kitchen" aria-labelledby="kitchen-title" className="bg-emerald">
      <div className="grid gap-14 gutter py-20 lg:grid-cols-12 lg:gap-8 lg:py-32">
        <div className="lg:col-span-5">
          <p className="label text-brass">From the kitchen</p>
          <h2
            id="kitchen-title"
            className="mt-4 font-display text-[clamp(2.6rem,6vw,4.5rem)] leading-[0.95] tracking-[-0.01em] text-balance"
          >
            Somali cooking, served generously.
          </h2>
          <p className="mt-6 max-w-[40ch] text-pretty text-lg leading-relaxed text-cream/85">
            Breakfast from {place.opens}, then Somali classics through the day, with burgers,
            milkshakes and desserts alongside.
          </p>

          <figure className="mt-12 hidden lg:block">
            <div className="relative aspect-[5/6] w-full max-w-[22rem] overflow-hidden">
              <Image
                src="/media/burger-lemonade.jpg"
                alt="A chicken burger with spiced fries and a glass with lime and mint on black marble"
                fill
                sizes="22rem"
                className="object-cover"
              />
            </div>
            <figcaption className="label mt-3 text-cream-dim">Burgers too</figcaption>
          </figure>
        </div>

        <div className="lg:col-span-6 lg:col-start-7">
          <figure className="mx-auto w-full max-w-[25rem] lg:mx-0 lg:max-w-[24rem]">
            <div className="border border-brass/40 p-2">
              <LoopVideo
                src="/media/kitchen-table.mp4"
                poster="/media/kitchen-table-poster.jpg"
                label="A table at Malab: a shared platter of rice and pasta, eggs in tomato sauce, a breakfast plate, a burger and drinks"
                className="block aspect-[9/16] w-full bg-marble object-cover"
              />
            </div>
            <figcaption className="label mt-3 text-cream-dim">Filmed at Malab</figcaption>
          </figure>

          <ul className="mt-14 border-t border-brass/30">
            {dishes.map((dish) => (
              <li key={dish.name} className="border-b border-brass/30 py-6">
                <h3 className="flex flex-wrap items-baseline gap-x-3 font-display text-[1.75rem] leading-tight">
                  {dish.name}
                  {"note" in dish && <span className="label text-cream-dim">{dish.note}</span>}
                </h3>
                <p className="mt-2 text-cream/80">{dish.description}</p>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-sm leading-relaxed text-cream-dim">
            Also on the menu: {alsoOnTheMenu.join(" · ")}.
          </p>
          <a
            href={place.justEatHref}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-2 border-b border-honey/60 pb-1 text-cream transition-colors hover:border-honey"
          >
            Order for collection on Just Eat <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
