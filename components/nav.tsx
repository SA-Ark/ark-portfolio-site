"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/#case-studies", label: "Case Studies" },
  { href: "/about", label: "About" },
  { href: "/resume", label: "Resume" },
  { href: "/contact", label: "Contact" },
];

export function Nav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-[#0a0a0a]/75 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-[1200px] items-center justify-between px-5 py-4 lg:px-8">
        <Link href="/" className="group flex items-center gap-3" onClick={() => setOpen(false)}>
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-purple-500 font-bold text-white shadow-lg shadow-blue-500/20">
            A
          </span>
          <span className="font-semibold tracking-[0.22em] text-white">ARK</span>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) => {
            const active = link.href === "/" ? pathname === "/" : pathname.startsWith(link.href.replace("#case-studies", ""));
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
          className="rounded-xl border border-white/10 p-2 text-white md:hidden"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {open ? (
        <div className="border-t border-white/10 bg-[#0a0a0a] px-5 py-5 md:hidden">
          <div className="mx-auto flex max-w-[1200px] flex-col gap-4">
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
