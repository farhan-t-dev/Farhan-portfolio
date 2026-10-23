import type { Metadata } from "next";

import {
  featuredProjects,
  otherProjects,
  rankedProjects,
} from "@/data/projects";
import { site } from "@/data/site";
import { Availability } from "@/components/ui/availability";
import { ProjectRow } from "@/components/ui/project-row";
import { ProjectTile } from "@/components/ui/project-tile";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Every project in one index — what each system does, what was built or changed, and the stack it runs on.",
};

/**
 * Work index — a lead tier and a ruled index, in that order.
 *
 * The page used to be one contact sheet: thirteen equal cells, two
 * columns, a plate each. It proved craft and then flattened the work.
 * A client evaluating "can this person be trusted with my running
 * system" read four personal builds before the production migration,
 * because the array was ordered by which entries happened to have a
 * screenshot. Equal cells also meant the lead work had no more weight
 * than an experiment.
 *
 * So the hierarchy now comes from size, not from decoration:
 *
 *   lead tier  — the six featured projects. Three columns at xl (a 3×2
 *                block: Fletched, Parts Seekr, PropManage / MarketFlow,
 *                Cognabase, migration), two columns from 1024 to 1279,
 *                because three across there leaves ~285px per plate.
 *                Plates are ~370px at 1440, with 24px titles (30px in
 *                the two-up layout).
 *   index      — the other seven as ruled text rows: title, metadata,
 *                stack, summary, links. No plates; seven entries you can
 *                scan in a screen or two.
 *
 * `featured` and `rank` are the only inputs. The flag decides the tier,
 * rank decides the sequence inside it, and the ranks were renumbered so
 * the featured set is the top of the order — "priority order" is now
 * something the page actually does rather than something the masthead
 * claims. Both lists come from src/data/projects.ts; this file only
 * composes them.
 *
 * The closing ask sits on a hairline at the foot of the page: the
 * question at display size, the instruction in serif, then the address
 * at the size Contact gives it. No label rail — at the bottom of an
 * index a "Contact" heading only repeats the nav, and with the rail gone
 * the block starts on the same left margin as the grid above it, so the
 * page ends in its own voice rather than in a borrowed template.
 *
 * With no entries the page falls back to the honest empty state it had
 * before there was anything to list. The route has to resolve either way
 * (the header links to it), and it must never imply work exists when the
 * data file says otherwise — nothing here is invented to fill a page.
 */
export default function WorkPage() {
  if (rankedProjects.length === 0) {
    return (
      <div className="shell gutter py-14 md:py-20 lg:py-24">
        <header className="max-w-[70ch]">
          <h1 className="font-display text-[clamp(2.25rem,6vw,4.5rem)]">
            Work
          </h1>

          <p className="mt-6 font-serif text-xl leading-relaxed text-ink">
            Project notes will be published here. None are live yet.
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
    <>
      <div className="shell gutter pt-14 md:pt-20 lg:pt-24">
        <header className="max-w-[70ch]">
          <h1 className="font-display text-[clamp(2.25rem,6vw,4.5rem)]">
            Work
          </h1>

          <p className="mt-6 max-w-[58ch] font-serif text-xl leading-relaxed text-pretty text-ink">
            Fixes, features and releases on systems that were already running,
            plus a few builds of my own. Each entry opens a short note on what
            the system does, what I changed, and what it runs on.
          </p>
        </header>

        {/* Availability belongs on this page too: a visitor who lands here
            from a search result should not have to go back to the homepage
            to learn that new work is being taken. Full width, on the rule
            the way the hero sets it, rather than under the standfirst where
            the 70ch measure would cut the hairline short. */}
        <Availability className="mt-8 border-t border-line pt-5" />

        {featuredProjects.length > 0 && (
          <ul className="mt-10 grid grid-cols-1 border-t border-line lg:grid-cols-2 xl:grid-cols-3">
            {featuredProjects.map((project, index) => (
              <ProjectTile
                key={project.slug}
                project={project}
                heading="h2"
                eager={index === 0}
                position={index}
              />
            ))}
          </ul>
        )}

        {otherProjects.length > 0 && (
          <section aria-labelledby="more-work" className="mt-14 md:mt-20">
            <h2
              id="more-work"
              className="border-t border-line pt-4 text-sm font-medium text-slate"
            >
              More work
            </h2>

            <ul>
              {otherProjects.map((project) => (
                <ProjectRow key={project.slug} project={project} heading="h3" />
              ))}
            </ul>
          </section>
        )}
      </div>

      {/* Closing ask. The rail is gone: a "Contact" label at the foot of
          an index repeats the nav and made the block look like an
          unfinished section. Starting on the page's left margin lets the
          question, the instruction and the address carry the close. */}
      <section className="border-t border-line">
        <div className="shell gutter py-14 md:py-20 lg:py-24">
          <div className="max-w-[64ch]">
            <h2 className="font-display text-[clamp(1.625rem,3.5vw,2.25rem)] text-balance">
              Something close, but not listed?
            </h2>

            <p className="mt-5 max-w-[54ch] font-serif text-xl leading-relaxed text-pretty text-slate md:text-2xl">
              Send the repository and a sentence about what you need. I read
              the code before quoting.
            </p>

            {site.email.trim().length > 0 && (
              <p className="mt-8">
                <a
                  href={`mailto:${site.email}`}
                  className="font-display text-[clamp(1.2rem,4vw,2.5rem)] text-ink underline decoration-line underline-offset-[0.2em] transition-colors hover:decoration-signal"
                >
                  {site.email}
                </a>
              </p>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
