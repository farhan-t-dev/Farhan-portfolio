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
  /** The poster line. Shared by the hero and the social card so they cannot drift. */
  tagline: string;
  email: string;
  /** Absolute origin, e.g. "https://example.com". Social cards need it to build absolute image URLs. */
  siteUrl: string;
  /**
   * The availability indicator. This is a claim only you can make:
   * - `available`  -> green "open" dot, open for new projects
   * - `booked`     -> muted dot, currently at capacity
   * - `unavailable`-> muted dot, not taking work
   * Set to `null` to hide the indicator entirely.
   */
  availability: { status: AvailabilityStatus; label: string } | null;
  /**
   * Reply speed and reachable window, shown only in the Contact section.
   * This is a claim only the owner can make.
   */
  contactNote: string;
  /** Profile links shown in the header and contact area. */
  links: NavLink[];
};

export const site: SiteConfig = {
  // ---- Replace the four values below with your real details ----
  name: "Tan Farhan",
  role: "Full-stack developer",
  description:
    "Full-stack developer building, fixing, and shipping web applications — new features, API integrations, and deployment for founders, agencies, and teams.",
  tagline: "I build web applications, and finish the ones already started.",
  email: "farhanweb20@gmail.com",
  siteUrl: "https://frhan-portfolio.vercel.app",
  // ---------------------------------------------------------------

  availability: {
    status: "available",
    label: "Currently available for new projects",
  },
  contactNote:
    "Reply within 24 hours. Available 09:00–20:00 UTC+6, overlap with Europe mornings and US evenings.",

  links: [
    { label: "GitHub", href: "https://github.com/farhan-t-dev" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/tanverul-islam-farhan/" },
  ],
};

/**
 * Section links for the site header, in homepage section order.
 * Contact is not here: it renders as the header's filled button.
 */
export const navLinks: NavLink[] = [
  { label: "Work", href: "/work" },
  { label: "Services", href: "/#services" },
  { label: "Process", href: "/#process" },
  { label: "About", href: "/#about" },
];
