import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { projects } from "@/data/projects";
import { publicAssetExists } from "@/lib/media";
import { isExternalUrl } from "@/lib/utils";

type PageProps = {
  params: Promise<{ slug: string }>;
};

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
 */
export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) notFound();

  const hasImage = publicAssetExists(project.image);

  // Placeholders ("https://<site-url>") are dropped rather than rendered
  // as broken anchors.
  const links = [
    { label: "Live site", url: project.liveUrl },
    { label: "Repository", url: project.repoUrl },
  ].filter(
    (link): link is { label: string; url: string } => isExternalUrl(link.url),
  );

  // The root layout owns <main>; this renders the detail body only.
  return (
    <article className="shell gutter py-14 md:py-20 lg:py-24">
      <p>
        <Link
          href="/work"
          className="text-sm text-slate underline-offset-4 transition-colors hover:text-ink hover:underline"
        >
          Work
          <span className="sr-only"> (all projects)</span>
        </Link>
      </p>

      <h1 className="mt-6 max-w-[18ch] font-display text-[clamp(2.25rem,6vw,4.5rem)]">
        {project.title}
      </h1>

      <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-6 md:grid-cols-12">
        <div className="md:col-span-8 lg:col-span-8">
          <p className="max-w-[58ch] font-serif text-xl leading-relaxed text-ink">
            {project.description}
          </p>

          {project.tags.length > 0 && (
            <ul className="mt-6 flex flex-wrap gap-x-4 gap-y-1 text-sm text-slate">
              {project.tags.map((tag) => (
                <li key={tag}>{tag}</li>
              ))}
            </ul>
          )}

          {links.length > 0 && (
            <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm">
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
      </div>

      {hasImage && (
        // 16:9 slot with object-cover: the file's dimensions are unknown
        // until it exists, so a fixed ratio keeps the page free of layout
        // shift. Switch to explicit width/height once the real size is set.
        <div className="relative mt-10 aspect-video w-full max-w-4xl overflow-hidden md:mt-14">
          <Image
            src={project.image}
            alt={`${project.title} screenshot`}
            fill
            sizes="(min-width: 1024px) 896px, 100vw"
            className="object-cover"
          />
        </div>
      )}
    </article>
  );
}
