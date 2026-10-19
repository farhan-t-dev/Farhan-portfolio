import { site } from "@/data/site";

/**
 * Site footer: a copyright line + a self-referential colophon.
 *
 * Profile links (GitHub, LinkedIn) live in the Contact section only —
 * repeating them here made the footer a second nav with no added value.
 *
 * The colophon is deliberate proof-of-work for the agency and employer
 * audience: the site names its own stack honestly, and is itself a
 * polished, accessible Next.js build. Server component.
 */
export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line bg-mist">
      <div className="shell gutter flex flex-col gap-4 py-8 md:flex-row md:items-baseline md:justify-between">
        <p className="text-sm text-slate">
          © {year} {site.name}
        </p>

        <p className="text-sm text-slate">
          Built with Next.js, React and Tailwind CSS
        </p>
      </div>
    </footer>
  );
}
