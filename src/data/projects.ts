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
];
