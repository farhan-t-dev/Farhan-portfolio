import Image from "next/image";

import type { Project } from "@/data/projects";
import { projectImageAlt, projectLeadImage } from "@/lib/project-media";
import { cn } from "@/lib/utils";

type ProjectThumbProps = {
  project: Project;
  /** Rendered `sizes` for the slot the thumb fills. */
  sizes: string;
  className?: string;
  /**
   * Above-the-fold image. `loading="eager"` (not Next 16's deprecated
   * `priority`) — the screenshot on the first /work tile is the LCP, and
   * lazy-loading it delays the largest paint. Every other thumb stays
   * lazy.
   */
  eager?: boolean;
};

/**
 * A project's lead screenshot, or nothing at all.
 *
 * The slot is sized by the caller. When the file exists the image fills
 * it; when it does not, the slot collapses and the surrounding layout
 * takes over — no empty frame, no substitute picture, no "screenshot
 * coming soon". An absent image is an absent element, which is why every
 * composition that uses this has to hold without it.
 *
 * Extra images belong to the project page gallery; a tile only ever
 * shows the lead, because the index is a contact sheet, not a carousel.
 *
 * Existence is checked at build time (src/lib/project-media.ts), so
 * dropping the WebP into public/projects/ and rebuilding is the whole
 * workflow.
 */
export function ProjectThumb({
  project,
  sizes,
  className,
  eager = false,
}: ProjectThumbProps) {
  const image = projectLeadImage(project);

  if (!image) return null;

  return (
    <div className={cn("relative overflow-hidden bg-mist", className)}>
      <Image
        src={image.src}
        alt={projectImageAlt(project, image)}
        fill
        sizes={sizes}
        loading={eager ? "eager" : "lazy"}
        fetchPriority={eager ? "high" : "auto"}
        className="object-cover object-top"
      />
    </div>
  );
}
