import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { projects } from "@/data/projects";
import { publicAssetExists } from "@/lib/media";
import { isExternalUrl } from "@/lib/utils";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "@/components/ui/icons";

type PageProps = {
  params: Promise<{ slug: string }>;
};

/**
 * Only slugs in the data file exist. Unknown project URLs are a 404 at
 * the routing level instead of a render-on-demand miss that still has to
 * boot the app to say no.
 */
export const dynamicParams = false;

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) return { title: "Project not found" };

  return {
    title: project.title,
    description: project.description,
  };
}

/**
 * Case study — one page per project in src/data/projects.ts.
 *
 * Everything on it comes from the data file: nothing is invented to make
 * the page look fuller, so a project with only a title, summary and tags
 * renders exactly that. The screenshot renders only if its file actually
 * exists in public/ (see src/lib/media.ts) — drop the PNG in and rebuild,
 * and it appears; until then there is no broken image and no substitute.
 *
 * Composition: the title and summary take the left eight columns and a
 * spec rail (stack, links) sits in the right four, top-aligned with the
 * title. On mobile the DOM order is title -> summary -> rail, so the
 * stack never interrupts the reading order. A footer row hands the
 * reader to the next project, because a case study that ends on a
 * screenshot leaves them with only the back button.
 */
export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params;
  const index = projects.findIndex((p) => p.slug === slug);

  if (index === -1) notFound();

  const project = projects[index];
  const hasImage = publicAssetExists(project.image);
  const nextProject =
    projects.length > 1 ? projects[(index + 1) % projects.length] : null;

  // Placeholders ("https://<site-url>") are dropped rather than rendered
  // as broken anchors.
  const links = [
    { label: "Live site", url: project.liveUrl },
    { label: "Repository", url: project.repoUrl },
  ].filter(
    (link): link is { label: string; url: string } => isExternalUrl(link.url),
  );

  const hasRail = project.tags.length > 0 || links.length > 0;

  // The root layout owns <main>; this renders the detail body only.
  return (
    <article className="shell gutter py-14 md:py-20 lg:py-24">
      <p>
        <Link
          href="/work"
          className="group inline-flex min-h-11 items-center gap-2 text-sm text-slate underline-offset-4 transition-colors hover:text-ink hover:underline"
        >
          <ArrowLeft className="size-4 transition-transform duration-200 group-hover:-translate-x-0.5" />
          All work
          <span className="sr-only"> (project index)</span>
        </Link>
      </p>

      <div className="mt-4 grid grid-cols-1 gap-x-6 gap-y-8 md:mt-6 md:grid-cols-12">
        <h1 className="max-w-[18ch] font-display text-[clamp(2.25rem,6vw,4.5rem)] [overflow-wrap:anywhere] md:col-span-8">
          {project.title}
        </h1>

        <p className="max-w-[58ch] font-serif text-xl leading-relaxed text-ink md:col-span-8">
          {project.description}
        </p>

        {hasRail && (
          <aside
            aria-label="Project details"
            className="md:col-span-4 md:col-start-9 md:row-span-2 md:row-start-1 md:self-start"
          >
            <dl className="border-t border-line">
              {project.tags.length > 0 && (
                <div className="border-b border-line py-4">
                  <dt className="text-sm text-slate">Stack</dt>
                  <dd className="mt-2">
                    <ul className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-ink">
                      {project.tags.map((tag) => (
                        <li key={tag}>{tag}</li>
                      ))}
                    </ul>
                  </dd>
                </div>
              )}

              {links.length > 0 && (
                <div className="border-b border-line py-4">
                  <dt className="text-sm text-slate">Links</dt>
                  <dd className="mt-1 flex flex-col items-start">
                    {links.map((link) => (
                      <a
                        key={link.label}
                        href={link.url}
                        rel="noopener noreferrer"
                        target="_blank"
                        className="group inline-flex min-h-11 items-center gap-1.5 text-sm text-ink underline decoration-line underline-offset-4 transition-colors hover:decoration-signal"
                      >
                        {link.label}
                        <ArrowUpRight className="size-3.5 text-slate transition-colors group-hover:text-ink" />
                        <span className="sr-only"> (opens in a new tab)</span>
                      </a>
                    ))}
                  </dd>
                </div>
              )}
            </dl>
          </aside>
        )}
      </div>

      {hasImage && (
        // 16:9 slot with object-cover: the file's dimensions are unknown
        // until it exists, so a fixed ratio keeps the page free of layout
        // shift. Switch to explicit width/height once the real size is set.
        <div className="relative mt-10 aspect-video w-full overflow-hidden bg-mist md:mt-14">
          <Image
            src={project.image}
            alt={`${project.title} screenshot`}
            fill
            sizes="(min-width: 1312px) 1170px, (min-width: 1024px) 92vw, 100vw"
            className="object-cover"
          />
        </div>
      )}

      <nav aria-label="More work" className="mt-14 border-t border-line md:mt-20">
        {nextProject && (
          <Link
            href={`/projects/${nextProject.slug}`}
            className="group grid grid-cols-1 gap-x-6 gap-y-1 border-b border-line py-5 transition-colors hover:bg-mist/60 focus-within:bg-mist/60 md:grid-cols-12 md:py-6"
          >
            <span className="text-sm text-slate md:col-span-4 lg:col-span-3">
              Next project
            </span>
            <span className="flex items-baseline justify-between gap-6 md:col-span-8 lg:col-span-9">
              <span className="text-lg font-semibold tracking-tight text-ink underline decoration-line underline-offset-4 transition-colors group-hover:decoration-signal">
                {nextProject.title}
              </span>
              <ArrowRight className="size-4 shrink-0 text-slate transition-[transform,color] duration-200 group-hover:translate-x-0.5 group-hover:text-ink" />
            </span>
          </Link>
        )}

        <p className="pt-6">
          <Link
            href="/work"
            className="group inline-flex min-h-11 items-center gap-2 text-sm text-slate underline-offset-4 transition-colors hover:text-ink hover:underline"
          >
            All work
            <ArrowRight className="size-4 transition-transform duration-200 group-hover:translate-x-0.5" />
            <span className="sr-only"> (project index)</span>
          </Link>
        </p>
      </nav>
    </article>
  );
}
