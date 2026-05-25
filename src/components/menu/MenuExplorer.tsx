"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { menu, type MenuCategory, type MenuItem } from "@/data/menu";
import { Price } from "@/components/ui/Price";
import { DishIcon, categoryIcon, type Variant } from "@/components/brand/DishIcon";
import { KhatimStar, OrnamentBand } from "@/components/brand/Ornaments";
import { cn } from "@/lib/cn";

const spring = { type: "spring" as const, stiffness: 100, damping: 20 };

export function MenuExplorer() {
  const [query, setQuery] = useState("");
  const [activeId, setActiveId] = useState<string>(menu[0]?.id ?? "");
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({});

  const filtered = useMemo(() => {
    if (!query.trim()) return menu;
    const q = query.trim().toLowerCase();
    return menu
      .map((c) => ({
        ...c,
        items: c.items.filter(
          (i) =>
            i.name.toLowerCase().includes(q) ||
            (i.description?.toLowerCase().includes(q) ?? false),
        ),
      }))
      .filter((c) => c.items.length > 0);
  }, [query]);

  const totalDishes = useMemo(() => menu.reduce((acc, c) => acc + c.items.length, 0), []);
  const matchedDishes = useMemo(() => filtered.reduce((acc, c) => acc + c.items.length, 0), [filtered]);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActiveId(visible[0].target.id);
      },
      { rootMargin: "-160px 0px -65% 0px", threshold: 0 },
    );

    Object.values(sectionRefs.current).forEach((el) => {
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [filtered]);

  return (
    <>
      <MenuHero query={query} setQuery={setQuery} matched={matchedDishes} total={totalDishes} />
      <CategoryNav categories={filtered} activeId={activeId} />

      <div className="mx-auto w-full max-w-[1280px] px-5 pb-24 pt-12 lg:px-10">
        <AnimatePresence mode="popLayout">
          {filtered.length === 0 ? (
            <EmptyState query={query} clear={() => setQuery("")} />
          ) : (
            <div className="grid gap-20">
              {filtered.map((category, i) => (
                <div key={category.id}>
                  {i > 0 && (
                    <OrnamentBand className="mb-12 opacity-70" color="var(--color-saffron-400)" />
                  )}
                  <CategorySection
                    category={category}
                    setRef={(el) => {
                      sectionRefs.current[category.id] = el;
                    }}
                  />
                </div>
              ))}
            </div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}

function MenuHero({
  query,
  setQuery,
  matched,
  total,
}: {
  query: string;
  setQuery: (q: string) => void;
  matched: number;
  total: number;
}) {
  return (
    <section className="relative isolate overflow-hidden border-b border-[var(--color-line)] bg-[var(--color-sand-50)]">
      <div
        aria-hidden
        className="absolute inset-0 -z-10"
        style={{
          background: "radial-gradient(60% 80% at 90% 10%, rgba(217,118,18,0.12), transparent 60%)",
        }}
      />
      <div className="mx-auto flex w-full max-w-[1280px] flex-col items-center gap-8 px-5 pb-12 pt-16 text-center md:pb-14 md:pt-20 lg:px-10">
        <KhatimStar className="h-5 w-5 text-[var(--color-saffron-400)]" />

        <div>
          <h1
            className="font-display text-[3.4rem] font-medium leading-[0.95] tracking-tight text-[var(--color-slate-800)] md:text-[5rem]"
            style={{ fontVariationSettings: "'opsz' 144, 'SOFT' 50" }}
          >
            Menu
          </h1>
          <p className="urdu mt-3 text-[2rem] leading-none text-[var(--color-saffron-500)] md:text-[2.5rem]">مینو</p>
        </div>

        <div className="flex items-center gap-6 font-mono text-[0.75rem] uppercase tracking-[0.18em] text-[var(--color-slate-500)]">
          <span><strong className="text-[var(--color-slate-800)]">{total}</strong> dishes</span>
          <span className="h-1 w-1 rounded-full bg-[var(--color-saffron-400)]" />
          <span><strong className="text-[var(--color-slate-800)]">{menu.length}</strong> sections</span>
        </div>

        <div className="relative w-full max-w-[28rem]">
          <SearchIcon className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-[var(--color-slate-400)]" />
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search..."
            className="w-full rounded-full border border-[var(--color-line)] bg-white py-3.5 pl-11 pr-4 text-[1rem] text-[var(--color-slate-800)] placeholder:text-[var(--color-slate-400)] focus:border-[var(--color-saffron-400)] focus:outline-none focus:ring-4 focus:ring-[var(--color-saffron-400)]/15"
            aria-label="Search the menu"
          />
        </div>

        {query.trim() && (
          <p className="font-mono text-[0.72rem] uppercase tracking-[0.16em] text-[var(--color-slate-500)]">
            {matched} / {total}
          </p>
        )}
      </div>
    </section>
  );
}

function CategoryNav({ categories, activeId }: { categories: MenuCategory[]; activeId: string }) {
  return (
    <nav
      aria-label="Menu categories"
      className="sticky top-[64px] z-30 border-b border-[var(--color-line)] bg-[var(--color-canvas)]/90 backdrop-blur-md md:top-[72px]"
    >
      <div className="mx-auto w-full max-w-[1280px] px-5 lg:px-10">
        <ul className="-mx-1 flex gap-1.5 overflow-x-auto py-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {categories.map((c) => {
            const active = c.id === activeId;
            const variant = categoryIcon[c.id] ?? "soup";
            return (
              <li key={c.id} className="shrink-0">
                <a
                  href={`#${c.id}`}
                  className={cn(
                    "relative inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-[0.82rem] font-medium transition-colors",
                    active
                      ? "text-[var(--color-sand-50)]"
                      : "text-[var(--color-slate-500)] hover:text-[var(--color-slate-800)]",
                  )}
                >
                  {active && (
                    <motion.span
                      layoutId="menu-pill"
                      className="absolute inset-0 -z-10 rounded-full bg-[var(--color-slate-800)]"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  <DishIcon
                    variant={variant}
                    className="h-5 w-5"
                    tone={active ? "var(--color-saffron-300)" : "var(--color-slate-500)"}
                  />
                  <span>{c.title}</span>
                  <span
                    className={cn(
                      "font-mono text-[0.65rem] tabular-nums",
                      active ? "text-[var(--color-sand-300)]" : "text-[var(--color-slate-400)]",
                    )}
                  >
                    {c.items.length}
                  </span>
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}

function CategorySection({
  category,
  setRef,
}: {
  category: MenuCategory;
  setRef: (el: HTMLElement | null) => void;
}) {
  const isPlatters = category.variant === "platters";
  const variant = categoryIcon[category.id] ?? "soup";

  return (
    <motion.section
      ref={setRef}
      id={category.id}
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={spring}
      className="scroll-mt-32"
    >
      {/* Centered icon + title + Urdu header */}
      <header className="mb-10 flex flex-col items-center gap-3 text-center">
        <div className="grid h-16 w-16 place-items-center rounded-full bg-[var(--color-saffron-400)]/12">
          <DishIcon variant={variant} className="h-10 w-10" tone="var(--color-saffron-500)" />
        </div>
        <div>
          <h2
            className="font-display text-[2rem] font-medium leading-[1] tracking-tight text-[var(--color-slate-800)] md:text-[2.4rem]"
            style={{ fontVariationSettings: "'opsz' 144, 'SOFT' 50" }}
          >
            {category.title}
          </h2>
          {category.urdu && (
            <p className="urdu mt-2 text-[1.5rem] leading-none text-[var(--color-saffron-500)]">{category.urdu}</p>
          )}
        </div>
        <div className="font-mono text-[0.7rem] uppercase tracking-[0.2em] text-[var(--color-slate-400)]">
          {category.items.length} dishes
        </div>
      </header>

      {isPlatters ? (
        <PlatterRows items={category.items} />
      ) : (
        <ItemRows items={category.items} variant={variant} />
      )}
    </motion.section>
  );
}

function ItemRows({ items, variant }: { items: MenuItem[]; variant: Variant }) {
  return (
    <ul className="grid grid-cols-1 gap-x-6 gap-y-3 md:grid-cols-2">
      {items.map((item, i) => (
        <li
          key={`${item.name}-${i}`}
          className="group flex items-center gap-4 rounded-2xl border border-[var(--color-line)] bg-[var(--color-sand-50)] p-4 transition-colors hover:border-[var(--color-saffron-400)]/40 hover:bg-white"
        >
          <span className="grid h-12 w-12 place-items-center rounded-xl bg-[var(--color-saffron-400)]/10">
            <DishIcon variant={variant} className="h-7 w-7" tone="var(--color-saffron-500)" />
          </span>
          <div className="flex-1">
            <div className="text-[1rem] font-medium tracking-tight text-[var(--color-slate-800)]">
              {item.name}
            </div>
            {item.description && (
              <div className="mt-0.5 text-[0.78rem] text-[var(--color-slate-500)]">{item.description}</div>
            )}
          </div>
          <Price value={item.price ?? 0} />
        </li>
      ))}
    </ul>
  );
}

function PlatterRows({ items }: { items: MenuItem[] }) {
  return (
    <ul className="grid grid-cols-1 gap-4">
      {items.map((p) => (
        <li
          key={p.name}
          className="grid grid-cols-1 gap-4 rounded-2xl border border-[var(--color-line)] bg-[var(--color-sand-50)] p-5 md:grid-cols-[auto_2.2fr_1fr_1fr] md:items-center md:gap-6 md:p-6"
        >
          <span className="hidden md:grid h-16 w-16 place-items-center rounded-2xl bg-[var(--color-saffron-400)]/10">
            <DishIcon variant="traditional" className="h-9 w-9" tone="var(--color-saffron-500)" />
          </span>
          <div>
            <h3
              className="font-display text-[1.4rem] font-medium tracking-tight text-[var(--color-slate-800)]"
              style={{ fontVariationSettings: "'opsz' 144, 'SOFT' 50" }}
            >
              {p.name}
            </h3>
            {p.description && (
              <p className="mt-1.5 max-w-[60ch] text-[0.78rem] leading-relaxed text-[var(--color-slate-500)]">
                {p.description}
              </p>
            )}
          </div>
          <PlatterPrice label="Full" value={p.full ?? 0} serves={p.fullServes} />
          <PlatterPrice label="Half" value={p.half ?? 0} serves={p.halfServes} />
        </li>
      ))}
    </ul>
  );
}

function PlatterPrice({ label, value, serves }: { label: string; value: number; serves?: string }) {
  return (
    <div className="flex items-center gap-3 md:block">
      <span className="text-[0.62rem] font-medium uppercase tracking-[0.18em] text-[var(--color-slate-400)] md:hidden">
        {label}
      </span>
      <span className="hidden text-[0.6rem] font-medium uppercase tracking-[0.18em] text-[var(--color-slate-400)] md:block">
        {label}
      </span>
      <div>
        <Price value={value} size="lg" />
        {serves && (
          <div className="mt-0.5 font-mono text-[0.7rem] tabular-nums text-[var(--color-slate-400)]">{serves}</div>
        )}
      </div>
    </div>
  );
}

function EmptyState({ query, clear }: { query: string; clear: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex flex-col items-center gap-4 rounded-2xl border border-dashed border-[var(--color-line)] bg-[var(--color-sand-50)] p-12 text-center"
    >
      <SearchIcon className="h-8 w-8 text-[var(--color-slate-300)]" />
      <h2
        className="font-display text-[1.6rem] font-medium tracking-tight text-[var(--color-slate-800)]"
        style={{ fontVariationSettings: "'opsz' 144, 'SOFT' 50" }}
      >
        No matches for &ldquo;{query}&rdquo;
      </h2>
      <button
        type="button"
        onClick={clear}
        className="mt-2 inline-flex items-center gap-2 rounded-full bg-[var(--color-slate-800)] px-5 py-2.5 text-[0.85rem] font-medium text-[var(--color-sand-50)] hover:bg-[var(--color-slate-700)]"
      >
        Clear
      </button>
    </motion.div>
  );
}

function SearchIcon({ className }: { className?: string }) {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className={className} aria-hidden>
      <circle cx="7" cy="7" r="5" stroke="currentColor" strokeWidth="1.5" />
      <path d="M11 11l3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}
