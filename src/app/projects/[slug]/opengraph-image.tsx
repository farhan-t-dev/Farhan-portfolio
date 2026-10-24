import { readFile } from "node:fs/promises";
import { join } from "node:path";

import { ImageResponse } from "next/og";
import sharp from "sharp";

import { projects } from "@/data/projects";
import { site } from "@/data/site";
import { loadOgFonts } from "@/lib/og/fonts";
import { ProjectCard } from "@/lib/og/project-card";
import { SiteCard } from "@/lib/og/site-card";
import { projectLeadImage } from "@/lib/project-media";

type ImageProps = {
  params: Promise<{ slug: string }>;
};

export const alt = `${site.name} — project note`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export const dynamicParams = false;

/** Every slug gets a card at build time, in the same order as the pages. */
export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

/**
 * A project's card. The screenshot is read from public/, cropped to the
 * right panel's ratio, and inlined as JPEG: Satori renders WebP silently
 * blank, so the conversion is not optional.
 *
 * `generateStaticParams` keeps this static. Every card is rendered once at
 * build; adding a screenshot needs a rebuild, like the page itself.
 */
export default async function Image({ params }: ImageProps) {
  const { slug } = await params;
  const project = projects.find((entry) => entry.slug === slug);

  if (!project) {
    return new ImageResponse(<SiteCard />, {
      ...size,
      fonts: await loadOgFonts(),
    });
  }

  const lead = projectLeadImage(project);
  let imageSrc: string | undefined;

  if (lead) {
    const file = await readFile(
      join(process.cwd(), "public", lead.src),
    );
    const jpeg = await sharp(file)
      .resize({ width: 720, height: 840, fit: "cover", position: "top" })
      .jpeg({ quality: 72 })
      .toBuffer();
    imageSrc = `data:image/jpeg;base64,${jpeg.toString("base64")}`;
  }

  const image = new ImageResponse(
    <ProjectCard project={project} imageSrc={imageSrc} />,
    {
      ...size,
      fonts: await loadOgFonts(),
    },
  );

  // ImageResponse always emits a full-colour PNG. Photo-led cards land
  // around 350–420 KB, above WhatsApp's ~300 KB preview limit, so the
  // rendered card is quantised to a 256-colour palette. Text and hairlines
  // survive it; the screenshots lose nothing visible at preview size.
  const png = Buffer.from(await image.arrayBuffer());
  const optimized = await sharp(png)
    .png({ compressionLevel: 9, palette: true, quality: 80, effort: 10 })
    .toBuffer();

  return new Response(optimized, {
    headers: { "Content-Type": "image/png" },
  });
}
