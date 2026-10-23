import type { Project, ProjectImage } from "@/data/projects";
import { publicAssetExists } from "./media";

/**
 * SERVER ONLY, like media.ts — it checks the filesystem.
 *
 * Projects declare the images they intend to ship; this resolves that
 * intent against what is actually in public/. Call sites get a clean list
 * and never have to branch on a missing file.
 */
export function existingProjectImages(project: Project): ProjectImage[] {
  return project.images.filter((image) => publicAssetExists(image.src));
}

/** The lead image, or undefined when the project has no plate yet. */
export function projectLeadImage(project: Project): ProjectImage | undefined {
  return existingProjectImages(project)[0];
}

/**
 * Alt text for a plate. Per-image alt wins; the fallback names the
 * project, which is enough for a UI screenshot in context.
 */
export function projectImageAlt(project: Project, image: ProjectImage): string {
  return image.alt ?? `${project.title} screenshot`;
}
