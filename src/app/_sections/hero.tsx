import Image from "next/image";
import Link from "next/link";
import { StarIcon } from "../_components/icons";
import { Wordmark } from "../_components/logo";
import { heroSlides, place, somali } from "../_lib/malab";

// Welcome in Somali, the name's meaning, and the food (brunch with honey first).
export function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-maroon lg:grid lg:min-h-[82svh] lg:grid-cols-[minmax(0,46fr)_minmax(0,54fr)]">
      {/* Food slideshow: full-bleed behind the text on phones, right-hand panel on desktop */}
      <div className="absolute inset-0 -z-10 overflow-hidden lg:relative lg:inset-auto lg:z-0 lg:order-2">
        {heroSlides.map((slide, i) => (
          <figure
            key={slide.image}
            className={`absolute inset-0 m-0 ${i === 0 ? "" : "hero-slide"}`}
            style={i === 0 ? undefined : { animationDelay: `${i * 6}s` }}
          >
            <Image
              src={slide.image}
              alt={slide.caption}
              fill
              preload={i === 0}
              sizes="(min-width: 1024px) 54vw, 100vw"
              className="hero-drift object-cover"
              style={{ objectPosition: slide.position }}
            />
            <figcaption className="caps absolute right-5 bottom-5 hidden rounded-full bg-black/45 px-3.5 py-1.5 text-[0.7rem] text-white backdrop-blur-sm lg:block">
              {slide.caption}
            </figcaption>
          </figure>
        ))}
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgb(75_14_19/0.3),rgb(75_14_19/0.02)_22%,rgb(75_14_19/0.88)_46%,rgb(75_14_19)_60%)] lg:hidden" />
      </div>

      {/* Words */}
      <div className="flex min-h-[86svh] flex-col items-center justify-end gutter pt-24 pb-10 text-center text-white lg:order-1 lg:min-h-0 lg:justify-center lg:bg-[radial-gradient(ellipse_at_30%_40%,rgb(201_160_78/0.16),transparent_60%)] lg:py-20">
        <p className="font-serif text-[1.35rem] text-gold lg:text-[1.6rem]">{somali.welcome.so}</p>
        <p className="mt-1 font-serif text-[0.95rem] tracking-[0.18em] text-white/85 uppercase">
          <span className="text-gold">–</span> {somali.welcome.en} <span className="text-gold">–</span>
        </p>
        <h1 className="mt-5">
          <Wordmark className="mx-auto h-[clamp(3.6rem,15vw,6.4rem)] w-auto" />
        </h1>
        <p className="mt-4 font-serif text-[0.95rem] text-white/80">
          <span className="text-gold">{somali.honey.so}</span> · n. · {somali.honey.en}
        </p>
        <p className="mt-6 max-w-[32ch] text-[1.15rem] leading-snug text-white/90 lg:text-[1.35rem]">
          Somali food, brunch and desserts, made generously on {place.road}, {place.area}.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link
            href="/menu"
            className="rounded-md bg-gold px-7 py-3.5 font-heading text-[1.1rem] font-bold tracking-[0.08em] text-ink uppercase transition-colors hover:bg-[#d8b066]"
          >
            See the menu
          </Link>
          <a
            href={place.phoneHref}
            className="rounded-md border-2 border-white/80 px-7 py-3 font-heading text-[1.1rem] font-bold tracking-[0.08em] text-white uppercase transition-colors hover:bg-white/10"
          >
            Call to book
          </a>
        </div>
        <p className="mt-6 hidden items-center gap-2 text-sm text-white/80 sm:flex">
          <StarIcon className="size-4 text-gold" />
          {place.rating.score} on {place.rating.source} · Open daily from {place.opens}
        </p>
      </div>
    </section>
  );
}
