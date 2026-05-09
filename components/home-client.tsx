"use client";

import { motion } from "framer-motion";
import { ArrowRight, Bot, Building2, Cpu, Hammer, SearchCheck, Workflow, Zap } from "lucide-react";
import Link from "next/link";
import { ParticleHero } from "@/components/particle-hero";
import { OutlineLink, Pill, PrimaryLink, SectionHeader } from "@/components/ui";
import { caseStudies } from "@/lib/case-studies";

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

export function HomeClient() {
  return (
    <>
      <section className="mesh-bg relative -mt-24 overflow-hidden pt-24">
        <ParticleHero />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(5,5,16,0.2),#050510)]" />
        <div className="absolute left-1/2 top-32 h-64 w-64 -translate-x-1/2 rounded-full bg-cyan-400/20 blur-[100px]" />
        <motion.div
          className="relative mx-auto flex min-h-screen max-w-[1200px] flex-col justify-center px-5 py-20 lg:px-8"
          initial="hidden"
          animate="show"
          variants={container}
        >
          <motion.div variants={fadeUp} transition={{ duration: 0.6 }} className="max-w-5xl">
            <Pill>Premium AI product engineering for teams that need outcomes, not experiments</Pill>
            <h1 className="shimmer-text mt-8 text-6xl font-extrabold leading-[0.92] md:text-8xl lg:text-9xl">Ark Chakrabarti</h1>
            <p className="mt-6 text-3xl font-bold leading-tight text-white md:text-5xl">AI Product Engineer &amp; Full-Stack Architect</p>
            <p className="mt-7 max-w-3xl text-xl text-zinc-300 md:text-2xl">
              I build production AI systems that deliver measurable ROI. From rescue to revenue.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <PrimaryLink href="#case-studies">View Case Studies</PrimaryLink>
              <OutlineLink href="/contact">Let&apos;s Talk</OutlineLink>
            </div>
          </motion.div>
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
              <div className={`relative h-64 bg-gradient-to-br ${study.palette} p-6`}>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_35%_20%,rgba(255,255,255,0.18),transparent_24%),linear-gradient(to_bottom,transparent,rgba(5,5,16,0.75))]" />
                <div className="relative flex h-full flex-col justify-between rounded-3xl border border-white/15 bg-black/25 p-5 backdrop-blur-sm">
                  <div className="flex items-center justify-between">
                    <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-white">{study.industry}</span>
                    <Building2 className="h-6 w-6 text-white/70" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-300">{study.client}</p>
                    <h3 className="mt-2 text-3xl font-bold text-white">{study.shortTitle}</h3>
                  </div>
                </div>
              </div>
              <div className="p-6 md:p-8">
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
