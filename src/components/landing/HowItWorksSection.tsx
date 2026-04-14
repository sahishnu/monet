import { howItWorks } from "../../content/landing";
import { SectionGrid } from "./SectionGrid";

const stepGrad =
  "linear-gradient(135deg, oklab(69.8% 0.118 0.099 / 12%) 0%, oklab(69.8% 0.118 0.099 / 6%) 100%)";

export function HowItWorksSection() {
  return (
    <section
      id="how-it-works"
      className="flex min-h-[168px] flex-col items-center gap-14 py-24"
      aria-labelledby="how-heading"
    >
      <div className="flex flex-col items-center gap-2">
        <p className="text-[13px] font-medium uppercase tracking-[0.08em] text-[#B0B0AE]">
          {howItWorks.eyebrow}
        </p>
        <h2 id="how-heading" className="flex flex-col items-center text-center">
          <span className="text-[clamp(1.75rem,4vw,2.875rem)] font-bold leading-tight tracking-[-0.04em] text-[#1A1A1A] lg:text-[46px] lg:leading-[1.2]">
            {howItWorks.title[0]}
          </span>
          <span className="font-['Instrument_Serif',ui-serif,Georgia,serif] text-[clamp(2rem,4.5vw,3.125rem)] italic tracking-[-0.02em] text-[#1A1A1A] lg:text-[50px] lg:leading-[1.2]">
            {howItWorks.title[1]}
          </span>
        </h2>
      </div>

      <SectionGrid className="w-full max-w-[var(--content-width)]">
        {howItWorks.steps.map((step) => (
          <div
            key={step.title}
            className="flex flex-col gap-4 border border-[#0000000F] bg-white p-8 md:col-span-1 lg:col-span-4"
          >
            <div
              className="flex size-10 shrink-0 items-center justify-center"
              style={{ backgroundImage: stepGrad }}
            >
              <span className="font-['Instrument_Serif',ui-serif,Georgia,serif] text-xl italic text-[#EC784F]">
                {step.n}
              </span>
            </div>
            <h3 className="text-lg font-semibold tracking-[-0.02em] text-[#1A1A1A]">
              {step.title}
            </h3>
            <p className="text-sm leading-relaxed text-[#7A7A78]">{step.body}</p>
          </div>
        ))}
      </SectionGrid>
    </section>
  );
}
