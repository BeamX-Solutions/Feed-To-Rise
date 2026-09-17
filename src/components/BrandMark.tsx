import { Link } from "react-router-dom";

/**
 * Feed to Rise identity.
 *
 * The mark is a sprout rising out of a bowl: the bowl is the meal (ground,
 * navy), the sprout is what the meal makes possible (lead, orange).
 *
 * tone
 *  - "color"    navy bowl + orange sprout, for paper surfaces
 *  - "onGround" paper bowl + orange sprout, for navy/ink surfaces
 *  - "mono"     single colour, inherits currentColor (stamps, favicons, print)
 */
type Tone = "color" | "onGround" | "mono";

const bowlClass: Record<Tone, string> = {
  color: "fill-brand-ground",
  onGround: "fill-brand-paper",
  mono: "fill-current",
};

const sproutClass: Record<Tone, string> = {
  color: "fill-brand-lead",
  onGround: "fill-brand-lead",
  mono: "fill-current",
};

type BrandGlyphProps = {
  className?: string;
  tone?: Tone;
  title?: string;
};

export const BrandGlyph = ({ className = "h-10 w-10", tone = "color", title }: BrandGlyphProps) => (
  <svg
    viewBox="0 0 40 40"
    className={className}
    role={title ? "img" : "presentation"}
    aria-label={title}
    aria-hidden={title ? undefined : true}
    focusable="false"
  >
    {/* Bowl: flat rim, half-round base */}
    <path d="M4 23.5h32a16 16 0 0 1-32 0Z" className={bowlClass[tone]} />
    {/* Sprout: stem, two leaves, bud */}
    <g className={sproutClass[tone]}>
      <path d="M18.7 22.6V12.4a1.3 1.3 0 0 1 2.6 0v10.2Z" />
      <path d="M20 22.6c-4.6 0-8.4-2.9-8.4-7.7 4.6 0 8.4 2.9 8.4 7.7Z" />
      <path d="M20 22.6c4.6 0 8.4-2.9 8.4-7.7-4.6 0-8.4 2.9-8.4 7.7Z" />
      <circle cx="20" cy="8.2" r="4.2" />
    </g>
  </svg>
);

type BrandMarkProps = {
  className?: string;
  /** Hide the wordmark and show the glyph alone. */
  compact?: boolean;
  tone?: Tone;
  /** Show the descriptor line under the wordmark. */
  tagline?: boolean;
  /** Render as a link home. Off for places that are already inside a link. */
  asLink?: boolean;
};

export const BrandMark = ({
  className = "",
  compact = false,
  tone = "color",
  tagline = true,
  asLink = true,
}: BrandMarkProps) => {
  const content = (
    <>
      {/* The sprout lifts out of the bowl on hover, from the group on the wrapper. */}
      <BrandGlyph
        className="h-10 w-10 shrink-0 transition-transform duration-300 ease-out group-hover:-translate-y-0.5 group-hover:scale-105 motion-reduce:transition-none motion-reduce:group-hover:transform-none"
        tone={tone}
      />
      {!compact && (
        <span className="leading-none">
          <span className="block text-xl font-extrabold tracking-tight">Feed to Rise</span>
          {tagline && (
            <span className="mt-1 block text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-primary-ink">
              Nourish. Equip. Rise.
            </span>
          )}
        </span>
      )}
    </>
  );

  const classes = `group inline-flex items-center gap-2.5 text-foreground transition-colors duration-200 ${className}`;

  if (!asLink) {
    return (
      <span className={classes} aria-label="Feed to Rise">
        {content}
      </span>
    );
  }

  return (
    <Link to="/" className={classes} aria-label="Feed to Rise home">
      {content}
    </Link>
  );
};
