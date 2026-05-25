import { cn } from "@/lib/cn";

/**
 * Aamir Cafe brand mark — recreated from the printed logo on the menu jacket.
 * Chef's hat over crossed utensils inside a circular badge. SVG so it scales
 * crisply at any size and inherits color from `currentColor`.
 */
export function Logo({
  className,
  tone = "slate",
}: {
  className?: string;
  tone?: "slate" | "sand" | "ink";
}) {
  const fill =
    tone === "sand" ? "var(--color-sand-100)" : tone === "ink" ? "var(--color-ink)" : "var(--color-slate-700)";
  const knock =
    tone === "sand" ? "var(--color-slate-700)" : "var(--color-sand-100)";

  return (
    <svg
      viewBox="0 0 120 120"
      fill="none"
      role="img"
      aria-label="Aamir Cafe Restaurant"
      className={cn("h-12 w-12", className)}
    >
      <circle cx="60" cy="60" r="58" stroke={fill} strokeWidth="1.5" fill="none" opacity="0.45" />
      <circle cx="60" cy="60" r="52" fill={fill} />
      {/* chef hat */}
      <path
        d="M44 48c0-6 4.5-10 10-10 1.5-3 4-5 7-5 1.5 0 3 .5 4 1.5C66 32.5 68 32 70 32c4 0 7 3 7 7 0 .5 0 1-.2 1.5C80 41 82 44 82 47.5c0 4.5-4 8.5-9 8.5H47c-3.5 0-6-2-6-5 0-1.5.5-2.5 1.5-3-.3-1-.5-2-.5-3z"
        fill={knock}
      />
      <rect x="44" y="58" width="32" height="5" rx="1" fill={knock} />
      {/* crossed utensils */}
      <path
        d="M50 70l-5 18M50 70l5 18M68 70l-3 18M68 70l3 18"
        stroke={knock}
        strokeWidth="2"
        strokeLinecap="round"
      />
      <circle cx="50" cy="69" r="1.5" fill={knock} />
      <circle cx="68" cy="69" r="1.5" fill={knock} />
    </svg>
  );
}

/** Wordmark — for use beside the badge in header / footer */
export function Wordmark({ className }: { className?: string }) {
  return (
    <span className={cn("flex flex-col leading-none", className)}>
      <span className="font-display text-[1.05rem] font-semibold tracking-tight text-[var(--color-slate-700)]">
        Aamir Cafe
      </span>
      <span className="mt-[2px] text-[0.62rem] font-medium uppercase tracking-[0.22em] text-[var(--color-slate-400)]">
        Restaurant
      </span>
    </span>
  );
}
