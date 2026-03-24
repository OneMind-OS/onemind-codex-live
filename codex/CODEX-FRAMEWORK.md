---
title: "THE CODEX FRAMEWORK"
type: doctrine
status: active
created: 2026-03-19
updated: 2026-03-24
owner: zeus
tags: [type/doctrine, status/active]
ai_summary: "Deep dive on the CODEX method — Capture, Organize, Direct, Execute, × Multiply — with entity taxonomy, progressive activation, and the full system design"
---

# THE CODEX FRAMEWORK

> Capture → Organize → Direct → Execute → × Multiply

---

## The Thesis

Every personal knowledge framework built before 2024 shares the same fatal flaw: **they were designed for a world without AI agents.**

Here's what breaks:

| Problem | Why It Kills Your System |
|---------|------------------------|
| **No context for AI** | Your notes are unstructured prose. An AI agent can't scan 500 files to find what matters. It needs typed metadata, summaries, and status fields — or it drowns in noise. |
| **No structure for AI to act** | Even if an agent reads your notes, there's no execution framework. What's a task? What's a priority? What's delegated? GTD has next actions but no concept of AI delegation. |
| **No permission model** | Who writes what? Can an agent create a new project? Update a status? Agents need guardrails — where they can write, where they can't, what templates to use. |
| **Doesn't survive tool changes** | Systems built on Notion databases, Roam graphs, or Evernote stacks die when you switch tools. Your life OS must be plain files in folders — portable, version-controlled, permanent. |

The CODEX method solves all four. Every document is machine-readable. Execution is built in. Agents have explicit guardrails. And the whole system is plain Markdown files.

---

## The CODEX Method

Five steps. One compounding loop.

```
  ┌─────────┐    ┌───────────┐    ┌────────┐    ┌─────────┐    ┌──────────┐
  │ CAPTURE │───▶│ ORGANIZE  │───▶│ DIRECT │───▶│ EXECUTE │───▶│ × MULTI- │
  │         │    │           │    │        │    │         │    │   PLY    │
  └─────────┘    └───────────┘    └────────┘    └─────────┘    └──────────┘
   Inbox, voice,   4 quadrants,    Command:       Operators      Review,
   quick capture   100 domains,    prioritize,    run the work:  measure,
   from anywhere   entity types,   assign owner,  humans, agents,extract
                   frontmatter     define done     SOPs, skills   lessons
                                                                    │
                        ◀─── each cycle multiplies the system ─────┘
```

**The X in CODEX is × — the multiplication sign.** Every cycle through the loop doesn't just complete a task. It multiplies the system's intelligence: metrics get tracked, SOPs get refined, agents get smarter, knowledge compounds. CODEX isn't a line — it's a flywheel, and × is what makes it spin faster.

---

## C — Capture

**Everything starts as input.** A thought, a voice note, a screenshot, a meeting takeaway, a link, a PDF. Capture is the act of getting it *into the system* before it disappears.

### Sources

- Quick text notes (phone, desktop, voice transcription)
- Conversations (meeting notes, call summaries)
- Web clips (articles, references, research)
- Agent output (AI-generated reports, summaries, analysis)
- External feeds (email digests, RSS, notifications)

### Rules

1. **Capture fast, organize later.** Don't stop to categorize in the moment. Get it in.
2. **Use the inbox.** If you don't know where it goes, it goes to `06 Inbox (Queue)/` in the relevant quadrant — or the top-level staging area if the quadrant is unclear.
3. **Use templates.** Even quick captures should use the appropriate template from `_codex/templates/`. This ensures frontmatter is present from the start.
4. **Frontmatter from birth.** Every document gets YAML frontmatter when created — at minimum: `title`, `type`, `status`, `created`, `tags`.

### The Inbox

Every quadrant has a `06 Inbox (Queue)/` subdirectory for unsorted captures. During the Organize step (or the weekly review), items get routed to their proper domain folder.

---

## O — Organize

**Structure is what makes the system navigable — for humans and AI.**

### The Four Quadrants

| ID Range | Quadrant | Domain |
|----------|----------|--------|
| 00–24 | **UI** — Unified Intelligence | Technology, AI, infrastructure |
| 25–49 | **HP** — Holistic Performance | Health, skills, personal growth |
| 50–74 | **LE** — Legacy Evolution | Family, home, estate |
| 75–99 | **GE** — Generational Entrepreneurship | Business, ventures, wealth |

### The 100-Domain System

Each quadrant has 25 numbered domains (e.g., `00 System Core`, `25 Identity`, `50 Home`, `75 Brand`). Domains are the primary organizational unit — more stable than projects, more granular than quadrants.

**You don't start with 100 domains.** See [Progressive Activation](#progressive-activation) below — you start with 4 quadrants and activate domains as your life expands. The 100 slots are the ceiling, not the floor.

### Entity Types

Every piece of information in the vault has a **type** that tells both humans and AI what it is. The Organize step is where you assign the right type. See [Entity Taxonomy](#entity-taxonomy) for the full list.

### Frontmatter

Every document has YAML frontmatter. This is non-negotiable — it's how agents navigate the vault without reading every file.

```yaml
---
title: "Document Title"
type: goal                    # See Entity Taxonomy for all types
status: active                # active | draft | archived | paused
created: 2026-03-19
updated: 2026-03-19
owner: zeus                   # human name, agent name, or "system"
operator: human               # human | agent | robot | drone | automated
realm: digital                # digital | physical | hybrid
domain: "00 System Core"
tags: [type/goal, domain/system, status/active]
ai_summary: "One-line summary an AI agent can scan without reading the full document"
---
```

### Tags

Tags follow a namespace convention:

- `type/*` — entity type (`type/goal`, `type/task`, `type/sop`, `type/agent`)
- `domain/*` — knowledge domain (`domain/system`, `domain/health`, `domain/business`)
- `status/*` — document status (`status/active`, `status/draft`, `status/archived`)
- `project/*` — project association (`project/onemind`, `project/farm`)
- `operator/*` — who owns execution (`operator/legacy`, `operator/zeus`, `operator/spartan`)

---

## D — Direct

**The command layer. This is what makes CODEX an operating system instead of a filing cabinet.**

Direct is the step that doesn't exist in any prior framework. CODE goes Capture → Organize → Distill → Express. There's no decision point. No delegation. No "who does this?" You just... do it yourself.

**Direct is where you stop being a note-taker and become a commander.**

### The Five Questions

Every item that reaches the Direct step gets answered:

```
┌──────────────────────────────────────────────────────────────────────┐
│                          D — DIRECT                                  │
│                                                                      │
│  1. WHAT MATTERS?    → Priority   (rank it: critical/high/med/low)  │
│  2. WHO DOES IT?     → Operator   (human / agent / robot / drone)   │
│  3. WHAT TYPE IS IT? → Entity     (goal / project / task / SOP)     │
│  4. WHAT IS "DONE"?  → Criteria   (measurable success definition)   │
│  5. WHEN?            → Timeline   (deadline, cadence, or trigger)   │
│                                                                      │
│  INPUT:  Organized knowledge sitting in your vault                   │
│  OUTPUT: Directed work with clear ownership and success criteria     │
└──────────────────────────────────────────────────────────────────────┘
```

### Why "Direct" Beats "Distill"

| | Forte's "Distill" | One Mind's "Direct" |
|---|---|---|
| **What it does** | Highlight the important parts of a note | Decide what gets done, by whom, when, and what "done" means |
| **Who benefits** | You (you read your own highlights later) | The entire system — humans AND agents get marching orders |
| **Output** | A shorter, highlighted note | An assigned, prioritized, owned action with success criteria |
| **Metaphor** | Editor highlighting a book | Commander directing an operation |
| **AI role** | None | AI can be the one receiving the direction |

**Distill is passive.** You're making notes easier to re-read.
**Direct is active.** You're making decisions and deploying resources.

### The Direction Hierarchy

Direct works at three levels:

```
GOAL    "Run a marathon by December"           ← Long-term outcome
  └── PROJECT  "Q2 Marathon Training Block"    ← Bounded effort toward the goal
        ├── TASK  "Run 5 miles Tuesday"        ← Single action
        ├── TASK  "Book sports massage"        ← Single action
        └── SOP   "Weekly long run protocol"   ← Repeatable process
```

Each level can have a different operator:
- The **Goal** is human-directed (you set the vision)
- The **Project** might be co-piloted (agent tracks progress, human does the work)
- Individual **Tasks** can be routed to agents (research, scheduling, analysis)
- **SOPs** define exactly how repeatable work gets done by any operator

### Routing Table

| Operator | Route To When... | Examples |
|----------|-----------------|----------|
| **Human** | Requires judgment, creativity, physical presence, or high-stakes decisions | Exercise, parenting, client calls, creative writing |
| **Agent** | Research, analysis, drafting, monitoring, data processing | Market research, email drafts, metric tracking, inbox triage |
| **Robot** | Physical automation, sensor monitoring | Smart home, security cameras, manufacturing |
| **Drone** | Autonomous physical tasks, remote operations | Property survey, delivery, agricultural monitoring |
| **Automated** | Recurring tasks, scheduled events, system maintenance | Backups, report generation, scheduled reminders |

### Decision Documents

Non-trivial decisions get their own document using the `decision` template. This captures context, options considered, rationale, and outcome — creating an audit trail that agents and future-you can reference.

---

## E — Execute

**Action happens here.** This is where One Mind diverges from every prior framework — because execution isn't human-only anymore.

### Human Execution

Some things only humans can do: physical tasks, relationship conversations, creative work requiring taste, high-stakes decisions. These get tracked as tasks with clear ownership.

### Agent Execution

AI agents can:

- **Research** — gather information, summarize sources, compare options
- **Draft** — write documents, emails, proposals, reports
- **Analyze** — process data, generate insights, build comparisons
- **Monitor** — watch for changes, alert on conditions, track progress
- **Maintain** — update documents, clean inboxes, enforce conventions

Agents execute against SOPs (Standard Operating Procedures) documented in the vault. An SOP defines the steps, tools, inputs, outputs, and quality criteria — so an agent knows exactly what "do this task" means.

### Skills & Tools

**Skills** are portable capability definitions in `_codex/skills/`. Each skill describes what it does, what inputs it needs, and what it outputs. Skills are agent-agnostic — any AI can learn them.

**Tools** are specific software or hardware bound to an environment (Obsidian, Claude, a 3D printer). Tools enable skills. Skills are the "what," tools are the "with what."

```
SKILL: "Research a market competitor"
  TOOLS USED: web search, Claude, spreadsheet
  INPUT: competitor name, industry
  OUTPUT: competitive analysis document

SKILL: "Monitor soil moisture"
  TOOLS USED: IoT sensors, dashboard
  INPUT: field zone ID
  OUTPUT: moisture readings + irrigation alert
```

---

## × — Multiply

**The compounding engine. Every cycle through CODEX multiplies the system's intelligence.**

The × step is what separates a living system from a digital junk drawer. Without it, you capture and execute but never improve. With it, each cycle makes the entire system smarter:

- **SOPs get refined** — what didn't work gets fixed
- **Metrics get tracked** — you see trends, not just events
- **Agents get smarter** — their context improves with every review
- **Knowledge compounds** — lessons feed back into Capture as new inputs

### Weekly Review (~30 min)

Every week:

1. **Process inboxes** — route or archive every captured item
2. **Update active projects** — status check on in-progress work
3. **Review agent output** — what did agents produce? Is it meeting standards?
4. **Adjust priorities** — what's changed? What's more urgent now?
5. **Capture reflections** — what worked, what didn't, what to change

### Monthly Review (~60 min)

Every month:

1. **Quadrant health check** — are all four quadrants getting attention or is one starving?
2. **Metric review** — track key metrics for each quadrant
3. **System maintenance** — archive stale documents, update templates, refine conventions
4. **Goal alignment** — are daily actions serving quarterly/annual goals?

### Quarterly Review (~2-3 hours)

Every quarter:

1. **Read all monthly reviews** — identify patterns and themes
2. **Review major decisions** — are they holding up?
3. **Review long-term projects** — on track or need recalibration?
4. **Set next quarter priorities** — update `_codex/system/active-goals.md`

### Review Profiles

`_codex/profiles/` contains structured review profiles — checklists and prompts for weekly, monthly, and quarterly reviews. These can be run by humans alone or co-piloted with an AI agent.

### The Multiplication Effect

```
CYCLE 1: Capture a business idea → Organize → Direct to agent → Agent researches
         → × Review: market exists, idea validated. Lesson: this agent prompt works.

CYCLE 2: Same prompt reused (faster). Agent finds competitors. You refine the SOP.
         → × Review: SOP v2 is 2x faster. Agent context now includes market data.

CYCLE 3: SOP runs automatically on new ideas. Agent pre-scores opportunities.
         → × Review: System now handles 80% of market validation without you.

Each × makes the next C-O-D-E faster, smarter, and more autonomous.
```

---

## Entity Taxonomy

One Mind knows WHAT something is, WHO owns it, and WHERE it lives. PARA treats everything as "a note in a folder." Your system has 16 entity types across 5 categories.

### The Full Entity System

```
CODEX ENTITY SYSTEM
│
├── 🎯 INTENT (what you want)
│   ├── goal        — Long-term outcome ("Run a marathon by December")
│   ├── project     — Bounded effort toward a goal ("Marathon training plan")
│   └── task        — Single action ("Run 5 miles Tuesday")
│
├── 🧠 KNOWLEDGE (what you know)
│   ├── note        — Captured thought, observation, idea
│   ├── decision    — Recorded choice with context + rationale
│   ├── doctrine    — Core philosophy, non-negotiable truth
│   ├── reference   — External resource, spec, guide
│   └── sop         — Standard Operating Procedure (repeatable process)
│
├── 📊 MEASUREMENT (how you track)
│   ├── metric      — Tracked number (weight, revenue, sprint pace)
│   └── review      — Periodic assessment (weekly, monthly, quarterly)
│
├── 🤖 OPERATOR (who/what does the work)
│   ├── human       — You, family member, team member, contractor
│   ├── agent       — AI agent (Legacy, Spartan, Oracle, etc.)
│   ├── robot       — Physical automation (smart home, CNC, etc.)
│   └── drone       — Autonomous physical agent
│
└── 🔧 CAPABILITY (what you can do)
    ├── skill       — Portable ability definition (research, draft, analyze)
    └── tool        — Specific software/hardware (Obsidian, Claude, 3D printer)
```

### How Entities Map to CODEX Steps

| CODEX Step | Primary Entities |
|-----------|------------------|
| **C — Capture** | `note`, `reference` — raw inputs enter the system |
| **O — Organize** | All types — assign type, domain, owner, frontmatter |
| **D — Direct** | `goal` → `project` → `task` (break down intent), assign `operator` |
| **E — Execute** | `task` + `sop` + `skill` + `tool` — operators run the work |
| **× — Multiply** | `metric` + `review` — track results, extract lessons, compound value |

### Entity Coordinates

Every entity has **three coordinates** that tell you exactly where it lives and what it is:

```
QUADRANT → DOMAIN → ENTITY TYPE

HP / 27-Body     / goal-run-marathon.md
HP / 27-Body     / metric-weight.md
HP / 27-Body     / sop-morning-workout.md
GE / 84-Ventures / project-launch-academy.md
GE / 84-Ventures / task-setup-stripe.md
UI / 02-Agents   / agent-legacy.md
UI / 02-Agents   / skill-research.md
LE / 50-Home     / task-fix-fence.md
LE / 56-Wealth   / note-estate-plan-options.md
```

### Entity Properties

Every entity can carry two key properties in its frontmatter:

| Property | Values | Purpose |
|----------|--------|---------|
| `operator` | `human`, `agent`, `robot`, `drone`, `automated` | Who/what is responsible for this entity |
| `realm` | `digital`, `physical`, `hybrid` | Is this entity in the digital world, physical world, or both |

Examples:
- A `task` to write a blog post → `operator: agent`, `realm: digital`
- A `task` to fix the fence → `operator: human`, `realm: physical`
- A `project` to launch a product → `operator: human`, `realm: hybrid`
- A `metric` for soil moisture → `operator: robot`, `realm: physical`

---

## Progressive Activation

**Start with 4. Grow to 100. Never feel overwhelmed.**

The 100-domain system is the architecture — the full map of your life. But you don't start with the full map. You start with the 4 quadrants and activate domains as your life demands them.

### Day 1 — Just 4 Quadrants (Simpler Than PARA)

```
┌─────────────────────────────────────────────────────────────────┐
│  UI                  HP                 LE              GE      │
│  Tech & AI           You & Health       Family          Business│
│  (your tools)        (your body)        (your people)   (your $)│
└─────────────────────────────────────────────────────────────────┘

"Drop it in the right quadrant. That's it."
```

On your first day, you don't think about domains at all. You see 4 buckets. Captured something about your health? Drop it in HP. Business idea? GE. Server configuration? UI. Family matter? LE.

This is **simpler than PARA** — PARA asks you to decide between Projects, Areas, Resources, and Archives (confusing boundaries). Quadrants are obvious life domains.

### Week 1 — Activate Your Starter Domains (8–12)

After a few days of capturing, patterns emerge. Activate only the domains you're actually using:

```
STARTER KIT (suggested — customize to your life):

UI:  00 Framework, 02 Agents, 06 Inbox
HP:  25 Identity, 27 Body, 29 Life Systems, 30 Finance
LE:  50 Home, 52 Children
GE:  75 Brand, 81 Strategy

That's 10-12 domains. Most people start here.
```

### Month 1+ — Domains Unlock As Life Expands

As your system grows, you activate new domains:
- Started investing? Activate `LE/56 Wealth`
- Learning a new skill? Activate `HP/28 Mastery`
- New business venture? Activate `GE/84 Ventures`

### The Scale

| Stage | Domains | Who |
|-------|---------|-----|
| **Beginner** | 4 quadrants (no domains) | Day 1 users |
| **Starter** | 8–12 domains | Week 1 users |
| **Established** | 15–30 domains | Regular users |
| **Power** | 30–50 domains | Serious builders |
| **Dynasty** | 50–100 domains | Multi-generational estates |

**Most people will use 15–30 domains.** The 100-slot system means you'll never outgrow it — but you don't need to fill it.

### PARA vs. One Mind Onboarding

| | PARA | One Mind |
|---|---|---|
| **Day 1** | 4 folders. Use all 4. | 4 quadrants. Drop things in. |
| **Month 1** | Still 4 folders. | Activate 10-12 domains. |
| **Year 1** | Still 4 folders. You've outgrown them. | 20-40 domains. Still growing. |
| **The ceiling** | 4 folders forever. | 100 domains. You never outgrow it. |

---

## Progressive Disclosure

Agents (and humans) don't need to read everything to navigate the vault. The system is designed for layered context loading:

| Level | What | When |
|-------|------|------|
| **L0** | `_codex/system/` — pinned context files | Always loaded first. Contains current state, active priorities, operational rules. |
| **L1** | `ai_summary` field in frontmatter | Scan across many files quickly. Read the one-liner to decide if the full document matters. |
| **L2** | Full document content | Read when the summary indicates relevance. |
| **L3** | Linked documents (wiki-links, references) | Follow when deeper context is needed. |

This means an agent can understand the current state of your life by reading ~5 system files (L0), scan 100 documents by reading 100 one-liners (L1), and only deep-read the 3 that matter (L2). Efficient, focused, scalable.

---

## Build Your CODEX

The framework is the skeleton. Your content is the muscle.

1. **Capture** — get things into the system
2. **Organize** — route to the right quadrant and domain, tag with the right entity type
3. **Direct** — command: decide what matters, who does it, what done looks like
4. **Execute** — operators (human + AI) do the work
5. **× Multiply** — review, measure, extract lessons, feed back into Capture

The loop compounds. Every cycle makes the system smarter, the agent context richer, your SOPs sharper, and your decisions better-informed. That's the multiplication effect.

That's the CODEX.

---

*Part of the One Mind framework. See [ONEMIND-CODEX.md](ONEMIND-CODEX.md) for the master document.*
