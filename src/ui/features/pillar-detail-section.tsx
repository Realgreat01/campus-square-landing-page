import { ArrowRight, Store, Utensils, Wrench } from "lucide-react";
import { Link } from "@/components/ui/link";
import Container from "@/components/container";
import { WAITLIST_HREF } from "@/lib/navigation";
import { cn } from "@/lib/utils";
import type { PillarAccent, PillarIconKey } from "@/consts/content";
import type { PillarDetail } from "./features-data";
import {
  CampusChowVisual,
  MarketSquareVisual,
  ServiceSquareVisual,
} from "./feature-visuals";

const pillarIcons: Record<PillarIconKey, typeof Utensils> = {
  bowl: Utensils,
  store: Store,
  wrench: Wrench,
};

const accentStyles: Record<
  PillarAccent,
  { tile: string; soft: string; text: string; glow: string; rule: string }
> = {
  chili: {
    tile: "bg-chow text-white",
    soft: "bg-orange-50 text-chow dark:bg-orange-950/40 dark:text-orange-400",
    text: "text-chow",
    glow: "bg-orange-100 dark:bg-orange-950/40",
    rule: "bg-chow",
  },
  gold: {
    tile: "bg-market text-white",
    soft: "bg-emerald-50 text-emerald-600 dark:bg-emerald-950/40 dark:text-emerald-400",
    text: "text-emerald-600 dark:text-emerald-400",
    glow: "bg-emerald-100 dark:bg-emerald-950/40",
    rule: "bg-market",
  },
  sage: {
    tile: "bg-service text-white",
    soft: "bg-violet-50 text-service dark:bg-violet-950/40 dark:text-violet-400",
    text: "text-service dark:text-violet-400",
    glow: "bg-violet-100 dark:bg-violet-950/40",
    rule: "bg-service",
  },
};

function DetailVisual({ visual }: { visual: PillarDetail["visual"] }) {
  switch (visual) {
    case "chow":
      return <CampusChowVisual />;
    case "market":
      return <MarketSquareVisual />;
    case "service":
      return <ServiceSquareVisual />;
  }
}

export default function PillarDetailSection({
  detail,
  index,
}: {
  detail: PillarDetail;
  index: number;
}) {
  const Icon = pillarIcons[detail.icon];
  const accent = accentStyles[detail.accent];
  const reversed = index % 2 === 1;

  return (
    <section
      id={detail.id}
      className="border-border/70 scroll-mt-24 border-t py-16 lg:py-24"
    >
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div className={cn(reversed && "lg:order-2")}>
            <div className="flex items-center gap-3">
              <span
                className={cn(
                  "grid size-11 place-items-center rounded-2xl shadow-sm",
                  accent.tile,
                )}
              >
                <Icon className="size-5" />
              </span>
              <div>
                <p className="text-muted-foreground text-[0.65rem] font-bold tracking-[0.12em] uppercase">
                  {detail.number} — {detail.kicker}
                </p>
                <p className="text-sm font-bold">{detail.name}</p>
              </div>
            </div>

            <h2 className="font-heading mt-6 text-3xl font-extrabold tracking-[-0.03em] text-balance sm:text-4xl lg:text-[2.8rem] lg:leading-[1.06]">
              {detail.heading}
            </h2>
            <p className="text-muted-foreground mt-4 max-w-xl text-base leading-relaxed text-pretty">
              {detail.description}
            </p>

            <div className="mt-9 grid gap-x-7 gap-y-6 sm:grid-cols-2">
              {detail.features.map((feature) => {
                const FeatureIcon = feature.icon;
                return (
                  <div key={feature.title} className="flex gap-3">
                    <span
                      className={cn(
                        "grid size-9 shrink-0 place-items-center rounded-xl",
                        accent.soft,
                      )}
                    >
                      <FeatureIcon className="size-4" />
                    </span>
                    <div>
                      <h3 className="text-sm font-bold">{feature.title}</h3>
                      <p className="text-muted-foreground mt-1 text-[0.82rem] leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            <Link
              href={WAITLIST_HREF}
              className={cn(
                "mt-9 inline-flex items-center gap-1.5 text-sm font-bold transition-opacity hover:opacity-75",
                accent.text,
              )}
            >
              Get early access to {detail.name}
              <ArrowRight className="size-4" />
            </Link>
          </div>

          <div
            className={cn(
              "relative",
              reversed ? "lg:order-1" : "lg:justify-self-end",
            )}
          >
            <div
              aria-hidden="true"
              className={cn(
                "absolute top-1/2 left-1/2 size-[80%] -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl",
                accent.glow,
              )}
            />
            <div className="relative">
              <DetailVisual visual={detail.visual} />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
