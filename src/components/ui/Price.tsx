import { cn } from "@/lib/cn";

/** Price with proper Rs prefix and mono-aligned numerals. */
export function Price({
  value,
  className,
  size = "md",
}: {
  value: number | string;
  className?: string;
  size?: "sm" | "md" | "lg";
}) {
  const numeric = typeof value === "number" ? value.toLocaleString("en-PK") : null;
  const sizeClass = size === "lg" ? "text-base" : size === "sm" ? "text-[0.78rem]" : "text-sm";

  return (
    <span
      className={cn(
        "inline-flex items-baseline gap-[3px] font-mono tabular-nums text-[var(--color-slate-700)]",
        sizeClass,
        className,
      )}
    >
      {numeric ? (
        <>
          <span className="text-[0.65em] uppercase tracking-[0.1em] text-[var(--color-slate-400)]">Rs</span>
          <span>{numeric}</span>
        </>
      ) : (
        <span className="font-sans text-[0.85em] italic text-[var(--color-slate-400)]">{value}</span>
      )}
    </span>
  );
}
