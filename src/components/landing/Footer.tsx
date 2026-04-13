import { brand, footer } from "../../content/landing";
import { LogoMark } from "./LogoMark";

export function Footer() {
  return (
    <footer className="flex min-h-96 flex-col items-center justify-center gap-10 px-[var(--page-gutter)] pb-12 pt-24">
      <div className="mx-auto flex w-full max-w-[var(--page-max)] flex-col justify-between gap-10 lg:flex-row lg:items-start">
        <div className="flex max-w-xs flex-col gap-3">
          <div className="flex items-center gap-2">
            <LogoMark size="sm" />
            <span className="text-sm font-bold tracking-[-0.01em] text-[#1A1A1A]">
              {brand.name}
            </span>
          </div>
          <p className="text-[13px] leading-relaxed text-[#B0B0AE]">{brand.tagline}</p>
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
                  className="text-[13px] text-[#7A7A78] transition hover:text-[#1A1A1A]"
                >
                  {l.label}
                </a>
              ))}
            </div>
          ))}
        </div>
      </div>
      <div className="mx-auto flex w-full max-w-[var(--page-max)] flex-col items-start justify-between gap-4 border-t border-[#0000000F] pt-6 sm:flex-row sm:items-center">
        <p className="text-xs text-[#B0B0AE]">{footer.copyright}</p>
        <div className="flex gap-5">
          {footer.legal.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="text-xs text-[#B0B0AE] transition hover:text-[#1A1A1A]"
            >
              {l.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
