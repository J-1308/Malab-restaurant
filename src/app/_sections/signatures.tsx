import Link from "next/link";
import { MenuHeading, MenuItem } from "../_components/menu-items";
import { StoryCards } from "../_components/story-cards";
import { place, signatures } from "../_lib/malab";

export function Signatures() {
  return (
    <section aria-label="Food" className="gutter py-14 lg:py-20">
      <StoryCards />

      <div className="mx-auto mt-14 max-w-6xl border-2 border-maroon/80 lg:mt-20">
        <div className="flex flex-col gap-3 bg-maroon px-5 py-4 text-white sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <p className="text-[0.98rem]">
            <span className="font-heading text-[1.1rem] font-bold tracking-[0.06em] uppercase">Collection</span>{" "}
            <span className="text-white/85">Order ahead and pick up from {place.road}.</span>
          </p>
          <a
            href={place.justEatHref}
            target="_blank"
            rel="noopener noreferrer"
            className="self-start rounded-full border-2 border-white px-5 py-1.5 font-heading text-[1rem] font-bold tracking-[0.06em] uppercase transition-colors hover:bg-white hover:text-maroon sm:self-auto"
          >
            Order on Just Eat
          </a>
        </div>

        <div className="px-4 py-10 sm:px-8 lg:py-12">
          <MenuHeading>Signatures</MenuHeading>
          <p className="mt-3 text-muted">The plates our guests come back for.</p>
          <div className="mt-6 grid items-start gap-x-10 gap-y-6 lg:grid-cols-2 lg:gap-y-3">
            {signatures.map((dish) => (
              <MenuItem key={dish.name} dish={dish} />
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link
              href="/menu"
              className="inline-block rounded-full border-2 border-maroon px-8 py-3 font-heading text-[1.05rem] font-bold tracking-[0.06em] text-maroon uppercase transition-colors hover:bg-maroon hover:text-white"
            >
              See the full menu
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
