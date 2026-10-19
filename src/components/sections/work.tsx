import Link from "next/link";

import { projects } from "@/data/projects";
import { ProjectRow } from "@/components/ui/project-row";
import { Section } from "./section";

/**
 * Work — the proof, placed after Stack so the pitch moves from claim to
 * evidence and before About/Contact, where the ask is made. Featured
 * entries only; the complete index is /work, which this links to.
 *
 * Renders nothing when nothing is featured: an unfinished data file
 * costs the homepage a section, not an empty band on the page.
 */
export function Work() {
  const featured = projects.filter((project) => project.featured);

  if (featured.length === 0) return null;

  return (
    <Section id="work" label="Work">
      <ul className="border-t border-line">
        {featured.map((project) => (
          <ProjectRow key={project.slug} project={project} />
        ))}
      </ul>

      <p className="mt-6">
        <Link
          href="/work"
          className="text-sm text-slate underline-offset-4 transition-colors hover:text-ink hover:underline"
        >
          All work
          <span className="sr-only"> (case study index)</span>
        </Link>
      </p>
    </Section>
  );
}
