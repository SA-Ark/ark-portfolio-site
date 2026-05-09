"use client";

import { motion } from "framer-motion";
import { ArrowRight, Bot, Boxes, Building2, Cpu, Hammer, Rocket, SearchCheck, Star, Workflow, Zap } from "lucide-react";
import dynamic from "next/dynamic";
import Link from "next/link";
import { ParticleHero } from "@/components/particle-hero";
import { OutlineLink, Pill, PrimaryLink, SectionHeader } from "@/components/ui";
import { caseStudies } from "@/lib/case-studies";

const Scene = dynamic(() => import("@/components/scene-3d"), { ssr: false });

const services = [
  {
    icon: Hammer,
    title: "Build",
    description: "Full-Stack SaaS, Concept to Production. Multi-tenant platforms, payments, real-time, AI-integrated.",
  },
  {
    icon: SearchCheck,
    title: "Rescue",
    description: "Production Rescue for AI-Built Products. Your vibe-coded MVP needs hardening. Security, performance, testing, architecture.",
  },
  {
    icon: Bot,
    title: "Integrate AI",
    description: "Measurable AI in Your Existing Product. RAG, semantic search, agents, automation. ROI-driven.",
  },
  {
    icon: Cpu,
    title: "Orchestrate",
    description: "AI Operations at Scale. Multi-agent orchestration, model routing, cost optimization, evaluation, monitoring.",
  },
  {
    icon: Workflow,
    title: "Automate",
    description: "Workflow Automation That Eliminates Hours. Calendar intelligence, email triage, document processing.",
  },
];

const processSteps = [
  { icon: SearchCheck, title: "Discovery", description: "Understand your business, audit existing systems, define success metrics" },
  { icon: Boxes, title: "Architecture", description: "Design the system: tech decisions, data model, AI integration points" },
  { icon: Hammer, title: "Build", description: "Iterative development with weekly demos. Tests, monitoring, documentation included." },
  { icon: Rocket, title: "Deploy", description: "Production deployment, E2E verification, performance optimization, handoff" },
];

const testimonials = [
  { client: "NovaBridge Technologies", role: "CTO", quote: "Arko reduced our admin overhead by 60%. The AI health scoring caught 3 at-risk clients we would have lost." },
  { client: "Online Retailer", role: "Founder", quote: "We went from Lighthouse 32 to 98. Our conversion rate jumped 35% after the AI search integration." },
  { client: "Beacon Learning", role: "VP Product", quote: "The adaptive engine improved test scores by 40%. Our students are studying 3x longer with the AI tutor." },
  { client: "Meridian Consulting", role: "Managing Partner", quote: "We reclaimed 3 hours per day per partner. The daily brief alone is worth the entire engagement." },
  { client: "Vaulted Financial", role: "Head of Research", quote: "Research that took 4 hours now takes 30 seconds. The signal engine backtested at 67% accuracy." },
  { client: "Silverstone Legal", role: "Senior Partner", quote: "Contract review went from 3 hours to 10 minutes. We haven't missed a deadline since." },
];

const metrics = ["6+ Production Apps Deployed", "50K+ Documents Processed", "94% RAG Accuracy", "40% LLM Cost Reduction"];

const techIconMap: Record<string, string> = {
  "Next.js": "N",
  TypeScript: "TS",
  PostgreSQL: "PG",
  pgvector: "PV",
  Claude: "AI",
  Stripe: "$",
  RBAC: "RB",
  WebSocket: "WS",
  Redis: "RD",
  Cloudflare: "CF",
  FastAPI: "FA",
  Embeddings: "EM",
  Analytics: "AN",
  "Calendar APIs": "CA",
  Cron: "CR",
  Email: "ML",
  TimescaleDB: "TS",
  Charts: "D3",
  Workers: "WK",
  Audit: "AU",
};

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0 },
};

const codeLines = [
  [<span key="kw" className="text-cyan-300">const</span>, " ai = ", <span key="await" className="text-cyan-300">await</span>, " orchestrate({"],
  ["  models: [", <span key="c" className="text-emerald-300">{"'claude-4'"}</span>, ", ", <span key="g" className="text-emerald-300">{"'gpt-5'"}</span>, "],"],
  ["  routing: ", <span key="route" className="text-emerald-300">{"'cost-optimized'"}</span>, ","],
  ["  guardrails: ", <span key="bool" className="text-violet-300">true</span>, ","],
  ["})"],
  [<span key="comment" className="text-zinc-500">{"// 94% accuracy, 40% cost reduction"}</span>],
];

function CodeSnippet() {
  return (
    <motion.div variants={fadeUp} transition={{ duration: 0.6, delay: 0.2 }} className="mt-10 max-w-2xl overflow-hidden rounded-3xl border border-white/10 bg-[#0d1117] shadow-2xl shadow-cyan-950/40">
      <div className="flex items-center gap-2 border-b border-white/10 bg-white/[0.04] px-5 py-4">
        <span className="h-3 w-3 rounded-full bg-red-400" />
        <span className="h-3 w-3 rounded-full bg-yellow-300" />
        <span className="h-3 w-3 rounded-full bg-green-400" />
        <span className="ml-3 text-sm font-medium text-zinc-500">orchestrate.ts</span>
      </div>
      <pre className="overflow-x-auto p-5 text-base leading-7 text-zinc-200 md:p-6"><code>
        {codeLines.map((line, index) => (
          <motion.div
            key={index}
            className="min-h-7"
            initial={{ opacity: 0, clipPath: "inset(0 100% 0 0)" }}
            animate={{ opacity: 1, clipPath: "inset(0 0% 0 0)" }}
            transition={{ duration: 0.48, delay: 0.55 + index * 0.34, ease: "easeOut" }}
          >
            {line}
            {index === codeLines.length - 1 ? <motion.span className="ml-1 inline-block h-5 w-2 translate-y-1 bg-cyan-300" animate={{ opacity: [0, 1, 1, 0] }} transition={{ repeat: Infinity, duration: 1 }} /> : null}
          </motion.div>
        ))}
      </code></pre>
    </motion.div>
  );
}

function CaseStudyMockup({ slug }: { slug: string }) {
  if (slug === "ecommerce") {
    return (
      <div className="grid h-full grid-cols-[0.8fr_1.2fr] gap-3 p-4">
        <div className="space-y-3 rounded-2xl bg-white/10 p-3"><div className="h-20 rounded-xl bg-cyan-300/30" /><div className="h-3 rounded bg-white/30" /><div className="h-3 w-2/3 rounded bg-white/20" /><div className="mt-4 h-9 rounded-full bg-emerald-300/50" /></div>
        <div className="grid grid-cols-2 gap-3">{[0, 1, 2, 3].map((item) => <div key={item} className="rounded-2xl bg-black/25 p-3"><div className="h-16 rounded-xl bg-white/15" /><div className="mt-3 h-2 rounded bg-white/30" /><div className="mt-2 h-2 w-1/2 rounded bg-cyan-300/40" /></div>)}</div>
      </div>
    );
  }
  if (slug === "portal") {
    return (
      <div className="grid h-full grid-cols-[0.45fr_1fr] gap-3 p-4">
        <div className="space-y-3 rounded-2xl bg-black/25 p-3">{[0, 1, 2, 3, 4].map((item) => <div key={item} className="h-7 rounded-xl bg-white/15" />)}</div>
        <div className="space-y-3"><div className="grid grid-cols-3 gap-3">{[0, 1, 2].map((item) => <div key={item} className="h-16 rounded-2xl bg-cyan-300/20" />)}</div><div className="h-28 rounded-2xl bg-white/10" /><div className="h-12 rounded-2xl bg-emerald-300/20" /></div>
      </div>
    );
  }
  if (slug === "learn") {
    return (
      <div className="grid h-full grid-cols-[1fr_0.7fr] gap-3 p-4"><div className="space-y-3 rounded-2xl bg-black/25 p-4"><div className="h-5 w-3/5 rounded bg-white/30" /><div className="h-24 rounded-2xl bg-cyan-300/20" /><div className="grid grid-cols-3 gap-2">{[0, 1, 2].map((item) => <div key={item} className="h-14 rounded-xl bg-violet-300/20" />)}</div></div><div className="rounded-2xl bg-white/10 p-3"><div className="mx-auto h-24 w-24 rounded-full border-8 border-emerald-300/50" /><div className="mt-5 space-y-2">{[0, 1, 2].map((item) => <div key={item} className="h-3 rounded bg-white/20" />)}</div></div></div>
    );
  }
  if (slug === "calendar") {
    return (
      <div className="grid h-full grid-cols-5 gap-2 p-4">{[0, 1, 2, 3, 4].map((day) => <div key={day} className="rounded-2xl bg-black/20 p-2"><div className="mb-3 h-3 rounded bg-white/20" />{[0, 1, 2].map((item) => <div key={item} className={`mb-2 rounded-lg ${item === 1 ? "h-16 bg-cyan-300/25" : "h-9 bg-white/12"}`} />)}</div>)}</div>
    );
  }
  if (slug === "markets") {
    return (
      <div className="grid h-full grid-cols-[1fr_0.8fr] gap-3 p-4"><div className="rounded-2xl bg-black/25 p-4"><svg viewBox="0 0 220 130" className="h-full w-full"><polyline points="0,95 28,82 55,88 82,42 110,52 138,25 170,48 205,18" fill="none" stroke="#22c55e" strokeWidth="6" strokeLinecap="round" /><polyline points="0,112 220,112" stroke="rgba(255,255,255,0.15)" /></svg></div><div className="space-y-3">{[0, 1, 2].map((item) => <div key={item} className="rounded-2xl bg-white/10 p-3"><div className="h-3 rounded bg-white/25" /><div className="mt-3 h-8 rounded-xl bg-emerald-300/20" /></div>)}</div></div>
    );
  }
  return (
    <div className="grid h-full grid-cols-[0.8fr_1fr] gap-3 p-4"><div className="space-y-3 rounded-2xl bg-black/25 p-3">{[0, 1, 2, 3].map((item) => <div key={item} className="h-10 rounded-xl bg-violet-300/20" />)}</div><div className="rounded-2xl bg-white/10 p-4"><div className="h-16 rounded-2xl bg-cyan-300/20" /><div className="mt-4 space-y-2">{[0, 1, 2, 3].map((item) => <div key={item} className="h-3 rounded bg-white/20" />)}</div><div className="mt-5 h-10 rounded-full bg-emerald-300/30" /></div></div>
  );
}

export function HomeClient() {
  return (
    <>
      <section className="mesh-bg relative -mt-24 overflow-hidden pt-24">
        <ParticleHero />
        <Scene />
        <div className="absolute inset-0 z-[1] bg-[linear-gradient(to_bottom,rgba(5,5,16,0.2),#050510)]" />
        <div className="absolute left-1/2 top-32 z-[1] h-64 w-64 -translate-x-1/2 rounded-full bg-cyan-400/20 blur-[100px]" />
        <motion.div
          className="relative z-10 mx-auto flex min-h-screen max-w-[1200px] flex-col justify-center px-5 py-20 lg:px-8"
          initial="hidden"
          animate="show"
          variants={container}
        >
          <motion.div variants={fadeUp} transition={{ duration: 0.6 }} className="max-w-5xl">
            <Pill>Premium AI product engineering for teams that need outcomes, not experiments</Pill>
            <h1 className="shimmer-text mt-8 text-6xl font-extrabold leading-[0.92] md:text-8xl lg:text-9xl">Arko</h1>
            <p className="mt-6 text-3xl font-bold leading-tight text-white md:text-5xl">AI Product Engineer &amp; Full-Stack Architect</p>
            <p className="mt-7 max-w-3xl text-xl text-zinc-300 md:text-2xl">
              I build production AI systems that deliver measurable ROI. From rescue to revenue.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <PrimaryLink href="#case-studies">View Case Studies</PrimaryLink>
              <OutlineLink href="/contact">Let&apos;s Talk</OutlineLink>
            </div>
          </motion.div>
          <CodeSnippet />
        </motion.div>
      </section>

      <section id="services" className="mx-auto max-w-[1200px] px-5 py-20 md:py-28 lg:px-8">
        <SectionHeader
          eyebrow="Services"
          title="Five ways to turn software ambiguity into shipped systems"
          description="Engagements are structured like a professional services firm: diagnose, architect, build, measure, and harden."
        />
        <motion.div
          className="grid gap-5 md:grid-cols-2 lg:grid-cols-5"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={container}
        >
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <motion.div key={service.title} variants={fadeUp} transition={{ type: "spring", stiffness: 100, damping: 15 }} className="h-full">
                <div className="glass-card gradient-border tilt-3d h-full p-6">
                  <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-500/25 to-cyan-400/25 text-cyan-200 ring-1 ring-white/10">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">{service.title}</h3>
                  <p className="mt-4 text-base text-[#8888a0]">{service.description}</p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </section>

      <section id="how-i-work" className="mx-auto max-w-[1200px] px-5 pb-20 md:pb-28 lg:px-8">
        <SectionHeader eyebrow="How I Work" title="A clear path from ambiguity to production" description="Every engagement moves through the same disciplined loop: discover, architect, build, deploy." />
        <div className="relative">
          <motion.div className="absolute left-6 top-0 h-full w-px bg-gradient-to-b from-cyan-400 via-violet-400 to-transparent md:left-[12.5%] md:top-12 md:h-px md:w-[75%]" initial={{ scaleY: 0, scaleX: 0 }} whileInView={{ scaleY: 1, scaleX: 1 }} viewport={{ once: true }} transition={{ duration: 1.1, ease: "easeOut" }} />
          <motion.div className="relative grid gap-6 md:grid-cols-4" initial="hidden" whileInView="show" viewport={{ once: true, margin: "-80px" }} variants={container}>
            {processSteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div key={step.title} variants={fadeUp} transition={{ duration: 0.6, delay: index * 0.05 }} className="glass-card relative ml-14 p-6 md:ml-0 md:text-center">
                  <div className="absolute -left-14 top-6 flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-400/35 bg-[#050510] text-cyan-200 shadow-[0_0_30px_rgba(0,212,255,0.18)] md:relative md:left-auto md:top-auto md:mx-auto md:mb-6">
                    <Icon className="h-6 w-6" />
                  </div>
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">Step {index + 1}</p>
                  <h3 className="mt-3 text-2xl font-bold text-white">{step.title}</h3>
                  <p className="mt-4 text-base text-zinc-400">{step.description}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/[0.035] backdrop-blur-xl">
        <motion.div
          className="mx-auto grid max-w-[1200px] gap-5 px-5 py-10 md:grid-cols-4 lg:px-8"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={container}
        >
          {metrics.map((metric) => (
            <motion.div key={metric} variants={fadeUp} className="glass-card rounded-2xl px-5 py-5 text-center text-lg font-semibold text-white">
              {metric}
            </motion.div>
          ))}
        </motion.div>
      </section>

      <section id="case-studies" className="mx-auto max-w-[1200px] px-5 py-20 md:py-28 lg:px-8">
        <SectionHeader
          eyebrow="Case Studies"
          title="Six production apps. Six business outcomes."
          description="Each demo represents a realistic consulting engagement: measurable ROI, hardened architecture, and AI features that earn their place."
        />
        <motion.div
          className="grid gap-6 lg:grid-cols-2"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={container}
        >
          {caseStudies.map((study) => (
            <motion.article
              key={study.slug}
              variants={fadeUp}
              transition={{ type: "spring", stiffness: 100, damping: 15 }}
              className="group glass-card gradient-border h-full overflow-hidden rounded-[2rem]"
            >
              <div className={`relative h-72 bg-gradient-to-br ${study.palette} p-5`}>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_35%_20%,rgba(255,255,255,0.18),transparent_24%),linear-gradient(to_bottom,transparent,rgba(5,5,16,0.75))]" />
                <div className="relative h-full overflow-hidden rounded-3xl border border-white/15 bg-black/25 shadow-2xl shadow-black/30 backdrop-blur-sm">
                  <div className="flex items-center gap-2 border-b border-white/10 bg-black/30 px-4 py-3">
                    <span className="h-3 w-3 rounded-full bg-red-400" /><span className="h-3 w-3 rounded-full bg-yellow-300" /><span className="h-3 w-3 rounded-full bg-green-400" />
                    <span className="ml-auto rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-white">{study.industry}</span>
                  </div>
                  <CaseStudyMockup slug={study.slug} />
                </div>
              </div>
              <div className="p-6 md:p-8">
                <div className="mb-4 flex items-center justify-between gap-4">
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-400">{study.client}</p>
                  <Building2 className="h-6 w-6 text-white/40" />
                </div>
                <h3 className="text-2xl font-bold text-white">{study.title}</h3>
                <p className="mt-3 text-base text-[#8888a0]">{study.description}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {study.badges.map((badge) => <Pill key={badge}>{badge}</Pill>)}
                </div>
                <div className="mt-6 flex flex-wrap gap-2">
                  {study.stack.slice(0, 6).map((tech) => (
                    <span key={tech} title={tech} className="flex h-9 min-w-9 items-center justify-center rounded-full border border-white/10 bg-black/35 px-2 text-xs font-bold text-zinc-300">
                      {techIconMap[tech] ?? tech.slice(0, 2).toUpperCase()}
                    </span>
                  ))}
                </div>
                <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <Link href={`/case-studies/${study.slug}`} className="inline-flex items-center gap-2 font-semibold text-cyan-300 transition hover:text-cyan-100">
                    View Case Study <ArrowRight className="h-4 w-4" />
                  </Link>
                  <Link href={study.liveUrl} className="inline-flex items-center gap-2 font-semibold text-white transition hover:text-violet-200">
                    Live Demo <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </section>

      <section id="testimonials" className="mx-auto max-w-[1200px] px-5 pb-20 md:pb-28 lg:px-8">
        <SectionHeader eyebrow="Testimonials" title="Client words from finished systems" description="Fictionalized testimonials from the portfolio case-study clients, focused on measurable outcomes." />
        <motion.div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3" initial="hidden" whileInView="show" viewport={{ once: true, margin: "-80px" }} variants={container}>
          {testimonials.map((item) => (
            <motion.div key={item.client} variants={fadeUp} className="glass-card gradient-border h-full p-6">
              <div className="mb-5 flex gap-1 text-amber-300" aria-label="5 star rating">
                {[0, 1, 2, 3, 4].map((star) => <Star key={star} className="h-5 w-5 fill-current" />)}
              </div>
              <blockquote className="text-lg leading-relaxed text-zinc-200">“{item.quote}”</blockquote>
              <div className="mt-6 border-t border-white/10 pt-5">
                <p className="text-xl font-bold text-white">{item.client}</p>
                <p className="mt-1 text-base text-cyan-300">{item.role}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      <section className="mx-auto max-w-[1200px] px-5 pb-20 md:pb-28 lg:px-8">
        <motion.div
          className="gradient-border rounded-[2rem] border border-white/10 bg-gradient-to-br from-cyan-400/15 via-violet-500/10 to-transparent p-8 backdrop-blur-xl md:p-12"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-cyan-200">
                <Zap className="h-6 w-6" />
              </div>
              <h2 className="text-4xl font-bold text-white">Ready to make AI useful in production?</h2>
              <p className="mt-4 max-w-2xl text-lg text-zinc-300">Bring a broken MVP, a complex workflow, or an ambitious SaaS idea. I&apos;ll help turn it into a fast, secure, measurable system.</p>
            </div>
            <PrimaryLink href="/contact">Start a Project</PrimaryLink>
          </div>
        </motion.div>
      </section>
    </>
  );
}
