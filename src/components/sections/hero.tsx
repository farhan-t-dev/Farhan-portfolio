import { site } from "@/data/site";
import { Availability } from "@/components/ui/availability";

/**
 * Hero — the poster moment. The single orchestrated entrance on the page
 * (one CSS animation on the headline, collapsed to instant under
 * prefers-reduced-motion by the global rule in globals.css).
 *
 * Positioning covers both new development and existing-app work; the
 * headline is distinctive without being rescue-only. Server component.
 *
 * The clamp floor is 2.25rem, not 2.75rem: "applications," is the widest
 * unbreakable word in the headline, and at 2.75rem it painted about 37px
 * past the 265px content column at a 320px viewport, which was the last
 * source of horizontal page scroll at that width. 2.25rem lets the word
 * sit inside the column down to 320 without hyphenating a display line.
 */
export function Hero() {
  return (
    <section className="shell gutter pt-14 pb-16 md:pt-20 md:pb-20 lg:pt-28 lg:pb-24">
      <div className="grid grid-cols-1 gap-x-6 gap-y-8 md:grid-cols-12">
        <h1 className="font-display animate-hero-in text-[clamp(2.25rem,7.5vw,6.25rem)] text-balance md:col-span-11">
          {site.tagline}
        </h1>

        <p className="max-w-[62ch] font-serif text-lg leading-relaxed text-slate md:col-span-7 md:text-xl">
          Full-stack development, AI, server setup, and migrations for founders,
          agencies, and teams: new features, integrations, debugging, and
          deployment — whether we&apos;re starting from an empty repository, an
          existing codebase, or a live production system.
        </p>

        <div className="flex flex-col gap-4 border-t border-line pt-5 md:col-span-12 md:flex-row md:items-baseline md:justify-between">
          {site.availability ? (
            <Availability />
          ) : (
            <span />
          )}

          {site.email ? (
            <a
              href={`mailto:${site.email}`}
              className="inline-flex min-h-11 items-center text-sm text-ink underline decoration-line underline-offset-4 transition-colors hover:decoration-signal"
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
