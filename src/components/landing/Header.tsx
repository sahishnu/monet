import { useState } from "react";
import { nav, brand } from "../../content/landing";
import { LogoMark } from "./LogoMark";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="relative z-50 shrink-0">
      <div className="mx-auto flex h-24 min-h-24 max-w-[var(--page-max)] items-center justify-between px-[var(--page-gutter)] py-8">
        <a
          href="#"
          className="flex items-center gap-2"
          onClick={() => setOpen(false)}
        >
          <LogoMark />
          <span className="text-base font-bold tracking-[-0.02em] text-[#1A1A1A]">
            {brand.name}
          </span>
        </a>

        <nav
          className="hidden items-center gap-8 lg:flex"
          aria-label="Primary"
        >
          {nav.links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-[#7A7A78] transition hover:text-[#1A1A1A]"
            >
              {l.label}
            </a>
          ))}
          <a
            href={nav.cta.href}
            className="flex min-h-11 min-w-[44px] items-center justify-center bg-[#1A1A1A] px-6 py-2.5 text-[13px] font-semibold text-[#FAFAF8] transition hover:opacity-90"
          >
            {nav.cta.label}
          </a>
        </nav>

        <button
          type="button"
          className="flex min-h-11 min-w-11 items-center justify-center lg:hidden"
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

      <div
        id="mobile-nav"
        className={`border-t border-black/5 bg-[#FAFAF8] px-[var(--page-gutter)] py-4 lg:hidden ${open ? "block" : "hidden"}`}
      >
        <nav className="flex flex-col gap-1" aria-label="Mobile primary">
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
