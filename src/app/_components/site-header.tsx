import Image from "next/image";
import Link from "next/link";
import { place } from "../_lib/malab";
import { PhoneIcon } from "./icons";

const nav = [
  { href: "/menu", label: "Menu" },
  { href: "/#inside", label: "About" },
  { href: "/#visit", label: "Visit" },
];

export function NoticeBar() {
  return (
    <div className="bg-maroon text-center text-[0.8rem] leading-snug text-white/85 gutter py-2">
      Concept preview for Malab · photos, words and design will change.{" "}
      <Link href="/before-after" className="font-medium text-gold underline-offset-4 hover:underline">
        See what we did with your photos →
      </Link>
    </div>
  );
}

export function SiteHeader({ current }: { current?: "menu" }) {
  return (
    <header className="sticky top-0 z-40 border-b border-line bg-white/95 backdrop-blur">
      <div className="mx-auto flex h-[4.5rem] max-w-[90rem] items-center justify-between gap-6 gutter">
        <Link href="/" aria-label="Malab home" className="shrink-0">
          <Image
            src="/media/logo.png"
            alt="Malab"
            width={52}
            height={52}
            className="size-[3.1rem] rounded-[10px]"
            preload
          />
        </Link>
        <nav aria-label="Main" className="flex items-center gap-5 sm:gap-9">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`caps hidden transition-colors hover:text-gold-deep sm:inline ${
                current === "menu" && item.href === "/menu" ? "text-gold-deep" : "text-ink/85"
              }`}
            >
              {item.label}
            </Link>
          ))}
          <Link href="/menu" className="caps text-ink/85 sm:hidden">
            Menu
          </Link>
          <a
            href={place.phoneHref}
            className="inline-flex items-center gap-2 rounded-full bg-maroon px-4 py-2.5 font-heading text-[0.95rem] font-bold tracking-[0.06em] text-white uppercase transition-colors hover:bg-maroon-2 sm:px-5"
          >
            <PhoneIcon className="size-4" />
            <span className="hidden sm:inline">Call to book</span>
            <span className="sm:hidden">Call</span>
          </a>
        </nav>
      </div>
    </header>
  );
}

// Floating action, after the reference site's "Reserve a table" pill.
export function FloatingCall() {
  return (
    <a
      href={place.phoneHref}
      className="fixed right-4 bottom-4 z-50 inline-flex items-center gap-2.5 rounded-full bg-maroon px-5 py-3.5 font-heading text-[1.02rem] font-bold tracking-[0.06em] text-white uppercase shadow-[0_10px_30px_-8px_rgb(75_14_19/0.6)] transition-colors hover:bg-maroon-2 sm:right-6 sm:bottom-6"
    >
      <PhoneIcon className="size-[1.1rem]" />
      Call to book
    </a>
  );
}
