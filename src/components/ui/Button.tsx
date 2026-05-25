"use client";

import { motion, type HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/cn";

type Variant = "primary" | "ghost" | "outline";

type Props = HTMLMotionProps<"a"> & {
  variant?: Variant;
  href: string;
};

const styles: Record<Variant, string> = {
  primary:
    "bg-[var(--color-slate-700)] text-[var(--color-sand-50)] hover:bg-[var(--color-slate-800)]",
  ghost:
    "bg-transparent text-[var(--color-slate-700)] hover:bg-[var(--color-slate-700)]/8",
  outline:
    "bg-transparent text-[var(--color-slate-700)] border border-[var(--color-slate-700)]/30 hover:border-[var(--color-slate-700)]/60",
};

export function Button({ variant = "primary", className, children, ...rest }: Props) {
  return (
    <motion.a
      whileTap={{ y: 1, scale: 0.985 }}
      transition={{ duration: 0.12, ease: "easeOut" }}
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 text-[0.85rem] font-medium tracking-tight transition-colors duration-200",
        styles[variant],
        className,
      )}
      {...rest}
    >
      {children}
    </motion.a>
  );
}
