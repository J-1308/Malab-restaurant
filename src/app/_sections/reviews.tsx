import { StarIcon } from "../_components/icons";
import { place, reviews } from "../_lib/malab";

export function Reviews() {
  return (
    <section aria-labelledby="reviews-title" className="gutter py-16 lg:py-24">
      <div className="mx-auto max-w-6xl">
        <p className="caps text-gold-deep">What our guests say</p>
        <div className="mt-3 flex flex-wrap items-center gap-x-5 gap-y-2">
          <p id="reviews-title" className="font-heading text-[4.5rem] leading-none font-extrabold text-maroon">
            {place.rating.score}
          </p>
          <div>
            <div className="flex gap-0.5 text-gold">
              {Array.from({ length: 5 }, (_, i) => (
                <StarIcon key={i} className="size-5" />
              ))}
            </div>
            <p className="mt-1 text-muted">
              on {place.rating.source}, from {place.rating.count} reviews
            </p>
          </div>
        </div>
        <ul className="mt-10 grid gap-4 md:grid-cols-3">
          {reviews.map((quote) => (
            <li key={quote} className="rounded-xl bg-card p-6">
              <blockquote className="text-[1.15rem] leading-relaxed">“{quote}”</blockquote>
              <p className="caps mt-4 text-[0.7rem] text-muted">Google review</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
