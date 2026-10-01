"use client";

import { useEffect, useState } from "react";
import { place } from "../_lib/malab";
import { PhoneIcon } from "./icons";

// Floating action, after the reference site's "Reserve a table" pill.
// Hidden over the hero (which has its own buttons); appears once the visitor scrolls.
export function FloatingCall() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > window.innerHeight * 0.6);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <a
      href={place.phoneHref}
      aria-hidden={!show}
      tabIndex={show ? 0 : -1}
      className={`fixed right-4 bottom-4 z-50 inline-flex items-center gap-2.5 rounded-full bg-maroon px-5 py-3.5 font-heading text-[1.02rem] font-bold tracking-[0.06em] text-white uppercase shadow-[0_10px_30px_-8px_rgb(75_14_19/0.6)] transition-all duration-300 hover:bg-maroon-2 sm:right-6 sm:bottom-6 ${
        show ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-4 opacity-0"
      }`}
    >
      <PhoneIcon className="size-[1.1rem]" />
      Call to book
    </a>
  );
}
