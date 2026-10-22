"use client";

import { usePathname } from "next/navigation";

import { navLinks } from "@/data/site";

/**
 * Primary section links, with the current area marked.
 *
 * The header is the only persistent orientation cue on a case-study page
 * — the page title changes, but the nav looks identical unless it says
 * where you are. Only "Work" has a second level (the /work index and
 * /projects/<slug> pages share it); the homepage anchors cannot be lit
 * without scroll-spy, so they keep their resting state.
 *
 * This is the header's second small client island next to the scroll
 * border. Everything else on the page stays a server component.
 */
export function SiteNav() {
  const pathname = usePathname();
  const workActive =
    pathname === "/work" || pathname.startsWith("/projects/");

  return (
    <ul className="hidden items-center gap-6 md:flex">
      {navLinks.map((item) => {
        const active = item.href === "/work" && workActive;

        return (
          <li key={item.href}>
            <a
              href={item.href}
              aria-current={active ? "page" : undefined}
              className={
                active
                  ? "text-sm text-ink underline decoration-signal decoration-1 underline-offset-8"
                  : "text-sm text-slate transition-colors hover:text-ink"
              }
            >
              {item.label}
            </a>
          </li>
        );
      })}
    </ul>
  );
}
