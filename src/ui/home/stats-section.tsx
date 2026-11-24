import Container from "@/components/container";

const stats = [
  {
    value: "01",
    label: "student profile",
    description:
      "Verify once, then move between all three squares without another login.",
  },
  {
    value: "03",
    label: "connected marketplaces",
    description:
      "Food, finds, and favors share a feed, a wallet, and a campus map.",
  },
  {
    value: "00",
    label: "extra apps to juggle",
    description:
      "No more group-chat hunting, screenshot menus, or cash-only meetups.",
  },
];

export default function StatsSection() {
  return (
    <section className="border-border/70 bg-card/60 border-y">
      <Container>
        <div className="divide-border/70 grid divide-y py-10 sm:grid-cols-3 sm:divide-x sm:divide-y-0 sm:py-12">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col gap-1 py-6 first:pt-0 last:pb-0 sm:px-8 sm:py-0 sm:first:pl-0 sm:last:pr-0"
            >
              <p className="font-heading text-ink dark:text-foreground text-4xl font-extrabold tracking-tight lg:text-5xl">
                {stat.value}
                <span className="text-chili">.</span>
              </p>
              <p className="text-muted-foreground text-[0.7rem] font-semibold tracking-[0.16em] uppercase">
                {stat.label}
              </p>
              <p className="text-muted-foreground mt-1.5 max-w-xs text-sm leading-relaxed">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
