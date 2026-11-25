import type { Block } from "../blocks";
import type { GuideId } from "../guides";
import { site } from "../site";

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
  /**
   * Etsy listing for this option, when it has its own. Falls back to the
   * product's `etsyUrl`. Use the bare listing URL, no tracking params.
   */
  etsyUrl?: string;
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
  /**
   * Listing URL for the whole product when known, otherwise the shop.
   * Options sold as separate listings set their own `etsyUrl` instead.
   */
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
  /**
   * "coming-soon": not for sale yet. The page shows photos and specs but
   * no price or Buy button; the catalog lists it under "Coming next" and
   * the home page leaves it out. Keep `prices` empty.
   */
  status?: "coming-soon";
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

export const isComingSoon = (p: Product) => p.status === "coming-soon";
/** Products on sale: the catalog grid and the home page. */
export const forSale = products.filter((p) => !isComingSoon(p));
/** Products with a page but not for sale yet: "Coming next". */
export const comingSoon = products.filter(isComingSoon);

export const productHref = (slug: string) => `/products/${slug}/`;

export function formatPrice(price: number | null) {
  return price === null ? "See Etsy" : `$${price}`;
}

/**
 * Card price line. "from $10" only when every option's price is known;
 * if any option is "See Etsy", a floor would be a guess, so name the
 * cheapest known option instead ("$24 / 2x200mA kit"). "Price on Etsy"
 * when nothing is recorded.
 */
export function priceFrom(p: Product) {
  const known = p.prices.filter((l): l is PriceLine & { price: number } => l.price !== null);
  if (known.length === 0) return "Price on Etsy";
  const cheapest = known.reduce((a, b) => (b.price < a.price ? b : a));
  if (known.length < p.prices.length) return `$${cheapest.price} / ${cheapest.label}`;
  return known.length > 1 ? `from $${cheapest.price}` : `$${cheapest.price}`;
}

/**
 * Buy buttons for the product page. One per price line when any line has
 * its own listing (lines without one fall back to the product URL), else a
 * single button.
 */
export function buyLinks(p: Product): { label: string; href: string }[] {
  if (!p.prices.some((l) => l.etsyUrl)) return [{ label: "", href: p.etsyUrl }];
  return p.prices.map((l) => ({ label: l.label, href: l.etsyUrl ?? p.etsyUrl }));
}

/**
 * The card's single Buy link: the product listing if there is one, else
 * the listing of the cheapest option that has one (the card shows that
 * option's price), else the shop.
 */
export function primaryBuyUrl(p: Product) {
  if (p.etsyUrl !== site.etsyShop) return p.etsyUrl;
  const direct = p.prices
    .filter((l) => l.etsyUrl)
    .sort((a, b) => (a.price ?? Infinity) - (b.price ?? Infinity));
  return direct[0]?.etsyUrl ?? p.etsyUrl;
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
