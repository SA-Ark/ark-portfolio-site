import Link from "next/link";
import type { ReactNode } from "react";
import { MagneticLink } from "@/components/magnetic-link";

export function SectionHeader({ eyebrow, title, description }: { eyebrow?: string; title: string; description?: string }) {
  return (
    <div className="mx-auto mb-12 max-w-3xl text-center">
      {eyebrow ? <p className="mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300">{eyebrow}</p> : null}
      <h2 className="text-4xl font-bold text-white md:text-5xl">{title}</h2>
      {description ? <p className="mt-5 text-lg text-[#8888a0]">{description}</p> : null}
    </div>
  );
}

export function Pill({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <span className={`rounded-full border border-cyan-500/30 bg-cyan-500/15 px-3.5 py-1.5 text-xs font-bold text-cyan-200 backdrop-blur-xl ${className}`}>
      {children}
    </span>
  );
}

export function PrimaryLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <MagneticLink
      href={href}
      className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-cyan-400 to-violet-500 px-8 py-4 text-lg font-bold text-white shadow-2xl shadow-cyan-500/30 transition hover:shadow-cyan-400/40 hover:brightness-110"
    >
      {children}
    </MagneticLink>
  );
}

export function OutlineLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <MagneticLink
      href={href}
      className="inline-flex items-center justify-center rounded-full border-2 border-white px-8 py-4 text-lg font-bold text-white transition hover:bg-white hover:text-[#050510]"
    >
      {children}
    </MagneticLink>
  );
}

export function TextLink({ href, children, className = "" }: { href: string; children: ReactNode; className?: string }) {
  return <Link href={href} className={className}>{children}</Link>;
}
