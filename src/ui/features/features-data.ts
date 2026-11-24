import {
  BadgeCheck,
  BadgeDollarSign,
  CalendarDays,
  Clock,
  GraduationCap,
  HandCoins,
  Leaf,
  MapPin,
  MessageSquare,
  SearchCheck,
  ShieldCheck,
  Star,
  Timer,
  UserCheck,
  Users,
  Wallet,
  type LucideIcon,
} from "lucide-react";
import type { PillarAccent, PillarIconKey } from "@/consts/content";

export interface DetailFeature {
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface PillarDetail {
  id: "campus-chow" | "market-square" | "service-square";
  number: string;
  name: string;
  kicker: string;
  heading: string;
  description: string;
  accent: PillarAccent;
  icon: PillarIconKey;
  visual: "chow" | "market" | "service";
  features: readonly DetailFeature[];
}

export const PILLAR_DETAILS: readonly PillarDetail[] = [
  {
    id: "campus-chow",
    number: "01",
    name: "Campus Chow",
    kicker: "Eat",
    heading: "Skip the line, not the good stuff.",
    description:
      "The dining hall, the student-run kitchen, and the food truck everyone stalks on Instagram — in one menu with pickup times that match your actual class schedule.",
    accent: "chili",
    icon: "bowl",
    visual: "chow",
    features: [
      {
        icon: Timer,
        title: "Order ahead",
        description:
          "Live menus and pickup windows across dining halls, cafés, and student kitchens.",
      },
      {
        icon: Clock,
        title: "Real prep times",
        description:
          "Kitchen-side timers update in real time — no more guessing whether “10 minutes” means twenty.",
      },
      {
        icon: Leaf,
        title: "Dietary filters",
        description:
          "Allergen tags, vegan and vegetarian options, halal, and gluten-free choices you can trust.",
      },
      {
        icon: Users,
        title: "Group carts",
        description:
          "Order together, split the bill, and avoid the group-chat spreadsheet before every study night.",
      },
      {
        icon: MapPin,
        title: "Pickup map",
        description:
          "Walking directions to the right counter, window, or food truck — even inside big student unions.",
      },
      {
        icon: Wallet,
        title: "Student wallet",
        description:
          "Card, meal points, and roommate reimbursements in one clear balance you can actually read.",
      },
    ],
  },
  {
    id: "market-square",
    number: "02",
    name: "Market Square",
    kicker: "Trade",
    heading: "The campus classifieds, minus the sketchy part.",
    description:
      "Textbooks, lamps, bikes, and the mini fridge someone bought freshman year — bought and sold by verified students who are already on your campus.",
    accent: "gold",
    icon: "store",
    visual: "market",
    features: [
      {
        icon: BadgeCheck,
        title: "Verified listings",
        description:
          "Every seller is tied to a student email or campus affiliation, with badges and reviews on their profile.",
      },
      {
        icon: SearchCheck,
        title: "Saved searches",
        description:
          "Get a nudge the moment a textbook, bike, or dorm essential that matches your budget is listed.",
      },
      {
        icon: MapPin,
        title: "Dorm-to-dorm pickup",
        description:
          "Exact pickup spots and safe hours on your campus map — no shipping, no off-campus parking lot meetups.",
      },
      {
        icon: MessageSquare,
        title: "Offers & chat",
        description:
          "Negotiate and coordinate in-app without handing your phone number to a stranger.",
      },
      {
        icon: BadgeDollarSign,
        title: "Fair-price hints",
        description:
          "See what similar items recently sold for on your campus before you set a price or make an offer.",
      },
      {
        icon: ShieldCheck,
        title: "Safety center",
        description:
          "Report a listing, flag a meetup, or reach the campus team in a couple of taps. We show up.",
      },
    ],
  },
  {
    id: "service-square",
    number: "03",
    name: "Service Square",
    kicker: "Book",
    heading: "Everyday help, from people who get campus.",
    description:
      "A stats tutor who knows your professor. A mover who understands a fourth-floor walk-up. A printer that’s open at midnight. Book it all with clear prices and real reviews.",
    accent: "sage",
    icon: "wrench",
    visual: "service",
    features: [
      {
        icon: Star,
        title: "Real reviews",
        description:
          "Ratings only from completed campus bookings, so the five stars mean something.",
      },
      {
        icon: HandCoins,
        title: "Upfront quotes",
        description:
          "A fixed price or clear hourly rate before you book — no “we’ll see when we get there.”",
      },
      {
        icon: CalendarDays,
        title: "Smart scheduling",
        description:
          "Find open slots between classes, with reminders and rescheduling handled for you.",
      },
      {
        icon: GraduationCap,
        title: "Skill finder",
        description:
          "Tutors, photographers, editors, movers, printers, and more from your campus community.",
      },
      {
        icon: Wallet,
        title: "Secure payments",
        description:
          "Pay in-app with funds released after the job is done. No cash envelopes at the dorm door.",
      },
      {
        icon: UserCheck,
        title: "Campus pros",
        description:
          "Vetted local partners and student providers, reviewed and approved for your school.",
      },
    ],
  },
] as const;
