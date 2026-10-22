import Image from "next/image";

import type { Project } from "@/data/projects";
import { publicAssetExists } from "@/lib/media";
import { cn } from "@/lib/utils";

type ProjectThumbProps = {
  project: Project;
  /** Rendered `sizes` for the slot the thumb fills. */
  sizes: string;
  className?: string;
};

/**
 * A project's screenshot, or nothing at all.
 *
 * The slot is sized by the caller. When the file exists the image fills
 * it; when it does not, the slot collapses and the surrounding layout
 * takes over — no empty frame, no substitute picture, no "screenshot
 * coming soon". An absent image is an absent element, which is why every
 * composition that uses this has to hold without it.
 *
 * Existence is checked at build time (src/lib/media.ts), so dropping the
 * PNG into public/projects/ and rebuilding is the whole workflow.
 */
export function ProjectThumb({ project, sizes, className }: ProjectThumbProps) {
  if (!publicAssetExists(project.image)) return null;

  return (
    <div className={cn("relative overflow-hidden bg-mist", className)}>
      <Image
        src={project.image}
        alt={`${project.title} screenshot`}
        fill
        sizes={sizes}
        className="object-cover object-top"
      />
    </div>
  );
}
