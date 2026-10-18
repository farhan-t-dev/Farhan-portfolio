import { site } from "@/data/site";

/**
 * Site footer: profile links + a self-referential colophon.
 *
 * The colophon is deliberate proof-of-work for the agency and employer
 * audience: the site names its own stack honestly, and is itself a
 * polished, accessible Next.js build. Server component.
 */
export function SiteFooter() {
  return (
    <footer className="border-t border-line bg-mist">
      <div className="shell gutter flex flex-col gap-4 py-8 md:flex-row md:items-baseline md:justify-between">
        <nav aria-label="Profiles">
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            {site.links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  rel="noopener noreferrer"
                  target="_blank"
                  className="text-sm text-slate underline-offset-4 transition-colors hover:text-ink hover:underline"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <p className="text-sm text-slate">
          Built with Next.js, React and Tailwind CSS
        </p>
      </div>
    </footer>
  );
}
