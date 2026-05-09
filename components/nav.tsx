"use client";

import { Menu, Search, X } from "lucide-react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { FormEvent, useState } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/#case-studies", label: "Case Studies" },
  { href: "/about", label: "About" },
  { href: "/resume", label: "Resume" },
  { href: "/search", label: "Search" },
  { href: "/contact", label: "Contact" },
];

export function Nav() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const pathname = usePathname();
  const router = useRouter();

  function submitSearch(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const value = query.trim();
    router.push(value ? `/search?q=${encodeURIComponent(value)}` : "/search");
    setOpen(false);
  }

  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-[#0a0a0a]/75 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-[1200px] items-center justify-between gap-4 px-5 py-4 lg:px-8">
        <Link href="/" className="group flex items-center gap-3" onClick={() => setOpen(false)}>
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-purple-500 font-bold text-white shadow-lg shadow-blue-500/20">
            A
          </span>
          <span className="font-semibold tracking-[0.22em] text-white">ARK</span>
        </Link>

        <div className="hidden items-center gap-6 lg:flex">
          {links.map((link) => {
            const base = link.href.replace("#case-studies", "");
            const active = link.href === "/" ? pathname === "/" : pathname.startsWith(base);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-base font-medium transition hover:text-white ${active ? "text-white" : "text-zinc-400"}`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        <div className="hidden items-center gap-3 md:flex">
          <form onSubmit={submitSearch} className="hidden items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-2 xl:flex">
            <Search className="h-4 w-4 text-zinc-500" />
            <input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search RAG, Rust…"
              className="w-36 bg-transparent text-base text-white outline-none placeholder:text-zinc-600"
            />
          </form>
          <Link
            href="/contact"
            className="rounded-full bg-gradient-to-r from-blue-500 to-purple-500 px-5 py-2.5 text-base font-semibold text-white shadow-lg shadow-blue-500/20 transition hover:-translate-y-0.5 hover:shadow-purple-500/25"
          >
            Let&apos;s Talk
          </Link>
        </div>

        <button
          type="button"
          aria-label="Toggle navigation"
          className="rounded-xl border border-white/10 p-2 text-white lg:hidden"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {open ? (
        <div className="border-t border-white/10 bg-[#0a0a0a] px-5 py-5 lg:hidden">
          <div className="mx-auto flex max-w-[1200px] flex-col gap-4">
            <form onSubmit={submitSearch} className="flex items-center gap-2 rounded-2xl border border-white/10 bg-white/[0.04] px-3 py-3">
              <Search className="h-5 w-5 text-zinc-500" />
              <input
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search case studies and skills"
                className="w-full bg-transparent text-base text-white outline-none placeholder:text-zinc-600"
              />
            </form>
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-xl px-3 py-2 text-base font-medium text-zinc-200 hover:bg-white/5"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="rounded-full bg-gradient-to-r from-blue-500 to-purple-500 px-5 py-3 text-center text-base font-semibold text-white"
              onClick={() => setOpen(false)}
            >
              Let&apos;s Talk
            </Link>
          </div>
        </div>
      ) : null}
    </header>
  );
}
