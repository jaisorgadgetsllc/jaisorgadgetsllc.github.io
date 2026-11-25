import type { Product } from "./index";
import { site } from "../site";

const product: Product = {
  slug: "basic-mesh-case",
  name: "Basic Heltec Mesh Node Case",
  model: "T114 / T096",
  category: "mesh-cases",
  order: 2,
  summary:
    "Lower-cost case for the same Heltec T114 and T096 boards. Easier to build and service. Not waterproof. PLA or PETG, case only or fully built.",
  hook: {
    question: "When to pick this one?",
    answer:
      "When cost and easy access matter more than weather sealing. It is faster to build and simpler to open for service than the weather-resistant case.",
  },
  badges: ["Case only", "Fully built", "Open design"],
  prices: [
    { label: "Case only", price: 10 },
    { label: "Fully built", price: 95, note: "Ships US only" },
  ],
  pricesAsOf: "Nov 2026",
  etsyUrl: site.etsyShop,
  gallery: [],
  specs: [
    { label: "Boards", value: "Heltec `T114`, `T096`" },
    { label: "Material", value: "PLA or PETG (PETG costs a bit more)" },
    { label: "Rating", value: "Not waterproof" },
  ],
  body: [
    { kind: "heading", text: "Two ways to buy" },
    {
      kind: "list",
      items: [
        "*Case only.* Printed case parts. Bring your own board and electronics.",
        "*Fully built.* Assembled and tested. Fully built units with a battery ship within the US only.",
      ],
    },
    "The Etsy listing lists exactly what each option includes.",
    { kind: "heading", text: "Material" },
    "PLA or PETG. PETG handles heat and sunlight better and costs a bit more.",
    {
      kind: "warn",
      label: "Antenna first",
      text: "Never power the radio without its antenna connected. Transmitting without an antenna can damage the radio.",
    },
  ],
  guides: [],
  openDesign: {
    makerworld: "https://makerworld.com/en/models/3544083",
  },
};

export default product;
