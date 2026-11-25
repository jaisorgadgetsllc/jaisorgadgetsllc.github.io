# Jaisor Gadgets LLC — Website Context

Context for an AI agent building the company website. Last updated Nov 25, 2026.

Everything here is approved for public use unless it sits under **Do not publish**. Prices and stock change; the Etsy shop is the source of truth.

---

## 1. The company in one paragraph

Jaisor Gadgets LLC designs, builds and sells hobby electronics and 3D-printed products. The range covers custom circuit boards, device enclosures, mounts and accessories for LoRa mesh radio, solar, sensor and maker projects. Every product is designed in-house, then 3D printed, assembled and tested in small batches. Customers are hobbyists, makers and amateur radio operators. Sales happen online, mainly through the Etsy shop JaisorGadgets.

Short version:

> Hobby electronics, custom circuit boards and 3D-printed enclosures for makers. Designed, printed, soldered and tested in small batches in Southern California.

## 2. Key facts

| Item | Value |
|---|---|
| Legal name | Jaisor Gadgets LLC |
| Brand / shop name | JaisorGadgets (Jaisor Gadgets) |
| Tagline | **Designed, printed, soldered & tested with care** |
| Entity | California single-member LLC, formed Nov 2026 |
| Founder / owner | Jordan Marinov |
| Location | Orange County, Southern California, USA |
| Contact email | jaisorgadgets.llc@gmail.com |
| Main sales channel | Etsy: https://www.etsy.com/shop/JaisorGadgets |
| Other channels | Tindie store (being set up, Nov 2026) |
| Community | Hackaday.io (joined Nov 2026), MakerWorld (free models) |
| Production partner | JLCPCB (PCB fabrication) |

## 3. Origin story (facts to build the About page from)

- Jordan designs and builds gadgets across many hobbies: programming, electronics, 3D design and printing, amateur radio, lutherie and woodworking.
- He holds a US amateur radio license and runs Meshtastic nodes in Southern California.
- He publishes most of his designs free for others to build.
- People kept asking to buy finished versions. Jaisor Gadgets sells those finished units, kits and boards.

Suggested About copy (keep this voice):

> Why Jaisor Gadgets? I design and 3D print mesh radio and solar hardware, and publish most of my models free. People kept asking to buy finished units. This shop sells them: designed, printed, soldered and tested with care, in small batches in Southern California.

## 4. Products

Four product lines. All target LoRa mesh networks (Meshtastic, MeshCore) and small off-grid builds.

### 4.1 Weather-Resistant Heltec Mesh Node Case

Handheld LoRa mesh node case for Heltec T114 and T096 boards. The Heltec Tracker V2 is a drop-in for the T096, so the T096 case fits it too.

- **Case only:** lid, body and base in PETG; TPU 95A gaskets between layers; TPU 95A USB-C cover; PETG belt clip; M3 stainless bolts (4 × 20 mm, 2 × 25 mm). Gaskets may come print-fused to the parts.
- **Fully built:** Heltec T114 or T096, 3000 mAh 1S LiPo (67 × 36 × 10 mm), slim 915 MHz SMA antenna, GPS module (L76K) on T114 units, power button on the back of the belt clip. Ships pre-flashed with Meshtastic or MeshCore, or blank.
- **Options:** color combo (primary = clip and face layers, secondary = body); TPU gasket color (white or translucent yellow, green, blue, red, orange); optional Meshtastic or MeshCore front logo; optional custom front text up to 8 characters (extra cost).
- **Weather resistance:** weather resistant, not waterproof. No IP rating. In testing, a node left in rain for a few hours took in no water.
- **Shipping:** fully built units ship US only (lithium battery). Case only ships wider.
- **Buyer supplies (case only):** Heltec board; L76K GNSS for T114; 67 × 36 × 10 mm 1S LiPo; 915 MHz SMA antenna plus U.FL-to-SMA cable.
- **Free model:** https://makerworld.com/en/models/3045205-weatherproof-case-heltec-t114-t096-tracker-v2
- **Regular price (Etsy, Nov 2026):** case only $22; fully built $115.

### 4.2 Basic Heltec Mesh Node Case

Cheaper, non-waterproof case for the same Heltec T114 / T096 boards. Easier to build and service. Offered in PLA or PETG (PETG costs a bit more).

- Case only or fully built.
- **Free model:** https://makerworld.com/en/models/3544083
- **Regular price (Etsy, Nov 2026):** case only $10; fully built $95.

### 4.3 SNAP v1.2 — Solar Node Adaptable Platform

A solar enclosure platform for LoRa mesh nodes. Build it your way: the antenna goes top or bottom, SMA or N-type; free ports take a mount, magnet, hook or power switch.

- **2x200mA variant:** two 200 mA panels. Kit includes knurled inserts installed in the body. Colors: PETG beige body + brown base, PETG olive-green body + beige base, ASA gray. Regular price $24 (Etsy, Nov 2026).
- **4x60mA variant:** four 60 mA panels, one per face, for sun from every direction. Two accessory ports (top and bottom) — the tradeoff for the omni panel layout.
- **v1.2 features:** panels slide into a lip on the top and sides. Every plug accessory fits the whole SNAP platform.
- **Accessories:** SMA antenna mount, N-type antenna mount, 36 mm magnet cap, painter's pole thread, hook, on/off power switch, plain plug.
- **Free model:** https://makerworld.com/en/models/3360988

### 4.4 SNAP Power Controller (board)

What makes this special? The SNAP Power Controller combines four features on one compact board: an MPPT charge controller, a voltage and current sensor, an isolating diode on each panel input, and on/off switch ports for both the battery and the load. These features are often needed for remote solar mesh nodes and similar applications, but they're usually separate parts wired by hand. Here they plug in and work together.

- MPPT solar charging (CN3791) for one 1S Li-ion cell: 0.8 A, CC/CV to 4.2 V, trickle charge, auto recharge.
- Up to four 5 V panels, one Schottky diode per input. A shaded panel can't pull current from a sunny one.
- Power telemetry over I2C (INA219, address 0x40). Meshtastic and MeshCore detect it automatically.
- Selector switch: SOLAR (panel current and voltage) or BATT (battery current and cell voltage).
- Two switch ports: SW_BATT cuts the battery; SW_LOAD cuts only the device, so the battery keeps charging.
- Red LED charging, green full. Micro JST 1.25 connectors. 56.5 × 29 mm, four M3 holes.
- Tested in a live Meshtastic node (XIAO nRF52840 + Wio-SX1262): four SNAP panels deliver a steady 112–114 mA in full sun.
- Drop-in for SNAP v1.2. Positioned for any multi-panel micro solar build; mesh nodes are one example.
- Open design on GitHub (see Ask Jordan, item 3).
- Price: see Etsy.

### 4.5 Coming next

- **SNAP Power Mini** — a smaller sibling solar charge board. Repo: https://github.com/jaisor/SNAP_Power_Mini. Not yet for sale.

## 5. Policies (customer-facing)

- **Returns / exchanges:** 14 days from delivery. Buyer pays return shipping and any loss in value if the item isn't returned in original condition.
- **Dead on arrival (boards):** every board is tested before it ships. Report a DOA board within 14 days for a replacement or refund, return shipping included.
- **Cancellations:** within 12 hours of purchase.
- **Customs:** US orders include duties at checkout. Non-US buyers may owe fees on delivery.
- **Shipping:** ships from Southern California. Fully built units with batteries ship US only.
- **Safety disclaimer:** products are for hobbyists and experienced users. Not UL, CE or FCC certified. Lithium batteries can catch fire if misused. Liability is limited to the purchase price.
- **Radio safety:** never power a radio without its antenna connected.

## 6. Brand and visual identity

- **Look:** futuristic HUD / tech-panel style.
- **Colors:**
  - Red `#FF2B2B` (accent, shell red)
  - Cyan `#2EC4F1` (primary accent, glow)
  - Near-white `#F0F8FF` (text on dark)
  - Dark glass panels `rgba(8, 12, 22, 0.78)` on a near-black background
- **Fonts (Google Fonts, OFL):** Orbitron (~800 weight) for headings; Share Tech Mono for labels, specs and small print.
- **Motifs:** chamfered panel corners (top-right and bottom-left cut), cyan outlines with soft glow, red vertical accent bars, numbered mono labels like `// 01  SIGNAL`.
- **Font quirks:** Orbitron has no "·" glyph (use "/" or "+"). Its slashed zero can make "T096" read as "TØ96" — set model numbers in Share Tech Mono.
- **Logo files** (in `G:\My Drive\Claude\JaisorGadgets\Logos`): `Logos.svg`, `Logo-J.svg` (J mark), `Primary logo — horizontal@1x.png`, `Stacked logo@1x.png`, `Etsy banner — 3360×840@1x.png`.
- **Product photos** (same parent folder): HUD-tagged listing images for the mesh cases (`mesh-case-*.jpg`), SNAP (`snap-*.jpg`) and the SNAP Power Controller (`SNAP Power Controller\*.jpg`), plus connection and assembly guide PDFs.

## 7. Writing style for site copy

- Factual, not narrative. Say what it is and what it does.
- Short declarative sentences. Plain words. Few adjectives.
- Features and specs first.
- A short hook question is fine ("What makes this special?").
- Reference example: the SNAP Power Controller paragraph in section 4.4.

## 8. Suggested site structure

1. **Home** — tagline, one-line pitch, the four product lines, link to Etsy.
2. **Products** — one page per line (section 4), with "Buy on Etsy" buttons.
3. **Open designs** — links to free MakerWorld models and GitHub repos.
4. **Guides** — assembly and connection guide PDFs.
5. **About** — section 3.
6. **Policies** — section 5.
7. **Contact** — email, Etsy messages.

## 9. Do not publish

- **jaisor.net.** It is Jordan's personal site and not part of the LLC. Never link or mention it.
- EIN, CA entity number, bank, tax or payment details.
- Jordan's home address.
- Internal status (Etsy account setup, LLC paperwork, to-dos).

## 10. Ask Jordan before building

1. **Domain.** Northwest Registered Agent's package includes a free domain, email and website. Confirm which domain to use.
2. **Mailing address.** The LLC's registered office is a virtual office in Sacramento. Show it in the footer, or list email only?
3. **GitHub link for the SNAP Power Controller.** The Etsy listing points to `github.com/jaisor/SolarNodeChargeController`; the SNAP MakerWorld page points to `github.com/jaisor/SNAP_Power_Controller`. Which is current?
4. **Open-design links.** Free models and repos are published by Jordan personally, separate from the LLC that sells products. Confirm how to present them (e.g. "Open designs by Jordan Marinov").
5. **Commerce.** Link out to Etsy / Tindie only, or sell directly on the site?
6. **SNAP Power Controller price** and whether it's currently listed.
