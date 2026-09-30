import { place } from "../_lib/malab";

// Primary: call (booking route TBD, Q7). Secondary: directions.
export function Actions({ className = "" }: { className?: string }) {
  return (
    <div className={`grid grid-cols-2 gap-3 sm:flex sm:flex-wrap ${className}`}>
      <a
        href={place.phoneHref}
        className="inline-flex items-center justify-center gap-3 rounded-[3px] bg-honey px-6 py-4 text-[0.95rem] font-semibold tracking-wide text-marble transition-colors hover:bg-[#f2b534]"
      >
        Call to book
        <span className="hidden font-normal opacity-75 lg:inline">{place.phoneDisplay}</span>
      </a>
      <a
        href={place.mapsHref}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center rounded-[3px] border border-cream/35 px-6 py-4 text-[0.95rem] font-medium tracking-wide text-cream transition-colors hover:border-cream hover:bg-cream/5"
      >
        Directions
      </a>
    </div>
  );
}
