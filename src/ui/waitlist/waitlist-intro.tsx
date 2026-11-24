import {
  BadgeCheck,
  Mail,
  ShieldCheck,
  Store,
  Utensils,
  Wallet,
  Wrench,
} from "lucide-react";
import { Link } from "@/components/ui/link";

const perks = [
  {
    icon: BadgeCheck,
    title: "Founding access",
    description: "Be first in line when your campus goes live.",
  },
  {
    icon: Wallet,
    title: "One wallet",
    description: "Food, finds, and favors from the same balance.",
  },
  {
    icon: ShieldCheck,
    title: "Escrow-protected",
    description: "Every order, sale, and booking backed by campus escrow.",
  },
  {
    icon: Mail,
    title: "One useful email",
    description: "Launch updates only. No spam, unsubscribe anytime.",
  },
];

const unlockRows = [
  {
    icon: Utensils,
    name: "Campus Chow",
    description: "Dorm + cafeteria food delivery",
    tile: "bg-orange-500/15 text-orange-400",
  },
  {
    icon: Store,
    name: "Market Square",
    description: "Verified student buy & sell",
    tile: "bg-emerald-500/15 text-emerald-400",
  },
  {
    icon: Wrench,
    name: "Service Square",
    description: "Tutoring, gigs & everyday favors",
    tile: "bg-violet-500/15 text-violet-400",
  },
];

export default function WaitlistIntro() {
  return (
    <div>
      <span className="border-primary/15 bg-secondary text-primary dark:border-border inline-flex items-center gap-2 rounded-full border px-3.5 py-1.5 text-[0.68rem] font-bold tracking-[0.12em] uppercase dark:text-blue-300">
        <BadgeCheck className="size-3.5" />
        Early access · Fall cohort
      </span>

      <h1 className="font-heading mt-6 text-[2.75rem] leading-[1.03] font-extrabold tracking-[-0.035em] text-balance sm:text-5xl lg:text-[3.6rem]">
        Be first through
        <span className="text-primary block">the door.</span>
      </h1>

      <p className="text-muted-foreground mt-5 max-w-lg text-base leading-relaxed text-pretty sm:text-lg">
        CampuzSquare launches one campus at a time, and the waitlist decides
        where we go next. Add your name, tell us your campus, and we’ll email
        you the moment your account is ready.
      </p>

      <ul className="mt-8 grid gap-x-6 gap-y-4 sm:grid-cols-2">
        {perks.map((perk) => {
          const Icon = perk.icon;
          return (
            <li key={perk.title} className="flex gap-3">
              <span className="bg-primary/10 text-primary grid size-9 shrink-0 place-items-center rounded-xl">
                <Icon className="size-4" />
              </span>
              <div>
                <p className="text-sm font-bold">{perk.title}</p>
                <p className="text-muted-foreground mt-0.5 text-[0.82rem] leading-relaxed">
                  {perk.description}
                </p>
              </div>
            </li>
          );
        })}
      </ul>

      <div className="bg-forest shadow-card mt-10 max-w-md rounded-2xl border border-slate-800 p-5 text-white">
        <p className="text-[0.62rem] font-bold tracking-[0.14em] text-slate-400 uppercase">
          Your account unlocks
        </p>
        <ul className="mt-4 space-y-2.5">
          {unlockRows.map((row) => {
            const Icon = row.icon;
            return (
              <li
                key={row.name}
                className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.04] px-3 py-2.5"
              >
                <span
                  className={`grid size-8 place-items-center rounded-lg ${row.tile}`}
                >
                  <Icon className="size-4" />
                </span>
                <div className="min-w-0 flex-1">
                  <p className="text-[0.75rem] font-bold">{row.name}</p>
                  <p className="truncate text-[0.6rem] text-slate-400">
                    {row.description}
                  </p>
                </div>
              </li>
            );
          })}
        </ul>
        <p className="mt-4 flex items-center gap-1.5 border-t border-white/10 pt-3 text-[0.58rem] font-semibold text-slate-400">
          <ShieldCheck className="size-3 text-emerald-400" />
          One Student ID · One wallet · Escrow-protected
        </p>
      </div>

      <p className="text-muted-foreground mt-6 text-sm">
        Questions first?{" "}
        <Link
          href="mailto:hello@campuzsquare.com"
          external
          className="text-primary font-semibold underline-offset-4 hover:underline"
        >
          hello@campuzsquare.com
        </Link>
      </p>
    </div>
  );
}
