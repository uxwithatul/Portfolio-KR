/**
 * Single source of truth for every fact on the page.
 * All values come from Kriti's existing portfolio document.
 * Nothing here is invented; copy is rewritten for concision only.
 */

export const profile = {
  name: "Kriti Rampal",
  role: "Senior Content and Growth Leader",
  location: "New Delhi, India",
  email: "kriti.rampal25@gmail.com",
  phone: "+91 99902 43334",
  phoneHref: "tel:+919990243334",
  // Source document links this to the Internshala company page.
  // Replace with Kriti's personal profile URL when available.
  linkedin: "https://www.linkedin.com/company/internshala",
};

export const hero = {
  kicker: "Content strategy · SEO · Brand and social growth",
  headline: ["Words that scale", "into growth systems."],
  italicWord: "growth systems.",
  role: "Senior Content and Growth Leader",
  standfirst:
    "Senior Content and Growth Leader with 6+ years turning long-form storytelling, SEO, and social strategy into measurable audience and business growth, across 10,000+ shipped assets and teams of up to 12.",
  portraitCaption:
    "Currently Senior Manager, Content at Internshala, leading five content verticals and a team of 10+.",
  primaryCta: { label: "Get in touch", href: "mailto:kriti.rampal25@gmail.com" },
  secondaryCta: { label: "See selected work", href: "/work" },
};

export const about = {
  statement: {
    before: "A writer ",
    italicOne: "at core",
    middle: ", a strategist ",
    italicTwo: "by evolution",
    after: ".",
  },
  subStatement:
    "I build content systems that hold up at scale, not campaigns that spike and fade.",
  paragraphs: [
    "I have spent the last six years moving between the sentence level and the systems level: writing the blog, then building the framework that lets a team ship a thousand more like it. I have led teams of 8 to 12 across SEO, brand, PR and social, built content operations for five verticals at once, and partnered with brands including Pepsi, Goibibo, Tata Crucible and Mahindra on campaigns that needed both craft and speed.",
    "What I care about most is the throughline between narrative and numbers. A landing page that converts. A caption that moves engagement. A blog framework that actually ranks. Below is a working record of that: the systems, the growth they produced, and the raw work behind it.",
  ],
  capabilities: [
    {
      group: "Strategy",
      items: ["Content Strategy", "SEO Blogs", "Research Writing", "Workflow Planning"],
    },
    {
      group: "Content",
      items: [
        "Web Copywriting",
        "Brand and Campaign Copy",
        "Landing Pages",
        "Emailers and Funnels",
        "Product and App Content",
        "CMS Publishing",
      ],
    },
    {
      group: "Leadership",
      items: ["Team Leadership (10+)", "Social Media Management"],
    },
  ],
  tools: [
    "WordPress",
    "Notion",
    "Trello",
    "Jira",
    "Google Analytics",
    "Search Console",
    "SEMrush",
    "vidIQ",
    "Canva",
    "GenAI Tools",
    "YouTube Studio",
    "Meta Business Suite",
    "Hootsuite",
  ],
};

export type Metric = {
  /** static text rendered before the animated figure, e.g. "50K → " */
  prefix?: string;
  to: number;
  decimals?: number;
  group?: boolean;
  suffix?: string;
  label: string;
  /** optional supporting context, kept from the source descriptions */
  note?: string;
  period: string;
  /** the single figure the ledger leads with */
  lead?: boolean;
};

export const impact: Metric[] = [
  {
    to: 10000,
    group: true,
    suffix: "+",
    label: "Assets shipped",
    note: "Across product, brand and distribution channels since 2022",
    period: "Career total",
    lead: true,
  },
  {
    to: 301.57,
    decimals: 2,
    suffix: "%",
    label: "Organic traffic growth",
    note: "From SEO-aligned content frameworks",
    period: "2022 to 2025",
  },
  {
    prefix: "1.19M → ",
    to: 1.3,
    decimals: 1,
    suffix: "M",
    label: "LinkedIn followers",
    period: "FY 25-26",
  },
  {
    prefix: "12.03% → ",
    to: 37.8,
    decimals: 1,
    suffix: "%",
    label: "LinkedIn engagement rate",
    period: "FY 25-26",
  },
  {
    prefix: "50K → ",
    to: 100,
    suffix: "K",
    label: "YouTube subscribers",
    note: "Doubled through scripting and content strategy",
    period: "2025",
  },
  {
    prefix: "71.1K → ",
    to: 122,
    suffix: "K",
    label: "Instagram followers",
    note: "Engagement up from 17.4% to 20.5%",
    period: "FY 25-26",
  },
  {
    to: 10,
    suffix: "+",
    label: "Team members led and mentored",
    note: "Across five content verticals",
    period: "Ongoing",
  },
];

export type CaseStudy = {
  index: string;
  slug: string;
  shortTitle: string;
  title: string;
  company: string;
  position: string;
  dates: string;
  summary: string;
  challenge: string;
  approach: string;
  metrics: { figure: string; caption: string }[];
};

export const caseStudies: CaseStudy[] = [
  {
    index: "01",
    slug: "social-video",
    shortTitle: "Social and video",
    title: "Scaling social and video from one team, five verticals",
    company: "Internshala",
    position: "Senior Manager, Content",
    dates: "Jul 2025 to present",
    summary:
      "Social, long-form, PR, branding and marketing collateral, run as a single content operation.",
    challenge:
      "Four newly merged departments had to be absorbed into one content function, with only two additional hires approved.",
    approach:
      "Scaled through tighter task allocation and clearer goal-setting rather than headcount. Growth came from format experimentation and audience-first storytelling across LinkedIn, Instagram and YouTube, with a 10+ person team mentored through the transition.",
    metrics: [
      { figure: "76.8%", caption: "Peak LinkedIn engagement, up from 12%" },
      { figure: "100K", caption: "YouTube subscribers, doubled from 50K" },
      { figure: "125K", caption: "Instagram followers, up from 65K" },
    ],
  },
  {
    index: "02",
    slug: "seo-content",
    shortTitle: "SEO content engine",
    title: "An SEO content engine built for brand scale",
    company: "Internshala",
    position: "Content Manager",
    dates: "Dec 2022 to Jun 2025",
    summary:
      "Search structure and production volume, solved at the same time rather than in sequence.",
    challenge:
      "Search visibility had to improve across blogs, revamps and landing pages while high-volume production on scripts, emailers and social copy continued uninterrupted.",
    approach:
      "Built SEO-aligned content frameworks that improved both UX and search structure, and delivered marketing collateral and campaign support for enterprise partners including Pepsi, Goibibo, Tata Crucible and Mahindra.",
    metrics: [
      { figure: "301.57%", caption: "Organic traffic growth" },
      { figure: "10,000+", caption: "Assets delivered across formats" },
      { figure: "1,200+", caption: "Marketing collaterals delivered" },
    ],
  },
  {
    index: "03",
    slug: "hiring-content",
    shortTitle: "Hiring content",
    title: "Hitting hiring-content targets across three segments",
    company: "Internshala",
    position: "Long-form content strategy",
    dates: "Jul 2025 to Feb 2026",
    summary:
      "The kind of work where narrative has to convert, not just read well.",
    challenge:
      "Hard click targets set across three distinct segments: internships, jobs, and fresher hiring.",
    approach:
      "Directed long-form content strategy against each target individually. Fresher-hiring content outperformed expectations, signalling a content gap worth doubling down on.",
    metrics: [
      { figure: "99%", caption: "of internship target, 3.15M of 3.18M clicks" },
      { figure: "104.5%", caption: "of jobs target, 2.85M of 2.72M clicks" },
      { figure: "138%", caption: "of fresher-jobs target, 1.93M of 1.4M clicks" },
    ],
  },
];

export type Campaign = {
  brand: string;
  name: string;
  description: string;
  links: { label: string; href: string }[];
};

export const campaigns: Campaign[] = [
  {
    brand: "PepsiCo",
    name: "Learn Today, Give Tomorrow and PepShe Agrow",
    description:
      "Talent-branding built around a case competition for top B-schools and a women-in-agriculture hiring push, positioning PepsiCo as a purpose-led employer to student audiences.",
    links: [
      { label: "LTGT reel", href: "https://www.instagram.com/reel/DBvrX-USebQ/" },
      {
        label: "LTGT on LinkedIn",
        href: "https://www.linkedin.com/posts/internshala_pepsicoindia-learntodaygivetomorrow-mba-activity-7261728880032403457-ArVJ/",
      },
      { label: "PepShe Agrow", href: "https://www.instagram.com/p/DDE4E2BI34J/" },
    ],
  },
  {
    brand: "PepsiCo",
    name: "Pep Sales Star, Rise Up with PepsiCo",
    description:
      "A diversity and bulk-hiring micro-internship campaign built to fill 1,000 sales roles, run as a recurring content series across reels and LinkedIn over multiple hiring cycles.",
    links: [
      { label: "Campaign reel", href: "https://www.instagram.com/reel/DJWtv_ZpLnq/" },
      {
        label: "On LinkedIn",
        href: "https://www.linkedin.com/posts/internshala_pepsalesstar-riseupwithpepsico-internshala-activity-7325885501603807232-dVNp/",
      },
    ],
  },
  {
    brand: "Goibibo",
    name: "Student GoPass promotion",
    description:
      "An ad-sales partnership promoting Goibibo's student travel pass to a college audience, as a launch-day push across Instagram static posts and stories.",
    links: [
      { label: "Launch post", href: "https://www.instagram.com/p/C8bRi7dxEIY/" },
    ],
  },
  {
    brand: "Mahindra Logistics",
    name: "Igniting Pride internship program",
    description:
      "A talent-branding push for the Mahindra Logistics internship program, timed around a company-pride moment and carried across Instagram and LinkedIn.",
    links: [
      { label: "Instagram post", href: "https://www.instagram.com/p/DLM7cLlo7fi/" },
      {
        label: "On LinkedIn",
        href: "https://www.linkedin.com/posts/internshala_igniting-pride-internship-program-activity-7342427373717344257-iInv/",
      },
    ],
  },
];

export const campaignsIntro =
  "Enterprise talent-branding campaigns are one of the more specialised parts of the job. Each is built for a client's audience and goals, then run across paid and organic social. These link straight to the published posts.";

export const campaignsFootnote =
  "Also ran: Tata Crucible, HCLTech, Godrej Agrovet, Freecharge, and Swiggy's 197-city sales hiring drive. Full campaign list available on request.";

export type WorkIndexItem = {
  index: string;
  title: string;
  description: string;
  links: { label: string; href: string }[];
};

export const workIndex: WorkIndexItem[] = [
  {
    index: "01",
    title: "Long-form and SEO blogs",
    description:
      "Blogs written and edited under my byline, plus the wider blog my team runs",
    links: [
      { label: "Author page", href: "https://internshala.com/blog/author/kriti92/" },
      { label: "Full blog", href: "https://internshala.com/blog/" },
    ],
  },
  {
    index: "02",
    title: "YouTube scripting",
    description: "Scripted and strategised across both channels",
    links: [
      {
        label: "Internshala Official",
        href: "https://www.youtube.com/@InternshalaOfficial/",
      },
      {
        label: "Fresher Jobs",
        href: "https://www.youtube.com/@FresherJobsbyInternshala",
      },
    ],
  },
  {
    index: "03",
    title: "Social and brand voice",
    description: "Instagram and LinkedIn strategy, captions and campaign copy",
    links: [
      { label: "Instagram", href: "https://www.instagram.com/internshala/" },
      { label: "LinkedIn", href: "https://www.linkedin.com/company/internshala" },
    ],
  },
  {
    index: "04",
    title: "Trainings and courses content",
    description: "Long-form content for the Internshala trainings vertical",
    links: [
      {
        label: "Author page",
        href: "https://trainings.internshala.com/blog/author/kriti/",
      },
      { label: "Full blog", href: "https://trainings.internshala.com/blog/" },
    ],
  },
];

export const workIndexFootnote =
  "These channels reflect team output under my strategy and leadership, not solely individual bylines.";

export type Quote = {
  text: string;
  name: string;
  title: string;
  context?: string;
};

export const quotes: Quote[] = [
  {
    text: "Should be OK, please have the video reviewed by Kriti before you publish.",
    name: "Sarvesh Agrawal",
    title: "Founder and CEO, Internshala",
    context: "Directing that sensitive, student-facing content be cleared through Kriti first",
  },
  {
    text: "The client loved it. Well done.",
    name: "Sarvesh Agrawal",
    title: "Founder and CEO, Internshala",
    context: "On a campaign delivered by Kriti's team",
  },
  {
    text: "So much hidden potential. Great work.",
    name: "Varun Verma",
    title: "B2B Head, Internshala",
  },
  {
    text: "A supportive environment and culture, built by the team she led.",
    name: "A direct report",
    title: "From exit feedback, on Kriti's management",
  },
  {
    text: "Rare and deeply impactful commitment, leadership, and creativity, with a proven ability to spot gaps and drive change.",
    name: "From a recommendation letter",
    title: "Written by Kriti for a team member",
    context: "The standard she holds her own team to",
  },
];

export const leadershipPillars = [
  { figure: "10+", label: "People", detail: "Team members mentored and led" },
  { figure: "5", label: "Operations", detail: "Content verticals run in parallel" },
  { figure: "4", label: "Scale", detail: "Merged departments absorbed" },
  { figure: "2", label: "Headcount", detail: "Additional hires needed to do it" },
];

export const leadershipRemit =
  "Content, social, PR, branding and YouTube.";

export const leadershipNotes = [
  {
    heading: "Led the content team across five verticals",
    body: "Social, PR, enterprise, branding and YouTube, meeting departmental goals while ensuring high-quality, timely delivery across all of them at once.",
  },
  {
    heading: "Mentored and trained 10+ team members",
    body: "Built structured growth paths and increased ownership and output quality by fostering accountability rather than oversight.",
  },
  {
    heading: "Absorbed four newly merged departments",
    body: "Scaled with only two additional hires, through smarter task allocation and clearer goal-setting instead of headcount.",
  },
  {
    heading: "Recognised in writing by leadership and reports alike",
    body: "A direct report's exit feedback specifically praised the culture and support built within the team, and the CEO has personally routed sensitive, student-facing content through Kriti for review before publication.",
  },
  {
    heading: "Wrote and issued formal recommendation letters",
    body: "For team members applying to graduate programs, documenting their contributions to campaigns including PepsiCo India Agro, PepShe Agrow and PepsiCo Fuel the Future Dubai under her management.",
  },
];

export const venture = {
  name: "Alixir Media",
  role: "Founder and CEO",
  status: "Built and exited",
  body: "Started, ran and eventually exited an independent creative content and design agency, taking on the full arc of client acquisition, service delivery and team process that a content strategist rarely gets hands-on with inside a single employer. It is the entrepreneurial counterpart to the in-house leadership work: same instincts, different stakes.",
};

export const clients = [
  { name: "MediBuddy", work: "SEO blogs and health content" },
  { name: "Nirogam", work: "SEO and Ayurvedic product content" },
  { name: "Neom Tiles", work: "Content and marketing copy" },
  { name: "CaratLane", work: "Podcast scripting for a franchise owner" },
];

export const education = [
  { title: "Executive MBA", detail: "University of Western Australia", note: "In progress" },
  {
    title: "PCP, Advanced Business Management",
    detail: "IIM Kozhikode",
    note: "In progress",
  },
  { title: "BBA", detail: "Maharaja Surajmal Institute" },
  { title: "BA English (Hons)", detail: "Delhi University" },
  {
    title: "Digital Marketing Mastery",
    detail: "IIT Delhi",
    note: "Google Ads and SEO",
  },
  {
    title: "Digital Marketing Mastery",
    detail: "IIT Delhi",
    note: "Instagram and Meta Ads",
  },
  {
    title: "Founder and CEO, Alixir Media",
    detail: "Built and exited a creative content and design agency",
  },
  {
    title: "Freelance and consulting",
    detail: "MediBuddy, Nirogam, Neom Tiles, CaratLane (podcast scripting)",
  },
];

/**
 * Photography. Drop files at these paths in /public and they appear automatically.
 * Any slot with no file falls back to a designed plate; if none of the frames
 * resolve, the gallery section removes itself from the page.
 */
/**
 * The hero figure is a printed monogram in the source document, not a
 * photograph. That behaviour is preserved rather than inventing a headshot.
 * `portraitSrc` is an optional slot: drop a file at this path and it is used.
 */
export const portraitSrc = "/images/portrait.jpg";

/**
 * "In frame" pulls from Kriti's Drive folder. These are the original source
 * URLs, preserved verbatim; they resolve once that folder's sharing is set to
 * "Anyone with the link". Until then each slot shows a proof sheet.
 */
export const frames = [
  {
    src: "https://drive.google.com/thumbnail?id=1CxBDztudh13khOLcv3sp3P6TIMKpDlu6&sz=w500",
    ratio: "4 / 5",
  },
  {
    src: "https://drive.google.com/thumbnail?id=18-KU37Y7hOVUY32HKlYKETfSaGZW8DHL&sz=w500",
    ratio: "1 / 1",
  },
  {
    src: "https://drive.google.com/thumbnail?id=1NsSmU4_24lw2h5U5rl2P509NE4HjUOhf&sz=w500",
    ratio: "4 / 5",
  },
  {
    src: "https://drive.google.com/thumbnail?id=10xztJUhyT8P4UusbMUKzCgcATavOHyKn&sz=w500",
    ratio: "3 / 4",
  },
];

/**
 * The file index. Nine dividers, each a route. The numbered tabs are the
 * primary navigation, not decoration.
 */
export type Divider = {
  index: string;
  label: string;
  path: string;
  swatch: "terracotta" | "olive" | "ochre" | "ink";
  /** what the divider holds, shown on the tab's own page */
  holds: string;
};

export const dividers: Divider[] = [
  { index: "01", label: "Home", path: "/", swatch: "terracotta", holds: "Senior Content and Growth Leader" },
  { index: "02", label: "About", path: "/about", swatch: "olive", holds: "Background, expertise and credentials" },
  { index: "03", label: "Work", path: "/work", swatch: "terracotta", holds: "Three content systems built for growth" },
  { index: "04", label: "Results", path: "/results", swatch: "ochre", holds: "The evidence" },
  { index: "05", label: "Profile", path: "/profile", swatch: "olive", holds: "Leadership, clients and wider output" },
  { index: "06", label: "Contact", path: "/contact", swatch: "terracotta", holds: "Get in touch" },
];

/** The three figures the home page leads with. */
export const proofPoints = [
  { figure: "10,000+", label: "assets shipped" },
  { figure: "301.57%", label: "organic traffic growth" },
  { figure: "10+", label: "people led and mentored" },
];

export const closing = {
  statement: ["Let's build the next", "growth system."],
  italicWord: "growth system.",
};
