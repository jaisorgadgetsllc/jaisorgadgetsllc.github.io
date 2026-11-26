import type { Product } from "./index";
import { site } from "../site";
import card from "../../assets/products/snap/card.jpg";
import featured from "../../assets/products/snap/featured.jpg";
import accessories from "../../assets/products/snap/accessories-tagged-4x3.jpg";
import buildYourWay from "../../assets/products/snap/build-the-way-you-want-padded.jpg";
import beigeBrown from "../../assets/products/snap/2x200ma-petg-beige-brown-collage.jpg";
import greenBeige from "../../assets/products/snap/2x200ma-petg-green-beige-collage.jpg";
import asaGray from "../../assets/products/snap/2x200ma-asa-gray-collage.jpg";
import whatsIncluded from "../../assets/products/snap/2x200ma-whats-included-tagged.jpg";
import weatherproofing from "../../assets/products/snap/weatherproofing-collage.jpg";

const product: Product = {
  slug: "snap",
  name: "SNAP Solar Node Adaptable Platform",
  model: "SNAP v1.2",
  category: "solar",
  order: 3,
  summary:
    "A solar enclosure platform for LoRa mesh nodes. The antenna goes top or bottom, SMA or N-type. Free ports take a mount, magnet, hook or power switch.",
  hook: {
    question: "What makes this special?",
    answer:
      "One platform, swappable parts. Panels slide into a lip on the top and sides, and every plug accessory fits every SNAP variant. Caps, mounts and antenna plugs move between builds.",
  },
  badges: ["Kit", "Open design"],
  prices: [
    { label: "2x200mA kit", price: 24 },
  ],
  pricesAsOf: "Nov 2026",
  etsyUrl: site.etsyShop,
  card: {
    src: card,
    alt: "Olive-green two-panel SNAP on a blue mat, with its swappable port plugs, caps and an antenna on a cable laid out in front.",
  },
  gallery: [
    {
      src: featured,
      alt: "Olive-green SNAP enclosure with a solar panel and a black SMA antenna, mounted outdoors.",
    },
    {
      src: accessories,
      alt: "Swappable port accessories laid out: SMA and N-type antenna mounts, hook, magnet cap, power switch, painter's pole thread.",
    },
    {
      src: buildYourWay,
      alt: "Grid of SNAP builds with the antenna on top or bottom and different port accessories.",
    },
    {
      src: beigeBrown,
      alt: "2x200mA kit in PETG: beige body, brown base, knurled inserts, O-rings and components grid.",
    },
    {
      src: greenBeige,
      alt: "2x200mA kit in PETG: olive-green body, beige base and the included parts.",
    },
    { src: asaGray, alt: "2x200mA kit in gray ASA: body, base and the included parts." },
    {
      src: whatsIncluded,
      alt: "Labeled layout of what is in the 2x200mA kit: printed body, base plate, components grid, accessory plugs, M3 bolts, rubber O-rings.",
    },
    {
      src: weatherproofing,
      alt: "Collage of extra weatherproofing: rubberized sealant and spar urethane coatings applied to the enclosure.",
    },
  ],
  specs: [
    { label: "Variants", value: "2x200mA (two panels). 4x60mA (four panels) coming soon" },
    { label: "Antenna", value: "Top or bottom; SMA or N-type mount" },
    { label: "Ports", value: "Plug accessories, shared across all SNAP variants" },
    { label: "Panels", value: "Slide into a lip on the top and sides" },
    { label: "For", value: "LoRa mesh nodes: Meshtastic, MeshCore" },
  ],
  body: [
    { kind: "heading", text: "Variants" },
    {
      kind: "table",
      head: ["", "2x200mA", "4x60mA (coming soon)"],
      rows: [
        ["Panels", "Two 200 mA panels", "Four 60 mA panels, one per face"],
        ["Orientation", "Aim the panels at the sun", "Sun from every direction; no need to aim the node"],
        ["Accessory ports", "Top, bottom and side ports", "Two: top and bottom"],
        ["Kit includes", "Knurled inserts installed in the body", "Not for sale yet"],
        ["Colors", "PETG beige body + brown base; PETG olive-green body + beige base; ASA gray", "Not set yet"],
      ],
    },
    "The 4x60mA variant has two accessory ports. Four panel faces leave no room for side ports. That is the tradeoff for the omni panel layout. It is not for sale yet; see the [four-panel SNAP page](/products/snap-4x60ma/) for photos and the free model.",
    { kind: "heading", text: "Antenna placement" },
    {
      kind: "list",
      items: [
        "*Antenna on top.* The bottom port is free for a mount, magnet or power switch.",
        "*Antenna on the bottom.* The top port is free for a hook or power switch.",
      ],
    },
    { kind: "heading", text: "Accessories" },
    {
      kind: "list",
      items: [
        "SMA antenna mount",
        "N-type antenna mount",
        "36 mm magnet cap",
        "Painter's pole thread",
        "Hook",
        "On/off power switch",
        "Plain plug",
      ],
    },
    {
      kind: "note",
      label: "Pairs with",
      text: "The [SNAP Power Controller](/products/snap-power-controller/) drops into SNAP v1.2: four diode-isolated panel inputs, MPPT charging and I2C power telemetry on one board. No separate diodes needed.",
    },
  ],
  guides: [],
  openDesign: {
    makerworld: "https://makerworld.com/en/models/3360988",
  },
};

export default product;
