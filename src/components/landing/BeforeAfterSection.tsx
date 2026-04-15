import { beforeAfter } from "../../content/landing";

export function BeforeAfterSection() {
  return (
    <section className="flex flex-col items-center py-24" aria-labelledby="ba-heading">
      {/* Top heading area */}
      <div className="mb-14 flex w-full max-w-[var(--content-width)] flex-col gap-3">
        <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#B0B0AE]">
          Why Monet
        </p>
        <h2
          id="ba-heading"
          className="text-[clamp(1.75rem,4vw,2.875rem)] font-bold leading-tight tracking-[-0.04em] text-[#1A1A1A] lg:text-[46px] lg:leading-[1.2]"
        >
          From frustration to{" "}
          <span className="font-['Instrument_Serif',ui-serif,Georgia,serif] italic tracking-[-0.02em]">
            confidence.
          </span>
        </h2>
        <p className="max-w-[32rem] text-[17px] leading-7 text-[#7A7A78]">
          {beforeAfter.subtitle}
        </p>
      </div>

      {/* Full-bleed split */}
      <div className="flex w-full max-w-[var(--content-width)] flex-col md:flex-row">
        {/* Before side */}
        <div className="paper-texture paper-texture-dark relative flex flex-1 flex-col gap-0 overflow-hidden bg-[#1A1A1A] pt-16 lg:pt-20">
          <h3 className="pointer-events-none absolute -left-3 -top-4 select-none text-[clamp(4rem,8vw,6rem)] font-black uppercase leading-none tracking-[-0.06em] text-[#FFFFFF18] lg:-left-4 lg:-top-5">
            Before
          </h3>
          {beforeAfter.before.items.map((item, i) => (
            <div
              key={item}
              className="groove-separator-row flex items-start gap-6 px-10 py-6 transition-colors hover:bg-[#FFFFFF0A] lg:px-14"
            >
              <span className="font-['Instrument_Serif',ui-serif,Georgia,serif] text-[32px] leading-none italic text-[#FFFFFF30]">
                {i + 1}
              </span>
              <p className="pt-1.5 text-[15px] leading-relaxed text-[#FFFFFFCC]">{item}</p>
            </div>
          ))}
        </div>

        {/* Centre accent strip */}
        <div className="hidden w-1 md:block" style={{
          background: "linear-gradient(180deg, #1A1A1A 0%, #EC784F 50%, #EC784F 100%)"
        }} />

        {/* After side */}
        <div className="paper-texture relative flex flex-1 flex-col gap-0 overflow-hidden bg-[#EC784F] pt-16 lg:pt-20">
          <h3 className="pointer-events-none absolute -left-3 -top-4 select-none text-[clamp(4rem,8vw,6rem)] font-black uppercase leading-none tracking-[-0.06em] text-white/[0.18] lg:-left-4 lg:-top-5">
            After
          </h3>
          {beforeAfter.after.items.map((item, i) => (
            <div
              key={item}
              className="groove-separator-row groove-separator-row--warm flex items-start gap-6 px-10 py-6 transition-colors hover:bg-white/5 lg:px-14"
            >
              <span className="font-['Instrument_Serif',ui-serif,Georgia,serif] text-[32px] leading-none italic text-white/25">
                {i + 1}
              </span>
              <p className="pt-1.5 text-[15px] font-medium leading-relaxed text-white">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
