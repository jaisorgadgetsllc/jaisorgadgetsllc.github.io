# Website plan

Working plan for the Jaisor Gadgets LLC site. Check items off as they
land; add new ones at the end of the right phase.

## Phase 1: Foundation (done, Nov 25 2026)

- [x] Vite + React + TypeScript + Tailwind v4 multi-page scaffold,
      mirroring the personal site's architecture
- [x] Brand design system: locked palette, Orbitron / Share Tech Mono,
      chamfered HUD panels, buttons, section headings
- [x] Pages: Home, Products (catalog), product detail ×4, News, Support,
      About
- [x] Home: hero, news & announcements slot (3 latest), product lines,
      how it's made, open-designs band
- [x] Content as data: products, news, guides, FAQ, policies
- [x] Product photos resized; guide PDFs published under `/guides/`
- [x] SEO: per-page meta, Open Graph cards, JSON-LD, generated sitemap
      and robots
- [x] GitHub Pages workflow (lint + build + deploy)
- [x] Proprietary LICENSE, CLAUDE.md

## Phase 2: Go live

- [ ] Rename the repo to `jaisorgadgetsllc.github.io` (Settings > General)
- [ ] Confirm GitHub Pro on `jaisorgadgetsllc` (Pages on a private repo)
- [ ] Settings > Pages > Source: GitHub Actions
- [ ] Review all copy against the brief; confirm seed news dates
- [ ] Per-listing Etsy URLs for each product (`etsyUrl`)
- [ ] SNAP Power Controller: price, and whether it is listed
- [ ] First deploy; check link previews (og cards) on a real share

## Phase 3: Content depth

- [ ] Photos for the Basic Heltec Mesh Node Case (card + gallery)
- [ ] SNAP v1.2 4x60mA price, colors and kit contents
- [ ] Assembly guide for SNAP v1.2 and the Basic case (PDF), if made
- [ ] Wiring diagrams / pinouts as their own Support category
- [ ] Hackaday.io and MakerWorld profile links once public URLs exist
- [ ] Tindie store: `tindieUrl` field + second buy button when live
- [ ] Lightbox for gallery images (hi-res tier, like the personal site)

## Phase 4: Polish

- [ ] Self-host the two fonts (removes the only third-party request)
- [ ] Content-Security-Policy `<meta>` (verify against a prod build)
- [ ] Generate product page shells from `src/data/products/` at build
      time, so shell meta can't drift from the data
- [ ] Lighthouse pass: image `width`/`height`, `srcset` for cards
- [ ] Custom domain (if wanted): `SITE_ORIGIN` + `public/CNAME`
