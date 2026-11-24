import { ArrowRight, Check, Ticket } from "lucide-react";
import { Link } from "@/components/ui/link";
import Container from "@/components/container";
import { buttonVariants } from "@/components/ui/button";
import { WAITLIST_HREF } from "@/lib/navigation";
import { cn } from "@/lib/utils";

const perks = [
  "First access when your campus goes live",
  "Founding student badge on your profile",
  "A say in which vendors and services launch first",
];

export default function CtaSection() {
  return (
    <section className="pb-20 lg:pb-28">
      <Container>
        <div className="from-primary to-core-deep shadow-card relative overflow-hidden rounded-[2rem] bg-gradient-to-br via-blue-600 px-6 py-12 text-white sm:px-10 sm:py-14 lg:px-14 lg:py-16">
          <div
            aria-hidden="true"
            className="bg-dot-grid-light pointer-events-none absolute inset-0 opacity-25"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-24 -right-24 size-72 rounded-full bg-blue-300/25 blur-3xl"
          />

          <div className="relative grid items-center gap-10 lg:grid-cols-[1.15fr_0.85fr]">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-3.5 py-1.5 text-[0.68rem] font-bold tracking-[0.12em] text-blue-100 uppercase">
                <span className="size-1.5 rounded-full bg-orange-300" />
                The waitlist is open
              </span>
              <h2 className="font-heading mt-5 max-w-xl text-3xl font-extrabold tracking-[-0.03em] text-balance sm:text-4xl lg:text-[3.1rem] lg:leading-[1.03]">
                Be first through
                <span className="block text-blue-100">the door.</span>
              </h2>
              <p className="mt-4 max-w-lg text-base leading-relaxed text-pretty text-blue-100/80">
                Join students, vendors, and campus teams already lining up for
                launch. We onboard one campus at a time — the earliest names get
                the keys.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href={WAITLIST_HREF}
                  className={cn(
                    buttonVariants({ size: "lg" }),
                    "text-primary h-12 w-full rounded-full bg-white px-6 text-sm font-semibold hover:bg-blue-50 sm:w-auto",
                  )}
                >
                  Join the waitlist
                  <ArrowRight className="size-4" />
                </Link>
                <Link
                  href="/features"
                  className={cn(
                    buttonVariants({ variant: "outline", size: "lg" }),
                    "h-12 w-full rounded-full border-white/30 bg-transparent px-6 text-sm font-semibold text-white hover:bg-white/10 hover:text-white sm:w-auto",
                  )}
                >
                  See what’s inside
                </Link>
              </div>
            </div>

            <div className="shadow-overlay relative mx-auto w-full max-w-xs rotate-1 rounded-2xl border-2 border-dashed border-slate-300 bg-white p-5 text-slate-900">
              <div className="flex items-center justify-between">
                <span className="text-forest/60 flex items-center gap-2 text-[0.65rem] font-semibold tracking-[0.16em] uppercase">
                  <Ticket className="size-3.5" />
                  Early access pass
                </span>
                <span className="bg-forest text-cream rounded-full px-2.5 py-1 text-[0.6rem] font-semibold">
                  #001
                </span>
              </div>
              <p className="font-heading mt-5 text-2xl leading-tight font-semibold">
                CampuzSquare
                <span className="text-chow block">founding student</span>
              </p>
              <ul className="border-forest/20 mt-5 space-y-2.5 border-t border-dashed pt-4">
                {perks.map((perk) => (
                  <li
                    key={perk}
                    className="text-forest/75 flex items-start gap-2 text-[0.72rem] leading-snug"
                  >
                    <span className="bg-forest/10 mt-0.5 grid size-4 shrink-0 place-items-center rounded-full">
                      <Check className="size-2.5" strokeWidth={3} />
                    </span>
                    {perk}
                  </li>
                ))}
              </ul>
              <p className="border-forest/20 text-forest/45 mt-5 border-t border-dashed pt-3 text-[0.6rem] font-medium tracking-[0.14em] uppercase">
                One campus · One profile · Three squares
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
