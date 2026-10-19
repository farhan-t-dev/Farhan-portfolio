"use client";

import { useEffect, useState } from "react";

/**
 * The 1px hairline under the sticky header — the header's only client JS.
 *
 * The header itself stays a server component; this tiny client component
 * owns the scroll listener and renders only the rule, so the bar has no
 * border at the top of the page and gains one as soon as the page moves.
 * Passive listener, removed on unmount. Rendered inside the sticky
 * header, which is a positioned element, so it anchors to the header's
 * bottom edge without an extra `relative` on the header.
 */
export function HeaderScrollBorder() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 0);
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  if (!scrolled) return null;

  return (
    <div
      aria-hidden="true"
      className="absolute inset-x-0 bottom-0 h-px bg-line"
    />
  );
}
