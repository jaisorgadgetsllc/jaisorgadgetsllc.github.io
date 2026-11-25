import type { NewsItem } from "./index";

const item: NewsItem = {
  slug: "website-launch",
  date: "2026-11-25",
  kind: "announcement",
  title: "New website",
  summary:
    "Products, assembly guides, open designs and support in one place. The Etsy shop stays the place to buy.",
  links: [
    { label: "Browse products", href: "/products/" },
    { label: "Support & guides", href: "/support/" },
  ],
};

export default item;
