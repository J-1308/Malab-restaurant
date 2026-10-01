import Image from "next/image";
import Link from "next/link";
import { place } from "../_lib/malab";

// Temporary hero (assets.csv A13): AI-relit evening shot of the real shopfront.
export function Hero() {
  return (
    <section className="relative isolate flex min-h-[70svh] items-end justify-center overflow-hidden bg-ink lg:min-h-[78svh]">
      <Image
        src="/media/hero-shopfront.jpg"
        alt="Malab's shopfront on Uxbridge Road at dusk, the gold MALAB Somali Cuisine sign lit above a glowing dining room"
        fill
        preload
        sizes="100vw"
        className="-z-10 object-cover object-[36%_30%] lg:object-[50%_22%]"
      />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_bottom,rgb(0_0_0/0.15),rgb(0_0_0/0.1)_35%,rgb(0_0_0/0.72)_80%)]" />

      <div className="max-w-4xl gutter pt-20 pb-12 text-center text-white lg:pb-16">
        <h1 className="font-heading text-[clamp(2rem,7vw,3.9rem)] leading-[1.08] font-bold tracking-[0.14em] uppercase [text-shadow:0_2px_18px_rgb(0_0_0/0.45)]">
          Somali food &amp; brunch in West Ealing
        </h1>
        <p className="mt-4 text-[1.1rem] text-white/90 lg:text-[1.25rem]">
          Open every day from {place.opens} on {place.road}
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <a
            href={place.phoneHref}
            className="rounded-md bg-white px-7 py-3.5 text-[1.05rem] font-medium text-ink transition-colors hover:bg-card"
          >
            Call to book a table
          </a>
          <Link
            href="/menu"
            className="rounded-md border-2 border-white/85 px-7 py-3 text-[1.05rem] font-medium text-white transition-colors hover:bg-white/10"
          >
            See the menu
          </Link>
        </div>
      </div>
    </section>
  );
}
