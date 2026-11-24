"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { ArrowRight, Menu, X } from "lucide-react";
import { Link } from "@/components/ui/link";
import Container from "@/components/container";
import Logo from "@/components/logo";
import { ModeToggle } from "@/components/mode-toggle";
import { buttonVariants } from "@/components/ui/button";
import { HEADER_NAV_ITEMS, WAITLIST_HREF } from "@/lib/navigation";
import { cn } from "@/lib/utils";

export default function HeaderContentContainer() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsOpen(false);
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  return (
    <Container>
      <div className="flex h-[4.5rem] items-center justify-between gap-4">
        <Logo onClick={() => setIsOpen(false)} />

        <nav aria-label="Primary" className="hidden items-center gap-1 lg:flex">
          {HEADER_NAV_ITEMS.map((item) => {
            const isActive = !item.href.startsWith("/#")
              ? pathname === item.href
              : false;

            return (
              <Link
                key={item.label}
                href={item.href}
                className={cn(
                  "rounded-full px-4 py-2 text-sm font-medium transition-colors",
                  isActive
                    ? "bg-secondary text-secondary-foreground"
                    : "text-muted-foreground hover:bg-muted hover:text-foreground",
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <div className="hidden sm:block">
            <ModeToggle />
          </div>
          <Link
            href={WAITLIST_HREF}
            className={cn(
              buttonVariants({ size: "lg" }),
              "bg-primary text-primary-foreground hover:bg-primary/90 hidden h-10 rounded-full px-5 shadow-sm sm:inline-flex",
            )}
          >
            Join the waitlist
            <ArrowRight className="size-4" />
          </Link>
          <button
            type="button"
            onClick={() => setIsOpen((open) => !open)}
            aria-expanded={isOpen}
            aria-controls="mobile-navigation"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            className="border-border bg-card text-foreground hover:bg-muted grid size-10 place-items-center rounded-full border transition-colors lg:hidden"
          >
            {isOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {isOpen ? (
        <div
          id="mobile-navigation"
          className="border-border border-t pt-3 pb-6 lg:hidden"
        >
          <nav aria-label="Mobile" className="flex flex-col">
            {HEADER_NAV_ITEMS.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="border-border/70 text-foreground flex items-center justify-between border-b py-3.5 text-base font-medium"
              >
                {item.label}
                <ArrowRight className="text-muted-foreground size-4" />
              </Link>
            ))}
            <Link
              href={WAITLIST_HREF}
              onClick={() => setIsOpen(false)}
              className={cn(
                buttonVariants({ size: "lg" }),
                "bg-primary text-primary-foreground hover:bg-primary/90 mt-5 h-12 w-full rounded-full",
              )}
            >
              Join the waitlist
              <ArrowRight className="size-4" />
            </Link>
            <div className="text-muted-foreground mt-5 flex items-center justify-between text-sm">
              <span>Prefer light or dark?</span>
              <ModeToggle />
            </div>
          </nav>
        </div>
      ) : null}
    </Container>
  );
}
