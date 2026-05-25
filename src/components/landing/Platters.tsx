"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { menu } from "@/data/menu";
import { Price } from "@/components/ui/Price";
import { DishIcon } from "@/components/brand/DishIcon";
import { KhatimStar, GeometricPattern } from "@/components/brand/Ornaments";

const spring = { type: "spring" as const, stiffness: 100, damping: 20 };

export function Platters() {
  const platters = menu.find((c) => c.id === "traditional")?.items ?? [];

  return (
    <section className="relative mt-24 overflow-hidden bg-[var(--color-slate-900)] py-20 text-[var(--color-sand-50)] md:py-28">
      {/* geometric backdrop */}
      <div className="absolute inset-0 opacity-100">
        <GeometricPattern color="var(--color-saffron-300)" opacity={0.06} />
      </div>
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(60% 80% at 18% 0%, rgba(217,118,18,0.18), transparent 60%)",
        }}
      />

      <div className="relative mx-auto w-full max-w-[1280px] px-5 lg:px-10">
        <header className="mb-12 flex flex-col items-center gap-3 text-center">
          <KhatimStar className="h-5 w-5 text-[var(--color-saffron-300)]" />
          <h2
            className="font-display text-[2.6rem] font-medium leading-[1] tracking-tight md:text-[3.4rem]"
            style={{ fontVariationSettings: "'opsz' 144, 'SOFT' 50" }}
          >
            Painda
          </h2>
          <p className="urdu text-[1.6rem] text-[var(--color-saffron-300)]">پائندہ</p>
        </header>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
          className="overflow-hidden rounded-[1.5rem] border border-white/10 backdrop-blur-sm"
        >
          {platters.map((p, i) => (
            <motion.div
              key={p.name}
              variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0, transition: spring } }}
              className={`grid grid-cols-[auto_1fr] gap-5 px-5 py-6 md:grid-cols-[auto_2fr_1fr_1fr] md:items-center md:gap-8 md:px-8 md:py-7 ${
                i !== platters.length - 1 ? "border-b border-white/8" : ""
              }`}
            >
              {/* Icon */}
              <div className="row-span-2 grid h-16 w-16 place-items-center rounded-full bg-[var(--color-saffron-400)]/15 md:row-span-1 md:h-20 md:w-20">
                <DishIcon variant="traditional" className="h-10 w-10 md:h-12 md:w-12" tone="var(--color-saffron-300)" />
              </div>

              {/* Name */}
              <div>
                <h3
                  className="font-display text-[1.5rem] font-medium leading-tight tracking-tight md:text-[1.85rem]"
                  style={{ fontVariationSettings: "'opsz' 144, 'SOFT' 50" }}
                >
                  {p.name}
                </h3>
                <p className="urdu mt-1 text-[1.1rem] leading-none text-[var(--color-saffron-300)]">
                  {urduFor(p.name)}
                </p>
              </div>

              {/* Full price — icon-led */}
              <div className="col-start-2 flex items-center justify-between gap-3 md:col-start-3 md:justify-start md:gap-4">
                <div className="flex items-center gap-2 rounded-full bg-white/10 px-3 py-1.5">
                  <PeopleIcon count={"full"} />
                  <span className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-[var(--color-sand-200)]">Full</span>
                </div>
                <Price value={p.full ?? 0} size="lg" className="text-[var(--color-sand-50)]" />
              </div>

              {/* Half price */}
              <div className="col-start-2 flex items-center justify-between gap-3 md:col-start-4 md:justify-start md:gap-4">
                <div className="flex items-center gap-2 rounded-full bg-white/10 px-3 py-1.5">
                  <PeopleIcon count={"half"} />
                  <span className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-[var(--color-sand-200)]">Half</span>
                </div>
                <Price value={p.half ?? 0} size="lg" className="text-[var(--color-sand-50)]" />
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-10 flex justify-center">
          <Link
            href="/menu#traditional"
            className="group inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3 text-[0.92rem] font-medium text-[var(--color-sand-50)] transition-colors hover:bg-white/10"
          >
            <BookIcon />
            Full Menu
            <span className="urdu text-[1rem] opacity-80">مکمل مینو</span>
          </Link>
        </div>
      </div>
    </section>
  );
}

const urduMap: Record<string, string> = {
  "Desi Painda": "دیسی پائندہ",
  "Chicken Painda": "چکن پائندہ",
  "Desi Painda Platter": "دیسی پائندہ پلیٹر",
  "Chicken Painda Platter": "چکن پائندہ پلیٹر",
  "Pulao Platter": "پلاؤ پلیٹر",
};
function urduFor(name: string) {
  return urduMap[name] ?? "";
}

function PeopleIcon({ count }: { count: "full" | "half" }) {
  return (
    <svg width="20" height="14" viewBox="0 0 20 14" fill="none">
      <circle cx="4" cy="5" r="2.4" fill="currentColor" className="text-[var(--color-saffron-300)]" />
      <path d="M0 13 Q0 9, 4 9 Q8 9, 8 13" fill="currentColor" className="text-[var(--color-saffron-300)]" />
      <circle cx="10" cy="5" r="2.4" fill="currentColor" className={count === "full" ? "text-[var(--color-saffron-300)]" : "text-[var(--color-saffron-300)] opacity-50"} />
      <path d="M6 13 Q6 9, 10 9 Q14 9, 14 13" fill="currentColor" className={count === "full" ? "text-[var(--color-saffron-300)]" : "text-[var(--color-saffron-300)] opacity-50"} />
      <circle cx="16" cy="5" r="2.4" fill="currentColor" className={count === "full" ? "text-[var(--color-saffron-300)]" : "text-[var(--color-saffron-300)] opacity-30"} />
      <path d="M12 13 Q12 9, 16 9 Q20 9, 20 13" fill="currentColor" className={count === "full" ? "text-[var(--color-saffron-300)]" : "text-[var(--color-saffron-300)] opacity-30"} />
    </svg>
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
