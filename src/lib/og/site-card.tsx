import { site } from "@/data/site";

import { og } from "./theme";

/**
 * The site-wide social card. 1200×630, drawn from the same identity as
 * the page: the mark, the poster line, the role and the address.
 *
 * Rendered by app/opengraph-image.tsx at build time, so the copy comes
 * from src/data/site.ts and cannot drift from the hero.
 */
export function SiteCard() {
  const domain = site.siteUrl
    .replace(/^https?:\/\//, "")
    .replace(/\/$/, "");

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        height: "100%",
        padding: "60px 72px 54px",
        background: og.paper,
        color: og.ink,
        fontFamily: og.archivo,
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              width: 34,
              height: 34,
              padding: 8,
              background: og.ink,
              flexShrink: 0,
            }}
          >
            <div
              style={{ display: "flex", width: 18, height: 5, background: og.mist }}
            />
            <div
              style={{
                display: "flex",
                width: 18,
                height: 5,
                marginTop: 4,
                background: og.signal,
              }}
            />
          </div>

          <div
            style={{
              display: "flex",
              marginLeft: 14,
              fontSize: 16,
              fontWeight: 600,
              letterSpacing: "0.18em",
            }}
          >
            {site.name.toUpperCase()}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            fontSize: 15,
            letterSpacing: "0.12em",
            color: og.slate,
          }}
        >
          {domain.toUpperCase()}
        </div>
      </div>

      <div style={{ display: "flex", flex: 1, alignItems: "center" }}>
        <div style={{ display: "flex", flexDirection: "column", width: 1000 }}>
          <div
            style={{
              display: "flex",
              width: 46,
              height: 6,
              marginBottom: 26,
              background: og.signal,
            }}
          />

          <div
            style={{
              display: "flex",
              fontSize: 80,
              fontWeight: 600,
              lineHeight: 0.98,
              letterSpacing: "-0.015em",
            }}
          >
            {site.tagline}
          </div>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "space-between",
          paddingTop: 22,
          borderTop: `1px solid ${og.line}`,
        }}
      >
        <div
          style={{
            display: "flex",
            fontFamily: og.newsreader,
            fontSize: 23,
            color: og.slate,
          }}
        >
          {site.role}
        </div>

        <div style={{ display: "flex", fontSize: 20, color: og.ink }}>
          {site.email}
        </div>
      </div>
    </div>
  );
}
