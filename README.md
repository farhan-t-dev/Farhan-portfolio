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
│   └── projects/          # Project hero images (/projects/<slug>.png)
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
2. Drop its hero image into `public/projects/<slug>.png`.
3. The page at `/projects/<slug>` is generated automatically.

## Build

```bash
npm run build
npm start
```
