import type { Metadata } from "next";
import { Fraunces, Geist, Geist_Mono, Noto_Naskh_Arabic } from "next/font/google";
import { SiteNav } from "@/components/site/SiteNav";
import { SiteFooter } from "@/components/site/SiteFooter";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  axes: ["opsz", "SOFT", "WONK"],
  display: "swap",
});

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
  display: "swap",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  display: "swap",
});

const notoNaskh = Noto_Naskh_Arabic({
  subsets: ["arabic"],
  variable: "--font-noto-naskh",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Aamir Cafe Restaurant — Traditional, BBQ, Chinese & Bakery",
  description:
    "A family restaurant in the Mardan region serving traditional Painda platters, BBQ kababs, Chinese cuisine, fresh bakery and sweets. Dine-in, takeaway, family hall.",
  metadataBase: new URL("https://aamircafe.example"),
  openGraph: {
    title: "Aamir Cafe Restaurant",
    description:
      "Painda platters, BBQ, Chinese, bakery and sweets — served the way the region remembers.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${geist.variable} ${geistMono.variable} ${notoNaskh.variable}`}
    >
      <body className="min-h-[100dvh] bg-[var(--color-canvas)] text-[var(--color-ink)] antialiased">
        <SiteNav />
        <main>{children}</main>
        <SiteFooter />
        <div className="grain-overlay" aria-hidden />
      </body>
    </html>
  );
}
