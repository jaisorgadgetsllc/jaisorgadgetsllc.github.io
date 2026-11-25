import { useState } from "react";
import {
  Box,
  ChevronDown,
  CircleHelp,
  Download,
  ExternalLink,
  FileText,
  Mail,
  MessageSquare,
  Scale,
  Search,
  type LucideIcon,
} from "lucide-react";
import { SiEtsy, SiGithub } from "react-icons/si";
import { Inline } from "../components/Inline";
import { Layout, SectionHeading } from "../components/Layout";
import { guideById } from "../data/guides";
import { productHref, products, upcoming } from "../data/products";
import { mailto, site } from "../data/site";
import { faqs, policies } from "../data/support";

const tiles: { href: string; label: string; icon: LucideIcon }[] = [
  { href: "#guides", label: "Guides & downloads", icon: FileText },
  { href: "#faq", label: "Troubleshooting & FAQ", icon: CircleHelp },
  { href: "#open-designs", label: "Open designs", icon: Box },
  { href: "#policies", label: "Policies", icon: Scale },
  { href: "#contact", label: "Contact", icon: Mail },
];

/**
 * Knowledge hub. The search box is a client-side text filter over the
 * product resource cards and the FAQ; nothing is sent anywhere.
 */
export function SupportPage() {
  const [query, setQuery] = useState("");
  const q = query.trim().toLowerCase();
  const match = (...texts: (string | undefined)[]) =>
    q === "" || texts.some((t) => t?.toLowerCase().includes(q));

  const resourceCards = products
    .map((p) => ({ p, guides: p.guides.flatMap((id) => guideById.get(id) ?? []) }))
    .filter(({ p, guides }) =>
      match(p.name, p.model, p.summary, ...guides.flatMap((g) => [g.title, g.description])),
    );
  const shownFaqs = faqs.filter((f) => match(f.q, f.a));

  return (
    <Layout current="support">
      <section aria-label="Support" className="pt-10 lg:pt-14">
        <header className="mb-8">
          <p className="kicker">{"// Knowledge hub"}</p>
          <h1 className="mt-2 text-3xl font-extrabold uppercase sm:text-4xl">Support &amp; manuals</h1>
          <p className="mt-3 max-w-2xl">
            Assembly and connection guides, troubleshooting, open design files and shop policies.
          </p>
        </header>

        <div role="search" className="hud hud-glow max-w-3xl">
          <label htmlFor="support-search" className="sr-only">
            Search guides and FAQ
          </label>
          <div className="flex items-center gap-3 px-4">
            <Search aria-hidden className="size-5 shrink-0 text-cyan" />
            <input
              id="support-search"
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search guides, FAQ, products..."
              autoComplete="off"
              className="w-full bg-transparent py-3.5 font-mono text-sm tracking-wider text-frost placeholder:text-dim focus:outline-none"
            />
          </div>
        </div>
        {q && (
          <p className="mt-3 font-mono text-xs text-dim" aria-live="polite">
            {resourceCards.length} product{resourceCards.length === 1 ? "" : "s"}, {shownFaqs.length} FAQ
            {shownFaqs.length === 1 ? "" : "s"} match "{query.trim()}"
          </p>
        )}

        <nav aria-label="Support sections" className="mt-8">
          <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
            {tiles.map((t) => (
              <li key={t.href}>
                <a href={t.href} className="hud hud-link flex h-full flex-col items-center gap-3 p-5 text-center">
                  <t.icon aria-hidden className="size-7 text-cyan" />
                  <span className="font-mono text-xs tracking-[0.15em] text-frost uppercase">{t.label}</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </section>

      <section id="guides" aria-label="Guides and downloads" className="pt-16">
        <SectionHeading index="01" kicker="Manuals" title="Guides & downloads">
          <p>Everything for each product in one place: printable guides, models and design files.</p>
        </SectionHeading>
        {resourceCards.length === 0 && <p className="text-dim">No products match.</p>}
        <div className="grid gap-5 lg:grid-cols-2">
          {resourceCards.map(({ p, guides }) => (
            <article key={p.slug} className="hud grid sm:grid-cols-[1fr_11rem]">
              <div className="p-5">
                <p className="font-mono text-xs tracking-[0.2em] text-dim uppercase">{p.model}</p>
                <h3 className="mt-1 text-base font-bold uppercase">
                  <a href={productHref(p.slug)} className="hover:text-cyan">
                    {p.name}
                  </a>
                </h3>
                {guides.length > 0 ? (
                  <ul className="mt-3 space-y-2 text-sm">
                    {guides.map((g) => (
                      <li key={g.id}>
                        <p className="text-frost">{g.title}</p>
                        <p className="text-xs">{g.description}</p>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="mt-3 text-sm text-dim">No printed guide for this product yet. See the product page and FAQ.</p>
                )}
              </div>
              <ul className="flex flex-row flex-wrap gap-4 border-t border-magenta/40 p-5 font-mono text-xs tracking-wider uppercase sm:flex-col sm:border-t-0 sm:border-l">
                {guides.map((g) => (
                  <li key={g.id}>
                    <a href={g.href} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-gold hover:text-frost">
                      <Download aria-hidden className="size-4" />
                      .PDF {guides.length > 1 ? g.id.split("-")[0].toUpperCase() : ""}
                      <span className="sr-only">: {g.title}</span>
                    </a>
                  </li>
                ))}
                {p.openDesign?.makerworld && (
                  <li>
                    <a href={p.openDesign.makerworld} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-gold hover:text-frost">
                      <Box aria-hidden className="size-4" />
                      3D model
                      <span className="sr-only">: {p.name} on MakerWorld</span>
                    </a>
                  </li>
                )}
                {p.openDesign?.github && (
                  <li>
                    <a href={p.openDesign.github} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-gold hover:text-frost">
                      <SiGithub aria-hidden className="size-4" />
                      Source
                      <span className="sr-only">: {p.name} on GitHub</span>
                    </a>
                  </li>
                )}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section id="faq" aria-label="Troubleshooting and FAQ" className="pt-16">
        <SectionHeading index="02" kicker="Troubleshooting" title="FAQ" />
        {shownFaqs.length === 0 && <p className="text-dim">No questions match.</p>}
        <div className="max-w-4xl space-y-3">
          {shownFaqs.map((f) => (
            <details key={f.q} className="group hud hud-dim hud-sm" open={q !== ""}>
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 text-frost [&::-webkit-details-marker]:hidden">
                <span className="font-semibold">{f.q}</span>
                <ChevronDown aria-hidden className="size-4 shrink-0 text-cyan transition group-open:rotate-180" />
              </summary>
              <p className="px-5 pb-5">
                <Inline text={f.a} />
              </p>
            </details>
          ))}
        </div>
      </section>

      <section id="open-designs" aria-label="Open designs" className="pt-16">
        <SectionHeading index="03" kicker="Free models & source" title={`Open designs by ${site.founder}`}>
          <p>
            {site.founder} publishes most of these designs free, separately from {site.legalName}. Print or
            build your own; the shop sells finished units, kits and boards.
          </p>
        </SectionHeading>
        <ul className="grid gap-3 md:grid-cols-2">
          {products.flatMap((p) => [
            ...(p.openDesign?.makerworld
              ? [{ key: `${p.slug}-mw`, label: p.name, kind: "3D model on MakerWorld", href: p.openDesign.makerworld, icon: "mw" as const }]
              : []),
            ...(p.openDesign?.github
              ? [{ key: `${p.slug}-gh`, label: p.name, kind: "Design files on GitHub", href: p.openDesign.github, icon: "gh" as const }]
              : []),
          ])
            .concat(upcoming.map((u) => ({ key: u.name, label: u.name, kind: "In development, GitHub", href: u.href, icon: "gh" as const })))
            .map((d) => (
              <li key={d.key}>
                <a href={d.href} target="_blank" rel="noreferrer" className="hud hud-gold hud-sm hud-link flex items-center gap-4 px-5 py-4">
                  {d.icon === "gh" ? (
                    <SiGithub aria-hidden className="size-5 shrink-0 text-gold" />
                  ) : (
                    <Box aria-hidden className="size-5 shrink-0 text-gold" />
                  )}
                  <span className="flex-1">
                    <span className="block text-sm text-frost">{d.label}</span>
                    <span className="font-mono text-xs tracking-wider text-dim uppercase">{d.kind}</span>
                  </span>
                  <ExternalLink aria-hidden className="size-4 shrink-0 text-dim" />
                </a>
              </li>
            ))}
        </ul>
      </section>

      <section id="policies" aria-label="Policies" className="pt-16">
        <SectionHeading index="04" kicker="Shop policies" title="Policies">
          <p>The Etsy shop policy is the source of truth for orders placed there.</p>
        </SectionHeading>
        <dl className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {policies.map((p) => (
            <div key={p.title} className={`hud p-5 ${p.title === "Safety" ? "hud-signal" : "hud-dim"}`}>
              <dt className={`font-mono text-xs tracking-[0.18em] uppercase ${p.title === "Safety" ? "text-signal" : "text-cyan"}`}>
                {p.title}
              </dt>
              <dd className="mt-2 text-sm">{p.text}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section id="contact" aria-label="Contact" className="pt-16">
        <SectionHeading index="05" kicker="Contact" title="Get in touch" />
        <div className="grid gap-4 md:grid-cols-2">
          <a href={mailto} className="hud hud-link flex items-center gap-4 p-6">
            <Mail aria-hidden className="size-7 shrink-0 text-cyan" />
            <span>
              <span className="block font-mono text-xs tracking-[0.18em] text-dim uppercase">Email</span>
              <span className="text-frost">{site.email}</span>
            </span>
          </a>
          <a href={site.etsyShop} target="_blank" rel="noreferrer" className="hud hud-link flex items-center gap-4 p-6">
            <MessageSquare aria-hidden className="size-7 shrink-0 text-cyan" />
            <span>
              <span className="block font-mono text-xs tracking-[0.18em] text-dim uppercase">Order questions</span>
              <span className="flex items-center gap-2 text-frost">
                <SiEtsy aria-hidden className="size-4" />
                Message us through Etsy
              </span>
            </span>
          </a>
        </div>
      </section>
    </Layout>
  );
}
