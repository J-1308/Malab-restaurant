import { StarIcon } from "../_components/icons";
import { place } from "../_lib/malab";

const facts = [
  { label: "Open daily", value: `From ${place.opens}` },
  { label: place.rating.source, value: `${place.rating.score} from ${place.rating.count} reviews`, star: true },
  { label: "For groups", value: "Family platters to share" },
];

export function Welcome() {
  return (
    <section aria-labelledby="welcome-title" className="gutter pt-14 lg:pt-20">
      <div className="mx-auto max-w-4xl border-2 border-maroon/70 bg-card px-6 py-10 text-center sm:px-12 lg:py-14">
        <p className="caps text-gold-deep">Welcome to Malab</p>
        <h2
          id="welcome-title"
          className="mt-3 font-heading text-[clamp(2.3rem,6vw,3.8rem)] leading-[0.95] font-extrabold text-maroon uppercase"
        >
          Malab is Somali for honey
        </h2>
        <p className="mx-auto mt-5 max-w-[56ch] text-[1.1rem] leading-relaxed text-ink/80">
          On {place.road} in {place.area}, we serve Somali food the generous way: slow-steamed lamb
          hanid, beef suqaar, sambus and platters made for sharing, alongside brunch from {place.opens},
          burgers, mojitos and desserts. Find a velvet booth, bring the family and stay a while.
        </p>
        <dl className="mt-9 grid gap-5 border-t border-maroon/20 pt-7 sm:grid-cols-3">
          {facts.map((f) => (
            <div key={f.label}>
              <dt className="caps text-[0.7rem] text-muted">{f.label}</dt>
              <dd className="mt-1.5 flex items-center justify-center gap-1.5 font-heading text-[1.25rem] font-bold tracking-[0.02em] text-ink uppercase">
                {f.star && <StarIcon className="size-4 text-gold" />}
                {f.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
