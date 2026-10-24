import type { Metadata, Viewport } from "next";
import { archivo, newsreader } from "@/lib/fonts";
import { site } from "@/data/site";
import { socialMetadata } from "@/lib/social-metadata";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import "./globals.css";

/**
 * Metadata is derived from src/data/site.ts so identity lives in one place.
 * `metadataBase` is the production origin: social crawlers need an absolute
 * og:image URL, not a path. The image itself is supplied by the root
 * opengraph-image file convention, so no images are declared here; Twitter
 * inherits the same image in post-processing.
 */
export const metadata: Metadata = {
  metadataBase: new URL(site.siteUrl),
  title: {
    default: `${site.name} — ${site.role}`,
    template: `%s — ${site.name}`,
  },
  description: site.description,
  verification: {
    google: "L8pzcCx6cbEWA0GROsbpBEdDZmKDIJGBsyWDIQp36eY",
  },
  ...socialMetadata({
    title: `${site.name} — ${site.role}`,
    description: site.description,
    image: false,
  }),
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  colorScheme: "light",
  themeColor: "#ffffff",
};

/**
 * Person structured data. `sameAs` is the part that does the work: it
 * tells search engines that the GitHub and LinkedIn profiles are the same
 * person as this site. Links come from site.ts, so a new profile is added
 * in one place.
 */
const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: site.name,
  jobTitle: site.role,
  url: site.siteUrl,
  sameAs: site.links.map((link) => link.href),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${archivo.variable} ${newsreader.variable}`}
    >
      <body className="flex min-h-dvh flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(personJsonLd).replace(/</g, "\\u003c"),
          }}
        />

        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:bg-ink focus:px-4 focus:py-2 focus:text-sm focus:text-paper"
        >
          Skip to main content
        </a>

        <SiteHeader />

        <main id="main" className="flex-1">
          {children}
        </main>

        <SiteFooter />
      </body>
    </html>
  );
}
