import type { Metadata } from "next";

import { site } from "@/data/site";

const siteUrl = site.siteUrl.replace(/\/$/, "");

/**
 * The site card's URL. The route is the root opengraph-image file
 * convention, so it is stable at /opengraph-image; the dimensions and alt
 * match the route's exports.
 */
const siteImage = {
  url: "/opengraph-image",
  width: 1200,
  height: 630,
  type: "image/png",
  alt: `${site.name} — ${site.role}`,
} as const;

type SocialMetadataOptions = {
  title: string;
  description: string;
  /** Route path, e.g. "/work". Resolved against site.siteUrl. */
  path?: string;
  type?: "website" | "article";
  /**
   * Include the site card explicitly. Set false when the route has its own
   * opengraph-image segment, so that image can attach instead.
   */
  image?: boolean;
};

/**
 * Page-level openGraph and twitter metadata.
 *
 * These are returned as one object because metadata objects merge
 * shallowly: a page that sets `twitter` replaces the root `twitter`
 * entirely, including the card type. Keeping the card here means every
 * page that opts in keeps summary_large_image.
 */
export function socialMetadata({
  title,
  description,
  path,
  type = "website",
  image = true,
}: SocialMetadataOptions): Pick<Metadata, "openGraph" | "twitter"> {
  return {
    openGraph: {
      type,
      title,
      description,
      siteName: site.name,
      locale: "en_US",
      url: path ? `${siteUrl}${path}` : siteUrl,
      ...(image ? { images: [siteImage] } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      ...(image ? { images: [{ url: siteImage.url, alt: siteImage.alt }] } : {}),
    },
  };
}
