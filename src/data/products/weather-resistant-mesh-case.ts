import type { Product } from "./index";
import { site } from "../site";
import card from "../../assets/products/weather-resistant-mesh-case/card.jpg";
import blueBlack from "../../assets/products/weather-resistant-mesh-case/blue-black-collage.jpg";
import redBlack from "../../assets/products/weather-resistant-mesh-case/red-black-collage.jpg";
import yellowBlack from "../../assets/products/weather-resistant-mesh-case/yellow-black-collage.jpg";
import greenWhite from "../../assets/products/weather-resistant-mesh-case/green-white-collage.jpg";
import whiteBlack from "../../assets/products/weather-resistant-mesh-case/white-black-collage.jpg";
import blueWhite from "../../assets/products/weather-resistant-mesh-case/blue-white-collage.jpg";
import blackWhite from "../../assets/products/weather-resistant-mesh-case/black-white-collage.jpg";
import powerButton from "../../assets/products/weather-resistant-mesh-case/power-button-upgrade-collage.jpg";

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
      "TPU 95A gaskets seal each layer of the PETG case, and a TPU cover closes the USB-C port. In testing, a node left in rain for a few hours took in no water. Fully built units add a 3000 mAh battery, an SMA antenna and a power button on the back of the belt clip.",
  },
  badges: ["Case only", "Fully built", "Open design"],
  prices: [
    { label: "Case only", price: 22 },
    { label: "Fully built", price: 115, note: "Ships US only" },
  ],
  pricesAsOf: "Nov 2026",
  etsyUrl: site.etsyShop,
  card: {
    src: card,
    alt: "Two handheld mesh node cases on a wooden table, one solid blue, one black with a blue belt clip.",
  },
  gallery: [
    { src: blueBlack, alt: "Blue and black case pair: front face and belt clip side." },
    { src: redBlack, alt: "Red and black case pair: front face and belt clip side." },
    { src: yellowBlack, alt: "Yellow and black case pair: front face and belt clip side." },
    { src: greenWhite, alt: "Green and white case pair: front face and belt clip side." },
    { src: whiteBlack, alt: "White and black case pair: front face and belt clip side." },
    { src: blueWhite, alt: "Blue and white case pair: front face and belt clip side." },
    { src: blackWhite, alt: "Black and white case pair: front face and belt clip side." },
    {
      src: powerButton,
      alt: "Collage of the power button fitted to the back of the belt clip on fully built units.",
    },
  ],
  specs: [
    { label: "Boards", value: "Heltec `T114`, `T096`; Heltec Tracker V2 fits the `T096` case" },
    { label: "Case", value: "PETG lid, body, base and belt clip" },
    { label: "Seals", value: "TPU 95A gaskets and USB-C cover" },
    { label: "Hardware", value: "M3 stainless: 4 × 20 mm, 2 × 25 mm" },
    { label: "Battery bay", value: "1S LiPo, 67 × 36 × 10 mm" },
    { label: "Antenna", value: "SMA, 915 MHz" },
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
        ["Power button", "Not included", "On the back of the belt clip"],
        ["Firmware", "Not applicable", "Meshtastic, MeshCore or blank"],
        ["Shipping", "US and international", "US only (lithium battery)"],
      ],
    },
    "Gaskets may come print-fused to the lid, body and base. That makes assembly easier.",
    { kind: "heading", text: "Options" },
    {
      kind: "list",
      items: [
        "*Color combo.* The primary color is the belt clip and face layers; the secondary color is the body.",
        "*TPU gasket color.* White, or translucent yellow, green, blue, red or orange.",
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
  guides: ["t114-case", "t096-case"],
  openDesign: {
    makerworld:
      "https://makerworld.com/en/models/3045205-weatherproof-case-heltec-t114-t096-tracker-v2",
  },
};

export default product;
