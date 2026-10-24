import type { MetadataRoute } from "next";

import { site } from "@/data/site";

const baseUrl = site.siteUrl.replace(/\/$/, "");

/**
 * Everything here is meant to be indexed: the homepage, the work index,
 * every project note, and the social cards. The only directive worth
 * declaring is where the sitemap lives.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
