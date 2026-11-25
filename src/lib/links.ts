/** True for http(s) URLs: these open in a new tab. */
export function isExternal(href: string) {
  return /^https?:\/\//i.test(href);
}

/**
 * Props for an <a>. External http(s) links get `target="_blank"
 * rel="noreferrer"` (which implies noopener); same-origin links and
 * mailto: stay plain navigations.
 */
export function linkProps(href: string) {
  return isExternal(href) ? { href, target: "_blank", rel: "noreferrer" } : { href };
}
