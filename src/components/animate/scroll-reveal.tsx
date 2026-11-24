"use client";

import { usePathname } from "next/navigation";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

type RevealKind = "up" | "down" | "left" | "right" | "fade" | "scale";

const REVEAL_FROM: Record<RevealKind, gsap.TweenVars> = {
  up: { y: 28, autoAlpha: 0 },
  down: { y: -28, autoAlpha: 0 },
  left: { x: -40, autoAlpha: 0 },
  right: { x: 40, autoAlpha: 0 },
  fade: { autoAlpha: 0 },
  scale: { scale: 0.96, autoAlpha: 0 },
};

function resolveFrom(kind: string): gsap.TweenVars {
  return REVEAL_FROM[kind as RevealKind] ?? REVEAL_FROM.up;
}

/**
 * Scroll-reveal driver for the marketing pages.
 *
 * Any element with `data-reveal` (optionally `data-reveal="left|right|fade|scale"`,
 * `data-reveal-delay` in seconds, `data-reveal-duration`) is animated into view
 * once. Elements are only hidden while this component is mounted and motion is
 * allowed — if JS never boots, the inline pre-paint class is removed by a
 * fallback timer and content stays visible.
 */
export default function ScrollReveal() {
  const pathname = usePathname();

  useGSAP(
    () => {
      const root = document.documentElement;
      const targets = gsap.utils.toArray<HTMLElement>("[data-reveal]");
      const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;

      if (prefersReducedMotion || targets.length === 0) {
        root.classList.remove("gsap-enabled");
        return;
      }

      const media = gsap.matchMedia();

      media.add("(prefers-reduced-motion: no-preference)", () => {
        targets.forEach((element) => {
          const kind = element.dataset.reveal ?? "up";
          const delay = Number(element.dataset.revealDelay ?? 0);
          const duration = Number(element.dataset.revealDuration ?? 0.8);

          gsap.fromTo(element, resolveFrom(kind), {
            x: 0,
            y: 0,
            scale: 1,
            autoAlpha: 1,
            duration,
            delay,
            ease: "power3.out",
            scrollTrigger: {
              trigger: element,
              start: "top 88%",
              once: true,
            },
            onComplete: () => {
              // Drop inline styles so CSS hover transforms keep working.
              gsap.set(element, {
                clearProps: "transform,opacity,visibility,willChange",
              });
            },
          });
        });

        ScrollTrigger.refresh();
      });

      root.classList.remove("gsap-enabled");

      return () => {
        media.revert();
      };
    },
    { dependencies: [pathname], revertOnUpdate: true },
  );

  return null;
}
