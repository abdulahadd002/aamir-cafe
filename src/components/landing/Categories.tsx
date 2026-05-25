"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { menu, categoryImage } from "@/data/menu";
import { KhatimStar } from "@/components/brand/Ornaments";

const spring = { type: "spring" as const, stiffness: 100, damping: 20 };

/* Pull category counts from data — no manual numbers to drift. */
const tiles = menu.map((c) => ({
  id: c.id,
  title: c.title,
  urdu: c.urdu ?? "",
  count: c.items.length,
  image: categoryImage[c.id],
  emphasis: c.id === "traditional" || c.id === "bbq",
}));

export function Categories() {
  return (
    <section className="mx-auto w-full max-w-[1280px] px-5 pt-24 lg:px-10">
      <header className="mb-10 flex flex-col items-center gap-3 text-center">
        <KhatimStar className="h-5 w-5 text-[var(--color-saffron-400)]" />
        <h2
          className="font-display text-[2.4rem] font-medium leading-[1] tracking-tight text-[var(--color-slate-800)] md:text-[3rem]"
          style={{ fontVariationSettings: "'opsz' 144, 'SOFT' 50" }}
        >
          Browse
        </h2>
        <p className="urdu text-[1.4rem] text-[var(--color-saffron-500)]">دیکھیں</p>
      </header>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        variants={{ visible: { transition: { staggerChildren: 0.04 } } }}
        className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4"
      >
        {tiles.map((t) => (
          <motion.div
            key={t.id}
            variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0, transition: spring } }}
          >
            <Link
              href={`/menu#${t.id}`}
              className={`group relative flex h-full min-h-[15rem] flex-col justify-between overflow-hidden rounded-2xl border text-[var(--color-sand-50)] transition-all ${
                t.emphasis
                  ? "border-[var(--color-saffron-400)]/60 ring-2 ring-[var(--color-saffron-400)]/30"
                  : "border-[var(--color-line)]"
              }`}
            >
              {/* Real food photo background */}
              {t.image && (
                <Image
                  src={t.image}
                  alt={t.title}
                  fill
                  sizes="(min-width: 768px) 25vw, 50vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
              )}

              {/* Gradient overlay so labels stay readable */}
              <div
                aria-hidden
                className="absolute inset-0"
                style={{
                  background: t.emphasis
                    ? "linear-gradient(180deg, rgba(217,118,18,0.35) 0%, rgba(20,17,10,0.55) 50%, rgba(20,17,10,0.85) 100%)"
                    : "linear-gradient(180deg, rgba(20,17,10,0.25) 0%, rgba(20,17,10,0.55) 55%, rgba(20,17,10,0.88) 100%)",
                }}
              />

              {/* Top-right ornament + count */}
              <div className="relative z-10 flex items-start justify-between p-4 md:p-5">
                {t.emphasis ? (
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-[var(--color-saffron-400)] px-2.5 py-0.5 text-[0.58rem] font-semibold uppercase tracking-[0.22em] text-[var(--color-slate-900)]">
                    <KhatimStar className="h-2.5 w-2.5" />
                    Signature
                  </span>
                ) : (
                  <span />
                )}
                <span className="rounded-full bg-black/40 px-2 py-0.5 font-mono text-[0.68rem] tabular-nums text-[var(--color-sand-100)] backdrop-blur">
                  {t.count}
                </span>
              </div>

              {/* Bottom label */}
              <div className="relative z-10 p-4 text-center md:p-5">
                <h3
                  className="font-display text-[1.4rem] font-medium leading-tight tracking-tight md:text-[1.6rem]"
                  style={{ fontVariationSettings: "'opsz' 144, 'SOFT' 50" }}
                >
                  {t.title}
                </h3>
                {t.urdu && (
                  <p className="urdu mt-1.5 text-[1.15rem] leading-none text-[var(--color-saffron-300)]">{t.urdu}</p>
                )}
              </div>
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
