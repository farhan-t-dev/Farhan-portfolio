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
          I&apos;m <b>Tan Farhan</b>, a freelance full-stack developer. I'd say i work across the
          frontend, backend, and deployment like building new applications, adding
          features to existing ones, integrating APIs, setting up servers,
          moving live applications to new hosts, and tracking down the problem
          that is keeping a project stuck.
        </p>
        <p>
          I mainly start by understanding the problem. Then I make necessary changes based on the work in a way that its clean and maintainable, and leave the project in a state that the next
          person can work on with confidence. That applies from the first look
          at a codebase to the final deployment.
        </p>
        <p>
          Outside work I'm too deep into tech, watched more anime than i can count,
          and I play a lot of AAA and FPS games, mostly Valorant...
        </p>
      </div>
    </Section>
  );
}
