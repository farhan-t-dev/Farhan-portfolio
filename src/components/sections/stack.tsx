import { skillGroups } from "@/data/skills";
import { Section } from "./section";

/**
 * Stack — honest capability, grouped by layer. No proficiency bars or
 * ratings (they would be invented numbers). Groups with no entries render
 * nothing, so the section stays truthful while skills.ts is still filling in.
 */
export function Stack() {
  const groups = skillGroups.filter((group) => group.skills.length > 0);

  if (groups.length === 0) return null;

  return (
    <Section id="stack" label="Stack">
      <div className="border-t border-line">
        {groups.map((group) => (
          <div
            key={group.label}
            className="grid grid-cols-1 gap-x-6 gap-y-2 border-b border-line py-5 md:grid-cols-12 md:py-6"
          >
            <h3 className="text-sm font-medium text-slate md:col-span-4 lg:col-span-3">
              {group.label}
            </h3>
            <ul className="flex flex-wrap gap-x-5 gap-y-1 md:col-span-8 lg:col-span-9">
              {group.skills.map((skill) => (
                <li key={skill} className="text-base text-ink">
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
