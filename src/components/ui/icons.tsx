/**
 * Authored SVG icons — one 16px grid, one 1.5px stroke, butt caps.
 *
 * Deliberately not an icon library: the site uses two directions and
 * nothing else, and a consistent hand-drawn pair keeps the line weight
 * in step with the hairline rules. Icons are decorative here (every use
 * sits beside a text label), so they are hidden from assistive tech.
 */

type IconProps = {
  className?: string;
};

const base = {
  viewBox: "0 0 16 16",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  "aria-hidden": true,
  focusable: "false",
} as const;

export function ArrowRight({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M2.5 8h11M9 3.5 13.5 8 9 12.5" />
    </svg>
  );
}

export function ArrowLeft({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M13.5 8h-11M7 3.5 2.5 8 7 12.5" />
    </svg>
  );
}

export function ArrowUpRight({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M4 12 12 4M5.5 4H12v6.5" />
    </svg>
  );
}
