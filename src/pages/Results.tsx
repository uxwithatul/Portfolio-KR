import { impact } from "../content";
import { Figure, Folio, Reveal, Sheet } from "../components/ui";

/* ---- 04 RESULTS: the evidence sheet -------------------------------- *
 * One aligned ledger. The lead figure sits above the rule; everything
 * else reads down a single system of columns.
 * ------------------------------------------------------------------- */

export default function Results() {
  const [lead, ...rest] = impact;

  return (
    <Reveal>
      <Sheet rule="grid" className="relative">
        <div className="px-6 pt-12 sm:px-12 sm:pt-16 lg:px-20 lg:pt-20">
          <Folio level={1} n="04" label="Results" />
          <p className="t-page mt-8 max-w-[18ch]">What changed because of the work.</p>
          <p className="t-body mt-4 max-w-[54ch]">
            Figures are before and after, not snapshots. Timeframe is given for each.
          </p>

          {/* the lead figure */}
          <div className="mt-12 grid items-end gap-x-12 gap-y-4 border-t border-hair pt-10 lg:mt-16 lg:grid-cols-12">
            <div className="lg:col-span-6">
              <Figure
                prefix={lead.prefix}
                to={lead.to}
                decimals={lead.decimals}
                group={lead.group}
                suffix={lead.suffix}
                className="block text-[clamp(3.5rem,11vw,8rem)] text-ink"
              />
            </div>
            <div className="lg:col-span-5 lg:col-start-8 lg:pb-3">
              <p className="t-section text-ink">{lead.label}</p>
              {lead.note ? (
                <p className="mt-2 max-w-[38ch] text-[0.9375rem] leading-relaxed text-ink-3">
                  {lead.note}
                </p>
              ) : null}
              <p className="mark mt-3 text-ink-3">{lead.period}</p>
            </div>
          </div>
        </div>

        {/* the ledger: one column system, every row aligned */}
        <div className="mt-12 px-6 pb-12 sm:px-12 lg:px-20 lg:pb-16">
          <div className="hidden grid-cols-12 gap-x-10 border-b border-hair pb-3 lg:grid">
            <span className="mark col-span-4 text-ink-3">Figure</span>
            <span className="mark col-span-5 text-ink-3">What it measures</span>
            <span className="mark col-span-3 text-ink-3 text-right">Timeframe</span>
          </div>

          <dl>
            {rest.map((m, i) => (
              <Reveal
                key={m.label}
                delay={i * 45}
                className="grid grid-cols-1 items-baseline gap-x-10 gap-y-2 border-b border-hair py-7 lg:grid-cols-12"
              >
                <dt className="lg:col-span-4">
                  <Figure
                    prefix={m.prefix}
                    to={m.to}
                    decimals={m.decimals}
                    group={m.group}
                    suffix={m.suffix}
                    className="block text-[clamp(1.875rem,3.4vw,2.75rem)] text-ink"
                  />
                </dt>
                <dd className="lg:col-span-5">
                  <p className="text-[1.0625rem] font-medium text-ink">{m.label}</p>
                  {m.note ? (
                    <p className="mt-1.5 max-w-[42ch] text-[0.9375rem] leading-relaxed text-ink-3">
                      {m.note}
                    </p>
                  ) : null}
                </dd>
                <dd className="mark text-ink-3 lg:col-span-3 lg:text-right">{m.period}</dd>
              </Reveal>
            ))}
          </dl>
        </div>
      </Sheet>
    </Reveal>
  );
}
