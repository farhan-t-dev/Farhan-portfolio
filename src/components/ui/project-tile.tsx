import Link from "next/link";

import type { Project } from "@/data/projects";
import { projectLeadImage } from "@/lib/project-media";
import { cn, isExternalUrl } from "@/lib/utils";
import { ArrowRight, ArrowUpRight } from "./icons";
import { ProjectMeta } from "./project-meta";
import { ProjectScope } from "./project-scope";
import { ProjectThumb } from "./project-thumb";

type ProjectTileProps = {
  project: Project;
  /** h2 under the page title; h3 when a section label sits between them. */
  heading?: "h2" | "h3";
  /** First tile: its screenshot is the page's LCP. */
  eager?: boolean;
  /**
   * Zero-based position in the featured grid. The cell's rule and gutter
   * depend on where it sits: two across from lg, three across from xl.
   * The grid cannot express that with `nth-child` alone, because the
   * column count changes at xl and the rules have to change with it.
   */
  position: number;
};

/** Cell outlines and gutters for the 2-up and 3-up arrangements. */
function cellClasses(position: number) {
  return cn(
    // Two columns from lg: every second cell opens with a rule.
    position % 2 === 0 ? "lg:pr-8" : "lg:border-l lg:pl-8",
    // Three columns from xl: first in each row loses both the rule and
    // the left gutter; the last loses the right gutter. `xl:` wins over
    // `lg:` because Tailwind emits breakpoints in order.
    position % 3 === 0
      ? "xl:border-l-0 xl:pl-0"
      : "xl:border-l xl:pl-6",
    position % 3 === 2 ? "xl:pr-0" : "xl:pr-6",
  );
}

/**
 * One project as a large cell in the work index's lead tier: title,
 * metadata, plate, summary, stack, then the hairline. No box, no card —
 * the rules of the surrounding grid do the framing.
 *
 * Six featured cells make a 3×2 block at xl, so the tier is real: plates
 * run about 370px wide at 1440, while the entries below are ruled text.
 * Between 1024 and 1279 the block falls back to two columns — three
 * across there would leave roughly 285px per plate, which stops reading
 * as evidence. Titles step down from 30px to 24px when the third column
 * arrives: at 30px "Live marketplace migration" wrapped onto a second
 * line and dropped its plate 36px below the rest of the row. Scale is
 * what separates the lead work from the index; no "featured" badge is
 * needed to say it, and a badge would only repeat what the reader can
 * already see.
 *
 * The screenshot is the way in, so the title link stretches over the
 * whole cell. That stretched link is why the focus ring is drawn on the
 * cell rather than the title (see `data-stretched-link` in globals.css):
 * the visible ring should match the hit area. Outbound links sit above
 * that overlay.
 *
 * Stack and links are two rows, not one justified line. In a 3-up cell
 * the tags alone nearly fill the width; sharing the row with "Live site /
 * Repository" pushed the last link against the column rule and left no
 * gap between the groups. Stacked, the links always start on their own
 * line, and the tags are free to wrap.
 *
 * A cell with no still yet holds its plate slot with `ProjectScope`, so
 * the caption baseline stays level with its neighbour instead of leaving
 * half a row of white.
 */
export function ProjectTile({
  project,
  heading: Heading = "h2",
  eager = false,
  position,
}: ProjectTileProps) {
  const links = [
    { label: "Live site", url: project.liveUrl },
    { label: "Repository", url: project.repoUrl },
  ].filter(
    (link): link is { label: string; url: string } => isExternalUrl(link.url),
  );

  const leadImage = projectLeadImage(project);

  return (
    <li
      className={cn(
        "group relative flex h-full flex-col border-b border-line py-6 transition-colors duration-150 hover:bg-mist/60 focus-within:bg-mist/60",
        cellClasses(position),
      )}
    >
      <div className="flex items-baseline justify-between gap-4">
        <Heading className="text-2xl font-semibold tracking-tight [overflow-wrap:anywhere] lg:text-3xl xl:text-2xl">
          <Link
            href={`/projects/${project.slug}`}
            data-stretched-link
            className="underline decoration-slate/70 underline-offset-4 transition-colors after:absolute after:inset-0 after:content-[''] hover:decoration-signal"
          >
            {project.title}
            <span className="sr-only">, project note</span>
          </Link>
        </Heading>

        <ArrowRight className="size-4 shrink-0 self-center text-slate opacity-0 transition-[opacity,transform] duration-200 group-hover:translate-x-0.5 group-hover:opacity-100 group-focus-within:opacity-100" />
      </div>

      <ProjectMeta project={project} className="mt-2" />

      {leadImage ? (
        <ProjectThumb
          project={project}
          eager={eager}
          sizes="(min-width: 1280px) 30vw, (min-width: 1024px) 46vw, 100vw"
          className="mt-4 aspect-[16/10] w-full"
        />
      ) : (
        project.scope && (
          <ProjectScope
            items={project.scope}
            className="mt-4 lg:aspect-[16/10]"
          />
        )
      )}

      <p className="mt-4 max-w-[58ch] font-serif text-base leading-relaxed text-pretty text-slate">
        {project.description}
      </p>

      {/* Two rows, stack above links. Sharing one justified row pushed
          "Repository" into the column rule once the grid went 3-up. */}
      <div className="mt-auto flex flex-col gap-2 pt-3">
        {project.tags.length > 0 && (
          <ul className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-slate">
            {project.tags.map((tag) => (
              <li key={tag}>{tag}</li>
            ))}
          </ul>
        )}

        {links.length > 0 && (
          <ul className="relative z-10 flex flex-wrap gap-x-5 text-sm">
            {links.map((link) => (
              <li key={link.label}>
                <a
                  href={link.url}
                  rel="noopener noreferrer"
                  target="_blank"
                  className="inline-flex min-h-11 items-center gap-1.5 text-slate underline-offset-4 transition-colors hover:text-ink hover:underline"
                >
                  {link.label}
                  <ArrowUpRight className="size-3.5" />
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
