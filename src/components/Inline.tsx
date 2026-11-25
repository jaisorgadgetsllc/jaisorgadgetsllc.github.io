import type { ReactNode } from "react";
import { linkProps } from "../lib/links";

/**
 * The site's only text markup, tokenized into React elements (never
 * parsed as HTML):
 *
 *   `code`          inline code; use for model numbers and pin names
 *   [label](href)   link; http(s), mailto:, / and # only
 *   *bold*          non-space inside, non-word outside the asterisks
 *   _italic_        same rule, so snake_case and 2*3*4 survive
 */
const TOKEN =
  /`([^`]+)`|\[([^\]]+)\]\(([^)\s]+)\)|(?<![\w*])\*(?=\S)([^*]+?)(?<=\S)\*(?![\w*])|(?<![\w_])_(?=\S)([^_]+?)(?<=\S)_(?![\w_])/g;

const SAFE_HREF = /^(https?:\/\/|mailto:|\/|#)/i;

export function Inline({ text }: { text: string }) {
  const out: ReactNode[] = [];
  let last = 0;
  let key = 0;
  for (const m of text.matchAll(TOKEN)) {
    const at = m.index ?? 0;
    if (at > last) out.push(text.slice(last, at));
    const [, code, label, href, bold, italic] = m;
    if (code !== undefined) {
      out.push(
        <code key={key++} className="code">
          {code}
        </code>,
      );
    } else if (label !== undefined && href !== undefined) {
      out.push(
        SAFE_HREF.test(href) ? (
          <a key={key++} className="prose-link" {...linkProps(href)}>
            {label}
          </a>
        ) : (
          label
        ),
      );
    } else if (bold !== undefined) {
      out.push(
        <strong key={key++} className="font-semibold text-frost">
          {bold}
        </strong>,
      );
    } else if (italic !== undefined) {
      out.push(<em key={key++}>{italic}</em>);
    }
    last = at + m[0].length;
  }
  if (last < text.length) out.push(text.slice(last));
  return <>{out}</>;
}
