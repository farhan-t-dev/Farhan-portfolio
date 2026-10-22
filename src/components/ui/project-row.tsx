import Link from "next/link";

import type { Project } from "@/data/projects";
import { isExternalUrl } from "@/lib/utils";
import { ArrowRight } from "./icons";
import { ProjectThumb } from "./project-thumb";

type ProjectRowProps = {
  project: Project;
  /**
   * Heading level, not a rendered string: the row sits under the section
   * label (h2), so its own heading is h3. The prop exists so the row can
   * be dropped under a page title instead without skipping a level.
   */
  heading?: "h2" | "h3";
};

/**
 * One project as a hairline row — thumbnail, title and stack, summary and
 * outbound links, in the same 12-column rhythm as the Services and Stack
 * sections so work reads as part of one grid.
 *
 * The thumbnail takes the two columns the section label would otherwise
 * occupy, which is why the homepage's Work band runs the full shell
 * width (see Section's `wide` variant): placed inside the indented
 * column, the same thumbnail squeezed the summary to roughly 40
 * characters a line. At md and below the thumbnail drops out rather than
 * shrinking to a smudge — /work is where images are legible on a phone.
 *
 * The title link stretches over the whole row, so the row can be opened
 * from anywhere along it — the summary says each entry opens a page, and
 * a 20px-high title alone was a thin target on touch. Outbound links sit
 * above that overlay, and the arrow marks the row as a way in without
 * turning it into a card.
 *
 * Links are filtered through isExternalUrl: a placeholder like
 * "https://<site-url>" in projects.ts renders as no link at all, never
 * as a broken anchor.
 */
export function ProjectRow({ project, heading: Heading = "h3" }: ProjectRowProps) {
  const links = [
    { label: "Live site", url: project.liveUrl },
    { label: "Repository", url: project.repoUrl },
  ].filter(
    (link): link is { label: string; url: string } => isExternalUrl(link.url),
  );

  return (
    <li className="group relative grid grid-cols-1 gap-x-6 gap-y-2 border-b border-line py-5 transition-colors duration-150 hover:bg-mist/60 focus-within:bg-mist/60 md:grid-cols-12 md:py-6">
      <div className="hidden lg:col-span-2 lg:row-span-2 lg:block">
        <ProjectThumb
          project={project}
          sizes="(min-width: 1312px) 190px, 15vw"
          className="aspect-[3/2] w-full self-start"
        />
      </div>

      <div className="min-w-0 md:col-span-4">
        <Heading className="text-lg font-semibold tracking-tight [overflow-wrap:anywhere]">
          <Link
            href={`/projects/${project.slug}`}
            className="underline decoration-line underline-offset-4 transition-colors after:absolute after:inset-0 after:content-[''] hover:decoration-signal"
          >
            {project.title}
            <span className="sr-only"> — case study</span>
          </Link>
        </Heading>

        {project.tags.length > 0 && (
          <ul className="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-sm text-slate">
            {project.tags.map((tag) => (
              <li key={tag}>{tag}</li>
            ))}
          </ul>
        )}
      </div>

      <div className="min-w-0 md:col-span-8 lg:col-span-6 lg:col-start-7 lg:pr-7">
        <p className="max-w-[62ch] font-serif text-base leading-relaxed text-slate">
          {project.description}
        </p>

        {links.length > 0 && (
          <ul className="relative z-10 mt-3 flex flex-wrap gap-x-6 gap-y-1 text-sm">
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

      <ArrowRight className="pointer-events-none absolute right-0 top-6 hidden size-4 shrink-0 text-slate opacity-0 transition-[opacity,transform,color] duration-200 group-hover:translate-x-0.5 group-hover:text-ink group-hover:opacity-100 group-focus-within:text-ink group-focus-within:opacity-100 md:block" />
    </li>
  );
}
