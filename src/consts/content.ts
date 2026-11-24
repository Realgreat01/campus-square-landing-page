export type PillarId = "campus-chow" | "market-square" | "service-square";
export type PillarAccent = "chili" | "gold" | "sage";
export type PillarIconKey = "bowl" | "store" | "wrench";

export interface Pillar {
  id: PillarId;
  name: string;
  kicker: string;
  tagline: string;
  description: string;
  bullets: readonly string[];
  href: string;
  accent: PillarAccent;
  icon: PillarIconKey;
}

export const PILLARS: readonly Pillar[] = [
  {
    id: "campus-chow",
    name: "Campus Chow",
    kicker: "Eat",
    tagline: "Dorm and cafeteria food, faster.",
    description:
      "Order ahead from dining halls, student-run kitchens, and the off-campus spots everyone already loves. Live prep times, real allergen tags, and pickup windows that fit between classes.",
    bullets: [
      "Skip the line with live pickup windows",
      "Filter by dietary needs and allergens",
      "Split escrow-protected group orders",
    ],
    href: "/features#campus-chow",
    accent: "chili",
    icon: "bowl",
  },
  {
    id: "market-square",
    name: "Market Square",
    kicker: "Trade",
    tagline: "The verified student exchange.",
    description:
      "Buy, sell, and trade with students who are actually on your campus. Verified profiles, escrow-protected payments, and dorm-to-dorm pickup for the things that disappear fast.",
    bullets: [
      "Verified student listings, zero randoms",
      "Escrow-protected meetups and payments",
      "Save searches for textbooks, bikes & more",
    ],
    href: "/features#market-square",
    accent: "gold",
    icon: "store",
  },
  {
    id: "service-square",
    name: "Service Square",
    kicker: "Book",
    tagline: "Tutoring, gigs & everyday favors.",
    description:
      "Book trusted help from students and local pros — tutoring, move-in labor, printing, haircuts, and the hundred small things that make campus life easier.",
    bullets: [
      "Peer-reviewed students and vetted pros",
      "Escrow-released payments after the job",
      "Scheduling, reminders & real reviews",
    ],
    href: "/features#service-square",
    accent: "sage",
    icon: "wrench",
  },
] as const;

export const HOW_IT_WORKS = [
  {
    step: "01",
    title: "Verify your student email",
    description:
      "One quick check confirms you're a real student and unlocks your campus. No student ID? Campus staff and local partners can verify too.",
  },
  {
    step: "02",
    title: "Pick your campus home",
    description:
      "Your feed, listings, kitchens, and services are scoped to your school — so everything you see is walkable, deliverable, or bookable nearby.",
  },
  {
    step: "03",
    title: "Eat, trade, and book",
    description:
      "Order lunch between lectures, sell the mini fridge, or book a tutor for Thursday. One profile, one wallet, one place for all of it.",
  },
] as const;

export const HOME_FAQS = [
  {
    question: "What exactly is CampuzSquare?",
    answer:
      "CampuzSquare is a student-first platform with three connected marketplaces: Campus Chow for food ordering and pickup, Market Square for buying and selling within your campus, and Service Square for booking trusted everyday services.",
  },
  {
    question: "Is CampuzSquare available on my campus?",
    answer:
      "We're onboarding campuses one at a time. Join the waitlist with your school and role, and we'll email you the moment your campus is live. Early campuses get first access to founding vendor and service spots.",
  },
  {
    question: "How does Market Square keep listings safe?",
    answer:
      "Every buyer and seller verifies a student email or campus affiliation before listing. Pickups happen on or around campus, profiles carry reviews and badges, and our safety team can step in on any transaction.",
  },
  {
    question: "What does it cost students?",
    answer:
      "The core student experience is free: browsing, ordering for pickup, listing items, and booking services. Any delivery or payment processing fees are shown upfront before you confirm.",
  },
  {
    question: "Can local vendors and service pros join?",
    answer:
      "Yes. Nearby restaurants, independent kitchens, tutors, movers, printers, and other campus-relevant pros can apply through the waitlist. Every partner is reviewed before going live.",
  },
  {
    question: "How do I bring CampuzSquare to my school?",
    answer:
      "Join the waitlist and tell us your campus, then share it with friends — campuses with the most student demand get prioritized. Student government and campus dining teams can also email campuses@campuzsquare.com.",
  },
] as const;
