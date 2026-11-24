import {
  BadgeCheck,
  Bike,
  BookOpen,
  CalendarDays,
  Clock,
  Lamp,
  MapPin,
  Refrigerator,
  Star,
  Utensils,
} from "lucide-react";

export function CampusChowVisual() {
  return (
    <div
      aria-hidden="true"
      className="border-border shadow-card relative mx-auto w-full max-w-md rounded-[2rem] border bg-orange-50 p-4 sm:p-6 dark:bg-orange-950/20"
    >
      <div className="bg-dot-grid pointer-events-none absolute inset-0 rounded-[2rem] [mask-image:linear-gradient(to_bottom,black,transparent_70%)] opacity-25" />
      <div className="bg-paper text-ink shadow-float relative rounded-[1.5rem] p-4 sm:p-5">
        <div className="flex items-start justify-between gap-3">
          <div className="flex items-center gap-2.5">
            <span className="grid size-10 place-items-center rounded-xl bg-orange-500 text-white">
              <Utensils className="size-4" />
            </span>
            <div>
              <p className="text-ink/40 text-[0.68rem] font-semibold tracking-[0.14em] uppercase">
                Pickup · Order #1042
              </p>
              <p className="text-sm font-semibold">The Melt Lab</p>
            </div>
          </div>
          <span className="bg-forest/10 text-forest rounded-full px-2.5 py-1 text-[0.58rem] font-semibold">
            12 min
          </span>
        </div>

        <div className="mt-5 flex items-center gap-1.5">
          <span className="flex flex-1 items-center gap-1 rounded-full bg-emerald-500 px-2.5 py-1.5 text-[0.58rem] font-semibold text-white">
            <BadgeCheck className="size-3" />
            Confirmed
          </span>
          <span className="h-0.5 flex-1 bg-slate-200" />
          <span className="bg-chow flex flex-1 items-center gap-1 rounded-full px-2.5 py-1.5 text-[0.58rem] font-semibold text-white">
            <Clock className="size-3" />
            Cooking
          </span>
          <span className="h-0.5 flex-1 bg-slate-200" />
          <span className="border-forest/15 text-ink/40 flex flex-1 items-center justify-center gap-1 rounded-full border px-2.5 py-1.5 text-[0.58rem] font-semibold">
            Ready
          </span>
        </div>

        <div className="border-forest/10 mt-5 space-y-2 border-y py-4">
          <div className="flex items-center justify-between text-[0.72rem]">
            <span className="text-ink/70">Smash burger</span>
            <span className="font-semibold">$9.50</span>
          </div>
          <div className="flex items-center justify-between text-[0.72rem]">
            <span className="text-ink/70">Rosemary fries</span>
            <span className="font-semibold">$3.50</span>
          </div>
          <div className="flex items-center justify-between text-[0.72rem]">
            <span className="text-ink/70">Oat vanilla shake</span>
            <span className="font-semibold">$4.25</span>
          </div>
        </div>

        <div className="bg-forest text-cream mt-4 rounded-2xl p-4">
          <p className="text-cream/55 text-[0.6rem] font-semibold tracking-[0.14em] uppercase">
            Pickup window
          </p>
          <div className="mt-1 flex items-end justify-between gap-3">
            <p className="font-heading text-lg leading-tight font-semibold">
              12:15 – 12:20 PM
            </p>
            <span className="text-cream/60 text-right text-[0.58rem]">
              <span className="flex items-center gap-1">
                <MapPin className="size-2.5" />
                Student Union
              </span>
              East counter
            </span>
          </div>
        </div>

        <div className="text-ink/45 mt-3 flex items-center justify-between text-[0.62rem]">
          <span>Split evenly with 2 roommates</span>
          <span className="text-forest font-semibold">$5.75 each</span>
        </div>
      </div>
    </div>
  );
}

const listings = [
  {
    name: "Walnut desk lamp",
    price: "$18",
    distance: "0.4 mi · North Hall",
    icon: Lamp,
    tone: "bg-emerald-50 text-emerald-600",
  },
  {
    name: "Stewart Calculus 8e",
    price: "$32",
    distance: "0.2 mi · Library",
    icon: BookOpen,
    tone: "bg-blue-50 text-blue-600",
  },
  {
    name: "Mini fridge · 3.2 cu ft",
    price: "$65",
    distance: "0.6 mi · West Hall",
    icon: Refrigerator,
    tone: "bg-orange-50 text-orange-600",
  },
  {
    name: "City bike · tuned",
    price: "$140",
    distance: "0.3 mi · Bike barn",
    icon: Bike,
    tone: "bg-violet-50 text-violet-600",
  },
];

export function MarketSquareVisual() {
  return (
    <div
      aria-hidden="true"
      className="border-border shadow-card relative mx-auto w-full max-w-md rounded-[2rem] border bg-emerald-50 p-4 sm:p-6 dark:bg-emerald-950/20"
    >
      <div className="bg-paper text-ink shadow-float relative rounded-[1.5rem] p-4 sm:p-5">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-ink/40 text-[0.6rem] font-semibold tracking-[0.14em] uppercase">
              Market Square
            </p>
            <p className="text-sm font-semibold">Near your campus</p>
          </div>
          <span className="flex items-center gap-1 rounded-full bg-emerald-50 px-2.5 py-1 text-[0.58rem] font-bold text-emerald-700">
            <BadgeCheck className="size-3" />
            Student verified
          </span>
        </div>

        <div className="mt-4 grid grid-cols-2 gap-2.5">
          {listings.map((listing) => {
            const Icon = listing.icon;
            return (
              <div
                key={listing.name}
                className="border-forest/10 bg-cream/70 rounded-2xl border p-3"
              >
                <span
                  className={`grid size-9 place-items-center rounded-xl ${listing.tone}`}
                >
                  <Icon className="size-4" />
                </span>
                <p className="mt-2.5 line-clamp-2 text-[0.66rem] leading-snug font-semibold">
                  {listing.name}
                </p>
                <p className="text-forest mt-1 text-[0.8rem] font-semibold">
                  {listing.price}
                </p>
                <p className="text-ink/40 mt-1 flex items-center gap-1 text-[0.52rem]">
                  <MapPin className="size-2.5 shrink-0" />
                  {listing.distance}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-3 flex items-center justify-between rounded-xl bg-slate-900 px-3.5 py-3 text-white">
          <div>
            <p className="text-[0.6rem] font-bold tracking-[0.12em] text-slate-400 uppercase">
              Saved search
            </p>
            <p className="text-[0.72rem] font-bold">
              3 new “mini fridge” matches
            </p>
          </div>
          <span className="rounded-full bg-emerald-400 px-2.5 py-1 text-[0.58rem] font-bold text-slate-900">
            View
          </span>
        </div>
      </div>

      <div className="bg-paper shadow-float absolute top-16 -right-3 rotate-6 rounded-full px-3 py-1.5 text-[0.58rem] font-bold text-emerald-700 ring-1 ring-emerald-200">
        No shipping. Just stairs.
      </div>
    </div>
  );
}

export function ServiceSquareVisual() {
  return (
    <div
      aria-hidden="true"
      className="border-border shadow-card relative mx-auto w-full max-w-md rounded-[2rem] border bg-violet-50 p-4 sm:p-6 dark:bg-violet-950/20"
    >
      <div className="bg-paper text-ink shadow-float relative rounded-[1.5rem] p-4 sm:p-5">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-ink/40 text-[0.6rem] font-semibold tracking-[0.14em] uppercase">
              Service Square
            </p>
            <p className="text-sm font-semibold">Booked for Saturday</p>
          </div>
          <span className="text-service grid size-9 place-items-center rounded-xl bg-violet-50">
            <CalendarDays className="size-4" />
          </span>
        </div>

        <div className="border-forest/10 bg-cream/70 mt-4 rounded-2xl border p-4">
          <div className="flex items-center gap-3">
            <span className="text-service grid size-10 place-items-center rounded-full bg-violet-100 text-sm font-bold">
              JT
            </span>
            <div className="min-w-0 flex-1">
              <p className="text-[0.78rem] font-semibold">Move-in help</p>
              <p className="text-ink/45 flex items-center gap-1 text-[0.6rem]">
                Jordan T. · Junior
                <span className="text-gold inline-flex items-center gap-0.5">
                  <Star className="size-2.5 fill-current" />
                  4.9 (28)
                </span>
              </p>
            </div>
            <p className="text-forest text-[0.78rem] font-semibold">
              $25<span className="text-ink/40 text-[0.55rem]">/hr</span>
            </p>
          </div>

          <div className="border-forest/10 mt-3 grid grid-cols-2 gap-2 border-t pt-3 text-[0.6rem]">
            <div>
              <p className="text-ink/40">When</p>
              <p className="mt-0.5 font-semibold">Sat · 10:00 AM</p>
            </div>
            <div>
              <p className="text-ink/40">Where</p>
              <p className="mt-0.5 font-semibold">West Hall · Dock B</p>
            </div>
          </div>

          <div className="bg-primary mt-3 flex items-center justify-center rounded-full py-2 text-[0.66rem] font-bold text-white">
            Confirm booking
          </div>
        </div>

        <div className="border-forest/10 mt-3 flex items-center gap-2.5 rounded-2xl border px-3.5 py-2.5">
          <span className="text-service grid size-8 place-items-center rounded-full bg-violet-50">
            <BadgeCheck className="size-4" />
          </span>
          <div className="flex-1">
            <p className="text-[0.68rem] font-semibold">
              Stats tutoring · Thu 7:00 PM
            </p>
            <p className="text-ink/45 text-[0.55rem]">
              Confirmed · Reminder set
            </p>
          </div>
          <span className="text-service rounded-full bg-violet-50 px-2 py-1 text-[0.52rem] font-bold">
            $20/hr
          </span>
        </div>

        <div className="mt-4 flex flex-wrap gap-1.5">
          {["Tutoring", "Moving", "Printing", "Haircuts", "Photography"].map(
            (tag, index) => (
              <span
                key={tag}
                className={
                  index === 0
                    ? "bg-primary rounded-full px-2.5 py-1 text-[0.55rem] font-bold text-white"
                    : "rounded-full border border-slate-200 px-2.5 py-1 text-[0.55rem] font-medium text-slate-500"
                }
              >
                {tag}
              </span>
            ),
          )}
        </div>
      </div>
    </div>
  );
}
