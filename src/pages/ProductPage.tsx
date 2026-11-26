import { useState } from "react";
import { ChevronRight, Download, ExternalLink, FileText, FlaskConical, Box, Newspaper } from "lucide-react";
import { SiEtsy, SiGithub } from "react-icons/si";
import { Blocks } from "../components/Blocks";
import { Inline } from "../components/Inline";
import { Layout } from "../components/Layout";
import { ProductArt } from "../components/ProductCard";
import { guideById } from "../data/guides";
import { buyLinks, formatPrice, isComingSoon, type Product } from "../data/products";
import { site } from "../data/site";
import { linkProps } from "../lib/links";

export function ProductPage({ product }: { product: Product }) {
  const productGuides = product.guides.flatMap((id) => guideById.get(id) ?? []);
  const od = product.openDesign;
  const soon = isComingSoon(product);

  return (
    <Layout current="products">
      <nav aria-label="Breadcrumb" className="pt-8 font-mono text-xs tracking-[0.15em] text-dim uppercase">
        <ol className="flex flex-wrap items-center gap-1.5">
          <li>
            <a href="/products/" className="hover:text-cyan">
              Products
            </a>
          </li>
          <li aria-hidden>
            <ChevronRight className="size-3.5" />
          </li>
          <li aria-current="page" className="text-haze">
            {product.name}
          </li>
        </ol>
      </nav>

      <div className="grid gap-8 pt-6 lg:grid-cols-[1.15fr_1fr]">
        <Gallery product={product} />

        <div className="hud hud-lg h-fit p-6 sm:p-8">
          <p className="kicker">{`// ${product.model}`}</p>
          <h1 className="mt-3 text-2xl leading-tight font-extrabold uppercase sm:text-3xl">{product.name}</h1>
          <ul className="mt-4 flex flex-wrap gap-1.5" aria-label="Highlights">
            {product.badges.map((b) => (
              <li
                key={b}
                className={`border px-1.5 py-0.5 font-mono text-[0.7rem] tracking-wider uppercase ${
                  b === "Open design" ? "border-gold/70 text-gold" : "border-cyan/50 text-cyan"
                }`}
              >
                {b}
              </li>
            ))}
          </ul>
          <p className="mt-5 text-base">{product.summary}</p>

          <div className="mt-6 border-t border-line pt-5">
            {soon ? (
              <div>
                <p className="flex items-center gap-2 font-mono text-sm tracking-wider text-magenta uppercase">
                  <FlaskConical aria-hidden className="size-4" />
                  Coming soon / not for sale yet
                </p>
                <p className="mt-2 text-sm">Price, colors and kit contents are not set. Watch the news page for the release.</p>
              </div>
            ) : product.prices.length > 0 ? (
              <dl className="space-y-2">
                {product.prices.map((line) => (
                  <div key={line.label} className="flex items-baseline justify-between gap-4">
                    <dt className="font-mono text-sm tracking-wider uppercase">
                      {line.label}
                      {line.note && <span className="ml-2 text-xs text-dim normal-case">({line.note})</span>}
                    </dt>
                    <dd className="font-mono text-xl text-frost">{formatPrice(line.price)}</dd>
                  </div>
                ))}
              </dl>
            ) : (
              <p className="font-mono text-sm tracking-wider uppercase">Price and availability on Etsy</p>
            )}
            {product.pricesAsOf && (
              <p className="mt-3 text-xs text-dim">
                Regular Etsy prices, {product.pricesAsOf}. Etsy has the current price and stock.
              </p>
            )}
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            {!soon && buyLinks(product).map((link) => (
              <a key={link.label} {...linkProps(link.href)} className="btn btn-signal">
                <SiEtsy aria-hidden className="size-4" />
                {link.label ? `Buy ${link.label}` : "Buy on Etsy"}
              </a>
            ))}
            {soon && (
              <a href="/news/" className="btn btn-outline hud hud-sm hud-link">
                <Newspaper aria-hidden className="size-4" />
                News
              </a>
            )}
            {productGuides.length > 0 && (
              <a href="#downloads" className="btn btn-outline hud hud-sm hud-link">
                <FileText aria-hidden className="size-4" />
                Guides
              </a>
            )}
          </div>
        </div>
      </div>

      <div className="grid gap-10 pt-14 lg:grid-cols-[1fr_22rem]">
        <article aria-label="Product details" className="min-w-0">
          {product.hook && (
            <div className="mb-10 border-l-2 border-gold pl-5">
              <p className="font-display text-lg font-bold text-gold">{product.hook.question}</p>
              <p className="mt-2 text-base text-frost/90">{product.hook.answer}</p>
            </div>
          )}
          <Blocks blocks={product.body} />
        </article>

        <aside className="space-y-6" aria-label="Specifications and downloads">
          <section aria-labelledby="specs-h" className="hud p-5">
            <h2 id="specs-h" className="kicker">
              {"// Specs"}
            </h2>
            <dl className="mt-4 divide-y divide-line text-sm">
              {product.specs.map((s) => (
                <div key={s.label} className="grid grid-cols-[6.5rem_1fr] gap-3 py-2">
                  <dt className="font-mono text-xs tracking-wider text-dim uppercase">{s.label}</dt>
                  <dd>
                    <Inline text={s.value} />
                  </dd>
                </div>
              ))}
            </dl>
          </section>

          {productGuides.length > 0 && (
            <section id="downloads" aria-labelledby="dl-h" className="hud p-5">
              <h2 id="dl-h" className="kicker">
                {"// Guides & downloads"}
              </h2>
              <ul className="mt-4 space-y-3">
                {productGuides.map((g) => (
                  <li key={g.id}>
                    <a href={g.href} className="group flex gap-3" target="_blank" rel="noreferrer">
                      <Download aria-hidden className="mt-0.5 size-4 shrink-0 text-cyan" />
                      <span>
                        <span className="block text-sm text-frost group-hover:text-cyan">{g.title}</span>
                        <span className="font-mono text-xs text-dim">
                          PDF / {g.pages} pages / {g.sizeLabel}
                        </span>
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </section>
          )}

          {od && (
            <section aria-labelledby="od-h" className="hud hud-gold p-5">
              <h2 id="od-h" className="kicker text-gold">
                {"// Open design"}
              </h2>
              <p className="mt-3 text-sm">
                Published free by {site.founder}. Print or build your own, or buy one finished here.
              </p>
              <ul className="mt-4 space-y-2 text-sm">
                {od.makerworld && (
                  <li>
                    <a {...linkProps(od.makerworld)} className="flex items-center gap-2 text-gold hover:text-frost">
                      <Box aria-hidden className="size-4" />
                      Free 3D model on MakerWorld
                      <ExternalLink aria-hidden className="size-3.5" />
                    </a>
                  </li>
                )}
                {od.github && (
                  <li>
                    <a {...linkProps(od.github)} className="flex items-center gap-2 text-gold hover:text-frost">
                      <SiGithub aria-hidden className="size-4" />
                      Design files on GitHub
                      <ExternalLink aria-hidden className="size-3.5" />
                    </a>
                  </li>
                )}
              </ul>
            </section>
          )}

          <p className="text-xs text-dim">
            For hobbyists and experienced users. Not UL, CE or FCC certified. See{" "}
            <a href="/support/#policies" className="prose-link">
              policies
            </a>
            .
          </p>
        </aside>
      </div>
    </Layout>
  );
}

/** Main image plus clickable thumbnails. Falls back to the placeholder. */
function Gallery({ product }: { product: Product }) {
  const [index, setIndex] = useState(0);
  const images = product.gallery;
  const current = images[index];

  return (
    <div>
      <div className="hud hud-sm p-1.5">
        <ProductArt image={current} fit="contain" className="aspect-[4/3]" />
      </div>
      {images.length > 1 && (
        <ul className="mt-3 grid grid-cols-5 gap-2 sm:grid-cols-6" aria-label="Product photos">
          {images.map((img, i) => (
            <li key={img.src}>
              <button
                type="button"
                onClick={() => setIndex(i)}
                aria-label={`Show photo ${i + 1}: ${img.alt}`}
                aria-current={i === index}
                className={`block w-full border p-0.5 transition ${
                  i === index ? "border-cyan shadow-[0_0_8px_var(--color-cyan)]" : "border-line hover:border-cyan/60"
                }`}
              >
                <img src={img.src} alt="" loading="lazy" className="aspect-square w-full object-cover" />
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
