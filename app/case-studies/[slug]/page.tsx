import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CaseStudyDetail } from "@/components/case-study-detail";
import { caseStudies, getCaseStudy } from "@/lib/case-studies";

export function generateStaticParams() {
  return caseStudies.map((study) => ({ slug: study.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const study = getCaseStudy(slug);
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

export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) notFound();

  return <CaseStudyDetail study={study} />;
}
