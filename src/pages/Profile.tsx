import {
  clients,
  leadershipNotes,
  quotes,
  venture,
  workIndex,
} from "../content";
import { ExternalLink, Folio, Reveal, Sheet } from "../components/ui";

/* ---- 05 PROFILE: supporting professional material ------------------ *
 * Deliberately quieter than Work. Five clear sections, one sheet.
 * ------------------------------------------------------------------- */

export default function Profile() {
  return (
    <Reveal>
      <Sheet variant="aged" rule="grid" className="relative">
        <div className="px-6 pt-12 sm:px-12 sm:pt-16 lg:px-20 lg:pt-20">
          <Folio level={1} n="05" label="Profile" />
          <p className="t-page mt-8 max-w-[20ch]">
            The leadership behind the work.
          </p>
        </div>

        {/* leadership */}
        <section className="mt-12 px-6 sm:px-12 lg:px-20">
          <h2 className="t-section border-b border-hair pb-4">Leadership</h2>
          <ul className="mt-2">
            {leadershipNotes.map((n) => (
              <li key={n.heading} className="border-b border-hair py-6">
                <h3 className="max-w-[44ch] text-[1.0625rem] font-semibold text-ink">
                  {n.heading}
                </h3>
                <p className="mt-2 max-w-[68ch] text-[0.9375rem] leading-relaxed text-ink-2">
                  {n.body}
                </p>
              </li>
            ))}
          </ul>
        </section>

        {/* client and freelance */}
        <section className="mt-14 px-6 sm:px-12 lg:px-20">
          <h2 className="t-section border-b border-hair pb-4">Client and freelance</h2>
          <dl className="mt-6 grid gap-x-12 gap-y-5 sm:grid-cols-2 lg:grid-cols-4">
            {clients.map((c) => (
              <div key={c.name}>
                <dt className="text-[1.0625rem] font-semibold text-ink">{c.name}</dt>
                <dd className="mt-1 max-w-[26ch] text-[0.9375rem] leading-relaxed text-ink-3">
                  {c.work}
                </dd>
              </div>
            ))}
          </dl>
        </section>

        {/* the venture */}
        <section className="mt-14 px-6 sm:px-12 lg:px-20">
          <h2 className="t-section border-b border-hair pb-4">{venture.name}</h2>
          <div className="mt-6 grid gap-x-14 gap-y-4 lg:grid-cols-12">
            <p className="text-[1.0625rem] font-semibold text-ink lg:col-span-3">
              {venture.role}
              <span className="mt-1 block font-normal text-ink-3">{venture.status}</span>
            </p>
            <p className="max-w-[64ch] text-[0.9375rem] leading-[1.75] text-ink-2 lg:col-span-8">
              {venture.body}
            </p>
          </div>
        </section>

        {/* testimonials */}
        <section className="mt-14 px-6 sm:px-12 lg:px-20">
          <h2 className="t-section border-b border-hair pb-4">In their words</h2>
          <ul className="mt-2">
            {quotes.map((q) => (
              <li
                key={q.text}
                className="grid gap-x-12 gap-y-2 border-b border-hair py-6 lg:grid-cols-12"
              >
                <blockquote className="lg:col-span-7">
                  <p className="max-w-[52ch] text-[1.125rem] leading-[1.5] text-ink">
                    &ldquo;{q.text}&rdquo;
                  </p>
                </blockquote>
                <div className="lg:col-span-4 lg:col-start-9">
                  <p className="text-[0.9375rem] font-semibold text-ink">{q.name}</p>
                  <p className="mark mt-1 text-ink-3">{q.title}</p>
                  {q.context ? (
                    <p className="mt-2 max-w-[34ch] text-[0.8125rem] leading-snug text-ink-3">
                      {q.context}
                    </p>
                  ) : null}
                </div>
              </li>
            ))}
          </ul>
        </section>

        {/* additional work */}
        <section className="mt-14 px-6 pb-14 sm:px-12 lg:px-20 lg:pb-16">
          <h2 className="t-section border-b border-hair pb-4">Additional work</h2>
          <ul className="mt-2">
            {workIndex.map((item) => (
              <li
                key={item.index}
                className="grid gap-x-10 gap-y-3 border-b border-hair py-6 md:grid-cols-12"
              >
                <div className="md:col-span-7">
                  <h3 className="text-[1.0625rem] font-semibold text-ink">{item.title}</h3>
                  <p className="mt-1.5 max-w-[56ch] text-[0.9375rem] leading-relaxed text-ink-3">
                    {item.description}
                  </p>
                </div>
                <div className="flex flex-wrap gap-x-6 gap-y-1.5 md:col-span-5 md:justify-end">
                  {item.links.map((l) => (
                    <ExternalLink key={l.href} href={l.href}>
                      {l.label}
                    </ExternalLink>
                  ))}
                </div>
              </li>
            ))}
          </ul>
        </section>
      </Sheet>
    </Reveal>
  );
}
