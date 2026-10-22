import type { Metadata } from "next";

import { projects } from "@/data/projects";
import { site } from "@/data/site";
import { ProjectTile } from "@/components/ui/project-tile";

export const metadata: Metadata = {
  title: "Work",
  description: "Selected project case studies.",
};

/**
 * Work index — every project in src/data/projects.ts as a two-column
 * contact sheet: screenshot, title, summary, stack, hairline. No boxes;
 * the rules of the grid do the framing.
 *
 * The page used to be the same ruled list as Services: title on the left,
 * summary on the right, eight rows of grey text. It is the page people
 * scan for evidence, and a screenshot at ~570px is faster to read than a
 * paragraph at 62ch. Two columns, not three: a third would leave each
 * frame about 370px wide at 1440, where it stops reading as evidence and
 * becomes texture.
 *
 * The title sits above the plate like a caption, which also means a
 * project whose screenshot has not been supplied yet still starts its
 * cell correctly: ProjectThumb renders nothing rather than an empty
 * frame, so the page fills in as the files land instead of advertising
 * what is missing. That matters now — most of the eight are still
 * waiting for screenshots.
 *
 * Masthead first, then the grid, the same way the homepage opens:
 * display title, one standfirst, a rule, then the entries.
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

      <ul className="mt-10 grid grid-cols-1 border-t border-line lg:grid-cols-2">
        {projects.map((project) => (
          <ProjectTile key={project.slug} project={project} heading="h2" />
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
