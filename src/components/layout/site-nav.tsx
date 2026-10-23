"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { navLinks } from "@/data/site";
import { cn } from "@/lib/utils";

/**
 * Primary section links, with the current area marked.
 *
 * The header is the only persistent orientation cue on a project page
 * — the page title changes, but the nav looks identical unless it says
 * where you are. Only "Work" has a second level (the /work index and
 * /projects/<slug> pages share it); the homepage anchors cannot be lit
 * without scroll-spy, so they keep their resting state.
 *
 * Below md the anchor links are hidden — they only point at spans of the
 * homepage, which a thumb reaches anyway. Work is the exception: /work
 * is a separate route with no other way in, so it stays visible on the
 * same row as Contact. Both share one class helper, so the mobile label
 * keeps the desktop nav's size, colour and active rule, and Link keeps
 * the route prefetched rather than reloading the document.
 *
 * This is the header's second small client island next to the scroll
 * border. Everything else on the page stays a server component.
 */
export function SiteNav() {
  const pathname = usePathname();
  const workActive =
    pathname === "/work" || pathname.startsWith("/projects/");
  const workLink = navLinks.find((item) => item.href === "/work");

  const linkClass = (active: boolean) =>
    cn(
      "inline-flex min-h-11 items-center text-sm",
      active
        ? "text-ink underline decoration-signal decoration-1 underline-offset-8"
        : "text-slate transition-colors hover:text-ink",
    );

  return (
    <>
      {workLink && (
        <Link
          href={workLink.href}
          aria-current={workActive ? "page" : undefined}
          className={cn("md:hidden", linkClass(workActive))}
        >
          {workLink.label}
        </Link>
      )}

      <ul className="hidden items-center gap-6 md:flex">
        {navLinks.map((item) => {
          const active = item.href === "/work" && workActive;

          return (
            <li key={item.href}>
              <Link
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={linkClass(active)}
              >
                {item.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}
