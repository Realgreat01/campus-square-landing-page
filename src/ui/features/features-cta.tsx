import { ArrowRight, Mail } from "lucide-react";
import { Link } from "@/components/ui/link";
import Container from "@/components/container";
import { buttonVariants } from "@/components/ui/button";
import { WAITLIST_HREF } from "@/lib/navigation";
import { cn } from "@/lib/utils";

export default function FeaturesCta() {
  return (
    <section className="border-border/70 border-t pt-16 pb-20 lg:pt-20 lg:pb-28">
      <Container>
        <div
          className="from-primary to-core-deep shadow-card relative overflow-hidden rounded-[2rem] bg-gradient-to-br via-blue-600 px-6 py-12 text-center text-white sm:px-10 lg:px-14 lg:py-16"
          data-reveal="scale"
          data-reveal-duration={0.9}
        >
          <div
            aria-hidden="true"
            className="bg-dot-grid-light pointer-events-none absolute inset-0 opacity-20"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-20 -left-20 size-64 rounded-full bg-blue-300/20 blur-3xl"
          />
          <div className="relative mx-auto max-w-2xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3.5 py-1.5 text-[0.68rem] font-bold tracking-[0.12em] text-blue-100 uppercase">
              <span className="size-1.5 rounded-full bg-orange-300" />
              Bring it to your campus
            </span>
            <h2 className="font-heading mt-5 text-3xl font-extrabold tracking-[-0.03em] text-balance sm:text-4xl lg:text-[3rem] lg:leading-[1.05]">
              Campus life is better
              <span className="text-blue-100"> in one place.</span>
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-blue-100/80">
              Join the waitlist to get early access at your school, or talk to
              our campus team about launching with your dining program, student
              government, or local business.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
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
                href="mailto:campuses@campuzsquare.com"
                external
                className={cn(
                  buttonVariants({ variant: "outline", size: "lg" }),
                  "h-12 w-full rounded-full border-white/30 bg-transparent px-6 text-sm font-semibold text-white hover:bg-white/10 hover:text-white sm:w-auto",
                )}
              >
                <Mail className="size-4" />
                Email the campus team
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
