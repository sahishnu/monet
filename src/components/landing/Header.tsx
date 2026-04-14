import { useState } from "react";
import { nav } from "../../content/landing";
import { BrandWordmark } from "./BrandWordmark";
import { LogoMark } from "./LogoMark";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="relative z-50 shrink-0">
      <div className="mx-auto flex w-full max-w-[var(--page-max)] justify-center px-[var(--page-gutter)] pb-8">
        <div className="flex w-full max-w-[var(--content-width)] items-center justify-between pt-[calc(var(--grid-unit)-0.75lh)] leading-[max(2rem,calc(var(--grid-unit)/2))]">
          <a
            href="#"
            className="inline-flex items-center overflow-visible"
            onClick={() => setOpen(false)}
          >
            <LogoMark className="relative z-0" />
            <BrandWordmark
              variant="header"
              className="relative z-10 -ml-4 min-w-0 pl-1"
            />
          </a>

          <nav
            className="hidden items-center gap-8 leading-normal lg:flex"
            aria-label="Primary"
          >
            {nav.links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm leading-normal text-[#7A7A78] transition hover:text-[#1A1A1A]"
              >
                {l.label}
              </a>
            ))}
            <a
              href={nav.cta.href}
              className="inline-flex shrink-0 items-center bg-[#1A1A1A] px-5 py-2 text-sm font-semibold text-[#FAFAF8] transition hover:opacity-90"
            >
              {nav.cta.label}
            </a>
          </nav>

          <button
            type="button"
            className="flex min-h-11 min-w-11 items-center justify-center leading-none lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((o) => !o)}
          >
            <span className="relative block h-3.5 w-5">
              <span
                className={`absolute left-0 top-0 block h-0.5 w-full bg-[#1A1A1A] transition ${open ? "translate-y-1.5 rotate-45" : ""}`}
              />
              <span
                className={`absolute left-0 top-1.5 block h-0.5 w-full bg-[#1A1A1A] transition ${open ? "opacity-0" : ""}`}
              />
              <span
                className={`absolute left-0 top-3 block h-0.5 w-full bg-[#1A1A1A] transition ${open ? "-translate-y-1.5 -rotate-45" : ""}`}
              />
            </span>
          </button>
        </div>
      </div>

      <div
        id="mobile-nav"
        className={`border-t border-black/5 bg-[#FAFAF8] px-[var(--page-gutter)] py-4 lg:hidden ${open ? "block" : "hidden"}`}
      >
        <nav
          className="mx-auto flex w-full max-w-[var(--content-width)] flex-col gap-1"
          aria-label="Mobile primary"
        >
          {nav.links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="min-h-11 py-3 text-sm text-[#7A7A78]"
              onClick={() => setOpen(false)}
            >
              {l.label}
            </a>
          ))}
          <a
            href={nav.cta.href}
            className="mt-2 flex min-h-11 items-center justify-center bg-[#1A1A1A] px-6 py-2.5 text-[13px] font-semibold text-[#FAFAF8]"
            onClick={() => setOpen(false)}
          >
            {nav.cta.label}
          </a>
        </nav>
      </div>
    </header>
  );
}
