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
    description: "An AI-first coding academy that gets kids ages 8-16 building real games and apps from their very first session. Instead of boring syntax drills that lose 80% of students in the first month, this platform teaches through creation — students ship Minecraft mods, Roblox games, chatbots, and web apps using AI as their co-pilot. Four structured learning tracks turn screen time into a launchpad for the next generation of builders.",
    badges: ["AI-First Learning", "4 Course Tracks", "Ages 8-16", "Project-Based Curriculum"],
    stack: ["Next.js", "TypeScript", "Tailwind"],
    palette: "from-green-500/30 via-emerald-500/20 to-lime-400/20",
    challenge: ["The $20B+ coding education market has an engagement crisis. Traditional programs teach syntax memorization, leading to massive dropout rates before students build anything meaningful. Parents pay hundreds of dollars for courses that feel like homework. The opportunity: meet kids where they already are — in games — and use AI to collapse the gap between learning and creating."],
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
      { feature: "AI-assisted code generation", business: "Students ship real projects faster — working games in their first session, not their first month", architecture: "Claude API integration for code scaffolding", evaluation: "Student project completion rate", impact: "Students build working games in first session" },
      { feature: "AI learning path adaptation", business: "Each student progresses at their own pace with AI-guided difficulty scaling", architecture: "Progress tracking with adaptive challenge selection", evaluation: "Completion rates across skill levels", impact: "Reduced dropout, higher course completion" }
    ],
    results: [
      { metric: "Course tracks", before: "0", after: "4 full tracks (Minecraft, Roblox, Chatbot, Web)" },
      { metric: "Time to first project", before: "Weeks of syntax lessons", after: "Working game in session 1" },
      { metric: "Target audience", before: "N/A", after: "Ages 8-16 with zero prior experience" }
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
    description: "A complete email infrastructure that gives businesses full control over their outreach — from domain warmup to AI-powered reply classification — without paying per-send to SaaS vendors. Handles everything Mailgun and Resend charge thousands for: multi-domain management, automated warmup scheduling, drip sequences, open/click tracking, and intelligent reply routing. AI analyzes every incoming reply and optimizes every outgoing subject line, turning email from a cost center into a revenue engine.",
    badges: ["AI Subject Optimizer", "AI Reply Classification", "Smart Copy Generation", "SPF/DKIM/DMARC", "10 Integrated Modules"],
    stack: ["Rust", "Axum", "PostgreSQL", "Redis", "Next.js", "TypeScript"],
    palette: "from-violet-500/30 via-purple-500/20 to-cyan-400/20",
    challenge: ["Businesses sending outreach at scale face a painful choice: pay escalating per-send fees to email SaaS vendors, or attempt self-hosting without the deliverability expertise to land in inboxes. Most companies hemorrhage $500-5,000/month on email infrastructure while still dealing with spam folder placement, manual reply triage, and zero insight into what copy actually converts."],
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
      { problem: "Email deliverability is hard", impact: "Emails land in spam without proper warmup", solution: "Automated warmup scheduling with per-domain reputation tracking", result: "Consistent inbox placement across all managed domains" }
    ],
    aiFeatures: [
      { feature: "AI Subject Line Optimizer", business: "Maximize open rates with AI-tested subject lines before sending to your full list", architecture: "LLM generation of subject variants with A/B testing integration and winner selection", evaluation: "Open rate lift vs control subjects", impact: "Higher open rates per campaign without manual copywriting" },
      { feature: "AI Reply Classification", business: "Instantly sort interested leads from out-of-office, unsubscribe, and bounce replies — zero manual triage", architecture: "LLM classification on incoming webhook replies with confidence scoring", evaluation: "Classification accuracy on labeled reply dataset", impact: "Sales teams only see qualified replies, not noise" },
      { feature: "Smart Copy Generation", business: "Generate high-converting email body copy and sequences from a brief description of your offer", architecture: "LLM generation with tone matching, personalization tokens, and sequence coherence", evaluation: "Click-through rate and reply rate vs manually written copy", impact: "Campaign creation time cut from hours to minutes" }
    ],
    results: [
      { metric: "Email infrastructure cost", before: "$500-5,000/mo in SaaS fees", after: "Self-hosted, zero per-send cost" },
      { metric: "Reply handling", before: "Hours of manual triage daily", after: "AI auto-classification in real time" },
      { metric: "Campaign creation", before: "Hours writing and testing copy", after: "AI-generated copy with optimized subjects" }
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
    description: "The backbone that keeps every AI service running without interruption. Routes all LLM traffic across Claude, GPT, and Azure through four dedicated proxy instances with automatic failover, intelligent cost-based routing, and real-time latency optimization. When one provider goes down, traffic reroutes in milliseconds — no human intervention, no downtime. AI-powered cost insights continuously identify savings opportunities across thousands of daily requests.",
    badges: ["AI Cost Optimization", "4 Proxy Instances", "Auto-Failover", "Zero-Downtime Routing", "Real-Time Monitoring"],
    stack: ["Rust", "Axum", "Next.js", "TypeScript"],
    palette: "from-green-500/30 via-emerald-500/20 to-teal-400/20",
    challenge: ["Companies building on AI are locked into single-provider dependencies where one outage takes down every product. They overpay by routing simple tasks to expensive models, have no visibility into cost-per-feature, and lack the infrastructure to gracefully handle the provider failures that happen weekly. The result: unpredictable AI costs, frustrated users during outages, and engineering time wasted on manual provider switching."],
    decisions: [
      { decision: "Architecture", choice: "4 dedicated proxy instances with role-based routing", alternatives: "Single proxy with config switching, API gateway", why: "Dedicated instances prevent a single-point failure from taking down all AI services." }
    ],
    phases: [
      { title: "Multi-instance proxy", description: "4 Rust proxy instances: main (switchable), standby (Claude), A0 (ChatGPT), conversation (passthrough)." },
      { title: "Monitoring dashboard", description: "Real-time health, latency, cost tracking, and failover history visualization." }
    ],
    challenges: [
      { problem: "LLM provider outages", impact: "All AI services go down simultaneously", solution: "Auto-failover across 4 instances with health monitoring", result: "Zero downtime from provider issues" }
    ],
    aiFeatures: [
      { feature: "AI Cost Optimization Insights", business: "Continuously analyzes request patterns to recommend cheaper routing strategies without sacrificing output quality", architecture: "Request classification by complexity → route to cheapest provider meeting quality threshold, with cost trend analysis and anomaly detection", evaluation: "Cost per equivalent output quality across providers", impact: "40% cost reduction vs single-provider routing" },
      { feature: "Intelligent request routing", business: "Every request goes to the optimal model for its task — simple queries to cheap models, complex reasoning to premium ones", architecture: "Real-time task complexity classification with provider capability matching", evaluation: "Quality parity at lower cost, latency improvement on simple tasks", impact: "Premium model usage reduced by 60% without quality loss" }
    ],
    results: [
      { metric: "AI infrastructure uptime", before: "Subject to single-provider outages", after: "99.9% uptime with auto-failover across 4 instances" },
      { metric: "LLM costs", before: "All traffic routed to most expensive model", after: "40% reduction with AI-optimized routing" },
      { metric: "Failover response", before: "Manual provider switching during outages", after: "Millisecond auto-failover, zero human intervention" }
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
    description: "A purpose-built practice management system that turns client data into actionable intelligence. Tracks 200+ clients across projects, invoices, and communications — then uses AI to surface which relationships need attention before they churn. AI health scoring analyzes communication patterns, payment velocity, and project momentum to flag at-risk clients weeks before a human would notice. Every meeting starts with an AI-generated brief, not 30 minutes of scrambling through notes.",
    badges: ["AI Client Health Scoring", "AI Meeting Prep", "200+ Clients", "Revenue Analytics", "Churn Prediction"],
    stack: ["Next.js", "TypeScript", "PostgreSQL", "Tailwind"],
    palette: "from-amber-500/30 via-orange-500/20 to-yellow-400/20",
    challenge: ["Consulting practices lose clients silently. By the time a consultant notices a relationship cooling — fewer replies, slower payments, stalled projects — it is already too late. Off-the-shelf CRMs track contacts but do not predict churn. Meeting prep means 30 minutes of digging through old emails and invoices before every call. The result: preventable churn, unprepared meetings, and revenue left on the table."],
    decisions: [
      { decision: "Build vs buy", choice: "Build custom — eat your own cooking", alternatives: "HubSpot, Salesforce, Notion", why: "Custom tool integrates AI health scoring and meeting prep that no off-the-shelf CRM offers." }
    ],
    phases: [
      { title: "Core CRM", description: "Client directory with health indicators, project tracking, invoice generation, and payment history." },
      { title: "AI integration", description: "Client health scoring from communication patterns, AI meeting prep briefs, project scope estimation." }
    ],
    challenges: [
      { problem: "Client churn is invisible until too late", impact: "Lost revenue from undetected at-risk clients", solution: "AI health scoring from communication recency and payment velocity", result: "Proactive client retention with weeks of early warning" }
    ],
    aiFeatures: [
      { feature: "AI Client Health Scoring", business: "Predict which clients are at risk of churning weeks before any human signal — based on communication frequency, payment speed, and project momentum", architecture: "Multi-signal analysis: communication recency, payment velocity, project milestone pace → composite risk score with trend detection", evaluation: "Score correlation with actual churn events over 6-month window", impact: "At-risk clients flagged 3-4 weeks before churn" },
      { feature: "AI Meeting Prep Briefs", business: "Walk into every client call fully prepared — recent activity, open invoices, project status, and talking points synthesized in seconds", architecture: "Aggregate client touchpoints, invoices, project milestones → LLM synthesis into structured briefing document", evaluation: "Prep time reduction and meeting outcome quality", impact: "Meeting prep time reduced from 30 minutes to under 30 seconds" }
    ],
    results: [
      { metric: "Client visibility", before: "Spreadsheet tracking, churn noticed after the fact", after: "Real-time health dashboard with AI early warning" },
      { metric: "Meeting preparation", before: "30 minutes of manual note digging per call", after: "AI-generated brief in under 30 seconds" },
      { metric: "Client retention", before: "Reactive — addressing churn after it happens", after: "Proactive — AI flags at-risk clients weeks early" }
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
    description: "A research platform that replaces the daily grind of searching across dozens of specialized databases. One query simultaneously searches 40 sources — academic papers, SEC filings, court records, patents, government databases, financial data, and news — then AI synthesizes the results into a coherent answer. Intent classification automatically routes your query to the most relevant sources, so a legal question searches court records while a market question hits SEC filings. Research that used to take hours of manual aggregation now takes seconds.",
    badges: ["AI Intent Classification", "AI Result Summary", "Follow-up Suggestions", "40 Data Sources", "Cross-Source Synthesis"],
    stack: ["Rust", "Axum", "Redis", "Next.js", "TypeScript"],
    palette: "from-cyan-500/30 via-blue-500/20 to-indigo-400/20",
    challenge: ["Professionals doing serious research waste hours every day switching between specialized databases. A single due diligence report might require searching SEC EDGAR, court records, patent databases, academic papers, and news archives — each with different interfaces, logins, and query syntax. By the time you have searched five sources manually, the information from source one is already stale in your memory. The result: incomplete research, missed connections across sources, and decisions made on partial information."],
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
      { problem: "Each data source has different API formats", impact: "Impossible to search across sources manually at speed", solution: "40 dedicated modules normalizing to unified response format", result: "One query, 40 sources, unified results in seconds" }
    ],
    aiFeatures: [
      { feature: "AI Intent Classification", business: "Automatically understands what you are really looking for and activates the right sources — ask a legal question and it searches court records, ask a market question and it hits SEC filings", architecture: "LLM classifies query as academic/financial/legal/technical/news → selectively activates relevant source modules", evaluation: "Source relevance precision for classified query categories", impact: "Higher result quality without manual source selection" },
      { feature: "AI Result Summary", business: "Get a synthesized answer from 40 sources, not just a list of links — cross-references findings and highlights contradictions", architecture: "Top-N results across sources fed to LLM for cross-source synthesis with citation tracking", evaluation: "Summary accuracy and completeness vs manual reading of all sources", impact: "Research time reduced by 80%" },
      { feature: "AI Follow-up Suggestions", business: "After each search, AI suggests the next queries you should run to deepen your research — surfaces angles you would have missed", architecture: "Analyze result gaps and related topics from initial results → generate targeted follow-up queries", evaluation: "Follow-up query relevance and user adoption rate", impact: "More thorough research with less expertise required" }
    ],
    results: [
      { metric: "Data sources per query", before: "Manual search across 5-10 sites sequentially", after: "40 sources searched simultaneously in one query" },
      { metric: "Research time per topic", before: "Hours of manual aggregation and cross-referencing", after: "Seconds with AI synthesis and follow-up suggestions" },
      { metric: "Research completeness", before: "Limited to sources researcher knows about", after: "AI routes to optimal sources across 40 databases" }
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
    description: "A living knowledge system that turns years of accumulated decisions, lessons, and architecture choices into an instantly searchable, interconnected intelligence layer. With 61,000+ memories indexed with semantic embeddings, it does not just find keywords — it understands meaning. Ask a natural language question and get synthesized answers drawn from your entire knowledge history. An interactive knowledge graph reveals connections between ideas that would be invisible in traditional storage, turning institutional knowledge from a liability into a compounding asset.",
    badges: ["Conversational AI Q&A", "61K+ Memories", "Semantic Search", "Interactive Knowledge Graph", "pgvector Embeddings"],
    stack: ["Rust", "PostgreSQL", "pgvector", "Next.js", "TypeScript", "Canvas"],
    palette: "from-purple-500/30 via-violet-500/20 to-fuchsia-400/20",
    challenge: ["Organizations and individuals accumulate thousands of decisions, lessons, and insights over years — then lose most of it. Critical knowledge lives in scattered documents, chat logs, and people's heads. When the same problem resurfaces six months later, nobody remembers the solution. When a team member leaves, their expertise walks out the door. The cost is not just inefficiency — it is repeated mistakes, contradictory decisions, and an organization that never compounds its own intelligence."],
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
      { problem: "Knowledge is scattered across tools and time", impact: "Same mistakes repeated, decisions forgotten, institutional knowledge lost with turnover", solution: "Centralized memory system with semantic search and knowledge graph", result: "Instant recall of any past decision, lesson, or architectural choice" }
    ],
    aiFeatures: [
      { feature: "Conversational AI Q&A", business: "Ask natural language questions and get synthesized answers drawn from 61K+ memories — like having a conversation with your entire knowledge history", architecture: "Query → semantic search → top relevant memories → LLM synthesis with source citations", evaluation: "Answer accuracy and completeness vs manual search through memories", impact: "Conversational access to years of accumulated knowledge in seconds" },
      { feature: "AI Knowledge Gap Detection", business: "Proactively identifies blind spots in your knowledge base — topics that are underrepresented relative to their importance", architecture: "Cluster memories by topic, analyze coverage density, cross-reference with activity patterns to identify underrepresented critical areas", evaluation: "Gap coverage improvement after targeted learning", impact: "Proactive learning prioritization, fewer blind spot surprises" }
    ],
    results: [
      { metric: "Memories indexed", before: "Scattered across docs, chats, and memory", after: "61,000+ semantically indexed and interconnected" },
      { metric: "Knowledge retrieval", before: "Manual search through files, often fruitless", after: "Conversational AI Q&A with instant semantic search" },
      { metric: "Knowledge connections", before: "Invisible — ideas siloed in separate documents", after: "Interactive graph revealing cross-domain connections" }
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
    description: "A complete short-form content pipeline that eliminates the most painful bottleneck in video production: finding the moments that matter. Feed it long-form video and AI analyzes every second for hook strength, pacing, and emotional arc to surface the clips most likely to perform. Automatic transcription with word-level timestamps generates perfectly synced captions, while platform-specific rendering outputs optimized variants for TikTok, YouTube Shorts, and Reels simultaneously. What used to take a video editor hours of scrubbing now happens in seconds.",
    badges: ["AI Transcription", "Virality Scoring", "Smart Clip Suggestions", "Multi-Platform Export", "Auto-Captioning"],
    stack: ["Rust", "Axum", "FFmpeg", "Next.js", "TypeScript"],
    palette: "from-red-500/30 via-orange-500/20 to-amber-400/20",
    challenge: ["Content creators and media teams are drowning in footage. A one-hour podcast or livestream might contain three viral moments, but finding them means hours of manual scrubbing through timeline. Then each clip needs captions, platform-specific aspect ratios, and format optimization — multiplying the editing time by every platform. Most creators either burn out on editing or leave their best content buried in long-form archives that nobody watches."],
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
      { problem: "Finding viral moments in hours of footage", impact: "Hours of manual scrubbing per video, most high-potential clips never found", solution: "AI virality scoring with hook detection and emotional arc analysis", result: "Top clips identified and ranked in seconds, not hours" }
    ],
    aiFeatures: [
      { feature: "AI Transcription", business: "Accurate word-level timestamps powering perfectly synced captions — no manual alignment needed", architecture: "Whisper-based transcription with forced timestamp alignment at the word level", evaluation: "Word error rate on diverse content types and accents", impact: "Automated captioning without any manual sync work" },
      { feature: "AI Virality Scoring", business: "Predict which clips will perform before you publish — focus editing time on the moments with highest potential", architecture: "Multi-signal analysis scoring hook strength, pacing rhythm, emotional arc trajectory, and topic relevance", evaluation: "Score correlation with actual engagement metrics on published clips", impact: "Editing effort concentrated on highest-ROI clips" },
      { feature: "Smart Clip Suggestions", business: "AI identifies not just individual moments but the optimal start/end points that maximize viewer retention", architecture: "Boundary optimization analyzing attention hooks, natural breaks, and punchline delivery timing", evaluation: "Viewer retention curve analysis on suggested vs manually edited boundaries", impact: "Better clip boundaries without manual fine-tuning" }
    ],
    results: [
      { metric: "Clip discovery time", before: "Hours of manual scrubbing per video", after: "AI-ranked clips surfaced in seconds" },
      { metric: "Platform variants", before: "Manual re-export and reformat for each platform", after: "Simultaneous auto-render for TikTok, Shorts, and Reels" },
      { metric: "Caption creation", before: "Manual transcription and timeline sync", after: "AI-generated word-level captions, zero manual work" }
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
    description: "A precision timing system that brings ancient Vedic time science into the modern world with real astronomical calculations. Computes all 30 daily muhurtas, complete panchanga data, and auspicious activity windows from actual solar and lunar positions — not the static lookup tables that most apps rely on. An AI-powered advisor cross-references muhurta qualities with activity types to recommend optimal timing windows for important decisions, meetings, and new ventures. Works for any location on Earth, accurate to the minute.",
    badges: ["AI Muhurta Advisor", "Auspicious Activities", "30 Muhurtas/Day", "Real-Time Astronomy", "Any Location"],
    stack: ["Next.js", "TypeScript", "Tailwind"],
    palette: "from-amber-500/30 via-orange-500/20 to-saffron-400/20",
    challenge: ["Millions of people worldwide consult Vedic timing for important life decisions, but the tools available are embarrassingly outdated. Most muhurta apps use static tables that ignore the fundamental reality: muhurta duration changes with the seasons because sunrise and sunset shift throughout the year. A summer muhurta is longer than a winter one. Static tables give wrong times, and wrong times defeat the entire purpose. The result: people making timing decisions based on inaccurate data, with no way to get personalized guidance on which muhurtas suit which activities."],
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
      { problem: "Static muhurta tables are inaccurate by design", impact: "Wrong timing for important life decisions, undermining the entire practice", solution: "Real astronomical calculations from NOAA algorithm with dynamic muhurta boundaries", result: "Accurate to the minute for any location and date on Earth" }
    ],
    aiFeatures: [
      { feature: "AI Muhurta Advisor", business: "Ask 'When should I start my business launch?' and get specific timing recommendations backed by traditional Vedic guidelines and real astronomical data", architecture: "Cross-reference activity type with muhurta qualities, panchanga elements, and traditional auspiciousness rules → recommend ranked time windows with explanations", evaluation: "Consistency with authoritative Vedic jyotish texts and practitioner validation", impact: "Actionable, personalized timing guidance for any activity" },
      { feature: "Auspicious Activity Mapping", business: "Every muhurta is automatically tagged with its optimal activities — know at a glance whether the current window favors creative work, negotiations, travel, or rest", architecture: "Traditional muhurta-activity associations enriched with panchanga cross-referencing for composite auspiciousness scoring", evaluation: "Alignment with classical texts across multiple Vedic traditions", impact: "Instant activity guidance without needing to be a Vedic scholar" }
    ],
    results: [
      { metric: "Calculation accuracy", before: "Static tables with seasonal drift errors", after: "Real-time astronomical computation, accurate to the minute" },
      { metric: "Location support", before: "Fixed city tables covering a handful of locations", after: "Any latitude/longitude on Earth" },
      { metric: "Timing guidance", before: "Generic tables requiring expert interpretation", after: "AI advisor with personalized activity recommendations" }
    ],
    architecture: "Pure Next.js frontend with self-contained TypeScript astronomical computation engine. No backend required.",
    stackSummary: "Next.js, TypeScript, NOAA Solar Algorithm"
  }
];

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return caseStudies.find((study) => study.slug === slug);
}
