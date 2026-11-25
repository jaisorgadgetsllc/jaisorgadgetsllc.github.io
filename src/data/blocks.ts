/**
 * Rich-text body content shared by products and news, rendered by
 * `components/Blocks.tsx`. A bare string is a paragraph.
 *
 * Inside any text field, `backticks` render as inline code (use it for
 * model numbers: Orbitron's slashed zero makes "T096" read as "TØ96"),
 * [label](href) as a link, *text* as bold and _text_ as italic. That is
 * the only markup; it is tokenized into React elements by
 * `components/Inline.tsx`, never parsed as HTML.
 */
export type Block =
  | string
  | { kind: "heading"; text: string }
  | { kind: "list"; items: string[] }
  | { kind: "note" | "warn"; label: string; text: string }
  | { kind: "steps"; items: { title: string; text: string }[] }
  | { kind: "table"; caption?: string; head: string[]; rows: string[][] };
