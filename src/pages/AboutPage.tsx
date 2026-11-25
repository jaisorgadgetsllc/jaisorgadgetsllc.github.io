import { SiEtsy } from "react-icons/si";
import { Layout, SectionHeading } from "../components/Layout";
import { mailto, site } from "../data/site";

const facts: { label: string; value: string; href?: string }[] = [
  { label: "Company", value: `${site.legalName}, a California LLC` },
  { label: "Founded", value: "November 2026" },
  { label: "Founder", value: site.founder },
  { label: "Based in", value: site.location },
  { label: "Shop", value: "Etsy: JaisorGadgets", href: site.etsyShop },
  { label: "PCB fabrication", value: "JLCPCB" },
  { label: "Contact", value: site.email, href: mailto },
];

export function AboutPage() {
  return (
    <Layout current="about">
      <section aria-label="About" className="pt-10 lg:pt-14">
        <header className="mb-10">
          <p className="kicker">{"// About"}</p>
          <h1 className="mt-2 text-3xl font-extrabold uppercase sm:text-4xl">Why Jaisor Gadgets?</h1>
        </header>

        <div className="grid gap-10 lg:grid-cols-[1.3fr_1fr]">
          <div className="space-y-5 text-base leading-relaxed sm:text-lg">
            <p className="border-l-2 border-gold pl-5 text-frost">
              I design and 3D print mesh radio and solar hardware, and publish most of my models free.
              People kept asking to buy finished units. This shop sells them: designed, printed, soldered
              and tested with care, in small batches in Southern California.
            </p>
            <p>
              {site.name} designs, builds and sells hobby electronics and 3D-printed products: custom
              circuit boards, device enclosures, mounts and accessories for LoRa mesh radio, solar, sensor
              and maker projects.
            </p>
            <p>
              Every product is designed in-house, then 3D printed, assembled and tested in small batches.
              Customers are hobbyists, makers and amateur radio operators.
            </p>
            <p>
              {site.founder} builds gadgets across many hobbies: programming, electronics, 3D design and
              printing, amateur radio, lutherie and woodworking. He holds a US amateur radio license and
              runs Meshtastic nodes in Southern California.
            </p>
            <div className="flex flex-wrap gap-3 pt-3">
              <a href={site.etsyShop} target="_blank" rel="noreferrer" className="btn btn-gold">
                <SiEtsy aria-hidden className="size-4" />
                Visit the Etsy shop
              </a>
              <a href="/support/#open-designs" className="btn btn-outline hud hud-sm hud-link">
                Open designs
              </a>
            </div>
          </div>

          <aside aria-labelledby="facts-h" className="hud hud-lg h-fit p-6">
            <h2 id="facts-h" className="kicker">
              {"// Key facts"}
            </h2>
            <dl className="mt-4 divide-y divide-line">
              {facts.map((f) => (
                <div key={f.label} className="grid grid-cols-[8rem_1fr] gap-3 py-3 text-sm">
                  <dt className="font-mono text-xs tracking-wider text-dim uppercase">{f.label}</dt>
                  <dd className="break-words text-frost">
                    {f.href ? (
                      <a
                        href={f.href}
                        {...(f.href.startsWith("http") ? { target: "_blank", rel: "noreferrer" } : {})}
                        className="prose-link"
                      >
                        {f.value}
                      </a>
                    ) : (
                      f.value
                    )}
                  </dd>
                </div>
              ))}
            </dl>
          </aside>
        </div>
      </section>

      <section aria-label="What we make" className="pt-20">
        <SectionHeading index="01" kicker="Focus" title="What we make" />
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            ["Mesh node cases", "Handheld enclosures for Heltec LoRa boards, case only or fully built."],
            ["Solar enclosures", "SNAP, a modular solar platform for off-grid mesh nodes."],
            ["Circuit boards", "Purpose-built boards such as the SNAP Power Controller."],
            ["Open designs", "Free models and design files, published by Jordan Marinov."],
          ].map(([title, text]) => (
            <li key={title} className="hud hud-dim p-5">
              <h3 className="text-sm font-bold uppercase">{title}</h3>
              <p className="mt-2 text-sm">{text}</p>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}
