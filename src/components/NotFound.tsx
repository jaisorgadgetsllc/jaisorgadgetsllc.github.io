import type { NavId } from "../data/site";
import { Layout } from "./Layout";

/**
 * Rendered when a shell names a page or product that doesn't exist: an
 * unknown `data-page`, or a `data-slug` with no matching product file.
 * Visible on purpose, so a wiring mistake can't ship as a wrong page.
 */
export function NotFound({
  current = "home",
  title = "Page not found",
  backHref = "/",
  backLabel = "Home",
}: {
  current?: NavId;
  title?: string;
  backHref?: string;
  backLabel?: string;
}) {
  return (
    <Layout current={current}>
      <div className="py-24 text-center">
        <p className="kicker">{"// 404"}</p>
        <h1 className="mt-3 text-3xl font-extrabold uppercase">{title}</h1>
        <a href={backHref} className="btn btn-outline hud hud-sm hud-link mt-8">
          {backLabel}
        </a>
      </div>
    </Layout>
  );
}
