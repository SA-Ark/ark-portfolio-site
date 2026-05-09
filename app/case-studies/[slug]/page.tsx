import type { Metadata } from "next";
import { ArrowRight, CheckCircle2, ExternalLink } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Reveal } from "@/components/reveal";
import { Pill, PrimaryLink } from "@/components/ui";
import { caseStudies, getCaseStudy } from "@/lib/case-studies";

export function generateStaticParams() {
  return caseStudies.map((study) => ({ slug: study.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const study = getCaseStudy(params.slug);
  if (!study) return { title: "Case Study" };

  return {
    title: study.title,
    description: `${study.title} for ${study.client}: ${study.description}`,
    openGraph: {
      title: `${study.title} | Ark Chakrabarti`,
      description: study.description,
      url: `/case-studies/${study.slug}`,
      images: [{ url: "/og.svg", width: 1200, height: 630, alt: study.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${study.title} | Ark Chakrabarti`,
      description: study.description,
      images: ["/og.svg"],
    },
  };
}

function Section({ id, title, children }: { id: string; title: string; children: React.ReactNode }) {
  return (
    <Reveal>
      <section id={id} className="scroll-mt-28 border-t border-white/10 py-12">
        <h2 className="mb-8 text-4xl font-bold text-white">{title}</h2>
        {children}
      </section>
    </Reveal>
  );
}

export default function CaseStudyPage({ params }: { params: { slug: string } }) {
  const study = getCaseStudy(params.slug);
  if (!study) notFound();

  return (
    <article>
      <header className={`relative overflow-hidden bg-gradient-to-br ${study.palette}`}>
        <div className="absolute inset-0 bg-[#0a0a0a]/75" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(59,130,246,0.2),transparent_35%),radial-gradient(circle_at_80%_10%,rgba(139,92,246,0.18),transparent_35%)]" />
        <div className="relative mx-auto max-w-[1200px] px-5 py-16 md:py-24 lg:px-8">
          <Reveal>
            <Link href="/#case-studies" className="mb-8 inline-flex items-center gap-2 text-base font-semibold text-blue-200 hover:text-white">
              ← Back to case studies
            </Link>
            <div className="flex flex-wrap items-center gap-3">
              <Pill>{study.client}</Pill>
              <Pill>{study.industry}</Pill>
              <Pill>{study.timeline}</Pill>
            </div>
            <h1 className="mt-7 max-w-5xl text-5xl font-bold leading-tight text-white md:text-7xl">{study.title}</h1>
            <p className="mt-6 max-w-3xl text-xl text-zinc-300">{study.description}</p>
            <div className="mt-8 flex flex-wrap gap-2">
              {study.stack.map((tech) => <Pill key={tech}>{tech}</Pill>)}
            </div>
          </Reveal>
        </div>
      </header>

      <div className="mx-auto grid max-w-[1200px] gap-10 px-5 py-14 lg:grid-cols-[260px_1fr] lg:px-8">
        <aside className="hidden lg:block">
          <div className="sticky top-28 rounded-3xl border border-white/10 bg-white/[0.04] p-5">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-500">Sections</p>
            <nav className="mt-4 flex flex-col gap-3 text-base text-zinc-300">
              {[
                ["profile", "Client Profile"],
                ["challenge", "The Challenge"],
                ["decisions", "Technology Decisions"],
                ["process", "Build Process"],
                ["solutions", "Challenges & Solutions"],
                ["ai", "AI Deep Dive"],
                ["results", "Results"],
                ["architecture", "Architecture"],
                ["stack", "Tech Stack"],
              ].map(([href, label]) => (
                <a key={href} href={`#${href}`} className="hover:text-white">{label}</a>
              ))}
            </nav>
          </div>
        </aside>

        <div>
          <Section id="profile" title="A. Client Profile">
            <div className="grid gap-4 md:grid-cols-2">
              {[
                ["Industry", study.industry],
                ["Company size", study.companySize],
                ["Engagement type", study.engagement],
                ["Timeline", study.timeline],
                ["Team", study.team],
              ].map(([label, value]) => (
                <div key={label} className="rounded-3xl border border-white/10 bg-white/[0.04] p-6">
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-300">{label}</p>
                  <p className="mt-3 text-lg text-white">{value}</p>
                </div>
              ))}
            </div>
          </Section>

          <Section id="challenge" title="B. The Challenge">
            <div className="space-y-5 text-lg text-zinc-300">
              {study.challenge.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            </div>
          </Section>

          <Section id="decisions" title="C. Technology Decisions">
            <div className="overflow-hidden rounded-3xl border border-white/10">
              <div className="hidden grid-cols-4 border-b border-white/10 bg-white/[0.06] md:grid">
                { ["Decision", "Choice", "Alternatives Considered", "Why This Won"].map((heading) => (
                  <div key={heading} className="p-4 text-sm font-semibold uppercase tracking-[0.18em] text-zinc-400">{heading}</div>
                )) }
              </div>
              {study.decisions.map((decision) => (
                <div key={decision.decision} className="grid gap-0 border-b border-white/10 last:border-b-0 md:grid-cols-4">
                  <div className="p-4 font-semibold text-white">{decision.decision}</div>
                  <div className="p-4 text-zinc-300">{decision.choice}</div>
                  <div className="p-4 text-zinc-400">{decision.alternatives}</div>
                  <div className="p-4 text-zinc-300">{decision.why}</div>
                </div>
              ))}
            </div>
          </Section>

          <Section id="process" title="D. The Build Process">
            <div className="grid gap-5 md:grid-cols-3">
              {study.phases.map((phase, index) => (
                <div key={phase.title} className="rounded-3xl border border-white/10 bg-white/[0.04] p-6">
                  <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-purple-500 font-bold text-white">{index + 1}</div>
                  <h3 className="text-2xl font-bold text-white">{phase.title}</h3>
                  <p className="mt-4 text-base text-zinc-400">{phase.description}</p>
                </div>
              ))}
            </div>
          </Section>

          <Section id="solutions" title="E. Technical Challenges & Solutions">
            <div className="space-y-5">
              {study.challenges.map((item) => (
                <div key={item.problem} className="rounded-[1.75rem] border border-white/10 bg-white/[0.04] p-6">
                  <h3 className="text-2xl font-bold text-white">{item.problem}</h3>
                  <div className="mt-5 grid gap-4 md:grid-cols-3">
                    <div>
                      <p className="text-sm font-semibold uppercase tracking-[0.18em] text-red-300">Impact</p>
                      <p className="mt-2 text-base text-zinc-300">{item.impact}</p>
                    </div>
                    <div>
                      <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-300">Solution</p>
                      <p className="mt-2 text-base text-zinc-300">{item.solution}</p>
                    </div>
                    <div>
                      <p className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-300">Result</p>
                      <p className="mt-2 text-base text-zinc-300">{item.result}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Section>

          <Section id="ai" title="F. AI Integration Deep Dive">
            <div className="space-y-5">
              {study.aiFeatures.map((feature) => (
                <div key={feature.feature} className="rounded-[1.75rem] border border-blue-400/20 bg-blue-500/[0.045] p-6">
                  <h3 className="text-2xl font-bold text-white">{feature.feature}</h3>
                  <div className="mt-5 grid gap-4 md:grid-cols-2">
                    {[
                      ["Business language", feature.business],
                      ["Architecture", feature.architecture],
                      ["Evaluation", feature.evaluation],
                      ["Impact", feature.impact],
                    ].map(([label, value]) => (
                      <div key={label} className="rounded-2xl border border-white/10 bg-black/25 p-4">
                        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-purple-200">{label}</p>
                        <p className="mt-2 text-base text-zinc-300">{value}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </Section>

          <Section id="results" title="G. Results & Metrics">
            <div className="overflow-hidden rounded-3xl border border-white/10">
              <div className="grid grid-cols-3 border-b border-white/10 bg-white/[0.06]">
                { ["Metric", "Before", "After"].map((heading) => (
                  <div key={heading} className="p-4 text-sm font-semibold uppercase tracking-[0.18em] text-zinc-400">{heading}</div>
                )) }
              </div>
              {study.results.map((metric) => (
                <div key={metric.metric} className="grid grid-cols-3 border-b border-white/10 last:border-b-0">
                  <div className="p-4 font-semibold text-white">{metric.metric}</div>
                  <div className="p-4 text-zinc-400">{metric.before}</div>
                  <div className="p-4 text-lg font-bold text-emerald-200">{metric.after}</div>
                </div>
              ))}
            </div>
          </Section>

          <Section id="architecture" title="H. Architecture Diagram">
            <pre className="no-scrollbar overflow-x-auto rounded-3xl border border-white/10 bg-black/50 p-6 text-base leading-relaxed text-blue-100"><code>{study.architecture}</code></pre>
          </Section>

          <Section id="stack" title="I. Tech Stack Summary">
            <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6">
              <div className="flex items-start gap-4">
                <CheckCircle2 className="mt-1 h-6 w-6 flex-none text-emerald-300" />
                <p className="text-xl font-semibold text-white">{study.stackSummary}</p>
              </div>
            </div>
          </Section>

          <Reveal>
            <div className="pb-20">
              <PrimaryLink href={study.liveUrl}>
                <span className="inline-flex items-center gap-2">Try the Live Demo <ExternalLink className="h-5 w-5" /></span>
              </PrimaryLink>
              <Link href="/#case-studies" className="ml-0 mt-4 inline-flex items-center gap-2 text-base font-semibold text-zinc-300 hover:text-white sm:ml-5 sm:mt-0">
                Explore more case studies <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </Reveal>
        </div>
      </div>
    </article>
  );
}
