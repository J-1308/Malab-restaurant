import Image from "next/image";
import { Actions } from "../_components/actions";
import { HexMark } from "../_components/hex-mark";
import { place } from "../_lib/malab";

const nav = [
  { href: "#kitchen", label: "Kitchen" },
  { href: "#room", label: "Room" },
  { href: "#visit", label: "Visit" },
];

export function Hero() {
  return (
    <header className="relative isolate min-h-svh overflow-hidden lg:grid lg:grid-cols-12">
      {/* Malab's own food. Full-bleed on phones; the right-hand panel on desktop. */}
      <div className="absolute inset-0 -z-10 overflow-hidden lg:relative lg:inset-auto lg:z-0 lg:order-2 lg:col-span-5">
        <Image
          src="/media/spread-portrait.jpg"
          alt="Bowls of sautéed meat with lemon and red onion, and a stack of pancakes, on a black marble table at Malab"
          fill
          preload
          sizes="(min-width: 1024px) 42vw, 100vw"
          className="drift object-cover object-[50%_40%]"
        />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgb(14_12_11/0.72)_0%,rgb(14_12_11/0)_18%,rgb(14_12_11/0)_36%,rgb(14_12_11/0.82)_54%,rgb(14_12_11/0.97)_68%,rgb(14_12_11)_80%)] lg:hidden" />
        <div className="absolute inset-y-0 left-0 hidden w-px bg-brass/40 lg:block" />
        <p className="label absolute right-6 bottom-6 hidden text-cream/85 [text-shadow:0_1px_12px_rgb(0_0_0/0.6)] lg:block">
          Served at {place.street}
        </p>
      </div>

      <div className="flex min-h-svh flex-col justify-between gutter pt-5 pb-7 lg:order-1 lg:col-span-7 lg:bg-[radial-gradient(ellipse_at_0%_100%,rgb(110_43_48/0.28),transparent_62%)] lg:pt-8 lg:pb-8">
        <nav aria-label="Main" className="flex items-center justify-between">
          <a href="#" className="flex items-center gap-2.5">
            <HexMark className="size-5 text-honey" />
            <span className="label text-[0.8rem] tracking-[0.34em] text-cream">Malab</span>
          </a>
          <ul className="hidden items-center gap-9 lg:flex">
            {nav.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="label text-cream/80 transition-colors hover:text-cream">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <p className="label text-cream/85 lg:hidden">Open from {place.opens}</p>
        </nav>

        <div className="pt-[42svh] lg:flex lg:flex-1 lg:flex-col lg:justify-end lg:pt-0 lg:pb-14">
          <div>
          <p className="label text-brass">
            {place.cuisine} · {place.area}
          </p>
          <h1 className="mt-3 font-display text-[clamp(5.25rem,26vw,12rem)] leading-[0.8] tracking-[-0.025em] text-cream">
            Malab
          </h1>
          <p className="mt-6 max-w-[30ch] text-pretty text-[1.15rem] leading-snug text-cream/90 lg:max-w-[30ch] lg:text-[1.6rem]">
            Suqaar, slow-steamed lamb and brunch from {place.opens}, in a room of velvet and marble.
          </p>
          <Actions className="mt-7 lg:mt-10" />
          <p className="mt-5 text-sm text-cream-dim">
            <span className="text-brass">★ {place.rating.score}</span> on {place.rating.source} ·{" "}
            {place.rating.count} reviews
          </p>
          </div>
        </div>

        <dl className="hidden grid-cols-3 gap-8 border-t border-brass/30 pt-5 text-sm lg:grid">
          <div>
            <dt className="label text-brass">Find us</dt>
            <dd className="mt-2 text-cream/85">
              {place.street}, {place.postcode}
            </dd>
          </div>
          <div>
            <dt className="label text-brass">Open</dt>
            <dd className="mt-2 text-cream/85">{place.hours}</dd>
          </div>
          <div>
            <dt className="label text-brass">Call</dt>
            <dd className="mt-2 text-cream/85">
              <a href={place.phoneHref} className="hover:text-cream">
                {place.phoneDisplay}
              </a>
            </dd>
          </div>
        </dl>
      </div>
    </header>
  );
}
