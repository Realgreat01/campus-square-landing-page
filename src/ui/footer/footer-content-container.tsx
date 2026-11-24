import { ArrowUpRight, Mail } from "lucide-react";
import { Link } from "@/components/ui/link";
import Container from "@/components/container";
import Logo from "@/components/logo";
import { FOOTER_NAV_GROUPS, getFooterCopyrightText } from "@/lib/navigation";

export default function FooterContentContainer() {
  return (
    <Container>
      <div className="grid gap-12 py-14 lg:grid-cols-[1fr_1.35fr] lg:gap-20 lg:py-20">
        <div className="max-w-sm">
          <Logo inverted />
          <p className="text-cream/70 mt-6 text-sm leading-relaxed">
            One student-verified app for campus food, nearby finds, and everyday
            favors. Made for the way campus actually moves.
          </p>

          <div className="text-cream/60 mt-6 flex flex-wrap gap-2 text-[0.68rem] font-semibold tracking-[0.14em] uppercase">
            <span className="border-cream/15 rounded-full border px-3 py-1.5">
              Student-verified
            </span>
            <span className="border-cream/15 rounded-full border px-3 py-1.5">
              Campus-first
            </span>
          </div>

          <Link
            href="mailto:hello@campuzsquare.com"
            external
            className="border-cream/20 text-cream hover:bg-cream/10 mt-8 inline-flex items-center gap-2 rounded-full border px-4 py-2.5 text-sm font-medium transition-colors"
          >
            <Mail className="size-4" />
            hello@campuzsquare.com
          </Link>
        </div>

        <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
          {FOOTER_NAV_GROUPS.map((group) => (
            <div key={group.title}>
              <h2 className="text-cream/45 text-[0.68rem] font-semibold tracking-[0.16em] uppercase">
                {group.title}
              </h2>
              <ul className="mt-4 space-y-3">
                {group.items.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      external={item.external}
                      className="group text-cream/75 hover:text-cream inline-flex items-start gap-1 text-sm transition-colors"
                    >
                      {item.label}
                      {item.external ? (
                        <ArrowUpRight className="mt-0.5 size-3 opacity-50 transition-opacity group-hover:opacity-100" />
                      ) : null}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="border-cream/15 text-cream/50 flex flex-col gap-3 border-t py-6 text-xs sm:flex-row sm:items-center sm:justify-between">
        <p>{getFooterCopyrightText()}</p>
        <div className="flex items-center gap-5">
          <span>Made on campus. For campus.</span>
          <a
            href="#top"
            className="text-cream/70 hover:text-cream font-medium underline-offset-4 transition-colors hover:underline"
          >
            Back to top
          </a>
        </div>
      </div>
    </Container>
  );
}
