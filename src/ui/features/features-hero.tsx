import {
  ArrowDown,
  BadgeCheck,
  LayoutGrid,
  Store,
  Utensils,
  Wrench,
} from "lucide-react";
import { Link } from "@/components/ui/link";
import Container from "@/components/container";
import { PILLARS, type PillarIconKey } from "@/consts/content";
import { cn } from "@/lib/utils";

const pillarIcons: Record<PillarIconKey, typeof Utensils> = {
  bowl: Utensils,
  store: Store,
  wrench: Wrench,
};

const accentTile: Record<string, string> = {
  chili: "bg-chow text-white",
  gold: "bg-market text-white",
  sage: "bg-service text-white",
};

export default function FeaturesHero() {
  return (
    <section className="border-border/70 relative overflow-hidden border-b">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 -right-32 size-[30rem] rounded-full bg-blue-100/70 blur-3xl dark:bg-blue-950/40"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 -left-32 size-[24rem] rounded-full bg-violet-100/60 blur-3xl dark:bg-violet-950/30"
      />

      <Container className="relative">
        <div className="grid items-end gap-12 py-16 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16 lg:py-24">
          <div>
            <span
              className="border-primary/15 bg-secondary text-primary dark:border-border inline-flex items-center gap-2 rounded-full border px-3.5 py-1.5 text-[0.68rem] font-bold tracking-[0.12em] uppercase dark:text-blue-300"
              data-reveal="fade"
            >
              <LayoutGrid className="size-3.5" />
              The CampuzSquare platform
            </span>

            <h1
              className="font-heading mt-6 text-[2.7rem] leading-[1.03] font-extrabold tracking-[-0.035em] text-balance sm:text-5xl lg:text-[3.85rem]"
              data-reveal="up"
              data-reveal-delay={0.08}
            >
              Three squares.
              <span className="text-primary block">
                One ridiculously useful app.
              </span>
            </h1>

            <p
              className="text-muted-foreground mt-6 max-w-xl text-base leading-relaxed text-pretty sm:text-lg"
              data-reveal="up"
              data-reveal-delay={0.16}
            >
              Food, secondhand finds, and everyday services shouldn’t live in
              three different apps and five group chats. Here’s exactly what
              lives inside CampuzSquare — and why each square earns its place.
            </p>

            <div
              className="mt-8 flex flex-wrap gap-2.5"
              data-reveal="up"
              data-reveal-delay={0.24}
            >
              {PILLARS.map((pillar) => {
                const Icon = pillarIcons[pillar.icon];
                return (
                  <Link
                    key={pillar.id}
                    href={`#${pillar.id}`}
                    className="group border-border bg-card text-foreground hover:bg-muted inline-flex items-center gap-2 rounded-full border py-1.5 pr-4 pl-1.5 text-sm font-semibold transition-colors"
                  >
                    <span
                      className={cn(
                        "grid size-7 place-items-center rounded-full",
                        accentTile[pillar.accent],
                      )}
                    >
                      <Icon className="size-3.5" />
                    </span>
                    {pillar.name}
                    <ArrowDown className="text-muted-foreground size-3.5 transition-transform group-hover:translate-y-0.5" />
                  </Link>
                );
              })}
            </div>
          </div>

          <div
            className="relative"
            data-reveal="scale"
            data-reveal-delay={0.2}
            data-reveal-duration={0.9}
          >
            <div className="bg-forest shadow-card rounded-2xl border border-slate-800 p-6 text-white sm:p-7">
              <div className="flex items-center justify-between">
                <p className="text-[0.65rem] font-bold tracking-[0.14em] text-slate-400 uppercase">
                  At a glance
                </p>
                <span className="flex items-center gap-1 rounded-full bg-emerald-400/15 px-2.5 py-1 text-[0.58rem] font-bold text-emerald-300">
                  <BadgeCheck className="size-3" />
                  Student verified
                </span>
              </div>
              <p className="font-heading mt-3 text-2xl leading-tight font-extrabold tracking-tight">
                One profile.
                <span className="block text-blue-300">
                  Three ways to use it.
                </span>
              </p>

              <ul className="mt-6 space-y-3">
                {PILLARS.map((pillar) => {
                  const Icon = pillarIcons[pillar.icon];
                  return (
                    <li
                      key={pillar.id}
                      className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.04] px-3.5 py-3"
                    >
                      <span className="grid size-9 place-items-center rounded-xl bg-white/10 text-blue-300">
                        <Icon className="size-4" />
                      </span>
                      <div className="flex-1">
                        <p className="text-[0.78rem] font-semibold">
                          {pillar.name}
                        </p>
                        <p className="text-[0.62rem] text-slate-400">
                          {pillar.tagline}
                        </p>
                      </div>
                      <span className="text-[0.58rem] font-bold tracking-[0.1em] text-slate-500 uppercase">
                        {pillar.kicker}
                      </span>
                    </li>
                  );
                })}
              </ul>

              <p className="mt-5 flex items-center gap-2 text-[0.62rem] text-slate-400">
                <span className="relative flex size-2">
                  <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400/70" />
                  <span className="relative inline-flex size-2 rounded-full bg-emerald-400" />
                </span>
                Now onboarding campuses for Spring 2026
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
