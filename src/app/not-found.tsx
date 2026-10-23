import type { Metadata } from "next";
import Link from "next/link";

import { ArrowRight } from "@/components/ui/icons";

export const metadata: Metadata = {
  title: "Page not found",
};

/**
 * 404 — the landing for an unknown project URL (dynamicParams is false,
 * so that is the common case) and for any other stale link.
 *
 * Same grid, display face, and hairline rules as every other page: an
 * error is still a page of this site. One honest sentence, then the two
 * ways out — the work index first, because a broken project link is the
 * likeliest arrival.
 */
export default function NotFound() {
  return (
    <div className="shell gutter py-14 md:py-20 lg:py-24">
      <div className="grid grid-cols-1 gap-x-6 gap-y-6 md:grid-cols-12">
        <h1 className="self-start max-w-[14ch] font-display text-[clamp(2.25rem,6vw,4.5rem)] md:col-span-8">
          Page not found.
        </h1>

        <div className="md:col-span-8">
          <p className="max-w-[54ch] font-serif text-xl leading-relaxed text-slate">
            The link may be out of date, or the project may have moved. Every
            project note that is live is in the work index.
          </p>

          <ul className="mt-8 flex flex-wrap gap-x-8 border-t border-line pt-5 text-sm">
            <li>
              <Link
                href="/work"
                className="group inline-flex min-h-11 items-center gap-2 text-ink underline decoration-line underline-offset-4 transition-colors hover:decoration-signal"
              >
                All work
                <ArrowRight className="size-4 transition-transform duration-200 group-hover:translate-x-0.5" />
              </Link>
            </li>
            <li>
              <Link
                href="/"
                className="inline-flex min-h-11 items-center text-slate underline-offset-4 transition-colors hover:text-ink hover:underline"
              >
                Home
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
