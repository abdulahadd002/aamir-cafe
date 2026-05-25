import { cn } from "@/lib/cn";

/**
 * Khatim — the 8-pointed star (two overlapping squares).
 * Iconic across Pashtoon, Afghan and broader Islamic decorative arts.
 */
export function KhatimStar({ className, filled = true }: { className?: string; filled?: boolean }) {
  return (
    <svg viewBox="0 0 24 24" className={cn("h-4 w-4", className)} aria-hidden>
      <path
        d="M12 1l3 8 8 3-8 3-3 8-3-8-8-3 8-3z"
        fill={filled ? "currentColor" : "none"}
        stroke="currentColor"
        strokeWidth={filled ? 0 : 1.4}
        strokeLinejoin="round"
      />
      {filled && (
        <path
          d="M5 5l4 6-4 6M19 5l-4 6 4 6M5 5l6 4-6 6 6 4M19 5l-6 4 6 6-6 4"
          stroke="currentColor"
          strokeOpacity="0"
          fill="none"
        />
      )}
    </svg>
  );
}

/**
 * Mehrab — Islamic pointed arch shape. Used as the frame for the hero logo
 * panel and signature cards. Tapered foot, cusped shoulder, pointed crown.
 */
export function MehrabArch({
  className,
  children,
  fill = "var(--color-slate-700)",
}: {
  className?: string;
  children?: React.ReactNode;
  fill?: string;
}) {
  return (
    <div className={cn("relative", className)}>
      <svg
        viewBox="0 0 200 280"
        preserveAspectRatio="none"
        className="absolute inset-0 h-full w-full"
        aria-hidden
      >
        <path
          d="M0 280V100 C0 80, 18 50, 50 30 C70 18, 80 8, 100 0 C120 8, 130 18, 150 30 C182 50, 200 80, 200 100 V280 Z"
          fill={fill}
        />
      </svg>
      <div className="relative h-full w-full">{children}</div>
    </div>
  );
}

/**
 * Ornamental divider band — repeats a small motif horizontally between
 * sections. Use sparingly: it carries a lot of visual weight on its own.
 */
export function OrnamentBand({
  className,
  color = "var(--color-saffron-400)",
}: {
  className?: string;
  color?: string;
}) {
  return (
    <div
      className={cn("flex h-8 w-full items-center justify-center gap-3", className)}
      aria-hidden
    >
      <span className="h-px flex-1 bg-current opacity-30" style={{ color }} />
      <svg viewBox="0 0 80 16" className="h-4 w-20" style={{ color }} aria-hidden>
        <path
          d="M40 1l2 6 6 1-6 1-2 6-2-6-6-1 6-1z"
          fill="currentColor"
        />
        <circle cx="14" cy="8" r="2" fill="currentColor" />
        <circle cx="66" cy="8" r="2" fill="currentColor" />
        <circle cx="4" cy="8" r="1" fill="currentColor" opacity="0.55" />
        <circle cx="76" cy="8" r="1" fill="currentColor" opacity="0.55" />
        <path
          d="M22 8 Q28 3, 32 8 T22 8"
          stroke="currentColor"
          strokeWidth="0.8"
          fill="none"
          opacity="0.5"
        />
        <path
          d="M58 8 Q52 3, 48 8 T58 8"
          stroke="currentColor"
          strokeWidth="0.8"
          fill="none"
          opacity="0.5"
        />
      </svg>
      <span className="h-px flex-1 bg-current opacity-30" style={{ color }} />
    </div>
  );
}

/**
 * SVG pattern fill — interlocking 8-point stars and hexagons.
 * Apply as a subtle background (low opacity) on dark feature panels.
 */
export function GeometricPattern({
  className,
  color = "currentColor",
  opacity = 0.08,
}: {
  className?: string;
  color?: string;
  opacity?: number;
}) {
  const id = "khatim-tile";
  return (
    <svg className={cn("absolute inset-0 h-full w-full", className)} aria-hidden>
      <defs>
        <pattern id={id} x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
          <g fill={color} opacity={opacity}>
            <path d="M30 6l3 9 9 3-9 3-3 9-3-9-9-3 9-3z" />
            <circle cx="2" cy="2" r="1" />
            <circle cx="58" cy="2" r="1" />
            <circle cx="2" cy="58" r="1" />
            <circle cx="58" cy="58" r="1" />
          </g>
          <g stroke={color} strokeOpacity={opacity * 0.6} strokeWidth="0.7" fill="none">
            <path d="M30 0 L60 30 L30 60 L0 30 Z" />
          </g>
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#${id})`} />
    </svg>
  );
}

/**
 * Corner flourish — small triangular ornament used to mark card corners,
 * evokes carpet-edge stitching.
 */
export function CornerFlourish({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" className={cn("h-6 w-6", className)} aria-hidden>
      <path d="M2 2 L18 2 L14 6 L8 6 L8 12 L4 16 L4 8 L2 8 Z" fill="currentColor" opacity="0.85" />
      <circle cx="20" cy="4" r="1" fill="currentColor" opacity="0.6" />
      <circle cx="4" cy="20" r="1" fill="currentColor" opacity="0.6" />
      <circle cx="12" cy="12" r="0.8" fill="currentColor" opacity="0.4" />
    </svg>
  );
}
