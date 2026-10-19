import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/** Merge conditional Tailwind classes without conflicts. */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * A link is only rendered when it points at a real absolute http(s) URL.
 *
 * Data files carry obvious placeholders ("https://<site-url>", "") that
 * must not reach a visitor as a broken anchor — the Contact section
 * already treats an empty href this way. Pure string check: safe anywhere.
 */
export function isExternalUrl(url?: string): boolean {
  if (!url) return false;

  return /^https?:\/\/[^\s<>]+$/i.test(url.trim());
}
