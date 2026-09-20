import { Link } from "react-router-dom";
import { campaigns, campaignsFootnote, caseStudies } from "../content";
import { ExternalLink, Folio, Reveal, Sheet } from "../components/ui";

/* ---- 03 WORK: the index -------------------------------------------- *
 * Three doors, then the campaign archive as supporting proof. The full
 * case studies live on their own routes.
 * ------------------------------------------------------------------- */

export default function Work() {
  return (
    <>
      <Reveal>
        <Sheet rule="grid" className="relative">
          <div className="px-6 pt-12 pb-4 sm:px-12 sm:pt-16 lg:px-20 lg:pt-20">
            <Folio level={1} n="03" label="Work" />
            <p className="t-page mt-8">Selected work</p>
            <p className="t-body mt-4 max-w-[52ch]">
              Three examples of content systems built for growth.
            </p>
          </div>

          {/* the three doors */}
          <ul className="mt-8 border-t border-hair">
            {caseStudies.map((c) => (
              <li key={c.slug}>
                <Link
                  to={`/work/${c.slug}`}
                  className="group block border-b border-hair px-6 py-10 transition-colors duration-300 hover:bg-paper-2 sm:px-12 lg:px-20 lg:py-12"
                >
                  <div className="grid gap-x-12 gap-y-6 lg:grid-cols-12">
                    <div className="lg:col-span-7">
                      <div className="flex items-baseline gap-5">
                        <span
                          aria-hidden
                          className="figure text-[1.75rem] text-terracotta"
                        >
                          {c.index}
                        </span>
                        <h2 className="t-item max-w-[20ch] text-ink">{c.title}</h2>
                      </div>
                      <p className="mark mt-4 text-ink-3 lg:pl-[3.4rem]">
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
                      <p className="mt-4 max-w-[52ch] text-[0.9375rem] leading-relaxed text-ink-2 lg:pl-[3.4rem]">
                        {c.summary}
                      </p>
                    </div>

                    <div className="lg:col-span-5">
                      <dl className="grid grid-cols-3 gap-x-5">
                        {c.metrics.map((m) => (
                          <div key={m.figure}>
                            <dt className="figure text-[clamp(1.25rem,1.9vw,1.625rem)] text-ink">{m.figure}</dt>
                            <dd className="mt-2 text-[0.75rem] leading-snug text-ink-3">
                              {m.caption}
                            </dd>
                          </div>
                        ))}
                      </dl>
                      <span className="u-link mt-7 inline-flex items-center gap-2 text-[0.9375rem]">
                        View case study
                        <span
                          aria-hidden
                          className="transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-1"
                        >
                          →
                        </span>
                      </span>
                    </div>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </Sheet>
      </Reveal>

      {/* secondary: the campaign archive, deliberately quieter */}
      <Reveal className="mt-10 lg:mt-14">
        <Sheet variant="kraft" className="relative">
          <div className="px-6 py-12 sm:px-12 lg:px-20 lg:py-16">
            <Folio level={2} n="03a" label="Campaign archive" />
            <p className="t-section mt-6">Selected brand and talent campaigns.</p>

            <ul className="mt-10">
              {campaigns.map((c) => (
                <li
                  key={c.name}
                  className="grid gap-x-10 gap-y-3 border-t border-black/12 py-6 md:grid-cols-12"
                >
                  <p className="mark md:col-span-3">{c.brand}</p>
                  <div className="md:col-span-6">
                    <h3 className="text-[1.0625rem] font-semibold">{c.name}</h3>
                    <p className="mt-1.5 max-w-[60ch] text-[0.9375rem] leading-relaxed opacity-80">
                      {c.description}
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-x-6 gap-y-1.5 md:col-span-3 md:justify-end">
                    {c.links.map((l) => (
                      <ExternalLink key={l.href} href={l.href}>
                        {l.label}
                      </ExternalLink>
                    ))}
                  </div>
                </li>
              ))}
            </ul>

            <p className="mt-8 max-w-[70ch] border-t border-black/12 pt-6 text-[0.875rem] leading-relaxed opacity-75">
              {campaignsFootnote}
            </p>
          </div>
        </Sheet>
      </Reveal>
    </>
  );
}
