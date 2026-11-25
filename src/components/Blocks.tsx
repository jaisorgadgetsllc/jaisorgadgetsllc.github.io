import { Info, TriangleAlert } from "lucide-react";
import type { Block } from "../data/blocks";
import { Inline } from "./Inline";

/** Renders a Block[] (see data/blocks.ts) as product / news body text. */
export function Blocks({ blocks }: { blocks: Block[] }) {
  return (
    <div className="space-y-5 leading-relaxed">
      {blocks.map((block, i) => (
        <BlockView key={i} block={block} />
      ))}
    </div>
  );
}

function BlockView({ block }: { block: Block }) {
  if (typeof block === "string") {
    return (
      <p>
        <Inline text={block} />
      </p>
    );
  }
  switch (block.kind) {
    case "heading":
      return (
        <h2 className="flex items-center gap-3 pt-6 text-lg font-bold tracking-wide uppercase first:pt-0">
          <span aria-hidden className="h-5 w-1 bg-signal" />
          {block.text}
        </h2>
      );
    case "list":
      return (
        <ul className="space-y-2">
          {block.items.map((item, i) => (
            <li key={i} className="flex gap-3">
              <span aria-hidden className="mt-2.5 size-1.5 shrink-0 rotate-45 bg-cyan" />
              <span>
                <Inline text={item} />
              </span>
            </li>
          ))}
        </ul>
      );
    case "note":
    case "warn": {
      const warn = block.kind === "warn";
      const Icon = warn ? TriangleAlert : Info;
      return (
        <aside className={`hud hud-sm p-4 pl-5 ${warn ? "hud-signal" : ""}`}>
          <p className={`mb-1 flex items-center gap-2 font-mono text-xs tracking-[0.2em] uppercase ${warn ? "text-signal" : "text-cyan"}`}>
            <Icon aria-hidden className="size-4" />
            {block.label}
          </p>
          <p>
            <Inline text={block.text} />
          </p>
        </aside>
      );
    }
    case "steps":
      return (
        <ol className="space-y-4">
          {block.items.map((step, i) => (
            <li key={i} className="flex gap-4">
              <span className="font-mono text-cyan">{String(i + 1).padStart(2, "0")}</span>
              <div>
                <p className="font-semibold text-frost">{step.title}</p>
                <p>
                  <Inline text={step.text} />
                </p>
              </div>
            </li>
          ))}
        </ol>
      );
    case "table":
      return (
        <div className="overflow-x-auto border border-line">
          <table className="w-full min-w-[32rem] text-left text-sm">
            {block.caption && (
              <caption className="caption-bottom pt-2 text-left text-xs text-dim">
                {block.caption}
              </caption>
            )}
            <thead className="bg-raised font-mono text-xs tracking-wider text-cyan uppercase">
              <tr>
                {block.head.map((h, i) => (
                  <th key={i} scope="col" className="px-3 py-2 font-normal">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {block.rows.map((row, r) => (
                <tr key={r} className="border-t border-line align-top">
                  {row.map((cell, c) =>
                    c === 0 ? (
                      <th key={c} scope="row" className="px-3 py-2 font-mono text-xs font-normal tracking-wider text-dim uppercase">
                        <Inline text={cell} />
                      </th>
                    ) : (
                      <td key={c} className="px-3 py-2">
                        <Inline text={cell} />
                      </td>
                    ),
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
  }
}
