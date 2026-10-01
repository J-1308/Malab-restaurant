import Image from "next/image";
import { cards } from "../_lib/malab";

// Tall photo cards, scrollable on phones.
export function StoryCards() {
  return (
    <ul className="no-scrollbar -mx-[var(--gutter)] flex snap-x snap-mandatory gap-3 overflow-x-auto gutter pb-2 sm:gap-4 lg:mx-auto lg:grid lg:max-w-6xl lg:grid-cols-7 lg:overflow-visible lg:px-0">
      {cards.map((card) => (
        <li
          key={card.label}
          className="relative aspect-[3/5] w-[40vw] max-w-[12rem] shrink-0 snap-start overflow-hidden rounded-2xl bg-card shadow-[0_8px_24px_-14px_rgb(30_23_21/0.5)] sm:w-[11rem] lg:w-auto lg:max-w-none"
        >
          <Image
            src={card.image}
            alt={card.label}
            fill
            sizes="(min-width: 1024px) 14vw, 40vw"
            className="object-cover transition-transform duration-500 hover:scale-[1.04]"
            style={{ objectPosition: card.position }}
          />
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/75 via-black/25 to-transparent px-2.5 pt-10 pb-3.5 text-center">
            <p className="text-[0.95rem] leading-tight font-semibold text-white">{card.label}</p>
          </div>
        </li>
      ))}
    </ul>
  );
}
