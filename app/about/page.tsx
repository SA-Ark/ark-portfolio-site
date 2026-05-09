import type { Metadata } from "next";
import { Github, GraduationCap, Linkedin, ShieldCheck, Sparkles } from "lucide-react";
import Link from "next/link";
import { GitHubActivity } from "@/components/github-activity";
import { Reveal } from "@/components/reveal";
import { Pill, SectionHeader } from "@/components/ui";

export const metadata: Metadata = {
  title: "About",
  description:
    "About Arko: Production AI Systems, Scale AI data specialist, and independent AI product engineer building production systems.",
};

const techStack = [
  { category: "Languages", items: ["TypeScript", "Python", "Rust", "SQL"] },
  { category: "Frontend", items: ["React", "Next.js 16", "Tailwind CSS", "shadcn/ui", "D3.js"] },
  { category: "Backend", items: ["Node.js", "FastAPI", "Axum (Rust)", "Express"] },
  {
    category: "AI/ML",
    items: [
      "LLM Integration (Anthropic, OpenAI)",
      "RAG Systems",
      "Vector Search (pgvector, Qdrant)",
      "AI Agents",
      "Multi-Agent Orchestration",
      "MCP",
      "Prompt Engineering",
      "Fine-Tuning (LoRA/PEFT)",
      "AI Evaluation/Evals",
      "Guardrails",
      "LangChain",
      "LangGraph",
      "Embeddings",
      "Function Calling",
    ],
  },
  { category: "Database", items: ["PostgreSQL", "Redis", "pgvector", "TimescaleDB"] },
  { category: "Cloud", items: ["AWS", "Cloudflare", "Docker", "Kubernetes", "CI/CD", "Terraform", "MLOps", "LLMOps"] },
  { category: "Payments", items: ["Stripe"] },
  { category: "Auth", items: ["Auth.js v5", "RBAC", "Multi-tenant", "HIPAA", "SOC 2", "GDPR"] },
  { category: "Testing", items: ["Jest", "Playwright", "Vitest"] },
];

const timeline = [
  {
    title: "Independent AI Product Engineer",
    meta: "Current",
    description:
      "Building production AI SaaS systems, rescue engagements, RAG applications, multi-agent workflows, and automation platforms for startups and enterprises.",
  },
  {
    title: "AI Data Specialist — Scale AI",
    meta: "LLM training, evaluation, red-teaming",
    description:
      "Worked on model evaluation, instruction quality, red-team analysis, and practical feedback loops for frontier AI systems.",
  },
  {
    title: "AI Systems Engineering",
    meta: "Engineering foundation",
    description:
      "Studied systems, algorithms, software engineering, and the technical foundations required to build reliable products at scale.",
  },
];

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-[1200px] px-5 py-16 md:py-24 lg:px-8">
      <section className="grid gap-10 md:grid-cols-[360px_1fr] md:items-center">
        <Reveal>
          <div className="relative mx-auto h-72 w-72 overflow-hidden rounded-[3rem] border border-white/10 bg-gradient-to-br from-blue-500 via-purple-500 to-slate-900 shadow-2xl shadow-cyan-950/40 md:h-80 md:w-80">
            <div className="absolute inset-6 rounded-[2.5rem] border border-white/20 bg-black/20 backdrop-blur-sm" />
            <div className="absolute inset-0 flex items-center justify-center text-7xl font-bold text-white/90">ARK</div>
          </div>
        </Reveal>
        <Reveal delay={120}>
          <Pill>About</Pill>
          <h1 className="mt-6 text-5xl font-bold leading-tight text-white md:text-7xl">Engineer, evaluator, and architect for production AI.</h1>
          <div className="mt-6 space-y-5 text-lg text-zinc-300">
            <p>
              I&apos;m Arko, a Production AI Systems graduate and former AI Data Specialist at Scale AI, where I worked on LLM training, evaluation, and red-teaming. That experience shaped how I build: AI features need measurable quality, explicit guardrails, and business relevance.
            </p>
            <p>
              Today I work independently with startups and enterprises to build production AI systems — full-stack SaaS platforms, hardened MVPs, RAG systems, semantic search, agents, model routing, workflow automation, and secure multi-tenant architecture.
            </p>
          </div>
          <div className="mt-7 flex flex-wrap gap-3">
            <Link href="https://github.com/SA-Ark" className="inline-flex items-center gap-2 rounded-full border border-white/10 px-5 py-3 font-semibold text-white transition hover:border-cyan-400/50">
              <Github className="h-5 w-5" /> SA-Ark
            </Link>
            <Link href="https://www.linkedin.com/in/arkchakrabarti" className="inline-flex items-center gap-2 rounded-full border border-white/10 px-5 py-3 font-semibold text-white transition hover:border-cyan-400/50">
              <Linkedin className="h-5 w-5" /> /in/arkchakrabarti
            </Link>
          </div>
        </Reveal>
      </section>

      <section className="pt-20 md:pt-28">
        <div className="mx-auto max-w-3xl">
          <GitHubActivity />
        </div>
      </section>

      <section className="py-20 md:py-28">
        <SectionHeader eyebrow="Capabilities" title="Technical stack for modern AI products" description="A practical toolkit spanning product interfaces, backend systems, model integration, data infrastructure, security, and evaluation." />
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {techStack.map((group, index) => (
            <Reveal key={group.category} delay={(index % 3) * 90}>
              <div className="h-full rounded-[1.75rem] border border-white/10 bg-white/[0.04] p-6 transition hover:-translate-y-1 hover:border-cyan-400/40 hover:shadow-2xl hover:shadow-cyan-950/40">
                <h2 className="text-2xl font-bold text-white">{group.category}</h2>
                <div className="mt-5 flex flex-wrap gap-2">
                  {group.items.map((item) => <Pill key={item}>{item}</Pill>)}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="pb-20 md:pb-28">
        <SectionHeader eyebrow="Experience" title="A timeline built around reliable AI systems" />
        <div className="mx-auto max-w-3xl">
          {timeline.map((item, index) => (
            <Reveal key={item.title} delay={index * 100}>
              <div className="relative border-l border-white/10 pb-10 pl-8 last:pb-0">
                <div className="absolute -left-5 top-0 flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-[#0a0a0a] text-cyan-200">
                  {index === 0 ? <Sparkles className="h-5 w-5" /> : index === 1 ? <ShieldCheck className="h-5 w-5" /> : <GraduationCap className="h-5 w-5" />}
                </div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">{item.meta}</p>
                <h3 className="mt-2 text-2xl font-bold text-white">{item.title}</h3>
                <p className="mt-3 text-base text-zinc-400">{item.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </div>
  );
}
