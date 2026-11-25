import { useState, type ReactNode } from "react";
import { Menu, X } from "lucide-react";
import { SiEtsy } from "react-icons/si";
import { mailto, nav, site, type NavId } from "../data/site";
import { Logo } from "./Logo";
import { linkProps } from "../lib/links";

/**
 * Page frame shared by every page: fixed backdrop, sticky header with
 * the active nav item, main content, footer. `current` lights up the
 * matching nav item.
 */
export function Layout({ current, children }: { current: NavId; children: ReactNode }) {
  return (
    <>
      <Backdrop />
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-50 focus:bg-panel focus:px-3 focus:py-2 focus:text-cyan"
      >
        Skip to content
      </a>
      <SiteHeader current={current} />
      <main id="main" className="relative mx-auto w-full max-w-7xl px-4 pb-24 sm:px-6 lg:px-8">
        {children}
      </main>
      <SiteFooter />
    </>
  );
}

/** Fixed, decorative: faint grid, two soft glows, viewport corner brackets. */
function Backdrop() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div
        className="absolute inset-0 opacity-100"
        style={{
          backgroundImage:
            "linear-gradient(rgb(46 196 241 / 0.05) 1px, transparent 1px), linear-gradient(90deg, rgb(46 196 241 / 0.05) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />
      <div className="absolute -top-48 -left-40 size-[36rem] rounded-full bg-cyan/10 blur-[120px]" />
      <div className="absolute -right-40 -bottom-56 size-[32rem] rounded-full bg-magenta/10 blur-[120px]" />
      <div className="absolute inset-3 hidden lg:block">
        <span className="absolute top-0 left-0 size-8 border-t border-l border-frost/20" />
        <span className="absolute top-0 right-0 size-8 border-t border-r border-frost/20" />
        <span className="absolute bottom-0 left-0 size-8 border-b border-l border-frost/20" />
        <span className="absolute right-0 bottom-0 size-8 border-r border-b border-frost/20" />
      </div>
    </div>
  );
}

function SiteHeader({ current }: { current: NavId }) {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 border-b border-line bg-ink/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href="/" aria-label={`${site.name} home`} className="shrink-0">
          <Logo />
        </a>

        <nav aria-label="Main" className="hidden h-full items-stretch gap-1 md:flex">
          {nav.map((item) => {
            const active = item.id === current;
            return (
              <a
                key={item.id}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={`relative flex items-center px-4 font-mono text-sm tracking-[0.15em] uppercase transition ${
                  active ? "text-cyan" : "text-haze hover:text-frost"
                }`}
              >
                {item.label}
                {active && (
                  <span
                    aria-hidden
                    className="absolute inset-x-3 bottom-0 h-0.5 bg-cyan shadow-[0_0_10px_var(--color-cyan)]"
                  />
                )}
              </a>
            );
          })}
          <a
            {...linkProps(site.etsyShop)}
            className="btn btn-sm btn-gold my-auto ml-3"
          >
            <SiEtsy aria-hidden className="size-3.5" />
            Shop
          </a>
        </nav>

        <button
          type="button"
          className="hud hud-sm grid size-10 place-items-center text-cyan md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X aria-hidden className="size-5" /> : <Menu aria-hidden className="size-5" />}
          <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
        </button>
      </div>

      {open && (
        <nav id="mobile-nav" aria-label="Main" className="border-t border-line bg-ink px-4 py-3 md:hidden">
          <ul className="space-y-1">
            {nav.map((item) => (
              <li key={item.id}>
                <a
                  href={item.href}
                  aria-current={item.id === current ? "page" : undefined}
                  className={`block border-l-2 px-3 py-2 font-mono tracking-[0.15em] uppercase ${
                    item.id === current ? "border-cyan text-cyan" : "border-transparent text-haze"
                  }`}
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li className="pt-2">
              <a {...linkProps(site.etsyShop)} className="btn btn-gold w-full">
                <SiEtsy aria-hidden className="size-4" />
                Shop on Etsy
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}

/** Build-time year is fine: the site is rebuilt on every deploy. */
const YEAR = new Date().getFullYear();

function SiteFooter() {
  return (
    <footer className="relative border-t border-line bg-ink/90">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-[1.4fr_1fr_1fr_1fr] lg:px-8">
        <div className="space-y-4">
          <Logo />
          <p className="max-w-xs font-mono text-xs tracking-[0.18em] text-gold uppercase">
            {site.tagline}
          </p>
          <p className="max-w-sm text-sm">{site.pitch}</p>
        </div>
        <FooterCol
          title="Shop"
          links={[
            { label: "All products", href: "/products/" },
            { label: "Etsy shop", href: site.etsyShop },
            { label: "News", href: "/news/" },
          ]}
        />
        <FooterCol
          title="Support"
          links={[
            { label: "Guides & downloads", href: "/support/#guides" },
            { label: "FAQ", href: "/support/#faq" },
            { label: "Policies", href: "/support/#policies" },
            { label: "Open designs", href: "/support/#open-designs" },
          ]}
        />
        <FooterCol
          title="Company"
          links={[
            { label: "About", href: "/about/" },
            { label: site.email, href: mailto },
          ]}
        />
      </div>
      <div className="border-t border-line">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-5 font-mono text-[0.7rem] tracking-wider text-dim sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
          <p>
            © {YEAR} {site.legalName}. All rights reserved. {site.location}.
          </p>
          <p>For hobbyists and experienced users. Not UL, CE or FCC certified.</p>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, links }: { title: string; links: { label: string; href: string }[] }) {
  return (
    <div>
      <h2 className="kicker mb-3">{title}</h2>
      <ul className="space-y-2 text-sm">
        {links.map((l) => (
          <li key={l.href}>
            <a {...linkProps(l.href)} className="break-all text-haze transition hover:text-cyan">
              {l.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

/**
 * Section heading: numbered mono kicker (`// 01  PRODUCT LINES`), a red
 * accent bar and an Orbitron title. `id` goes on the wrapping element via
 * the caller's <section>; this renders only the heading block.
 */
export function SectionHeading({
  index,
  kicker,
  title,
  children,
  action,
}: {
  index: string;
  kicker: string;
  title: string;
  children?: ReactNode;
  action?: ReactNode;
}) {
  return (
    <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
      <div className="flex gap-4">
        <span aria-hidden className="w-1 shrink-0 bg-signal shadow-[0_0_8px_var(--color-signal)]" />
        <div>
          <p className="kicker">{`// ${index}  ${kicker}`}</p>
          <h2 className="mt-2 text-2xl font-extrabold uppercase sm:text-3xl">{title}</h2>
          {children && <div className="mt-2 max-w-2xl">{children}</div>}
        </div>
      </div>
      {action}
    </div>
  );
}
