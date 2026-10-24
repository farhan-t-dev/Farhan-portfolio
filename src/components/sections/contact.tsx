import { site } from "@/data/site";
import { Section } from "./section";

/**
 * Contact — the primary CTA is a plain `mailto:` (no form, no backend),
 * with profile links alongside.
 *
 * Every value comes from src/data/site.ts. Missing values degrade to a
 * clearly marked development placeholder rather than rendering a broken
 * link or hiding the section outright: this section MUST keep its id,
 * because the header links to /#contact and a missing target would leave
 * that nav item pointing at nothing. An empty href renders as text, not
 * an anchor. Profile links with an empty href are filtered out.
 */
export function Contact() {
  const hasEmail = site.email.trim().length > 0;
  const links = site.links.filter((link) => link.href.trim().length > 0);

  return (
    <Section id="contact" label="Contact">
      <div className="max-w-[54ch]">
        <p className="font-serif text-xl leading-relaxed text-ink md:text-2xl">
          The fastest way to start is a link to the repository and a
          description of what you need — a feature, a fix, or a smooth deployment.
        </p>

        {/* The address is the widest unbreakable string on the page. The
            clamp floor is 1.2rem, not 1.5rem: at 320px it rendered 335px
            wide against 280px of available gutter and forced a page-level
            horizontal scrollbar. The floor keeps it inside a 320px
            viewport; `break-words` is the last-resort guard below that. */}
        <p className="mt-8">
          {hasEmail ? (
            <a
              href={`mailto:${site.email}`}
              className="inline-flex min-h-11 items-center font-display text-[clamp(1.2rem,4vw,2.5rem)] text-ink underline decoration-slate/70 underline-offset-[0.2em] transition-colors hover:decoration-signal"
            >
              {site.email}
            </a>
          ) : (
            // Clearly marked dev placeholder — not a visitor-facing string.
            <span className="font-display text-[clamp(1.2rem,4vw,2.5rem)] text-slate">
              <span className="sr-only">Development placeholder: </span>
              add email in src/data/site.ts
            </span>
          )}
        </p>

        {links.length > 0 && (
          <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-2">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  rel="noopener noreferrer"
                  target="_blank"
                  className="inline-flex min-h-11 items-center text-sm text-slate underline-offset-4 transition-colors hover:text-ink hover:underline"
                >
                  {link.label}
                  <span className="sr-only"> (opens in a new tab)</span>
                </a>
              </li>
            ))}
          </ul>
        )}
      </div>
    </Section>
  );
}
