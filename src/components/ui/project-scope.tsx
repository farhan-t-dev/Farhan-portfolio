import { cn } from "@/lib/utils";

type ProjectScopeProps = {
  items: string[];
  className?: string;
};

/**
 * The plate slot for a project with no screenshot yet.
 *
 * A grid of equal cells needs equal plates; when one entry has no still,
 * the empty half-row is exactly the distortion the tiered index was meant
 * to remove. So the slot holds a ledger instead: what the engagement
 * covered, in the owner's own nouns, set on the mist ground the
 * screenshot placeholder already uses.
 *
 * This is a designed state, not a promise of an image. At lg it takes the
 * same 16:10 box as a plate in the same column, so the caption below it
 * starts on the same baseline as its neighbour's, and each row absorbs a
 * share of the extra height on a wider screen. Keep the list short (five
 * lines is the shape it was drawn for). It disappears the moment a file
 * lands in public/projects/.
 */
export function ProjectScope({ items, className }: ProjectScopeProps) {
  if (items.length === 0) return null;

  return (
    <div className={cn("flex flex-col bg-mist p-5 sm:p-6", className)}>
      <p className="text-xs uppercase tracking-[0.18em] text-slate">In scope</p>

      <ul className="mt-3 flex flex-1 flex-col">
        {items.map((item) => (
          <li
            key={item}
            className="flex min-h-11 flex-1 items-center border-t border-line text-sm text-ink lg:min-h-0"
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
