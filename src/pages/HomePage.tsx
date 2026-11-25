import { ArrowRight, CircuitBoard, PackageCheck, PenTool, Printer } from "lucide-react";
import { SiEtsy } from "react-icons/si";
import hero from "../assets/home/hero.jpg";
import { Layout, SectionHeading } from "../components/Layout";
import { NewsCard } from "../components/NewsCard";
import { ProductCard } from "../components/ProductCard";
import { news } from "../data/news";
import { products } from "../data/products";
import { site } from "../data/site";
import { linkProps } from "../lib/links";

/** How many news items the home page slot shows. */
const NEWS_ON_HOME = 3;

const process = [
  {
    icon: PenTool,
    title: "Designed in-house",
    text: "Every enclosure and board starts as an original design.",
  },
  {
    icon: Printer,
    title: "3D printed",
    text: "PETG, ASA, PLA and TPU parts, printed in small batches.",
  },
  {
    icon: CircuitBoard,
    title: "Soldered & assembled",
    text: "Boards fabricated by JLCPCB, then fitted and wired by hand.",
  },
  {
    icon: PackageCheck,
    title: "Tested",
    text: "Every board is tested before it ships from Southern California.",
  },
];

export function HomePage() {
  return (
    <Layout current="home">
      <Hero />

      <section id="news" aria-label="News and announcements" className="pt-20">
        <SectionHeading
          index="01"
          kicker="Transmissions"
          title="News & announcements"
          action={
            <a href="/news/" className="btn btn-sm btn-outline hud hud-sm hud-link hud-magenta text-magenta">
              All news
              <ArrowRight aria-hidden className="size-3.5" />
            </a>
          }
        />
        <div className="grid gap-5 md:grid-cols-3">
          {news.slice(0, NEWS_ON_HOME).map((item) => (
            <NewsCard key={item.slug} item={item} />
          ))}
        </div>
      </section>

      <section id="products" aria-label="Product lines" className="pt-20">
        <SectionHeading
          index="02"
          kicker="Catalog"
          title="Product lines"
          action={
            <a href="/products/" className="btn btn-sm btn-outline hud hud-sm hud-link">
              All products
              <ArrowRight aria-hidden className="size-3.5" />
            </a>
          }
        >
          <p>For LoRa mesh networks (Meshtastic, MeshCore) and small off-grid builds.</p>
        </SectionHeading>
        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {products.map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </div>
      </section>

      <section id="process" aria-label="How it's made" className="pt-20">
        <SectionHeading index="03" kicker="Process" title="How it's made" />
        <ol className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {process.map((step, i) => (
            <li key={step.title} className="hud hud-dim p-5">
              <div className="flex items-center justify-between">
                <step.icon aria-hidden className="size-6 text-cyan" />
                <span className="font-mono text-xs text-dim">{String(i + 1).padStart(2, "0")}</span>
              </div>
              <h3 className="mt-4 text-sm font-bold uppercase">{step.title}</h3>
              <p className="mt-2 text-sm">{step.text}</p>
            </li>
          ))}
        </ol>
      </section>

      <section aria-label="Open designs" className="pt-20">
        <div className="hud hud-gold hud-lg flex flex-col gap-6 p-8 md:flex-row md:items-center md:justify-between">
          <div className="max-w-2xl">
            <p className="kicker text-gold">{"// Open designs"}</p>
            <h2 className="mt-2 text-xl font-extrabold uppercase sm:text-2xl">Print it yourself, or buy it finished</h2>
            <p className="mt-3">
              Most of these designs are published free by {site.founder} on MakerWorld and GitHub.
              The shop sells finished units, kits and boards.
            </p>
          </div>
          <div className="flex shrink-0 flex-wrap gap-3">
            <a href="/support/#open-designs" className="btn btn-outline hud hud-sm hud-link hud-gold text-gold">
              Open designs
            </a>
            <a {...linkProps(site.etsyShop)} className="btn btn-gold">
              <SiEtsy aria-hidden className="size-4" />
              Shop on Etsy
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
}

function Hero() {
  return (
    <section aria-label="Welcome" className="pt-8 lg:pt-12">
      <div className="hud hud-lg hud-glow grid items-center gap-8 p-6 sm:p-10 lg:grid-cols-[1.1fr_1fr]">
        <div>
          <p className="kicker">{"// 00  Welcome to the gadget lab"}</p>
          <h1 className="mt-4 text-3xl leading-tight font-extrabold uppercase sm:text-4xl xl:text-5xl">
            Mesh radio &amp; solar hardware for makers
          </h1>
          <p className="mt-4 font-mono text-sm tracking-[0.18em] text-gold uppercase">{site.tagline}</p>
          <p className="mt-5 max-w-xl text-base sm:text-lg">{site.pitch}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a {...linkProps(site.etsyShop)} className="btn btn-gold">
              <SiEtsy aria-hidden className="size-4" />
              Enter the Etsy shop
            </a>
            <a href="/products/" className="btn btn-outline hud hud-sm hud-link">
              Browse products
            </a>
            <a href="/support/#guides" className="btn btn-outline hud hud-sm hud-link">
              Guides
            </a>
          </div>
        </div>

        <figure className="relative mx-auto w-full max-w-md lg:max-w-none">
          <div className="hud hud-sm p-1.5">
            <img
              src={hero}
              alt="Olive-green SNAP solar enclosure with a solar panel and a black SMA antenna, mounted outdoors."
              className="aspect-square w-full object-cover"
            />
          </div>
          <Callout className="top-6 -left-2 sm:-left-6" label="Solar node" value="SNAP v1.2" />
          <Callout className="right-2 bottom-16 sm:-right-6" label="Network" value="LoRa 915 MHz" />
          <Callout className="bottom-4 left-6" label="Firmware" value="Meshtastic / MeshCore" />
        </figure>
      </div>
    </section>
  );
}

/** HUD callout tag floating over the hero photo. Decorative. */
function Callout({ className, label, value }: { className: string; label: string; value: string }) {
  return (
    <div aria-hidden className={`absolute border border-gold/70 bg-ink/85 px-2 py-1 font-mono backdrop-blur-sm ${className}`}>
      <p className="text-[0.6rem] tracking-[0.2em] text-gold/80 uppercase">{label}</p>
      <p className="text-xs tracking-wider text-frost">{value}</p>
    </div>
  );
}
