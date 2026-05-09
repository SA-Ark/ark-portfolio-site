import type { Metadata } from "next";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import Link from "next/link";
import { ContactForm } from "@/components/contact-form";
import { Reveal } from "@/components/reveal";
import { OutlineLink, Pill } from "@/components/ui";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Arko to build SaaS, rescue production systems, add AI, orchestrate agents, or automate workflows.",
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-[1200px] px-5 py-16 md:py-24 lg:px-8">
      <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <Reveal>
          <Pill>Contact</Pill>
          <h1 className="mt-6 text-5xl font-bold leading-tight text-white md:text-7xl">Let&apos;s Build Something Great</h1>
          <p className="mt-6 text-xl text-zinc-300">Tell me what you&apos;re building, where it hurts, or what needs to become automated. I&apos;ll respond with the fastest path to a useful system.</p>
          <div className="mt-8 space-y-4 rounded-[2rem] border border-white/10 bg-white/[0.04] p-6">
            <div className="flex items-center gap-3 text-base text-zinc-300">
              <Mail className="h-5 w-5 text-cyan-300" /> Prefer email? <Link href="mailto:ark@ark.chakrakali.com" className="font-semibold text-white hover:text-cyan-200">ark@ark.chakrakali.com</Link>
            </div>
            <div>
              <OutlineLink href="https://calendly.com/arkchakrabarti/intro-call">Schedule a call</OutlineLink>
            </div>
          </div>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link aria-label="GitHub" href="https://github.com/SA-Ark" className="inline-flex items-center gap-2 rounded-full border border-white/10 px-5 py-3 font-semibold text-white transition hover:border-cyan-400/50"><Github className="h-5 w-5" /> GitHub</Link>
            <Link aria-label="LinkedIn" href="https://www.linkedin.com/in/arkchakrabarti" className="inline-flex items-center gap-2 rounded-full border border-white/10 px-5 py-3 font-semibold text-white transition hover:border-cyan-400/50"><Linkedin className="h-5 w-5" /> LinkedIn</Link>
            <Link aria-label="Twitter/X" href="https://x.com/arkchakrabarti" className="inline-flex items-center gap-2 rounded-full border border-white/10 px-5 py-3 font-semibold text-white transition hover:border-cyan-400/50"><Twitter className="h-5 w-5" /> Twitter/X</Link>
          </div>
        </Reveal>
        <Reveal delay={120}>
          <ContactForm />
        </Reveal>
      </div>
    </div>
  );
}
