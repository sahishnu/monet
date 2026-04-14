import { nav } from "../../content/landing";
import { BrandWordmark } from "./BrandWordmark";
import { LogoMark } from "./LogoMark";

export function Header() {
  return (
    <header className="relative z-50 shrink-0">
      <div className="mx-auto flex w-full max-w-[var(--page-max)] justify-center px-[var(--page-gutter)] pb-4 lg:pb-8">
        <div className="flex w-full max-w-[var(--content-width)] items-center justify-between pt-3 leading-normal lg:pt-[calc(var(--grid-unit)-0.75lh)] lg:leading-[max(2rem,calc(var(--grid-unit)/2))]">
          <a href="#" className="inline-flex items-center overflow-visible">
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
        </div>
      </div>
    </header>
  );
}
