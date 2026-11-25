import { existsSync, readdirSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { defineConfig, type Plugin } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

/**
 * The one place the public origin lives. Every page shell writes
 * `%ORIGIN%` in its canonical / og / JSON-LD URLs and `siteShell()` below
 * substitutes this value, and the generated sitemap.xml / robots.txt use
 * it too. Switching to a custom domain = change this line + add
 * public/CNAME.
 */
const SITE_ORIGIN = "https://jaisorgadgetsllc.github.io";

/** Top-level page folders. Each holds an index.html (and may nest more). */
const PAGE_DIRS = ["products", "news", "support", "about"];

const abs = (p: string) => fileURLToPath(new URL(p, import.meta.url));

/**
 * Every `index.html` at any depth under PAGE_DIRS is its own build entry, so
 * each page ships as a real static file at a real URL with its own
 * <title> and meta. Dropping a new product folder under products/ is all
 * it takes; no config change.
 */
function pageEntries(): Record<string, string> {
  const entries: Record<string, string> = { main: abs("./index.html") };
  const walk = (rel: string) => {
    if (existsSync(abs(`./${rel}/index.html`))) {
      entries[rel] = abs(`./${rel}/index.html`);
    }
    for (const d of readdirSync(abs(`./${rel}`), { withFileTypes: true })) {
      if (d.isDirectory()) walk(`${rel}/${d.name}`);
    }
  };
  PAGE_DIRS.forEach(walk);
  return entries;
}

const entries = pageEntries();

/** Public URL path of an entry: "main" -> "/", "products/x" -> "/products/x/". */
const entryPath = (name: string) => (name === "main" ? "/" : `/${name}/`);

/**
 * Head markup every page shares. Shells carry a `<!-- shell:head -->`
 * marker where this goes, so favicons / fonts / theme-color can't drift
 * between pages. Per-page meta (title, description, canonical, og:*,
 * JSON-LD) stays hand-written in each shell.
 */
const SHARED_HEAD = `
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="theme-color" content="#05070c" />
    <link rel="icon" href="/favicon.ico" sizes="16x16 32x32 48x48" />
    <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
    <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@500;700;800&family=Share+Tech+Mono&display=swap" rel="stylesheet" />
    <meta name="robots" content="index, follow, max-image-preview:large" />
    <meta property="og:site_name" content="Jaisor Gadgets" />
    <meta property="og:locale" content="en_US" />
    <meta name="twitter:card" content="summary_large_image" />`;

function siteShell(): Plugin {
  return {
    name: "site-shell",
    transformIndexHtml(html) {
      return (
        html
          .replace("<!-- shell:head -->", SHARED_HEAD)
          .replaceAll("%ORIGIN%", SITE_ORIGIN)
          // Vite always adds `crossorigin` to the module script/preload/
          // stylesheet tags it emits. Everything here is same-origin static
          // hosting with no SRI in play, so strip it. The Google Fonts
          // preconnect keeps its own (it is written as `crossorigin />`
          // inside SHARED_HEAD and restored below).
          .replace(/\s+crossorigin(?=[\s>])(?! \/>)/g, "")
      );
    },
    generateBundle() {
      const urls = Object.keys(entries)
        .sort()
        .map((name) => `  <url><loc>${SITE_ORIGIN}${entryPath(name)}</loc></url>`)
        .join("\n");
      this.emitFile({
        type: "asset",
        fileName: "sitemap.xml",
        source: `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`,
      });
      this.emitFile({
        type: "asset",
        fileName: "robots.txt",
        source: `User-agent: *\nAllow: /\n\nSitemap: ${SITE_ORIGIN}/sitemap.xml\n`,
      });
    },
  };
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), siteShell()],
  build: {
    rollupOptions: { input: entries },
  },
  server: {
    host: true,
  },
  optimizeDeps: {
    // Dev only. With dep sourcemaps on, Vite re-opens each freshly written
    // pre-bundled file (e.g. node_modules/.vite/deps/react.js) to strip an
    // empty sourcemap comment. On this machine the antivirus (TotalAV) still
    // holds the new file at that instant, and the open fails with
    // "UNKNOWN: unknown error, open ...react.js" (errno -4094), killing
    // `npm run dev`. No dep sourcemaps = no rewrite. Costs only stepping
    // into React/lucide source in devtools; app code keeps its sourcemaps.
    esbuildOptions: { sourcemap: false },
  },
});
