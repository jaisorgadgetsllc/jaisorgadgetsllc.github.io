import type { NewsItem } from "./index";

const item: NewsItem = {
  slug: "snap-power-controller-v1",
  date: "2026-11",
  kind: "release",
  title: "SNAP Power Controller v1.0",
  summary:
    "MPPT charging, four diode-isolated panel inputs, INA219 power telemetry and battery/load switch ports on one 56.5 × 29 mm board. Drop-in for SNAP v1.2.",
  body: [
    "Tested in a live Meshtastic node (XIAO nRF52840 + Wio-SX1262): four SNAP panels deliver a steady 112–114 mA in full sun. The connection guide maps every pin.",
  ],
  product: "snap-power-controller",
  links: [
    { label: "Connection guide (PDF)", href: "/guides/snap-power-controller-connection-guide.pdf" },
  ],
};

export default item;
