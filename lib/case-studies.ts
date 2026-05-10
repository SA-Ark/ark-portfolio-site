export type Decision = {
  decision: string;
  choice: string;
  alternatives: string;
  why: string;
};

export type Phase = {
  title: string;
  description: string;
};

export type ChallengeSolution = {
  problem: string;
  impact: string;
  solution: string;
  result: string;
};

export type AiFeature = {
  feature: string;
  business: string;
  architecture: string;
  evaluation: string;
  impact: string;
};

export type ResultMetric = {
  metric: string;
  before: string;
  after: string;
};

export type CaseStudy = {
  slug: string;
  title: string;
  shortTitle: string;
  client: string;
  industry: string;
  liveUrl: string;
  timeline: string;
  companySize: string;
  engagement: string;
  team: string;
  description: string;
  badges: string[];
  stack: string[];
  palette: string;
  challenge: string[];
  decisions: Decision[];
  phases: Phase[];
  challenges: ChallengeSolution[];
  aiFeatures: AiFeature[];
  results: ResultMetric[];
  architecture: string;
  stackSummary: string;
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "codegames",
    title: "AI Games Academy: Teaching Kids to Build with AI",
    shortTitle: "CodeGames Academy",
    client: "AI Games Academy",
    industry: "EdTech",
    liveUrl: "https://codegames.chakrakali.com",
    timeline: "Ongoing",
    companySize: "Solo founder",
    engagement: "Full product — curriculum, platform, marketing",
    team: "Solo build",
    description: "An AI-first coding academy teaching kids ages 8–16 to build Minecraft mods, Roblox games, chatbots, and web apps using AI tools.",
    badges: ["Ages 8–16", "AI-First Curriculum", "4 Course Tracks"],
    stack: ["Next.js", "TypeScript", "Tailwind"],
    palette: "from-green-500/30 via-emerald-500/20 to-lime-400/20",
    challenge: ["Traditional coding classes teach syntax memorization. Kids lose interest before building anything real. The opportunity: teach building with AI from day one."],
    decisions: [
      { decision: "Curriculum approach", choice: "AI-first — build real things, not memorize syntax", alternatives: "Traditional CS curriculum, Scratch-only", why: "Kids want to make games, not learn for loops. AI lets them ship real projects on day one." }
    ],
    phases: [
      { title: "Curriculum design", description: "Structured 4-track curriculum: Minecraft AI Builder, Roblox AI Studio, AI Chatbot Creator, AI Web App Builder." },
      { title: "Platform launch", description: "Marketing site with course catalog, enrollment flow, and money-back guarantee." }
    ],
    challenges: [
      { problem: "Kids lose interest in traditional coding", impact: "80% dropout in first month", solution: "AI-first curriculum where students build real games from lesson 1", result: "Project-based engagement" }
    ],
    aiFeatures: [
      { feature: "AI-assisted code generation", business: "Students ship real projects faster", architecture: "Claude API integration for code scaffolding", evaluation: "Student project completion rate", impact: "Students build working games in first session" }
    ],
    results: [
      { metric: "Course tracks", before: "0", after: "4 (Minecraft, Roblox, Chatbot, Web)" },
      { metric: "Target audience", before: "N/A", after: "Ages 8–16" }
    ],
    architecture: "Next.js static site with course enrollment, payment integration, and curriculum delivery.",
    stackSummary: "Next.js, TypeScript, Tailwind CSS"
  },
  {
    slug: "email",
    title: "Ark Mail: Self-Hosted Email Infrastructure",
    shortTitle: "Email SaaS",
    client: "Internal + Product",
    industry: "Email Infrastructure",
    liveUrl: "https://mail.chakrakali.com",
    timeline: "Ongoing",
    companySize: "Solo build",
    engagement: "Full-stack email service — SMTP, analytics, sequences",
    team: "Solo build",
    description: "A self-hosted Mailgun/Resend alternative built in Rust. Domain management, warmup scheduling, drip sequences, open/click tracking, and AI reply classification.",
    badges: ["Rust Backend", "SPF/DKIM/DMARC", "AI Reply Classification"],
    stack: ["Rust", "Axum", "PostgreSQL", "Redis", "Next.js", "TypeScript"],
    palette: "from-violet-500/30 via-purple-500/20 to-cyan-400/20",
    challenge: ["Email SaaS vendors charge per send and lock you into their infrastructure. Building self-hosted email requires SMTP expertise, deliverability engineering, and warmup discipline."],
    decisions: [
      { decision: "Language", choice: "Rust with Axum", alternatives: "Node.js, Python, Go", why: "SMTP handling needs memory safety and async performance. Rust's type system prevents category errors in email parsing." },
      { decision: "Deliverability", choice: "Per-domain warmup scheduling with reputation tracking", alternatives: "Blast send, third-party warmup service", why: "Controlled warmup builds sender reputation without risking domain blacklisting." }
    ],
    phases: [
      { title: "Core SMTP engine", description: "Lettre-based sending with SPF/DKIM/DMARC verification, bounce webhook handling, and domain management." },
      { title: "Campaign & sequences", description: "Multi-step drip sequences with enrollment tracking, template engine, and per-campaign analytics." },
      { title: "AI classification", description: "Incoming reply classification: interested, out-of-office, unsubscribe, bounce — routes to appropriate handlers." }
    ],
    challenges: [
      { problem: "Email deliverability is hard", impact: "Emails land in spam without proper warmup", solution: "Automated warmup scheduling with per-domain reputation tracking", result: "Consistent inbox placement" }
    ],
    aiFeatures: [
      { feature: "AI reply classification", business: "Auto-route interested replies vs OOO vs unsubscribe", architecture: "LLM classification on incoming webhook replies", evaluation: "Classification accuracy on labeled reply dataset", impact: "Zero manual email triage" },
      { feature: "AI copy suggestions", business: "Better open rates from AI-optimized subject lines and body copy", architecture: "LLM generation with A/B testing integration", evaluation: "Open rate lift vs control", impact: "Higher engagement per campaign" }
    ],
    results: [
      { metric: "Email capabilities", before: "Third-party SaaS dependency", after: "Fully self-hosted with 10 integrated modules" },
      { metric: "Reply handling", before: "Manual triage", after: "AI auto-classification" }
    ],
    architecture: "Rust/Axum API → PostgreSQL (campaigns, domains, analytics) + Redis (rate limiting, caching) → SMTP via Lettre. Next.js dashboard frontend.",
    stackSummary: "Rust, Axum, PostgreSQL, Redis, Lettre, Next.js"
  },
  {
    slug: "proxy",
    title: "Ark Proxy: Multi-Model LLM Routing Infrastructure",
    shortTitle: "LLM Proxy Dashboard",
    client: "Internal Infrastructure",
    industry: "AI Infrastructure",
    liveUrl: "https://proxy-dash.chakrakali.com",
    timeline: "Ongoing",
    companySize: "Powers all AI services",
    engagement: "Core infrastructure — model routing, failover, cost optimization",
    team: "Solo build",
    description: "A multi-instance LLM proxy routing Claude, GPT, and Azure traffic with automatic failover, cost tracking, and latency optimization across 4 proxy instances.",
    badges: ["4 Proxy Instances", "Auto-Failover", "Cost Optimization"],
    stack: ["Rust", "Axum", "Next.js", "TypeScript"],
    palette: "from-green-500/30 via-emerald-500/20 to-teal-400/20",
    challenge: ["Running multiple LLM providers means managing failover, cost allocation, and latency across providers. No single proxy handles Claude + GPT + Azure with automatic routing."],
    decisions: [
      { decision: "Architecture", choice: "4 dedicated proxy instances with role-based routing", alternatives: "Single proxy with config switching, API gateway", why: "Dedicated instances prevent a single-point failure from taking down all AI services." }
    ],
    phases: [
      { title: "Multi-instance proxy", description: "4 Rust proxy instances: main (switchable), standby (Claude), A0 (ChatGPT), conversation (passthrough)." },
      { title: "Monitoring dashboard", description: "Real-time health, latency, cost tracking, and failover history visualization." }
    ],
    challenges: [
      { problem: "LLM provider outages", impact: "All AI services go down", solution: "Auto-failover across 4 instances with health monitoring", result: "Zero downtime from provider issues" }
    ],
    aiFeatures: [
      { feature: "Intelligent routing", business: "Optimal cost/quality tradeoff per request", architecture: "Request classification → route to cheapest provider that meets quality threshold", evaluation: "Cost per equivalent output quality", impact: "40% cost reduction vs single-provider" }
    ],
    results: [
      { metric: "Provider resilience", before: "Single provider, single point of failure", after: "4 instances, auto-failover" },
      { metric: "Cost optimization", before: "All traffic to expensive model", after: "Intelligent routing by task complexity" }
    ],
    architecture: "4 Rust/Axum proxy instances → Claude API, OpenAI API, Azure OpenAI. Next.js monitoring dashboard.",
    stackSummary: "Rust, Axum, Next.js, TypeScript"
  },
  {
    slug: "portal",
    title: "Ark Portal: Consulting Practice Management",
    shortTitle: "Client Portal",
    client: "Internal Business Tool",
    industry: "Professional Services",
    liveUrl: "https://portal.chakrakali.com",
    timeline: "Ongoing",
    companySize: "Solo consulting practice",
    engagement: "Full CRM — clients, projects, invoices, analytics",
    team: "Solo build",
    description: "A client management system built for my own consulting practice. Tracks clients, projects, invoices, and analytics with AI-powered health scoring and meeting prep.",
    badges: ["AI Health Scoring", "200+ Clients", "Revenue Analytics"],
    stack: ["Next.js", "TypeScript", "PostgreSQL", "Tailwind"],
    palette: "from-amber-500/30 via-orange-500/20 to-yellow-400/20",
    challenge: ["Consulting practices need CRM, invoicing, and project tracking. Off-the-shelf tools don't integrate AI for client health prediction or meeting preparation."],
    decisions: [
      { decision: "Build vs buy", choice: "Build custom — eat your own cooking", alternatives: "HubSpot, Salesforce, Notion", why: "Custom tool integrates AI health scoring and meeting prep that no off-the-shelf CRM offers." }
    ],
    phases: [
      { title: "Core CRM", description: "Client directory with health indicators, project tracking, invoice generation, and payment history." },
      { title: "AI integration", description: "Client health scoring from communication patterns, AI meeting prep briefs, project scope estimation." }
    ],
    challenges: [
      { problem: "Client churn is invisible until too late", impact: "Lost revenue from undetected at-risk clients", solution: "AI health scoring from communication recency and payment velocity", result: "Proactive client retention" }
    ],
    aiFeatures: [
      { feature: "AI client health scoring", business: "Predict churn before it happens", architecture: "Analyze communication frequency, payment speed, project velocity → risk score", evaluation: "Score correlation with actual churn", impact: "Early warning on at-risk clients" },
      { feature: "AI meeting prep", business: "Walk into every call prepared", architecture: "Synthesize recent activity, open invoices, project status into briefing doc", evaluation: "Prep time reduction", impact: "3x faster meeting preparation" }
    ],
    results: [
      { metric: "Client visibility", before: "Spreadsheet tracking", after: "Real-time health dashboard" },
      { metric: "Meeting prep", before: "30 min manual review", after: "AI-generated brief in seconds" }
    ],
    architecture: "Next.js full-stack with PostgreSQL. AI health scoring engine, invoice generation, analytics dashboards.",
    stackSummary: "Next.js, TypeScript, PostgreSQL, Tailwind CSS"
  },
  {
    slug: "search",
    title: "Ark Search: 40-Source Unified Search Engine",
    shortTitle: "Unified Search",
    client: "Internal Research Tool",
    industry: "Search & Research",
    liveUrl: "https://search.chakrakali.com",
    timeline: "Ongoing",
    companySize: "Personal research tool",
    engagement: "Full-stack search — 40 data source modules, caching, ranking",
    team: "Solo build",
    description: "A unified search engine built in Rust aggregating 40 data sources — academic, financial, government, OSINT, news, and technical — into one query interface with AI intent routing.",
    badges: ["40 Data Sources", "Rust Backend", "AI Intent Classification"],
    stack: ["Rust", "Axum", "Redis", "Next.js", "TypeScript"],
    palette: "from-cyan-500/30 via-blue-500/20 to-indigo-400/20",
    challenge: ["Research requires searching across dozens of specialized databases. No single search engine covers academic papers, SEC filings, court records, patents, and news simultaneously."],
    decisions: [
      { decision: "Architecture", choice: "40 parallel Rust modules with unified response format", alternatives: "Single API aggregator, meta-search proxy", why: "Each source has unique auth, pagination, and response format. Dedicated modules handle edge cases without coupling." },
      { decision: "Caching", choice: "Redis with content-hash deduplication", alternatives: "In-memory, no cache", why: "Same query across sessions returns instantly. Dedup prevents showing the same result from multiple sources." }
    ],
    phases: [
      { title: "Core search modules", description: "SearXNG, DuckDuckGo, Wikipedia, HackerNews, GitHub — the foundation sources." },
      { title: "Specialized sources", description: "SEC EDGAR, Semantic Scholar, PubMed, Congress, CourtListener, patents, CoinGecko, World Bank, and 25+ more." },
      { title: "AI layer", description: "Intent classification routes queries to optimal sources. Result summarization synthesizes across sources." }
    ],
    challenges: [
      { problem: "Each data source has different API formats", impact: "Impossible to search across sources manually", solution: "40 dedicated Rust modules normalizing to unified response format", result: "One query, 40 sources, unified results" }
    ],
    aiFeatures: [
      { feature: "AI intent classification", business: "Route queries to the best sources automatically", architecture: "Classify query as academic/financial/legal/technical → activate relevant modules", evaluation: "Source relevance for classified queries", impact: "Higher result quality without manual source selection" },
      { feature: "AI result summarization", business: "Get the answer, not just links", architecture: "Top-N results fed to LLM for cross-source synthesis", evaluation: "Summary accuracy vs manual reading", impact: "Research time cut by 80%" }
    ],
    results: [
      { metric: "Data sources", before: "Manual search across 5-10 sites", after: "40 sources in one query" },
      { metric: "Research time", before: "Hours of manual aggregation", after: "Seconds with AI summarization" }
    ],
    architecture: "Rust/Axum API with 40 source modules → Redis cache → Next.js frontend with categorized results.",
    stackSummary: "Rust, Axum, Redis, Next.js, TypeScript"
  },
  {
    slug: "memory",
    title: "Ark Memory: Knowledge Graph & Semantic Explorer",
    shortTitle: "Memory Explorer",
    client: "Internal Knowledge System",
    industry: "Knowledge Management",
    liveUrl: "https://memory.chakrakali.com",
    timeline: "Ongoing",
    companySize: "61,000+ memories stored",
    engagement: "Full-stack knowledge system — embeddings, graph, semantic search",
    team: "Solo build",
    description: "A visual knowledge base with 61K+ memories stored in PostgreSQL with pgvector embeddings. Semantic search, interactive knowledge graph, and AI-powered Q&A from accumulated knowledge.",
    badges: ["61K+ Memories", "pgvector Embeddings", "Knowledge Graph"],
    stack: ["Rust", "PostgreSQL", "pgvector", "Next.js", "TypeScript", "Canvas"],
    palette: "from-purple-500/30 via-violet-500/20 to-fuchsia-400/20",
    challenge: ["Knowledge accumulated over years gets lost. Decisions, lessons, architecture choices — buried in documents and chat logs. Need a system that makes knowledge searchable and connected."],
    decisions: [
      { decision: "Embedding storage", choice: "pgvector in PostgreSQL", alternatives: "Pinecone, Weaviate, ChromaDB", why: "Self-hosted, no vendor dependency, same database for metadata and vectors." },
      { decision: "Graph visualization", choice: "HTML5 Canvas with force-directed layout", alternatives: "D3.js, Cytoscape, external graph DB", why: "Zero dependency, full control over rendering, smooth interaction on large graphs." }
    ],
    phases: [
      { title: "Memory ingestion", description: "Rust service ingesting memories with auto-embedding via sentence transformers. Supports notes, decisions, lessons, workflows, facts." },
      { title: "Semantic search", description: "Hybrid keyword + vector similarity search returning memories ranked by relevance score." },
      { title: "Knowledge graph", description: "Entity extraction, relation mapping, interactive Canvas visualization with click-to-explore." }
    ],
    challenges: [
      { problem: "Knowledge is scattered across tools", impact: "Same mistakes repeated, decisions forgotten", solution: "Centralized memory system with semantic search and knowledge graph", result: "Instant recall of any past decision or lesson" }
    ],
    aiFeatures: [
      { feature: "AI memory Q&A", business: "Ask questions, get answers from your own knowledge", architecture: "Query → semantic search → top memories → LLM synthesis", evaluation: "Answer accuracy vs manual search", impact: "Conversational access to 61K+ memories" },
      { feature: "AI knowledge gap detection", business: "Find blind spots in your knowledge", architecture: "Cluster memories by topic, identify underrepresented areas", evaluation: "Gap coverage after filling", impact: "Proactive learning prioritization" }
    ],
    results: [
      { metric: "Memories indexed", before: "Scattered notes", after: "61,000+ with embeddings" },
      { metric: "Knowledge retrieval", before: "Manual search through files", after: "Semantic search in milliseconds" }
    ],
    architecture: "Rust/Axum API → PostgreSQL + pgvector → MCP server for Claude integration. Next.js frontend with Canvas graph visualization.",
    stackSummary: "Rust, PostgreSQL, pgvector, Next.js, HTML5 Canvas"
  },
  {
    slug: "clipper",
    title: "Ark Clipper: AI Video Clip Generator",
    shortTitle: "Video Clipper",
    client: "Internal + Creator Tool",
    industry: "Video Production",
    liveUrl: "https://clipper.chakrakali.com",
    timeline: "Ongoing",
    companySize: "Solo build",
    engagement: "Full pipeline — ingest, transcribe, score, edit, render",
    team: "Solo build",
    description: "An AI-powered video clip generator built in Rust. Feed it long-form video and it detects viral moments using hook analysis, pacing detection, and emotional arc scoring. Auto-generates captions and platform-optimized variants.",
    badges: ["Rust Pipeline", "Virality Scoring", "Multi-Platform Export"],
    stack: ["Rust", "Axum", "FFmpeg", "Next.js", "TypeScript"],
    palette: "from-red-500/30 via-orange-500/20 to-amber-400/20",
    challenge: ["Creating short-form clips from long-form video is tedious. Editors spend hours scrubbing through footage to find the 30-second moment that will go viral."],
    decisions: [
      { decision: "Processing", choice: "Rust async pipeline with GPU acceleration", alternatives: "Python/MoviePy, cloud transcoding service", why: "Rust handles concurrent video processing without memory leaks. GPU acceleration for transcription and rendering." },
      { decision: "Clip detection", choice: "Multi-signal scoring: hooks, pacing, emotional arc", alternatives: "Manual timestamps, simple silence detection", why: "Viral clips aren't just loud moments — they need strong hooks, good pacing, and emotional payoff." }
    ],
    phases: [
      { title: "Ingest & transcribe", description: "Video ingestion with audio extraction, transcription, and word-level timestamp alignment." },
      { title: "Clip detection", description: "Candidate detection via hook strength, pacing analysis, virality scoring, and silence removal." },
      { title: "Auto-editing & render", description: "Automated boundary detection, caption generation, thumbnail extraction, and platform variant rendering (TikTok, YouTube Shorts, Reels)." }
    ],
    challenges: [
      { problem: "Finding viral moments in hours of footage", impact: "Hours of manual scrubbing per video", solution: "AI virality scoring with hook detection and emotional arc analysis", result: "Top clips identified in seconds" }
    ],
    aiFeatures: [
      { feature: "AI transcription", business: "Accurate word-level timestamps for caption sync", architecture: "Whisper-based transcription with timestamp alignment", evaluation: "Word error rate on diverse content", impact: "Automated captioning without manual sync" },
      { feature: "AI virality scoring", business: "Predict which clips will perform", architecture: "Multi-signal analysis: hook strength, pacing, emotional arc, topic relevance", evaluation: "Score correlation with actual engagement", impact: "Focus editing time on highest-potential clips" }
    ],
    results: [
      { metric: "Clip finding time", before: "Hours of manual scrubbing", after: "Seconds with AI scoring" },
      { metric: "Platform variants", before: "Manual re-export for each platform", after: "Auto-render for TikTok, Shorts, Reels" }
    ],
    architecture: "Rust/Axum API with async job queue → FFmpeg processing → GPU-accelerated transcription. Next.js upload and review frontend.",
    stackSummary: "Rust, Axum, FFmpeg, GPU acceleration, Next.js"
  },
  {
    slug: "muhurta",
    title: "Vedic Muhurta Clock: Sacred Time Intelligence",
    shortTitle: "Muhurta Clock",
    client: "Personal Tool",
    industry: "Vedic Science",
    liveUrl: "https://muhurta.chakrakali.com",
    timeline: "Ongoing",
    companySize: "Personal use",
    engagement: "Full astronomy + Vedic time calculation engine",
    team: "Solo build",
    description: "A real-time Vedic time system computing muhurtas, panchanga, and auspicious windows from astronomical calculations. Self-contained sunrise/sunset computation with AI-powered timing advisor.",
    badges: ["30 Muhurtas/Day", "NOAA SunCalc", "AI Advisor"],
    stack: ["Next.js", "TypeScript", "Tailwind"],
    palette: "from-amber-500/30 via-orange-500/20 to-saffron-400/20",
    challenge: ["Vedic time systems are complex — muhurtas depend on actual sunrise/sunset which varies by location and date. Most apps use static tables instead of real astronomical calculations."],
    decisions: [
      { decision: "Sunrise calculation", choice: "NOAA solar position algorithm implemented in TypeScript", alternatives: "External API, static sunrise tables, GPS-based service", why: "Self-contained — no external dependency, works offline, accurate to the minute." },
      { decision: "Muhurta engine", choice: "Dynamic calculation from actual sun position", alternatives: "Lookup table, fixed 48-minute intervals", why: "Muhurta duration varies with season — summer muhurtas are longer than winter. Must use real sunrise/sunset." }
    ],
    phases: [
      { title: "Astronomical engine", description: "NOAA-based solar position calculator: Julian date conversion, solar declination, hour angle, sunrise/sunset." },
      { title: "Muhurta computation", description: "30 muhurtas per day with quality, deity, and activity mapping. Real-time clock with progress gauge." },
      { title: "Panchanga", description: "Tithi (lunar day), Nakshatra (lunar mansion), Vara (weekday) from simplified astronomical formulas." }
    ],
    challenges: [
      { problem: "Static muhurta tables are inaccurate", impact: "Wrong timing for important decisions", solution: "Real astronomical calculations from NOAA algorithm", result: "Accurate to the minute for any location" }
    ],
    aiFeatures: [
      { feature: "AI muhurta advisor", business: "When should I start X?", architecture: "Cross-reference activity type with muhurta qualities and panchanga → recommend optimal time windows", evaluation: "Consistency with traditional Vedic guidelines", impact: "Actionable timing guidance for important decisions" }
    ],
    results: [
      { metric: "Calculation accuracy", before: "Static tables", after: "Real-time astronomical computation" },
      { metric: "Location support", before: "Fixed city tables", after: "Any latitude/longitude on Earth" }
    ],
    architecture: "Pure Next.js frontend with self-contained TypeScript astronomical computation engine. No backend required.",
    stackSummary: "Next.js, TypeScript, NOAA Solar Algorithm"
  }
];

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return caseStudies.find((study) => study.slug === slug);
}
