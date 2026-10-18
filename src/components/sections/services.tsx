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
    title: "New features",
    body: "Adding capabilities to a live application — new screens, flows, and logic that fit the codebase already there.",
  },
  {
    title: "Full-stack development",
    body: "Building a product end to end: interface, API routes, data models, and the wiring between them.",
  },
  {
    title: "Debugging and stabilising",
    body: "Tracing a fault to its actual cause and fixing it properly, so it stops coming back.",
  },
  {
    title: "API integrations",
    body: "Connecting payments, auth, email, or third-party services — including the error paths, not just the happy one.",
  },
  {
    title: "Deployment and handover",
    body: "Getting an application live and documented: environments, builds, domains, and a handover someone else can follow.",
  },
];

export function Services() {
  return (
    <Section id="services" label="Services">
      <ul className="border-t border-line">
        {services.map((service) => (
          <li
            key={service.title}
            className="grid grid-cols-1 gap-x-6 gap-y-1 border-b border-line py-5 md:grid-cols-12 md:py-6"
          >
            <h3 className="text-lg font-semibold tracking-tight md:col-span-4 lg:col-span-3">
              {service.title}
            </h3>
            <p className="max-w-[62ch] font-serif text-base leading-relaxed text-slate md:col-span-8 lg:col-span-9">
              {service.body}
            </p>
          </li>
        ))}
      </ul>
    </Section>
  );
}
