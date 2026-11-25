import type { Block } from "../blocks";
import type { GuideId } from "../guides";

export type CategoryId = "mesh-cases" | "solar" | "boards";

/** Catalog filter order and labels. Icons are mapped in `ProductsPage`. */
export const categories: { id: CategoryId; label: string }[] = [
  { id: "mesh-cases", label: "Mesh node cases" },
  { id: "solar", label: "Solar enclosures" },
  { id: "boards", label: "Circuit boards" },
];

export interface ProductImage {
  /** Imported asset (so Vite fingerprints it), never a string path. */
  src: string;
  /** What the photo shows. Describe the subject, not the listing. */
  alt: string;
}

export interface PriceLine {
  label: string;
  /** USD. `null` renders as "See Etsy". */
  price: number | null;
  note?: string;
}

export interface Product {
  /** URL segment: the page is /products/<slug>/. Must match its folder. */
  slug: string;
  name: string;
  /** Model / version label, set in mono, e.g. "v1.2" or "T114 / T096". */
  model: string;
  category: CategoryId;
  /** Catalog and home-page order, ascending. */
  order: number;
  /** One or two sentences: card text, page lede and meta description. */
  summary: string;
  /** Optional hook, e.g. "What makes this special?" plus its answer. */
  hook?: { question: string; answer: string };
  /** Short mono chips: "Fully built", "Kit", "Open design" ... */
  badges: string[];
  /**
   * Regular prices as last checked on Etsy. Etsy is the source of truth;
   * `pricesAsOf` is shown next to them. Empty = "Price on Etsy".
   */
  prices: PriceLine[];
  pricesAsOf?: string;
  /** Listing URL when known, otherwise the shop. */
  etsyUrl: string;
  /** 4:3 cover for cards. Omit to draw the HUD placeholder. */
  card?: ProductImage;
  gallery: ProductImage[];
  /** Key/value quick specs in the page sidebar. Values take inline markup. */
  specs: { label: string; value: string }[];
  body: Block[];
  guides: GuideId[];
  /** Free designs Jordan Marinov publishes personally (not the LLC). */
  openDesign?: { makerworld?: string; github?: string };
}

/**
 * Every sibling file default-exports one Product and is discovered here;
 * nothing to register. A product also needs `products/<slug>/index.html`
 * (the page shell) and `public/og/<slug>.jpg`. See CLAUDE.md.
 */
const modules = import.meta.glob<{ default: Product }>("./*.ts", {
  eager: true,
});

export const products: Product[] = Object.entries(modules)
  .filter(([path]) => !path.endsWith("/index.ts"))
  .map(([, mod]) => mod.default)
  .sort((a, b) => a.order - b.order);

export const productBySlug = new Map(products.map((p) => [p.slug, p]));

export const productHref = (slug: string) => `/products/${slug}/`;

export function formatPrice(price: number | null) {
  return price === null ? "See Etsy" : `$${price}`;
}

/** "from $10", or "Price on Etsy" when no price is recorded. */
export function priceFrom(p: Product) {
  const known = p.prices.flatMap((l) => (l.price === null ? [] : [l.price]));
  if (known.length === 0) return "Price on Etsy";
  const min = Math.min(...known);
  return p.prices.length > 1 ? `from $${min}` : `$${min}`;
}

/** Products on the drawing board: shown in the catalog, no page, no price. */
export const upcoming: { name: string; summary: string; href: string }[] = [
  {
    name: "SNAP Power Mini",
    summary:
      "A smaller sibling solar charge board to the SNAP Power Controller. In development, not yet for sale.",
    href: "https://github.com/jaisor/SNAP_Power_Mini",
  },
];
