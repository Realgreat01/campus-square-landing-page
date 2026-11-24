import type { Metadata } from "next";
import FeaturesHero from "@/ui/features/features-hero";
import PillarDetailSection from "@/ui/features/pillar-detail-section";
import FoundationSection from "@/ui/features/foundation-section";
import FeaturesCta from "@/ui/features/features-cta";
import { PILLAR_DETAILS } from "@/ui/features/features-data";

export const metadata: Metadata = {
  title: "Features",
  description:
    "Explore CampuzSquare: Campus Chow for order-ahead food, Market Square for verified student buy-and-sell, and Service Square for bookable everyday services — all in one student-verified account.",
  alternates: {
    canonical: "/features",
  },
  openGraph: {
    title: "Features — CampuzSquare",
    description:
      "Food, finds, and everyday favors — three connected marketplaces built for campus life.",
    url: "/features",
  },
};

export default function FeaturesPage() {
  return (
    <main id="top" className="flex-1">
      <FeaturesHero />

      {PILLAR_DETAILS.map((detail, index) => (
        <PillarDetailSection key={detail.id} detail={detail} index={index} />
      ))}

      <FoundationSection />
      <FeaturesCta />
    </main>
  );
}
