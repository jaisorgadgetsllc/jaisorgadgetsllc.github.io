/**
 * Support page content: FAQ and customer-facing policies. Answers take
 * inline markup (see data/blocks.ts). Keep policies word-for-word in
 * line with the Etsy shop policy; Etsy is the source of truth.
 */

export interface Faq {
  q: string;
  a: string;
  /** Product slugs this answer is about, for the product resource cards. */
  products?: string[];
}

export const faqs: Faq[] = [
  {
    q: "Is the weather-resistant case waterproof?",
    a: "No. It is weather resistant, not waterproof, and has no IP rating. In testing, a node left in rain for a few hours took in no water. Keep the USB-C cover closed outdoors.",
    products: ["weather-resistant-mesh-case"],
  },
  {
    q: "Which boards fit the mesh node cases?",
    a: "Heltec `T114` and `T096`. The Heltec Tracker V2 is a drop-in for the `T096`, so the weather-resistant `T096` case fits it too.",
    products: ["weather-resistant-mesh-case", "basic-mesh-case"],
  },
  {
    q: "Do you ship fully built nodes outside the US?",
    a: "No. Fully built units contain a lithium battery and ship within the US only. Case-only orders ship wider. The case designs are also free on MakerWorld to print yourself.",
    products: ["weather-resistant-mesh-case", "basic-mesh-case"],
  },
  {
    q: "What do I need to finish a case-only build?",
    a: "A Heltec board; an L76K GNSS module for the `T114`; a 67 × 36 × 10 mm 1S LiPo; a 915 MHz SMA antenna and a U.FL-to-SMA cable. The assembly guides list every part.",
    products: ["weather-resistant-mesh-case"],
  },
  {
    q: "The antenna doesn't reach the center pin of the SMA port.",
    a: "Fix the SMA port with its nut only. The washers and extra hardware shorten the thread, so the antenna may not reach the center pin.",
    products: ["weather-resistant-mesh-case"],
  },
  {
    q: "My SNAP Power Controller doesn't power my device.",
    a: "Check that `J7` (`SW_BATT`) and `J8` (`SW_LOAD`) are both closed, with a switch or a wire bridge. Both sit in the power path: open `J7` disconnects the battery, open `J8` turns the load off.",
    products: ["snap-power-controller"],
  },
  {
    q: "How do I see solar telemetry in Meshtastic?",
    a: "Wire the 4-pin I2C port to your node and enable *Power Metrics* in the Meshtastic telemetry settings. Meshtastic and MeshCore detect the INA219 automatically. Set the `SOLAR`/`BATT` switch to choose panel or battery readings.",
    products: ["snap-power-controller"],
  },
  {
    q: "Another I2C sensor stopped working after I added the controller.",
    a: "The INA219 uses address `0x40`, which clashes with SHT21, HTU21D and HDC1080 sensors. Use only one of them on the same bus.",
    products: ["snap-power-controller"],
  },
  {
    q: "Which battery should I use with the SNAP Power Controller?",
    a: "One protected 1S Li-ion cell that can take 0.8 A charging. An 18650 is ideal. Small LiPo pouches may not be rated for 0.8 A.",
    products: ["snap-power-controller"],
  },
  {
    q: "Can I print the parts myself?",
    a: "Yes. Jordan Marinov publishes most of the designs free on MakerWorld, and the SNAP Power Controller design files on GitHub. See Open designs below.",
  },
  {
    q: "My board arrived dead. What now?",
    a: "Every board is tested before it ships. Report a dead-on-arrival board within 14 days of delivery for a replacement or refund, return shipping included.",
  },
  {
    q: "Can I power on the radio to test it before fitting the antenna?",
    a: "No. Never power a radio without its antenna connected. Transmitting without an antenna can damage it.",
  },
];

export const policies: { title: string; text: string }[] = [
  {
    title: "Returns and exchanges",
    text: "Accepted within 14 days of delivery. The buyer pays return shipping and any loss in value if the item isn't returned in original condition.",
  },
  {
    title: "Dead on arrival (boards)",
    text: "Every board is tested before it ships. Report a dead-on-arrival board within 14 days of delivery for a replacement or refund, return shipping included.",
  },
  {
    title: "Cancellations",
    text: "Within 12 hours of purchase.",
  },
  {
    title: "Shipping",
    text: "Ships from Southern California. Fully built units with lithium batteries ship within the US only.",
  },
  {
    title: "Customs",
    text: "US orders include duties at checkout. Non-US buyers may owe fees on delivery.",
  },
  {
    title: "Safety",
    text: "Products are for hobbyists and experienced users. Not UL, CE or FCC certified. Lithium batteries can catch fire if misused. Never power a radio without its antenna connected. Liability is limited to the purchase price.",
  },
];
