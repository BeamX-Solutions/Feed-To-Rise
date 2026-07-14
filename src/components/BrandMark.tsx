import { Sprout } from "lucide-react";
import { Link } from "react-router-dom";

type BrandMarkProps = {
  className?: string;
  compact?: boolean;
};

export const BrandMark = ({ className = "", compact = false }: BrandMarkProps) => (
  <Link to="/" className={`inline-flex items-center gap-2.5 text-foreground ${className}`} aria-label="Feed to Rise home">
    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-sm">
      <Sprout className="h-5 w-5" strokeWidth={2.5} />
    </span>
    {!compact && (
      <span className="leading-none">
        <span className="block text-xl font-bold tracking-tight">Feed to Rise</span>
        <span className="mt-1 block text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-primary">Nourish. Equip. Rise.</span>
      </span>
    )}
  </Link>
);
