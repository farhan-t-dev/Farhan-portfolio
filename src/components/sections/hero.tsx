import { site } from "@/data/site";

/**
 * Hero — the poster moment. The single orchestrated entrance on the page
 * (one CSS animation on the headline, collapsed to instant under
 * prefers-reduced-motion by the global rule in globals.css).
 *
 * Positioning covers both new development and existing-app work; the
 * headline is distinctive without being rescue-only. Server component.
 */
export function Hero() {
  return (
    <section className="shell gutter pt-14 pb-16 md:pt-20 md:pb-20 lg:pt-28 lg:pb-24">
      <div className="grid grid-cols-1 gap-x-6 gap-y-8 md:grid-cols-12">
        <h1 className="font-display animate-hero-in text-[clamp(2.75rem,7.5vw,6.25rem)] text-balance md:col-span-11">
          I build web applications, and finish the ones already started.
        </h1>

        <p className="max-w-[62ch] font-serif text-lg leading-relaxed text-slate md:col-span-7 md:text-xl">
          Full-stack development for founders, agencies, and teams: new
          features, API integrations, debugging, and deployment — whether
          we&apos;re starting from an empty repository or an existing
          codebase.
        </p>

        <div className="flex flex-col gap-4 border-t border-line pt-5 md:col-span-12 md:flex-row md:items-baseline md:justify-between">
          {site.availability ? (
            <p className="flex items-center gap-2.5 text-sm text-slate">
              {/* Status is a claim from site.ts; the dot is decorative and
                  carries no colour the label doesn't already state. */}
              <span
                aria-hidden="true"
                className={
                  site.availability.status === "available"
                    ? "size-2 shrink-0 rounded-full bg-signal"
                    : "size-2 shrink-0 rounded-full bg-line"
                }
              />
              {site.availability.label}
            </p>
          ) : (
            <span />
          )}

          {site.email ? (
            <a
              href={`mailto:${site.email}`}
              className="text-sm text-ink underline decoration-line underline-offset-4 transition-colors hover:decoration-signal"
            >
              {site.email}
            </a>
          ) : (
            <span />
          )}
        </div>
      </div>
    </section>
  );
}
