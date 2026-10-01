import Link from "next/link";
import { LogoBadge } from "../_components/logo";
import { place, somali } from "../_lib/malab";

export function Footer() {
  return (
    <footer className="bg-maroon text-white/85">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 gutter py-12 pb-28 sm:flex-row sm:items-start sm:justify-between lg:px-0">
        <div>
          <LogoBadge className="size-24 shrink-0" />
          <p className="mt-4 font-serif text-[1.1rem] text-gold">{somali.thanks.so}</p>
          <p className="text-[0.85rem] text-white/70">{somali.thanks.en}</p>
        </div>
        <div className="text-[0.98rem] leading-relaxed">
          <p className="caps text-[0.72rem] text-gold">Find us</p>
          <p className="mt-2">
            {place.street}
            <br />
            {place.area}, {place.city} {place.postcode}
          </p>
        </div>
        <div className="text-[0.98rem] leading-relaxed">
          <p className="caps text-[0.72rem] text-gold">Open</p>
          <p className="mt-2">{place.hours}</p>
          <p className="mt-1">
            <a href={place.phoneHref} className="hover:text-white">
              {place.phoneDisplay}
            </a>
          </p>
        </div>
        <div className="text-[0.98rem] leading-relaxed">
          <p className="caps text-[0.72rem] text-gold">Explore</p>
          <p className="mt-2 flex flex-col gap-1">
            <Link href="/menu" className="hover:text-white">
              Menu
            </Link>
            <a href={place.justEatHref} target="_blank" rel="noopener noreferrer" className="hover:text-white">
              Order collection
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
