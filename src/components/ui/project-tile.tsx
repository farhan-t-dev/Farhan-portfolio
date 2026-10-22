import Link from "next/link";

import type { Project } from "@/data/projects";
import { isExternalUrl } from "@/lib/utils";
import { ArrowRight } from "./icons";
import { ProjectThumb } from "./project-thumb";

type ProjectTileProps = {
  project: Project;
  /** h2 under the page title; no section label sits between them. */
  heading?: "h2" | "h3";
};

/**
 * One project as a cell in the work index's contact sheet: screenshot,
 * title, summary, stack, then the hairline. No box, no card — the rules
 * of the surrounding grid do the framing.
 *
 * Two columns at lg and up. Three would fit the count, but the entries
 * are screenshots of dashboards and sites; a third column on a 1440
 * viewport leaves each frame about 370px wide, where it stops reading as
 * evidence and becomes texture. Two columns give ~570px at 1440 and
 * ~430px at 1024. Below lg the sheet is a single column, so a tablet gets
 * one full-width plate at a time.
 *
 * The screenshot is the way in, so the title link stretches over the
 * whole cell. Outbound links sit above that overlay.
 */
export function ProjectTile({ project, heading: Heading = "h2" }: ProjectTileProps) {
  const links = [
    { label: "Live site", url: project.liveUrl },
    { label: "Repository", url: project.repoUrl },
  ].filter(
    (link): link is { label: string; url: string } => isExternalUrl(link.url),
  );

  return (
    <li className="group relative border-b border-line py-6 lg:odd:pr-8 lg:even:border-l lg:even:pl-8">
      <div className="flex items-baseline justify-between gap-4">
        <Heading className="text-xl font-semibold tracking-tight [overflow-wrap:anywhere]">
          <Link
            href={`/projects/${project.slug}`}
            className="underline decoration-line underline-offset-4 transition-colors after:absolute after:inset-0 after:content-[''] hover:decoration-signal"
          >
            {project.title}
            <span className="sr-only"> — case study</span>
          </Link>
        </Heading>

        <ArrowRight className="size-4 shrink-0 text-slate opacity-0 transition-[opacity,transform] duration-200 group-hover:translate-x-0.5 group-hover:opacity-100 group-focus-within:opacity-100" />
      </div>

      <ProjectThumb
        project={project}
        sizes="(min-width: 1024px) 46vw, 100vw"
        className="mt-3 aspect-[16/10] w-full"
      />

      <p className="mt-3 max-w-[58ch] font-serif text-base leading-relaxed text-slate">
        {project.description}
      </p>

      <div className="mt-4 flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2">
        {project.tags.length > 0 && (
          <ul className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-slate">
            {project.tags.map((tag) => (
              <li key={tag}>{tag}</li>
            ))}
          </ul>
        )}

        {links.length > 0 && (
          <ul className="relative z-10 flex flex-wrap gap-x-5 gap-y-1 text-sm">
            {links.map((link) => (
              <li key={link.label}>
                <a
                  href={link.url}
                  rel="noopener noreferrer"
                  target="_blank"
                  className="inline-flex min-h-6 items-center text-slate underline-offset-4 transition-colors hover:text-ink hover:underline"
                >
                  {link.label}
                  <span className="sr-only"> (opens in a new tab)</span>
                </a>
              </li>
            ))}
          </ul>
        )}
      </div>
    </li>
  );
}
