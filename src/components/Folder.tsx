import { useEffect, useRef } from "react";
import { Link, NavLink, Outlet, useLocation } from "react-router-dom";
import { dividers, profile } from "../content";
import { Stage } from "./ui";

/* ------------------------------------------------------------------ *
 * The folder. It is mounted once and stays put; only the sheets inside
 * it change as dividers are opened.
 * ------------------------------------------------------------------ */

function Tabs() {
  const railRef = useRef<HTMLDivElement>(null);
  const { pathname } = useLocation();

  /* keep the open divider in view when the rail has to scroll */
  useEffect(() => {
    const rail = railRef.current;
    const active = rail?.querySelector<HTMLElement>('[aria-current="page"]');
    if (!rail || !active) return;
    const left = active.offsetLeft - rail.clientWidth / 2 + active.clientWidth / 2;
    rail.scrollTo({ left: Math.max(0, left), behavior: "smooth" });
  }, [pathname]);

  return (
    <nav aria-label="Portfolio dividers">
      <div
        ref={railRef}
        className="flex items-end overflow-x-auto pl-[4%] [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {dividers.map((d, i) => (
          <NavLink
            key={d.path}
            to={d.path}
            end={d.path === "/"}
            title={`${d.index} ${d.label}`}
            className={({ isActive }) =>
              [
                "group relative shrink-0 rounded-t-[5px] border-t border-r border-l px-4 pt-2.5 font-mono text-[0.6875rem] font-medium tracking-[0.14em] transition-[padding,background-color,color] duration-300 sm:px-7",
                /* tabs are cut at slightly different depths, as they would be */
                i % 3 === 1 ? "mb-px" : i % 3 === 2 ? "mb-0.5" : "",
                isActive
                  ? "z-20 bg-manila pb-[18px] text-ink border-black/15"
                  : "z-10 bg-manila-2/80 pb-3 text-ink/75 border-black/10 hover:bg-manila-2 hover:pb-4 hover:text-ink",
              ]
                .filter(Boolean)
                .join(" ")
            }
          >
            {({ isActive }) => (
              <span className="flex items-baseline gap-2">
                <span className={isActive ? "" : "opacity-70"}>{d.index}</span>
                <span className="hidden text-[0.6875rem] tracking-[0.1em] sm:inline">
                  {d.label}
                </span>
              </span>
            )}
          </NavLink>
        ))}
      </div>
    </nav>
  );
}

export default function Folder() {
  const { pathname } = useLocation();

  /* a new divider always opens at the top of the sheet */
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  }, [pathname]);

  const current =
    dividers.find((d) => d.path === pathname) ??
    dividers.find((d) => d.path !== "/" && pathname.startsWith(d.path)) ??
    dividers[0];

  return (
    <div className="on-table relative min-h-[100dvh] pb-20">
      {/* the desk label: quiet, never competing with the folder */}
      <header className="relative z-30">
        <Stage className="flex h-[58px] items-center justify-between gap-6">
          <Link to="/" className="text-[0.9375rem] font-semibold text-chalk">
            {profile.name}
          </Link>
          <p className="mark hidden text-chalk-2 sm:block">
            {profile.role} / {profile.location}
          </p>
        </Stage>
      </header>

      <Stage className="relative">
        <Tabs />

        {/* the folder body, always larger than what it holds */}
        <div className="relative">
          <span
            aria-hidden
            className="absolute inset-x-0 -top-px -bottom-8 rounded-b-[3px] border border-black/15 bg-manila shadow-[0_40px_70px_-30px_rgba(0,0,0,0.85)]"
          />
          {/* a sheet filed behind the open one, showing at the foot */}
          <span
            aria-hidden
            className="absolute top-6 bottom-1 left-1 right-7 rotate-[0.5deg] bg-paper-2 shadow-[0_20px_40px_-24px_rgba(0,0,0,0.6)] sm:left-2 sm:right-10"
          />

          {/* the open divider's sheets, inset so the folder shows around them */}
          <div
            key={pathname}
            className="page-enter relative px-2.5 pt-2 pb-8 sm:px-4 sm:pb-10"
          >
            <Outlet />
          </div>
        </div>

        {/* folder foot: what this divider holds, and its number */}
        <div className="relative z-20 mt-12 flex items-center justify-between gap-6 px-[4%] pt-1">
          <p className="mark text-ink/55">{current.holds}</p>
          <p className="mark text-ink/55">{current.index} / 06</p>
        </div>
      </Stage>
    </div>
  );
}
