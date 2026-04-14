import { brand, footer } from "../../content/landing";
import { BrandWordmark } from "./BrandWordmark";
import { LogoMark } from "./LogoMark";
import { SectionGridEdgeLines } from "./SectionGridEdgeLines";

export function Footer() {
  return (
    <footer
      id="site-footer"
      className="relative flex w-full min-w-0 flex-col items-center justify-center gap-8 self-stretch bg-[#1A1A1A] py-10"
    >
      <SectionGridEdgeLines />
      <div className="relative z-10 flex w-full flex-col items-center gap-8">
        <div className="mx-auto flex w-full max-w-[var(--page-max)] flex-col justify-between gap-8 px-[var(--page-gutter)] lg:flex-row lg:items-start">
          <div className="flex max-w-xs flex-col gap-3">
            <div className="inline-flex items-center overflow-visible">
              <LogoMark className="relative z-0" size="sm" />
              <BrandWordmark
                variant="footer"
                className="relative z-10 -ml-3 min-w-0 pl-0.5"
              />
            </div>
            <p className="text-[13px] leading-relaxed text-[#FFFFFF73]">{brand.tagline}</p>
          </div>
          <div className="flex flex-wrap gap-10 lg:gap-14">
            {footer.columns.map((col) => (
              <div key={col.title} className="flex min-w-[8rem] flex-col gap-2.5">
                <p className="text-[11px] font-bold uppercase tracking-widest text-[#B0B0AE]">
                  {col.title}
                </p>
                {col.links.map((l) => (
                  <a
                    key={l.label}
                    href={l.href}
                    className="text-[13px] text-[#FFFFFF99] transition hover:text-[#FAFAF8]"
                  >
                    {l.label}
                  </a>
                ))}
              </div>
            ))}
          </div>
        </div>
        <div className="mx-auto flex w-full max-w-[var(--page-max)] flex-col items-start justify-between gap-4 border-t border-[#FFFFFF1F] px-[var(--page-gutter)] pt-4 sm:flex-row sm:items-center">
          <p className="text-xs text-[#B0B0AE]">{footer.copyright}</p>
          <div className="flex gap-5">
            {footer.legal.map((l) => (
              <a
                key={l.label}
                href={l.href}
                className="text-xs text-[#B0B0AE] transition hover:text-[#FAFAF8]"
              >
                {l.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
