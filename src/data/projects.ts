/**
 * A screenshot or other still for a project.
 *
 * `src` points inside public/. The file may not exist yet — call sites
 * filter through `publicAssetExists` (src/lib/media.ts) and skip the slot
 * rather than render a broken image or a substitute picture.
 */
export type ProjectImage = {
  src: string;
  /** What the image shows. Falls back to "<title> screenshot". */
  alt?: string;
  /** Optional line rendered under the image on the project page. */
  caption?: string;
};

/**
 * Who the work was for, as far as the index is concerned.
 *
 * `migration` is a kind of engagement rather than a kind of client, and
 * that is deliberate: moving a live system is the clearest statement of
 * the positioning, so it gets a label of its own instead of disappearing
 * into "Client".
 */
export type ProjectKind = "client" | "personal" | "migration";

export type Project = {
  slug: string;
  title: string;
  description: string;
  /** Lead first. Extra images render as a gallery on the project page. */
  images: ProjectImage[];
  tags: string[];
  /** Rendered as the small-caps metadata line on /work and in the page rail. */
  kind: ProjectKind;
  liveUrl?: string;
  repoUrl?: string;
  /** Lifecycle note for work that is no longer publicly linkable. */
  status?: "private" | "retired";
  /**
   * What the work covered, in plain nouns. Only used where a screenshot
   * would otherwise go: it lets a project with no still yet hold the
   * plate slot at full size instead of leaving a hole in the grid. Never
   * invented — every line restates the description.
   */
  scope?: string[];
  /** Homepage work section and the lead tier on /work. */
  featured: boolean;
  /**
   * Position in the work index: lower ranks first.
   *
   * This is editorial order, not a quality score. The featured projects
   * are the top of this order, so the lead tier on /work and the
   * homepage selection are the same six entries. Within each tier, rank
   * decides the sequence, and the "next project" link at the end of a
   * project page follows it too. Ranks are unique; equal ranks fall back
   * to title order.
   */
  rank: number;
};

/**
 * Written in rank order to keep the file readable, though components read
 * `rankedProjects` and never trust array position.
 *
 * Featured entries come first in rank order and fill a 3×2 block on
 * /work: Fletched, Parts Seekr, PropManage / MarketFlow, Cognabase, the
 * marketplace migration. The migration is the strongest single piece of
 * evidence (a live system moved, database and all) and closes the block.
 * That is the whole point of the flag: rank orders within a tier, the
 * flag decides the tier.
 */
export const projects: Project[] = [
  {
    slug: "fletched",
    title: "Fletched",
    description:
      "App Store release, website and database fixes for an archery ballistics product. Took the app through App Store deployment, built the website, and fixed Supabase database issues.",
    images: [
      {
        src: "/projects/fletched.webp",
        alt: "Fletched marketing site: an archery ballistics hero with an iPhone showing the app icon, over a photo of an archer at full draw.",
      },
    ],
    tags: ["React", "Vite", "Tailwind CSS", "Supabase", "App Store"],
    kind: "client",
    liveUrl: "https://www.fletchedco.com/",
    repoUrl: "https://github.com/farhan-t-dev/fletched",
    featured: true,
    rank: 1,
  },
  {
    slug: "parts-seekr",
    title: "Parts Seekr",
    description:
      "Photo-based parts search that returns a price-sorted list of matching listings. Added authentication, reworked the search logic that pulls results from eBay and SerpApi, fixed a Supabase issue, rebranded the app, and deployed it to Vercel.",
    images: [
      {
        src: "/projects/parts-seekr.webp",
        alt: "Parts Seekr home page: a search field for a part name or OEM number, a photo upload option, a manufacturer filter and a Find Best Prices button.",
      },
    ],
    tags: ["TypeScript", "Next.js", "Supabase", "eBay API", "SerpApi"],
    kind: "client",
    liveUrl: "https://www.partsseekr.com/",
    repoUrl: "https://github.com/farhan-t-dev/snapprice",
    featured: true,
    rank: 3,
  },
  {
    slug: "mindacco",
    title: "MindAcco",
    description:
      "Production setup, authentication and core bug fixes, Supabase issues, and a Vercel deploy.",
    images: [
      {
        src: "/projects/mindacco.webp",
        alt: "MindAcco landing page: the headline “Structure for habits that survive a busy week” beside a weekly plan panel listing Deep Work and Daily Steps.",
      },
    ],
    tags: ["Supabase", "Vercel"],
    kind: "client",
    liveUrl: "https://www.mindacco.com/",
    featured: false,
    rank: 7,
  },
  {
    slug: "marketplace-migration",
    title: "Live marketplace migration",
    description:
      "Moved a production Laravel marketplace from an old VPS to a new Docker Compose server: application, MySQL database, uploaded media, scheduled jobs, and the domain cutover with SSL.",
    images: [{ src: "/projects/marketplace-migration.webp" }],
    tags: ["Laravel", "MySQL", "Docker Compose", "Linux"],
    kind: "migration",
    scope: [
      "Laravel application",
      "MySQL database",
      "Uploaded media",
      "Scheduled jobs",
      "Domain and SSL",
    ],
    featured: true,
    rank: 6,
  },
  {
    slug: "schematic-builder",
    title: "Insurance schematic builder",
    description:
      "Converts insurance program spreadsheets into PowerPoint schematics. Improved the Python conversion engine, built the frontend, and deployed it on Render.",
    images: [
      {
        src: "/projects/schematic-builder.webp",
        alt: "Schematic upload screen: a Select Spreadsheet control and a disabled Analyse File button, on a white page with a minimal header.",
      },
    ],
    tags: ["Python", "FastAPI", "React", "python-pptx", "Docker", "Render"],
    kind: "client",
    liveUrl: "https://shematic.onrender.com",
    repoUrl: "https://github.com/farhan-t-dev/shematic",
    featured: false,
    rank: 8,
  },
  {
    slug: "propmanage",
    title: "PropManage",
    description:
      "Property management platform with nested properties and units, a transaction ledger, PDF invoices, real-time notifications over WebSockets, and a maintenance workflow enforced as a state machine. Runs as one Docker Compose stack.",
    images: [
      {
        src: "/projects/propmanage.webp",
        alt: "PropManage dashboard: a portfolio overview with ledger balance, occupancy, a monthly revenue bar chart and a recent payout ledger.",
      },
    ],
    tags: [
      "Django",
      "Django REST Framework",
      "React",
      "PostgreSQL",
      "Celery",
      "WebSockets",
      "Docker Compose",
    ],
    kind: "personal",
    repoUrl: "https://github.com/farhan-t-dev/PropManage",
    featured: true,
    rank: 2,
  },
  {
    slug: "marketflow",
    title: "MarketFlow",
    description:
      "Multi-vendor B2B marketplace on Laravel 12 with buyer, seller and admin roles, stock and order handling, automatic commission calculation, and a Docker and Nginx setup.",
    images: [
      {
        src: "/projects/marketflow.webp",
        alt: "MarketFlow storefront: a multi-vendor catalog hero with a warehouse photo and a role-based access badge for buyer, seller and admin views.",
      },
    ],
    tags: ["Laravel", "PHP", "MySQL", "Blade", "Docker", "Nginx"],
    kind: "personal",
    liveUrl: "https://marketflow-36gz.onrender.com",
    repoUrl: "https://github.com/farhan-t-dev/b2b-marketplace",
    featured: true,
    rank: 4,
  },
  {
    slug: "github-repo-finder",
    title: "GitHub Repository Finder",
    description:
      "Picks a random popular GitHub repository for a chosen programming language. Uses the GitHub REST API, with the language list kept locally so the app needs no API key or third-party endpoint.",
    images: [
      {
        src: "/projects/github-repo-finder.webp",
        alt: "GitHub Repo Finder: a dark page with a language dropdown and a Find Repository button.",
      },
    ],
    tags: ["JavaScript", "GitHub API"],
    kind: "personal",
    liveUrl: "https://farhan-t-dev.github.io/Github-repo-finder/",
    repoUrl: "https://github.com/farhan-t-dev/Github-repo-finder",
    featured: false,
    rank: 9,
  },
  {
    slug: "cognabase",
    title: "Cognabase",
    description:
      "Self-hosted Supabase platform. Creating a project in the interface starts a new Supabase instance on the server. Worked on the full system: interface and server-side provisioning.",
    images: [
      {
        src: "/projects/cognabase.webp",
        alt: "Cognabase landing page: “Deploy Supabase On Demand”, with Start Building and Sign In buttons on a dark background.",
      },
    ],
    tags: ["TypeScript", "Supabase", "Self-hosting"],
    kind: "client",
    status: "private",
    featured: true,
    rank: 5,
  },
  {
    slug: "checkin",
    title: "Checkin",
    description:
      "Fixed Supabase and authentication issues, adjusted the UI, and configured hosting on Render.",
    images: [{ src: "/projects/checkin.webp" }],
    tags: ["React", "Express", "Supabase", "Render"],
    kind: "client",
    repoUrl: "https://github.com/farhan-t-dev/Checkin",
    featured: false,
    rank: 10,
  },
  {
    slug: "voice-dialer",
    title: "AI voice outreach dialer",
    description:
      "Works through a contact list, calls through Google Voice, and an ElevenLabs agent collects each contact's details into a dashboard.",
    images: [{ src: "/projects/voice-dialer.webp" }],
    tags: ["React", "Node.js", "Python", "ElevenLabs"],
    kind: "client",
    repoUrl: "https://github.com/farhan-t-dev/VoiceDialer-V1",
    featured: false,
    rank: 11,
  },
  {
    slug: "freelance-tracker",
    title: "Freelance Tracker",
    description:
      "Tracks freelance clients, projects and invoices. React and TypeScript on the front end, FastAPI and SQLAlchemy on the back end.",
    images: [{ src: "/projects/freelance-tracker.webp" }],
    tags: ["React", "TypeScript", "FastAPI", "SQLAlchemy", "SQLite"],
    kind: "personal",
    repoUrl: "https://github.com/farhan-t-dev/Freelance-Tracker",
    featured: false,
    rank: 12,
  },
  {
    slug: "elonmarket",
    title: "Elonmarket",
    description:
      "Free-to-play prediction market where players pick the next topic Elon Musk will post about on X. A live monitor detects the matching post, and winners are paid SOL automatically to the wallet tied to their account.",
    images: [
      {
        src: "/projects/elonmarket.webp",
        alt: "Elonmarket home page: “Predict Elon's Next Tweet. Win SOL.” with Start Predicting and Buy $EMARKET buttons and a stat row of players, predictions and rounds.",
      },
    ],
    tags: ["React", "TypeScript", "Vite", "Supabase", "Solana"],
    kind: "client",
    status: "retired",
    featured: false,
    rank: 13,
  },
];

/**
 * The single reading order for the whole site. Components sort from this
 * instead of trusting the array, so moving a project is one number.
 */
export const rankedProjects: Project[] = [...projects].sort(
  (a, b) => a.rank - b.rank || a.title.localeCompare(b.title),
);

/** The lead tier: the homepage selection and the large cells on /work. */
export const featuredProjects: Project[] = rankedProjects.filter(
  (project) => project.featured,
);

/** Everything else, in the same rank order. The ruled index on /work. */
export const otherProjects: Project[] = rankedProjects.filter(
  (project) => !project.featured,
);
