import { existsSync } from "node:fs";
import { join, normalize } from "node:path";

/**
 * SERVER ONLY — this module touches the filesystem. Do not import it from
 * a client component (there are none today, and this project is meant to
 * stay that way).
 *
 * Media that may not exist yet. Data files reference assets the way the
 * site will eventually ship (e.g. "/projects/<slug>.png"), but the file
 * is often added after the entry. Rather than rendering a broken <img>
 * or a substitute picture, the call sites ask this helper first and skip
 * the slot; dropping the file into public/ and rebuilding is enough for
 * it to appear — no code change.
 *
 * Evaluated at build/prerender time, so the answer is baked into the
 * static HTML. A new file needs a rebuild, which is the normal flow here.
 */
export function publicAssetExists(publicPath: string): boolean {
  // Only absolute, traversal-free paths inside public/ are checked.
  if (!publicPath.startsWith("/") || publicPath.includes("..")) return false;

  return existsSync(join(process.cwd(), "public", normalize(publicPath)));
}
