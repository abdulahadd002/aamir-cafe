"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { signatureDishes } from "@/data/menu";
import { KhatimStar } from "@/components/brand/Ornaments";

const spring = { type: "spring" as const, stiffness: 100, damping: 20 };

export function Signatures() {
  return (
    <section className="mx-auto w-full max-w-[1280px] px-5 pt-24 lg:px-10">
      <header className="mb-10 flex flex-col items-center gap-3 text-center">
        <KhatimStar className="h-5 w-5 text-[var(--color-saffron-400)]" />
        <h2
          className="font-display text-[2.4rem] font-medium leading-[1] tracking-tight text-[var(--color-slate-800)] md:text-[3rem]"
          style={{ fontVariationSettings: "'opsz' 144, 'SOFT' 50" }}
        >
          Signatures
        </h2>
        <p className="urdu text-[1.4rem] text-[var(--color-saffron-500)]">دستخطی پکوان</p>
      </header>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
        className="grid grid-cols-1 gap-5 md:grid-cols-3"
      >
        {signatureDishes.map((dish, i) => (
          <SignatureCard key={dish.title} dish={dish} variant={i === 0 ? "primary" : "secondary"} />
        ))}
      </motion.div>
    </section>
  );
}

function SignatureCard({
  dish,
  variant,
}: {
  dish: (typeof signatureDishes)[number];
  variant: "primary" | "secondary";
}) {
  const isPrimary = variant === "primary";
  const palette = isPrimary
    ? "bg-[var(--color-slate-800)] text-[var(--color-sand-50)]"
    : "bg-[var(--color-sand-100)] text-[var(--color-slate-800)]";

  return (
    <motion.article
      variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0, transition: spring } }}
      whileHover={{ y: -4 }}
      transition={spring}
      className={`group relative isolate flex flex-col overflow-hidden rounded-[1.75rem] ${palette}`}
      style={{
        boxShadow: isPrimary
          ? "0 24px 50px -22px rgba(20,17,10,0.5)"
          : "0 16px 40px -22px rgba(20,17,10,0.25)",
      }}
    >
      {/* Real food photo */}
      <div className="relative aspect-[4/3] w-full overflow-hidden">
        <Image
          src={dish.image}
          alt={dish.title}
          fill
          sizes="(min-width: 768px) 380px, 100vw"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div
          aria-hidden
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(0,0,0,0) 30%, rgba(20,17,10,0.5) 100%)",
          }}
        />
        {/* accent pill on photo */}
        <div className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-[var(--color-saffron-400)] px-2.5 py-1 text-[var(--color-slate-900)]">
          <KhatimStar className="h-3 w-3" />
          <span className="text-[0.6rem] font-semibold uppercase tracking-[0.22em]">{dish.accent}</span>
        </div>
        <div className="absolute right-4 top-4 rounded-full bg-black/40 px-2.5 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-[var(--color-sand-100)] backdrop-blur">
          {dish.serves}
        </div>
      </div>

      <div className="flex flex-col items-center px-7 py-7 text-center">
        <h3
          className="font-display text-[1.85rem] font-medium leading-none tracking-tight"
          style={{ fontVariationSettings: "'opsz' 144, 'SOFT' 50" }}
        >
          {dish.title}
        </h3>
        <p
          className={`urdu mt-2 text-[1.5rem] leading-none ${
            isPrimary ? "text-[var(--color-saffron-300)]" : "text-[var(--color-saffron-500)]"
          }`}
        >
          {dish.urdu}
        </p>

        <div className="mt-5 flex items-center gap-3">
          <span
            className={`font-mono text-[1rem] font-medium tabular-nums tracking-tight ${
              isPrimary ? "text-[var(--color-sand-50)]" : "text-[var(--color-slate-800)]"
            }`}
          >
            {dish.pricing}
          </span>
        </div>
      </div>
    </motion.article>
  );
}
