import type { Project } from "@/data/projects";
import { site } from "@/data/site";
import { projectKindLabel } from "@/lib/project-labels";

import { og } from "./theme";

type ProjectCardProps = {
  project: Project;
  /** A pre-cropped JPEG data URI, or undefined for a typographic card. */
  imageSrc?: string;
};

/**
 * A project's social card. The left panel carries the note — kind, title,
 * description, stack — and the lead screenshot takes the right panel when
 * one exists. Projects without a screenshot keep the full width: no
 * substitute image is invented for them, same as the project page.
 */
export function ProjectCard({ project, imageSrc }: ProjectCardProps) {
  const hasImage = Boolean(imageSrc);

  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        height: "100%",
        background: og.paper,
        color: og.ink,
        fontFamily: og.archivo,
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: hasImage ? 660 : 1200,
          height: "100%",
          padding: hasImage ? "54px 52px 46px 72px" : "60px 72px 54px",
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
                width: 30,
                height: 30,
                padding: 7,
                background: og.ink,
                flexShrink: 0,
              }}
            >
              <div
                style={{
                  display: "flex",
                  width: 16,
                  height: 4,
                  background: og.mist,
                }}
              />
              <div
                style={{
                  display: "flex",
                  width: 16,
                  height: 4,
                  marginTop: 3,
                  background: og.signal,
                }}
              />
            </div>

            <div
              style={{
                display: "flex",
                marginLeft: 13,
                fontSize: 15,
                fontWeight: 600,
                letterSpacing: "0.18em",
              }}
            >
              PROJECT NOTE
            </div>
          </div>

          <div
            style={{
              display: "flex",
              fontSize: 14,
              letterSpacing: "0.14em",
              color: og.slate,
            }}
          >
            {projectKindLabel(project).toUpperCase()}
          </div>
        </div>

        {/* Without a screenshot the note is the whole card, so it sits
            centred between the label and the footer rather than pinned to
            the top of an empty field. */}
        {!hasImage && <div style={{ display: "flex", flex: 1 }} />}

        <div
          style={{
            display: "flex",
            width: hasImage ? 40 : 46,
            height: hasImage ? 5 : 6,
            marginTop: hasImage ? 44 : 0,
            background: og.signal,
          }}
        />

        <div
          style={{
            display: "flex",
            marginTop: 20,
            maxWidth: hasImage ? 520 : 900,
            fontSize: hasImage ? 62 : 80,
            fontWeight: 600,
            lineHeight: 0.98,
            letterSpacing: "-0.015em",
          }}
        >
          {project.title}
        </div>

        <div
          style={{
            display: "block",
            marginTop: 22,
            maxWidth: hasImage ? 510 : 880,
            fontFamily: og.newsreader,
            fontSize: hasImage ? 21 : 24,
            lineHeight: 1.45,
            color: og.slate,
            lineClamp: 4,
          }}
        >
          {project.description}
        </div>

        <div style={{ display: "flex", flex: 1 }} />

        {project.tags.length > 0 && (
          <div
            style={{
              display: "block",
              marginBottom: 22,
              fontSize: 16,
              lineHeight: 1.5,
              color: og.slate,
              lineClamp: 2,
            }}
          >
            {project.tags.join("  ·  ")}
          </div>
        )}

        <div
          style={{
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "space-between",
            paddingTop: 20,
            borderTop: `1px solid ${og.line}`,
          }}
        >
          <div
            style={{
              display: "flex",
              fontFamily: og.newsreader,
              fontSize: 21,
              color: og.slate,
            }}
          >
            {site.role}
          </div>

          <div style={{ display: "flex", fontSize: 18, color: og.ink }}>
            {site.email}
          </div>
        </div>
      </div>

      {hasImage && (
        <div
          style={{
            display: "flex",
            width: 540,
            height: "100%",
            borderLeft: `1px solid ${og.line}`,
          }}
        >
          <img
            src={imageSrc}
            width={540}
            height={630}
            style={{ objectFit: "cover" }}
          />
        </div>
      )}
    </div>
  );
}
