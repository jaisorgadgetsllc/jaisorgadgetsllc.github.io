import { useState } from "react";
import { CircuitBoard, FlaskConical, LayoutGrid, RadioTower, Sun, type LucideIcon } from "lucide-react";
import { SiGithub } from "react-icons/si";
import { Layout, SectionHeading } from "../components/Layout";
import { ProductCard } from "../components/ProductCard";
import { categories, products, upcoming, type CategoryId } from "../data/products";

const categoryIcon: Record<CategoryId, LucideIcon> = {
  "mesh-cases": RadioTower,
  solar: Sun,
  boards: CircuitBoard,
};

/**
 * The catalog: category filter (sidebar on lg, pill row below) over a
 * product grid, plus the "coming next" items. Filtering is client-side
 * state over static data.
 */
export function ProductsPage() {
  const [filter, setFilter] = useState<CategoryId | "all">("all");
  const shown = filter === "all" ? products : products.filter((p) => p.category === filter);

  const options: { id: CategoryId | "all"; label: string; icon: LucideIcon; count: number }[] = [
    { id: "all", label: "All products", icon: LayoutGrid, count: products.length },
    ...categories.map((c) => ({
      id: c.id,
      label: c.label,
      icon: categoryIcon[c.id],
      count: products.filter((p) => p.category === c.id).length,
    })),
  ];

  return (
    <Layout current="products">
      <section aria-label="Products" className="pt-10 lg:pt-14">
        <header className="mb-10">
          <p className="kicker">{"// Catalog"}</p>
          <h1 className="mt-2 text-3xl font-extrabold uppercase sm:text-4xl">Products</h1>
          <p className="mt-3 max-w-2xl">
            Enclosures, kits and boards for LoRa mesh nodes and small solar builds. Every product is
            designed in-house and sold through the Etsy shop. Prices are regular Etsy prices; Etsy is
            the source of truth for price and stock.
          </p>
        </header>

        <div className="grid gap-8 lg:grid-cols-[15rem_1fr]">
          <nav aria-label="Product categories" className="lg:sticky lg:top-24 lg:self-start">
            <ul className="flex gap-2 overflow-x-auto pb-2 lg:flex-col lg:overflow-visible">
              {options.map((o) => {
                const active = filter === o.id;
                return (
                  <li key={o.id} className="shrink-0">
                    <button
                      type="button"
                      aria-pressed={active}
                      onClick={() => setFilter(o.id)}
                      className={`hud hud-sm flex w-full items-center gap-3 px-3 py-2.5 text-left font-mono text-xs tracking-[0.12em] uppercase transition ${
                        active ? "hud-glow text-cyan" : "hud-dim hud-link text-haze"
                      }`}
                    >
                      <o.icon aria-hidden className="size-4 shrink-0" />
                      <span className="flex-1 whitespace-nowrap">{o.label}</span>
                      <span className="text-dim">{o.count}</span>
                    </button>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div>
            <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
              {shown.map((p) => (
                <ProductCard key={p.slug} product={p} headingLevel={2} />
              ))}
            </div>

            {upcoming.length > 0 && (
              <section aria-label="Coming next" className="pt-16">
                <SectionHeading index="++" kicker="In the lab" title="Coming next" />
                <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
                  {upcoming.map((u) => (
                    <div key={u.name} className="hud hud-magenta flex flex-col p-5">
                      <p className="flex items-center gap-2 font-mono text-xs tracking-[0.2em] text-magenta uppercase">
                        <FlaskConical aria-hidden className="size-4" />
                        In development
                      </p>
                      <h3 className="mt-3 text-base font-bold uppercase">{u.name}</h3>
                      <p className="mt-2 text-sm">{u.summary}</p>
                      <a
                        href={u.href}
                        target="_blank"
                        rel="noreferrer"
                        className="mt-auto flex items-center gap-2 pt-4 font-mono text-xs tracking-[0.15em] text-magenta uppercase hover:text-frost"
                      >
                        <SiGithub aria-hidden className="size-4" />
                        Follow on GitHub
                      </a>
                    </div>
                  ))}
                </div>
              </section>
            )}
          </div>
        </div>
      </section>
    </Layout>
  );
}
