import { hero } from "../../content/landing";

export function Hero() {
  return (
    <section
      className="flex min-h-[168px] flex-col items-center gap-7 py-24"
      aria-labelledby="hero-heading"
    >
      <p className="text-[13px] font-medium uppercase tracking-[0.08em] text-[#B0B0AE]">
        {hero.eyebrow}
      </p>
      <div className="flex w-full flex-col items-center">
        <h1
          id="hero-heading"
          className="text-center text-[clamp(2rem,6vw,4.25rem)] font-bold leading-[1.1] tracking-[-0.04em] text-[#1A1A1A] lg:text-[68px] lg:leading-[1.12]"
        >
          {hero.lines.map((line) => (
            <span key={line} className="block">
              {line}
            </span>
          ))}
          <span className="mt-1 block font-['Instrument_Serif',ui-serif,Georgia,serif] text-[clamp(2.5rem,7vw,4.75rem)] font-normal italic tracking-[-0.03em] lg:text-[76px] lg:leading-[1.15]">
            {hero.accent}
          </span>
        </h1>
      </div>
      <p className="max-w-[31.25rem] text-center text-[17px] leading-7 text-[#7A7A78]">
        {hero.sub}
      </p>
      <div className="flex w-full max-w-md flex-col items-stretch gap-3 pt-2 sm:max-w-none sm:flex-row sm:justify-center">
        <a
          href={hero.primaryCta.href}
          className="flex min-h-12 items-center justify-center bg-[#1A1A1A] px-12 py-3.5 text-[15px] font-semibold text-[#FAFAF8] transition hover:opacity-90"
        >
          {hero.primaryCta.label}
        </a>
        <a
          href={hero.secondaryCta.href}
          className="flex min-h-12 items-center justify-center border border-solid border-[#0000001F] px-12 py-3.5 text-[15px] font-medium text-[#1A1A1A] transition hover:bg-black/5"
        >
          {hero.secondaryCta.label}
        </a>
      </div>
    </section>
  );
}
