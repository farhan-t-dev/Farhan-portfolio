import { ImageResponse } from "next/og";

import { site } from "@/data/site";
import { loadOgFonts } from "@/lib/og/fonts";
import { SiteCard } from "@/lib/og/site-card";

export const alt = `${site.name} — ${site.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/**
 * The site card. Static: no request-time APIs, so Next renders it once at
 * build time and emits the og:image tags (url, width, height, type, alt)
 * for this segment and every route below it.
 */
export default async function Image() {
  return new ImageResponse(<SiteCard />, {
    ...size,
    fonts: await loadOgFonts(),
  });
}
