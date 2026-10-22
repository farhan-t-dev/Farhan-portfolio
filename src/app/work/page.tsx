import type { Metadata } from "next";

import { projects } from "@/data/projects";
import { site } from "@/data/site";
import { ProjectRow } from "@/components/ui/project-row";

export const metadata: Metadata = {
  title: "Work",
  description: "Selected project case studies.",
};

/**
 * Work index — every project in src/data/projects.ts, as hairline rows
 * matching the Services and Stack sections on the homepage.
 *
 * Masthead first, then a full-width index, the same way the homepage
 * opens: display title, one standfirst, a rule, then the rows. An
 * earlier version set the overtitled h1 beside the standfirst in a
 * two-column band, which put a 4.5rem word too close to the paragraph
 * at lg and squeezed the row grid into the eight columns that remained.
 * The rows now use the whole shell, so the title and stack columns get
 * the width they need at 1024.
 *
 * With no entries the page falls back to the honest empty state it had
 * before there was anything to list. The route has to resolve either way
 * (the header links to it), and it must never imply work exists when the
 * data file says otherwise — nothing here is invented to fill a page.
 */
export default function WorkPage() {
  if (projects.length === 0) {
    return (
      <div className="shell gutter py-14 md:py-20 lg:py-24">
        <header className="max-w-[70ch]">
          <h1 className="font-display text-[clamp(2.25rem,6vw,4.5rem)]">
            Work
          </h1>

          <p className="mt-6 font-serif text-xl leading-relaxed text-ink">
            Project case studies will be published here. None are live yet.
          </p>

          <p className="mt-4 font-serif text-lg leading-relaxed text-slate">
            Each entry will cover what the system does, what was built or
            changed, and the stack it runs on — written to be checked, not just
            read. Until then, the fastest way to see relevant work is to ask
            about the problem you&apos;re solving.
          </p>

          {site.email.trim().length > 0 && (
            <p className="mt-8">
              <a
                href={`mailto:${site.email}`}
                className="text-ink underline decoration-line underline-offset-4 transition-colors hover:decoration-signal"
              >
                {site.email}
              </a>
            </p>
          )}
        </header>
      </div>
    );
  }

  return (
    <div className="shell gutter py-14 md:py-20 lg:py-24">
      <header className="max-w-[70ch]">
        <h1 className="font-display text-[clamp(2.25rem,6vw,4.5rem)]">
          Work
        </h1>

        <p className="mt-6 max-w-[58ch] font-serif text-xl leading-relaxed text-ink">
          Selected projects. Each one opens a short case study: what the system
          does, what was built or changed, and the stack it runs on.
        </p>
      </header>

      <ul className="mt-10 border-t border-line">
        {projects.map((project) => (
          <ProjectRow key={project.slug} project={project} heading="h2" />
        ))}
      </ul>

      <p className="mt-8 max-w-[58ch] font-serif text-lg leading-relaxed text-slate">
        Something close to your problem but not listed here?{" "}
        <a
          href={`mailto:${site.email}`}
          className="text-ink underline decoration-line underline-offset-4 transition-colors hover:decoration-signal"
        >
          {site.email}
        </a>
      </p>
    </div>
  );
}
