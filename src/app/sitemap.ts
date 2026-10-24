import type { MetadataRoute } from "next";

import { projects } from "@/data/projects";
import { site } from "@/data/site";

const baseUrl = site.siteUrl.replace(/\/$/, "");

/**
 * Every public route. Project notes are generated from the data file, so
 * adding an entry there adds it here; no slug is maintained twice.
 *
 * `lastModified` is omitted on purpose: the site has no per-page edit
 * date, and stamping every URL with the build time would tell crawlers
 * that all thirteen notes changed whenever one line did.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: baseUrl,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${baseUrl}/work`,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    ...projects.map((project) => ({
      url: `${baseUrl}/projects/${project.slug}`,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
  ];
}
