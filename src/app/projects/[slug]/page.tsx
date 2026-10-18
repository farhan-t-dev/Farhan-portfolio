import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { projects } from "@/data/projects";

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

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) notFound();

  // The root layout owns <main>; this renders the detail body only.
  // Full template (hero image, problem/approach/outcome, links) is Stage 4.
  return (
    <article className="shell gutter py-24">
      <h1 className="font-display text-4xl">{project.title}</h1>
    </article>
  );
}
