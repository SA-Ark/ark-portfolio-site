import type { Metadata } from "next";
import { HomeClient } from "@/components/home-client";

export const metadata: Metadata = {
  title: "AI Product Engineer & Full-Stack Architect",
  description:
    "Ark Chakrabarti builds production AI systems, full-stack SaaS platforms, rescue projects, RAG systems, agent orchestration, and workflow automation.",
};

export default function Home() {
  return <HomeClient />;
}
