import type { Block } from "../blocks";

export type NewsKind = "announcement" | "release" | "update" | "upcoming";

export interface NewsItem {
  /** Anchor id on /news/ (#<slug>). Unique. */
  slug: string;
  /**
   * "YYYY-MM-DD", or "YYYY-MM" when only the month is known. Sorted as a
   * string, so both forms order correctly; month-only renders "Nov 2026".
   */
  date: string;
  kind: NewsKind;
  title: string;
  /** One or two sentences. Shown on the home page and the timeline. */
  summary: string;
  /** Optional longer text, shown only on /news/. */
  body?: Block[];
  /** Related product slug: adds a "View product" link. */
  product?: string;
  links?: { label: string; href: string }[];
}

/**
 * One file per item in this folder, auto-discovered like products. News
 * lives on /news/ only (anchors, no per-item pages), so adding an item
 * needs no HTML shell.
 */
const modules = import.meta.glob<{ default: NewsItem }>("./*.ts", {
  eager: true,
});

/** Newest first; same date falls back to slug order for stability. */
export const news: NewsItem[] = Object.entries(modules)
  .filter(([path]) => !path.endsWith("/index.ts"))
  .map(([, mod]) => mod.default)
  .sort((a, b) => b.date.localeCompare(a.date) || a.slug.localeCompare(b.slug));

export const newsKindLabel: Record<NewsKind, string> = {
  announcement: "Announcement",
  release: "Release",
  update: "Update",
  upcoming: "Coming next",
};

export function formatNewsDate(date: string) {
  const [y, m, d] = date.split("-").map(Number);
  const dt = new Date(Date.UTC(y, (m ?? 1) - 1, d ?? 1));
  return dt.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    ...(d ? { day: "numeric" } : {}),
    timeZone: "UTC",
  });
}

export const newsHref = (slug: string) => `/news/#${slug}`;
