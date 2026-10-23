import { site } from "@/data/site";
import { cn } from "@/lib/utils";

type AvailabilityProps = {
  className?: string;
};

/**
 * The availability claim, rendered from site.ts only — the owner is the
 * one who can make it, so nothing here defaults to "available".
 *
 * Green means open; anything else is muted, because red would read as
 * "unavailable" rather than "live". The dot is decorative: the label
 * already states the status, so assistive technology is not asked to
 * interpret a colour.
 *
 * Shared by the hero and the /work masthead. Someone who lands on the
 * index from a search result should see the strongest reason to email
 * without going back to the homepage.
 */
export function Availability({ className }: AvailabilityProps) {
  if (!site.availability) return null;

  return (
    <p className={cn("flex items-center gap-2.5 text-sm text-slate", className)}>
      <span
        aria-hidden="true"
        className={
          site.availability.status === "available"
            ? "size-2 shrink-0 rounded-full bg-available"
            : "size-2 shrink-0 rounded-full bg-line"
        }
      />
      {site.availability.label}
    </p>
  );
}
