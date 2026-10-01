import Image from "next/image";
import { place } from "../_lib/malab";

export function Visit() {
  return (
    <section id="visit" aria-labelledby="visit-title" className="bg-card">
      <div className="mx-auto grid max-w-6xl items-center gap-10 gutter py-16 lg:grid-cols-2 lg:gap-16 lg:px-0 lg:py-24">
        <div className="relative aspect-[4/5] w-full max-w-[28rem] overflow-hidden rounded-2xl">
          <Image
            src="/media/shopfront.jpg"
            alt="Malab's shopfront on Uxbridge Road: a black fascia reading Malab Somali Cuisine above glass doors, next to door number 157"
            fill
            sizes="(min-width: 1024px) 28rem, 100vw"
            className="object-cover"
          />
        </div>
        <div>
          <p className="caps text-gold-deep">Visit</p>
          <h2
            id="visit-title"
            className="mt-3 font-heading text-[clamp(2.4rem,5vw,3.6rem)] leading-[0.95] font-extrabold text-maroon uppercase"
          >
            {place.street}
          </h2>
          <p className="mt-2 text-[1.1rem] text-ink/80">
            {place.area}, {place.city} {place.postcode}
          </p>
          <p className="mt-5 max-w-[46ch] text-[1.05rem] leading-relaxed text-ink/80">
            Breakfast, lunch and dinner, seven days a week. Coming as a big group? Call ahead and
            we&rsquo;ll have a table ready.
          </p>
          <dl className="mt-8 grid gap-6 border-t border-line pt-6 sm:grid-cols-2">
            <div>
              <dt className="caps text-[0.72rem] text-muted">Open</dt>
              <dd className="mt-1 text-[1.1rem] font-medium">{place.hours}</dd>
            </div>
            <div>
              <dt className="caps text-[0.72rem] text-muted">Call</dt>
              <dd className="mt-1 text-[1.1rem] font-medium">
                <a href={place.phoneHref} className="hover:text-maroon">
                  {place.phoneDisplay}
                </a>
              </dd>
            </div>
          </dl>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={place.mapsHref}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-maroon px-7 py-3.5 font-heading text-[1.05rem] font-bold tracking-[0.06em] text-white uppercase transition-colors hover:bg-maroon-2"
            >
              Get directions
            </a>
            <a
              href={place.justEatHref}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border-2 border-maroon px-7 py-3 font-heading text-[1.05rem] font-bold tracking-[0.06em] text-maroon uppercase transition-colors hover:bg-maroon hover:text-white"
            >
              Order collection
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
