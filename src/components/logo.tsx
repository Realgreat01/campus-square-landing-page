import { Link } from "@/components/ui/link";
import { cn } from "@/lib/utils";

export interface LogoProps {
  className?: string;
  inverted?: boolean;
  showTagline?: boolean;
  onClick?: () => void;
}

export function LogoMark({
  className,
  inverted = false,
}: {
  className?: string;
  inverted?: boolean;
}) {
  return (
    <span
      aria-hidden="true"
      className={cn(
        "from-core to-core-deep grid size-10 shrink-0 place-items-center rounded-xl bg-gradient-to-br shadow-sm ring-1 ring-white/15",
        className,
      )}
    >
      <svg
        viewBox="0 0 32 32"
        fill="none"
        className="size-[1.35rem]"
        role="presentation"
      >
        <rect
          x="3.5"
          y="3.5"
          width="11.5"
          height="11.5"
          rx="3.2"
          fill="#F97316"
        />
        <rect
          x="17"
          y="3.5"
          width="11.5"
          height="11.5"
          rx="3.2"
          fill="#10B981"
        />
        <rect
          x="3.5"
          y="17"
          width="11.5"
          height="11.5"
          rx="3.2"
          fill="#8B5CF6"
        />
        <rect
          x="17"
          y="17"
          width="11.5"
          height="11.5"
          rx="3.2"
          fill="#FFFFFF"
          fillOpacity={inverted ? 0.9 : 1}
        />
      </svg>
    </span>
  );
}

export default function Logo({
  className,
  inverted = false,
  showTagline = true,
  onClick,
}: LogoProps) {
  return (
    <Link
      href="/"
      onClick={onClick}
      aria-label="CampuzSquare home"
      className={cn(
        "group focus-visible:ring-ring focus-visible:ring-offset-background flex items-center gap-3 rounded-xl focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none",
        className,
      )}
    >
      <LogoMark inverted={inverted} />
      <span className="flex flex-col leading-none">
        <span
          className={cn(
            "font-heading text-[1.3rem] font-extrabold tracking-[-0.03em]",
            inverted ? "text-white" : "text-foreground",
          )}
        >
          Campuz
          <span className={inverted ? "text-blue-300" : "text-primary"}>
            Square
          </span>
        </span>
        {showTagline ? (
          <span
            className={cn(
              "mt-1 text-[0.58rem] font-bold tracking-[0.16em] uppercase",
              inverted ? "text-slate-400" : "text-muted-foreground",
            )}
          >
            One campus account
          </span>
        ) : null}
      </span>
    </Link>
  );
}
