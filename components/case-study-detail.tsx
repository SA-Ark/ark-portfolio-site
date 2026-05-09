"use client";

import { AnimatePresence, motion, useInView } from "framer-motion";
import { ArrowRight, CheckCircle2, ChevronDown, ExternalLink } from "lucide-react";
import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import type { CaseStudy, ResultMetric } from "@/lib/case-studies";
import { Pill, PrimaryLink } from "@/components/ui";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0 },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09 } },
};

const sectionLinks = [
  ["metrics", "Key Metrics"],
  ["challenge", "The Challenge"],
  ["decisions", "Technology Decisions"],
  ["process", "Build Process"],
  ["solutions", "Challenges & Solutions"],
  ["ai", "AI Deep Dive"],
  ["results", "Results"],
  ["architecture", "Architecture"],
  ["stack", "Tech Stack"],
] as const;

const atsNarrative =
  "This production engagement blended Python service patterns with TypeScript, React, and Next.js delivery, using SQL and PostgreSQL as the system of record while AI Integration stayed grounded in observable business workflows. The architecture considered LLM behavior, RAG retrieval, LangChain and LangGraph-style orchestration, PyTorch-compatible Machine Learning and NLP evaluation methods, OpenAI API and Anthropic API model routing, Vector Databases with pgvector Embeddings, Prompt Engineering, Function Calling, and Guardrails/AI Safety so AI Agents could assist users without becoming an unreviewed black box. Where appropriate, FastAPI, Rust services, Docker, Kubernetes, AWS deployment patterns, MLOps, CI/CD, Monitoring, Cost Optimization, Fine-Tuning (LoRA/PEFT), MCP integrations, Multi-Agent Orchestration, AI Evaluation/Evals, OWASP review, code remediation, application modernization, production hardening, technical debt reduction, and vibe coding rescue practices were used to convert fragile prototypes into reliable Production Systems.";

function numericValue(value: string) {
  const match = value.replace(/,/g, "").match(/-?\d+(?:\.\d+)?/);
  return match ? Number(match[0]) : null;
}

function metricSuffix(value: string) {
  if (value.includes("%")) return "%";
  if (value.toLowerCase().includes("ms")) return "ms";
  if (value.toLowerCase().includes("x")) return "x";
  return "";
}

function improvementBadge(metric: ResultMetric) {
  const before = numericValue(metric.before);
  const after = numericValue(metric.after);
  if (before !== null && after !== null && before !== 0) {
    const delta = Math.round(((after - before) / Math.abs(before)) * 100);
    return `${delta > 0 ? "+" : ""}${delta}%`;
  }
  if (metric.after.includes("+")) return metric.after;
  if (metric.after.includes("-")) return metric.after;
  return "Improved";
}

function CountUpMetric({ metric, index }: { metric: ResultMetric; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const target = numericValue(metric.after) ?? numericValue(metric.before) ?? index + 1;
  const start = numericValue(metric.before) ?? 0;
  const suffix = metricSuffix(metric.after);
  const [value, setValue] = useState(start);

  useEffect(() => {
    if (!inView) return;
    let frame = 0;
    let raf = 0;
    const total = 90;
    const tick = () => {
      frame += 1;
      const progress = Math.min(frame / total, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(start + (target - start) * eased);
      if (progress < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, start, target]);

  const display = Number.isInteger(target) ? Math.round(value).toString() : value.toFixed(1);

  return (
    <motion.div
      ref={ref}
      variants={fadeUp}
      className="rounded-[1.75rem] border border-white/10 bg-white/[0.055] p-6 shadow-2xl shadow-black/20"
    >
      <p className="text-sm font-semibold uppercase tracking-[0.18em] text-zinc-400">{metric.metric}</p>
      <div className="mt-4 flex items-end gap-3">
        <span className="gradient-text text-5xl font-bold leading-none">{display}{suffix}</span>
        <span className="pb-1 text-base text-zinc-500">from {metric.before}</span>
      </div>
      <p className="mt-4 text-base text-emerald-200">After: {metric.after}</p>
    </motion.div>
  );
}

function Section({ id, title, children }: { id: string; title: string; children: React.ReactNode }) {
  return (
    <motion.section
      id={id}
      className="scroll-mt-28 py-20 md:py-24"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
      variants={stagger}
    >
      <motion.div variants={fadeUp} className="mb-9 h-px w-full bg-gradient-to-r from-transparent via-blue-400/60 to-transparent" />
      <motion.h2 variants={fadeUp} className="mb-10 text-4xl font-bold text-white md:text-5xl">
        {title}
      </motion.h2>
      {children}
    </motion.section>
  );
}

function ChallengeAccordion({ study }: { study: CaseStudy }) {
  const [open, setOpen] = useState(0);
  return (
    <div className="space-y-5">
      {study.challenges.map((item, index) => (
        <motion.div key={item.problem} variants={fadeUp} className="overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/[0.045]">
          <button
            type="button"
            className="flex w-full items-start justify-between gap-5 p-6 text-left transition hover:bg-white/[0.035]"
            onClick={() => setOpen((value) => (value === index ? -1 : index))}
          >
            <span className="text-2xl font-bold leading-tight text-white">{item.problem}</span>
            <ChevronDown className={`mt-1 h-6 w-6 flex-none text-zinc-400 transition ${open === index ? "rotate-180" : ""}`} />
          </button>
          <AnimatePresence initial={false}>
            {open === index ? (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                <div className="grid gap-4 border-t border-white/10 p-6 md:grid-cols-3">
                  <div className="rounded-2xl border border-red-400/20 bg-red-500/[0.06] p-5">
                    <p className="text-sm font-semibold uppercase tracking-[0.18em] text-red-300">Impact</p>
                    <p className="mt-3 text-base text-zinc-300">{item.impact}</p>
                  </div>
                  <div className="rounded-2xl border border-cyan-400/20 bg-cyan-500/[0.06] p-5">
                    <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-300">Solution</p>
                    <p className="mt-3 text-base text-zinc-300">{item.solution}</p>
                  </div>
                  <div className="rounded-2xl border border-emerald-400/20 bg-emerald-500/[0.06] p-5">
                    <p className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-300">Result</p>
                    <p className="mt-3 text-base text-zinc-300">{item.result}</p>
                  </div>
                </div>
              </motion.div>
            ) : null}
          </AnimatePresence>
        </motion.div>
      ))}
    </div>
  );
}

function AiFlipCards({ study }: { study: CaseStudy }) {
  return (
    <div className="grid gap-6 lg:grid-cols-2">
      {study.aiFeatures.map((feature) => (
        <motion.div key={feature.feature} variants={fadeUp} className="group min-h-80 perspective-card">
          <div className="relative h-full min-h-80 rounded-[1.75rem] transition-transform duration-500 preserve-3d group-hover:rotate-y-180">
            <div className="absolute inset-0 rounded-[1.75rem] border border-cyan-400/20 bg-cyan-500/[0.06] p-6 backface-hidden">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-200">Business impact</p>
              <h3 className="mt-4 text-3xl font-bold text-white">{feature.feature}</h3>
              <p className="mt-5 text-base text-zinc-300">{feature.business}</p>
              <p className="mt-6 rounded-2xl border border-emerald-400/20 bg-emerald-500/[0.06] p-4 text-base font-semibold text-emerald-100">{feature.impact}</p>
            </div>
            <div className="absolute inset-0 rotate-y-180 rounded-[1.75rem] border border-purple-400/20 bg-purple-500/[0.08] p-6 backface-hidden">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-purple-200">Architecture + evals</p>
              <p className="mt-5 text-base text-zinc-200">{feature.architecture}</p>
              <p className="mt-5 text-base text-zinc-400">Evaluation: {feature.evaluation}</p>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

function ResultsTable({ study }: { study: CaseStudy }) {
  return (
    <div className="overflow-hidden rounded-3xl border border-white/10">
      <div className="grid grid-cols-3 border-b border-white/10 bg-white/[0.06]">
        {["Metric", "Before", "After"].map((heading) => (
          <div key={heading} className="p-4 text-sm font-semibold uppercase tracking-[0.18em] text-zinc-400">{heading}</div>
        ))}
      </div>
      {study.results.map((metric, index) => {
        const amount = Math.min(Math.max(Math.abs(numericValue(metric.after) ?? 70), 12), 100);
        return (
          <motion.div key={metric.metric} variants={fadeUp} className="grid grid-cols-1 border-b border-white/10 last:border-b-0 md:grid-cols-3">
            <div className="p-4 font-semibold text-white">{metric.metric}</div>
            <div className="p-4 text-zinc-400">{metric.before}</div>
            <div className="p-4">
              <div className="mb-2 flex items-center justify-between gap-4">
                <span className="text-lg font-bold text-emerald-200">{metric.after}</span>
                <span className="rounded-full border border-emerald-400/20 bg-emerald-500/[0.08] px-3 py-1 text-xs font-bold text-emerald-200">{improvementBadge(metric)}</span>
              </div>
              <div className="h-2 overflow-hidden rounded-full bg-white/10">
                <motion.div
                  className="h-full rounded-full bg-gradient-to-r from-emerald-400 to-blue-400"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${amount}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, delay: index * 0.08 }}
                />
              </div>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}

function ArchitectureDiagram() {
  const nodes = [
    { label: "Frontend", color: "#00d4ff", sub: "Next.js UI" },
    { label: "API", color: "#7c3aed", sub: "Routes + auth" },
    { label: "Database", color: "#22c55e", sub: "PostgreSQL" },
    { label: "AI", color: "#ec4899", sub: "RAG + agents" },
    { label: "External", color: "#f59e0b", sub: "SaaS APIs" },
  ];
  return (
    <motion.div variants={fadeUp} className="rounded-[2rem] border border-white/10 bg-black/45 p-6">
      <svg viewBox="0 0 1000 300" role="img" aria-label="Architecture diagram showing frontend, API, database, AI, and external services" className="h-auto w-full overflow-visible">
        <defs>
          <linearGradient id="flow" x1="0" x2="1">
            <stop offset="0%" stopColor="#00d4ff" />
            <stop offset="50%" stopColor="#7c3aed" />
            <stop offset="100%" stopColor="#ec4899" />
          </linearGradient>
          <marker id="arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
            <path d="M 0 0 L 10 5 L 0 10 z" fill="#00d4ff" />
          </marker>
        </defs>
        {nodes.map((node, index) => {
          const x = 40 + index * 190;
          return (
            <g key={node.label}>
              <rect x={x} y="92" width="150" height="108" rx="22" fill="rgba(255,255,255,0.055)" stroke={node.color} strokeOpacity="0.72" strokeWidth="2" />
              <circle cx={x + 75} cy="118" r="8" fill={node.color} opacity="0.9" />
              <text x={x + 75} y="152" textAnchor="middle" fill="#fafafa" className="text-base font-semibold">{node.label}</text>
              <text x={x + 75} y="176" textAnchor="middle" fill="rgba(255,255,255,0.58)" className="text-sm">{node.sub}</text>
            </g>
          );
        })}
        {[0, 1, 2, 3].map((index) => {
          const x1 = 190 + index * 190;
          const x2 = 230 + index * 190;
          return (
            <motion.path
              key={index}
              d={`M ${x1} 146 C ${x1 + 14} 122, ${x2 - 14} 122, ${x2} 146`}
              fill="none"
              stroke="url(#flow)"
              strokeWidth="4"
              strokeLinecap="round"
              strokeDasharray="10 12"
              markerEnd="url(#arrow)"
              className="architecture-arrow"
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: index * 0.18 }}
            />
          );
        })}
      </svg>
    </motion.div>
  );
}

function EcommerceSplitComparison({ study }: { study: CaseStudy }) {
  if (study.slug !== "ecommerce") return null;
  const rows = [
    { label: "Lighthouse", before: "32", after: "98", beforePct: 32, afterPct: 98 },
    { label: "Search conversion", before: "Baseline", after: "+35%", beforePct: 42, afterPct: 82 },
    { label: "Support tickets", before: "High", after: "-60%", beforePct: 86, afterPct: 34 },
    { label: "Product load", before: "8.2s", after: "1.1s", beforePct: 88, afterPct: 18 },
  ];

  return (
    <motion.div variants={fadeUp} className="mb-8 overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04]">
      <div className="relative grid gap-px bg-white/10 md:grid-cols-2">
        <div className="bg-red-500/[0.08] p-6 md:p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-red-300">Before</p>
          <h3 className="mt-3 text-3xl font-bold text-white">Slow, fragile storefront</h3>
          <div className="mt-6 space-y-5">
            {rows.map((row, index) => (
              <div key={row.label}>
                <div className="mb-2 flex items-center justify-between text-base"><span className="text-zinc-300">{row.label}</span><span className="font-bold text-red-200">{row.before}</span></div>
                <div className="h-2 overflow-hidden rounded-full bg-black/35">
                  <motion.div className="h-full rounded-full bg-red-400/80" initial={{ width: 0 }} whileInView={{ width: `${row.beforePct}%` }} viewport={{ once: true }} transition={{ duration: 0.9, delay: index * 0.07 }} />
                </div>
              </div>
            ))}
          </div>
        </div>
        <motion.div aria-hidden="true" className="absolute bottom-0 left-1/2 top-0 hidden w-1 -translate-x-1/2 bg-gradient-to-b from-cyan-300 via-white to-violet-400 shadow-[0_0_30px_rgba(0,212,255,0.55)] md:block" initial={{ scaleY: 0 }} whileInView={{ scaleY: 1 }} viewport={{ once: true }} transition={{ duration: 1.1, ease: "easeOut" }} />
        <div className="bg-emerald-500/[0.08] p-6 md:p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-300">After</p>
          <h3 className="mt-3 text-3xl font-bold text-white">Fast, AI-assisted revenue path</h3>
          <div className="mt-6 space-y-5">
            {rows.map((row, index) => (
              <div key={row.label}>
                <div className="mb-2 flex items-center justify-between text-base"><span className="text-zinc-300">{row.label}</span><span className="font-bold text-emerald-200">{row.after}</span></div>
                <div className="h-2 overflow-hidden rounded-full bg-black/35">
                  <motion.div className="h-full rounded-full bg-gradient-to-r from-emerald-400 to-cyan-300" initial={{ width: 0 }} whileInView={{ width: `${row.afterPct}%` }} viewport={{ once: true }} transition={{ duration: 0.9, delay: index * 0.07 + 0.1 }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}


function readingTimeForStudy(study: CaseStudy) {
  const text = [
    study.title,
    study.description,
    ...study.challenge,
    ...study.decisions.flatMap((item) => [item.decision, item.choice, item.alternatives, item.why]),
    ...study.phases.flatMap((item) => [item.title, item.description]),
    ...study.challenges.flatMap((item) => [item.problem, item.impact, item.solution, item.result]),
    ...study.aiFeatures.flatMap((item) => [item.feature, item.business, item.architecture, item.evaluation, item.impact]),
    ...study.results.flatMap((item) => [item.metric, item.before, item.after]),
    study.architecture,
    study.stackSummary,
  ].join(" ");
  const words = text.trim().split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.ceil(words / 200));
}

export function CaseStudyDetail({ study }: { study: CaseStudy }) {
  const [activeSection, setActiveSection] = useState<string>(sectionLinks[0][0]);
  const readingTime = useMemo(() => readingTimeForStudy(study), [study]);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    sectionLinks.forEach(([id]) => {
      const element = document.getElementById(id);
      if (!element) return;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id);
        },
        { rootMargin: "-10% 0px -55% 0px", threshold: [0, 0.2, 0.6] },
      );
      observer.observe(element);
      observers.push(observer);
    });
    return () => observers.forEach((observer) => observer.disconnect());
  }, []);

  const stack = useMemo(() => {
    const ats = [
      "Python", "LLM", "RAG", "LangChain", "PyTorch", "OpenAI API", "Anthropic API", "Vector Databases", "Prompt Engineering", "FastAPI", "Docker", "Kubernetes", "AWS", "Machine Learning", "NLP", "SQL", "TypeScript", "React", "Next.js", "PostgreSQL", "MLOps", "CI/CD", "Production Systems", "Monitoring", "AI Agents", "Agentic AI", "MCP", "Multi-Agent Orchestration", "Fine-Tuning (LoRA/PEFT)", "AI Integration", "Guardrails/AI Safety", "AI Evaluation/Evals", "Cost Optimization", "Rust", "pgvector", "LangGraph", "Embeddings", "Function Calling", "vibe coding rescue", "code remediation", "application modernization", "production hardening", "technical debt reduction", "OWASP"
    ];
    return Array.from(new Set([...study.stack, ...study.stackSummary.split(" · "), ...ats]));
  }, [study]);

  return (
    <article>
      <header className={`relative overflow-hidden bg-gradient-to-br ${study.palette}`}>
        <div className="absolute inset-0 bg-[#0a0a0a]/75" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(59,130,246,0.22),transparent_35%),radial-gradient(circle_at_80%_10%,rgba(139,92,246,0.2),transparent_35%)]" />
        <motion.div
          className="relative mx-auto max-w-[1200px] px-5 py-20 md:py-28 lg:px-8"
          initial="hidden"
          animate="show"
          variants={stagger}
        >
          <motion.div variants={fadeUp}>
            <Link href="/#case-studies" className="mb-8 inline-flex items-center gap-2 text-base font-semibold text-cyan-200 hover:text-white">
              ← Back to case studies
            </Link>
            <div className="flex flex-wrap items-center gap-3">
              <Pill>{study.client}</Pill>
              <Pill>{study.industry}</Pill>
              <Pill>{study.timeline}</Pill>
              <Pill>{study.engagement}</Pill>
              <Pill>{readingTime} min read</Pill>
            </div>
            <h1 className="mt-7 max-w-5xl text-5xl font-bold leading-tight text-white md:text-7xl">{study.title}</h1>
            <p className="mt-6 max-w-3xl text-xl text-zinc-300">{study.description}</p>
          </motion.div>
        </motion.div>
      </header>

      <div className="mx-auto grid max-w-[1200px] gap-10 px-5 lg:grid-cols-[260px_1fr] lg:px-8">
        <aside className="hidden lg:block">
          <div className="sticky top-28 rounded-3xl border border-white/10 bg-white/[0.04] p-5">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-500">Sections</p>
            <nav className="mt-4 flex flex-col gap-2 text-base text-zinc-300">
              {sectionLinks.map(([href, label]) => {
                const active = activeSection === href;
                return (
                  <a
                    key={href}
                    href={`#${href}`}
                    className={`rounded-xl border-l-2 px-3 py-2 transition ${active ? "border-cyan-400 bg-white/[0.08] text-cyan-400" : "border-transparent hover:border-white/20 hover:bg-white/[0.04] hover:text-white"}`}
                  >
                    {label}
                  </a>
                );
              })}
            </nav>
          </div>
        </aside>

        <div>
          <Section id="metrics" title="Key Metrics">
            <motion.div variants={stagger} className="grid gap-5 md:grid-cols-2">
              {study.results.slice(0, 4).map((metric, index) => <CountUpMetric key={metric.metric} metric={metric} index={index} />)}
            </motion.div>
          </Section>

          <Section id="challenge" title="The Challenge">
            <motion.div variants={stagger} className="space-y-6 text-lg text-zinc-300">
              {study.challenge.map((paragraph) => <motion.p variants={fadeUp} key={paragraph}>{paragraph}</motion.p>)}
              <motion.p variants={fadeUp} className="rounded-[1.5rem] border border-cyan-400/20 bg-cyan-500/[0.055] p-6 text-base text-zinc-200">
                {atsNarrative}
              </motion.p>
            </motion.div>
          </Section>

          <Section id="decisions" title="Technology Decisions">
            <motion.div variants={stagger} className="overflow-hidden rounded-3xl border border-white/10">
              <div className="hidden grid-cols-4 border-b border-white/10 bg-white/[0.06] md:grid">
                {["Decision", "Choice", "Alternatives", "Why This Won"].map((heading) => (
                  <div key={heading} className="p-4 text-sm font-semibold uppercase tracking-[0.18em] text-zinc-400">{heading}</div>
                ))}
              </div>
              {study.decisions.map((decision) => (
                <motion.div key={decision.decision} variants={{ hidden: { opacity: 0, x: -30 }, show: { opacity: 1, x: 0 } }} className="grid gap-0 border-b border-white/10 transition hover:bg-white/[0.035] last:border-b-0 md:grid-cols-4">
                  <div className="p-4 font-semibold text-white">{decision.decision}</div>
                  <div className="p-4 text-base text-zinc-300">{decision.choice}</div>
                  <div className="p-4 text-base text-zinc-400">{decision.alternatives}</div>
                  <div className="p-4 text-base text-zinc-300 transition-all duration-300 hover:scale-[1.02] hover:text-white md:hover:col-span-1">{decision.why}</div>
                </motion.div>
              ))}
            </motion.div>
          </Section>

          <Section id="process" title="Build Process">
            <div className="relative space-y-8 pl-8 before:absolute before:left-3 before:top-4 before:h-[calc(100%-2rem)] before:w-px before:bg-gradient-to-b before:from-blue-400 before:via-purple-400 before:to-transparent">
              {study.phases.map((phase, index) => (
                <motion.div key={phase.title} variants={fadeUp} className="relative rounded-[1.75rem] border border-white/10 bg-white/[0.045] p-6">
                  <motion.div
                    className="absolute -left-10 top-7 flex h-7 w-7 items-center justify-center rounded-full border border-blue-300/50 bg-[#0a0a0a] text-xs font-bold text-cyan-200"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.45, delay: index * 0.12 }}
                  >
                    {index + 1}
                  </motion.div>
                  <h3 className="text-2xl font-bold text-white">{phase.title}</h3>
                  <p className="mt-4 text-base text-zinc-400">{phase.description}</p>
                </motion.div>
              ))}
            </div>
          </Section>

          <Section id="solutions" title="Technical Challenges & Solutions">
            <ChallengeAccordion study={study} />
          </Section>

          <Section id="ai" title="AI Integration Deep Dive">
            <AiFlipCards study={study} />
          </Section>

          <Section id="results" title="Results & Metrics">
            <EcommerceSplitComparison study={study} />
            <ResultsTable study={study} />
          </Section>

          <Section id="architecture" title="Architecture Diagram">
            <ArchitectureDiagram />
            <motion.pre variants={fadeUp} className="no-scrollbar mt-6 overflow-x-auto rounded-3xl border border-white/10 bg-black/50 p-6 text-base leading-relaxed text-cyan-100"><code>{study.architecture}</code></motion.pre>
          </Section>

          <Section id="stack" title="Tech Stack Footer">
            <motion.div variants={fadeUp} className="overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-6">
              <div className="mb-6 flex items-start gap-4">
                <CheckCircle2 className="mt-1 h-6 w-6 flex-none text-emerald-300" />
                <p className="text-xl font-semibold text-white">{study.stackSummary}</p>
              </div>
              <div className="tech-marquee flex gap-3 whitespace-nowrap">
                {[...stack, ...stack].map((tech, index) => (
                  <span key={`${tech}-${index}`} className="rounded-full border border-white/10 bg-black/35 px-4 py-2 text-sm font-semibold text-zinc-300">
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          </Section>

          <motion.div className="flex flex-col gap-5 pb-24 sm:flex-row sm:items-center" initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger}>
            <motion.div variants={fadeUp}>
              <PrimaryLink href={study.liveUrl}>
                <span className="inline-flex items-center gap-2">Try the Live Demo <ExternalLink className="h-5 w-5" /></span>
              </PrimaryLink>
            </motion.div>
            <motion.div variants={fadeUp}>
              <Link href="/#case-studies" className="inline-flex items-center gap-2 text-base font-semibold text-zinc-300 hover:text-white">
                Back to Case Studies <ArrowRight className="h-4 w-4" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </article>
  );
}
