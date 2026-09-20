import { Link } from "react-router-dom";
import { hero, profile, proofPoints } from "../content";
import { Clip, Reveal, Sheet } from "../components/ui";

/* ---- 01 HOME: who is Kriti ----------------------------------------- *
 * The entry point. Name, position, statement, three proof points, and
 * one clear next step. Nothing else belongs here.
 * ------------------------------------------------------------------- */

export default function Home() {
  return (
    <Reveal>
      <Sheet rule="grid" className="relative">
        <Clip className="-top-7 right-10 sm:right-20" />

        <div className="px-6 pt-12 pb-10 sm:px-12 sm:pt-16 lg:px-20 lg:pt-20">
          <p className="mark text-ink-3">{hero.kicker}</p>

          <h1 className="sr-only">
            {profile.name}, {profile.role}
          </h1>

          <p className="mt-9 text-[1.0625rem] font-semibold text-ink lg:mt-12">
            {profile.name}
            <span className="mx-2.5 text-hair" aria-hidden>
              /
            </span>
            <span className="font-normal text-ink-2">{profile.role}</span>
          </p>

          <p className="t-hero lc mt-6 max-w-[15ch] text-ink" aria-hidden>
            Words that scale into <span className="text-terracotta">growth systems.</span>
          </p>

          <p className="t-body mt-9 max-w-[62ch] lg:mt-11">{hero.standfirst}</p>

          {/* three proof points, straight after the statement */}
          <dl className="mt-12 grid gap-x-10 gap-y-8 border-t border-hair pt-10 sm:grid-cols-3 lg:mt-16">
            {proofPoints.map((p) => (
              <div key={p.figure}>
                <dt className="figure text-[clamp(2.25rem,4.6vw,3.5rem)] text-ink">
                  {p.figure}
                </dt>
                <dd className="mt-3 text-[0.9375rem] text-ink-3">{p.label}</dd>
              </div>
            ))}
          </dl>

          <div className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-4 lg:mt-14">
            <Link
              to="/work"
              className="group inline-flex items-center gap-3 rounded-full bg-ink px-8 py-4 text-[0.9375rem] font-medium whitespace-nowrap text-paper transition-colors duration-300 hover:bg-terracotta active:translate-y-px"
            >
              Explore the work
              <span
                aria-hidden
                className="transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-1"
              >
                →
              </span>
            </Link>
            <a
              href={`mailto:${profile.email}`}
              className="u-link text-[0.9375rem] whitespace-nowrap"
            >
              Get in touch
            </a>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-x-7 gap-y-2 border-t border-hair px-6 py-4 sm:px-12 lg:px-20">
          <span className="mark text-ink-3">{profile.location}</span>
          <a href={`mailto:${profile.email}`} className="u-link text-[0.875rem]">
            {profile.email}
          </a>
          <a href={profile.phoneHref} className="u-link text-[0.875rem]">
            {profile.phone}
          </a>
        </div>
      </Sheet>
    </Reveal>
  );
}
