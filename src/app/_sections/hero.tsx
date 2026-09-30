import { getImageProps } from "next/image";
import Link from "next/link";
import { place } from "../_lib/malab";

// Art direction: a wide crop on desktop, a tall one on phones.
// A01: the wide crop still shows two soft drinks until the AI clean-up lands.
export function Hero() {
  const common = {
    alt: "Bowls of sautéed meat with lemon and red onion, and a stack of pancakes, on a black marble table at Malab",
    sizes: "100vw",
    quality: 75,
    fetchPriority: "high" as const,
    loading: "eager" as const,
  };
  const {
    props: { srcSet: desktop },
  } = getImageProps({ ...common, src: "/media/hero-spread-wide.jpg", width: 1932, height: 1087 });
  const {
    props: { srcSet: mobile, ...rest },
  } = getImageProps({ ...common, src: "/media/spread-portrait.jpg", width: 1040, height: 2196 });

  return (
    <section className="relative isolate flex min-h-[82svh] items-end overflow-hidden bg-ink lg:min-h-0 lg:items-center lg:justify-center lg:py-40">
      <picture>
        <source media="(min-width: 1024px)" srcSet={desktop} />
        <source srcSet={mobile} />
        {/* eslint-disable-next-line jsx-a11y/alt-text -- alt comes from getImageProps */}
        <img {...rest} className="absolute inset-0 -z-10 h-full w-full object-cover object-[50%_40%]" />
      </picture>
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_bottom,rgb(0_0_0/0.25),rgb(0_0_0/0.05)_35%,rgb(0_0_0/0.75)_78%)] lg:bg-[radial-gradient(ellipse_at_center,rgb(0_0_0/0.5),rgb(0_0_0/0.3)_70%)]" />

      <div className="w-full gutter pb-24 text-white lg:max-w-4xl lg:pb-0 lg:text-center">
        <p className="caps text-white/90">
          {place.street} · {place.area}
        </p>
        <h1 className="mt-3 font-heading text-[clamp(3.4rem,15vw,7.5rem)] leading-[0.88] font-extrabold tracking-[0.01em] uppercase [text-shadow:0_2px_24px_rgb(0_0_0/0.35)]">
          Somali food
          <br className="lg:hidden" /> &amp; brunch
        </h1>
        <p className="mt-4 text-[1.1rem] text-white/90 lg:text-[1.25rem]">Open every day from {place.opens}</p>
        <div className="mt-7 flex flex-wrap gap-3 lg:justify-center">
          <Link
            href="/menu"
            className="rounded-full bg-white px-7 py-3.5 font-heading text-[1.05rem] font-bold tracking-[0.06em] text-maroon uppercase transition-colors hover:bg-card"
          >
            See the menu
          </Link>
          <a
            href={place.mapsHref}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border-2 border-white/80 px-7 py-3 font-heading text-[1.05rem] font-bold tracking-[0.06em] text-white uppercase transition-colors hover:bg-white/10"
          >
            Directions
          </a>
        </div>
      </div>
    </section>
  );
}
