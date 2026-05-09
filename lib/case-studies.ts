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
    slug: "ecommerce",
    title: "Production Rescue: Online Retail Platform",
    shortTitle: "E-Commerce Rescue + AI",
    client: "Online Retailer",
    industry: "E-Commerce",
    liveUrl: "https://ecommerce.chakrakali.com",
    timeline: "6 weeks",
    companySize: "Growth-stage retailer, 35 employees",
    engagement: "Rescue, performance modernization, AI conversion lift",
    team: "Ark as architect and lead engineer with client product owner",
    description:
      "A failing retail MVP rebuilt into a fast, searchable, support-aware commerce experience with measurable conversion gains.",
    badges: ["Lighthouse 32→98", "+35% search conversion", "-60% support tickets"],
    stack: ["Next.js", "TypeScript", "PostgreSQL", "pgvector", "Claude", "Stripe"],
    palette: "from-blue-500/30 via-purple-500/20 to-cyan-400/20",
    challenge: [
      "The retailer had momentum but their AI-built storefront could not support the business. Page loads routinely crossed eight seconds, product search returned irrelevant matches, checkout errors were impossible to reproduce, and support volume was rising because customers could not find sizing, shipping, or compatibility answers on their own.",
      "The highest-risk constraint was continuity. Revenue could not pause while the system was being rebuilt, and the catalog team needed to keep publishing new products during the migration. The engagement therefore combined surgical stabilization, observability, and a staged platform replacement rather than a risky big-bang rewrite.",
      "The mandate was not simply to make the code cleaner. The platform needed to become a revenue instrument: faster discovery, fewer abandoned carts, reliable payments, and an AI assistant that reduced support load without inventing policies or product claims."
    ],
    decisions: [
      {
        decision: "Frontend architecture",
        choice: "Next.js 16 static-first storefront with selective server actions",
        alternatives: "Keep SPA, Shopify theme rebuild, headless CMS-only site",
        why: "Delivered Lighthouse gains, preserved custom checkout flows, and kept product pages cacheable at the edge."
      },
      {
        decision: "Search relevance",
        choice: "Hybrid keyword + pgvector semantic search",
        alternatives: "Algolia, Elasticsearch, plain SQL LIKE",
        why: "Matched natural-language buying intent without adding a new external search bill or operational surface."
      },
      {
        decision: "AI support",
        choice: "Grounded Claude responses with policy retrieval and refusal rules",
        alternatives: "Generic chatbot, FAQ only, outsourced chat",
        why: "Reduced tickets while staying faithful to shipping, returns, and product metadata."
      }
    ],
    phases: [
      {
        title: "Stabilize revenue paths",
        description:
          "Instrumented checkout, reproduced failure modes, fixed payment edge cases, and created a rollback-safe deployment workflow before major UI changes."
      },
      {
        title: "Rebuild discovery",
        description:
          "Reworked product data, caching, filtering, responsive layouts, and semantic search so shoppers could move from intent to product in fewer interactions."
      },
      {
        title: "Deploy measurable AI",
        description:
          "Added a grounded shopping assistant, evaluated answer accuracy against support transcripts, and tied adoption to conversion and ticket deflection metrics."
      }
    ],
    challenges: [
      {
        problem: "The storefront loaded slowly because every page fetched excessive product and recommendation data client-side.",
        impact: "Mobile users abandoned sessions before products rendered, and paid traffic produced poor return on ad spend.",
        solution: "Moved product pages to static generation, reduced hydration, introduced image optimization, and cached catalog queries behind stable keys.",
        result: "Lighthouse performance improved from 32 to 98 and product pages became reliably interactive on mid-range mobile devices."
      },
      {
        problem: "Search treated customer language and catalog language as separate worlds.",
        impact: "High-intent queries like 'gift for new runner' or 'waterproof commuter bag' returned irrelevant items or no results.",
        solution: "Embedded product descriptions, reviews, and buying guides into pgvector while preserving exact filters for size, price, availability, and brand.",
        result: "Search-led conversion increased 35% and zero-result searches dropped sharply."
      },
      {
        problem: "Support answers were scattered across policies, product notes, and tribal knowledge.",
        impact: "Customers opened tickets for questions that should have been answered before checkout.",
        solution: "Built a retrieval layer over approved policies and product metadata with answer citations and escalation triggers.",
        result: "Support tickets fell 60% while complex issues still routed to a human with full context."
      }
    ],
    aiFeatures: [
      {
        feature: "AI shopping assistant",
        business: "Customers ask in natural language and receive product recommendations, policy answers, and fit guidance before checkout.",
        architecture: "Catalog embeddings in pgvector, policy retrieval, Claude generation, structured refusal rules, and event logging for conversion attribution.",
        evaluation: "Golden query set from real support transcripts scored for relevance, factuality, policy compliance, and escalation correctness.",
        impact: "+35% search conversion and -60% support tickets."
      },
      {
        feature: "Support triage summaries",
        business: "When escalation is required, agents receive the customer's journey, product context, and likely issue in one screen.",
        architecture: "Session events and assistant transcripts are summarized into a support handoff object with deterministic fields.",
        evaluation: "Manual review with support staff for completeness and hallucination risk.",
        impact: "Reduced average first-response handling time and improved support consistency."
      }
    ],
    results: [
      { metric: "Lighthouse performance", before: "32", after: "98" },
      { metric: "Search-led conversion", before: "Baseline", after: "+35%" },
      { metric: "Support ticket volume", before: "High and rising", after: "-60%" },
      { metric: "Product page load", before: "8.2s", after: "1.1s" }
    ],
    architecture: `Customer Browser\n  |\n  v\nNext.js Storefront -- Stripe Checkout\n  |\n  +--> Catalog API --> PostgreSQL + pgvector\n  |\n  +--> AI Assistant --> Retrieval Policies --> Claude\n  |\n  +--> Analytics Events --> Conversion Dashboard`,
    stackSummary: "Next.js 16 · TypeScript · PostgreSQL · pgvector · Anthropic Claude · Stripe · Tailwind CSS"
  },
  {
    slug: "portal",
    title: "Multi-Tenant Client Management Platform",
    shortTitle: "Enterprise Client Portal",
    client: "NovaBridge Technologies",
    industry: "B2B Services",
    liveUrl: "https://portal.chakrakali.com",
    timeline: "8 weeks",
    companySize: "120-person services firm with 200+ client accounts",
    engagement: "Full-stack SaaS build and workflow consolidation",
    team: "Ark as product architect, full-stack engineer, and data model owner",
    description:
      "A secure client portal that consolidated projects, documents, approvals, and real-time status into one multi-tenant system.",
    badges: ["200+ clients", "<100ms real-time", "2+ hrs/day saved"],
    stack: ["Next.js", "PostgreSQL", "RBAC", "WebSocket", "Redis", "Cloudflare"],
    palette: "from-indigo-500/30 via-blue-500/20 to-emerald-400/20",
    challenge: [
      "NovaBridge ran client delivery across email threads, spreadsheets, folder links, and weekly status meetings. Clients lacked a single source of truth, internal teams duplicated updates, and leadership could not see which accounts were at risk until a relationship manager escalated the problem manually.",
      "The organization needed a platform that felt enterprise-grade without becoming enterprise-slow. Every account required strict data isolation, role-based permissions, audit trails, branded workspaces, and real-time collaboration between clients and delivery teams.",
      "The goal was to convert operational friction into client trust: fewer status meetings, faster approvals, visible delivery health, and a system that could support hundreds of accounts without a new operations team."
    ],
    decisions: [
      {
        decision: "Tenancy model",
        choice: "Shared PostgreSQL schema with tenant-scoped access layer and RBAC",
        alternatives: "Database per tenant, schema per tenant, ad hoc account filters",
        why: "Balanced isolation, operational simplicity, reporting needs, and fast provisioning for new clients."
      },
      {
        decision: "Collaboration updates",
        choice: "WebSocket presence and event streams with Redis fan-out",
        alternatives: "Polling, third-party collaboration SDK, email-only notifications",
        why: "Delivered sub-100ms perceived updates while keeping the system portable and cost-controlled."
      },
      {
        decision: "Document workflow",
        choice: "Versioned document records with approval states and audit events",
        alternatives: "External drive links, CMS pages, simple attachments",
        why: "Created defensible client history and reduced ambiguity around approvals."
      }
    ],
    phases: [
      {
        title: "Map delivery operations",
        description:
          "Modeled clients, projects, milestones, approvals, files, comments, and permissions from actual delivery workflows rather than generic CRM assumptions."
      },
      {
        title: "Build the multi-tenant platform",
        description:
          "Implemented tenant provisioning, RBAC, project dashboards, document workflows, notifications, and real-time activity feeds."
      },
      {
        title: "Roll out with adoption analytics",
        description:
          "Migrated pilot accounts, trained account managers, and added usage analytics to identify where clients still fell back to email."
      }
    ],
    challenges: [
      {
        problem: "Account data existed in disconnected tools with inconsistent naming and ownership.",
        impact: "Teams spent hours reconciling project status before client calls.",
        solution: "Designed canonical entities for clients, workspaces, projects, milestones, and approval records, then built import tools around that model.",
        result: "Account managers saved more than two hours per day on status preparation and follow-up."
      },
      {
        problem: "Permissions had to support internal delivery teams, client executives, client operators, and external collaborators.",
        impact: "A simple role model would either expose sensitive data or create constant admin work.",
        solution: "Implemented layered RBAC with tenant, project, and resource scopes plus audit events for privileged actions.",
        result: "The portal supported 200+ clients with confident data isolation."
      },
      {
        problem: "Clients expected modern real-time feedback after commenting, approving, or uploading documents.",
        impact: "Without instant confirmation, users returned to email and Slack for reassurance.",
        solution: "Added WebSocket event streams, optimistic UI, and notification fan-out for status-changing actions.",
        result: "Core collaboration interactions updated in under 100ms perceived latency."
      }
    ],
    aiFeatures: [
      {
        feature: "Client health summarization",
        business: "Leadership sees which accounts need attention before a renewal risk becomes obvious.",
        architecture: "Project events, sentiment signals, overdue milestones, and comment velocity feed a Claude-generated account brief with structured risk factors.",
        evaluation: "Compared summaries against weekly account manager notes for precision, missing risk signals, and false escalation rates.",
        impact: "Improved executive visibility while reducing manual reporting burden."
      },
      {
        feature: "Meeting and update draft assistance",
        business: "Account managers generate accurate weekly updates from the portal's actual activity instead of starting from a blank document.",
        architecture: "Retrieval over milestone changes, approvals, blockers, and recent comments with deterministic templates for client-ready language.",
        evaluation: "Human approval workflow measured edit distance and factual correction frequency.",
        impact: "Helped teams reclaim 2+ hours per day from reporting work."
      }
    ],
    results: [
      { metric: "Client accounts supported", before: "Fragmented across tools", after: "200+ in one portal" },
      { metric: "Real-time update latency", before: "Minutes to hours", after: "<100ms perceived" },
      { metric: "Reporting prep time", before: "2-3 hrs/day", after: "Minutes per account" },
      { metric: "Approval traceability", before: "Email archaeology", after: "Complete audit trail" }
    ],
    architecture: `Client / Internal Users\n  |\n  v\nNext.js Portal + RBAC Middleware\n  |\n  +--> Tenant API --> PostgreSQL\n  |\n  +--> WebSocket Gateway --> Redis Fan-out\n  |\n  +--> Document Store + Audit Log\n  |\n  +--> AI Briefing Engine --> Claude`,
    stackSummary: "Next.js 16 · TypeScript · PostgreSQL · Redis · WebSocket · RBAC · Anthropic Claude"
  },
  {
    slug: "learn",
    title: "AI-Powered Education at Scale",
    shortTitle: "Adaptive Learning Platform",
    client: "Beacon Learning",
    industry: "Education Technology",
    liveUrl: "https://learn.chakrakali.com",
    timeline: "10 weeks",
    companySize: "EdTech provider serving 10K+ students",
    engagement: "AI product build, learning analytics, content automation",
    team: "Ark as AI architect and full-stack product engineer",
    description:
      "An adaptive learning platform that personalizes practice, accelerates curriculum creation, and gives educators actionable mastery data.",
    badges: ["+40% test scores", "10K+ students", "14x faster content"],
    stack: ["Next.js", "FastAPI", "PostgreSQL", "Embeddings", "Claude", "Analytics"],
    palette: "from-cyan-500/30 via-blue-500/20 to-violet-500/20",
    challenge: [
      "Beacon Learning had strong educators and curriculum, but the product could not personalize instruction at the pace students needed. Teachers manually created remediation material, students repeated content they had already mastered, and leadership lacked precise insight into where cohorts were falling behind.",
      "The platform had to serve thousands of students with guardrails appropriate for education: explainable recommendations, age-appropriate language, curriculum alignment, and measurable learning outcomes. AI could not be a novelty layer; it needed to improve mastery and save teachers time.",
      "The engagement centered on building a learning loop: diagnose knowledge gaps, generate targeted practice, evaluate student responses, and feed reliable analytics back to educators."
    ],
    decisions: [
      {
        decision: "Personalization model",
        choice: "Mastery graph with AI-assisted recommendations",
        alternatives: "Simple quiz scoring, black-box adaptive engine, manual teacher assignment only",
        why: "Kept recommendations explainable to teachers while allowing fine-grained intervention."
      },
      {
        decision: "Content generation",
        choice: "Template-constrained Claude generation with educator review",
        alternatives: "Fully manual authoring, unreviewed AI generation, external content marketplace",
        why: "Accelerated content while preserving curriculum quality and instructional voice."
      },
      {
        decision: "Analytics",
        choice: "Event-based learning analytics with cohort dashboards",
        alternatives: "Static gradebook, BI export only, LMS plugin",
        why: "Enabled real-time intervention and product experimentation."
      }
    ],
    phases: [
      {
        title: "Define mastery architecture",
        description:
          "Translated curriculum standards into skills, prerequisites, assessment events, and mastery thresholds that teachers could understand."
      },
      {
        title: "Build adaptive practice",
        description:
          "Implemented student journeys, diagnostic quizzes, recommendation logic, content generation workflows, and teacher review queues."
      },
      {
        title: "Measure outcomes",
        description:
          "Added cohort analytics, A/B instrumentation, and evaluation rubrics for generated explanations and practice items."
      }
    ],
    challenges: [
      {
        problem: "Students received the same lessons regardless of mastery level.",
        impact: "Advanced students disengaged while struggling students accumulated hidden gaps.",
        solution: "Built a mastery graph that connected assessment evidence to prerequisite skills and next-best practice recommendations.",
        result: "Test scores improved 40% across pilot cohorts."
      },
      {
        problem: "Teachers needed differentiated practice but lacked time to author variations.",
        impact: "Intervention quality depended on teacher bandwidth rather than student need.",
        solution: "Created AI-assisted content generation constrained by skill, difficulty, standard, explanation style, and answer rubric.",
        result: "Content creation became 14x faster with educator approval retained."
      },
      {
        problem: "Leadership saw grades but not learning mechanics.",
        impact: "Product and curriculum decisions were delayed until end-of-unit assessments.",
        solution: "Instrumented skill-level events and built dashboards for mastery, attempts, hint usage, and misconception clusters.",
        result: "Educators could intervene during the learning cycle rather than after failure."
      }
    ],
    aiFeatures: [
      {
        feature: "Adaptive practice generator",
        business: "Teachers create targeted practice for a specific gap, reading level, and standard in minutes.",
        architecture: "Claude receives structured curriculum context, examples, constraints, and rubric output schema; generated items enter a review queue.",
        evaluation: "Items scored for standard alignment, correctness, difficulty match, and explanation clarity before release.",
        impact: "14x faster content production and broader coverage of remediation paths."
      },
      {
        feature: "Student explanation coach",
        business: "Students get hints that guide reasoning without simply giving away the answer.",
        architecture: "Response analysis detects misconception category, retrieves relevant concept scaffolds, and generates hint tiers.",
        evaluation: "Teacher-reviewed hint sets and learning gain analysis across attempts.",
        impact: "+40% test score lift in pilot usage."
      }
    ],
    results: [
      { metric: "Assessment performance", before: "Baseline cohort", after: "+40% test scores" },
      { metric: "Students supported", before: "Pilot-only workflows", after: "10K+ students" },
      { metric: "Content authoring speed", before: "Hours per skill set", after: "14x faster" },
      { metric: "Skill visibility", before: "Unit-level grades", after: "Real-time mastery graph" }
    ],
    architecture: `Student App\n  |\n  v\nLearning API --> PostgreSQL Mastery Graph\n  |              |\n  |              +--> Analytics Dashboard\n  +--> Recommendation Engine\n  +--> AI Content Generator --> Educator Review\n  +--> Explanation Coach --> Claude`,
    stackSummary: "Next.js 16 · TypeScript · FastAPI · PostgreSQL · Embeddings · Anthropic Claude · Learning Analytics"
  },
  {
    slug: "calendar",
    title: "Business Automation Suite",
    shortTitle: "Smart Calendar & Daily Brief",
    client: "Meridian Consulting",
    industry: "Professional Services",
    liveUrl: "https://calendar.chakrakali.com",
    timeline: "5 weeks",
    companySize: "Boutique consulting firm with distributed client teams",
    engagement: "Workflow automation, calendar intelligence, briefing system",
    team: "Ark as automation architect and full-stack engineer",
    description:
      "A calendar intelligence system that captures meetings, prepares daily briefs, and protects deep-work time for consultants.",
    badges: ["3+ hrs/day saved", "100% meeting capture", "25% more deep work"],
    stack: ["Next.js", "Calendar APIs", "PostgreSQL", "Claude", "Cron", "Email"],
    palette: "from-amber-400/25 via-purple-500/20 to-blue-500/25",
    challenge: [
      "Meridian's consultants were losing hours each day to meeting preparation, context switching, and follow-up administration. Important client context lived across calendars, notes, email threads, and documents. The cost was not just time; it was reduced presence in meetings and less protected deep-work time for actual client delivery.",
      "The firm needed automation that fit existing behavior rather than forcing another project management tool. Calendar data had to become an operating layer: what is happening today, what changed since the last meeting, what needs follow-up, and which blocks should be defended from low-value scheduling.",
      "The solution had to be trustworthy. A wrong brief before an executive meeting is worse than no brief at all, so every generated insight needed traceable inputs and conservative language."
    ],
    decisions: [
      {
        decision: "Integration layer",
        choice: "Calendar-first workflow with email and notes enrichment",
        alternatives: "Standalone task app, CRM-only workflow, manual daily templates",
        why: "Met consultants where their work already happened and avoided low-adoption tooling."
      },
      {
        decision: "Brief generation",
        choice: "Retrieval-grounded daily briefs with source links",
        alternatives: "Generic LLM summary, static agenda export, manual assistant workflow",
        why: "Provided useful context while keeping outputs verifiable."
      },
      {
        decision: "Time protection",
        choice: "Deep-work scoring and scheduling recommendations",
        alternatives: "Hard calendar rules, no automation, external scheduling assistant",
        why: "Improved focus without creating brittle scheduling conflicts."
      }
    ],
    phases: [
      {
        title: "Observe calendar reality",
        description:
          "Audited meeting patterns, recurring preparation work, follow-up misses, and focus-time erosion across consultant schedules."
      },
      {
        title: "Automate briefs and capture",
        description:
          "Built daily brief generation, meeting capture, action item extraction, and source-linked summaries."
      },
      {
        title: "Optimize the workday",
        description:
          "Added focus-time analytics, scheduling recommendations, and automation rules for repetitive follow-up."
      }
    ],
    challenges: [
      {
        problem: "Consultants prepared for meetings by manually searching across prior notes and emails.",
        impact: "Preparation consumed hours and still missed important context.",
        solution: "Generated daily and per-meeting briefs from calendar events, prior notes, action items, and client context.",
        result: "Consultants saved 3+ hours per day in preparation and follow-up work."
      },
      {
        problem: "Meeting decisions and next steps were inconsistently captured.",
        impact: "Follow-up depended on individual discipline and created client trust risk.",
        solution: "Created a meeting capture workflow with action item extraction, owner assignment, and reminder generation.",
        result: "The firm achieved 100% meeting capture for tracked client sessions."
      },
      {
        problem: "Calendars filled with fragmented meetings and low-value interruptions.",
        impact: "Consultants lacked sustained blocks for analysis, writing, and strategy.",
        solution: "Implemented deep-work scoring, fragmentation analysis, and recommendations for protected blocks.",
        result: "Deep-work availability increased 25%."
      }
    ],
    aiFeatures: [
      {
        feature: "Daily executive brief",
        business: "Every morning, consultants receive a prioritized view of meetings, risks, prep notes, and follow-ups.",
        architecture: "Scheduled jobs retrieve calendar events, notes, and prior action items; Claude creates structured briefs with source references.",
        evaluation: "Consultants rated brief usefulness and flagged missing or unsupported claims.",
        impact: "3+ hours saved per day across preparation and administration."
      },
      {
        feature: "Action item extraction",
        business: "Meeting outcomes turn into assigned next steps instead of disappearing into notes.",
        architecture: "Transcript or note inputs are parsed into structured tasks with owner, due date, client, and confidence fields.",
        evaluation: "Compared extracted tasks against human meeting notes for recall and precision.",
        impact: "100% meeting capture for tracked sessions."
      }
    ],
    results: [
      { metric: "Preparation and follow-up time", before: "3+ hrs/day", after: "Automated briefs and tasks" },
      { metric: "Meeting capture", before: "Inconsistent", after: "100% tracked" },
      { metric: "Deep-work availability", before: "Fragmented", after: "+25%" },
      { metric: "Context quality", before: "Manual search", after: "Source-linked briefs" }
    ],
    architecture: `Calendar + Email + Notes\n  |\n  v\nAutomation Orchestrator --> PostgreSQL\n  |\n  +--> Daily Cron Jobs\n  +--> Brief Retrieval Layer --> Claude\n  +--> Action Item Parser\n  +--> Email / Dashboard Delivery`,
    stackSummary: "Next.js 16 · TypeScript · PostgreSQL · Calendar APIs · Anthropic Claude · Scheduled Jobs · Email Automation"
  },
  {
    slug: "markets",
    title: "Institutional-Grade Research Tools",
    shortTitle: "Trading & Market Intelligence",
    client: "Vaulted Financial",
    industry: "Financial Research",
    liveUrl: "https://markets.chakrakali.com",
    timeline: "7 weeks",
    companySize: "Independent research desk serving active investors",
    engagement: "Market intelligence platform, signal research, dashboard build",
    team: "Ark as data product architect and full-stack engineer",
    description:
      "A market research cockpit that compresses news, filings, watchlists, and signals into a faster decision workflow.",
    badges: ["10x research speed", "67% signal accuracy"],
    stack: ["Next.js", "TimescaleDB", "PostgreSQL", "Claude", "Charts", "Workers"],
    palette: "from-emerald-400/25 via-blue-500/20 to-slate-300/10",
    challenge: [
      "Vaulted Financial's analysts were drowning in market data but starving for synthesis. Research required jumping between filings, news, charts, watchlists, macro calendars, and handwritten notes. By the time an analyst formed a view, the opportunity window had often moved.",
      "The goal was not to build a black-box trading bot. The firm needed institutional-grade research leverage: faster source triage, clearer signal history, explainable alerts, and a workflow that preserved analyst judgment while eliminating repetitive scanning.",
      "Financial AI carries special risk. The system had to separate evidence from interpretation, preserve source links, avoid unsupported recommendations, and make historical performance visible so users could calibrate trust."
    ],
    decisions: [
      {
        decision: "Market data storage",
        choice: "PostgreSQL with Timescale-style time-series modeling",
        alternatives: "Flat files, document store, third-party chart-only widgets",
        why: "Supported fast historical queries, signal backtesting, and familiar relational workflows."
      },
      {
        decision: "AI role",
        choice: "Research summarization and signal explanation, not autonomous trading",
        alternatives: "Automated trading bot, generic chat over news, manual dashboards only",
        why: "Improved analyst speed while keeping decisions accountable and human-led."
      },
      {
        decision: "Alerting",
        choice: "Explainable signal cards with source evidence and confidence history",
        alternatives: "Price-only alerts, opaque ML scores, email blasts",
        why: "Made alerts actionable and auditable."
      }
    ],
    phases: [
      {
        title: "Unify research inputs",
        description:
          "Modeled watchlists, tickers, news, filings, notes, macro events, and price series into a queryable research graph."
      },
      {
        title: "Build analyst cockpit",
        description:
          "Created dashboards for watchlists, signal cards, source timelines, chart context, and research note capture."
      },
      {
        title: "Evaluate signal quality",
        description:
          "Tracked alert outcomes, analyst feedback, and historical accuracy so confidence could be earned instead of assumed."
      }
    ],
    challenges: [
      {
        problem: "Analysts spent most of their time collecting sources rather than forming views.",
        impact: "Research velocity lagged volatile market conditions.",
        solution: "Aggregated sources into ticker timelines and generated evidence-linked research briefs.",
        result: "Research workflows became 10x faster for monitored assets."
      },
      {
        problem: "Alerts lacked context and created noise.",
        impact: "Analysts ignored alerts because they could not distinguish signal from movement.",
        solution: "Built signal cards combining price action, news context, event proximity, and prior signal outcomes.",
        result: "Signal accuracy reached 67% on tracked research hypotheses."
      },
      {
        problem: "AI summaries risked overstating confidence.",
        impact: "Unsupported language could create dangerous decision bias.",
        solution: "Constrained outputs to evidence, uncertainty, counterpoints, and source citations rather than recommendations.",
        result: "The platform improved speed while preserving analyst accountability."
      }
    ],
    aiFeatures: [
      {
        feature: "Market research brief",
        business: "Analysts get a concise, cited summary of what changed for a watchlist before the market opens.",
        architecture: "Source ingestion workers normalize news and filings; retrieval selects recent and material items; Claude produces structured briefs with counterpoints.",
        evaluation: "Analyst ratings, source coverage checks, and hallucination audits against cited material.",
        impact: "10x faster research preparation."
      },
      {
        feature: "Explainable signal cards",
        business: "Alerts explain why they fired, what evidence supports them, and how similar signals performed historically.",
        architecture: "Rule and statistical signals are enriched with source context, historical outcome metrics, and AI-generated plain-English rationale.",
        evaluation: "Tracked precision against defined forward windows and analyst acceptance rates.",
        impact: "67% signal accuracy across monitored hypotheses."
      }
    ],
    results: [
      { metric: "Research preparation", before: "Manual multi-source scan", after: "10x faster" },
      { metric: "Signal accuracy", before: "Unmeasured", after: "67% tracked" },
      { metric: "Alert explainability", before: "Price-only", after: "Evidence-linked cards" },
      { metric: "Source auditability", before: "Scattered tabs", after: "Persistent timelines" }
    ],
    architecture: `Market Data + News + Filings\n  |\n  v\nIngestion Workers --> Time-Series Store + PostgreSQL\n  |\n  +--> Signal Engine --> Explainable Alerts\n  +--> Retrieval Layer --> Claude Research Briefs\n  +--> Analyst Dashboard + Notes`,
    stackSummary: "Next.js 16 · TypeScript · PostgreSQL · TimescaleDB patterns · Anthropic Claude · Data Workers · D3.js"
  },
  {
    slug: "legal",
    title: "AI-Powered Legal Practice",
    shortTitle: "Legal Case Management",
    client: "Silverstone Legal",
    industry: "Legal Services",
    liveUrl: "https://legal.chakrakali.com",
    timeline: "9 weeks",
    companySize: "Regional law firm with litigation and transactional practices",
    engagement: "Case management build, document AI, deadline automation",
    team: "Ark as AI systems architect and product engineer",
    description:
      "A legal operations platform that accelerates document review, drafts routine work, and prevents deadline misses.",
    badges: ["3hr→10min review", "0 missed deadlines", "-70% drafting time"],
    stack: ["Next.js", "PostgreSQL", "pgvector", "Claude", "RBAC", "Audit"],
    palette: "from-violet-500/30 via-slate-400/10 to-blue-500/20",
    challenge: [
      "Silverstone Legal was managing matters with a patchwork of spreadsheets, shared drives, Outlook reminders, and manually assembled templates. Attorneys spent too much time reviewing repetitive documents, paralegals chased deadlines across systems, and matter context was difficult to reconstruct when a case became urgent.",
      "The firm needed AI, but not the theatrical version. Legal workflows require confidentiality, citation discipline, document provenance, permission controls, and a clear line between suggested language and attorney judgment. The product had to increase leverage without increasing professional risk.",
      "The engagement focused on three outcomes: faster document review, safer deadline management, and drafting assistance that used the firm's own matter context and templates rather than generic legal prose."
    ],
    decisions: [
      {
        decision: "Document intelligence",
        choice: "Matter-scoped RAG with pgvector and citation-first responses",
        alternatives: "Generic legal chatbot, manual search, external e-discovery platform",
        why: "Kept answers grounded in firm documents while remaining lightweight enough for daily practice."
      },
      {
        decision: "Deadline system",
        choice: "Rules-based docketing with AI extraction as assistant input",
        alternatives: "AI-only deadline detection, calendar reminders only, manual spreadsheet",
        why: "Combined automation speed with deterministic safeguards for critical dates."
      },
      {
        decision: "Security model",
        choice: "Matter-level RBAC, audit trails, and document provenance",
        alternatives: "Shared folders, account-level permissions only, open internal search",
        why: "Matched legal confidentiality requirements and reduced accidental exposure risk."
      }
    ],
    phases: [
      {
        title: "Structure matters and documents",
        description:
          "Modeled clients, matters, filings, correspondence, deadlines, document versions, and privileged access boundaries."
      },
      {
        title: "Build legal AI workflows",
        description:
          "Implemented matter search, document review summaries, clause extraction, draft generation, and attorney approval loops."
      },
      {
        title: "Harden deadline operations",
        description:
          "Added docketing rules, reminders, audit logs, and exception dashboards for upcoming obligations."
      }
    ],
    challenges: [
      {
        problem: "Document review required attorneys to read long files just to find key facts, clauses, or risks.",
        impact: "Routine review consumed hours of expensive legal time.",
        solution: "Built matter-scoped document analysis with summaries, extracted obligations, citations, and confidence indicators.",
        result: "Typical review time dropped from three hours to ten minutes for supported document classes."
      },
      {
        problem: "Deadlines were tracked in multiple systems with manual reminders.",
        impact: "The firm carried constant operational risk around filings and response dates.",
        solution: "Created deterministic deadline records, calendar sync, AI-assisted extraction, and review queues for ambiguous dates.",
        result: "Tracked matters recorded zero missed deadlines during pilot operation."
      },
      {
        problem: "Drafting routine letters and motions repeated the same structure with matter-specific facts.",
        impact: "Attorneys spent time on boilerplate instead of strategy.",
        solution: "Connected approved templates to matter facts and generated draft language with source-linked assumptions for attorney review.",
        result: "Drafting time fell 70% while review authority stayed with attorneys."
      }
    ],
    aiFeatures: [
      {
        feature: "Matter-aware document review",
        business: "Attorneys receive a structured summary of key facts, clauses, risks, and citations for each uploaded document.",
        architecture: "Documents are parsed, chunked, embedded in pgvector by matter, retrieved with metadata filters, and summarized by Claude with mandatory citations.",
        evaluation: "Attorney review measured citation accuracy, missed issue rate, and unsupported claim frequency.",
        impact: "Review time reduced from three hours to ten minutes."
      },
      {
        feature: "Deadline and obligation extraction",
        business: "Potential deadlines surface automatically, but critical dates still require human confirmation before docketing.",
        architecture: "AI extracts date candidates and legal context; deterministic rules classify reminders, dependencies, and escalation windows.",
        evaluation: "Compared extracted dates against paralegal docketing logs for recall and false positives.",
        impact: "Zero missed deadlines during tracked pilot."
      },
      {
        feature: "Template-based drafting assistant",
        business: "Routine drafts start from firm-approved templates populated with matter facts and citations.",
        architecture: "Template library, matter retrieval, Claude drafting, assumption list, and attorney approval workflow.",
        evaluation: "Tracked attorney edits, rejected clauses, and factual correction rates.",
        impact: "Drafting time reduced 70%."
      }
    ],
    results: [
      { metric: "Document review time", before: "3 hours", after: "10 minutes" },
      { metric: "Missed deadlines", before: "Persistent operational risk", after: "0 in pilot" },
      { metric: "Routine drafting time", before: "Manual template editing", after: "-70%" },
      { metric: "Matter search", before: "Folder browsing", after: "Citation-grounded retrieval" }
    ],
    architecture: `Attorneys + Paralegals\n  |\n  v\nLegal Case App + Matter RBAC\n  |\n  +--> PostgreSQL Matters + Deadlines\n  +--> Document Parser --> pgvector\n  +--> RAG Review Engine --> Claude\n  +--> Template Drafting + Approval\n  +--> Audit Log + Calendar Sync`,
    stackSummary: "Next.js 16 · TypeScript · PostgreSQL · pgvector · Anthropic Claude · RBAC · Audit Logs · Calendar Sync"
  }
];

export function getCaseStudy(slug: string) {
  return caseStudies.find((study) => study.slug === slug);
}
