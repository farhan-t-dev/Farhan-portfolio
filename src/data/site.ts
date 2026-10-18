/**
 * The single source of truth for identity and contact details.
 *
 * Nothing here is invented by the site — edit these values to make the
 * portfolio yours. Components read from this module and never hardcode
 * name, email, links, or the availability claim.
 */

export type AvailabilityStatus = "available" | "booked" | "unavailable";

export type NavLink = {
  label: string;
  href: string;
};

export type SiteConfig = {
  name: string;
  role: string;
  /** One honest sentence — capabilities, not credentials. Used for SEO description. */
  description: string;
  email: string;
  /** Absolute origin, e.g. "https://example.com". Leave empty until a domain exists. */
  siteUrl: string;
  /**
   * The availability indicator. This is a claim only you can make:
   * - `available`  -> green "open" dot, open for new projects
   * - `booked`     -> muted dot, currently at capacity
   * - `unavailable`-> muted dot, not taking work
   * Set to `null` to hide the indicator entirely.
   */
  availability: { status: AvailabilityStatus; label: string } | null;
  /** Profile links shown in the header and contact area. */
  links: NavLink[];
};

export const site: SiteConfig = {
  // ---- Replace the four values below with your real details ----
  name: "Farhan",
  role: "Full-stack developer",
  description:
    "Full-stack developer building, fixing, and shipping web applications — new features, API integrations, and deployment for founders, agencies, and teams.",
  email: "farhanweb20@gmail.com",
  siteUrl: "",
  // ---------------------------------------------------------------

  availability: {
    status: "available",
    label: "Currently available for new projects",
  },

  links: [
    { label: "GitHub", href: "https://github.com/farhan-t-dev" },
    { label: "LinkedIn", href: "https://linkedin.com/in/your-handle" },
  ],
};

/** Navigation for the site header. Process and Contact are homepage anchors (Stage 3). */
export const navLinks: NavLink[] = [
  { label: "Work", href: "/work" },
  { label: "Process", href: "/#process" },
  { label: "Contact", href: "/#contact" },
];
