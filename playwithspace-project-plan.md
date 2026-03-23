# Play With Space — Project Plan
## Astro Site Build + Coaching Content System

---

## Tech Stack

| Layer | Tool | Why |
|-------|------|-----|
| Framework | **Astro** | Fast static sites, markdown-native, great DX |
| Styling | **Tailwind CSS** | Utility-first, works perfectly with Astro |
| Content | **Markdown (.md files)** | Write posts in VS Code, no CMS needed |
| Hosting | **Vercel** | Free, auto-deploys from GitHub on every push |
| Domain | **playwithspace.com** | Point DNS to Vercel |
| Dev tools | **VS Code + Claude Code** | Your primary build environment |
| Version control | **GitHub** | You're already comfortable with Git |

---

## Site Structure

```
playwithspace.com/
├── Home                    → Hero + latest posts + site intro
├── About                   → The concept (not personal brand)
├── Blog                    → All posts, filterable by category
│   ├── /fundamentals/      → Spacing, movement, basics
│   ├── /coaching/          → Session plans, observations, drills
│   ├── /mindset/           → Mental game, presence, awareness
│   └── /stories/           → Season journey, player growth
├── Coaching Journal        → Season timeline / game log
└── Contact                 → Simple form
```

## Content Types (Markdown Templates)

### Post Game Breakdown
```markdown
---
title: "Game 3: When the Spacing Finally Clicked"
date: 2026-04-15
category: coaching
tags: [spacing, game-review, u14-girls]
type: post-game
result: "W 34-28"
---

## The Setup
What we worked on leading into this game.

## What I Saw
Key observations from the game.

## The Moment
The play or sequence that stood out.

## What It Teaches
The principle at work — for players and coaches.

## Next Session Focus
What this tells me about where to go next.
```

### Post Training Breakdown
```markdown
---
title: "Session 5: Teaching Movement Without the Ball"
date: 2026-04-12
category: coaching
tags: [movement, off-ball, drills, u14-girls]
type: post-training
focus: "off-ball movement"
---

## Session Plan
What I set out to teach and why.

## How It Went
What worked, what didn't, what surprised me.

## Player Response
How the kids engaged — lightbulb moments, struggles.

## The Deeper Lesson
What this session revealed about learning/spacing/mindset.

## Drill Worth Sharing
One drill other coaches can steal.
```

### Standard Article
```markdown
---
title: "Why Spacing Is the Most Undertaught Fundamental"
date: 2026-04-10
category: fundamentals
tags: [spacing, basics, youth-basketball]
type: article
---

Standard long-form post. Used for evergreen content that
doesn't come from a specific session or game.
```

---

## Project File Structure (Astro)

```
playwithspace/
├── src/
│   ├── content/
│   │   └── blog/              ← All markdown posts go here
│   │       ├── game-3-spacing-clicked.md
│   │       ├── session-5-off-ball-movement.md
│   │       └── why-spacing-undertaught.md
│   ├── layouts/
│   │   ├── BaseLayout.astro   ← Shared HTML shell
│   │   ├── BlogPost.astro     ← Single post layout
│   │   └── BlogList.astro     ← Post listing layout
│   ├── pages/
│   │   ├── index.astro        ← Homepage
│   │   ├── about.astro        ← About page
│   │   ├── blog/
│   │   │   ├── index.astro    ← Blog listing
│   │   │   └── [...slug].astro ← Dynamic post pages
│   │   ├── journal.astro      ← Coaching season timeline
│   │   └── contact.astro      ← Contact page
│   ├── components/
│   │   ├── Header.astro
│   │   ├── Footer.astro
│   │   ├── PostCard.astro     ← Blog post preview card
│   │   ├── CategoryFilter.astro
│   │   ├── Newsletter.astro   ← Email signup component
│   │   └── SeasonTimeline.astro
│   └── styles/
│       └── global.css         ← Tailwind + custom styles
├── public/
│   ├── images/
│   └── favicon.svg
├── astro.config.mjs
├── tailwind.config.mjs
├── package.json
└── README.md
```

---

## Build Schedule — Parallel Tracks

### TRACK A: Site Build (Weeks 1-4)
### TRACK B: Coaching Prep + Content (Weeks 1-4)

---

### Week 1: Foundations

**Track A — Scaffold the project**
- [ ] Create Astro project: `npm create astro@latest playwithspace`
- [ ] Add Tailwind CSS integration
- [ ] Set up GitHub repo and connect to Vercel
- [ ] Deploy "Hello World" to playwithspace.com (prove the pipeline works)
- [ ] Build BaseLayout with Header + Footer components
- [ ] Create Homepage with placeholder content
- [ ] **Learning focus**: Astro file structure, components, layouts

**Track B — Coaching prep**
- [ ] Draft season philosophy doc (what you want to teach and why)
- [ ] Outline first 4 training sessions with spacing/movement themes
- [ ] Set up simple note-taking system for post-session observations
- [ ] Write first article: an evergreen "what is Play With Space" intro piece

---

### Week 2: Blog Engine

**Track A — Content system**
- [ ] Set up Astro content collections for blog posts
- [ ] Create markdown schema (frontmatter structure for each post type)
- [ ] Build BlogPost layout (single post page)
- [ ] Build BlogList page with PostCard components
- [ ] Add category filtering (fundamentals, coaching, mindset, stories)
- [ ] Style typography for comfortable reading
- [ ] **Learning focus**: Content collections, dynamic routing, Tailwind typography

**Track B — First content**
- [ ] Write About page content (you've already drafted this before)
- [ ] Write 1-2 more evergreen articles (spacing fundamentals, off-ball movement)
- [ ] Create markdown files using the post templates above
- [ ] Push to GitHub → auto-deploys to Vercel → live on the site

---

### Week 3: Design + Polish

**Track A — Make it look like yours**
- [ ] Define colour palette and typography (not generic, not WordPress)
- [ ] Style the homepage properly — hero section, latest posts, site mission
- [ ] Build the Coaching Journal / Season Timeline page
- [ ] Add responsive design (mobile-first)
- [ ] Add simple contact form (Formspree or similar — free)
- [ ] **Learning focus**: CSS/Tailwind customisation, responsive design, forms

**Track B — Season starts (or final prep)**
- [ ] Run first training session
- [ ] Write your first Post Training Breakdown using the template
- [ ] Push it live — your first real coaching content
- [ ] Refine the template based on what felt natural to write

---

### Week 4: Refinement + Rhythm

**Track A — Quality of life**
- [ ] Add SEO basics (meta tags, Open Graph for social sharing)
- [ ] Add RSS feed (Astro has a plugin for this)
- [ ] Newsletter signup component (connect to free Mailchimp or Buttondown)
- [ ] Related posts at bottom of each article
- [ ] Performance check (should already be fast — Astro is static)
- [ ] **Learning focus**: SEO, integrations, component composition

**Track B — Content rhythm**
- [ ] First game → Post Game Breakdown
- [ ] Second training session → Post Training Breakdown
- [ ] You should now have 5-7 posts live (2-3 evergreen + coaching content)
- [ ] Review what's working — which templates flow, which feel forced

---

## Month 2 and Beyond

By the end of month 1 you'll have:
- A custom-built site that's live and fast
- A working content pipeline (session → notes → markdown → push → live)
- 5-7 real posts from real coaching experience
- A design that's distinctly yours

**Month 2 priorities:**
- Continue coaching content rhythm (1-2 posts per week naturally)
- Add email newsletter with welcome sequence
- Write more evergreen fundamentals articles between sessions
- Start the mobility/youth athlete content thread
- Commission the logo (Fiverr brief is ready) and integrate it

**Month 3+ expansion:**
- Introduce the POST PLAY / POST COACH / POST WATCH framework publicly
- Consider adding a discussion/comment system
- Plan podcast integration when you have enough material
- Look at whether a lightweight CMS (Tina, Decap) would help

---

## Getting Started — This Week

The very first thing to do in your terminal:

```bash
# 1. Create the project
npm create astro@latest playwithspace

# 2. Choose: Empty project (you want to build from scratch)
# 3. Install dependencies
cd playwithspace
npm install

# 4. Add Tailwind
npx astro add tailwind

# 5. Initialise Git and push to GitHub
git init
git add .
git commit -m "initial scaffold"
gh repo create playwithspace --public --push

# 6. Go to vercel.com, import the repo, deploy
# 7. Point playwithspace.com DNS to Vercel
```

Then open VS Code with Claude Code and start building your first layout.

---

## Content Capture Workflow (Season Running)

```
Training Session / Game
        ↓
Quick notes on phone (during or right after)
        ↓
Expand into markdown post (VS Code, 30-60 mins)
        ↓
git add → git commit → git push
        ↓
Vercel auto-deploys → Live on playwithspace.com
```

Keep it this simple. The constraint of markdown forces clean, focused writing.
No fiddling with WordPress dashboards, no plugin updates, no theme conflicts.
Just write, push, publish.
