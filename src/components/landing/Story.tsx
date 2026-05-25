"use client";

import { motion } from "framer-motion";
import { KhatimStar } from "@/components/brand/Ornaments";

const spring = { type: "spring" as const, stiffness: 100, damping: 20 };

const principles = [
  {
    label: "Charcoal",
    urdu: "کوئلہ",
    icon: <CharcoalIcon />,
  },
  {
    label: "Clay Oven",
    urdu: "تندور",
    icon: <TandoorIcon />,
  },
  {
    label: "Family Size",
    urdu: "خاندانی",
    icon: <FamilyIcon />,
  },
];

export function Story() {
  return (
    <section id="story" className="mx-auto w-full max-w-[1280px] px-5 pt-24 md:pt-32 lg:px-10">
      <header className="mb-10 flex flex-col items-center gap-3 text-center">
        <KhatimStar className="h-5 w-5 text-[var(--color-saffron-400)]" />
        <h2
          className="font-display text-[2.4rem] font-medium leading-[1] tracking-tight text-[var(--color-slate-800)] md:text-[3rem]"
          style={{ fontVariationSettings: "'opsz' 144, 'SOFT' 50" }}
        >
          Our Kitchen
        </h2>
        <p className="urdu text-[1.4rem] text-[var(--color-saffron-500)]">ہمارا باورچی خانہ</p>
      </header>

      <motion.ol
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
        className="grid grid-cols-1 gap-4 md:grid-cols-3"
      >
        {principles.map((p) => (
          <motion.li
            key={p.label}
            variants={{
              hidden: { opacity: 0, y: 14 },
              visible: { opacity: 1, y: 0, transition: spring },
            }}
            className="group flex flex-col items-center gap-4 rounded-3xl border border-[var(--color-line)] bg-[var(--color-sand-50)] p-10 text-center transition-colors hover:bg-white"
          >
            <span className="grid h-20 w-20 place-items-center rounded-full bg-[var(--color-terracotta-100)] text-[var(--color-terracotta-500)] transition-transform group-hover:scale-105">
              {p.icon}
            </span>
            <div>
              <h3
                className="font-display text-[1.7rem] font-medium leading-none tracking-tight text-[var(--color-slate-800)] md:text-[2rem]"
                style={{ fontVariationSettings: "'opsz' 144, 'SOFT' 50" }}
              >
                {p.label}
              </h3>
              <p className="urdu mt-2 text-[1.3rem] leading-none text-[var(--color-saffron-500)]">{p.urdu}</p>
            </div>
          </motion.li>
        ))}
      </motion.ol>
    </section>
  );
}

function CharcoalIcon() {
  return (
    <svg width="44" height="44" viewBox="0 0 44 44" fill="none">
      {/* charcoal pieces */}
      <ellipse cx="14" cy="32" rx="5" ry="3.5" fill="currentColor" opacity="0.55" />
      <ellipse cx="24" cy="32" rx="6" ry="4" fill="currentColor" opacity="0.7" />
      <ellipse cx="33" cy="32" rx="5" ry="3.5" fill="currentColor" opacity="0.55" />
      {/* flames */}
      <path
        d="M22 4 C 25 9, 29 11, 28 16 C 31 14, 32 17, 32 20 C 32 25, 28 28, 22 28 C 16 28, 12 25, 12 20 C 12 16, 16 17, 17 12 C 19 14, 20 14, 22 4Z"
        fill="currentColor"
      />
    </svg>
  );
}

function TandoorIcon() {
  return (
    <svg width="44" height="44" viewBox="0 0 44 44" fill="none">
      {/* tandoor body */}
      <ellipse cx="22" cy="12" rx="14" ry="3" fill="currentColor" opacity="0.4" />
      <path d="M8 12 Q8 36, 22 38 Q36 36, 36 12" fill="currentColor" />
      {/* opening */}
      <ellipse cx="22" cy="12" rx="11" ry="2.2" fill="#fbf4e1" />
      <ellipse cx="22" cy="12" rx="11" ry="2.2" fill="currentColor" opacity="0.3" />
      {/* glow inside */}
      <path
        d="M16 13 Q18 8, 22 9 Q26 8, 28 13"
        stroke="var(--color-saffron-400)"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
      />
    </svg>
  );
}

function FamilyIcon() {
  return (
    <svg width="44" height="44" viewBox="0 0 44 44" fill="none">
      {/* round table */}
      <ellipse cx="22" cy="26" rx="18" ry="4" fill="currentColor" opacity="0.3" />
      <ellipse cx="22" cy="24" rx="16" ry="3" fill="currentColor" />
      {/* people heads around */}
      <circle cx="8" cy="14" r="3" fill="currentColor" />
      <circle cx="22" cy="10" r="3.2" fill="currentColor" />
      <circle cx="36" cy="14" r="3" fill="currentColor" />
      <circle cx="14" cy="36" r="3" fill="currentColor" />
      <circle cx="30" cy="36" r="3" fill="currentColor" />
      {/* connecting cooked pieces in centre */}
      <circle cx="18" cy="22" r="2" fill="var(--color-saffron-400)" />
      <circle cx="24" cy="20" r="2" fill="var(--color-saffron-400)" />
      <circle cx="27" cy="23" r="1.8" fill="var(--color-saffron-400)" />
    </svg>
  );
}
