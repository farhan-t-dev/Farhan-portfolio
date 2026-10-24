import { readFile } from "node:fs/promises";
import { join } from "node:path";

import { og } from "./theme";

/**
 * SERVER ONLY — reads the two static TTFs at build time.
 *
 * ImageResponse cannot use the woff2 files next/font emits, and Satori is
 * unreliable with variable fonts. These are static instances of the same
 * faces the site uses: Archivo 600 at 112.5% width (the nearest instance
 * to the page's 118%) and Newsreader 400. Both are OFL; the licences sit
 * beside the files in assets/fonts/.
 */
export async function loadOgFonts() {
  const dir = join(process.cwd(), "assets", "fonts");
  const [archivo, newsreader] = await Promise.all([
    readFile(join(dir, "Archivo-SemiExpanded-600.ttf")),
    readFile(join(dir, "Newsreader-Regular.ttf")),
  ]);

  return [
    {
      name: og.archivo,
      data: archivo,
      style: "normal" as const,
      weight: 600 as const,
    },
    {
      name: og.newsreader,
      data: newsreader,
      style: "normal" as const,
      weight: 400 as const,
    },
  ];
}
