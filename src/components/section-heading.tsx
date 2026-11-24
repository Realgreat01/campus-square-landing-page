import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export interface SectionHeadingProps {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  className?: string;
  titleClassName?: string;
  descriptionClassName?: string;
  reveal?: boolean;
}

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  className,
  titleClassName,
  descriptionClassName,
  reveal = true,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-4",
        align === "center" ? "items-center text-center" : "items-start",
        className,
      )}
      data-reveal={reveal ? "up" : undefined}
    >
      {eyebrow ? (
        <span className="border-primary/15 bg-secondary text-primary dark:border-border dark:bg-secondary inline-flex items-center gap-2 rounded-full border px-3.5 py-1.5 text-[0.68rem] font-bold tracking-[0.12em] uppercase dark:text-blue-300">
          <span className="bg-chow size-1.5 rounded-full" />
          {eyebrow}
        </span>
      ) : null}
      <h2
        className={cn(
          "font-heading text-3xl font-extrabold tracking-[-0.025em] text-balance sm:text-4xl lg:text-[2.75rem] lg:leading-[1.08]",
          titleClassName,
        )}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={cn(
            "text-muted-foreground max-w-2xl text-base leading-relaxed text-pretty sm:text-lg",
            align === "center" && "mx-auto",
            descriptionClassName,
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
