import Image from "next/image";
import { Actions } from "../_components/actions";
import { place } from "../_lib/malab";

export function Visit() {
  return (
    <section id="visit" aria-labelledby="visit-title" className="bg-marble-2">
      <div className="grid items-center gap-12 gutter py-20 lg:grid-cols-12 lg:gap-8 lg:py-28">
        <figure className="lg:col-span-5">
          <div className="relative aspect-[1080/1400] w-full max-w-[30rem] overflow-hidden">
            <Image
              src="/media/shopfront.jpg"
              alt="Malab's shopfront on Uxbridge Road: a black fascia reading Malab Somali Cuisine above glass doors, next to door number 157"
              fill
              sizes="(min-width: 1024px) 30rem, 100vw"
              className="object-cover"
            />
          </div>
        </figure>

        <div className="lg:col-span-6 lg:col-start-7">
          <p className="label text-brass">Visit</p>
          <h2
            id="visit-title"
            className="mt-4 font-display text-[clamp(2.6rem,6vw,4.5rem)] leading-[0.95] tracking-[-0.01em]"
          >
            {place.street}
          </h2>
          <p className="mt-3 text-lg text-cream/85">
            {place.area}, {place.city} {place.postcode}
          </p>

          <dl className="mt-10 grid gap-6 border-t border-brass/30 pt-8 sm:grid-cols-2">
            <div>
              <dt className="label text-brass">Open</dt>
              <dd className="mt-2 text-lg">{place.hours}</dd>
            </div>
            <div>
              <dt className="label text-brass">Call</dt>
              <dd className="mt-2 text-lg">
                <a href={place.phoneHref} className="hover:text-honey">
                  {place.phoneDisplay}
                </a>
              </dd>
            </div>
          </dl>

          <Actions className="mt-10" />
          <p className="mt-6 text-sm text-cream-dim">
            Collection orders:{" "}
            <a
              href={place.justEatHref}
              target="_blank"
              rel="noopener noreferrer"
              className="underline decoration-cream/30 underline-offset-4 hover:decoration-cream"
            >
              Just Eat
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
