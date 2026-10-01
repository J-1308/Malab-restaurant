import Image from "next/image";
import type { Dish, MenuCategory } from "../_lib/malab";

// Phones: full-width photo on top (like the reference). Larger screens: square photo on the left.
export function MenuItem({ dish }: { dish: Dish }) {
  const featured = Boolean(dish.badge);
  return (
    <article
      className={`overflow-hidden sm:flex sm:gap-6 ${
        featured ? "rounded-xl bg-card sm:p-5" : "border-b border-line pb-6 sm:py-5"
      }`}
    >
      {dish.image && (
        <div
          className={`relative aspect-[16/10] w-full shrink-0 overflow-hidden sm:aspect-square sm:size-44 sm:rounded-lg ${
            featured ? "" : "rounded-lg"
          }`}
        >
          <Image
            src={dish.image}
            alt={dish.name}
            fill
            sizes="(min-width: 640px) 11rem, 100vw"
            className="object-cover"
            style={dish.imagePosition ? { objectPosition: dish.imagePosition } : undefined}
          />
        </div>
      )}
      <div className={`min-w-0 ${featured ? "p-5 sm:p-0" : dish.image ? "pt-5 sm:pt-0" : ""}`}>
        {dish.badge && <p className="caps text-[0.72rem] font-semibold text-gold-deep">{dish.badge}</p>}
        <h3 className="mt-1 font-heading text-[1.55rem] leading-tight font-bold tracking-[0.02em] uppercase sm:text-[1.7rem]">
          {dish.name}
          {dish.note && (
            <span className="ml-2 align-middle font-sans text-[0.8rem] font-medium tracking-normal text-muted normal-case">
              ({dish.note})
            </span>
          )}
        </h3>
        {(dish.price || dish.description) && (
          <p className="mt-2 text-[1rem] leading-relaxed text-ink/80">
            {dish.price && <span className="font-semibold text-ink">{dish.price}</span>}
            {dish.price && dish.description && " · "}
            {dish.description}
          </p>
        )}
      </div>
    </article>
  );
}

export function MenuHeading({ children, id }: { children: React.ReactNode; id?: string }) {
  return (
    <h2
      id={id}
      className="border-b-2 border-maroon/80 pb-2 font-heading text-[clamp(2.2rem,5vw,3.4rem)] leading-none font-extrabold text-maroon"
    >
      {children}
    </h2>
  );
}

export function MenuCategoryBlock({ category }: { category: MenuCategory }) {
  const headingId = `${category.id}-title`;
  return (
    <section id={category.id} aria-labelledby={headingId} className="mt-14 scroll-mt-28">
      <MenuHeading id={headingId}>{category.title}</MenuHeading>
      {category.intro && <p className="mt-3 text-muted">{category.intro}</p>}
      {category.compact ? (
        <ul className="mt-4 grid gap-x-12 sm:grid-cols-2">
          {category.dishes.map((dish) => (
            <li key={dish.name} className="flex items-baseline gap-3 border-b border-line py-3">
              <span className="font-heading text-[1.2rem] font-bold tracking-[0.02em] uppercase">{dish.name}</span>
              {dish.description && <span className="text-[0.92rem] text-muted">{dish.description}</span>}
              {dish.price && <span className="ml-auto font-semibold">{dish.price}</span>}
            </li>
          ))}
        </ul>
      ) : (
        <div className="mt-6 grid items-start gap-x-10 gap-y-6 lg:grid-cols-2 lg:gap-y-3">
          {category.dishes.map((dish) => (
            <MenuItem key={dish.name} dish={dish} />
          ))}
        </div>
      )}
    </section>
  );
}
