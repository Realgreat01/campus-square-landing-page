import { ArrowUpRight, Check, Store, Utensils, Wrench } from "lucide-react";
import { Link } from "@/components/ui/link";
import Container from "@/components/container";
import SectionHeading from "@/components/section-heading";
import {
  PILLARS,
  type PillarAccent,
  type PillarIconKey,
} from "@/consts/content";
import { cn } from "@/lib/utils";

const pillarIcons: Record<PillarIconKey, typeof Utensils> = {
  bowl: Utensils,
  store: Store,
  wrench: Wrench,
};

const accentStyles: Record<
  PillarAccent,
  { tile: string; check: string; glow: string; text: string }
> = {
  chili: {
    tile: "bg-chow text-white",
    check: "bg-orange-50 text-chow",
    glow: "bg-orange-100",
    text: "text-chow",
  },
  gold: {
    tile: "bg-market text-white",
    check: "bg-emerald-50 text-emerald-600",
    glow: "bg-emerald-100",
    text: "text-emerald-600 dark:text-emerald-400",
  },
  sage: {
    tile: "bg-service text-white",
    check: "bg-violet-50 text-service",
    glow: "bg-violet-100",
    text: "text-service dark:text-violet-400",
  },
};

export default function PillarsSection() {
  return (
    <section id="platform" className="border-border border-t py-20 lg:py-28">
      <Container>
        <SectionHeading
          eyebrow="Three squares, one login"
          title={
            <>
              One app. Everything <span className="text-primary">campus.</span>
            </>
          }
          description="CampuzSquare is three marketplaces that share a profile, a wallet, and a campus. Start with lunch, stay for the desk lamp, book the tutor — all without switching apps."
        />

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:mt-16 lg:grid-cols-3">
          {PILLARS.map((pillar, index) => {
            const Icon = pillarIcons[pillar.icon];
            const accent = accentStyles[pillar.accent];
            const featured = pillar.id === "market-square";

            return (
              <article
                key={pillar.id}
                id={pillar.id}
                className={cn(
                  "group shadow-card hover:shadow-float relative flex scroll-mt-28 flex-col overflow-hidden rounded-2xl border p-6 transition-all duration-300 hover:-translate-y-1 sm:p-7",
                  featured
                    ? "via-card to-card dark:via-card dark:to-card border-emerald-200 bg-gradient-to-b from-emerald-50/80 dark:border-emerald-900 dark:from-emerald-950/30"
                    : "border-border bg-card",
                )}
                data-reveal="up"
                data-reveal-delay={index * 0.08}
              >
                <div
                  aria-hidden="true"
                  className={cn(
                    "pointer-events-none absolute -top-12 -right-12 size-40 rounded-full opacity-60 blur-2xl",
                    accent.glow,
                  )}
                />

                <div className="relative flex items-start justify-between gap-3">
                  <span
                    className={cn(
                      "grid size-12 place-items-center rounded-xl shadow-sm",
                      accent.tile,
                    )}
                  >
                    <Icon className="size-5" />
                  </span>
                  {featured ? (
                    <span className="rounded-full border border-emerald-200 bg-emerald-50 px-2.5 py-1 text-[0.58rem] font-bold tracking-[0.1em] text-emerald-700 uppercase dark:border-emerald-800 dark:bg-emerald-950 dark:text-emerald-300">
                      Student favorite
                    </span>
                  ) : (
                    <span className="border-border bg-background text-muted-foreground rounded-full border px-2.5 py-1 text-[0.58rem] font-bold tracking-[0.1em] uppercase">
                      {pillar.kicker}
                    </span>
                  )}
                </div>

                <h3 className="font-heading relative mt-6 text-[1.6rem] font-extrabold tracking-tight">
                  {pillar.name}
                </h3>
                <p
                  className={cn(
                    "relative mt-1 text-sm font-semibold",
                    accent.text,
                  )}
                >
                  {pillar.tagline}
                </p>
                <p className="text-muted-foreground relative mt-3 text-sm leading-relaxed">
                  {pillar.description}
                </p>

                <ul className="border-border relative mt-6 space-y-2.5 border-t pt-5 text-sm">
                  {pillar.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-2.5">
                      <span
                        className={cn(
                          "mt-0.5 grid size-5 shrink-0 place-items-center rounded-full",
                          accent.check,
                        )}
                      >
                        <Check className="size-3" strokeWidth={3} />
                      </span>
                      <span className="text-foreground/80">{bullet}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href={pillar.href}
                  className={cn(
                    "relative mt-7 inline-flex items-center gap-1.5 text-sm font-bold transition-opacity hover:opacity-75",
                    accent.text,
                  )}
                >
                  Explore {pillar.name}
                  <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </article>
            );
          })}
        </div>

        <div className="mt-10 flex justify-center">
          <Link
            href="/features"
            className="border-border bg-card text-primary hover:bg-secondary dark:hover:bg-muted inline-flex items-center gap-2 rounded-full border px-5 py-2.5 text-sm font-semibold transition-colors"
            data-reveal="up"
            data-reveal-delay={0.1}
          >
            See every feature
            <ArrowUpRight className="size-4" />
          </Link>
        </div>
      </Container>
    </section>
  );
}
