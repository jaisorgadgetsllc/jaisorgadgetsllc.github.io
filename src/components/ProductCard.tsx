import { ArrowRight } from "lucide-react";
import { SiEtsy } from "react-icons/si";
import { priceFrom, productHref, type Product, type ProductImage } from "../data/products";

/**
 * Catalog / home tile. Not one big anchor: the image and title link to
 * the product page, and the two buttons are their own links (anchors
 * can't nest).
 */
export function ProductCard({ product, headingLevel = 3 }: { product: Product; headingLevel?: 2 | 3 }) {
  const href = productHref(product.slug);
  const H = `h${headingLevel}` as const;
  return (
    <article className="hud hud-link group flex flex-col p-3">
      <a href={href} tabIndex={-1} aria-hidden className="relative block">
        <ProductArt image={product.card} className="aspect-[4/3]" />
        <div className="absolute inset-x-2 top-2 flex flex-wrap gap-1.5">
          {product.badges.map((b) => (
            <span
              key={b}
              className={`border px-1.5 py-0.5 font-mono text-[0.65rem] tracking-wider uppercase backdrop-blur-sm ${
                b === "Open design"
                  ? "border-gold/70 bg-ink/70 text-gold"
                  : "border-cyan/50 bg-ink/70 text-cyan"
              }`}
            >
              {b}
            </span>
          ))}
        </div>
      </a>
      <div className="flex flex-1 flex-col px-1 pt-4 pb-1">
        <p className="font-mono text-xs tracking-[0.2em] text-dim uppercase">{product.model}</p>
        <H className="mt-1 text-base leading-snug font-bold uppercase">
          <a href={href} className="transition group-hover:text-cyan">
            {product.name}
          </a>
        </H>
        <p className="mt-2 line-clamp-3 text-sm">{product.summary}</p>
        <div className="mt-auto flex flex-wrap items-center justify-between gap-3 pt-5">
          <p className="font-mono text-lg text-frost">{priceFrom(product)}</p>
          <div className="flex gap-2">
            <a href={href} className="btn btn-sm btn-outline hud hud-sm hud-link">
              Details
              <ArrowRight aria-hidden className="size-3.5" />
            </a>
            <a href={product.etsyUrl} target="_blank" rel="noreferrer" className="btn btn-sm btn-signal">
              <SiEtsy aria-hidden className="size-3" />
              Buy
              <span className="sr-only"> {product.name} on Etsy</span>
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}

/**
 * A product photo in a dark frame, or, when there is no photo yet, a
 * line-art enclosure on the blueprint grid. Never a stock image.
 */
export function ProductArt({
  image,
  className = "",
  fit = "cover",
}: {
  image?: ProductImage;
  className?: string;
  fit?: "cover" | "contain";
}) {
  if (image) {
    return (
      <img
        src={image.src}
        alt={image.alt}
        loading="lazy"
        className={`w-full bg-raised ${fit === "cover" ? "object-cover" : "object-contain"} ${className}`}
      />
    );
  }
  return (
    <div
      role="img"
      aria-label="Product photo coming soon"
      className={`relative grid w-full place-items-center overflow-hidden bg-raised ${className}`}
      style={{
        backgroundImage:
          "linear-gradient(rgb(46 196 241 / 0.08) 1px, transparent 1px), linear-gradient(90deg, rgb(46 196 241 / 0.08) 1px, transparent 1px)",
        backgroundSize: "20px 20px",
      }}
    >
      <svg viewBox="0 0 200 140" className="w-1/2 text-cyan" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
        {/* isometric box: top face, front-left, front-right */}
        <path d="M100 20 L170 52 L100 84 L30 52 Z" opacity="0.9" />
        <path d="M30 52 L30 92 L100 124 L100 84" />
        <path d="M170 52 L170 92 L100 124" />
        {/* screen window on top face */}
        <path d="M100 38 L138 55 L100 72 L62 55 Z" opacity="0.6" strokeDasharray="4 3" />
        {/* antenna */}
        <path d="M150 60 L150 18" />
        <circle cx="150" cy="16" r="2.5" />
      </svg>
      <span className="absolute bottom-3 left-3 font-mono text-[0.65rem] tracking-[0.25em] text-cyan/80 uppercase">
        {"// Photo pending"}
      </span>
    </div>
  );
}
