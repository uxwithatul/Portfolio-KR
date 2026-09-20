import { type CSSProperties, type ReactNode, useState } from "react";
import { useInView, useCountUp } from "../hooks";

/* ================================================================== *
 * Swatches. Each divider carries one, so colour locates you in the
 * file rather than decorating it.
 * ================================================================== */

export type Swatch = "terracotta" | "olive" | "ochre" | "ink";

const swatchBg: Record<Swatch, string> = {
  terracotta: "bg-terracotta",
  olive: "bg-olive",
  ochre: "bg-ochre",
  ink: "bg-ink",
};

export function Dot({ swatch, className = "" }: { swatch: Swatch; className?: string }) {
  return (
    <span
      aria-hidden
      className={`inline-block shrink-0 rounded-full ${swatchBg[swatch]} ${className}`}
    />
  );
}

/* ================================================================== *
 * Layout
 * ================================================================== */

/**
 * The staging area for a spread. Sits at 94% of the viewport so a sheet reads
 * as a large physical page rather than a card floating in a void.
 */
export function Stage({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`relative z-10 mx-auto w-[94vw] max-w-[1400px] ${className}`}>
      {children}
    </div>
  );
}

export function Shell({
  children,
  className = "",
  wide = false,
}: {
  children: ReactNode;
  className?: string;
  wide?: boolean;
}) {
  return (
    <div
      className={`relative z-10 mx-auto w-full px-4 sm:px-6 lg:px-10 ${
        wide ? "max-w-[1440px]" : "max-w-[1240px]"
      } ${className}`}
    >
      {children}
    </div>
  );
}

type Tilt = 1 | 2 | 3 | 4;

/**
 * A sheet of stock on the table. Carries no padding of its own: each
 * composition decides how its content sits on the page.
 */
export function Sheet({
  children,
  variant = "paper",
  rule,
  tilt,
  torn = false,
  lift = false,
  className = "",
  style,
}: {
  children: ReactNode;
  variant?: "paper" | "aged" | "manila" | "kraft" | "slate" | "tracing";
  rule?: "grid" | "ruled";
  tilt?: Tilt;
  torn?: boolean;
  lift?: boolean;
  className?: string;
  style?: CSSProperties;
}) {
  return (
    <div
      style={style}
      className={[
        "on-paper sheet",
        variant === "aged" && "sheet-aged",
        variant === "manila" && "sheet-manila",
        variant === "kraft" && "sheet-kraft",
        variant === "slate" && "sheet-slate",
        variant === "tracing" && "sheet-tracing",
        rule === "grid" && "sheet-grid",
        rule === "ruled" && "sheet-ruled",
        torn && "edge-torn",
        lift && "lift",
        tilt && `rot-${tilt}`,
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {children}
    </div>
  );
}

/** Sheets showing behind the one in front, as offset edges. */
export function Underlay({ count = 2 }: { count?: number }) {
  const layers = [
    "lg:translate-x-2 lg:-translate-y-1 lg:rotate-[0.7deg]",
    "lg:-translate-x-2 lg:-translate-y-3 lg:-rotate-[0.9deg]",
  ].slice(0, count);

  return (
    <>
      {layers.map((l, i) => (
        <span
          key={l}
          aria-hidden
          className={`absolute inset-x-1 -top-2 bottom-1 ${l} ${
            i === 0 ? "bg-paper-2" : "bg-aged"
          } shadow-[0_18px_36px_-20px_rgba(0,0,0,0.7)]`}
        />
      ))}
    </>
  );
}

/* ================================================================== *
 * Paper hardware
 * ================================================================== */

export function Clip({ className = "" }: { className?: string }) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 32 76"
      className={`pointer-events-none absolute z-30 h-16 w-7 drop-shadow-[0_4px_5px_rgba(0,0,0,0.5)] ${className}`}
      fill="none"
    >
      <path
        d="M21.5 58V14.5a6 6 0 1 0-12 0v47a10.5 10.5 0 0 0 21 0V12.5a8.5 8.5 0 0 0-17 0V56"
        stroke="#b9bcc0"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function Tape({
  className = "",
  tone = "paper",
}: {
  className?: string;
  /** translucent tape reads dark on paper and light on the table */
  tone?: "paper" | "table";
}) {
  return (
    <span
      aria-hidden
      className={`pointer-events-none absolute z-30 h-7 w-24 shadow-[0_1px_3px_rgba(0,0,0,0.2)] ${
        tone === "table" ? "bg-chalk/20" : "bg-ink/10"
      } ${className}`}
      style={{
        maskImage:
          "linear-gradient(90deg,transparent,#000 6px,#000 calc(100% - 6px),transparent)",
        WebkitMaskImage:
          "linear-gradient(90deg,transparent,#000 6px,#000 calc(100% - 6px),transparent)",
      }}
    />
  );
}

/** Index tab folded over a sheet's top edge. Render before the sheet. */
export function Tab({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <span
      aria-hidden
      className={`absolute -top-[30px] z-0 rounded-t-[5px] bg-manila px-5 pt-2.5 pb-6 font-mono text-[0.75rem] font-medium tracking-[0.14em] text-ink shadow-[0_-6px_16px_-8px_rgba(0,0,0,0.6)] ${className}`}
    >
      {children}
    </span>
  );
}

/** Corner registration marks, as on a print proof. */
export function CropMarks({ className = "" }: { className?: string }) {
  return (
    <span aria-hidden className={`pointer-events-none absolute inset-0 z-20 ${className}`}>
      {[
        "left-4 top-4 border-l border-t",
        "right-4 top-4 border-r border-t",
        "left-4 bottom-4 border-b border-l",
        "right-4 bottom-4 border-r border-b",
      ].map((pos) => (
        <span key={pos} className={`absolute size-4 border-ink/30 ${pos}`} />
      ))}
    </span>
  );
}

/** Rubber stamp. Used once, on a fact that earns it. */
export function Stamp({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <span
      className={`pointer-events-none inline-flex -rotate-[7deg] items-center border-[2.5px] border-terracotta/70 px-3.5 py-1.5 font-mono text-[0.6875rem] font-bold tracking-[0.2em] text-terracotta uppercase ${className}`}
    >
      {children}
    </span>
  );
}

/** Folio: the small page mark that sits in a margin. */
export function Folio({
  n,
  label,
  onTable = false,
  level,
  className = "",
}: {
  n: string;
  label?: string;
  onTable?: boolean;
  /** the divider label carries the page heading; omit for plain marks */
  level?: 1 | 2 | 3;
  className?: string;
}) {
  const Label =
    level === 1 ? "h1" : level === 2 ? "h2" : level === 3 ? "h3" : "span";
  return (
    <span
      className={`mark flex items-center gap-2.5 ${
        onTable ? "text-chalk-2" : "text-ink-3"
      } ${className}`}
    >
      <span aria-hidden>{n}</span>
      <span
        aria-hidden
        className={`h-px w-6 ${onTable ? "bg-table-hair" : "bg-hair"}`}
      />
      {label ? <Label className="mark font-medium">{label}</Label> : null}
    </span>
  );
}

/* ================================================================== *
 * Annotation: pencil note plus a drawn arrow
 * ================================================================== */

const arrowPaths: Record<string, string> = {
  // gentle curve falling to the right
  se: "M3 5c18-2 37 5 48 27",
  // curve falling to the left
  sw: "M61 5C43 3 24 10 13 32",
  // long shallow sweep to the right
  e: "M2 26c16-14 36-16 58-6",
  // hook curving up to the right
  ne: "M4 44c14 6 33-2 44-28",
};

const arrowHeads: Record<string, string> = {
  se: "M51 32 39 29M51 32l-2-12",
  sw: "M13 32l12-3M13 32l2-12",
  e: "M60 20 49 18M60 20l-8 8",
  ne: "M48 16l-11 3M48 16l2 12",
};

export function Arrow({
  dir = "se",
  className = "",
  onTable = false,
}: {
  dir?: keyof typeof arrowPaths;
  className?: string;
  onTable?: boolean;
}) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 64 52"
      className={`pointer-events-none shrink-0 ${
        onTable ? "text-chalk-2/70" : "text-ink-3"
      } ${className}`}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.9"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d={arrowPaths[dir]} />
      <path d={arrowHeads[dir]} />
    </svg>
  );
}

/** A note in pencil. Position it with `className`. */
export function Note({
  children,
  onTable = false,
  className = "",
}: {
  children: ReactNode;
  onTable?: boolean;
  className?: string;
}) {
  return (
    <p
      className={`hand pointer-events-none ${
        onTable ? "text-chalk-2" : "text-ink-2"
      } ${className}`}
    >
      {children}
    </p>
  );
}

/* ================================================================== *
 * Tags
 * ================================================================== */

export function Pill({ children, quiet = false }: { children: ReactNode; quiet?: boolean }) {
  return <span className={`pill ${quiet ? "pill-quiet" : ""}`}>{children}</span>;
}

/* ================================================================== *
 * Motion
 * ================================================================== */

export function Reveal({
  children,
  delay = 0,
  as: Tag = "div",
  className = "",
  style,
}: {
  children: ReactNode;
  delay?: number;
  as?: "div" | "li" | "p" | "span";
  className?: string;
  style?: CSSProperties;
}) {
  const { ref, inView } = useInView<HTMLDivElement>();
  return (
    <Tag
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      ref={ref as any}
      className={`reveal ${inView ? "is-in" : ""} ${className}`}
      style={{ ["--reveal-delay" as string]: `${delay}ms`, ...style }}
    >
      {children}
    </Tag>
  );
}

/* ================================================================== *
 * Links
 * ================================================================== */

export function ExternalLink({
  href,
  children,
  className = "",
}: {
  href: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`group/link inline-flex items-baseline gap-1.5 text-[0.9375rem] ${className}`}
    >
      <span className="u-link">{children}</span>
      <span
        aria-hidden
        className="inline-block text-[0.8em] transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover/link:translate-x-[3px] group-hover/link:-translate-y-[2px]"
      >
        ↗
      </span>
    </a>
  );
}

/* ================================================================== *
 * Numerals
 * ================================================================== */

export function Figure({
  prefix,
  to,
  decimals = 0,
  group = false,
  suffix = "",
  className = "",
}: {
  prefix?: string;
  to: number;
  decimals?: number;
  group?: boolean;
  suffix?: string;
  className?: string;
}) {
  const { ref, inView } = useInView<HTMLSpanElement>(0.2);
  const value = useCountUp(to, inView);
  const shown = group
    ? Math.round(value).toLocaleString("en-US")
    : value.toFixed(decimals);

  return (
    <span ref={ref} className={`figure whitespace-nowrap ${className}`}>
      {/* the "from" value is subordinate: the arrival number carries the row */}
      {prefix ? (
        <span className="mr-[0.14em] align-[0.24em] text-[0.42em] opacity-40">
          {prefix}
        </span>
      ) : null}
      {shown}
      {suffix}
    </span>
  );
}

/* ================================================================== *
 * Photography
 * ================================================================== */

/**
 * A print. Until the file exists it falls back to a proof sheet with crop
 * marks, so the composition still reads as art-directed.
 */
export function Plate({
  src,
  alt,
  ratio = "4 / 5",
  className = "",
}: {
  src: string;
  alt: string;
  ratio?: string;
  className?: string;
}) {
  const [failed, setFailed] = useState(false);

  return (
    <div
      className={`relative overflow-hidden bg-aged ${className}`}
      style={{ aspectRatio: ratio }}
    >
      {/* the proof sheet sits behind, so a source that has not resolved yet
          still shows a composed plate */}
      <div
        aria-hidden
        className="sheet-grid absolute inset-0 flex flex-col items-center justify-center gap-4 bg-paper-2"
      >
        <span className="font-mono text-[1.75rem] font-medium tracking-[0.24em] text-ink/25">
          KR
        </span>
        <span className="h-px w-10 bg-terracotta/40" />
        <CropMarks />
      </div>

      {/* the image stays mounted whatever happens, so its source is never
          dropped from the document */}
      <img
        src={src}
        alt={failed ? "" : alt}
        loading="lazy"
        decoding="async"
        onError={() => setFailed(true)}
        className={`relative size-full object-cover object-[50%_32%] transition-opacity duration-300 ${
          failed ? "opacity-0" : "opacity-100"
        }`}
      />
    </div>
  );
}

/* ================================================================== *
 * Artifacts: the visual material a spread is built from. Each tile is
 * a different stock, so a board of them reads as collected material
 * rather than a row of cards.
 * ================================================================== */

export type ArtifactTone = "paper" | "aged" | "manila" | "kraft" | "slate" | "grid";

/* every tile needs its own edge, or a paper tile vanishes into a paper sheet */
const toneClass: Record<ArtifactTone, string> = {
  paper: "bg-paper text-ink ring-1 ring-ink/12",
  aged: "bg-aged text-ink ring-1 ring-ink/10",
  manila: "bg-manila text-ink ring-1 ring-ink/10",
  kraft: "bg-kraft text-[#2a1f12] ring-1 ring-black/15",
  slate: "bg-slate text-chalk ring-1 ring-white/10",
  grid: "bg-paper sheet-grid text-ink ring-1 ring-ink/12",
};

export type ArtifactSpec =
  | { kind: "metric"; figure: string; caption: string; tone: ArtifactTone }
  | { kind: "type"; sample: string; caption: string; tone: ArtifactTone }
  | { kind: "list"; title: string; items: string[]; tone: ArtifactTone }
  | { kind: "quote"; text: string; caption: string; tone: ArtifactTone }
  | { kind: "swatch"; caption: string; tone: ArtifactTone }
  | { kind: "photo"; src: string; alt: string; tone: ArtifactTone };

export function Artifact({ spec }: { spec: ArtifactSpec }) {
  const base = `relative overflow-hidden ring-inset ${toneClass[spec.tone]}`;

  if (spec.kind === "photo") {
    return (
      <div className={base}>
        <Plate src={spec.src} alt={spec.alt} ratio="1 / 1" className="size-full" />
      </div>
    );
  }

  return (
    <div className={`${base} flex flex-col justify-between p-4 lg:p-5`}>
      {spec.kind === "metric" ? (
        <>
          <p className="figure text-[clamp(1.5rem,3vw,2.5rem)]">{spec.figure}</p>
          <p className="mt-3 text-[0.75rem] leading-snug opacity-80">{spec.caption}</p>
        </>
      ) : null}

      {spec.kind === "type" ? (
        <>
          <p className="display text-[clamp(1.25rem,2.5vw,2rem)] leading-[0.98]">
            {spec.sample}
          </p>
          <p className="mark mt-4 opacity-80">{spec.caption}</p>
        </>
      ) : null}

      {spec.kind === "list" ? (
        <>
          <p className="mark opacity-80">{spec.title}</p>
          <ul className="mt-auto space-y-1.5 pt-4">
            {spec.items.map((i) => (
              <li key={i} className="text-[0.8125rem] leading-snug font-medium">
                {i}
              </li>
            ))}
          </ul>
        </>
      ) : null}

      {spec.kind === "quote" ? (
        <>
          <p className="headline text-[0.9375rem] leading-[1.3]">&ldquo;{spec.text}&rdquo;</p>
          <p className="mark mt-4 opacity-80">{spec.caption}</p>
        </>
      ) : null}

      {spec.kind === "swatch" ? (
        <>
          <div className="grid grid-cols-2 gap-2">
            {(["terracotta", "olive", "ochre", "ink"] as Swatch[]).map((sw) => (
              <span key={sw} className={`block aspect-square ${swatchBg[sw]}`} />
            ))}
          </div>
          <p className="mark mt-4 opacity-80">{spec.caption}</p>
        </>
      ) : null}
    </div>
  );
}

/**
 * A three-column board of artifacts with swatch dots straddling the interior
 * intersections, the way a moodboard is pinned up and marked.
 */
export function ArtifactBoard({
  items,
  dots = ["terracotta", "olive", "ochre", "ink"],
  className = "",
}: {
  items: ArtifactSpec[];
  dots?: Swatch[];
  className?: string;
}) {
  const GAP = 10; // px, must match the gap below for the dots to land true
  const at = (n: 1 | 2) => `calc((100% - ${2 * GAP}px) * ${n} / 3 + ${GAP * n - GAP / 2}px)`;
  const marks: { x: 1 | 2; y: 1 | 2 }[] = [
    { x: 1, y: 1 },
    { x: 2, y: 1 },
    { x: 1, y: 2 },
    { x: 2, y: 2 },
  ];

  return (
    <div className={`relative ${className}`}>
      <div className="grid grid-cols-2 items-start gap-2 [&>*]:min-h-[9.5rem] sm:grid-cols-3 sm:gap-[10px] sm:[&>*]:aspect-square sm:[&>*]:min-h-0">
        {items.map((spec, i) => (
          <Artifact key={i} spec={spec} />
        ))}
      </div>

      <span aria-hidden className="pointer-events-none absolute inset-0 hidden sm:block">
        {marks.slice(0, dots.length).map((m, i) => (
          <span
            key={i}
            className={`absolute size-[clamp(1.75rem,3.2vw,2.75rem)] -translate-x-1/2 -translate-y-1/2 rounded-full shadow-[0_3px_8px_rgba(0,0,0,0.3)] ${
              swatchBg[dots[i]]
            }`}
            style={{ left: at(m.x), top: at(m.y) }}
          />
        ))}
      </span>
    </div>
  );
}
