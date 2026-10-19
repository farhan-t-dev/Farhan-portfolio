import { navLinks, site } from "@/data/site";
import { HeaderScrollBorder } from "./header-scroll-border";

/**
 * Site header: identity + primary navigation.
 *
 * Sticky at the top of the viewport: 64px on desktop, 56px on mobile.
 * The surface is translucent white with a light blur where supported
 * (solid white fallback otherwise), and it has no bottom border at the
 * top of the page — HeaderScrollBorder paints the hairline once the
 * page scrolls.
 *
 * Responsive decision (first-class, not an afterthought):
 * - One row at every width — no wrapping, no hamburger, no menu state.
 * - Mobile keeps name left and the Contact button right; the section
 *   links hide below 768px.
 * Server component: the only client JS is the scroll listener, kept in
 * its own small component.
 */
export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 touch-manipulation bg-paper backdrop-blur supports-backdrop-filter:bg-paper/90">
      <div className="shell gutter flex h-14 items-center justify-between gap-4 md:h-16 md:gap-8">
        <a
          href="/"
          className="text-lg font-semibold tracking-tight text-ink"
        >
          {site.name}
        </a>

        <nav aria-label="Primary" className="flex items-center gap-6">
          <ul className="hidden items-center gap-6 md:flex">
            {navLinks.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="text-sm text-slate transition-colors hover:text-ink"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Filled button, but an anchor to the #contact section. */}
          <a
            href="/#contact"
            className="inline-flex min-h-11 items-center bg-ink px-4 text-sm font-medium text-paper transition-colors hover:bg-signal"
          >
            Contact
          </a>
        </nav>
      </div>

      <HeaderScrollBorder />
    </header>
  );
}
