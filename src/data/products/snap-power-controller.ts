import type { Product } from "./index";
import { site } from "../site";
import card from "../../assets/products/snap-power-controller/card.jpg";
import features from "../../assets/products/snap-power-controller/features.jpg";
import front from "../../assets/products/snap-power-controller/front.jpg";
import pinout from "../../assets/products/snap-power-controller/pinout.jpg";
import telemetry from "../../assets/products/snap-power-controller/telemetry.jpg";
import inTheSun from "../../assets/products/snap-power-controller/in-the-sun.jpg";
import installedTop from "../../assets/products/snap-power-controller/installed-top.jpg";
import closeup from "../../assets/products/snap-power-controller/closeup.jpg";
import back from "../../assets/products/snap-power-controller/back.jpg";

const product: Product = {
  slug: "snap-power-controller",
  name: "SNAP Power Controller",
  model: "v1.0",
  category: "boards",
  order: 4,
  summary:
    "MPPT solar charger, power sensor, per-panel diodes and switch ports on one 56.5 × 29 mm board. Built for multi-panel micro solar builds such as remote mesh nodes.",
  hook: {
    question: "What makes this special?",
    answer:
      "The SNAP Power Controller combines four features on one compact board: an MPPT charge controller, a voltage and current sensor, an isolating diode on each panel input, and on/off switch ports for both the battery and the load. These features are often needed for remote solar mesh nodes and similar applications, but they're usually separate parts wired by hand. Here they plug in and work together.",
  },
  badges: ["Board", "Tested", "Open design"],
  prices: [],
  etsyUrl: site.etsyShop,
  card: {
    src: card,
    alt: "Labeled feature diagram of the SNAP Power Controller board: diode per panel, MPPT charger, power sensor, switch ports.",
  },
  gallery: [
    {
      src: features,
      alt: "Labeled feature diagram of the board: four solar inputs, CN3791 MPPT charger, INA219 power sensor, switch ports.",
    },
    {
      src: front,
      alt: "The green SNAP Power Controller board held in a hand, with labels on its connectors and chips.",
    },
    { src: pinout, alt: "Pinout and polarity diagram for every connector on the board." },
    {
      src: telemetry,
      alt: "Power telemetry from the board's INA219 shown live in the Meshtastic app.",
    },
    {
      src: inTheSun,
      alt: "A SNAP solar node in full sun, labeled with its 112 to 114 mA charge current.",
    },
    {
      src: installedTop,
      alt: "Top view of the board installed in a SNAP enclosure next to a mesh node board and an 18650 cell.",
    },
    { src: closeup, alt: "Close-up of the board's components: INA219, CN3791, Schottky diodes, charge LEDs." },
    { src: back, alt: "Back of the board with the I2C pinout printed on it." },
  ],
  specs: [
    { label: "Charger", value: "CN3791 MPPT, 1S Li-ion, 0.8 A, CC/CV to 4.2 V" },
    { label: "Inputs", value: "Up to 4 × 5 V panels, one Schottky diode each" },
    { label: "Telemetry", value: "INA219 over I2C, address `0x40`, 3–5 V VCC" },
    { label: "Switch ports", value: "`SW_BATT`, `SW_LOAD`" },
    { label: "Connectors", value: "Micro JST 1.25 (PicoBlade-compatible)" },
    { label: "Size", value: "56.5 × 29 mm, four M3 holes" },
    { label: "Load", value: "Under 1 A" },
    { label: "Design files", value: "CERN-OHL-P-2.0" },
  ],
  body: [
    { kind: "heading", text: "What it does" },
    {
      kind: "list",
      items: [
        "*MPPT solar charging* (CN3791) for one 1S Li-ion cell: 0.8 A, CC/CV to 4.2 V, trickle charge, automatic recharge.",
        "*Up to four 5 V panels*, one Schottky diode per input. A shaded panel can't pull current from a sunny one.",
        "*Power telemetry over I2C* (INA219, address `0x40`). Meshtastic and MeshCore detect it automatically. Standard INA219 libraries work as-is.",
        "*Selector switch.* `SOLAR` reads panel current and voltage. `BATT` reads battery current and cell voltage.",
        "*Two switch ports.* `SW_BATT` cuts the battery. `SW_LOAD` cuts only the device, so the battery keeps charging.",
        "*Charge LEDs.* Red while charging, green when full.",
      ],
    },
    { kind: "heading", text: "Tested" },
    "Running in a live Meshtastic node: Seeed XIAO nRF52840 + Wio-SX1262. In full sun, four SNAP panels deliver a steady 112–114 mA, readable live in the Meshtastic app. Every board is tested before it ships.",
    { kind: "heading", text: "What you need" },
    {
      kind: "list",
      items: [
        "1 to 4 × 5 V solar panels.",
        "1 × 1S Li-ion cell rated for 0.8 A charging. An 18650 is ideal.",
        "A device to power, with a battery input.",
        "Micro JST 1.25 leads: 2-pin, plus a 4-pin for I2C.",
        "Optional: 2 panel-mount switches rated 1 A or more. Bridge any switch port you don't use.",
      ],
    },
    { kind: "heading", text: "Good to know" },
    {
      kind: "list",
      items: [
        "`J7` (`SW_BATT`) and `J8` (`SW_LOAD`) must be closed, with a switch or a bridge. Both sit in the power path.",
        "JST 1.25 leads have no standard colors. Check polarity with a meter before plugging in. The connection guide shows every pin.",
        "The INA219 address `0x40` clashes with SHT21, HTU21D and HDC1080 sensors.",
        "Meshtastic: enable *Power Metrics* in the telemetry settings.",
        "Drop-in for [SNAP v1.2](/products/snap/). Works in any multi-panel micro solar build; mesh nodes are one example.",
      ],
    },
    {
      kind: "warn",
      label: "Lithium safety",
      text: "Lithium cells can overheat or catch fire if shorted, reversed or damaged. Use protected cells rated for 0.8 A charging, check polarity, and never leave a charging system unattended indoors.",
    },
  ],
  guides: ["snap-power-controller"],
  openDesign: {
    github: "https://github.com/jaisor/SNAP_Power_Controller",
  },
};

export default product;
