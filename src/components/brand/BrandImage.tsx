"use client";

import Image from "next/image";
import { cn } from "@/lib/cn";

/**
 * Brand logo image — the cropped circular badge with transparent corners.
 *
 * Now served through next/image so the browser gets an auto-resized,
 * WebP-converted version per device (the source PNG is 800×800 ~1MB for
 * fidelity; actual transferred bytes drop to ~30-80KB).
 *
 * To swap in a different logo: replace public/brand/aamir-cafe-logo.png
 * and re-run `node scripts/crop-logo.mjs` from the project root.
 */
export function BrandImage({
  className,
  alt = "Aamir Cafe Restaurant",
}: {
  className?: string;
  alt?: string;
}) {
  return (
    <div className={cn("relative aspect-square w-full", className)}>
      <Image
        src="/brand/aamir-cafe-logo.png"
        alt={alt}
        fill
        sizes="(min-width: 1024px) 320px, (min-width: 768px) 28vw, 60vw"
        className="select-none object-contain"
        priority
        draggable={false}
      />
    </div>
  );
}
