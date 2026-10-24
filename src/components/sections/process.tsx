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
    title: "Scope and plan",
    body: "I read the existing code or system before quoting, then send a written plan with risks.",
  },
  {
    number: "02",
    title: "Build",
    body: "Small changes you can review as they land.",
  },
  {
    number: "03",
    title: "Test and ship",
    body: "Tested on real devices, deployed with recorded release steps.",
  },
  {
    number: "04",
    title: "Hand over",
    body: "Documentation and a walkthrough, so anyone can continue the work.",
  },
];

export function Process() {
  return (
    <Section
      id="process"
      label="Process"
      tone="ink"
      // Half-height band: four steps in one desktop row need far less
      // vertical air than the six-step, two-row version did.
      pad="py-8 md:py-10 lg:py-12"
    >
      {/* Mobile: one column. Tablet and small laptops: 2x2. Four columns
          only from xl (1280px): at 1024px four steps yielded ~170px each
          (~21 characters), which is a newspaper column, not a step. */}
      <ol className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-2 xl:grid-cols-4">
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
            <p className="mt-2 max-w-[46ch] font-serif text-base leading-relaxed text-mist/80 text-pretty">
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
