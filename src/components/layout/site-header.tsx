import { navLinks, site } from "@/data/site";

/**
 * Site header: identity + primary navigation.
 *
 * Responsive decision (first-class, not an afterthought):
 * - The name stacks above the role at every width — no em-dash label, and
 *   it reads cleanly down to 360px without wrapping mid-word.
 * - Nav is three short items, so it stays visible at all widths. No
 *   hamburger, no client-side menu state, no JS. The <ul> wraps rather
 *   than scrolls.
 * Server component — no interactivity beyond links.
 */
export function SiteHeader() {
  return (
    <header className="border-b border-line">
      <div className="shell gutter flex flex-col gap-4 py-5 sm:flex-row sm:items-end sm:justify-between sm:gap-8">
        <div className="flex flex-col">
          <a
            href="/"
            className="text-lg font-semibold tracking-tight text-ink"
          >
            {site.name}
          </a>
          <span className="text-sm text-slate">{site.role}</span>
        </div>

        <nav aria-label="Primary">
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
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
        </nav>
      </div>
    </header>
  );
}
