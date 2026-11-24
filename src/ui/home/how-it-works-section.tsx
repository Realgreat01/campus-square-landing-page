import { ArrowRight, BadgeCheck, MapPin, Sparkles } from "lucide-react";
import { Link } from "@/components/ui/link";
import Container from "@/components/container";
import { buttonVariants } from "@/components/ui/button";
import { HOW_IT_WORKS } from "@/consts/content";
import { WAITLIST_HREF } from "@/lib/navigation";
import { cn } from "@/lib/utils";

const stepIcons = [BadgeCheck, MapPin, Sparkles];
const stepTiles = [
  "bg-blue-500/15 text-blue-300",
  "bg-emerald-500/15 text-emerald-300",
  "bg-violet-500/15 text-violet-300",
];

export default function HowItWorksSection() {
  return (
    <section
      id="how-it-works"
      className="bg-forest text-cream relative overflow-hidden py-20 lg:py-28"
    >
      <div
        aria-hidden="true"
        className="bg-dot-grid-light pointer-events-none absolute inset-0 opacity-20"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-0 -right-20 size-80 rounded-full bg-blue-500/15 blur-3xl"
      />

      <Container className="relative">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <span className="border-cream/20 text-cream/70 inline-flex items-center gap-2 rounded-full border px-3.5 py-1.5 text-[0.68rem] font-semibold tracking-[0.16em] uppercase">
              <span className="size-1.5 rounded-full bg-blue-400" />
              How it works
            </span>
            <h2 className="font-heading mt-5 text-3xl font-extrabold tracking-[-0.025em] text-balance sm:text-4xl lg:text-[2.75rem] lg:leading-[1.08]">
              Two minutes to set up.
              <span className="block text-blue-300">
                Then campus gets easier.
              </span>
            </h2>
          </div>
          <Link
            href={WAITLIST_HREF}
            className={cn(
              buttonVariants({ size: "lg" }),
              "h-12 w-full shrink-0 rounded-full bg-white px-6 text-sm font-semibold text-slate-900 hover:bg-slate-100 sm:w-auto",
            )}
          >
            Get early access
            <ArrowRight className="size-4" />
          </Link>
        </div>

        <ol className="mt-12 grid gap-4 md:grid-cols-3 lg:mt-16">
          {HOW_IT_WORKS.map((item, index) => {
            const Icon = stepIcons[index] ?? Sparkles;
            return (
              <li
                key={item.step}
                className="border-cream/15 bg-cream/[0.045] relative flex flex-col rounded-[1.6rem] border p-6 backdrop-blur-sm sm:p-7"
              >
                <div className="flex items-center justify-between">
                  <span
                    className={cn(
                      "grid size-11 place-items-center rounded-xl",
                      stepTiles[index] ?? stepTiles[0],
                    )}
                  >
                    <Icon className="size-5" />
                  </span>
                  <span className="font-heading text-3xl font-extrabold text-white/15">
                    {item.step}
                  </span>
                </div>
                <h3 className="font-heading mt-6 text-xl font-bold">
                  {item.title}
                </h3>
                <p className="text-cream/65 mt-2.5 text-sm leading-relaxed">
                  {item.description}
                </p>
              </li>
            );
          })}
        </ol>

        <p className="text-cream/50 mt-8 text-center text-xs">
          No downloads required at launch. Your campus, your profile, your
          wallet — all in one place.
        </p>
      </Container>
    </section>
  );
}
