import { Section } from "./section";

/**
 * Services — what the work actually is. Deliberately includes new
 * development alongside fixing/finishing: the audience needs features,
 * integrations, and deployment, not only rescue work.
 *
 * Rows are hairline-separated, not cards, and unnumbered because these
 * are parallel offers, not a sequence.
 */
const services = [
  {
    title: "Full-stack development",
    body: "New features or whole products: interface, API routes, data models, and the wiring between them. Built to fit the codebase already there.",
  },
  {
    title: "Server setup and migrations",
    body: "Setting up production servers with Docker, Nginx and backups, and moving live applications to new ones: code, database, media, environment, domain and SSL.",
  },
  {
    title: "Debugging and stabilising",
    body: "Tracing a fault to its actual cause and fixing it properly, so it stops coming back.",
  },
  {
    title: "API and AI integrations",
    body: "Connecting payments, auth, email, LLM APIs, or agent workflows, including the error paths, not just the happy one.",
  },
  {
    title: "Deployment and handover",
    body: "CI/CD pipelines, environments, builds and releases, plus documentation someone else can follow.",
  },
];

export function Services() {
  return (
    <Section id="services" label="Services">
      <ul className="border-t border-line">
        {services.map((service) => (
          <li
            key={service.title}
            className="grid grid-cols-1 gap-x-6 gap-y-1 border-b border-line py-5 md:grid-cols-12 md:gap-y-2 md:py-6"
          >
            {/* Stacked until lg. At 768–1023 the indented content column
                leaves the body about 308px (~43ch) beside the title, so
                the prose wraps on almost every line; full width restores
                the measure. Same treatment as the Work rows. */}
            <h3 className="text-lg font-semibold tracking-tight md:col-span-12 lg:col-span-3">
              {service.title}
            </h3>
            <p className="max-w-[62ch] font-serif text-base leading-relaxed text-slate md:col-span-12 lg:col-span-9">
              {service.body}
            </p>
          </li>
        ))}
      </ul>
    </Section>
  );
}
