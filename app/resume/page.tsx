import type { Metadata } from "next";
import { Download, FileText } from "lucide-react";
import Link from "next/link";
import { Reveal } from "@/components/reveal";
import { Pill, SectionHeader } from "@/components/ui";

export const metadata: Metadata = {
  title: "Resume",
  description: "Download resume variants for SaaS builder, AI specialist, modernization, AI orchestrator, and code cleanup roles.",
};

const variants = [
  { title: "A: SaaS Builder", subtitle: "Full-stack product engineering, multi-tenant SaaS, payments, and production delivery.", href: "/resumes/ark-chakrabarti-saas-builder.pdf" },
  { title: "B: AI Specialist", subtitle: "RAG systems, LLM integration, evaluation, red-teaming, and AI product quality.", href: "/resumes/ark-chakrabarti-ai-specialist.pdf" },
  { title: "C: Modernization", subtitle: "Legacy rescue, performance hardening, security cleanup, and cloud migration.", href: "/resumes/ark-chakrabarti-modernization.pdf" },
  { title: "D: AI Orchestrator", subtitle: "Multi-agent systems, model routing, cost optimization, monitoring, and evals.", href: "/resumes/ark-chakrabarti-ai-orchestrator.pdf" },
  { title: "E: Code Cleanup", subtitle: "Vibe-coded MVP rescue, architecture repair, testing, observability, and maintainability.", href: "/resumes/ark-chakrabarti-code-cleanup.pdf" },
];

export default function ResumePage() {
  return (
    <div className="mx-auto max-w-[1200px] px-5 py-16 md:py-24 lg:px-8">
      <Reveal>
        <SectionHeader eyebrow="Resume" title="Five focused resume variants" description="Choose the version that best matches the engagement: building, AI integration, modernization, orchestration, or code cleanup." />
      </Reveal>

      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {variants.map((variant, index) => (
          <Reveal key={variant.title} delay={(index % 3) * 90}>
            <article className="flex h-full flex-col rounded-[1.75rem] border border-white/10 bg-white/[0.04] p-6 transition hover:-translate-y-1 hover:border-cyan-400/40 hover:shadow-2xl hover:shadow-cyan-950/40">
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-500/20 to-cyan-400/20 text-cyan-200 ring-1 ring-white/10">
                <FileText className="h-6 w-6" />
              </div>
              <h2 className="text-2xl font-bold text-white">{variant.title}</h2>
              <p className="mt-3 flex-1 text-base text-zinc-400">{variant.subtitle}</p>
              <Link href={variant.href} className="mt-6 inline-flex items-center justify-center gap-2 rounded-full border border-white/10 px-5 py-3 font-semibold text-white transition hover:border-cyan-400/50 hover:bg-white/[0.06]">
                <Download className="h-5 w-5" /> Download PDF
              </Link>
            </article>
          </Reveal>
        ))}
      </div>

      <section className="py-20 md:py-28">
        <Reveal>
          <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 md:p-10">
            <Pill>Condensed Resume</Pill>
            <h1 className="mt-6 text-4xl font-bold text-white md:text-5xl">Ark Chakrabarti — AI Product Engineer &amp; Full-Stack Architect</h1>
            <div className="mt-8 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
              <div className="space-y-8">
                <section>
                  <h2 className="text-2xl font-bold text-white">Profile</h2>
                  <p className="mt-3 text-base text-zinc-300">UC Berkeley Computer Science graduate and former Scale AI Data Specialist focused on building production AI systems: SaaS platforms, RAG, semantic search, agent workflows, model evaluation, and workflow automation.</p>
                </section>
                <section>
                  <h2 className="text-2xl font-bold text-white">Selected Work</h2>
                  <ul className="mt-3 space-y-3 text-base text-zinc-300">
                    <li>Built six production-quality portfolio applications spanning commerce, client portals, education, automation, market intelligence, and legal operations.</li>
                    <li>Created RAG and AI review systems with grounded retrieval, citations, eval sets, and measurable business metrics.</li>
                    <li>Rescued AI-built products by hardening architecture, performance, security, testing, and deployment workflows.</li>
                    <li>Designed multi-tenant SaaS systems with RBAC, audit logs, real-time collaboration, payments, and operational analytics.</li>
                  </ul>
                </section>
                <section>
                  <h2 className="text-2xl font-bold text-white">Experience</h2>
                  <div className="mt-3 space-y-4 text-base text-zinc-300">
                    <p><strong className="text-white">Independent AI Product Engineer:</strong> Production SaaS builds, AI integration, workflow automation, and rescue projects for startups and enterprises.</p>
                    <p><strong className="text-white">Scale AI — AI Data Specialist:</strong> LLM training data quality, evaluation, red-teaming, instruction following, and model behavior analysis.</p>
                    <p><strong className="text-white">UC Berkeley — Computer Science:</strong> Systems, algorithms, software engineering, and scalable product foundations.</p>
                  </div>
                </section>
              </div>
              <aside className="space-y-6">
                <section className="rounded-3xl border border-white/10 bg-black/25 p-6">
                  <h2 className="text-2xl font-bold text-white">Core Stack</h2>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {["TypeScript", "React", "Next.js 16", "Python", "Rust", "PostgreSQL", "pgvector", "Redis", "Anthropic", "OpenAI", "Stripe", "Docker", "Cloudflare"].map((item) => <Pill key={item}>{item}</Pill>)}
                  </div>
                </section>
                <section className="rounded-3xl border border-white/10 bg-black/25 p-6">
                  <h2 className="text-2xl font-bold text-white">AI Capabilities</h2>
                  <p className="mt-3 text-base text-zinc-300">RAG, semantic search, AI agents, evals, guardrails, embeddings, function calling, prompt engineering, LoRA/PEFT awareness, model routing, and LLM cost optimization.</p>
                </section>
                <section className="rounded-3xl border border-white/10 bg-black/25 p-6">
                  <h2 className="text-2xl font-bold text-white">Contact</h2>
                  <p className="mt-3 text-base text-zinc-300">ark@arkdev.io · github.com/SA-Ark · linkedin.com/in/arkchakrabarti</p>
                </section>
              </aside>
            </div>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
