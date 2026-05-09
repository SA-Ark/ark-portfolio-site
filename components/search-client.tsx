"use client";

import { Search, Sparkles } from "lucide-react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useMemo, useState } from "react";
import type { SearchItem } from "@/lib/search-index";

type RankedResult = SearchItem & { score: number; excerpt: string };

function normalize(value: string) {
  return value.toLowerCase().replace(/[^a-z0-9+#./\s-]/g, " ").replace(/\s+/g, " ").trim();
}

function excerptFor(item: SearchItem, terms: string[]) {
  const source = item.body || item.description;
  const lower = source.toLowerCase();
  const firstIndex = terms.reduce((best, term) => {
    const index = lower.indexOf(term.toLowerCase());
    if (index === -1) return best;
    return best === -1 ? index : Math.min(best, index);
  }, -1);
  if (firstIndex === -1) return item.description;
  const start = Math.max(0, firstIndex - 95);
  const end = Math.min(source.length, firstIndex + 230);
  return `${start > 0 ? "…" : ""}${source.slice(start, end)}${end < source.length ? "…" : ""}`;
}

function rank(items: SearchItem[], query: string): RankedResult[] {
  const normalizedQuery = normalize(query);
  if (!normalizedQuery) return [];
  const terms = normalizedQuery.split(" ").filter(Boolean);

  return items
    .map((item) => {
      const haystack = normalize([item.title, item.description, item.tags.join(" "), item.body].join(" "));
      const title = normalize(item.title);
      const tags = normalize(item.tags.join(" "));
      let score = 0;

      if (haystack.includes(normalizedQuery)) score += 18;
      if (title.includes(normalizedQuery)) score += 24;
      if (tags.includes(normalizedQuery)) score += 14;

      for (const term of terms) {
        if (title.includes(term)) score += 10;
        if (tags.includes(term)) score += 7;
        if (haystack.includes(term)) score += 3;
      }

      if (item.type === "case-study") score += 2;
      return { ...item, score, excerpt: excerptFor(item, terms) };
    })
    .filter((item) => item.score > 0)
    .sort((a, b) => b.score - a.score || a.title.localeCompare(b.title));
}

function Highlight({ text, query }: { text: string; query: string }) {
  const terms = normalize(query).split(" ").filter((term) => term.length > 1);
  if (!terms.length) return <>{text}</>;
  const escaped = terms.map((term) => term.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"));
  const regex = new RegExp(`(${escaped.join("|")})`, "ig");
  const parts = text.split(regex);
  return (
    <>
      {parts.map((part, index) => {
        const match = terms.some((term) => part.toLowerCase() === term.toLowerCase());
        return match ? (
          <mark key={`${part}-${index}`} className="rounded bg-blue-400/25 px-1 text-cyan-100">
            {part}
          </mark>
        ) : (
          <span key={`${part}-${index}`}>{part}</span>
        );
      })}
    </>
  );
}

export function SearchClient({ items }: { items: SearchItem[] }) {
  const params = useSearchParams();
  const initialQuery = params.get("q") ?? "";
  const [query, setQuery] = useState(initialQuery);
  const results = useMemo(() => rank(items, query), [items, query]);
  const examples = ["RAG", "multi-tenant", "Rust", "vibe code", "orchestration", "healthcare", "fintech", "LangChain", "production rescue"];

  return (
    <div className="mx-auto max-w-[1200px] px-5 py-16 md:py-24 lg:px-8">
      <div className="mx-auto max-w-3xl text-center">
        <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.055] text-cyan-200">
          <Sparkles className="h-7 w-7" />
        </div>
        <h1 className="text-5xl font-bold text-white md:text-7xl">Search the portfolio</h1>
        <p className="mt-5 text-lg text-zinc-300">
          Search case studies, services, AI architecture decisions, ATS keywords, tech stacks, outcomes, and rescue capabilities.
        </p>
      </div>

      <div className="mx-auto mt-10 max-w-3xl rounded-[2rem] border border-white/10 bg-white/[0.045] p-3 shadow-2xl shadow-black/30">
        <label className="flex items-center gap-3 rounded-[1.5rem] border border-white/10 bg-black/35 px-4 py-3">
          <Search className="h-5 w-5 flex-none text-zinc-500" />
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Try RAG, multi-tenant, Rust, vibe code, LangChain…"
            className="w-full bg-transparent text-base text-white outline-none placeholder:text-zinc-600"
            autoFocus
          />
        </label>
      </div>

      <div className="mx-auto mt-6 flex max-w-3xl flex-wrap gap-2">
        {examples.map((example) => (
          <button
            key={example}
            type="button"
            className="rounded-full border border-white/10 bg-white/[0.045] px-4 py-2 text-sm font-semibold text-zinc-300 transition hover:border-cyan-400/40 hover:text-white"
            onClick={() => setQuery(example)}
          >
            {example}
          </button>
        ))}
      </div>

      <div className="mt-14">
        <div className="mb-6 flex items-end justify-between gap-4">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">Results</p>
            <h2 className="mt-2 text-3xl font-bold text-white">
              {query ? `${results.length} matches for “${query}”` : "Start typing to search"}
            </h2>
          </div>
        </div>

        {query && results.length === 0 ? (
          <div className="rounded-[1.75rem] border border-white/10 bg-white/[0.045] p-8 text-base text-zinc-300">
            No exact matches yet. Try RAG, multi-tenant, production rescue, Rust, LangChain, orchestration, healthcare, or fintech.
          </div>
        ) : null}

        <div className="grid gap-5 lg:grid-cols-2">
          {results.slice(0, 18).map((result) => (
            <Link
              key={result.id}
              href={result.href}
              className="group rounded-[1.75rem] border border-white/10 bg-white/[0.045] p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/40 hover:bg-white/[0.07]"
            >
              <div className="flex items-center justify-between gap-4">
                <span className="rounded-full border border-white/10 bg-black/35 px-3 py-1 text-xs font-bold uppercase tracking-[0.16em] text-cyan-200">
                  {result.type.replace("-", " ")}
                </span>
                <span className="text-sm font-semibold text-zinc-500">Score {result.score}</span>
              </div>
              <h3 className="mt-5 text-2xl font-bold text-white group-hover:text-cyan-100">
                <Highlight text={result.title} query={query} />
              </h3>
              <p className="mt-3 text-base text-zinc-300">
                <Highlight text={result.excerpt} query={query} />
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {result.tags.slice(0, 7).map((tag) => (
                  <span key={tag} className="rounded-full border border-white/10 bg-black/30 px-3 py-1 text-xs font-semibold text-zinc-300">
                    <Highlight text={tag} query={query} />
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
