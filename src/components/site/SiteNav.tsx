"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { Logo, Wordmark } from "@/components/brand/Logo";
import { Button } from "@/components/ui/Button";
import { phone } from "@/data/menu";
import { cn } from "@/lib/cn";

const links = [
  { href: "/", label: "Home" },
  { href: "/menu", label: "Menu" },
  { href: "/#story", label: "Our kitchen" },
  { href: "/#visit", label: "Visit" },
];

export function SiteNav() {
  const { scrollY } = useScroll();
  const [condensed, setCondensed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setCondensed(latest > 24);
  });

  useEffect(() => {
    document.documentElement.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <motion.header
      initial={false}
      animate={{
        paddingTop: condensed ? 10 : 20,
        paddingBottom: condensed ? 10 : 20,
        backgroundColor: condensed ? "rgba(250, 246, 236, 0.85)" : "rgba(250, 246, 236, 0)",
      }}
      transition={{ type: "spring", stiffness: 220, damping: 28 }}
      className={cn(
        "sticky top-0 z-40 w-full backdrop-blur-md",
        condensed ? "border-b border-[var(--color-line)]" : "border-b border-transparent",
      )}
    >
      <div className="mx-auto flex w-full max-w-[1280px] items-center justify-between gap-6 px-5 lg:px-10">
        <Link href="/" className="group flex items-center gap-3" aria-label="Aamir Cafe Restaurant — home">
          <motion.span whileHover={{ rotate: -8 }} transition={{ type: "spring", stiffness: 300, damping: 18 }}>
            <Logo className="h-11 w-11" />
          </motion.span>
          <Wordmark />
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-full px-4 py-2 text-[0.85rem] font-medium text-[var(--color-slate-600)] transition-colors hover:bg-[var(--color-slate-700)]/6 hover:text-[var(--color-slate-800)]"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <a
            href={`tel:${phone.replace(/[^0-9+]/g, "")}`}
            className="font-mono text-[0.78rem] tabular-nums tracking-tight text-[var(--color-slate-500)] hover:text-[var(--color-slate-800)]"
          >
            {phone}
          </a>
          <Button href="/menu" variant="primary">
            See the menu
            <span aria-hidden>→</span>
          </Button>
        </div>

        <button
          type="button"
          onClick={() => setMobileOpen((v) => !v)}
          aria-expanded={mobileOpen}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          className="grid h-10 w-10 place-items-center rounded-full border border-[var(--color-line)] md:hidden"
        >
          <motion.span
            initial={false}
            animate={{ rotate: mobileOpen ? 45 : 0 }}
            className="block h-[1.5px] w-5 bg-[var(--color-slate-700)]"
          />
          <motion.span
            initial={false}
            animate={{ opacity: mobileOpen ? 0 : 1 }}
            className="mt-[5px] block h-[1.5px] w-5 bg-[var(--color-slate-700)]"
          />
          <motion.span
            initial={false}
            animate={{ rotate: mobileOpen ? -45 : 0, y: mobileOpen ? -7 : 0 }}
            className="mt-[5px] block h-[1.5px] w-5 bg-[var(--color-slate-700)]"
          />
        </button>
      </div>

      {/* Mobile sheet */}
      <motion.div
        initial={false}
        animate={{
          height: mobileOpen ? "auto" : 0,
          opacity: mobileOpen ? 1 : 0,
        }}
        transition={{ type: "spring", stiffness: 220, damping: 28 }}
        className="overflow-hidden md:hidden"
      >
        <div className="mx-auto flex w-full max-w-[1280px] flex-col gap-1 px-5 pb-6 pt-2">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="rounded-2xl px-4 py-3 text-base font-medium text-[var(--color-slate-700)] transition-colors hover:bg-[var(--color-slate-700)]/6"
            >
              {link.label}
            </Link>
          ))}
          <div className="mt-3 flex items-center justify-between border-t border-[var(--color-line)] pt-4">
            <a
              href={`tel:${phone.replace(/[^0-9+]/g, "")}`}
              className="font-mono text-sm tabular-nums text-[var(--color-slate-600)]"
            >
              {phone}
            </a>
            <Button href="/menu" variant="primary">
              See the menu
            </Button>
          </div>
        </div>
      </motion.div>
    </motion.header>
  );
}
