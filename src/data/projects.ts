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
  // TODO: add your projects
  {
    slug: "marketplace-migration",
    title: "Live marketplace migration",
    description:
      "Moved a production Laravel marketplace from an old VPS to a new Docker Compose server: application, MySQL database, uploaded media, scheduled jobs, and the domain cutover with SSL.",
    image: "/projects/marketplace-migration.png",
    tags: ["Laravel", "MySQL", "Docker Compose", "Linux"],
    liveUrl: "https://<site-url>", // remove the line if the client prefers it private
    featured: true,
  },
];
