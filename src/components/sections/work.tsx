import Link from "next/link";

import { featuredProjects } from "@/data/projects";
import { ArrowRight } from "@/components/ui/icons";
import { ProjectRow } from "@/components/ui/project-row";
import { Section } from "./section";

/**
 * Work — the proof, placed directly after the hero so shipped systems
 * are visible before the services list, and kept ahead of About/Contact
 * where the ask is made. Featured entries only; the complete index is
 * /work, which this links to.
 *
 * The homepage band is a typographic index, not a contact sheet: the
 * label sits in the same left rail as every other section, and each row
 * puts the title and stack on the left with the summary on the right.
 * Screenshots live on /work, where a two-column plate is wide enough to
 * read as evidence — here they would force the label out of the rail.
 *
 * Renders nothing when nothing is featured: an unfinished data file
 * costs the homepage a section, not an empty band on the page.
 *
 * Featured rows keep the same ranked order as /work, so the homepage
 * reads as a selection of the index rather than a second, unrelated
 * ordering.
 */
export function Work() {
  if (featuredProjects.length === 0) return null;

  return (
    <Section id="work" label="Work">
      <ul className="border-t border-line">
        {featuredProjects.map((project) => (
          <ProjectRow key={project.slug} project={project} />
        ))}
      </ul>

      <p className="mt-6">
        <Link
          href="/work"
          className="group inline-flex min-h-11 items-center gap-2 text-sm text-slate underline-offset-4 transition-colors hover:text-ink hover:underline"
        >
          All work
          <ArrowRight className="size-4 transition-transform duration-200 group-hover:translate-x-0.5" />
          <span className="sr-only"> (project index)</span>
        </Link>
      </p>
    </Section>
  );
}
