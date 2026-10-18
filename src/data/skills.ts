/**
 * Working stack, grouped the way the site presents it.
 *
 * Only list what you actually work with — this is capability, not a
 * rating. Empty groups render hidden on the page, so leaving a group
 * empty is a valid state until you fill it in.
 */

export type SkillGroup = {
  label: string;
  skills: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    label: "Interface",
    skills: ["React", "TypeScript", "Tailwind CSS"],
  },
  {
    label: "Server",
    skills: ["Next.js"],
  },
  {
    // e.g. databases, queues, storage — empty groups stay off the page
    label: "Data",
    skills: [],
  },
  {
    // e.g. CI, hosting, observability — empty groups stay off the page
    label: "Delivery",
    skills: [],
  },
];
