import { cta } from "../../content/landing";
import { SectionGridEdgeLines } from "./SectionGridEdgeLines";

export function CtaBanner() {
  return (
    <section
      id="contact"
      className="relative flex w-full min-w-0 justify-center self-stretch bg-[#1A1A1A] py-8 lg:py-10"
      aria-labelledby="cta-heading"
    >
      <SectionGridEdgeLines />
      <div className="relative z-10 flex w-full max-w-[var(--content-width)] flex-col items-center justify-center gap-6 px-[var(--page-gutter)] py-6 lg:px-24 lg:py-10">
        <h2 id="cta-heading" className="flex flex-col items-center text-center">
          <span className="text-[clamp(1.5rem,3.5vw,2.5rem)] font-bold leading-tight tracking-[-0.04em] text-white lg:text-[40px] lg:leading-[3rem]">
            {cta.line1}
          </span>
          <span className="font-['Instrument_Serif',ui-serif,Georgia,serif] text-[clamp(2rem,4vw,2.75rem)] italic tracking-[-0.02em] text-[#EC784F] lg:text-[44px] lg:leading-[3.25rem]">
            {cta.line2Italic}
          </span>
        </h2>
        <p className="max-w-[26.25rem] text-center text-base leading-relaxed text-[#FFFFFF73]">
          {cta.sub}
        </p>
        <div className="flex w-full max-w-lg flex-col items-stretch gap-3 sm:max-w-none sm:flex-row sm:justify-center">
          <a
            href={cta.primary.href}
            className="flex min-h-12 items-center justify-center bg-[#EC784F] px-12 py-3.5 text-[15px] font-semibold text-white transition hover:opacity-90"
          >
            {cta.primary.label}
          </a>
          <a
            href={cta.secondary.href}
            className="flex min-h-12 items-center justify-center border border-[#FFFFFF1F] px-12 py-3.5 text-[15px] font-medium text-[#FFFFFF99] transition hover:bg-white/5"
          >
            {cta.secondary.label}
          </a>
        </div>
      </div>
    </section>
  );
}
