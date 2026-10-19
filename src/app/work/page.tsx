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
 * With no entries the page falls back to the honest empty state it had
 * before there was anything to list. The route has to resolve either way
 * (the header links to it), and it must never imply work exists when the
 * data file says otherwise — nothing here is invented to fill a page.
 */
export default function WorkPage() {
  if (projects.length === 0) {
    return (
      <div className="shell gutter py-14 md:py-20 lg:py-24">
        <div className="grid grid-cols-1 gap-x-6 gap-y-6 md:grid-cols-12">
          <h1 className="font-display text-[clamp(2.25rem,6vw,4.5rem)] md:col-span-4 lg:col-span-2">
            Work
          </h1>

          <div className="max-w-[58ch] md:col-span-8 lg:col-span-10">
            <p className="font-serif text-xl leading-relaxed text-ink">
              Project case studies will be published here. None are live yet.
            </p>

            <p className="mt-4 font-serif text-lg leading-relaxed text-slate">
              Each entry will cover the problem, what was built or fixed, and
              the result — written to be checked, not just read. Until then,
              the fastest way to see relevant work is to ask about the
              problem you&apos;re solving.
            </p>

            {site.email && (
              <p className="mt-8">
                <a
                  href={`mailto:${site.email}`}
                  className="text-ink underline decoration-line underline-offset-4 transition-colors hover:decoration-signal"
                >
                  {site.email}
                </a>
              </p>
            )}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="shell gutter py-14 md:py-20 lg:py-24">
      <div className="grid grid-cols-1 gap-x-6 gap-y-6 md:grid-cols-12">
        <h1 className="font-display text-[clamp(2.25rem,6vw,4.5rem)] md:col-span-4 lg:col-span-2">
          Work
        </h1>

        <div className="md:col-span-8 lg:col-span-10">
          <p className="max-w-[58ch] font-serif text-xl leading-relaxed text-ink">
            Selected projects. Each one opens a page with the problem, what
            was built or fixed, and the result.
          </p>

          <ul className="mt-10 border-t border-line">
            {projects.map((project) => (
              <ProjectRow key={project.slug} project={project} heading="h2" />
            ))}
          </ul>

          <p className="mt-8 font-serif text-lg leading-relaxed text-slate">
            Something close to your problem but not listed here?{" "}
            <a
              href={`mailto:${site.email}`}
              className="text-ink underline decoration-line underline-offset-4 transition-colors hover:decoration-signal"
            >
              {site.email}
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
