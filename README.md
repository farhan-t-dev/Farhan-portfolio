# Freelance Developer Portfolio

A personal portfolio built with **Next.js (App Router)**, **TypeScript**, and **Tailwind CSS v4**.

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Project structure

```
portfolio/
├── public/
│   ├── images/            # General images (avatar, og image)
│   └── projects/          # Project hero images (/projects/<slug>.webp)
├── src/
│   ├── app/
│   │   ├── page.tsx       # Home page (composes sections)
│   │   ├── projects/
│   │   │   └── [slug]/
│   │   │       └── page.tsx  # Dynamic project detail page (SSG)
│   │   ├── globals.css    # Tailwind entry + design tokens
│   │   └── layout.tsx     # Root layout + metadata
│   ├── components/
│   │   ├── layout/        # Header, Footer, Navbar
│   │   ├── sections/      # Hero, About, Skills, Projects, Contact
│   │   └── ui/            # Button, Card, Badge, Input
│   ├── data/
│   │   ├── projects.ts    # Typed project content
│   │   └── skills.ts      # Typed skills content
│   └── lib/
│       └── utils.ts       # cn() class helper + shared utilities
├── package.json
└── README.md
```

## Conventions

- **Content lives in `src/data/`** — components stay presentational; edit `projects.ts` and `skills.ts` to update the site.
- **`@/` alias** maps to `src/` (e.g. `import { projects } from "@/data/projects"`).
- **UI primitives** in `components/ui` are reusable and styled via Tailwind; compose them inside `components/sections`.
- **Project pages are statically generated** from the `projects` array via `generateStaticParams`.

## Adding a project

1. Add an entry to `src/data/projects.ts`.
2. Drop its lead image into `public/projects/<slug>.webp` and reference it in `images` with alt text.
3. Give it a `rank` and a `kind` (`client`, `personal` or `migration`).
4. The page at `/projects/<slug>` is generated automatically.

### Rank and featured

`rank` is editorial priority: lower comes first. `featured` decides the tier. The featured projects form the large lead grid at the top of `/work` — three columns from 1280px, two below that, one on narrow screens — and the homepage work section; everything else is the ruled text index below. Within each tier, `rank` sets the order, and the "next project" link follows the same ranked list.

```ts
{ …, featured: true, rank: 4 }
```

Featured entries should normally be the top of the rank order — the lead tier is meant to hold the strongest evidence, not just whatever has a screenshot.

### Images

`images` is an ordered list. The first existing file is the lead plate on `/work` and the top of the project page; the rest appear in a two-column gallery below it.

```ts
images: [
  {
    src: "/projects/marketflow.webp",
    alt: "MarketFlow storefront: a multi-vendor catalog hero with a warehouse photo",
  },
  { src: "/projects/marketflow-admin.webp", caption: "Admin order view" },
],
```

Write the alt as what the plate shows — the screen, its main controls or data — not "project screenshot". A file that is not in `public/` yet is skipped: the listing stays and nothing breaks.

A featured project with no screenshot yet can carry a `scope` list instead. It fills the plate slot with a ledger of what the work covered, so the grid keeps a level baseline:

```ts
scope: ["Laravel application", "MySQL database", "Uploaded media"],
```

Every line must restate the description. `scope` is never invented to fill a gap.

## Build

```bash
npm run build
npm start
```
