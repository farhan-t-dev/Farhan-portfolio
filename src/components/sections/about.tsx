import Image from "next/image";

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
      {/* Text first in the DOM so mobile stacks copy above the portrait.
          The row starts at lg, not md: at 768px a side-by-side portrait
          left the prose a 219px column (~24 characters per line), which
          is unreadable in the section that has to build trust. Stacked,
          the text keeps the full content column on tablets. */}
      <div className="flex flex-col items-start gap-6 lg:flex-row lg:justify-between">
        <div className="w-full max-w-[62ch] space-y-5 font-serif text-lg leading-relaxed text-ink text-pretty lg:min-w-0 lg:flex-1">
          <p>
            I&apos;m <b>Tan Farhan</b>, a freelance full-stack developer. I'd say I work across the
            frontend, backend, and deployment like building new applications, adding
            features to existing ones, integrating APIs, setting up servers,
            moving live applications to new hosts, and tracking down the problem
            that is keeping a project stuck.
          </p>
          <p>
            I mainly start by understanding the problem. Then I make necessary changes based on the work in a way that it's clean and maintainable, and leave the project in a state that the next
            person can work on with confidence. That applies from the first look
            at a codebase to the final deployment.
          </p>
          <p>
            Outside work I'm too deep into tech, watched more anime than I can count,
            and I play a lot of AAA and FPS games, mostly Valorant.
          </p>
        </div>
        {/* Rectangular, sharp corners: no radius, shadow, or effects —
            aspect-ratio is the file's real size (1031×1375) so the slot
            is reserved before the bytes arrive. */}
        <Image
          src="/images/Me.webp"
          alt="Portrait of Farhan, full-stack developer"
          width={1031}
          height={1375}
          sizes="(min-width: 1024px) 264px, 70vw"
          className="block aspect-[1031/1375] h-auto w-full max-w-xs shrink-0 lg:max-w-none lg:w-[264px]"
        />
      </div>
    </Section>
  );
}
