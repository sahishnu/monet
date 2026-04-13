import { cta } from "../../content/landing";

export function CtaBanner() {
  return (
    <section
      id="contact"
      className="flex justify-center px-[var(--page-gutter)] py-12"
      aria-labelledby="cta-heading"
    >
      <div className="relative flex min-h-[120px] w-full max-w-[var(--content-width)] flex-col items-center justify-center gap-7 overflow-hidden bg-[#1A1A1A] p-12 lg:p-24">
        <div
          className="pointer-events-none absolute -right-12 -top-12 h-[13.75rem] w-[13.75rem] rounded-full"
          style={{
            backgroundImage:
              "radial-gradient(circle farthest-corner at 50% 50% in oklab, oklab(77.1% 0.066 -0.082 / 10%) 0%, oklab(0% 0 0 / 0%) 70%)",
          }}
          aria-hidden
        />
        <div
          className="pointer-events-none absolute -bottom-8 -left-8 h-44 w-44 rounded-full"
          style={{
            backgroundImage:
              "radial-gradient(circle farthest-corner at 50% 50% in oklab, oklab(74.7% -0.042 -0.062 / 8%) 0%, oklab(0% 0 0 / 0%) 70%)",
          }}
          aria-hidden
        />

        <h2 id="cta-heading" className="relative flex flex-col items-center text-center">
          <span className="text-[clamp(1.5rem,3.5vw,2.5rem)] font-bold leading-tight tracking-[-0.04em] text-white lg:text-[40px] lg:leading-[3rem]">
            {cta.line1}
          </span>
          <span className="font-['Instrument_Serif',ui-serif,Georgia,serif] text-[clamp(2rem,4vw,2.75rem)] italic tracking-[-0.02em] text-[#EC784F] lg:text-[44px] lg:leading-[3.25rem]">
            {cta.line2Italic}
          </span>
        </h2>
        <p className="relative max-w-[26.25rem] text-center text-base leading-relaxed text-[#FFFFFF73]">
          {cta.sub}
        </p>
        <div className="relative flex w-full max-w-lg flex-col items-stretch gap-3 sm:max-w-none sm:flex-row sm:justify-center">
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
