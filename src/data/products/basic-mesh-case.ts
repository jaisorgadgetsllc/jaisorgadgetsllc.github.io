import type { Product } from "./index";
import { site } from "../site";
// Photos come from the owner's Drive `MakerWorld/HeltecCase-Basic` folder
// (no `Lum/` subfolder there). Color pairs are front + back collages built
// from its `Palette/` shots.
import card from "../../assets/products/basic-mesh-case/card.jpg";
import front from "../../assets/products/basic-mesh-case/front.jpg";
import backClip from "../../assets/products/basic-mesh-case/back-clip.jpg";
import inHandBack from "../../assets/products/basic-mesh-case/in-hand-back.jpg";
import lineupFront from "../../assets/products/basic-mesh-case/lineup-front.jpg";
import lineupBack from "../../assets/products/basic-mesh-case/lineup-back.jpg";
import goldBlack from "../../assets/products/basic-mesh-case/gold-black-pair.jpg";
import redBlack from "../../assets/products/basic-mesh-case/red-black-pair.jpg";
import blueBlack from "../../assets/products/basic-mesh-case/blue-black-pair.jpg";
import limeWhite from "../../assets/products/basic-mesh-case/lime-white-pair.jpg";
import whiteBlack from "../../assets/products/basic-mesh-case/white-black-pair.jpg";
import blackWhite from "../../assets/products/basic-mesh-case/black-white-pair.jpg";
import t114Parts from "../../assets/products/basic-mesh-case/t114-parts.jpg";
import t096Parts from "../../assets/products/basic-mesh-case/t096-parts.jpg";
import switchClipParts from "../../assets/products/basic-mesh-case/switch-clip-parts.jpg";
import switchClipClosed from "../../assets/products/basic-mesh-case/switch-clip-closed.jpg";

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
      "When cost and easy access matter more than weather sealing. It uses the same layers, bolts and belt clip as the weather-resistant case, without the gaskets, so it is faster to build and simpler to open for service.",
  },
  badges: ["Case only", "Fully built", "Power switch", "Open design"],
  prices: [
    { label: "Case only", price: 10 },
    { label: "Fully built", price: 95, note: "Ships US only" },
  ],
  pricesAsOf: "Nov 2026",
  etsyUrl: site.etsyShop,
  card: {
    src: card,
    alt: "Gold and black Basic case lying on its side on a wooden table, SMA antenna pointing right.",
  },
  gallery: [
    { src: front, alt: "Gold and black Basic case standing on a wooden table, antenna up, display window facing forward." },
    { src: backClip, alt: "Back of a black Basic case with a gold belt clip and six bolts, antenna up." },
    { src: inHandBack, alt: "Gold and black Basic case held in an open hand, belt clip side up." },
    { src: lineupFront, alt: "Seven Basic cases in a row on a wooden table, front faces in blue, lime, white, black, red, gold and blue." },
    { src: lineupBack, alt: "The same row of Basic cases turned around, showing belt clips in different colors." },
    { src: goldBlack, alt: "Gold and black case pair: front face and belt clip side." },
    { src: redBlack, alt: "Red and black case pair: front face and belt clip side." },
    { src: blueBlack, alt: "Blue and black case pair: front face and belt clip side." },
    { src: limeWhite, alt: "Lime and white case pair: front face and belt clip side." },
    { src: whiteBlack, alt: "White and black case pair: front face and belt clip side." },
    { src: blackWhite, alt: "Black and white case pair: front face and belt clip side." },
    {
      src: t114Parts,
      alt: "Labeled parts for a `T114` build: lid, body, base, belt clip, bolts, battery, GPS, board, antenna, cable and tools.",
    },
    {
      src: t096Parts,
      alt: "Labeled parts for a `T096` build: gold lid and belt clip, black body and base, bolts, battery, board, antenna, cable and tools.",
    },
    {
      src: switchClipParts,
      alt: "Labeled parts for the power-switch belt clip: lime clip with switch pocket, latching push switch and two JST 1.25 mm leads.",
    },
    {
      src: switchClipClosed,
      alt: "Lime power-switch belt clip bolted to a white Basic case, power switch at the top of the clip.",
    },
  ],
  specs: [
    { label: "Boards", value: "Heltec `T114`, `T096`" },
    { label: "Material", value: "PLA or PETG (PETG costs a bit more)" },
    { label: "Case", value: "Lid, body, base and belt clip" },
    { label: "Hardware", value: "M3: 4 × 20 mm, 2 × 25 mm" },
    { label: "Battery bay", value: "1S LiPo, 67 × 36 × 10 mm" },
    { label: "Antenna", value: "SMA, 915 MHz" },
    { label: "Power switch", value: "Optional belt clip with latching push switch" },
    { label: "Rating", value: "Not waterproof. No gaskets." },
  ],
  body: [
    { kind: "heading", text: "Two ways to buy" },
    {
      kind: "list",
      items: [
        "*Case only.* Lid, body, base and belt clip, printed, with six M3 bolts (4 × 20 mm, 2 × 25 mm). Bring your own board and electronics.",
        "*Fully built.* Assembled and tested. Fully built units with a battery ship within the US only.",
      ],
    },
    "The Etsy listing lists exactly what each option includes.",
    { kind: "heading", text: "What you need for a case-only build" },
    {
      kind: "table",
      head: ["Part", "With a T114", "With a T096"],
      rows: [
        ["Board", "Heltec `T114`", "Heltec `T096`"],
        ["GPS", "L76K GNSS module", "Built in, no module needed"],
        ["Battery", "1S LiPo, 67 × 36 × 10 mm, 3000 mAh", "1S LiPo, 67 × 36 × 10 mm, 3000 mAh"],
        ["Antenna", "915 MHz SMA antenna + U.FL-to-SMA cable", "915 MHz SMA antenna + U.FL-to-SMA cable"],
        ["Tools", "2.5 mm hex driver, 8 mm wrench", "2.5 mm hex driver, 8 mm wrench"],
      ],
    },
    "The battery must be this size to fit. Assembly takes four steps; the guides below have labeled photos for each.",
    { kind: "heading", text: "Power-switch belt clip" },
    "The power-switch belt clip from the weather-resistant case fits the Basic case too. It is a belt clip with a latching on/off push switch, held by the same two 25 mm bolts. The switch sits in the battery's red (+) line; the black (−) leads join straight through. Fitting it takes two JST 1.25 mm leads, heat-shrink and a soldering iron. The switch-clip guide below has the steps.",
    {
      kind: "note",
      label: "Charging",
      text: "Charge with the switch on. Off disconnects the battery, so it can't charge. While plugged in, the node runs from USB power alone. Switch it off for storage or shipping.",
    },
    { kind: "heading", text: "Material" },
    "PLA or PETG. PETG handles heat and sunlight better and costs a bit more.",
    { kind: "heading", text: "Keep it dry" },
    "The Basic case has no gaskets and is not sealed. For rain and outdoor use, choose the [Weather-Resistant Heltec Mesh Node Case](/products/weather-resistant-mesh-case/).",
    {
      kind: "warn",
      label: "Antenna first",
      text: "Never power the radio without its antenna connected. Transmitting without an antenna can damage the radio.",
    },
  ],
  guides: ["t114-basic-case", "t096-basic-case", "switch-clip"],
  openDesign: {
    makerworld: "https://makerworld.com/en/models/3544083",
  },
};

export default product;
