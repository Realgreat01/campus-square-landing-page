import type { Metadata } from "next";
import Container from "@/components/container";
import WaitlistIntro from "@/ui/waitlist/waitlist-intro";
import WaitlistForm from "@/ui/waitlist/waitlist-form";

export const metadata: Metadata = {
  title: "Join the waitlist",
  description:
    "Be first through the door. Join the CampuzSquare waitlist for early access to Campus Chow food delivery, Market Square’s verified student marketplace, and Service Square bookings.",
  alternates: {
    canonical: "/waitlist",
  },
  openGraph: {
    title: "Join the CampuzSquare waitlist",
    description:
      "Early access to food, finds, and favors at your campus. One student account, three marketplaces.",
    url: "/waitlist",
  },
};

export default function WaitlistPage() {
  return (
    <main id="top" className="flex-1">
      <section className="relative overflow-hidden">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-40 -right-40 size-[36rem] rounded-full bg-blue-100/80 blur-3xl dark:bg-blue-950/40"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute bottom-0 -left-32 size-[26rem] rounded-full bg-violet-100/60 blur-3xl dark:bg-violet-950/30"
        />

        <Container className="relative">
          <div className="grid items-start gap-12 py-14 sm:py-16 lg:grid-cols-[1fr_1.02fr] lg:gap-16 lg:py-20">
            <WaitlistIntro />
            <div className="lg:sticky lg:top-28">
              <WaitlistForm />
              <p className="text-muted-foreground mt-4 text-center text-xs">
                Already joined? Watch your inbox for your campus launch email.
              </p>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
