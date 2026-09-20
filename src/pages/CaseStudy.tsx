import { Link, useParams } from "react-router-dom";
import { caseStudies } from "../content";
import { Folio, Reveal, Sheet } from "../components/ui";

/* ---- 03 WORK / detail ---------------------------------------------- *
 * One structure for all three: context, what I did, result. Scannable
 * in seconds, with a clear way back and forward.
 * ------------------------------------------------------------------- */

export default function CaseStudy() {
  const { slug } = useParams();
  const i = caseStudies.findIndex((c) => c.slug === slug);
  const c = caseStudies[i];

  if (!c) {
    return (
      <Sheet className="px-6 py-16 sm:px-12 lg:px-20">
        <p className="t-page">That case study is not in the file.</p>
        <Link to="/work" className="u-link mt-6 inline-block text-[0.9375rem]">
          Back to work
        </Link>
      </Sheet>
    );
  }

  const next = caseStudies[(i + 1) % caseStudies.length];

  return (
    <Reveal>
      <Sheet className="relative">
        <div className="px-6 pt-10 sm:px-12 sm:pt-14 lg:px-20 lg:pt-16">
          <div className="flex flex-wrap items-center justify-between gap-x-8 gap-y-3 border-b border-hair pb-6">
            <Link to="/work" className="u-link text-[0.875rem]">
              ← Back to work
            </Link>
            <span className="mark text-ink-3">
              {c.index} / {String(caseStudies.length).padStart(2, "0")}
            </span>
          </div>

          <div className="mt-10 lg:mt-14">
            <Folio n="03" label="Case study" />
            <h1 className="t-page mt-6 max-w-[22ch]">{c.title}</h1>
            <p className="mark mt-5 text-ink-3">
              {c.company}
              <span className="mx-2.5 opacity-40" aria-hidden>
                /
              </span>
              {c.position}
              <span className="mx-2.5 opacity-40" aria-hidden>
                /
              </span>
              {c.dates}
            </p>
            <p className="t-body mt-7 max-w-[58ch] text-ink">{c.summary}</p>
          </div>

          {/* three passages, one structure */}
          <div className="mt-12 grid gap-x-14 gap-y-10 border-t border-hair pt-10 lg:mt-16 lg:grid-cols-2">
            <section>
              <h2 className="t-section">Context</h2>
              <p className="mt-4 max-w-[54ch] text-[1rem] leading-[1.75] text-ink-2">
                {c.challenge}
              </p>
            </section>
            <section>
              <h2 className="t-section">What I did</h2>
              <p className="mt-4 max-w-[54ch] text-[1rem] leading-[1.75] text-ink-2">
                {c.approach}
              </p>
            </section>
          </div>
        </div>

        {/* the result, on its own tone */}
        <section className="mt-12 bg-paper-2 px-6 py-12 sm:px-12 lg:mt-16 lg:px-20 lg:py-14">
          <h2 className="t-section">Result</h2>
          <dl className="mt-8 grid gap-x-12 gap-y-9 sm:grid-cols-3">
            {c.metrics.map((m) => (
              <div key={m.figure}>
                <dt className="figure text-[clamp(2.25rem,5vw,3.5rem)] text-ink">
                  {m.figure}
                </dt>
                <dd className="mt-3 max-w-[24ch] text-[0.9375rem] leading-snug text-ink-3">
                  {m.caption}
                </dd>
              </div>
            ))}
          </dl>
        </section>

        <nav
          aria-label="Case studies"
          className="flex flex-wrap items-center justify-between gap-6 border-t border-hair px-6 py-6 sm:px-12 lg:px-20"
        >
          <Link to="/work" className="u-link text-[0.875rem]">
            ← All work
          </Link>
          <Link to={`/work/${next.slug}`} className="u-link text-[0.9375rem]">
            Next: {next.shortTitle} →
          </Link>
        </nav>
      </Sheet>
    </Reveal>
  );
}
