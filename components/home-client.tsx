"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Bot, Boxes, Building2, Cpu, Expand, Hammer, Rocket, SearchCheck, Star, Workflow, X, Zap } from "lucide-react";
import dynamic from "next/dynamic";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
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
  { client: "AI Games Academy", role: "Founder", quote: "Built an AI-first coding curriculum from scratch. Kids are building real Minecraft mods and Roblox games using AI in their first session." },
  { client: "Ark Mail", role: "Self-Hosted", quote: "Replaced Mailgun with a Rust-built email service. SPF, DKIM, warmup scheduling, AI reply classification — zero vendor lock-in." },
  { client: "Ark Search", role: "40 Sources", quote: "One query searches SEC EDGAR, Semantic Scholar, Congress records, and 37 more sources simultaneously. Research that took hours now takes seconds." },
  { client: "Ark Memory", role: "61K Memories", quote: "Every decision, lesson, and architecture choice is semantically searchable. The knowledge graph shows connections I never noticed." },
  { client: "Ark Clipper", role: "Video AI", quote: "Feed it a 2-hour video, get viral clips in seconds. AI virality scoring, auto-captions, platform-optimized exports for TikTok, Shorts, and Reels." },
  { client: "Muhurta Clock", role: "Vedic Science", quote: "Real astronomical calculations for every muhurta — not static tables. Accurate sunrise/sunset for any location on Earth, updating in real time." },
];

const metrics = ["8 Production Systems", "61K+ Memories Indexed", "40 Search Sources", "4 LLM Proxy Instances"];

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

const staggerSlow = {
  hidden: {},
  show: { transition: { staggerChildren: 0.18 } },
};

const staggerFast = {
  hidden: {},
  show: { transition: { staggerChildren: 0.06 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0 },
};

const fadeLeft = {
  hidden: { opacity: 0, x: -60 },
  show: { opacity: 1, x: 0 },
};

const fadeRight = {
  hidden: { opacity: 0, x: 60 },
  show: { opacity: 1, x: 0 },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.85 },
  show: { opacity: 1, scale: 1 },
};

const flipIn = {
  hidden: { opacity: 0, rotateX: 45, y: 30 },
  show: { opacity: 1, rotateX: 0, y: 0 },
};

const blurIn = {
  hidden: { opacity: 0, filter: "blur(12px)", y: 20 },
  show: { opacity: 1, filter: "blur(0px)", y: 0 },
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

function CaseStudyMockup({ slug, onClick }: { slug: string; onClick: () => void }) {
  const [videoError, setVideoError] = useState(false);
  return (
    <button type="button" onClick={onClick} className="group/vid relative w-full cursor-pointer overflow-hidden rounded-t-[20px] bg-[#0a0a1a]" style={{ aspectRatio: "16/10.5" }}>
      {videoError ? (
        <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-[#0d0d2b] to-[#0a0a1a]">
          <span className="text-sm font-semibold text-zinc-500">Preview unavailable</span>
        </div>
      ) : (
        <video
          src={`/videos/${slug}.mp4`}
          autoPlay
          muted
          loop
          playsInline
          onError={() => setVideoError(true)}
          className="h-full w-full object-cover object-top transition duration-300 group-hover/vid:scale-[1.02] group-hover/vid:brightness-110"
        />
      )}
      <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition duration-300 group-hover/vid:bg-black/30">
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white/20 opacity-0 backdrop-blur-md transition duration-300 group-hover/vid:opacity-100">
          <Expand className="h-6 w-6 text-white" />
        </div>
      </div>
      <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#0f0f1a] to-transparent" />
    </button>
  );
}

function VideoModal({ slug, title, onClose }: { slug: string; title: string; onClose: () => void }) {
  const [videoError, setVideoError] = useState(false);
  const handleKey = useCallback((e: KeyboardEvent) => {
    if (e.key === "Escape") onClose();
  }, [onClose]);

  useEffect(() => {
    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [handleKey]);

  return (
    <motion.div
      className="fixed inset-0 z-[9999] flex items-center justify-center p-4 md:p-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
    >
      <div className="absolute inset-0 bg-black/85 backdrop-blur-sm" onClick={onClose} />
      <motion.div
        className="relative z-10 w-full max-w-6xl"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ type: "spring", stiffness: 200, damping: 25 }}
      >
        <div className="mb-4 flex items-center justify-between">
          <h3 className="text-lg font-bold text-white md:text-xl">{title}</h3>
          <button type="button" onClick={onClose} className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20">
            <X className="h-5 w-5" />
          </button>
        </div>
        <div className="overflow-hidden rounded-2xl border border-white/15 bg-black shadow-2xl shadow-black/50">
          <div className="flex items-center gap-2 border-b border-white/10 bg-white/[0.04] px-4 py-3">
            <span className="h-3 w-3 rounded-full bg-red-400" />
            <span className="h-3 w-3 rounded-full bg-yellow-300" />
            <span className="h-3 w-3 rounded-full bg-green-400" />
          </div>
          <video
            src={`/videos/${slug}.mp4`}
            autoPlay
            muted
            loop
            playsInline
            controls
            onError={() => setVideoError(true)}
            className={`aspect-video w-full${videoError ? " hidden" : ""}`}
          />
          {videoError && (
            <div className="flex aspect-video w-full items-center justify-center bg-[#0a0a1a]">
              <span className="text-sm font-semibold text-zinc-500">Video unavailable</span>
            </div>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}

export function HomeClient() {
  const [activeVideo, setActiveVideo] = useState<{ slug: string; title: string } | null>(null);

  return (
    <>
      <AnimatePresence>
        {activeVideo && (
          <VideoModal slug={activeVideo.slug} title={activeVideo.title} onClose={() => setActiveVideo(null)} />
        )}
      </AnimatePresence>
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
          variants={staggerSlow}
        >
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <motion.div key={service.title} variants={i % 2 === 0 ? fadeLeft : fadeRight} transition={{ type: "spring", stiffness: 80, damping: 18 }} className="h-full">
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
          <motion.div className="relative grid gap-6 md:grid-cols-4" initial="hidden" whileInView="show" viewport={{ once: true, margin: "-80px" }} variants={staggerSlow}>
            {processSteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div key={step.title} variants={flipIn} transition={{ duration: 0.7, delay: index * 0.08 }} style={{ perspective: 800 }} className="glass-card relative ml-14 p-6 md:ml-0 md:text-center">
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
          {metrics.map((metric, i) => (
            <motion.div key={metric} variants={i % 2 === 0 ? fadeLeft : fadeRight} className="glass-card rounded-2xl px-5 py-5 text-center text-lg font-semibold text-white">
              {metric}
            </motion.div>
          ))}
        </motion.div>
      </section>

      <section id="case-studies" className="mx-auto max-w-[1200px] px-5 py-20 md:py-28 lg:px-8">
        <SectionHeader
          eyebrow="Case Studies"
          title="Eight production systems. All real. All mine."
          description="Every project is something I built for myself, my business, or my users. No demos — real tools I use every day."
        />
        <motion.div
          className="grid gap-6 lg:grid-cols-2"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={staggerSlow}
        >
          {caseStudies.map((study, i) => (
            <motion.article
              key={study.slug}
              variants={i % 2 === 0 ? scaleIn : fadeRight}
              transition={{ type: "spring", stiffness: 80, damping: 16 }}
              className="group glass-card gradient-border h-full overflow-hidden rounded-[2rem]"
            >
              <div className={`relative bg-gradient-to-br ${study.palette} p-6`}>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_35%_20%,rgba(255,255,255,0.18),transparent_24%),linear-gradient(to_bottom,transparent,rgba(5,5,16,0.75))]" />
                <div className="relative overflow-hidden rounded-3xl border border-white/15 bg-black/25 shadow-2xl shadow-black/30 backdrop-blur-sm">
                  <div className="flex items-center gap-2 border-b border-white/10 bg-black/30 px-4 py-3">
                    <span className="h-3 w-3 rounded-full bg-red-400" /><span className="h-3 w-3 rounded-full bg-yellow-300" /><span className="h-3 w-3 rounded-full bg-green-400" />
                    <span className="ml-auto rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-white">{study.industry}</span>
                  </div>
                  <CaseStudyMockup slug={study.slug} onClick={() => setActiveVideo({ slug: study.slug, title: study.title })} />
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
                  <Link href={`/case-studies/${study.slug}`} className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 to-violet-500 px-5 py-2.5 text-sm font-bold text-white shadow-lg shadow-cyan-500/20 transition hover:-translate-y-0.5 hover:shadow-cyan-400/30 hover:brightness-110">
                    View Case Study <ArrowRight className="h-4 w-4" />
                  </Link>
                  <Link href={study.liveUrl} className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-white/80 px-5 py-2.5 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-white hover:text-[#050510]">
                    Live Demo <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </section>

      <section id="testimonials" className="mx-auto max-w-[1200px] px-5 pb-20 md:pb-28 lg:px-8">
        <SectionHeader eyebrow="What I Built" title="Real tools, real results" description="Each project solves a problem I actually have. No throwaway demos." />
        <motion.div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3" initial="hidden" whileInView="show" viewport={{ once: true, margin: "-80px" }} variants={staggerFast}>
          {testimonials.map((item) => (
            <motion.div key={item.client} variants={blurIn} transition={{ duration: 0.6 }} className="glass-card gradient-border h-full p-6">
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

      {/* Animated tech showcase */}
      <section className="relative overflow-hidden border-y border-white/10 py-20 md:py-28">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/[0.03] to-transparent" />
        <div className="mx-auto max-w-[1200px] px-5 lg:px-8">
          <motion.div
            className="text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300">Built Different</p>
            <h2 className="text-4xl font-bold text-white md:text-5xl">Systems that scale, not scripts that break</h2>
            <p className="mx-auto mt-5 max-w-2xl text-lg text-[#8888a0]">
              Every project ships with production monitoring, automated testing, CI/CD pipelines, and architecture documentation. No handoff surprises.
            </p>
          </motion.div>

          <div className="mt-16 grid grid-cols-2 gap-4 md:grid-cols-4">
            {[
              { label: "Uptime SLA", value: "99.9%", icon: "🟢" },
              { label: "Avg Deploy Time", value: "< 3 min", icon: "⚡" },
              { label: "Test Coverage", value: "87%+", icon: "✅" },
              { label: "Client Retention", value: "100%", icon: "🔒" },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                className="group relative rounded-2xl border border-white/[0.06] bg-white/[0.04] p-6 text-center backdrop-blur-xl transition hover:border-cyan-400/30 hover:bg-white/[0.07]"
                initial={{ opacity: 0, y: 30, rotateX: 15 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ scale: 1.05, y: -4 }}
                style={{ transformStyle: "preserve-3d" as const }}
              >
                <div className="text-3xl">{stat.icon}</div>
                <div className="mt-3 text-3xl font-bold text-white">{stat.value}</div>
                <div className="mt-1 text-base text-zinc-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="mx-auto mt-16 flex max-w-3xl flex-wrap items-center justify-center gap-3"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {["Next.js", "TypeScript", "Python", "Rust", "PostgreSQL", "Docker", "AWS", "Anthropic Claude", "LangChain", "pgvector", "Redis", "Kubernetes"].map((tech, i) => (
              <motion.span
                key={tech}
                className="rounded-full border border-white/10 bg-white/[0.05] px-4 py-2 text-sm font-semibold text-zinc-300 backdrop-blur-xl transition hover:border-cyan-400/40 hover:text-white"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.4 + i * 0.05 }}
                whileHover={{ scale: 1.1, y: -2 }}
              >
                {tech}
              </motion.span>
            ))}
          </motion.div>
        </div>
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
