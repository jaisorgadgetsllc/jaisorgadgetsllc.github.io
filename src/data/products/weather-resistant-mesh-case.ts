import type { Product } from "./index";
import { site } from "../site";
// Photos come from the owner's Drive `MakerWorld/HeltecCase` folder. Where a
// photo exists in a `Lum/` subfolder, that processed version is the one used.
import card from "../../assets/products/weather-resistant-mesh-case/card.jpg";
import rainRed from "../../assets/products/weather-resistant-mesh-case/rain-red.jpg";
import standingInRain from "../../assets/products/weather-resistant-mesh-case/standing-in-rain.jpg";
import fourColors from "../../assets/products/weather-resistant-mesh-case/four-colors.jpg";
import t114Front from "../../assets/products/weather-resistant-mesh-case/t114-front.jpg";
import t114BackClip from "../../assets/products/weather-resistant-mesh-case/t114-back-clip.jpg";
import t096Front from "../../assets/products/weather-resistant-mesh-case/t096-front.jpg";
import t096BackClip from "../../assets/products/weather-resistant-mesh-case/t096-back-clip.jpg";
import switchClipGreen from "../../assets/products/weather-resistant-mesh-case/switch-clip-green.jpg";
import switchClipRed from "../../assets/products/weather-resistant-mesh-case/switch-clip-red.jpg";
import switchClipBlue from "../../assets/products/weather-resistant-mesh-case/switch-clip-blue.jpg";
import t096Open from "../../assets/products/weather-resistant-mesh-case/t096-open.jpg";
import t114Gps from "../../assets/products/weather-resistant-mesh-case/t114-gps.jpg";
import coyoteTanParts from "../../assets/products/weather-resistant-mesh-case/coyote-tan-parts.jpg";

const product: Product = {
  slug: "weather-resistant-mesh-case",
  name: "Weather-Resistant Heltec Mesh Node Case",
  model: "T114 / T096",
  category: "mesh-cases",
  order: 1,
  summary:
    "Handheld LoRa mesh node case for Heltec T114 and T096 boards. PETG layers sealed with TPU 95A gaskets, a USB-C cover and a belt clip. Case only or fully built.",
  hook: {
    question: "What makes this special?",
    answer:
      "TPU 95A gaskets seal each layer of the PETG case, and a TPU cover closes the USB-C port. In testing, a node left in rain for a few hours took in no water. Fully built units add a 3000 mAh battery, an SMA antenna and a power switch on the back of the belt clip.",
  },
  badges: ["Case only", "Fully built", "Power switch", "Open design"],
  prices: [
    {
      label: "Case only",
      price: 22,
      etsyUrl: "https://www.etsy.com/listing/4588448520/weather-resistant-case-for-heltec-lora",
    },
    { label: "Fully built", price: 115, note: "Ships US only" },
  ],
  pricesAsOf: "Nov 2026",
  etsyUrl: site.etsyShop,
  card: {
    src: card,
    alt: "Red and black weather-resistant case with an SMA antenna, lying on a wet blue surface and covered in water drops.",
  },
  gallery: [
    {
      src: rainRed,
      alt: "Red and black case with blue buttons and USB-C cover, beaded with rain on a wet blue surface.",
    },
    {
      src: standingInRain,
      alt: "Red and black case standing upright on a wet surface outdoors, antenna up, a pool behind it.",
    },
    {
      src: fourColors,
      alt: "Four finished nodes on a wooden table: blue and white, white with a yellow belt clip, black, and green.",
    },
    { src: t114Front, alt: "Assembled yellow and white `T114` node, display on, antenna fitted." },
    { src: t114BackClip, alt: "Back of a white `T114` case in hand, showing the yellow belt clip and bolts." },
    { src: t096Front, alt: "Assembled green and black `T096` node with blue buttons, display on." },
    { src: t096BackClip, alt: "Back of a black `T096` case in hand, showing the green belt clip and bolts." },
    {
      src: switchClipGreen,
      alt: "Power-switch belt clip in green on a black case, with the push switch at the top of the clip.",
    },
    {
      src: switchClipRed,
      alt: "Red power-switch belt clip bolted to a black case, held in hand during assembly.",
    },
    {
      src: switchClipBlue,
      alt: "Red power-switch belt clip on a blue and white case, held in hand.",
    },
    {
      src: t096Open,
      alt: "Open `T096` build: board in the black body, battery seated in the base, blue TPU gaskets and lid beside them.",
    },
    {
      src: t114Gps,
      alt: "`T114` board fitted in a white body with the L76K GPS module tucked into its pocket at the top.",
    },
    {
      src: coyoteTanParts,
      alt: "Coyote tan case with green buttons on a black body, beside its matching belt clip.",
    },
  ],
  specs: [
    { label: "Boards", value: "Heltec `T114`, `T096`; Heltec Tracker V2 fits the `T096` case" },
    { label: "Case", value: "PETG lid, body, base and belt clip" },
    { label: "Seals", value: "TPU 95A gaskets and USB-C cover" },
    { label: "Hardware", value: "M3 stainless: 4 × 20 mm, 2 × 25 mm" },
    { label: "Battery bay", value: "1S LiPo, 67 × 36 × 10 mm" },
    { label: "Antenna", value: "SMA, 915 MHz" },
    {
      label: "Power switch",
      value: "Belt clip with latching push switch. Option on case-only orders, standard on fully built.",
    },
    { label: "Rating", value: "Weather resistant. No IP rating." },
  ],
  body: [
    { kind: "heading", text: "Case only or fully built" },
    {
      kind: "table",
      head: ["", "Case only", "Fully built"],
      rows: [
        [
          "Case parts",
          "Lid, body, base and belt clip (PETG); gaskets and USB-C cover (TPU 95A); M3 stainless bolts",
          "Same, assembled",
        ],
        ["Board", "You supply a Heltec `T114` or `T096`", "Heltec `T114` or `T096`"],
        ["GPS", "You supply an L76K module for the `T114`", "L76K installed on `T114` units"],
        ["Battery", "You supply a 1S LiPo, 67 × 36 × 10 mm", "3000 mAh 1S LiPo, installed"],
        [
          "Antenna",
          "You supply a 915 MHz SMA antenna and a U.FL-to-SMA cable",
          "Slim 915 MHz SMA antenna",
        ],
        [
          "Power switch",
          "Optional power-switch belt clip. Wiring it takes soldering",
          "Power-switch belt clip, installed",
        ],
        ["Firmware", "Not applicable", "Meshtastic, MeshCore or blank"],
        ["Shipping", "US and international", "US only (lithium battery)"],
      ],
    },
    "Gaskets may come print-fused to the lid, body and base. That makes assembly easier.",
    { kind: "heading", text: "New: power-switch belt clip" },
    "A belt clip with a latching on/off push switch. It bolts on in place of the standard clip with the same two 25 mm bolts. The switch sits in the battery's red (+) line; the black (−) leads join straight through. A TPU 95A gasket seals the leads where they pass into the case.",
    {
      kind: "list",
      items: [
        "*Fully built units* ship with it installed.",
        "*Case only:* choose it as an option. Fitting it takes two JST 1.25 mm leads, heat-shrink and a soldering iron. The switch-clip guide below has the steps.",
        "*Basic case:* the same clip fits, without the gasket.",
      ],
    },
    {
      kind: "note",
      label: "Charging",
      text: "Charge with the switch on. Off disconnects the battery, so it can't charge. While plugged in, the node runs from USB power alone. Switch it off for storage or shipping.",
    },
    { kind: "heading", text: "Options" },
    {
      kind: "list",
      items: [
        "*Color combo.* The primary color is the belt clip and face layers; the secondary color is the body.",
        "*TPU gasket color.* White, or translucent yellow, green, blue, red or orange.",
        "*Belt clip.* Standard, or with a power switch.",
        "*Front logo (optional).* Meshtastic or MeshCore.",
        "*Custom front text (optional, extra cost).* Up to 8 characters. Replaces the logo.",
      ],
    },
    { kind: "heading", text: "Weather resistance" },
    "Weather resistant, not waterproof. The case has no IP rating. In testing, a node left in rain for a few hours took in no water. Keep the USB-C cover closed outdoors.",
    {
      kind: "warn",
      label: "Antenna first",
      text: "Never power the radio without its antenna connected. Transmitting without an antenna can damage the radio.",
    },
  ],
  guides: ["t114-case", "t096-case", "switch-clip"],
  openDesign: {
    makerworld:
      "https://makerworld.com/en/models/3045205-weatherproof-case-heltec-t114-t096-tracker-v2",
  },
};

export default product;
