import { hero } from "../../content/landing";
import { LogoMark } from "./LogoMark";
import { BrandWordmark } from "./BrandWordmark";

export function Hero() {
  return (
    <section
      className="flex w-full min-w-0 flex-col items-stretch"
      aria-labelledby="hero-heading"
    >
      <div className="flex w-full flex-col lg:flex-row lg:items-stretch lg:gap-0">
        {/* Left column — logo + copy */}
        <div className="flex flex-col justify-between gap-6 py-12 lg:gap-12 lg:w-1/2 lg:py-24 lg:pr-16">
          <a href="#" className="inline-flex items-center overflow-visible self-start">
            <LogoMark className="relative z-0" />
            <BrandWordmark
              variant="header"
              className="relative z-10 -ml-4 min-w-0 pl-1"
            />
          </a>

          <div className="flex flex-col gap-6">
            <h1
              id="hero-heading"
              className="text-left text-[clamp(2rem,4.5vw,3.25rem)] font-bold leading-[1.1] tracking-[-0.04em] text-[#1A1A1A] lg:text-[52px] lg:leading-[1.1]"
            >
              {hero.lines.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
              <span className="mt-1 block font-['Instrument_Serif',ui-serif,Georgia,serif] text-[clamp(2.25rem,5.5vw,3.75rem)] font-normal italic tracking-[-0.03em] lg:text-[58px] lg:leading-[1.12]">
                {hero.accent}
              </span>
            </h1>
            <p className="max-w-[28rem] text-[17px] leading-7 text-[#7A7A78]">
              {hero.sub}
            </p>
            <div className="flex flex-col items-stretch gap-3 pt-2 sm:flex-row">
              <a
                href={hero.primaryCta.href}
                className="flex min-h-12 items-center justify-center bg-[#1A1A1A] px-10 py-3.5 text-[15px] font-semibold text-[#FAFAF8] transition hover:opacity-90"
              >
                {hero.primaryCta.label}
              </a>
              <a
                href={hero.secondaryCta.href}
                className="flex min-h-12 items-center justify-center border border-[#0000001F] px-10 py-3.5 text-[15px] font-medium text-[#1A1A1A] transition hover:bg-black/5"
              >
                {hero.secondaryCta.label}
              </a>
            </div>
          </div>
        </div>

        {/* Right column — image, breaks out of PageShell gutter on the right */}
        <div className="-mx-[var(--page-gutter)] md:mx-0 lg:w-1/2 lg:-mr-[var(--page-gutter)]">
          <div className="aspect-[4/3] w-full overflow-hidden bg-[#E4E8E3] lg:aspect-auto lg:h-full">
            <img
              src="/images/painting-lion.jpeg"
              alt="Classical garden scene with a statue reading a book, a rose-covered stone arch, lily pond, and butterflies in sunlight."
              width={960}
              height={720}
              className="h-full w-full object-cover"
              decoding="async"
              fetchPriority="high"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
