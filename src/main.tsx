import { StrictMode, type ReactNode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { productBySlug } from "./data/products";
import { AboutPage } from "./pages/AboutPage";
import { HomePage } from "./pages/HomePage";
import { NewsPage } from "./pages/NewsPage";
import { ProductNotFound, ProductPage } from "./pages/ProductPage";
import { ProductsPage } from "./pages/ProductsPage";
import { SupportPage } from "./pages/SupportPage";

/**
 * The one entry for every page. Each HTML shell carries its own <head>
 * (title, meta, JSON-LD) and says which page to render through
 * `<div id="root" data-page="..." data-slug="...">`. That is what stands
 * in for a router: there isn't one.
 */
const container = document.getElementById("root")!;
const { page, slug } = container.dataset;

function render(): ReactNode {
  switch (page) {
    case "products":
      return <ProductsPage />;
    case "product": {
      const product = productBySlug.get(slug ?? "");
      return product ? <ProductPage product={product} /> : <ProductNotFound />;
    }
    case "news":
      return <NewsPage />;
    case "support":
      return <SupportPage />;
    case "about":
      return <AboutPage />;
    default:
      return <HomePage />;
  }
}

createRoot(container).render(<StrictMode>{render()}</StrictMode>);
