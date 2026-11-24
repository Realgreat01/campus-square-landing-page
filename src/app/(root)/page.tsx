import HeroSection from "@/ui/home/hero-section";
import PillarsSection from "@/ui/home/pillars-section";
import HowItWorksSection from "@/ui/home/how-it-works-section";
import StatsSection from "@/ui/home/stats-section";
import TestimonialsSection from "@/ui/home/testimonials-section";
import FaqSection from "@/ui/home/faq-section";
import CtaSection from "@/ui/home/cta-section";

export default function Home() {
  return (
    <main id="top" className="flex-1">
      <HeroSection />
      <PillarsSection />
      <HowItWorksSection />
      <StatsSection />
      <TestimonialsSection />
      <FaqSection />
      <CtaSection />
    </main>
  );
}
