import type { Metadata } from "next";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Work",
  description: "Selected project case studies.",
};

/**
 * Work index — intentionally an empty state.
 *
 * No projects are published yet, and the brief is explicit: nothing here
 * is fabricated to fill the page. This route exists so the header's Work
 * link resolves, and it states plainly what a visitor is looking at and
 * where to go instead. Real entries come from src/data/projects.ts later.
 */
export default function WorkPage() {
  return (
    <div className="shell gutter py-14 md:py-20 lg:py-24">
      <div className="grid grid-cols-1 gap-x-6 gap-y-6 md:grid-cols-12">
        <h1 className="font-display text-[clamp(2.25rem,6vw,4.5rem)] md:col-span-4 lg:col-span-2">
          Work
        </h1>

        <div className="max-w-[58ch] md:col-span-8 lg:col-span-10">
          <p className="font-serif text-xl leading-relaxed text-ink">
            Project case studies will be published here. None are live yet.
          </p>

          <p className="mt-4 font-serif text-lg leading-relaxed text-slate">
            Each entry will cover the problem, what was built or fixed, and
            the result — written to be checked, not just read. Until then,
            the fastest way to see relevant work is to ask about the
            problem you&apos;re solving.
          </p>

          {site.email && (
            <p className="mt-8">
              <a
                href={`mailto:${site.email}`}
                className="text-ink underline decoration-line underline-offset-4 transition-colors hover:decoration-signal"
              >
                {site.email}
              </a>
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
