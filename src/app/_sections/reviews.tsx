import { place, reviews } from "../_lib/malab";

export function Reviews() {
  return (
    <section aria-labelledby="reviews-title" className="bg-marble">
      <div className="gutter py-20 lg:py-28">
        <div className="flex flex-wrap items-end gap-x-6 gap-y-2">
          <p
            id="reviews-title"
            className="font-display text-[clamp(5rem,14vw,9rem)] leading-[0.8] text-brass"
          >
            {place.rating.score}
          </p>
          <p className="label pb-2 text-cream/80">
            On {place.rating.source}, from {place.rating.count} reviews
          </p>
        </div>

        <ul className="mt-14 grid gap-10 border-t border-brass/30 pt-10 md:grid-cols-3 md:gap-8">
          {reviews.map((quote) => (
            <li key={quote}>
              <blockquote className="font-display text-[1.6rem] leading-snug text-pretty text-cream">
                “{quote}”
              </blockquote>
              <p className="label mt-4 text-cream-dim">Google review</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
