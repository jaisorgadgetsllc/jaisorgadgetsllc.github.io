import type { Product } from "./index";
import { site } from "../site";
// Photos come from the owner's Drive `MakerWorld/SolarNode4x60mA-v1.2/Photos`
// (`Lum/` versions first). The two tagged collages were already in the repo
// with the clean `JAISORGADGETS` footer; the Drive copies carry `JAISOR.NET`.
import card from "../../assets/products/snap-4x60ma/card.jpg";
import greenInHand from "../../assets/products/snap-4x60ma/green-in-hand.jpg";
import beigeAntennaTop from "../../assets/products/snap-4x60ma/beige-antenna-top.jpg";
import overviewCollage from "../../assets/products/snap-4x60ma/overview-collage.jpg";
import greenHookRain from "../../assets/products/snap-4x60ma/green-hook-rain.jpg";
import beigeRain from "../../assets/products/snap-4x60ma/beige-rain.jpg";
import greenAccessories from "../../assets/products/snap-4x60ma/green-accessories.jpg";
import accessoriesTagged from "../../assets/products/snap/accessories-tagged-4x3.jpg";
import bottomPort from "../../assets/products/snap-4x60ma/bottom-port.jpg";
import opened from "../../assets/products/snap-4x60ma/opened.jpg";
import controllerWired from "../../assets/products/snap-4x60ma/controller-wired.jpg";
import baseLipInsert from "../../assets/products/snap-4x60ma/base-lip-insert.jpg";
import exampleBuild from "../../assets/products/snap-4x60ma/example-build-tagged.jpg";

const product: Product = {
  slug: "snap-4x60ma",
  name: "SNAP Four-Panel Solar Node Enclosure",
  model: "SNAP v1.2 / 4x60mA",
  category: "solar",
  order: 5,
  status: "coming-soon",
  summary:
    "Four-panel SNAP v1.2 solar enclosure for LoRa mesh nodes. One 60 mA panel on each face takes sun from every direction. Coming soon, not for sale yet.",
  hook: {
    question: "What makes this variant special?",
    answer:
      "Four 60 mA solar panels, one on each face, take sunlight from every direction. No need to aim the node at the sun. Mount it and the panels work through the day.",
  },
  badges: ["Coming soon", "Open design"],
  prices: [],
  etsyUrl: site.etsyShop,
  card: {
    src: card,
    alt: "Olive-green four-panel SNAP with an antenna on top, its port plugs laid out in front of it on a blue mat.",
  },
  gallery: [
    {
      src: greenInHand,
      alt: "Olive-green four-panel SNAP held in a hand outdoors, black antenna on top, two of its panels facing the camera.",
    },
    {
      src: beigeAntennaTop,
      alt: "Beige four-panel SNAP on a stone wall, SMA antenna on top, a panel on each sloped face.",
    },
    {
      src: overviewCollage,
      alt: "Labeled collage of the 4x60mA variant: one panel per face, threaded antenna port, bolt-on base.",
    },
    {
      src: greenHookRain,
      alt: "Olive-green four-panel SNAP with a hook cap on top, covered in rain drops on a roof.",
    },
    { src: beigeRain, alt: "Beige four-panel SNAP with an antenna on top, wet with rain on a roof." },
    {
      src: greenAccessories,
      alt: "Olive-green four-panel SNAP on a blue mat with its swappable port plugs in front of it.",
    },
    {
      src: accessoriesTagged,
      alt: "Swappable port accessories laid out: SMA and N-type antenna mounts, hook, magnet cap, power switch, painter's pole thread.",
    },
    {
      src: bottomPort,
      alt: "Underside of the four-panel SNAP held up against the sky: brown base plate with the bottom accessory port.",
    },
    {
      src: opened,
      alt: "Four-panel SNAP opened: olive-green body lifted off the beige base, port plugs beside it.",
    },
    {
      src: controllerWired,
      alt: "Inside the olive-green body on a workbench: SNAP Power Controller wired to the four panel leads.",
    },
    {
      src: baseLipInsert,
      alt: "Close-up inside the olive-green body: a panel opening and a brass knurled insert in the corner.",
    },
    {
      src: exampleBuild,
      alt: "Labeled example build: panels, SNAP Power Controller, mesh node board, battery and wiring on the components grid.",
    },
  ],
  specs: [
    { label: "Status", value: "Coming soon. Not for sale yet." },
    { label: "Panels", value: "Four 60 mA, one per face" },
    { label: "Ports", value: "Two: top and bottom" },
    { label: "Antenna", value: "Top or bottom; SMA or N-type mount" },
    { label: "Panel mount", value: "Slides into a lip on the top and sides" },
    { label: "Accessories", value: "Shared with every SNAP variant" },
    { label: "Base", value: "TPU gasket; 4 × M3 × 10 mm bolts into brass knurled inserts" },
    { label: "For", value: "LoRa mesh nodes: Meshtastic, MeshCore" },
  ],
  body: [
    {
      kind: "note",
      label: "Not for sale yet",
      text: "Price, colors and kit contents are not set. The 3D model is published free by Jordan Marinov on MakerWorld, so you can print and build one now.",
    },
    { kind: "heading", text: "What's new in v1.2" },
    {
      kind: "list",
      items: [
        "*Solar panel lip.* Each panel slides into a lip along its top and sides, which holds it in place.",
        "*Shared accessories.* Every plug accessory fits the whole SNAP platform. Caps, mounts and antenna plugs swap between variants.",
        "*Two ports, top and bottom.* Four panel faces leave no room for side ports. That is the tradeoff for the omni panel layout.",
      ],
    },
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
    { kind: "heading", text: "Build your own: parts" },
    {
      kind: "table",
      head: ["Qty", "Part"],
      rows: [
        ["4", "60 mA solar panels"],
        ["4", "1N5819 Schottky diodes, one per panel (or SMD Schottky diodes)"],
        ["1", "CN3163 micro MPPT charging module"],
        ["or 1", "SNAP Power Controller, in place of the diodes and charging module"],
        ["1", "TPU filament, unprinted, for the base gasket"],
        ["", "30 AWG silicone wire for the panels"],
        ["1 set", "32 mm O-rings for the accessory caps"],
        ["4", "Brass knurled inserts for the body bottom"],
        ["4", "M3 × 10 mm socket head bolts for the base"],
        ["4", "M3 × 6 mm bolts to hold the build mesh to the base"],
        ["1", "On/off latching button, for the switch accessory"],
        ["1", "LoRa antenna of your choice"],
        ["1", "Mesh radio module and battery of your choice"],
        ["Optional", "JST connectors, for a disconnectable build"],
      ],
    },
    "Part links are on the MakerWorld page.",
    { kind: "heading", text: "Build notes" },
    {
      kind: "list",
      items: [
        "*Diodes.* Wire each panel through its own Schottky diode to stop reverse current between panels. The anode goes on the positive side. Skip the diodes with the SNAP Power Controller: each of its four panel inputs has one built in.",
        "*Wire routing.* The panel wire holes are tight on purpose to keep water out. Feed the wire slowly and work it through with pliers. The current is small, so thin wire is fine.",
        "*Gasket.* Press the TPU filament into the base channel.",
        "*Connectors.* JST connectors are optional. They make the electronics disconnectable.",
      ],
    },
    {
      kind: "note",
      label: "Example build",
      text: "The example build uses the [SNAP Power Controller](/products/snap-power-controller/). The four panels plug straight into its four inputs, and its I2C port reports battery and solar telemetry to the node.",
    },
  ],
  guides: [],
  openDesign: {
    makerworld: "https://makerworld.com/en/models/3321870",
  },
};

export default product;
