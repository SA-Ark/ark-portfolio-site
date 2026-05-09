import type { MetadataRoute } from "next";
import { caseStudies } from "@/lib/case-studies";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://ark.chakrakali.com";
  const now = new Date();
  return [
    "",
    "/about",
    "/resume",
    "/contact",
    ...caseStudies.map((study) => `/case-studies/${study.slug}`),
  ].map((path) => ({
    url: `${base}${path}`,
    lastModified: now,
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : 0.8,
  }));
}
