"use client";

import { motion } from "framer-motion";
import { memo } from "react";

const dishes = [
  "Desi Painda",
  "Chicken Angara",
  "Malai Boti",
  "Tandoori Chai",
  "Seekh Kabab",
  "Kabli Pulao",
  "Hot Gulab Jamun",
  "Honey Wings",
  "Garlic Nan",
  "Mint Lassi",
  "Fish BBQ",
  "Tikka Boti",
  "Chicken Mexican",
  "Gajar Halwa",
];

/* Seamless horizontal marquee. Memoized + isolated so the rest of the page never re-renders with it. */
export const Marquee = memo(function Marquee() {
  return (
    <div className="relative isolate overflow-hidden border-y border-[var(--color-line)] bg-[var(--color-sand-100)] py-7">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-[var(--color-sand-100)] to-transparent"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-[var(--color-sand-100)] to-transparent"
      />
      <motion.div
        className="flex w-max gap-12 will-change-transform"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ ease: "linear", duration: 40, repeat: Infinity }}
      >
        {[...dishes, ...dishes].map((dish, i) => (
          <span
            key={`${dish}-${i}`}
            className="flex items-center gap-12 font-display text-[1.5rem] italic tracking-tight text-[var(--color-slate-600)] md:text-[1.85rem]"
            style={{ fontVariationSettings: "'opsz' 144, 'SOFT' 100, 'WONK' 1" }}
          >
            {dish}
            <span aria-hidden className="text-[var(--color-saffron-400)]">
              <svg width="14" height="14" viewBox="0 0 14 14" className="inline-block">
                <path
                  d="M7 0L8.2 5.8L14 7L8.2 8.2L7 14L5.8 8.2L0 7L5.8 5.8L7 0Z"
                  fill="currentColor"
                />
              </svg>
            </span>
          </span>
        ))}
      </motion.div>
    </div>
  );
});
