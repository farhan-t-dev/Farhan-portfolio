import type { Project } from "@/data/projects";

/**
 * The two phrases that identify an entry, kept in one place so the index,
 * the tile and the project page never drift.
 *
 * Status is expanded rather than defined in a legend: "private" alone
 * could mean an NDA, an unfinished build, or work with no public URL, and
 * a client should not have to guess which.
 */
const KIND_LABELS: Record<Project["kind"], string> = {
  client: "Client",
  personal: "Personal",
  migration: "Migration",
};

const STATUS_LABELS: Record<NonNullable<Project["status"]>, string> = {
  private: "Private, no public link",
  retired: "Retired, no longer live",
};

export function projectKindLabel(project: Project): string {
  return KIND_LABELS[project.kind];
}

export function projectStatusLabel(project: Project): string | null {
  return project.status ? STATUS_LABELS[project.status] : null;
}
