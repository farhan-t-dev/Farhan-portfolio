import Link from "next/link";

import { projects } from "@/data/projects";
import { ArrowRight } from "@/components/ui/icons";
import { ProjectRow } from "@/components/ui/project-row";
import { Section } from "./section";

/**
 * Work — the proof, placed directly after the hero so shipped systems
 * are visible before the services list, and kept ahead of About/Contact
 * where the ask is made. Featured entries only; the complete index is
 * /work, which this links to.
 *
 * This is the one full-width section (Section's `wide` variant): the
 * thumbnail column takes the two columns the label hangs in, so the label
 * moves above the index. At the usual indented width a thumbnail squeezed
 * the summaries to about 40 characters a line.
 *
 * Renders nothing when nothing is featured: an unfinished data file
 * costs the homepage a section, not an empty band on the page.
 */
export function Work() {
  const featured = projects.filter((project) => project.featured);

  if (featured.length === 0) return null;

  return (
    <Section id="work" label="Work" wide>
      <ul className="border-t border-line">
        {featured.map((project) => (
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
          <span className="sr-only"> (case study index)</span>
        </Link>
      </p>
    </Section>
  );
}
