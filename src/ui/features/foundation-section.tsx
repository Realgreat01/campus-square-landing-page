import {
  Accessibility,
  Building2,
  MapPin,
  ShieldCheck,
  UserCheck,
  Wallet,
} from "lucide-react";
import Container from "@/components/container";
import SectionHeading from "@/components/section-heading";

const foundations = [
  {
    icon: UserCheck,
    title: "One verified profile",
    description:
      "A student email or campus affiliation unlocks the whole platform. No burner accounts, no mystery sellers, no cash-only strangers.",
  },
  {
    icon: MapPin,
    title: "Campus-scoped by design",
    description:
      "Your feed only shows what’s walkable, deliverable, or bookable from your school. No noise from three states away.",
  },
  {
    icon: Wallet,
    title: "One wallet everywhere",
    description:
      "Pay for lunch, the desk lamp, and Saturday’s move-in help from the same balance — with every fee shown upfront.",
  },
  {
    icon: ShieldCheck,
    title: "Safety that shows up",
    description:
      "Report a listing or a meetup and a real campus team responds. Reviews only come from completed transactions.",
  },
  {
    icon: Accessibility,
    title: "Accessible by default",
    description:
      "Keyboard-friendly flows, readable contrast, and motion that respects your settings — not bolted on later.",
  },
  {
    icon: Building2,
    title: "Small campuses welcome",
    description:
      "Built to work at a 1,200-student college, not just a 40,000-student state school. Density comes from campus, not scale.",
  },
];

export default function FoundationSection() {
  return (
    <section className="py-20 lg:py-28">
      <Container>
        <SectionHeading
          eyebrow="Shared foundation"
          title={
            <>
              The boring stuff that{" "}
              <span className="text-primary">makes it work.</span>
            </>
          }
          description="The three squares are the fun part. Underneath them is one identity, one wallet, and one set of campus rules that keeps everything simple and safe."
        />

        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:mt-16 lg:grid-cols-3">
          {foundations.map((foundation) => {
            const Icon = foundation.icon;
            return (
              <div
                key={foundation.title}
                className="border-border bg-card dark:hover:bg-muted rounded-2xl border p-6 transition-colors hover:bg-blue-50/60"
              >
                <span className="bg-primary/10 text-primary dark:bg-secondary dark:text-secondary-foreground grid size-10 place-items-center rounded-xl">
                  <Icon className="size-5" />
                </span>
                <h3 className="mt-4 text-base font-bold">{foundation.title}</h3>
                <p className="text-muted-foreground mt-2 text-sm leading-relaxed">
                  {foundation.description}
                </p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
