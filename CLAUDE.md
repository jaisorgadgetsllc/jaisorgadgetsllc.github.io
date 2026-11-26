# CLAUDE.md

Guidance for Claude Code when working in this repository.

## What this project is

The company website for **Jaisor Gadgets LLC**: a product showcase,
support / manuals hub and news feed for a small-batch maker business
(mesh radio cases, solar enclosures, circuit boards). Customers buy on
Etsy; the site links out and never takes orders.

- **Brief:** [Jaisor-Gadgets-LLC-Website-Context.md](Jaisor-Gadgets-LLC-Website-Context.md)
  is the source for every company fact, product spec, policy and brand
  rule. Read it before writing copy. Its **section 9, "Do not publish"**,
  is binding: never put `jaisor.net`, EIN / entity numbers, bank or
  payment details, a home address or internal status (account setup,
  LLC paperwork, to-dos) into the site.
- **Design reference:** [wireframes/WebWire.jpg](wireframes/WebWire.jpg)
  (four screens: Home, Products, New, Support). Logo PNGs in
  [assets/](assets/). Neither folder ships; only `public/` and what `src/`
  imports do.
- **Architecture** mirrors the owner's personal site (`jaisor/jaisor.github.io`):
  static multi-page Vite + React + Tailwind v4, content as typed data, no
  router, no backend. The look is different on purpose (HUD/tech-panel, not
  the personal site's amber cinema).
- **The repo is private and proprietary** ([LICENSE](LICENSE)). The built
  site is public. Anything committed here can end up in `dist/` if it's
  imported or under `public/`.

## Stack

React 19 · TypeScript (strict) · Vite 7 · Tailwind CSS v4 · oxlint ·
`lucide-react` (UI icons) + `react-icons/si` (brand marks: Etsy, GitHub).

## Commands

```sh
npm install      # install dependencies
npm run dev      # dev server on :5173
npm run build    # tsc -b && vite build  -> dist/
npm run lint     # oxlint
npm run preview  # serve the production build on :4173
```

`node`/`npm` are on PATH. **Never claim a build or lint passed without
running it.** CI runs lint then build.

**Antivirus gotcha:** this machine runs TotalAV, which briefly holds
freshly written files. With dependency sourcemaps on, `npm run dev`
crashed with `UNKNOWN: unknown error, open ...node_modules\.vite\deps_temp_*\react.js`
(errno -4094): Vite re-opens each pre-bundled file right after esbuild writes it.
`optimizeDeps.esbuildOptions.sourcemap: false` in `vite.config.ts` removes
that re-open; don't remove it unless the project folder is excluded from
the antivirus. If a similar `UNKNOWN`/`EBUSY` write error appears
elsewhere, suspect the antivirus first and add a TotalAV exclusion for the
repo folder.

Visual check without a browser tool: headless Chrome
(`chrome.exe --headless=new --screenshot=... --window-size=1440,2600 URL`)
against `npm run preview`. Headless Chrome clamps windows to ≥ 500px wide,
so for a true phone viewport load the page in a 390px `<iframe>` from a
throwaway HTML file in `dist/`.

## Layout

```
index.html, products/index.html, products/<slug>/index.html,
news/index.html, support/index.html, about/index.html
                      # page shells: per-page <head> + <div id="root" data-page data-slug>
vite.config.ts        # SITE_ORIGIN, page discovery, siteShell() plugin (see below)
src/main.tsx          # the single entry; switches on data-page / data-slug
src/index.css         # brand tokens (@theme), HUD panel + button classes
src/lib/links.ts      # linkProps(): external links get target/rel
src/pages/            # one component per page type
  HomePage            #   hero, news slot (3 latest), product lines, process, open-designs band
  ProductsPage        #   category filter + grid + "Coming next"
  ProductPage         #   gallery, buy panel, body blocks, specs / guides / open-design sidebar
  NewsPage            #   timeline; each item is an anchor /news/#<slug>
  SupportPage         #   search filter, tiles, per-product resources, FAQ, open designs, policies, contact
  AboutPage
src/components/
  Layout.tsx          # Backdrop, sticky header + mobile menu, footer, SectionHeading
  Logo.tsx            # inline SVG J-hex mark + wordmark
  ProductCard.tsx     # catalog tile + ProductArt (photo or "photo pending" line art)
  NewsCard.tsx        # home-page news teaser
  Blocks.tsx          # renders Block[] (paragraph, heading, list, note/warn, steps, table)
  Inline.tsx          # inline markup: `code`, [label](href), *bold*, _italic_
src/data/
  site.ts             # company facts, Etsy URL, email, nav
  blocks.ts           # Block type
  products/index.ts   # Product type, categories, helpers, `upcoming` list
  products/<slug>.ts  # one Product per file, auto-discovered (`status: "coming-soon"` = not for sale)
  news/index.ts       # NewsItem type + helpers
  news/<slug>.ts      # one item per file, auto-discovered
  guides.ts           # guide PDFs (files in public/guides/), incl. the switch belt clip guide
  support.ts          # FAQ + policies
src/assets/products/<slug>/  # card.jpg (4:3) + gallery photos, imported
src/assets/home/hero.jpg
public/
  guides/*.pdf        # stable URLs (printed QR codes / Etsy messages may point here)
  og/<slug>.jpg, og/home.jpg   # 1200×630 social cards
  favicon.svg / favicon.ico / apple-touch-icon.png
```

## How pages are built

- **Every page is a real HTML file.** Vite's multi-page build takes
  `index.html` plus every `index.html` under `PAGE_DIRS`
  (`products`, `news`, `support`, `about`) in `vite.config.ts`. A new
  top-level page = new folder with an `index.html` + add the folder to
  `PAGE_DIRS` + a `case` in `src/main.tsx` + a nav entry in `data/site.ts`.
  Product pages under `products/` are found automatically.
- **`siteShell()` plugin** (in `vite.config.ts`):
  - replaces `<!-- shell:head -->` in each shell with the shared head
    (charset, viewport, favicons, Google Fonts, og:site_name, twitter:card).
    Change those once, there.
  - replaces `%ORIGIN%` with `SITE_ORIGIN`. Shells write every absolute
    URL as `%ORIGIN%/...`; never hard-code the domain.
  - emits `sitemap.xml` and `robots.txt` from the discovered entries, so
    they cannot drift. Don't add them to `public/`.
  - strips Vite's `crossorigin` from its own module/style tags (keeps the
    one on the fonts.gstatic preconnect, which needs it).
- Per-page meta (title, description, canonical, `og:*`, `twitter:*`,
  JSON-LD) stays hand-written in each shell. Home carries `Organization`
  JSON-LD; product pages carry `Product` (no `offers`: prices live on Etsy
  and would go stale).

## Content is data, not markup

**Editing content means editing `src/data/`, not components.**

- **Add a product** (all four steps, or the page 404s / renders "not found"):
  1. `src/data/products/<slug>.ts` default-exporting a `Product` (copy a
     sibling). Photos go in `src/assets/products/<slug>/` and are
     *imported*; a string path skips fingerprinting and 404s. Include a
     4:3 `card`, or omit it to get the placeholder art.
  2. `products/<slug>/index.html`: copy a sibling shell, update title,
     description (= the product's `summary`), canonical, `og:*`,
     `twitter:*`, the `Product` JSON-LD and `data-slug`.
  3. `public/og/<slug>.jpg`, 1200×630.
  4. Guides: PDF in `public/guides/`, entry in `data/guides.ts`, id in the
     product's `guides`.
  The summary is duplicated between the data file and the shell; nothing
  fails the build if they disagree, so update both.
- **Add news:** one file in `src/data/news/` default-exporting a
  `NewsItem`. No shell needed (news items are anchors on `/news/`). The
  home page shows the newest `NEWS_ON_HOME` (3). `date` is `YYYY-MM-DD`,
  or `YYYY-MM` when only the month is known; don't invent a day.
- **Coming-soon products**, two kinds:
  - with photos and specs: a normal product (all four steps above) with
    `status: "coming-soon"` and `prices: []`. The page shows "Not for sale
    yet" instead of prices and Buy; the catalog lists it under "Coming
    next" (not in the grid or category counts); the home page leaves it
    out. Announce it with a `kind: "upcoming"` news item. Example:
    `snap-4x60ma`. When it goes on sale, drop `status`, add prices.
  - idea only (no page): `upcoming` in `data/products/index.ts`.
- **FAQ / policies:** `data/support.ts`. Policies must match the Etsy
  shop policy; Etsy is the source of truth.
- **Prices** are "regular Etsy price as of `pricesAsOf`" and are shown with
  that caveat. `price: null` renders "See Etsy". Don't show stock levels.
- **Etsy links:** `etsyUrl` per product (the shop URL until a listing URL
  is known). When options are separate listings (e.g. case only vs fully
  built), set `etsyUrl` on that `PriceLine` instead: the product page then
  shows one Buy button per option, and the card's Buy goes to the
  cheapest option's listing. Use the bare `etsy.com/listing/<id>/<slug>`
  URL, no tracking params.
- **Open designs** (MakerWorld models, GitHub repos) are published by
  Jordan Marinov personally, not the LLC. Always present them as
  "Open designs by Jordan Marinov" / "Published free by Jordan Marinov".
  The SNAP Power Controller repo is `github.com/jaisor/SNAP_Power_Controller`
  (`SolarNodeChargeController` is the old name and redirects).
- **Text markup** inside any data string: `` `code` ``, `[label](href)`,
  `*bold*`, `_italic_`, nothing else. Tokenized by `Inline.tsx` into React
  elements; hrefs other than `http(s):`, `mailto:`, `/`, `#` render as
  plain text.
- **Photos:** resize before committing (long edge ~1600px, JPEG q80,
  aim ≤ 400 KB). Source photos live outside the repo (the owner's Google
  Drive `Claude/JaisorGadgets` folder); prefer the `snap-power-controller-*`
  files over the older `scm-*` duplicates. Every image needs real `alt`
  text describing the subject.
- **`Lum/` folders hold the better photos.** In the owner's Drive, a
  `Lum/` subfolder holds processed (higher-quality) versions of the photos
  beside it. When the same shot exists in both, use the `Lum/` copy. The
  weather-resistant case photos and guide PDFs come from Drive
  `Claude/MakerWorld/HeltecCase` (`T096/Lum/`, `T114/Lum/` first); the
  Basic case's from `Claude/MakerWorld/HeltecCase-Basic` (no `Lum/`; color
  pairs are built from `Palette/`). Skip
  `*_tagged*`, `Annotated/` and `*Build-Steps*` images and the promo collages there: their small print
  carries the `JAISOR.NET` footer.
- Strip EXIF when exporting photos (phone shots carry GPS location).

## Writing style (site copy)

From the brief, section 7. Factual, not narrative. Short declarative
sentences, plain words, few adjectives. Features and specs first. A short
hook question is fine ("What makes this special?"). The reference
paragraph is the SNAP Power Controller hook in
`data/products/snap-power-controller.ts`.

- Don't invent facts, specs, dates or claims. If the brief doesn't say it,
  leave it out or ask. "Weather resistant, not waterproof" is the exact
  claim for the mesh case; never say waterproof or quote an IP rating.
- American English. Units with a space (`56.5 × 29 mm`, `0.8 A`), × for
  dimensions.
- Put model numbers and pin names in backticks: Orbitron's slashed zero
  makes "T096" read as "TØ96". Orbitron also has no "·" glyph; use "/" or
  "+" in anything set in the display font.

## Design system

Futuristic HUD / tech-panel, from the brief (section 6) and the wireframe.

- **Palette is locked.** `@theme` in `src/index.css` resets Tailwind's
  colors (`--color-*: initial`), so only brand tokens exist:
  - neutrals `ink` (page), `panel`, `raised`, `line`, `frost` (headings),
    `haze` (body), `dim` (meta)
  - `cyan` (#2EC4F1): primary accent, outlines, links, active nav
  - `magenta` (logo #C45A9E): news / "what's new"
  - `gold` (logo #DDB256): primary CTA (Shop), open-design badges, hooks
  - `signal` (#FF2B2B): heading accent bars, Buy buttons, warnings/safety
  - `logo` (#56C2CF): the logo artwork only
  Use opacity modifiers (`text-cyan/70`) for shades. Arbitrary hex values
  in class names are a smell; add a token instead.
- **Fonts:** `font-display` Orbitron (headings, uppercase, 700–800),
  `font-mono` Share Tech Mono (labels, nav, buttons, specs, prices,
  model numbers), `font-sans` system UI stack for paragraphs (readability).
- **Panels:** `.hud` = chamfered (top-right + bottom-left) 1px-outlined
  panel. Modifiers: `.hud-sm` / `.hud-lg` (cut size), `.hud-magenta` /
  `.hud-gold` / `.hud-signal` / `.hud-dim` (outline color), `.hud-glow`,
  `.hud-link` (hover glow). The fill is drawn by `::after` and must stay
  opaque, or the outline color bleeds through. Don't add `overflow-hidden`
  or another `::before/::after` to a `.hud` element.
- **Buttons:** `.btn` + `.btn-gold` (shop / primary), `.btn-signal` (Buy),
  or `.btn-outline hud hud-sm hud-link` (secondary). `.btn-sm` for small.
- **Section headings:** `<SectionHeading index="01" kicker="..." title="...">`
  gives the `// 01  KICKER` mono label, red accent bar and Orbitron title.
  Page-level `<h1>` headers use a `.kicker` line above the title.
- Component classes in `index.css` are the exception; everything else is
  Tailwind utilities inline in JSX. Add a component class only when a
  combination repeats verbatim in three or more places.
- **Responsive:** mobile-first; header nav collapses to a menu below `md`;
  catalog filter is a horizontal pill row below `lg`. Wide tables scroll
  inside their frame.
- **Accessibility:** decorative layers/icons get `aria-hidden`, icon-only
  controls get an `sr-only` label, `aria-current="page"` on the active nav
  item, sections carry `aria-label`. Keep the skip link.

## Security (public static site)

- **No secrets, private addresses, phone numbers or internal docs in
  `public/` or anything `src/` imports.** The repo is private, the output
  is not. Before adding a PDF or image to `public/`, read it and check
  it against the brief's "Do not publish" list.
  The source guide PDFs in Drive have a `JAISORGADGETS :: JAISOR.NET`
  footer; the published copies must say only `JAISORGADGETS`. There are no
  editable sources, so remove the text with a true redaction (PyMuPDF
  `add_redact_annot` + `apply_redactions`, text removed, images kept),
  not a white box, and confirm with a text search that it is gone.
- No `dangerouslySetInnerHTML`, `eval`, `new Function` or HTML-from-string.
  JSON-LD stays hand-written JSON in the shells.
- External links: `target="_blank" rel="noreferrer"`. Use `linkProps()`
  from `src/lib/links.ts`, or `Inline`, which apply it. Same-origin
  links are plain navigations (guide PDFs may open in a new tab).
- No third-party scripts, analytics, trackers, embeds or CDN libraries.
  The only external request is Google Fonts.
- No forms that post anywhere. Contact is `mailto:` + Etsy messages. The
  support search box is a client-side filter and sends nothing. Commerce
  stays a link-out to Etsy (owner decision, Nov 2026); on-site checkout
  would break this model, so raise it rather than adding it.
- Few dependencies. Justify any new package.
- CI permissions stay `contents: read`, `pages: write`, `id-token: write`.

## Deployment

- `.github/workflows/deploy.yml`: push to `main` → lint → build → GitHub
  Pages. Don't push or merge to `main` unless asked; it deploys.
- **Origin:** `https://jaisorgadgetsllc.github.io`, served at the root.
  This needs the repo renamed to `jaisorgadgetsllc.github.io` (owner
  decision). Until then Pages would serve it under
  `/jaisorgadgets.github.io/` and root-relative links break.
- Pages from a **private** repo on a personal account needs GitHub Pro.
- Moving to a custom domain later: change `SITE_ORIGIN` in
  `vite.config.ts`, add `public/CNAME`, and set the domain in the repo's
  Pages settings. Everything else follows.

## Open questions (from the brief, section 10)

Resolved Nov 2026: domain (repo rename, above); commerce (link out to
Etsy only); address (email only, no mailing address); open designs
(attributed to Jordan Marinov); SNAP Power Controller repo
(`SNAP_Power_Controller`). Still open: SNAP Power Controller price and
whether it is listed (the site says "Price on Etsy"); the remaining
per-listing Etsy URLs (only weather-resistant case-only is set); Tindie (add a `tindieUrl` field when the store is live); exact dates for the seed news items. See [PLAN.md](PLAN.md).

## Keeping this file current

Update this file in the same change that makes it stale: new dependency
or script → Stack/Commands; new page, component or data file → Layout;
new token or styling rule → Design system; anything touching external
requests, links or CI → Security; deploy changes → Deployment. Delete
guidance that no longer applies.
