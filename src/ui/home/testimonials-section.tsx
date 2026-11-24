import { Quote, Star } from "lucide-react";
import Container from "@/components/container";
import SectionHeading from "@/components/section-heading";
import { cn } from "@/lib/utils";

const testimonials = [
  {
    quote:
      "I ordered between back-to-back labs and still made it to class with lunch. The pickup window was actual, not five minutes off like every other app.",
    name: "Maya R.",
    role: "Junior · State University",
    initials: "MR",
    accent: "bg-orange-50 text-chow",
  },
  {
    quote:
      "Sold my old mini fridge in a day to someone two floors up. No shipping, no sketchy parking lot meetup — just a verified student from my own building.",
    name: "Devon K.",
    role: "Senior · Northgate",
    initials: "DK",
    accent: "bg-emerald-50 text-emerald-600",
  },
  {
    quote:
      "Booked a stats tutor for Thursday night in about thirty seconds. Price was clear, reviews were from my campus, and it actually showed up in my calendar.",
    name: "Priya S.",
    role: "Graduate student · Lakeside",
    initials: "PS",
    accent: "bg-violet-50 text-service",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="py-20 lg:py-28">
      <Container>
        <SectionHeading
          eyebrow="From campus beta"
          title={
            <>
              Built with students,{" "}
              <span className="text-primary">not just for them.</span>
            </>
          }
          description="Feedback from our first pilot campuses shaped everything from pickup timing to how listings get verified. Here’s what early students told us."
        />

        <div className="mt-12 grid gap-5 md:grid-cols-3 lg:mt-16">
          {testimonials.map((testimonial, index) => (
            <figure
              key={testimonial.name}
              className="border-border bg-card shadow-card relative flex flex-col rounded-2xl border p-6 sm:p-7"
              data-reveal="up"
              data-reveal-delay={index * 0.1}
            >
              <Quote
                aria-hidden="true"
                className="text-forest/[0.08] dark:text-foreground/10 absolute top-6 right-6 size-8"
              />
              <div className="text-gold flex items-center gap-0.5">
                {Array.from({ length: 5 }, (_, index) => (
                  <Star key={index} className="size-3.5 fill-current" />
                ))}
              </div>
              <blockquote className="text-foreground/85 mt-4 text-[0.92rem] leading-relaxed text-pretty">
                “{testimonial.quote}”
              </blockquote>
              <figcaption className="border-border mt-6 flex items-center gap-3 border-t pt-5">
                <span
                  className={cn(
                    "grid size-10 place-items-center rounded-full text-xs font-semibold",
                    testimonial.accent,
                  )}
                >
                  {testimonial.initials}
                </span>
                <div>
                  <p className="text-sm font-bold">{testimonial.name}</p>
                  <p className="text-muted-foreground text-xs">
                    {testimonial.role}
                  </p>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </Container>
    </section>
  );
}
