/**
 * Downloadable guide PDFs. Files live in `public/guides/` so their URLs
 * are stable (printed QR codes and Etsy messages can point at them) and
 * Vite does not fingerprint them. Products reference guides by id.
 */
export type GuideId = "t114-case" | "t096-case" | "snap-power-controller";

export interface Guide {
  id: GuideId;
  title: string;
  /** What the guide covers, one line. */
  description: string;
  href: string;
  pages: number;
  sizeLabel: string;
}

export const guides: Guide[] = [
  {
    id: "t114-case",
    title: "Weather-Resistant Case Assembly Guide: Heltec T114",
    description:
      "Parts list, exploded view and 6-step assembly with photos. Includes GPS (L76K) placement.",
    href: "/guides/t114-weather-resistant-case-assembly-guide.pdf",
    pages: 2,
    sizeLabel: "1.5 MB",
  },
  {
    id: "t096-case",
    title: "Weather-Resistant Case Assembly Guide: Heltec T096",
    description:
      "Parts list, exploded view and 6-step assembly with photos. Also fits the Heltec Tracker V2.",
    href: "/guides/t096-weather-resistant-case-assembly-guide.pdf",
    pages: 2,
    sizeLabel: "1.9 MB",
  },
  {
    id: "snap-power-controller",
    title: "SNAP Power Controller Connection Guide",
    description:
      "Pinout and polarity for every connector, an example solar mesh node build, and the connection order.",
    href: "/guides/snap-power-controller-connection-guide.pdf",
    pages: 2,
    sizeLabel: "2.3 MB",
  },
];

export const guideById = new Map(guides.map((g) => [g.id, g]));
