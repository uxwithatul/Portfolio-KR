# Kriti Rampal, portfolio

A creative director's workbook translated to the web: paper artifacts laid on a
dark work table, indexed as a file. React + TypeScript + Tailwind v4, Vite.

```bash
npm install
npm run dev            # http://localhost:5173
npm run build          # -> dist/
npm run check:casing   # guards the lowercase rule (see below)
```

## Materials

| | |
|---|---|
| Table | `#171717`, mottled and vignetted, with coarse fibre plus fine grain |
| Stock | paper `#f7f4ec`, aged `#e9e1cf`, manila `#e8c89b`, kraft `#c9a173`, slate `#2b2a27`, tracing (72% paper) |
| Ink | `#1a1815` / `#46423a` / `#645e51` |
| Accent | terracotta `#a5431b`, stepping to `#8a3511` on manila |
| Secondary | olive `#6b7148`, ochre `#c98a2b` |
| Rule | warm `#d9d5c6`, cut to match the stock it sits on |

Every sheet carries its own fibre through a multiplied noise layer, a lit top
edge, and a contact shadow, so the stock reads as material rather than as a
white rectangle. Rotations live on `.rot-1` to `.rot-4` and are disabled below
640px, where a tall rotated sheet would push past the viewport.

## Three type voices

- **Archivo** (variable, weight *and* width axes). `.display` runs at width 88%
  for oversized poster type; `.headline` at 94%; `.figure` at 86%.
- **Caveat** for margin notes, via `.hand`. Used for annotation only.
- **JetBrains Mono** via `.mark` for folios, filing metadata and registration.

**Lowercase is opt-in.** `.display` and `.headline` do not transform case. The
`.lc` class is added only to strings with no proper nouns or acronyms, so
"PepsiCo", "SEO", "YouTube" and quoted names keep their real casing.
`npm run check:casing` walks the rendered page, finds every element computed
lowercase, and fails if its real text holds an acronym or a mid-sentence proper
noun. Run it after touching a headline.

## Six chapters, one story

The folder is the visual metaphor. The information architecture is the six
chapters inside it, each answering one question:

| | Chapter | Route | Answers |
|---|---|---|---|
| 01 | Home | `/` | Who is she? |
| 02 | About | `/about` | What is her background? |
| 03 | Work | `/work` | What has she built? |
| 04 | Results | `/results` | Did the work work? |
| 05 | Profile | `/profile` | Who is the person and the leader behind it? |
| 06 | Contact | `/contact` | How do I reach her? |

Three levels of importance, expressed through scale and density rather than
through more artifacts:

- **Core portfolio** Home, Work, Results
- **Professional profile** About, Profile
- **Action** Contact

### Work is an index, not an article

`/work` shows three doors: number, title, credit, one line, three metrics, and
one link. The full case studies live at `/work/social-video`,
`/work/seo-content` and `/work/hiring-content`, each with the same structure so
they can be scanned in seconds:

```
← Back to work                                   01 / 03
Title
Credit
Summary
Context            |  What I did
Result (three figures, on its own tone)
← All work                        Next: SEO content engine →
```

The campaign archive sits after the three doors, as a compact list with its
eight links intact. It is supporting proof, so it is deliberately quieter.

### The type scale

Four steps, used in order, so a viewer always knows what they are looking at.
Only the home headline breaks out of it.

| Class | Use |
|---|---|
| `.t-hero` | the home statement, once |
| `.t-page` | one per page, names what you are looking at |
| `.t-section` | divides a page into parts |
| `.t-item` | a case study or entry in a list |
| `.t-body` / `.mark` | body copy and metadata |

### Where the paper sits

The folder frames the content; it does not structure it. Roughly 30% visual
treatment to 70% editorial content. Clips, kraft, graph stock and the tab
system stay. Rotations, tape, torn edges and handwritten annotations are used
once or twice across the whole site, not per section.

## Adding photography

Five slots. Drop files into `public/images/` with these names and they appear,
no code change:

| File | Where | Crop |
|---|---|---|
About carries **one** portrait, not a gallery. It points at the first of Kriti's
four original Google Drive URLs; all four remain in `content.ts` and resolve the
moment that folder's sharing is set to "Anyone with the link". Until then the
slot shows a proof sheet with crop marks, and the `<img>` stays mounted so the
source URL is never dropped from the document.

No headshot was invented. The original source used a KR monogram, and nothing
was fabricated to replace it.

## Content

Every fact comes from `src/content.ts`: copy, metrics, case studies, campaigns,
links and the nine-divider index. Components only arrange it.

`profile.linkedin` points at the Internshala company page, which is what the
source document linked to. Swap it for Kriti's personal profile URL.

## Structure

```
src/
  content.ts     copy, metrics, links, divider index
  hooks.ts       scroll reveal, count-up, active section
  index.css      materials, type voices, paper surfaces, motion
  components/
    ui.tsx       Stage, Sheet, Underlay, Tab, Clip, Tape, Stamp,
                 CropMarks, Folio, Note, Arrow, Pill, Dot,
                 Reveal, Figure, Plate
    Folder.tsx   the persistent folder, tabs and page transition
  pages/
    Home, About, Work, CaseStudy, Results, Profile, Contact
scripts/
  check-casing.mjs
```

Motion is IntersectionObserver plus CSS transitions, no animation library.
Sheets lift on hover and keep their angle while they rise. Reveals, lifts and
rotations all collapse to static under `prefers-reduced-motion: reduce`.
