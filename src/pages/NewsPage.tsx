import { ArrowRight } from "lucide-react";
import { Blocks } from "../components/Blocks";
import { linkProps } from "../lib/links";
import { Layout } from "../components/Layout";
import { formatNewsDate, news, newsKindLabel, type NewsKind } from "../data/news";
import { productBySlug, productHref } from "../data/products";

/** Timeline node color per kind. Magenta is the "new" color site-wide. */
const kindStyle: Record<NewsKind, { dot: string; text: string; hud: string }> = {
  release: { dot: "bg-magenta", text: "text-magenta", hud: "hud-magenta" },
  update: { dot: "bg-cyan", text: "text-cyan", hud: "" },
  announcement: { dot: "bg-gold", text: "text-gold", hud: "hud-gold" },
  upcoming: { dot: "bg-dim", text: "text-haze", hud: "hud-dim" },
};

/** Vertical timeline of every news item, newest first; each has an anchor. */
export function NewsPage() {
  return (
    <Layout current="news">
      <section aria-label="News" className="pt-10 lg:pt-14">
        <header className="mb-12">
          <p className="kicker text-magenta">{"// Transmissions"}</p>
          <h1 className="mt-2 text-3xl font-extrabold uppercase sm:text-4xl">News &amp; releases</h1>
          <p className="mt-3 max-w-2xl">New products, revisions and shop announcements.</p>
        </header>

        <ol className="relative ml-2 border-l border-cyan/40 sm:ml-28">
          {news.map((item) => {
            const s = kindStyle[item.kind];
            const product = item.product ? productBySlug.get(item.product) : undefined;
            return (
              <li key={item.slug} id={item.slug} className="relative pb-10 pl-8 last:pb-0">
                <span
                  aria-hidden
                  className={`absolute top-6 -left-[5px] size-2.5 rounded-full ${s.dot} shadow-[0_0_10px_currentColor] ${s.text}`}
                />
                <time
                  dateTime={item.date}
                  className="mb-2 block font-mono text-xs tracking-wider text-dim sm:absolute sm:top-5 sm:-left-28 sm:mb-0 sm:w-24 sm:text-right"
                >
                  {formatNewsDate(item.date)}
                </time>
                <article className={`hud ${s.hud} max-w-3xl p-5 sm:p-6`}>
                  <p className={`font-mono text-xs tracking-[0.2em] uppercase ${s.text}`}>{newsKindLabel[item.kind]}</p>
                  <h2 className="mt-2 text-lg leading-snug font-bold uppercase sm:text-xl">{item.title}</h2>
                  <p className="mt-3">{item.summary}</p>
                  {item.body && (
                    <div className="mt-4">
                      <Blocks blocks={item.body} />
                    </div>
                  )}
                  {(product || item.links) && (
                    <ul className="mt-5 flex flex-wrap gap-x-6 gap-y-2 font-mono text-xs tracking-[0.15em] uppercase">
                      {product && (
                        <li>
                          <a href={productHref(product.slug)} className={`flex items-center gap-1.5 ${s.text} hover:text-frost`}>
                            View {product.name}
                            <ArrowRight aria-hidden className="size-3.5" />
                          </a>
                        </li>
                      )}
                      {item.links?.map((l) => (
                        <li key={l.href}>
                          <a {...linkProps(l.href)} className={`flex items-center gap-1.5 ${s.text} hover:text-frost`}>
                            {l.label}
                            <ArrowRight aria-hidden className="size-3.5" />
                          </a>
                        </li>
                      ))}
                    </ul>
                  )}
                </article>
              </li>
            );
          })}
        </ol>
      </section>
    </Layout>
  );
}
