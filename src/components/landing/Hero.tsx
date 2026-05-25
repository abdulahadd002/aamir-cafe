"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { BrandImage } from "@/components/brand/BrandImage";
import { Button } from "@/components/ui/Button";
import {
  KhatimStar,
  GeometricPattern,
  CornerFlourish,
} from "@/components/brand/Ornaments";
import { phone, categoryImage } from "@/data/menu";

const spring = { type: "spring" as const, stiffness: 100, damping: 20 };

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden">
      {/* warm radial behind everything */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(120% 80% at 80% 8%, rgba(217,118,18,0.16), transparent 55%), radial-gradient(70% 60% at 8% 95%, rgba(46,93,89,0.10), transparent 60%)",
        }}
      />

      <div className="mx-auto grid w-full max-w-[1280px] grid-cols-1 items-center gap-10 px-5 pb-20 pt-10 md:pb-24 md:pt-16 lg:grid-cols-[1.05fr_1fr] lg:gap-16 lg:px-10 lg:pt-20">
        {/* Left — minimal copy, big numbers, icon CTAs */}
        <div className="relative flex flex-col">
          {/* Open status — tiny text, instantly readable */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...spring, delay: 0.05 }}
            className="mb-6 inline-flex items-center gap-2 self-start rounded-full bg-[var(--color-teal-500)]/10 px-3 py-1.5"
          >
            <span className="relative grid h-2 w-2 place-items-center">
              <span className="absolute h-full w-full animate-ping rounded-full bg-[var(--color-teal-500)] opacity-60" />
              <span className="relative h-2 w-2 rounded-full bg-[var(--color-teal-500)]" />
            </span>
            <span className="text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-[var(--color-teal-700)]">
              Open Now
            </span>
            <span className="urdu text-[0.85rem] text-[var(--color-teal-700)]">·  ابھی کھلا ہے</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...spring, delay: 0.12 }}
            className="font-display text-[3.4rem] font-medium leading-[0.95] tracking-tight text-[var(--color-slate-800)] md:text-[4.8rem] lg:text-[5.4rem]"
            style={{ fontVariationSettings: "'opsz' 144, 'SOFT' 50, 'WONK' 0" }}
          >
            Aamir Cafe
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...spring, delay: 0.18 }}
            className="urdu mt-3 text-[2.2rem] leading-none text-[var(--color-saffron-500)] md:text-[2.8rem]"
          >
            عامر کیفے
          </motion.p>

          {/* Photo tiles replace paragraph copy — non-readers parse the dish, not the word */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...spring, delay: 0.26 }}
            className="mt-8 grid max-w-[36rem] grid-cols-3 gap-3"
          >
            <PhotoTile image={categoryImage.bbq} label="BBQ" urdu="باربی کیو" />
            <PhotoTile image={categoryImage.traditional} label="Painda" urdu="پائندہ" emphasis />
            <PhotoTile image={categoryImage.bar} label="Chai" urdu="چائے" />
          </motion.div>

          {/* Big icon CTAs — minimal text, large tap targets */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...spring, delay: 0.34 }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <Button href="/menu" variant="primary" className="px-6 py-3.5 text-[1rem]">
              <BookIcon />
              Menu
              <span className="urdu text-[0.95rem] opacity-80">مینو</span>
            </Button>
            <Button
              href={`tel:${phone.replace(/[^0-9+]/g, "")}`}
              variant="outline"
              className="px-6 py-3.5 text-[1rem]"
            >
              <PhoneIcon />
              <span className="font-mono tabular-nums">{phone}</span>
            </Button>
          </motion.div>
        </div>

        {/* Right — the actual logo, mehrab-arched frame with geometric backdrop */}
        <motion.aside
          initial={{ opacity: 0, x: 24, scale: 0.96 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ ...spring, delay: 0.2 }}
          className="relative mx-auto w-full max-w-[26rem]"
        >
          {/* Mehrab arch frame */}
          <div className="relative aspect-[3/4]">
            {/* outer ornamental band */}
            <svg
              viewBox="0 0 200 280"
              preserveAspectRatio="none"
              className="absolute inset-0 h-full w-full"
              aria-hidden
            >
              <path
                d="M0 280V100 C0 80, 18 50, 50 30 C70 18, 80 8, 100 0 C120 8, 130 18, 150 30 C182 50, 200 80, 200 100 V280 Z"
                fill="var(--color-slate-800)"
              />
              <path
                d="M6 274V100 C6 82, 22 54, 54 34 C73 22, 82 12, 100 5 C118 12, 127 22, 146 34 C178 54, 194 82, 194 100 V274 Z"
                fill="none"
                stroke="var(--color-saffron-300)"
                strokeWidth="0.8"
                opacity="0.5"
              />
              <path
                d="M12 268V102 C12 86, 26 60, 58 40 C75 28, 85 16, 100 12 C115 16, 125 28, 142 40 C174 60, 188 86, 188 102 V268 Z"
                fill="none"
                stroke="var(--color-saffron-300)"
                strokeWidth="0.4"
                opacity="0.3"
              />
            </svg>

            {/* geometric pattern overlay */}
            <div className="absolute inset-0 overflow-hidden" style={{ clipPath: "url(#mehrab-clip)" }}>
              <svg width="0" height="0" className="absolute">
                <defs>
                  <clipPath id="mehrab-clip" clipPathUnits="objectBoundingBox">
                    <path d="M0 1V0.357 C0 0.286, 0.09 0.179, 0.25 0.107 C0.35 0.064, 0.4 0.029, 0.5 0 C0.6 0.029, 0.65 0.064, 0.75 0.107 C0.91 0.179, 1 0.286, 1 0.357 V1 Z" />
                  </clipPath>
                </defs>
              </svg>
              <GeometricPattern color="var(--color-saffron-200)" opacity={0.07} />
            </div>

            {/* corner flourishes */}
            <span className="absolute left-3 top-3 z-10 text-[var(--color-saffron-300)] opacity-60">
              <CornerFlourish />
            </span>
            <span className="absolute right-3 top-3 z-10 -scale-x-100 text-[var(--color-saffron-300)] opacity-60">
              <CornerFlourish />
            </span>

            {/* the logo */}
            <div className="absolute inset-0 flex flex-col items-center justify-center px-8 pt-10">
              <motion.div
                whileHover={{ rotate: -3 }}
                transition={{ type: "spring", stiffness: 220, damping: 18 }}
                className="w-[78%]"
              >
                <BrandImage />
              </motion.div>

              {/* Featured price chip */}
              <div className="absolute bottom-8 left-1/2 -translate-x-1/2 rounded-full bg-[var(--color-saffron-400)] px-5 py-2.5 shadow-[0_12px_30px_-12px_rgba(217,118,18,0.6)]">
                <div className="flex items-center gap-2 text-[var(--color-slate-900)]">
                  <KhatimStar className="h-3.5 w-3.5" />
                  <span className="text-[0.7rem] font-semibold uppercase tracking-[0.18em]">House Special</span>
                </div>
              </div>
            </div>
          </div>

        </motion.aside>
      </div>
    </section>
  );
}

function PhotoTile({
  image,
  label,
  urdu,
  emphasis,
}: {
  image: string;
  label: string;
  urdu: string;
  emphasis?: boolean;
}) {
  return (
    <div
      className={`group relative flex flex-col overflow-hidden rounded-2xl border text-center transition-transform hover:-translate-y-0.5 ${
        emphasis
          ? "border-[var(--color-saffron-400)]/60 ring-2 ring-[var(--color-saffron-400)]/30"
          : "border-[var(--color-line)]"
      }`}
    >
      <div className="relative h-20 w-full overflow-hidden">
        <Image
          src={image}
          alt={label}
          fill
          sizes="(min-width: 768px) 12rem, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div
          aria-hidden
          className="absolute inset-0"
          style={{ background: "linear-gradient(180deg, rgba(0,0,0,0) 40%, rgba(20,17,10,0.35) 100%)" }}
        />
      </div>
      <div
        className={`flex flex-col items-center gap-0.5 px-2 py-2.5 ${
          emphasis ? "bg-[var(--color-saffron-400)]/15" : "bg-white/80"
        }`}
      >
        <span className="text-[0.92rem] font-semibold leading-none tracking-tight text-[var(--color-slate-800)]">
          {label}
        </span>
        <span className="urdu text-[0.92rem] leading-none text-[var(--color-saffron-500)]">{urdu}</span>
      </div>
    </div>
  );
}

function BookIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <path d="M2 3 L9 3 V 15 L2 15 Z M9 3 L16 3 V 15 L9 15 Z" stroke="currentColor" strokeWidth="1.4" fill="none" />
      <line x1="9" y1="3" x2="9" y2="15" stroke="currentColor" strokeWidth="1.4" />
    </svg>
  );
}
function PhoneIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <path
        d="M5 2 L7 2 L8 6 L6 7 Q 8 11, 11 12 L 12 10 L 16 11 L 16 13 Q 16 16, 13 16 Q 6 16, 2 9 Q 2 2, 5 2 Z"
        fill="currentColor"
      />
    </svg>
  );
}
