import { ArrowRight, Check, ShieldCheck } from "lucide-react";
import { Link } from "@/components/ui/link";
import Container from "@/components/container";
import { buttonVariants } from "@/components/ui/button";
import { WAITLIST_HREF } from "@/lib/navigation";
import { cn } from "@/lib/utils";
import HeroVisual from "./hero-visual";

const proofPoints = [
  "Student-verified",
  "Escrow-protected",
  "One wallet everywhere",
];

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-48 -right-40 size-[38rem] rounded-full bg-blue-100/80 blur-3xl dark:bg-blue-950/40"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-48 -left-40 size-[26rem] rounded-full bg-violet-100/60 blur-3xl dark:bg-violet-950/30"
      />

      <Container className="relative">
        <div className="grid items-center gap-14 py-14 sm:py-20 lg:grid-cols-[1.02fr_0.98fr] lg:gap-10 lg:py-24">
          <div className="flex flex-col items-start">
            <span className="border-primary/15 bg-secondary text-primary dark:border-border inline-flex items-center gap-2 rounded-full border px-3.5 py-1.5 text-[0.68rem] font-bold tracking-[0.12em] uppercase shadow-sm dark:text-blue-300">
              <ShieldCheck className="size-3.5" />
              Unified campus account
            </span>

            <h1 className="font-heading mt-6 text-[2.8rem] leading-[1.02] font-extrabold tracking-[-0.035em] text-balance sm:text-6xl lg:text-[4.15rem]">
              One campus account.
              <span className="text-primary block">Everything you need.</span>
            </h1>

            <p className="text-muted-foreground mt-6 max-w-xl text-base leading-relaxed text-pretty sm:text-lg">
              CampuzSquare brings food, finds, and everyday favors together in
              one student-verified account — Campus Chow, Market Square, and
              Service Square. Order ahead, trade down the hall, and book trusted
              help without bouncing between five group chats.
            </p>

            <div className="mt-8 flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:items-center">
              <Link
                href={WAITLIST_HREF}
                className={cn(
                  buttonVariants({ size: "lg" }),
                  "bg-primary text-primary-foreground hover:bg-primary/90 h-12 w-full rounded-full px-6 text-sm font-semibold shadow-sm sm:w-auto",
                )}
              >
                Join the waitlist
                <ArrowRight className="size-4" />
              </Link>
              <Link
                href="/features"
                className={cn(
                  buttonVariants({ variant: "outline", size: "lg" }),
                  "border-border bg-card text-foreground hover:bg-muted h-12 w-full rounded-full px-6 text-sm sm:w-auto",
                )}
              >
                Explore the platform
              </Link>
            </div>

            <ul className="text-muted-foreground mt-8 flex flex-col gap-2.5 text-sm sm:flex-row sm:flex-wrap sm:gap-x-5">
              {proofPoints.map((point) => (
                <li key={point} className="flex items-center gap-2">
                  <span className="bg-primary/10 text-primary grid size-4 place-items-center rounded-full">
                    <Check className="size-2.5" strokeWidth={3} />
                  </span>
                  {point}
                </li>
              ))}
            </ul>
          </div>

          <div className="relative lg:pl-4">
            <HeroVisual />
          </div>
        </div>
      </Container>
    </section>
  );
}
