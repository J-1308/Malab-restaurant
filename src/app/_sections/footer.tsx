import { HexMark } from "../_components/hex-mark";
import { place } from "../_lib/malab";

export function Footer() {
  return (
    <footer className="border-t border-brass/20 bg-marble">
      <div className="flex flex-col gap-6 gutter py-10 text-sm text-cream-dim md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-2.5">
          <HexMark className="size-4 text-honey" />
          <span className="label tracking-[0.34em] text-cream">Malab</span>
        </div>
        <p>
          {place.cuisine} · {place.street}, {place.city} {place.postcode} · {place.phoneDisplay}
        </p>
        <p className="label text-cream-dim/70">Concept preview</p>
      </div>
    </footer>
  );
}
