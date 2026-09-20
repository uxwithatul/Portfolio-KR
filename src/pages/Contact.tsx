import { closing, profile } from "../content";
import {
  Arrow,
  Clip,
  ExternalLink,
  Folio,
  Note,
  Reveal,
  Sheet,
} from "../components/ui";

/* ---- 06 CONTACT: the last sheet pulled from the folder -------------- */

const disciplines = ["Content Strategy", "SEO", "Brand Marketing", "Social Media"];

export default function Contact() {
  return (
    <Reveal>
      <Sheet rule="grid" className="relative">
        <Clip className="-top-7 right-10 sm:right-24" />

        <div className="px-5 pt-14 pb-12 sm:px-10 sm:pt-20 lg:px-16 lg:pt-24 lg:pb-16">
          <div className="flex flex-wrap items-baseline justify-between gap-x-8 gap-y-2">
            <Folio level={1} n="06" label="Contact" />
            <span className="mark text-ink-3">{profile.location}</span>
          </div>

          <h2 className="t-hero lc mt-14 max-w-[13ch] text-ink lg:mt-20">
            {closing.statement[0]}{" "}
            <span className="text-terracotta">{closing.statement[1]}</span>
          </h2>

          <div className="mt-16 grid gap-x-12 gap-y-10 lg:mt-24 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <a
                href={`mailto:${profile.email}`}
                className="u-link t-item inline-block break-words"
              >
                {profile.email}
              </a>
              <div className="mt-6 hidden items-start gap-2 lg:flex">
                <Arrow dir="ne" className="h-9 w-11" />
                <Note className="max-w-[20ch] pt-3">
                  Briefs, roles and the occasional long email, all welcome
                </Note>
              </div>
            </div>

            <div className="lg:col-span-4 lg:col-start-9 lg:text-right">
              <p>
                <a href={profile.phoneHref} className="u-link text-[1.25rem]">
                  {profile.phone}
                </a>
              </p>
              <p className="mt-5">
                <ExternalLink href={profile.linkedin}>LinkedIn</ExternalLink>
              </p>
              <p className="mark mt-10 text-ink-3">{profile.location}</p>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-x-8 gap-y-3 border-t border-hair px-5 py-5 sm:px-10 lg:px-16">
          <span className="mark text-ink-3">{profile.name}</span>
          <ul className="flex flex-wrap gap-x-7 gap-y-1">
            {disciplines.map((d) => (
              <li key={d} className="mark text-ink-3">
                {d}
              </li>
            ))}
          </ul>
        </div>
      </Sheet>
    </Reveal>
  );
}
