import { Section } from "./section";

/**
 * About — short, first-person, and process-oriented.
 *
 * Deliberately contains no history, employers, years of experience, or
 * credentials: none of that can be substantiated, and the brief forbids
 * inventing it. The credibility comes from how the work is described.
 */
export function About() {
  return (
    <Section id="about" label="About" tone="mist">
      <div className="max-w-[62ch] space-y-5 font-serif text-lg leading-relaxed text-ink">
        <p>
          I work with founders, agencies, and teams who need software
          delivered rather than discussed. Sometimes that means a new
          feature or an entire application; sometimes it means an existing
          codebase that needs debugging, completing, or getting deployed.
        </p>
        <p>
          The approach is the same either way: read the code before
          changing it, agree on what done means, work in changes you can
          review as they land, and leave documentation behind so the next
          person is not starting from zero.
        </p>
      </div>
    </Section>
  );
}
