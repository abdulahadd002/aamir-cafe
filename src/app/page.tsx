import { Hero } from "@/components/landing/Hero";
import { Marquee } from "@/components/landing/Marquee";
import { Signatures } from "@/components/landing/Signatures";
import { Categories } from "@/components/landing/Categories";
import { Platters } from "@/components/landing/Platters";
import { Visit } from "@/components/landing/Visit";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Marquee />
      <Signatures />
      <Categories />
      <Platters />
      <Visit />
    </>
  );
}
