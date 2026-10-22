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
    label: "Frontend",
    skills: ["React", "TypeScript", "Tailwind CSS", "JavaScript"],
  },
  {
    label: "Backend",
    skills: ["Next.js", "Node.js", "Python", "FastAPI", "Laravel"],
  },
  {
    label: "Data",
    skills: ["PostgreSQL", "MySQL", "Supabase", "Redis"],
  },
  {
    label: "DevOps / Infrastructure",
    skills: ["Docker", "Nginx", "Linux", "GitHub Actions"],
  },
  {
    label: "AI",
    skills: ["LangChain", "LLM APIs", "Tool-using agents"],
  },
];
