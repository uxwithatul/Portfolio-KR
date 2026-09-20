import { about, education, hero, portraitSrc, profile } from "../content";
import { Folio, Pill, Plate, Reveal, Sheet } from "../components/ui";

/* ---- 02 ABOUT: background, expertise, credentials ------------------ */

export default function About() {
  const s = about.statement;

  return (
    <Reveal>
      <Sheet rule="grid" className="relative">
        <div className="px-6 pt-12 sm:px-12 sm:pt-16 lg:px-20 lg:pt-20">
          <Folio level={1} n="02" label="About" />

          <div className="mt-8 grid gap-x-14 gap-y-10 lg:grid-cols-12">
            <div className="lg:col-span-8">
              <p className="t-page lc max-w-[20ch]">
                {s.before}
                <span className="text-terracotta">{s.italicOne}</span>
                {s.middle}
                <span className="text-terracotta">{s.italicTwo}</span>
                {s.after}
              </p>
              <p className="t-body mt-7 max-w-[58ch] text-ink">{about.subStatement}</p>
              {about.paragraphs.map((p, i) => (
                <p key={i} className="mt-5 max-w-[62ch] text-[1rem] leading-[1.75] text-ink-2">
                  {p}
                </p>
              ))}
            </div>

            {/* one portrait, not a gallery */}
            <div className="lg:col-span-3 lg:col-start-10">
              <div className="w-[56vw] max-w-[240px] bg-paper p-2.5 shadow-[0_14px_30px_-14px_rgba(0,0,0,0.5)] lg:w-full lg:max-w-none">
                <Plate
                  src={portraitSrc}
                  alt={`${profile.name}, ${profile.role}`}
                  ratio="4 / 5"
                />
              </div>
              <p className="mt-4 max-w-[28ch] text-[0.8125rem] leading-snug text-ink-3">
                {hero.portraitCaption}
              </p>
            </div>
          </div>
        </div>

        {/* expertise, three groups */}
        <section className="mt-14 border-t border-hair px-6 py-12 sm:px-12 lg:mt-20 lg:px-20 lg:py-14">
          <h2 className="t-section">Expertise</h2>
          <dl className="mt-8 grid gap-x-12 gap-y-9 lg:grid-cols-3">
            {about.capabilities.map((cap) => (
              <div key={cap.group}>
                <dt className="mark text-ink-3">{cap.group}</dt>
                <dd className="mt-4 flex flex-wrap gap-2">
                  {cap.items.map((item) => (
                    <Pill key={item}>{item}</Pill>
                  ))}
                </dd>
              </div>
            ))}
          </dl>

          <div className="mt-10 border-t border-hair pt-8">
            <h3 className="mark text-ink-3">Tools</h3>
            <p className="mt-4 max-w-[72ch] text-[0.9375rem] leading-relaxed text-ink-2">
              {about.tools.join(" · ")}
            </p>
          </div>
        </section>

        {/* credentials */}
        <section className="border-t border-hair px-6 py-12 sm:px-12 lg:px-20 lg:py-14">
          <h2 className="t-section">Education and credentials</h2>
          <dl className="mt-8 grid gap-x-16 lg:grid-cols-2">
            {education.map((e, i) => (
              <div
                key={`${e.title}-${i}`}
                className="grid items-baseline gap-x-8 gap-y-1 border-b border-hair py-4 sm:grid-cols-[minmax(0,1fr)_minmax(0,0.9fr)]"
              >
                <dt className="text-[1rem] font-semibold text-ink">
                  {e.title}
                  {e.note ? (
                    <span className="ml-3 font-mono text-[0.6875rem] font-medium tracking-[0.1em] whitespace-nowrap text-terracotta uppercase">
                      {e.note}
                    </span>
                  ) : null}
                </dt>
                <dd className="mark text-ink-3 sm:text-right">{e.detail}</dd>
              </div>
            ))}
          </dl>
        </section>
      </Sheet>
    </Reveal>
  );
}
