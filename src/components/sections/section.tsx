import { cn } from "@/lib/utils";

type SectionProps = {
  /** Anchor id — required when nav links point here (#process, #contact). */
  id?: string;
  /** The section's heading. Sentence case, small, sitting on the hairline. */
  label: string;
  /**
   * Explicit variant, not a boolean: the approved palette allows three
   * band treatments. `ink` is the single inverted moment (Process);
   * `mist` is the alternate band (About); `paper` is the default.
   */
  tone?: "paper" | "mist" | "ink";
  /**
   * Vertical padding override, merged over the default rhythm. Only
   * Process opts in: it is a deliberately half-height band, so its four
   * steps do not carry the full section padding. Every other section
   * inherits the default and renders exactly as before.
   */
  pad?: string;
  children: React.ReactNode;
};

/**
 * The shared section scaffold for the homepage.
 *
 * Asymmetric Swiss grid, per the approved brief:
 *   desktop — label in cols 1–2, content in cols 3–12
 *   tablet  — label in cols 1–4, content in cols 5–12
 *   mobile  — label stacks above content
 *
 * Extracted because six sections repeat this identical structure — one
 * clear responsibility (grid placement + band treatment + heading),
 * not a file per section fragment.
 */
export function Section({
  id,
  label,
  tone = "paper",
  pad = "py-14 md:py-20 lg:py-24",
  children,
}: SectionProps) {
  const dark = tone === "ink";

  const heading = (
    <h2
      className={cn(
        "text-sm font-medium",
        dark ? "text-mist/70" : "text-slate",
      )}
    >
      {label}
    </h2>
  );

  return (
    <section
      id={id}
      className={cn(
        // Hairline separates bands; the inverted band is separated by
        // colour contrast alone, so no rule is needed there.
        !dark && "border-t border-line",
        tone === "mist" && "bg-mist",
        dark && "bg-ink text-paper",
      )}
    >
      {/* `pad` lands last so tailwind-merge resolves it over the default. */}
      <div
        className={cn(
          "shell gutter grid grid-cols-1 gap-x-6 gap-y-5 md:grid-cols-12",
          pad,
        )}
      >
        <div className="md:col-span-4 lg:col-span-2">{heading}</div>
        <div className="md:col-span-8 lg:col-span-10">{children}</div>
      </div>
    </section>
  );
}
