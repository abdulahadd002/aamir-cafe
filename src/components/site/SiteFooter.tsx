import Link from "next/link";
import { Logo, Wordmark } from "@/components/brand/Logo";
import { phone, region } from "@/data/menu";

const columns = [
  {
    title: "Visit",
    items: [
      { label: "Find us", href: "/#visit" },
      { label: "Family hall booking", href: "/#visit" },
      { label: "Takeaway", href: "/#visit" },
    ],
  },
  {
    title: "Menu",
    items: [
      { label: "Traditional & Painda", href: "/menu#traditional" },
      { label: "BBQ", href: "/menu#bbq" },
      { label: "Chinese", href: "/menu#chinese" },
      { label: "Fast food", href: "/menu#burgers" },
      { label: "Bar & sweets", href: "/menu#bar" },
    ],
  },
  {
    title: "Reach",
    items: [
      { label: phone, href: `tel:${phone.replace(/[^0-9+]/g, "")}` },
      { label: "Get directions", href: "/#visit" },
    ],
  },
];

export function SiteFooter() {
  return (
    <footer className="mt-32 border-t border-[var(--color-line)] bg-[var(--color-sand-50)]">
      <div className="mx-auto grid w-full max-w-[1280px] gap-12 px-5 py-16 md:grid-cols-[1.4fr_1fr_1fr_1fr] lg:px-10">
        <div className="space-y-5">
          <Link href="/" className="flex items-center gap-3">
            <Logo className="h-12 w-12" />
            <Wordmark />
          </Link>
          <p className="max-w-[28ch] text-[0.92rem] leading-relaxed text-[var(--color-slate-500)]">
            A family restaurant in the {region} — built on the food the region remembers, served the way it ought
            to be.
          </p>
        </div>

        {columns.map((col) => (
          <div key={col.title} className="space-y-4">
            <h3 className="text-[0.68rem] font-medium uppercase tracking-[0.22em] text-[var(--color-slate-400)]">
              {col.title}
            </h3>
            <ul className="space-y-2.5">
              {col.items.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="text-[0.92rem] text-[var(--color-slate-700)] transition-colors hover:text-[var(--color-saffron-500)]"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="border-t border-[var(--color-line)]">
        <div className="mx-auto flex w-full max-w-[1280px] flex-col items-start justify-between gap-3 px-5 py-6 text-[0.78rem] text-[var(--color-slate-400)] md:flex-row md:items-center lg:px-10">
          <span>© {new Date().getFullYear()} Aamir Cafe Restaurant. All rights reserved.</span>
          <span className="font-mono tabular-nums">{region}</span>
        </div>
      </div>
    </footer>
  );
}
