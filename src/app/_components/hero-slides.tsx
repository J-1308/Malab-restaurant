"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { heroSlides } from "../_lib/malab";

// Slide 1 is server-rendered and is the LCP image. Slides 2-4 mount a few seconds later so they
// don't compete with it for bandwidth; they then fade in over it in turn (see .hero-slide).
export function HeroSlides() {
  const [extra, setExtra] = useState(false);
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const t = window.setTimeout(() => setExtra(true), 2500);
    return () => window.clearTimeout(t);
  }, []);

  const slides = extra ? heroSlides : heroSlides.slice(0, 1);
  return (
    <>
      {slides.map((slide, i) => (
        <figure
          key={slide.image}
          className={`absolute inset-0 m-0 ${i === 0 ? "" : "hero-slide"}`}
          style={i === 0 ? undefined : { animationDelay: `${(i - 1) * 6 + 3}s` }}
        >
          <Image
            src={slide.image}
            alt={slide.caption}
            fill
            loading={i === 0 ? "eager" : "lazy"}
            fetchPriority={i === 0 ? "high" : "low"}
            sizes="(min-width: 1024px) 54vw, 100vw"
            className="hero-drift object-cover"
            style={{ objectPosition: slide.position }}
          />
          <figcaption className="caps absolute right-5 bottom-5 hidden rounded-full bg-black/45 px-3.5 py-1.5 text-[0.7rem] text-white backdrop-blur-sm lg:block">
            {slide.caption}
          </figcaption>
        </figure>
      ))}
    </>
  );
}
