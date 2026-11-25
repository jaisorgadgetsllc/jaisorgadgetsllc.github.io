import { ArrowRight } from "lucide-react";
import { formatNewsDate, newsHref, newsKindLabel, type NewsItem } from "../data/news";

/** Compact news teaser for the home page slot; links to its /news/ anchor. */
export function NewsCard({ item }: { item: NewsItem }) {
  return (
    <a href={newsHref(item.slug)} className="hud hud-magenta hud-link group flex flex-col p-5">
      <div className="flex items-center justify-between gap-3 font-mono text-xs tracking-[0.18em] uppercase">
        <span className="text-magenta">{newsKindLabel[item.kind]}</span>
        <time dateTime={item.date} className="text-dim">
          {formatNewsDate(item.date)}
        </time>
      </div>
      <h3 className="mt-3 text-base leading-snug font-bold uppercase">{item.title}</h3>
      <p className="mt-2 line-clamp-3 text-sm">{item.summary}</p>
      <span className="mt-auto flex items-center gap-1.5 pt-4 font-mono text-xs tracking-[0.18em] text-magenta uppercase">
        Read
        <ArrowRight aria-hidden className="size-3.5 transition group-hover:translate-x-1" />
      </span>
    </a>
  );
}
