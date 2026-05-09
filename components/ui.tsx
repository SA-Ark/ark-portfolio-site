import Link from "next/link";
import type { ReactNode } from "react";

export function SectionHeader({ eyebrow, title, description }: { eyebrow?: string; title: string; description?: string }) {
  return (
    <div className="mx-auto mb-12 max-w-3xl text-center">
      {eyebrow ? <p className="mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-blue-300">{eyebrow}</p> : null}
      <h2 className="text-4xl font-bold text-white md:text-5xl">{title}</h2>
      {description ? <p className="mt-5 text-lg text-zinc-400">{description}</p> : null}
    </div>
  );
}

export function Pill({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <span className={`rounded-full border border-white/10 bg-white/[0.06] px-3 py-1 text-xs font-semibold text-zinc-200 ${className}`}>{children}</span>;
}

export function PrimaryLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <Link href={href} className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-purple-500 px-6 py-3 font-semibold text-white shadow-xl shadow-blue-500/20 transition hover:-translate-y-1 hover:shadow-purple-500/25">
      {children}
    </Link>
  );
}

export function OutlineLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <Link href={href} className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/[0.03] px-6 py-3 font-semibold text-white transition hover:-translate-y-1 hover:border-blue-400/50 hover:bg-white/[0.07]">
      {children}
    </Link>
  );
}
