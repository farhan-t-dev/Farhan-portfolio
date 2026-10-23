import type { Project } from "@/data/projects";
import { projectKindLabel, projectStatusLabel } from "@/lib/project-labels";
import { cn } from "@/lib/utils";

type ProjectMetaProps = {
  project: Project;
  className?: string;
};

/**
 * The small-caps metadata line shared by the large /work cells and the
 * ruled index rows: engagement kind first, then a lifecycle status when
 * the project carries one.
 *
 * A single layer rather than two differently-styled labels, because the
 * point is comparison — a reader scanning the index should be able to
 * tell client work from personal builds from migrations without reading
 * a description. The separator is decorative and hidden from assistive
 * technology; the phrases themselves carry the meaning.
 */
export function ProjectMeta({ project, className }: ProjectMetaProps) {
  const parts = [projectKindLabel(project), projectStatusLabel(project)].filter(
    (part): part is string => part !== null,
  );

  if (parts.length === 0) return null;

  return (
    <p
      className={cn(
        "text-xs uppercase tracking-[0.18em] text-slate",
        className,
      )}
    >
      {parts.map((part, index) => (
        <span key={part}>
          {index > 0 && <span aria-hidden="true"> · </span>}
          {part}
        </span>
      ))}
    </p>
  );
}
