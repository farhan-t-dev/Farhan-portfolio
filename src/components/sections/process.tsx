import { Section } from "./section";

/**
 * Process — the signature element: the single inverted (ink) band on an
 * otherwise white page, and the boldest thing here.
 *
 * This is the risk-reducer for a client handing over a fragile app, so it
 * runs in a genuine sequence — which is exactly when numbering is honest
 * rather than decorative. Red appears only as rules and the active step
 * marker: never as text on the dark band, where it fails contrast.
 */
const steps = [
  {
    number: "01",
    title: "Scope",
    body: "What exists, what's missing, and what done has to look like. I read before I quote.",
  },
  {
    number: "02",
    title: "Plan",
    body: "The approach, the order of work, and anything I'd flag as a risk — written down before code moves.",
  },
  {
    number: "03",
    title: "Build",
    body: "Working in the open: small, reviewable changes you can see as they land.",
  },
  {
    number: "04",
    title: "Verify",
    body: "Tested against the cases that matter, checked at real viewport sizes, keyboard and screen reader included.",
  },
  {
    number: "05",
    title: "Ship",
    body: "Deployed to production, with the environment and release steps recorded rather than assumed.",
  },
  {
    number: "06",
    title: "Hand over",
    body: "Documentation and a walkthrough, so the next person — you or a teammate — can carry it forward.",
  },
];

export function Process() {
  return (
    <Section id="process" label="Process" tone="ink">
      <ol className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
        {steps.map((step, index) => (
          <li key={step.number} className="border-t border-signal pt-4">
            <div className="flex items-baseline gap-3">
              {/* Red is a RULE here, never text: signal-on-ink measures
                  3.74:1 — fine for a graphical border (3:1) but under the
                  4.5:1 that text needs, so the number itself is paper. */}
              <span className="font-display text-sm text-mist/70">
                {step.number}
              </span>
              <h3 className="text-lg font-semibold tracking-tight text-paper">
                {step.title}
              </h3>
            </div>
            <p className="mt-2 max-w-[46ch] font-serif text-base leading-relaxed text-mist/80">
              {step.body}
            </p>
            <span className="sr-only">
              Step {index + 1} of {steps.length}
            </span>
          </li>
        ))}
      </ol>
    </Section>
  );
}
