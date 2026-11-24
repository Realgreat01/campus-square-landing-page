import { MessageCircle, Plus } from "lucide-react";
import { Link } from "@/components/ui/link";
import Container from "@/components/container";
import { HOME_FAQS } from "@/consts/content";
import {
  buildFaqPageSchema,
  serializeJsonLd,
  type FaqItem,
} from "@/lib/seo/schema";

export type { FaqItem };

export const faqs: FaqItem[] = HOME_FAQS.map((faq) => ({
  question: faq.question,
  answer: faq.answer,
}));

export default function FaqSection() {
  const faqSchema = buildFaqPageSchema(faqs);

  return (
    <section id="faq" className="border-border/70 border-t py-20 lg:py-28">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeJsonLd(faqSchema) }}
      />
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <span
              className="border-primary/15 bg-secondary text-primary dark:border-border inline-flex items-center gap-2 rounded-full border px-3.5 py-1.5 text-[0.68rem] font-bold tracking-[0.12em] uppercase dark:text-blue-300"
              data-reveal="up"
            >
              <span className="bg-chow size-1.5 rounded-full" />
              Common questions
            </span>
            <h2
              className="font-heading mt-5 text-3xl font-extrabold tracking-[-0.025em] text-balance sm:text-4xl lg:text-[2.75rem] lg:leading-[1.08]"
              data-reveal="up"
              data-reveal-delay={0.08}
            >
              Everything you’re <span className="text-primary">wondering.</span>
            </h2>
            <p
              className="text-muted-foreground mt-4 max-w-md text-base leading-relaxed"
              data-reveal="up"
              data-reveal-delay={0.16}
            >
              Straight answers about campuses, safety, pricing, and what launch
              actually looks like. Still curious? We’re a real inbox.
            </p>

            <div
              className="bg-forest shadow-card mt-8 max-w-sm rounded-2xl p-5 text-white"
              data-reveal="up"
              data-reveal-delay={0.24}
            >
              <div className="flex items-center gap-2.5">
                <span className="grid size-9 place-items-center rounded-xl bg-white/10 text-blue-300">
                  <MessageCircle className="size-4" />
                </span>
                <p className="text-sm font-bold">Talk to the campus team</p>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-slate-300">
                Questions about bringing CampuzSquare to your school?
              </p>
              <Link
                href="mailto:campuses@campuzsquare.com"
                external
                className="mt-3 inline-flex text-sm font-semibold text-blue-300 underline-offset-4 hover:underline"
              >
                campuses@campuzsquare.com
              </Link>
            </div>
          </div>

          <div
            className="divide-border border-border bg-card shadow-card divide-y overflow-hidden rounded-2xl border"
            data-reveal="up"
            data-reveal-delay={0.18}
          >
            {faqs.map((faq) => (
              <details key={faq.question} className="group px-5 sm:px-7">
                <summary className="text-foreground flex cursor-pointer list-none items-center justify-between gap-4 py-5 text-left text-[0.95rem] font-semibold [&::-webkit-details-marker]:hidden">
                  {faq.question}
                  <span className="border-border text-primary grid size-7 shrink-0 place-items-center rounded-full border transition-transform duration-200 group-open:rotate-45">
                    <Plus className="size-3.5" />
                  </span>
                </summary>
                <p className="text-muted-foreground max-w-2xl pr-8 pb-6 text-sm leading-relaxed">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
