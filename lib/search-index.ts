import { caseStudies } from "@/lib/case-studies";

export type SearchItem = {
  id: string;
  type: "case-study" | "service" | "keyword";
  title: string;
  description: string;
  href: string;
  tags: string[];
  body: string;
};

export const services = [
  {
    title: "Build",
    description:
      "Full-stack SaaS, concept to production: multi-tenant platforms, payments, real-time collaboration, AI-integrated product architecture, TypeScript, React, Next.js, PostgreSQL, Docker, AWS, CI/CD, and Monitoring.",
    tags: ["SaaS", "multi-tenant", "Production Systems", "Next.js", "PostgreSQL"],
  },
  {
    title: "Rescue",
    description:
      "Production rescue for AI-built and vibe-coded products: code remediation, technical debt reduction, OWASP review, performance repair, security hardening, application modernization, and production hardening.",
    tags: ["vibe code", "production rescue", "OWASP", "technical debt", "code remediation"],
  },
  {
    title: "AI Integration",
    description:
      "Measurable AI in existing products using LLMs, RAG, LangChain, LangGraph, OpenAI API, Anthropic API, Vector Databases, pgvector, Embeddings, Prompt Engineering, Function Calling, and Guardrails/AI Safety.",
    tags: ["RAG", "LLM", "LangChain", "OpenAI API", "Anthropic API", "pgvector"],
  },
  {
    title: "Orchestration",
    description:
      "AI operations at scale: AI Agents, Agentic AI, MCP integrations, Multi-Agent Orchestration, MLOps, model routing, Cost Optimization, AI Evaluation/Evals, Monitoring, and Production Systems.",
    tags: ["orchestration", "AI Agents", "MCP", "MLOps", "evals"],
  },
  {
    title: "Automation",
    description:
      "Workflow automation for calendar intelligence, document processing, email triage, SQL-backed analytics, FastAPI services, Python pipelines, Rust workers, Kubernetes deployments, and reliable CI/CD.",
    tags: ["automation", "Python", "FastAPI", "Rust", "Kubernetes"],
  },
];

export const atsKeywords = [
  "Python",
  "LLM",
  "RAG",
  "LangChain",
  "PyTorch",
  "OpenAI API",
  "Anthropic API",
  "Vector Databases",
  "Prompt Engineering",
  "FastAPI",
  "Docker",
  "Kubernetes",
  "AWS",
  "Machine Learning",
  "NLP",
  "SQL",
  "TypeScript",
  "React",
  "Next.js",
  "PostgreSQL",
  "MLOps",
  "CI/CD",
  "Production Systems",
  "Monitoring",
  "AI Agents",
  "Agentic AI",
  "MCP",
  "Multi-Agent Orchestration",
  "Fine-Tuning (LoRA/PEFT)",
  "AI Integration",
  "Guardrails/AI Safety",
  "AI Evaluation/Evals",
  "Cost Optimization",
  "Rust",
  "pgvector",
  "LangGraph",
  "Embeddings",
  "Function Calling",
  "vibe coding rescue",
  "vibe code",
  "code remediation",
  "application modernization",
  "production hardening",
  "technical debt reduction",
  "OWASP",
  "healthcare",
  "fintech",
];

export function buildSearchIndex(): SearchItem[] {
  const caseItems: SearchItem[] = caseStudies.map((study) => ({
    id: `case-${study.slug}`,
    type: "case-study",
    title: study.title,
    description: study.description,
    href: `/case-studies/${study.slug}`,
    tags: [study.client, study.industry, ...study.badges, ...study.stack],
    body: [
      study.title,
      study.shortTitle,
      study.client,
      study.industry,
      study.engagement,
      study.description,
      ...study.badges,
      ...study.stack,
      ...study.challenge,
      ...study.decisions.flatMap((decision) => [decision.decision, decision.choice, decision.alternatives, decision.why]),
      ...study.phases.flatMap((phase) => [phase.title, phase.description]),
      ...study.challenges.flatMap((challenge) => [challenge.problem, challenge.impact, challenge.solution, challenge.result]),
      ...study.aiFeatures.flatMap((feature) => [feature.feature, feature.business, feature.architecture, feature.evaluation, feature.impact]),
      ...study.results.flatMap((result) => [result.metric, result.before, result.after]),
      study.architecture,
      study.stackSummary,
      ...atsKeywords,
    ].join(" "),
  }));

  const serviceItems: SearchItem[] = services.map((service) => ({
    id: `service-${service.title.toLowerCase().replace(/\s+/g, "-")}`,
    type: "service",
    title: service.title,
    description: service.description,
    href: "/#services",
    tags: service.tags,
    body: [service.title, service.description, ...service.tags, ...atsKeywords].join(" "),
  }));

  const keywordItems: SearchItem[] = atsKeywords.map((keyword) => ({
    id: `keyword-${keyword.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`,
    type: "keyword",
    title: keyword,
    description: `${keyword} appears in Ark's production AI, full-stack architecture, rescue, orchestration, and automation work across case studies and services.`,
    href: `/search?q=${encodeURIComponent(keyword)}`,
    tags: ["ATS keyword", "capability"],
    body: keyword,
  }));

  return [...caseItems, ...serviceItems, ...keywordItems];
}
