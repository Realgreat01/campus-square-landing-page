import {
  BadgeCheck,
  Bell,
  CalendarCheck,
  ChevronRight,
  Coffee,
  Leaf,
  MapPin,
  Package,
  Search,
  ShieldCheck,
  Star,
  Store,
  Utensils,
} from "lucide-react";
import { LogoMark } from "@/components/logo";
import { cn } from "@/lib/utils";

const categories = [
  { label: "Local Staples", icon: Store, active: true },
  { label: "Fast Food", icon: Utensils, active: false },
  { label: "Groceries", icon: Leaf, active: false },
  { label: "Packages", icon: Package, active: false },
];

export default function HeroVisual() {
  return (
    <div
      aria-hidden="true"
      className="relative mx-auto w-full max-w-[30rem] lg:max-w-[34rem]"
    >
      <div className="absolute -top-10 -right-10 size-56 rounded-full bg-blue-300/25 blur-3xl" />
      <div className="absolute -bottom-8 -left-8 size-52 rounded-full bg-violet-300/20 blur-3xl" />

      <div className="border-border shadow-card dark:via-card relative rounded-[2.25rem] border bg-gradient-to-br from-blue-50 via-white to-violet-50 p-3 sm:p-5 dark:from-blue-950/40 dark:to-violet-950/30">
        <div className="bg-dot-grid pointer-events-none absolute inset-0 rounded-[2.25rem] [mask-image:linear-gradient(to_bottom,black,transparent_55%)] opacity-[0.15]" />

        <div className="border-border bg-paper text-ink shadow-float relative rounded-[1.6rem] border p-4 sm:p-5">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <LogoMark className="size-9 rounded-[0.75rem]" />
              <div>
                <p className="text-[0.82rem] leading-tight font-extrabold tracking-tight">
                  Campus Chow
                </p>
                <p className="flex items-center gap-1 text-[0.58rem] font-medium text-slate-500">
                  <MapPin className="size-2.5" />
                  Willbur Hall · Student Hub
                </p>
              </div>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="relative grid size-8 place-items-center rounded-full border border-slate-200 bg-white">
                <Bell className="size-3.5 text-slate-600" />
                <span className="absolute top-1.5 right-1.5 size-1.5 rounded-full bg-red-500" />
              </span>
              <span className="grid size-8 place-items-center rounded-full bg-gradient-to-br from-blue-500 to-violet-500 text-[0.6rem] font-bold text-white">
                M
              </span>
            </div>
          </div>

          <div className="mt-4 flex items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-3 py-2.5 text-[0.7rem] font-medium text-slate-400">
            <Search className="size-3.5 text-slate-500" />
            Search food, groceries, cafes…
          </div>

          <div className="mt-3 grid grid-cols-4 gap-1.5">
            {categories.map((category) => {
              const Icon = category.icon;
              return (
                <div
                  key={category.label}
                  className={cn(
                    "flex flex-col items-center gap-1 rounded-xl border px-1 py-2 text-center",
                    category.active
                      ? "border-blue-600 bg-blue-600 text-white shadow-sm"
                      : "border-slate-200 bg-white text-slate-500",
                  )}
                >
                  <Icon className="size-3.5" />
                  <span className="text-[0.48rem] leading-tight font-bold">
                    {category.label}
                  </span>
                </div>
              );
            })}
          </div>

          <div className="relative mt-3 overflow-hidden rounded-xl bg-gradient-to-r from-orange-500 to-orange-600 px-3.5 py-3 text-white">
            <div
              aria-hidden="true"
              className="absolute -top-5 -right-4 size-16 rounded-full bg-white/15"
            />
            <p className="text-[0.5rem] font-bold tracking-[0.14em] text-white/75 uppercase">
              Limited time
            </p>
            <p className="mt-0.5 text-[0.72rem] leading-tight font-extrabold">
              Free hostel delivery on orders $15+
            </p>
            <p className="mt-1 text-[0.52rem] font-medium text-white/80">
              Use code <span className="font-bold text-white">CHOW15</span> at
              checkout
            </p>
          </div>

          <div className="mt-4 flex items-center justify-between">
            <p className="text-ink text-[0.72rem] font-extrabold tracking-tight">
              Fastest to your hostel
            </p>
            <span className="flex items-center gap-0.5 text-[0.58rem] font-semibold text-blue-600">
              See all
              <ChevronRight className="size-3" />
            </span>
          </div>

          <div className="mt-2 grid grid-cols-2 gap-2">
            <div className="rounded-xl border border-slate-200 bg-white p-2">
              <div className="flex h-14 items-center justify-center rounded-lg bg-gradient-to-br from-orange-100 to-amber-50">
                <span className="grid size-8 place-items-center rounded-full bg-orange-500 text-white shadow-sm">
                  <Utensils className="size-3.5" />
                </span>
              </div>
              <p className="text-ink mt-2 text-[0.62rem] leading-tight font-bold">
                Mama&apos;s Kitchen
              </p>
              <p className="mt-0.5 text-[0.5rem] text-slate-500">
                Jollof rice · Chicken
              </p>
              <div className="mt-1 flex items-center justify-between">
                <span className="flex items-center gap-0.5 text-[0.5rem] font-semibold text-amber-500">
                  <Star className="size-2.5 fill-current" />
                  4.9
                </span>
                <span className="rounded-full bg-green-50 px-1.5 py-0.5 text-[0.45rem] font-bold text-green-700">
                  10–15 min
                </span>
              </div>
            </div>

            <div className="rounded-xl border border-slate-200 bg-white p-2">
              <div className="flex h-14 items-center justify-center rounded-lg bg-gradient-to-br from-emerald-100 to-teal-50">
                <span className="grid size-8 place-items-center rounded-full bg-emerald-500 text-white shadow-sm">
                  <Leaf className="size-3.5" />
                </span>
              </div>
              <p className="text-ink mt-2 text-[0.62rem] leading-tight font-bold">
                Green Bowl Co.
              </p>
              <p className="mt-0.5 text-[0.5rem] text-slate-500">
                Harvest bowl · Vegan
              </p>
              <div className="mt-1 flex items-center justify-between">
                <span className="flex items-center gap-0.5 text-[0.5rem] font-semibold text-amber-500">
                  <Star className="size-2.5 fill-current" />
                  4.8
                </span>
                <span className="rounded-full bg-green-50 px-1.5 py-0.5 text-[0.45rem] font-bold text-green-700">
                  8–12 min
                </span>
              </div>
            </div>
          </div>

          <div className="mt-2.5 flex items-center justify-between rounded-xl bg-slate-900 px-3 py-2.5 text-white">
            <div className="flex items-center gap-2">
              <span className="grid size-7 place-items-center rounded-lg bg-white/10 text-orange-400">
                <Coffee className="size-3.5" />
              </span>
              <div>
                <p className="text-[0.55rem] font-medium text-slate-400">
                  Order #1042 · Pickup 12:15
                </p>
                <p className="text-[0.62rem] font-bold">Melt Lab is packing</p>
              </div>
            </div>
            <span className="flex items-center gap-1 rounded-full bg-blue-500/20 px-2 py-1 text-[0.5rem] font-bold text-blue-300">
              <ShieldCheck className="size-2.5" />
              On track
            </span>
          </div>
        </div>
      </div>

      <div className="border-border bg-paper text-ink shadow-overlay animate-float absolute top-36 -right-2 hidden w-[12rem] rotate-3 rounded-xl border p-3 [--float-tilt:3deg] sm:block lg:-right-7">
        <div className="flex items-center gap-2.5">
          <span className="grid size-8 place-items-center rounded-lg bg-emerald-50 text-emerald-600">
            <Store className="size-4" />
          </span>
          <div>
            <p className="text-[0.65rem] font-bold">Walnut desk lamp</p>
            <p className="text-[0.5rem] font-medium text-slate-500">
              Market Square
            </p>
          </div>
        </div>
        <div className="mt-2.5 flex items-center justify-between border-t border-slate-100 pt-2">
          <p className="text-ink text-[0.72rem] font-extrabold">$18</p>
          <p className="flex items-center gap-0.5 rounded-full bg-emerald-50 px-1.5 py-0.5 text-[0.45rem] font-bold text-emerald-700">
            <BadgeCheck className="size-2.5" />
            Verified
          </p>
        </div>
      </div>

      <div className="border-border bg-paper text-ink shadow-overlay animate-float-delayed absolute bottom-24 -left-2 hidden w-[12.5rem] -rotate-2 rounded-xl border p-3 [--float-tilt:-2deg] sm:block lg:-left-8">
        <div className="flex items-center gap-2.5">
          <span className="grid size-8 place-items-center rounded-lg bg-violet-50 text-violet-600">
            <CalendarCheck className="size-4" />
          </span>
          <div>
            <p className="text-[0.65rem] font-bold">Move-in help</p>
            <p className="text-[0.5rem] font-medium text-slate-500">
              Service Square
            </p>
          </div>
        </div>
        <div className="mt-2.5 flex items-center justify-between border-t border-slate-100 pt-2 text-[0.5rem]">
          <p className="text-slate-500">Sat · 10:00 AM</p>
          <span className="rounded-full bg-blue-600 px-2 py-0.5 font-bold text-white">
            Book
          </span>
        </div>
      </div>

      <div className="shadow-overlay absolute -right-3 bottom-14 hidden size-20 rotate-6 place-items-center rounded-full bg-gradient-to-br from-blue-500 to-violet-600 text-center text-white md:grid">
        <div>
          <p className="font-heading text-lg leading-none font-extrabold">
            3-in-1
          </p>
          <p className="mt-1 text-[0.48rem] font-bold tracking-[0.1em] uppercase">
            one account
          </p>
        </div>
      </div>
    </div>
  );
}
