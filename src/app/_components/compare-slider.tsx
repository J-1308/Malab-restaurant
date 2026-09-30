"use client";

import Image from "next/image";
import { useState } from "react";

type Props = {
  before: string;
  after: string;
  alt: string;
  width: number;
  height: number;
};

// Drag (or use arrow keys on) the handle to compare the original with the edit.
export function CompareSlider({ before, after, alt, width, height }: Props) {
  const [pos, setPos] = useState(50);
  return (
    <div className="relative select-none overflow-hidden rounded-2xl bg-card" style={{ aspectRatio: `${width}/${height}` }}>
      <Image src={after} alt={`${alt}, edited`} fill sizes="(min-width: 1024px) 34rem, 100vw" className="object-cover" />
      <div className="absolute inset-0" style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}>
        <Image src={before} alt={`${alt}, original`} fill sizes="(min-width: 1024px) 34rem, 100vw" className="object-cover" />
      </div>
      <div className="pointer-events-none absolute inset-y-0 w-0.5 bg-white shadow-[0_0_12px_rgb(0_0_0/0.4)]" style={{ left: `${pos}%` }}>
        <div className="absolute top-1/2 left-1/2 flex size-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white text-maroon shadow-lg">
          ⇆
        </div>
      </div>
      <span className="caps absolute top-3 left-3 rounded-full bg-black/60 px-3 py-1 text-[0.68rem] text-white">Before</span>
      <span className="caps absolute top-3 right-3 rounded-full bg-gold px-3 py-1 text-[0.68rem] text-ink">After</span>
      <input
        type="range"
        min={0}
        max={100}
        value={pos}
        onChange={(e) => setPos(Number(e.target.value))}
        aria-label={`Compare original and edited: ${alt}`}
        className="absolute inset-0 h-full w-full cursor-ew-resize opacity-0"
      />
    </div>
  );
}
