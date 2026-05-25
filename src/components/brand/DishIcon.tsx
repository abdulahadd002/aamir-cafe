import { cn } from "@/lib/cn";

export type Variant =
  | "soup"
  | "dry-item"
  | "chinese"
  | "bbq"
  | "rice"
  | "tandoori"
  | "burgers"
  | "steaks"
  | "broast"
  | "salad"
  | "bar"
  | "sweets"
  | "ice-cream"
  | "traditional";

/**
 * Hand-drawn-feel SVG illustrations per menu category. Designed for
 * recognition without text — strong silhouette, single colour, slight warmth.
 * Render at 48–96px; they scale crisply at any size.
 */
export function DishIcon({
  variant,
  className,
  tone = "currentColor",
}: {
  variant: Variant;
  className?: string;
  tone?: string;
}) {
  const paths: Record<Variant, React.ReactNode> = {
    soup: (
      <>
        <path d="M8 24 Q8 16, 20 16 Q32 16, 32 24" stroke={tone} strokeWidth="2.2" fill="none" strokeLinecap="round" />
        <path
          d="M5 24 Q5 33, 20 33 Q35 33, 35 24 Z"
          fill={tone}
          fillOpacity="0.18"
          stroke={tone}
          strokeWidth="2.2"
          strokeLinejoin="round"
        />
        <path
          d="M14 11 Q14 7, 17 8 Q14 12, 17 14"
          stroke={tone}
          strokeWidth="1.6"
          fill="none"
          strokeLinecap="round"
        />
        <path
          d="M22 9 Q22 5, 25 6 Q22 10, 25 12"
          stroke={tone}
          strokeWidth="1.6"
          fill="none"
          strokeLinecap="round"
        />
      </>
    ),
    bbq: (
      <>
        {/* skewer */}
        <line x1="4" y1="14" x2="36" y2="14" stroke={tone} strokeWidth="1.5" strokeLinecap="round" />
        {/* boti chunks */}
        <circle cx="11" cy="14" r="4.2" fill={tone} fillOpacity="0.85" />
        <circle cx="20" cy="14" r="4.5" fill={tone} fillOpacity="0.9" />
        <circle cx="29" cy="14" r="4.2" fill={tone} fillOpacity="0.85" />
        {/* flames below */}
        <path
          d="M8 26 Q10 22, 12 26 Q14 23, 16 26 Q18 22, 20 26 Q22 23, 24 26 Q26 22, 28 26 Q30 23, 32 26 L32 32 L8 32 Z"
          fill={tone}
          fillOpacity="0.35"
        />
        <path
          d="M10 30 Q12 27, 14 30 Q16 27, 18 30 Q20 27, 22 30 Q24 27, 26 30 Q28 27, 30 30"
          stroke={tone}
          strokeWidth="1.4"
          fill="none"
        />
      </>
    ),
    "dry-item": (
      <>
        {/* wok */}
        <path
          d="M4 16 Q4 32, 20 32 Q36 32, 36 16 Z"
          fill={tone}
          fillOpacity="0.18"
          stroke={tone}
          strokeWidth="2"
          strokeLinejoin="round"
        />
        <line x1="34" y1="14" x2="38" y2="10" stroke={tone} strokeWidth="2" strokeLinecap="round" />
        {/* chicken pieces */}
        <circle cx="14" cy="22" r="3" fill={tone} />
        <circle cx="22" cy="20" r="3.4" fill={tone} />
        <circle cx="27" cy="24" r="2.6" fill={tone} />
        <circle cx="17" cy="26" r="2.4" fill={tone} />
      </>
    ),
    chinese: (
      <>
        {/* bowl */}
        <path
          d="M5 17 Q5 32, 20 32 Q35 32, 35 17 Z"
          fill={tone}
          fillOpacity="0.18"
          stroke={tone}
          strokeWidth="2"
          strokeLinejoin="round"
        />
        {/* chopsticks */}
        <line x1="26" y1="4" x2="32" y2="18" stroke={tone} strokeWidth="1.8" strokeLinecap="round" />
        <line x1="30" y1="4" x2="34" y2="18" stroke={tone} strokeWidth="1.8" strokeLinecap="round" />
        {/* noodles loop */}
        <path
          d="M9 18 Q12 14, 16 17 Q20 13, 24 17 Q28 14, 31 18"
          stroke={tone}
          strokeWidth="1.5"
          fill="none"
          strokeLinecap="round"
        />
      </>
    ),
    rice: (
      <>
        {/* bowl */}
        <path
          d="M5 18 Q5 32, 20 32 Q35 32, 35 18 Z"
          fill={tone}
          fillOpacity="0.18"
          stroke={tone}
          strokeWidth="2"
          strokeLinejoin="round"
        />
        {/* rice mound */}
        <path
          d="M7 18 Q12 10, 20 9 Q28 10, 33 18 Z"
          fill={tone}
          fillOpacity="0.7"
        />
        {/* grains */}
        <ellipse cx="14" cy="14" rx="1.2" ry="2.4" fill={tone} transform="rotate(-25 14 14)" />
        <ellipse cx="20" cy="11" rx="1.2" ry="2.4" fill={tone} />
        <ellipse cx="26" cy="14" rx="1.2" ry="2.4" fill={tone} transform="rotate(25 26 14)" />
      </>
    ),
    tandoori: (
      <>
        {/* nan oval shape */}
        <path
          d="M8 12 Q4 20, 12 30 Q20 36, 30 30 Q38 22, 32 12 Q24 8, 20 10 Q14 8, 8 12 Z"
          fill={tone}
          fillOpacity="0.25"
          stroke={tone}
          strokeWidth="2"
          strokeLinejoin="round"
        />
        {/* char spots */}
        <circle cx="14" cy="20" r="1.5" fill={tone} />
        <circle cx="22" cy="16" r="1.2" fill={tone} />
        <circle cx="26" cy="24" r="1.5" fill={tone} />
        <circle cx="18" cy="27" r="1" fill={tone} />
      </>
    ),
    burgers: (
      <>
        {/* top bun */}
        <path
          d="M6 18 Q6 10, 20 10 Q34 10, 34 18 Z"
          fill={tone}
          fillOpacity="0.7"
        />
        {/* sesame */}
        <ellipse cx="14" cy="14" rx="1" ry="1.5" fill={tone === "currentColor" ? "white" : tone} fillOpacity="0.6" />
        <ellipse cx="20" cy="12" rx="1" ry="1.5" fill={tone === "currentColor" ? "white" : tone} fillOpacity="0.6" />
        <ellipse cx="26" cy="14" rx="1" ry="1.5" fill={tone === "currentColor" ? "white" : tone} fillOpacity="0.6" />
        {/* lettuce */}
        <path d="M5 19 Q9 17, 13 19 Q17 17, 21 19 Q25 17, 29 19 Q33 17, 35 19 L35 22 L5 22 Z" fill={tone} fillOpacity="0.35" />
        {/* patty */}
        <rect x="5" y="22" width="30" height="4" fill={tone} />
        {/* bottom bun */}
        <path d="M5 26 L35 26 Q34 32, 20 32 Q6 32, 5 26 Z" fill={tone} fillOpacity="0.7" />
      </>
    ),
    steaks: (
      <>
        {/* plate */}
        <ellipse cx="20" cy="24" rx="16" ry="6" fill={tone} fillOpacity="0.2" stroke={tone} strokeWidth="1.5" />
        {/* steak shape */}
        <path
          d="M9 22 Q11 17, 18 16 Q26 15, 31 19 Q33 23, 28 25 Q22 27, 14 26 Q9 25, 9 22 Z"
          fill={tone}
        />
        {/* grill marks */}
        <line x1="14" y1="19" x2="26" y2="23" stroke={tone === "currentColor" ? "rgba(255,255,255,0.4)" : "white"} strokeWidth="0.8" opacity="0.5" />
        <line x1="17" y1="18" x2="29" y2="22" stroke={tone === "currentColor" ? "rgba(255,255,255,0.4)" : "white"} strokeWidth="0.8" opacity="0.5" />
      </>
    ),
    broast: (
      <>
        {/* drumstick */}
        <ellipse cx="24" cy="14" rx="9" ry="7" fill={tone} transform="rotate(-22 24 14)" />
        {/* bone */}
        <rect x="6" y="22" width="14" height="3" rx="1.5" fill={tone} fillOpacity="0.5" transform="rotate(-22 13 23)" />
        <circle cx="6" cy="28" r="2" fill={tone} fillOpacity="0.5" />
        <circle cx="9" cy="30" r="2" fill={tone} fillOpacity="0.5" />
        {/* crispy bumps */}
        <circle cx="20" cy="11" r="1" fill={tone === "currentColor" ? "rgba(255,255,255,0.4)" : "white"} opacity="0.5" />
        <circle cx="26" cy="10" r="0.8" fill={tone === "currentColor" ? "rgba(255,255,255,0.4)" : "white"} opacity="0.5" />
        <circle cx="28" cy="16" r="1" fill={tone === "currentColor" ? "rgba(255,255,255,0.4)" : "white"} opacity="0.5" />
      </>
    ),
    salad: (
      <>
        {/* bowl */}
        <path
          d="M5 18 Q5 30, 20 30 Q35 30, 35 18 Z"
          fill={tone}
          fillOpacity="0.18"
          stroke={tone}
          strokeWidth="2"
          strokeLinejoin="round"
        />
        {/* leaves */}
        <path
          d="M11 18 Q9 10, 16 9 Q15 14, 16 17"
          fill={tone}
          fillOpacity="0.6"
        />
        <path
          d="M22 17 Q22 8, 29 11 Q26 15, 24 18"
          fill={tone}
          fillOpacity="0.7"
        />
        {/* tomato */}
        <circle cx="18" cy="18" r="2.5" fill={tone} />
      </>
    ),
    bar: (
      <>
        {/* chai cup */}
        <path
          d="M9 14 L31 14 L29 30 Q28 33, 20 33 Q12 33, 11 30 Z"
          fill={tone}
          fillOpacity="0.2"
          stroke={tone}
          strokeWidth="2"
          strokeLinejoin="round"
        />
        {/* handle */}
        <path
          d="M31 18 Q36 18, 36 23 Q36 28, 31 28"
          stroke={tone}
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
        />
        {/* tea inside */}
        <ellipse cx="20" cy="14" rx="10.5" ry="2" fill={tone} fillOpacity="0.85" />
        {/* steam */}
        <path
          d="M14 7 Q14 4, 17 5 Q14 8, 17 10"
          stroke={tone}
          strokeWidth="1.6"
          fill="none"
          strokeLinecap="round"
        />
        <path
          d="M22 5 Q22 2, 25 3 Q22 6, 25 8"
          stroke={tone}
          strokeWidth="1.6"
          fill="none"
          strokeLinecap="round"
        />
      </>
    ),
    sweets: (
      <>
        {/* plate of gulab jamun */}
        <ellipse cx="20" cy="24" rx="16" ry="5" fill={tone} fillOpacity="0.18" stroke={tone} strokeWidth="1.5" />
        <circle cx="13" cy="22" r="4" fill={tone} />
        <circle cx="22" cy="20" r="4.5" fill={tone} />
        <circle cx="29" cy="24" r="3.5" fill={tone} />
        {/* sheen */}
        <ellipse cx="12" cy="20" rx="1.5" ry="1" fill={tone === "currentColor" ? "rgba(255,255,255,0.5)" : "white"} opacity="0.5" />
        <ellipse cx="21" cy="18" rx="1.5" ry="1" fill={tone === "currentColor" ? "rgba(255,255,255,0.5)" : "white"} opacity="0.5" />
      </>
    ),
    "ice-cream": (
      <>
        {/* cone */}
        <path d="M14 18 L26 18 L20 36 Z" fill={tone} fillOpacity="0.5" stroke={tone} strokeWidth="1.5" strokeLinejoin="round" />
        {/* cone weave */}
        <line x1="15" y1="22" x2="25" y2="22" stroke={tone} strokeWidth="0.6" opacity="0.6" />
        <line x1="16" y1="26" x2="24" y2="26" stroke={tone} strokeWidth="0.6" opacity="0.6" />
        <line x1="17" y1="30" x2="23" y2="30" stroke={tone} strokeWidth="0.6" opacity="0.6" />
        {/* scoop */}
        <circle cx="20" cy="13" r="7" fill={tone} />
        {/* highlight */}
        <ellipse cx="17" cy="11" rx="2" ry="1.4" fill={tone === "currentColor" ? "rgba(255,255,255,0.4)" : "white"} opacity="0.55" />
      </>
    ),
    traditional: (
      <>
        {/* clay pot — handi for painda */}
        <ellipse cx="20" cy="14" rx="13" ry="2.5" fill={tone} fillOpacity="0.35" />
        <path
          d="M7 14 Q7 30, 20 32 Q33 30, 33 14"
          fill={tone}
          fillOpacity="0.85"
          stroke={tone}
          strokeWidth="1.5"
        />
        <path
          d="M9 14 Q9 28, 20 30 Q31 28, 31 14"
          stroke={tone === "currentColor" ? "rgba(255,255,255,0.25)" : "white"}
          strokeWidth="1"
          fill="none"
          opacity="0.5"
        />
        {/* lid handle */}
        <rect x="17" y="6" width="6" height="2" rx="1" fill={tone} />
        <rect x="18" y="8" width="4" height="2" rx="1" fill={tone} />
        {/* steam */}
        <path
          d="M14 4 Q14 1, 17 2 Q14 5, 17 7"
          stroke={tone}
          strokeWidth="1.4"
          fill="none"
          strokeLinecap="round"
          opacity="0.6"
        />
        <path
          d="M22 4 Q22 1, 25 2 Q22 5, 25 7"
          stroke={tone}
          strokeWidth="1.4"
          fill="none"
          strokeLinecap="round"
          opacity="0.6"
        />
      </>
    ),
  };

  return (
    <svg viewBox="0 0 40 40" className={cn("h-10 w-10", className)} aria-hidden>
      {paths[variant]}
    </svg>
  );
}

/* Mapping from menu-category id → dish-icon variant. */
export const categoryIcon: Record<string, Variant> = {
  soup: "soup",
  "dry-item": "dry-item",
  chinese: "chinese",
  bbq: "bbq",
  rice: "rice",
  tandoori: "tandoori",
  burgers: "burgers",
  steaks: "steaks",
  broast: "broast",
  salad: "salad",
  bar: "bar",
  sweets: "sweets",
  "ice-cream": "ice-cream",
  traditional: "traditional",
};
