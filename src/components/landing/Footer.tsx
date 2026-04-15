import { footer } from "../../content/landing";
import { BrandWordmark } from "./BrandWordmark";
import { LogoMark } from "./LogoMark";
import { SectionGridEdgeLines } from "./SectionGridEdgeLines";

export function Footer() {
  return (
    <footer
      id="site-footer"
      className="relative flex w-full min-w-0 flex-col items-center justify-end gap-8 self-stretch bg-[#1A1A1A] bg-cover bg-center pb-8 pt-32 lg:pb-12 lg:pt-48"
      style={{ backgroundImage: "url('/images/painting-night.jpeg')" }}
    >
      <div className="absolute inset-0 bg-[#1A1A1A]/60" aria-hidden="true" />
      <SectionGridEdgeLines />
      <div className="relative z-10 flex w-full flex-col items-center gap-8">
        <div className="mx-auto flex w-full max-w-[var(--page-max)] flex-col items-start justify-between gap-4 px-[var(--page-gutter)] pt-4 sm:flex-row sm:items-start">
          <div className="inline-flex items-center overflow-visible">
            <LogoMark className="relative z-0" size="sm" />
            <BrandWordmark
              variant="footer"
              className="relative z-10 -ml-3 min-w-0 pl-1"
            />
          </div>
          <div className="flex flex-col items-start gap-2 sm:items-end">
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
            <p className="text-xs text-[#B0B0AE]">{footer.copyright}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
