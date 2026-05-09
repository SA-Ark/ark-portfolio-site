import type { Metadata } from "next";
import Script from "next/script";
import { CursorGlow } from "@/components/cursor-glow";
import { Footer } from "@/components/footer";
import { Nav } from "@/components/nav";
import "./globals.css";

const siteUrl = "https://ark.chakrakali.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Ark Chakrabarti — AI Product Engineer & Full-Stack Architect",
    template: "%s | Ark Chakrabarti",
  },
  description:
    "Premium AI product engineering, SaaS architecture, production rescue, RAG systems, agents, and workflow automation for startups and enterprises.",
  openGraph: {
    title: "Ark Chakrabarti — AI Product Engineer & Full-Stack Architect",
    description: "Production AI systems that deliver measurable ROI. From rescue to revenue.",
    url: siteUrl,
    siteName: "Ark Chakrabarti Portfolio",
    images: [{ url: "/og.svg", width: 1200, height: 630, alt: "Ark Chakrabarti portfolio" }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ark Chakrabarti — AI Product Engineer & Full-Stack Architect",
    description: "Production AI systems that deliver measurable ROI. From rescue to revenue.",
    images: ["/og.svg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Ark Chakrabarti",
  url: siteUrl,
  jobTitle: "AI Product Engineer & Full-Stack Architect",
  alumniOf: { "@type": "CollegeOrUniversity", name: "University of California, Berkeley" },
  email: "ark@arkdev.io",
  sameAs: ["https://github.com/SA-Ark", "https://www.linkedin.com/in/arkchakrabarti"],
  knowsAbout: [
    "AI product engineering",
    "Full-stack SaaS architecture",
    "RAG systems",
    "Multi-agent orchestration",
    "Production rescue",
    "Workflow automation",
  ],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="noise bg-[#050510] text-[#e8e8ed]">
        <Script id="person-schema" type="application/ld+json" strategy="beforeInteractive">
          {JSON.stringify(personSchema)}
        </Script>
        <div className="aurora-bg" aria-hidden="true" />
        <CursorGlow />
        <Nav />
        <main className="page-shell min-h-screen pt-24">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
