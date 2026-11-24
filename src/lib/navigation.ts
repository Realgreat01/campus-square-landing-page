import { isExternalUrl } from "@/lib/link";
import { currentYear } from "@/consts";

export interface NavItem {
  label: string;
  href: string;
  external?: boolean;
  isButton?: boolean;
}

export interface FooterNavGroup {
  title: string;
  items: readonly NavItem[];
}

export const WAITLIST_HREF = "/waitlist";

export const HEADER_NAV_ITEMS: readonly NavItem[] = [
  {
    label: "Platform",
    href: "/#platform",
  },
  {
    label: "Features",
    href: "/features",
  },
  {
    label: "FAQ",
    href: "/#faq",
  },
] as const;

export const FOOTER_NAV_GROUPS: readonly FooterNavGroup[] = [
  {
    title: "Platform",
    items: [
      { label: "Campus Chow", href: "/#campus-chow" },
      { label: "Market Square", href: "/#market-square" },
      { label: "Service Square", href: "/#service-square" },
      { label: "Features", href: "/features" },
    ],
  },
  {
    title: "Get started",
    items: [
      { label: "Join the waitlist", href: WAITLIST_HREF },
      { label: "How it works", href: "/#how-it-works" },
      { label: "FAQ", href: "/#faq" },
    ],
  },
  {
    title: "Campus partners",
    items: [
      {
        label: "Bring us to your campus",
        href: "mailto:campuses@campuzsquare.com",
        external: true,
      },
      {
        label: "Vendor & dining partners",
        href: "mailto:partners@campuzsquare.com",
        external: true,
      },
      {
        label: "Student support",
        href: "mailto:hello@campuzsquare.com",
        external: true,
      },
    ],
  },
] as const;

export const FOOTER_NAV_ITEMS: readonly NavItem[] = [
  { label: "Platform", href: "/#platform" },
  { label: "Features", href: "/features" },
  { label: "Join the waitlist", href: WAITLIST_HREF },
  { label: "Contact", href: "mailto:hello@campuzsquare.com", external: true },
] as const;

export function isExternalNavItem(item: NavItem): boolean {
  return item.external ?? isExternalUrl(item.href);
}

export function getFooterCopyrightText(year: number = currentYear): string {
  return `© ${year} CampuzSquare. Built for campus life.`;
}
