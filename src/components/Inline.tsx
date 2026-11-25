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
 *
 * No lookbehind: Safari before 16.4 can't parse it, and Vite's default
 * target (safari16) leaves it in, so one `(?<=` here blanks every page on
 * those devices. The "non-word before the opening delimiter" rule is a
 * captured prefix group instead (start of text or one boundary char),
 * which is pushed back out as plain text. The inner `[^*\s](...[^*\s])?`
 * keeps the "non-space on the inner edge" rule.
 */
const TOKEN =
  /`([^`]+)`|\[([^\]]+)\]\(([^)\s]+)\)|(^|[^\w*])\*([^*\s](?:[^*]*?[^*\s])?)\*(?![\w*])|(^|[^\w_])_([^_\s](?:[^_]*?[^_\s])?)_(?![\w_])/g;

/** http(s), mailto, same-origin path (not protocol-relative `//`), or #. */
const SAFE_HREF = /^(https?:\/\/|mailto:|\/(?!\/)|#)/i;

export function Inline({ text }: { text: string }) {
  const out: ReactNode[] = [];
  let last = 0;
  let key = 0;
  for (const m of text.matchAll(TOKEN)) {
    const at = m.index ?? 0;
    if (at > last) out.push(text.slice(last, at));
    const [, code, label, href, boldPrefix, bold, italicPrefix, italic] = m;
    const prefix = boldPrefix ?? italicPrefix;
    if (prefix) out.push(prefix);
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
