import type { Metadata } from "next";
import { MenuExplorer } from "@/components/menu/MenuExplorer";

export const metadata: Metadata = {
  title: "Menu — Aamir Cafe Restaurant",
  description:
    "Full menu — Painda platters, BBQ, Chinese, soups, tandoori, fast food, sweets and bar items. Prices in PKR.",
};

export default function MenuPage() {
  return <MenuExplorer />;
}
