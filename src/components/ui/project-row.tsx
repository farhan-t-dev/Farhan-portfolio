import Link from "next/link";

import type { Project } from "@/data/projects";
import { isExternalUrl } from "@/lib/utils";

type ProjectRowProps = {
  project: Project;
  /**
   * Heading level, not a rendered string: the row sits under a section
   * label (h2) on the homepage but under the page title (h1) on /work,
   * so its own heading is h3 or h2 respectively. Skipping a level breaks
   * the outline screen-reader users navigate by.
   */
  heading?: "h2" | "h3";
};

/**
 * One project as a hairline row — title and stack on the left, summary
 * and outbound links on the right, in the same 12-column rhythm as the
 * Services and Stack sections so work reads as part of one grid.
 *
 * Deliberately not a card and deliberately imageless: the row has to
 * survive a project whose screenshot has not been added yet, and the
 * case study page is where imagery belongs.
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
    <li className="grid grid-cols-1 gap-x-6 gap-y-2 border-b border-line py-5 md:grid-cols-12 md:py-6">
      <div className="md:col-span-4 lg:col-span-3">
        <Heading className="text-lg font-semibold tracking-tight">
          <Link
            href={`/projects/${project.slug}`}
            className="underline decoration-line underline-offset-4 transition-colors hover:decoration-signal"
          >
            {project.title}
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

      <div className="md:col-span-8 lg:col-span-9">
        <p className="max-w-[62ch] font-serif text-base leading-relaxed text-slate">
          {project.description}
        </p>

        {links.length > 0 && (
          <ul className="mt-3 flex flex-wrap gap-x-6 gap-y-2 text-sm">
            {links.map((link) => (
              <li key={link.label}>
                <a
                  href={link.url}
                  rel="noopener noreferrer"
                  target="_blank"
                  className="text-slate underline-offset-4 transition-colors hover:text-ink hover:underline"
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
