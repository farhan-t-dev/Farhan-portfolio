export type Project = {
  slug: string;
  title: string;
  description: string;
  image: string; // /projects/<slug>.png
  tags: string[];
  liveUrl?: string;
  repoUrl?: string;
  featured: boolean;
};

export const projects: Project[] = [
  {
    slug: "fletched",
    title: "Fletched",
    description:
      "App Store release, website and database fixes for an archery ballistics product. Took the app through App Store deployment, built the website, and fixed Supabase database issues.",
    image: "/projects/fletched.png",
    tags: ["React", "Vite", "Tailwind CSS", "Supabase", "App Store"],
    liveUrl: "https://fletchedco.com",
    featured: true,
  },
  {
    slug: "parts-seekr",
    title: "Parts Seekr",
    description:
      "Photo-based parts search that returns a price-sorted list of matching listings. Added authentication, reworked the search logic that pulls results from eBay and SerpApi, fixed a Supabase issue, rebranded the app, and deployed it to Vercel.",
    image: "/projects/parts-seekr.png",
    tags: ["TypeScript", "Supabase", "Vercel", "eBay API", "SerpApi"],
    liveUrl: "https://snapprice-beta.vercel.app", // replace with the client's current URL
    featured: true,
  },
  {
    slug: "cognabase",
    title: "Cognabase",
    description:
      "Self-hosted Supabase platform. Creating a project in the interface starts a new Supabase instance on the server. Worked on the full system: interface and server-side provisioning.",
    image: "/projects/cognabase.png",
    tags: ["TypeScript", "Supabase", "Self-hosting"],
    featured: true,
  },
  {
    slug: "marketplace-migration",
    title: "Live marketplace migration",
    description:
      "Moved a production Laravel marketplace from an old VPS to a new Docker Compose server: application, MySQL database, uploaded media, scheduled jobs, and the domain cutover with SSL.",
    image: "/projects/marketplace-migration.png",
    tags: ["Laravel", "MySQL", "Docker Compose", "Linux"],
    featured: true,
  },
  {
    slug: "schematic-builder",
    title: "Insurance schematic builder",
    description:
      "Converts insurance program spreadsheets into PowerPoint schematics. Improved the Python conversion engine, built the frontend, and deployed it on Render.",
    image: "/projects/schematic-builder.png",
    tags: ["Python", "python-pptx", "Render"],
    featured: false,
  },
  {
    slug: "checkin",
    title: "Checkin",
    description:
      "Fixed Supabase and authentication issues, adjusted the UI, and configured hosting on Render.",
    image: "/projects/checkin.png",
    tags: ["React", "Express", "Supabase", "Render"],
    featured: false,
  },
  {
    slug: "propmanage",
    title: "PropManage",
    description:
      "Personal build. Property management platform with nested properties and units, a transaction ledger, PDF invoices, real-time notifications over WebSockets, and a maintenance workflow enforced as a state machine. Runs as one Docker Compose stack.",
    image: "/projects/propmanage.png",
    tags: ["Django", "React", "PostgreSQL", "Celery", "Docker Compose"],
    repoUrl: "https://github.com/farhan-t-dev/PropManage",
    featured: false,
  },
  {
    slug: "marketflow",
    title: "MarketFlow",
    description:
      "Personal build. Multi-vendor B2B marketplace on Laravel 11 with buyer, seller and admin roles, stock and order handling, automatic commission calculation, and a Docker and Nginx setup.",
    image: "/projects/marketflow.png",
    tags: ["Laravel", "Docker", "Nginx", "Tailwind CSS"],
    repoUrl: "https://github.com/farhan-t-dev/b2b-marketplace",
    featured: false,
  },

  // Enable only after the check noted on each entry.
  // {
  //   slug: "mindacco",
  //   title: "MindAcco",
  //   description:
  //     "Production setup, authentication and core bug fixes, Supabase issues, and a Vercel deploy.",
  //   image: "/projects/mindacco.png",
  //   tags: ["Supabase", "Vercel"],
  //   featured: false,
  // }, // after client consent
  // {
  //   slug: "voice-dialer",
  //   title: "AI voice outreach dialer",
  //   description:
  //     "Works through a contact list, calls through Google Voice, and an ElevenLabs agent collects each contact's details into a dashboard.",
  //   image: "/projects/voice-dialer.png",
  //   tags: ["React", "Node.js", "Python", "ElevenLabs"],
  //   featured: false,
  // }, // after the contract check
];