"use client";

import { motion } from "framer-motion";
import { KhatimStar, OrnamentBand } from "@/components/brand/Ornaments";
import { phone, region } from "@/data/menu";

const spring = { type: "spring" as const, stiffness: 100, damping: 20 };

export function Visit() {
  return (
    <section id="visit" className="mx-auto w-full max-w-[1280px] px-5 pt-24 md:pt-32 lg:px-10">
      <header className="mb-10 flex flex-col items-center gap-3 text-center">
        <KhatimStar className="h-5 w-5 text-[var(--color-saffron-400)]" />
        <h2
          className="font-display text-[2.4rem] font-medium leading-[1] tracking-tight text-[var(--color-slate-800)] md:text-[3rem]"
          style={{ fontVariationSettings: "'opsz' 144, 'SOFT' 50" }}
        >
          Visit
        </h2>
        <p className="urdu text-[1.4rem] text-[var(--color-saffron-500)]">تشریف لائیں</p>
      </header>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
        className="grid grid-cols-1 gap-4 md:grid-cols-3"
      >
        {/* Phone — biggest tap target, instant call */}
        <motion.a
          variants={{ hidden: { opacity: 0, y: 14 }, visible: { opacity: 1, y: 0, transition: spring } }}
          href={`tel:${phone.replace(/[^0-9+]/g, "")}`}
          className="group flex flex-col items-center gap-4 rounded-3xl bg-[var(--color-saffron-400)] p-8 text-center text-[var(--color-slate-900)] transition-transform hover:-translate-y-1"
          style={{ boxShadow: "0 24px 50px -22px rgba(217,118,18,0.55)" }}
        >
          <span className="grid h-20 w-20 place-items-center rounded-full bg-[var(--color-slate-900)] text-[var(--color-saffron-200)]">
            <PhoneIcon />
          </span>
          <div>
            <div className="text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-[var(--color-slate-900)]/70">Call</div>
            <p className="urdu text-[1.1rem] leading-none text-[var(--color-slate-900)]/80">کال کریں</p>
          </div>
          <div className="font-mono text-[1.4rem] font-medium tabular-nums tracking-tight">{phone}</div>
        </motion.a>

        {/* Hours */}
        <motion.div
          variants={{ hidden: { opacity: 0, y: 14 }, visible: { opacity: 1, y: 0, transition: spring } }}
          className="flex flex-col items-center gap-4 rounded-3xl bg-[var(--color-teal-500)] p-8 text-center text-[var(--color-sand-50)]"
          style={{ boxShadow: "0 20px 40px -22px rgba(46,93,89,0.5)" }}
        >
          <span className="grid h-20 w-20 place-items-center rounded-full bg-[var(--color-teal-700)] text-[var(--color-sand-100)]">
            <ClockIcon />
          </span>
          <div>
            <div className="text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-[var(--color-sand-200)]">Hours</div>
            <p className="urdu text-[1.1rem] leading-none text-[var(--color-sand-200)]">اوقات</p>
          </div>
          <div className="space-y-1">
            <div className="font-mono text-[1.4rem] font-medium tabular-nums">11 AM</div>
            <div className="text-[0.65rem] uppercase tracking-[0.22em] text-[var(--color-sand-300)]">to</div>
            <div className="font-mono text-[1.4rem] font-medium tabular-nums">12 AM</div>
          </div>
        </motion.div>

        {/* Location */}
        <motion.div
          variants={{ hidden: { opacity: 0, y: 14 }, visible: { opacity: 1, y: 0, transition: spring } }}
          className="flex flex-col items-center gap-4 rounded-3xl bg-[var(--color-slate-800)] p-8 text-center text-[var(--color-sand-50)]"
          style={{ boxShadow: "0 20px 40px -22px rgba(20,17,10,0.5)" }}
        >
          <span className="grid h-20 w-20 place-items-center rounded-full bg-[var(--color-slate-700)] text-[var(--color-saffron-200)]">
            <PinIcon />
          </span>
          <div>
            <div className="text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-[var(--color-sand-300)]">Find Us</div>
            <p className="urdu text-[1.1rem] leading-none text-[var(--color-sand-300)]">ہم یہاں ہیں</p>
          </div>
          <div
            className="font-display text-[1.25rem] font-medium leading-tight tracking-tight"
            style={{ fontVariationSettings: "'opsz' 144, 'SOFT' 50" }}
          >
            {region.split(",")[0]}
          </div>
        </motion.div>
      </motion.div>

      <OrnamentBand className="mt-16" color="var(--color-saffron-400)" />
    </section>
  );
}

function PhoneIcon() {
  return (
    <svg width="34" height="34" viewBox="0 0 34 34" fill="none">
      <path
        d="M9 4 L13 4 L15 11 L11 13 Q14 20, 21 23 L 23 19 L 30 21 L 30 25 Q 30 30, 25 30 Q 11 30, 4 16 Q 4 4, 9 4 Z"
        fill="currentColor"
      />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg width="34" height="34" viewBox="0 0 34 34" fill="none">
      <circle cx="17" cy="17" r="13" stroke="currentColor" strokeWidth="2.2" />
      <path d="M17 9 V 17 L 23 20" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
      <circle cx="17" cy="17" r="1.4" fill="currentColor" />
    </svg>
  );
}

function PinIcon() {
  return (
    <svg width="34" height="34" viewBox="0 0 34 34" fill="none">
      <path
        d="M17 3 C 24 3, 28 8, 28 14 C 28 22, 17 31, 17 31 C 17 31, 6 22, 6 14 C 6 8, 10 3, 17 3 Z"
        fill="currentColor"
      />
      <circle cx="17" cy="14" r="4" fill="var(--color-slate-900)" />
    </svg>
  );
}
