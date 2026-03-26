# CLAUDE.md — Agent Context for One Mind Codex Live

> This file is the entry point for any AI agent working on this repository.
> Read this FIRST before making any changes.

---

## What This Repository Is

**onemind-codex-live** is the public-facing template and Quartz-powered website for the One Mind Codex framework — a solar-punk, AI-native life operating system built on plain Markdown files.

- **Content lives in:** `Codex/` (the vault — all `.md` files)
- **Site generator:** Quartz v4.5.2 (static site from Markdown)
- **Deploy target:** Cloudflare Pages via GitHub Actions
- **Build command:** `npx quartz build -d codex`
- **Public URL:** codex.onemindos.com
- **Owner:** Zeus Delacruz (@zeuslegacy)
- **Org:** OneMind-OS

### Related Repositories

| Repo | Purpose | Visibility |
|------|---------|------------|
| `onemind-codex` | Zeus's PRIVATE vault (the real brain) | Private |
| `onemind-codex-live` | THIS repo — public template + Quartz site | Public |
| `onemind-codex-template` | Community starter template (auto-syncs from live) | Public |
| `onemind-ui` | Next.js dashboard (future) | Private |

---

## Framework Architecture (CRITICAL — Read Carefully)

### The 3+1 Model

One Mind OS is **three life domains running on one operating layer** — NOT four equal quadrants.

```
┌───────────────────────────────────────────────────────┐
│           SO — Sovereign Operations (00–24)            │
│           The operating layer that runs everything     │
├─────────────────┬──────────────────┬──────────────────┤
│  HP (25–49)     │  LE (50–74)      │  GE (75–99)      │
│  Holistic       │  Legacy          │  Generational    │
│  Performance    │  Evolution       │  Endeavor        │
│  YOUR SELF      │  YOUR FOUNDATION │  YOUR ENDEAVOR   │
└─────────────────┴──────────────────┴──────────────────┘
```

**SO is NOT a domain. It is the operating layer.** Think macOS vs apps.

### The CODEX Method

**C**apture → **O**rganize → **D**irect → **E**xecute → **×** Multiply

- × is the multiplication sign (not the letter X)
- Each review cycle compounds the system's intelligence
- The 5 steps form a LOOP (× feeds back to C)

### Domain Descriptions

| Code | Name | Tagline | What Lives Here |
|------|------|---------|-----------------|
| **SO** | Sovereign Operations | Command your system | Agents, tools, protocols, infrastructure, inbox |
| **HP** | Holistic Performance | YOUR SELF | Health, mind, skills, money, identity |
| **LE** | Legacy Evolution | YOUR FOUNDATION | Relationships, community, home, environment |
| **GE** | Generational Endeavor | YOUR ENDEAVOR | Career, ventures, brand, impact, wealth |

---

## Naming Decisions (FINAL — Do Not Re-Litigate)

These naming decisions were extensively debated and finalized. Do NOT change them without explicit owner approval.

### Names That Are Locked

| Element | Final Name | Why | Previous Names |
|---------|-----------|-----|----------------|
| Operating layer | **SO — Sovereign Operations** | "Sovereign" reinforces personal autonomy thesis | UI (Unified Intelligence) → IO (Intelligent Operations) → SO |
| Health domain | **HP — Holistic Performance** | Universal, covers whole person | *(unchanged)* |
| Legacy domain | **LE — Legacy Evolution** | Universal, not family-specific | *(unchanged, descriptions made human-agnostic)* |
| Value creation | **GE — Generational Endeavor** | "Endeavor" = any purposeful undertaking. Non-corporate, universal. | Entrepreneurship → Expansion → Enterprise → **Endeavor** |
| LE tagline | **YOUR FOUNDATION** | Universal — everyone has a foundation | YOUR FAMILY → YOUR WORLD → **YOUR FOUNDATION** |
| GE tagline | **YOUR ENDEAVOR** | Matches the domain name | YOUR BUSINESS → YOUR GROWTH → YOUR ENTERPRISE → **YOUR ENDEAVOR** |

### Active Naming Discussions (May Revisit)

The naming framework has gone through several iterations. Zeus wants to "go deeper" on:
- Whether LE should stay as "Evolution" or become "Ecosystem" — both work, "Evolution" has momentum
- Whether all names feel right together as a cohesive set for a book/course
- The overall narrative flow when explaining the framework to beginners

**Key constraint:** The framework must be **human-agnostic** — works for single/married, employee/entrepreneur, 22 or 72. No name should assume family, business ownership, or any specific life situation.

### The Narrative Sentence

> "Master yourself (HP), nurture your foundation (LE), pursue your endeavor (GE) — orchestrated by your sovereign operating layer (SO)."

### Brand Hierarchy

- **One Mind** = Philosophy ("You + AI = One Mind")
- **One Mind OS** = Complete system (philosophy + method + vault + tools + community)
- **CODEX** = Both the METHOD (C.O.D.E.×) and the VAULT (file system)
- Always say "One Mind Codex" or "The CODEX Method" — never just "Codex" (OpenAI conflict)

For the full glossary, see `Codex/BRAND-GLOSSARY.md`.

---

## Terminology Rules

| ❌ Do NOT use | ✅ Use instead |
|---------------|----------------|
| "quadrant" (for SO/HP/LE/GE) | "domain" or "domain group" |
| "quadrant" (for SO specifically) | "operating layer" |
| "four quadrants" | "3 domains + 1 operating layer" |
| "Your Family" (for LE) | "Your Foundation" |
| "Your Business" (for GE) | "Your Endeavor" |
| "enterprise" (for GE concept) | "endeavor" |
| just "Codex" alone | "One Mind Codex" or "The CODEX Method" |

---

## Key Files

| File | Purpose |
|------|---------|
| `Codex/CODEX-FRAMEWORK.md` | THE core IP document (~1600 lines) — method, taxonomy, architecture |
| `Codex/ONEMIND-CODEX.md` | Master framework overview |
| `Codex/BRAND-GLOSSARY.md` | Single source of truth for ALL naming |
| `Codex/AGENTS.md` | AI agent operating instructions for the vault |
| `Codex/QUICK-START.md` | Day 1 onboarding guide |
| `Codex/_codex/INTERFACE.md` | Navigation entry point for agents |
| `Codex/_codex/CONVENTIONS.md` | Naming, tagging, frontmatter rules |
| `Codex/_codex/templates/` | Document templates (17 entity types) |
| `Codex/_codex/skills/` | Agent skill definitions (capture, organize, reflect, etc.) |
| `Codex/index.md` | Public homepage |

---

## Entity Taxonomy (17 Types, 5 Categories)

- 🎯 **Intent:** goal, project, task
- 🧠 **Knowledge:** note, decision, doctrine, reference, sop, aop
- 📊 **Measurement:** metric, review
- 🤖 **Operator:** human, agent, robot, drone
- 🔧 **Capability:** skill, tool

Every file has YAML frontmatter with `type`, `status`, `tags`, and `ai_summary`.

---

## Technical Details

### Build & Deploy

```bash
# Install dependencies
npm install

# Build the Quartz site
npx quartz build -d codex

# Serve locally
npx quartz build -d codex --serve

# Deploy: automatic via GitHub Actions on push to main
```

- Warning about missing `content/index.md` during build is benign
- Content directory is `codex/` (lowercase in git, `Codex/` in filesystem on macOS)

### Sync Architecture

- **Mac:** Obsidian Desktop + Git
- **iPhone:** Obsidian Mobile + Obsidian Sync ($4-5/mo)
- **VPS (DigitalOcean):** codex-pull timer (1min), codex-watch (auto-commit ~3s)
- **Template repo:** Auto-syncs from live repo via GitHub Actions workflow

---

## Guardrails

1. **Never rename domain abbreviations (SO, HP, LE, GE) without explicit approval** — they propagate across 100+ files
2. **Never delete doctrine files** (CODEX-FRAMEWORK.md, ONEMIND-CODEX.md, BRAND-GLOSSARY.md)
3. **Always use templates** when creating new content files
4. **Always populate `ai_summary`** in frontmatter — agents depend on it
5. **Don't change the domain numbering** — 00-24, 25-49, 50-74, 75-99 is fixed
6. **Ask before major naming changes** — Zeus is actively iterating on naming

---

## Known Issues (Not Yet Fixed)

These exist in the PRIVATE vault (`onemind-codex`) and may affect consistency:

1. 12 Dependabot security vulnerabilities flagged on this repo (npm dependencies)
2. Private vault has structural issues: duplicate domain 03, missing domain 82, gaps at 06-08
4. Private vault has structural issues (duplicate domains, missing domain 82, etc.)

---

*Last updated: 2026-03-26. This file is the definitive context for any AI agent working on this repository.*
