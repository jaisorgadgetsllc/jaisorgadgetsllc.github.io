/**
 * Company-wide facts and links. Everything here is approved for public
 * use (see Jaisor-Gadgets-LLC-Website-Context.md). Do not add anything
 * from that file's "Do not publish" section.
 */
export const site = {
  name: "Jaisor Gadgets",
  legalName: "Jaisor Gadgets LLC",
  shopName: "JaisorGadgets",
  tagline: "Designed, printed, soldered & tested with care",
  pitch:
    "Hobby electronics, custom circuit boards and 3D-printed enclosures for makers. Designed, printed, soldered and tested in small batches in Southern California.",
  location: "Orange County, Southern California, USA",
  email: "jaisorgadgets.llc@gmail.com",
  etsyShop: "https://www.etsy.com/shop/JaisorGadgets",
  founder: "Jordan Marinov",
  founded: "2026",
} as const;

export const mailto = `mailto:${site.email}`;

export type NavId = "home" | "products" | "news" | "support" | "about";

export const nav: { id: Exclude<NavId, "home">; label: string; href: string }[] = [
  { id: "products", label: "Products", href: "/products/" },
  { id: "news", label: "News", href: "/news/" },
  { id: "support", label: "Support", href: "/support/" },
  { id: "about", label: "About", href: "/about/" },
];
