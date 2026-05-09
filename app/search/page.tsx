import type { Metadata } from "next";
import { Suspense } from "react";
import { SearchClient } from "@/components/search-client";
import { buildSearchIndex } from "@/lib/search-index";

export const metadata: Metadata = {
  title: "Search",
  description: "Search Ark Chakrabarti case studies, AI services, tech stack, ATS keywords, and production rescue capabilities.",
};

export default function SearchPage() {
  return (
    <Suspense fallback={<div className="mx-auto max-w-[1200px] px-5 py-24 text-base text-zinc-300 lg:px-8">Loading search…</div>}>
      <SearchClient items={buildSearchIndex()} />
    </Suspense>
  );
}
