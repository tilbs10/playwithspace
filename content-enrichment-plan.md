# Content Enrichment Plan — Images + Internal Links
## Bringing longer posts to life on playwithspace.com

---

## Why this is worth doing (for this blog specifically)

**1. The subject is spatial. The medium is currently words.**
Every core topic on this site — spacing, lanes, gravity, transition — is
geometry. Three paragraphs describing the outlet box and wide lanes are
an approximation; one half-court diagram communicates it in two seconds.
No other blog improvement has this much leverage here, because the
content is *about* space and the posts currently can't show any.

**2. Images control reading pace in long posts.**
The pacing work so far lives in the prose (short beats, section breaks).
Deep dives at 1,400+ words still present as walls of text on mobile. An
image every 400–600 words acts as a visual rest stop — it resets
attention and marks the transition between ideas, the same job the `---`
dividers do now, but stronger.

**3. Internal links turn visitors into readers.**
Right now a reader finishes one post and leaves. Contextual links and
smarter related-post suggestions create a path: quick take → article →
deep dive. More pages per visit, and the deep dives become the
destination the shorter pieces feed into.

**4. SEO and sharing compound quietly.**
Internal links distribute authority between posts and help search
engines understand the site's topic cluster. Hero images become Open
Graph cards, so a shared link on socials shows a court diagram instead
of a blank rectangle. Alt text on diagrams is both accessibility and
image-search traffic.

**5. One caution, stated up front: player privacy.**
This is a U14 girls team. No identifiable photos of players go on the
site without explicit written parental consent — and even then, prefer
not to. Diagrams, empty gyms, equipment, whiteboards, and wide shots
where nobody is recognisable cover every visual need this blog has.
This constraint is also a stylistic gift: it pushes the site towards a
clean diagram-led identity rather than generic sports photography.

---

## Image strategy

### Image types, ranked by value

| Rank | Type | Used for | Effort |
|------|------|----------|--------|
| 1 | **Court diagrams (SVG)** | Spacing spots, transition lanes, gravity arrows, drill setups | Medium once, low per use |
| 2 | **Hero image per post** | Post header + social share card + PostCard thumbnail | Low |
| 3 | **Numbered drill sequences** | Multi-step drills (outlet → push → read) | Medium |
| 4 | **Photos (non-identifiable)** | Atmosphere: empty gym, whiteboard, kit | Low |

### The court diagram system (the centrepiece)

Build diagrams as **SVG in code**, not exported from a design tool:

- One reusable `CourtDiagram.astro` component (or a shared SVG template)
  with a `court="half" | "full"` option: court outline in stone, players
  as circles, ball as a filled dot, movement as solid arrows, passes as
  dashed arrows. Half court for spacing spots, sets and most drills;
  full court for transition, press break and anything that crosses
  halfway — the transition posts need the full floor to make sense.
- Brand colours throughout — court lines in stone-300, offence in the
  site green `#006437`, defence in stone-400, the key moment in amber.
- Consistent style across every post = the diagrams become part of the
  site's identity, like a signature.

Why SVG-in-code fits this workflow: it's edited in VS Code, versioned in
git, weighs almost nothing, stays sharp at every size, and needs no
design tool or subscription. Same philosophy as the markdown pipeline —
write, push, publish.

### Technical implementation

1. **Frontmatter**: add optional `heroImage` and `heroAlt` to the schema
   in `src/content.config.ts` (using Astro's `image()` helper so builds
   fail on missing files).
2. **Storage**: co-locate images with content —
   `src/content/blog/images/<post-slug>/` — so Astro's asset pipeline
   optimises them (responsive sizes, modern formats, lazy loading).
3. **Rendering**: hero in `BlogPost.astro`, thumbnail in `PostCard.astro`
   (image optional — cards without images keep the current text layout),
   `og:image` meta in `BaseLayout.astro` with `court-hero.png` as the
   site-wide fallback.
4. **In-body images**: standard markdown `![alt](./images/...)` inside
   posts; add a small figure/caption style to the typography CSS.
5. **Rules**: alt text is mandatory on every image. Captions optional
   but encouraged — a caption is a free pacing beat.

### Where images do NOT belong

Quick takes stay text-only. Their whole value is speed — a reader should
finish one in under two minutes. The contrast between a bare 300-word
take and an illustrated 1,400-word deep dive is itself part of the
site's rhythm.

---

## Internal linking strategy

### 1. Fix the related-posts logic (quick win)

The current block in `src/pages/blog/[...slug].astro` matches on
category only. Most posts are `fundamentals`, so nearly every post shows
the same three cards. Upgrade to **tag-overlap scoring**: count shared
tags, rank by overlap, fall back to category, then recency. Ten lines of
code, immediately better suggestions.

### 2. Inline contextual links (editorial habit)

The deep dive already does this — linking to the spacing, gravity,
rhythm and transition articles at the exact moment each becomes
relevant. Make it a rule, not an accident:

- Every **deep dive**: 3+ inline links to related posts.
- Every **article**: 1–2 where genuinely relevant. Never forced.
- Every **quick take**: at most one, at the end, as a "go deeper" pointer.

Add a "links to include" line to `notes/capture-template.md` so the
habit starts at the note-taking stage.

### 3. Hub-and-spoke structure

Deep dives are hubs; articles and quick takes are spokes. *The Five
Kinds of Space* already links out to four articles — the missing half is
the return path. Add a one-line pointer in each spoke back to its hub
(e.g. at the end of the spacing article: "Structural space is one of
five kinds — the full taxonomy is in The Five Kinds of Space").

Later, if hubs multiply: an optional `series` frontmatter field with an
automatic "Part of the *Space* series" banner.

### 4. Reader pathways (later)

Once there are 12–15 posts: a "Start Here" section on the About page or
homepage ordering the best entry posts — the editorial version of
related links, for first-time visitors.

---

## Phased rollout

**Phase 1 — Foundations (one session, no new assets needed)** ✅ done
- [x] Tag-overlap related-posts scoring
- [x] `heroImage`/`heroAlt` in schema + layouts + OG meta with fallback
- [x] Figure/caption typography styles
- [x] Hub-and-spoke return links added to the four existing articles
- [x] Capture template updated with "links to include" prompt

**Phase 2 — The diagram system (one to two sessions)**
- [x] Build the court SVG template / component with brand colours,
      supporting both half-court and full-court layouts — built as
      `CourtDiagram.astro` + `Player` / `Ball` / `MoveArrow` /
      `PassArrow` / `Spot` in `src/components/diagrams/`, styled
      mid-century modern: warm cream ground, taupe linework, flat
      colour blocks, offset print-shadows, dotted pass lines and
      mustard spot rings. Posts that use diagrams are `.mdx`.
- [x] First two diagrams, in the two most spatial posts:
      the 5-spot drill (spacing post) and the outlet + wide lanes
      (transition post)
- [ ] Refine the visual style until it feels like the site

**Phase 3 — Full coverage (spread over normal writing weeks)**
- [ ] Hero image for every existing post (diagram crops work fine)
- [ ] PostCard thumbnails on blog + coaching listings
- [ ] Numbered sequence diagrams for the transition deep-dive phases

**Phase 4 — Ongoing editorial rules**
- Every new deep dive ships with 2+ diagrams and 3+ inline links
- Every new article ships with a hero image
- Quick takes ship bare, fast, text-only
- Session/game posts may use whiteboard or empty-gym photos — never
  identifiable players

---

## How to know it's working

Keep measurement lightweight — this is a coaching blog, not a funnel:

- **Pages per visit** and **time on deep dives** once analytics exist
  (Vercel Analytics is one click; Plausible if preferred).
- The honest test: hand a long post to someone on a phone and watch
  whether they scroll to the end. Images and links exist to make that
  happen more often.
