import { pricing } from "../../content/landing";
import { SectionGrid } from "./SectionGrid";

export function PricingSection() {
  return (
    <section
      id="pricing"
      className="flex min-h-[192px] flex-col items-center gap-14 py-24 pt-20"
      aria-labelledby="pricing-heading"
    >
      <div className="flex flex-col items-center gap-2">
        <p className="text-[13px] font-medium uppercase tracking-[0.08em] text-[#B0B0AE]">
          {pricing.eyebrow}
        </p>
        <h2 id="pricing-heading" className="flex flex-col items-center text-center">
          <span className="text-[clamp(1.75rem,4vw,2.875rem)] font-bold leading-tight tracking-[-0.04em] text-[#1A1A1A] lg:text-[46px] lg:leading-[1.2]">
            {pricing.title[0]}
          </span>
          <span className="font-['Instrument_Serif',ui-serif,Georgia,serif] text-[clamp(2rem,4.5vw,3.125rem)] italic tracking-[-0.02em] text-[#1A1A1A] lg:text-[50px] lg:leading-[1.2]">
            {pricing.title[1]}
          </span>
        </h2>
      </div>

      <SectionGrid className="w-full max-w-[var(--content-width)]">
        {pricing.tiers.map((tier) => {
          if (tier.variant === "featured") {
            return (
              <div
                key={tier.id}
                className="relative flex flex-col gap-6 bg-[#1A1A1A] p-8 md:col-span-1 lg:col-span-4"
              >
                <div className="absolute -top-2.5 left-1/2 z-10 -translate-x-1/2 bg-[#EC784F] px-3.5 py-1.5 uppercase">
                  <span className="whitespace-nowrap text-[10px] font-bold leading-none tracking-[0.06em] text-white">
                    {tier.badge}
                  </span>
                </div>
                <div className="flex flex-col gap-1.5">
                  <span className="text-xs font-semibold uppercase tracking-[0.06em] text-[#EC784F]">
                    {tier.name}
                  </span>
                  <div className="flex items-baseline gap-1">
                    <span className="text-[40px] font-bold leading-[3rem] tracking-[-0.03em] text-white">
                      {tier.price}
                    </span>
                    {tier.suffix && (
                      <span className="text-sm text-white/35">{tier.suffix}</span>
                    )}
                  </div>
                </div>
                <div className="h-px w-full shrink-0 bg-white/10" />
                <ul className="flex flex-col gap-2.5">
                  {tier.features.map((f) => (
                    <li
                      key={f}
                      className="text-[13px] leading-none text-[#FFFFFF8C]"
                    >
                      {f}
                    </li>
                  ))}
                </ul>
                <a
                  href={tier.cta.href}
                  className="flex min-h-12 items-center justify-center bg-[#EC784F] p-3 text-sm font-semibold text-white transition hover:opacity-90"
                >
                  {tier.cta.label}
                </a>
              </div>
            );
          }

          return (
            <div
              key={tier.id}
              className="flex flex-col gap-6 border border-[#0000000F] bg-white p-8 md:col-span-1 lg:col-span-4"
            >
              <div className="flex flex-col gap-1.5">
                <span className="text-xs font-semibold uppercase tracking-[0.06em] text-[#B0B0AE]">
                  {tier.name}
                </span>
                <div className="flex items-baseline gap-1">
                  <span className="text-[40px] font-bold leading-[3rem] tracking-[-0.03em] text-[#1A1A1A]">
                    {tier.price}
                  </span>
                  {tier.suffix && (
                    <span className="text-sm text-[#B0B0AE]">{tier.suffix}</span>
                  )}
                </div>
              </div>
              <div className="h-px w-full shrink-0 bg-[#0000000F]" />
              <ul className="flex flex-col gap-2.5">
                {tier.features.map((f) => (
                  <li key={f} className="text-[13px] leading-none text-[#7A7A78]">
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href={tier.cta.href}
                className="flex min-h-12 items-center justify-center border border-[#0000001A] p-3 text-sm font-semibold text-[#1A1A1A] transition hover:bg-black/5"
              >
                {tier.cta.label}
              </a>
            </div>
          );
        })}
      </SectionGrid>
    </section>
  );
}
