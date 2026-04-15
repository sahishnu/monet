import { pricing } from "../../content/landing";

export function PricingSection() {
  const [standard, oneTime] = pricing.tiers;
  return (
    <section
      id="pricing"
      className="flex flex-col items-center gap-14 py-24 pt-20"
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

      <div className="flex w-full max-w-[var(--content-width)] flex-col gap-0">
        <div className="grid grid-cols-1 gap-0 md:grid-cols-2">
          {/* Standard — featured dark card */}
          <div className="paper-texture paper-texture-dark panel-dark-depth panel-dark-depth--elevated relative flex flex-col gap-7 p-10 lg:p-12">
            <div className="absolute -top-3 left-10 z-10 bg-[#EC784F] px-4 py-1.5 uppercase lg:left-12">
              <span className="whitespace-nowrap text-[10px] font-bold leading-none tracking-[0.06em] text-white">
                {standard.badge}
              </span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-xs font-semibold uppercase tracking-[0.06em] text-[#EC784F]">
                {standard.name}
              </span>
              <div className="flex items-baseline gap-1.5">
                <span className="text-[52px] font-bold leading-[1.1] tracking-[-0.04em] text-white lg:text-[60px]">
                  {standard.price}
                </span>
                {standard.suffix && (
                  <span className="text-base text-white/30">{standard.suffix}</span>
                )}
              </div>
            </div>
            <div className="h-px w-full bg-white/10" />
            <ul className="flex flex-1 flex-col gap-3">
              {standard.features.map((f) => (
                <li
                  key={f}
                  className="flex items-start gap-2.5 text-[13px] leading-5 text-white/55"
                >
                  <span
                    aria-hidden
                    className="flex h-[1.25rem] w-4 shrink-0 items-center justify-center text-[11px] leading-none text-[#EC784F]"
                  >
                    ✦
                  </span>
                  <span className="min-w-0">{f}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* One-Time Build — light card */}
          <div className="paper-texture paper-texture-light border border-[#0000000F] bg-white p-10 lg:p-12">
            <div className="relative z-10 flex flex-col gap-7">
              <div className="flex flex-col gap-1">
                <span className="text-xs font-semibold uppercase tracking-[0.06em] text-[#B0B0AE]">
                  {oneTime.name}
                </span>
                <div className="flex items-baseline gap-1.5">
                  <span className="text-[52px] font-bold leading-[1.1] tracking-[-0.04em] text-[#1A1A1A] lg:text-[60px]">
                    {oneTime.price}
                  </span>
                </div>
              </div>
              <div className="h-px w-full bg-[#0000000F]" />
              <ul className="flex flex-1 flex-col gap-3">
                {oneTime.features.map((f) => (
                  <li
                    key={f}
                    className="flex items-start gap-2.5 text-[13px] leading-5 text-[#7A7A78]"
                  >
                    <span
                      aria-hidden
                      className="flex h-[1.25rem] w-4 shrink-0 items-center justify-center text-[11px] leading-none text-[#B0B0AE]"
                    >
                      ✦
                    </span>
                    <span className="min-w-0">{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Custom — full-width CTA banner */}
        <div className="paper-texture paper-texture-light relative flex flex-col gap-5 overflow-hidden border border-t-0 border-[#0000000F] p-10 lg:p-12">
          <div
            className="absolute inset-0 z-0 bg-[#EDEAE4] bg-cover bg-[center_60%]"
            style={{ backgroundImage: "url(/images/painting-gazebo-med.jpeg)" }}
            aria-hidden
          />
          <div
            className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-br from-[#FAFAF9]/94 via-[#FAFAF8]/88 to-[#F5F3EF]/82"
            aria-hidden
          />
          <div className="relative z-10 flex flex-col gap-5">
            <div className="flex flex-col gap-1">
              <span className="text-xs font-semibold uppercase tracking-[0.06em] text-[#EC784F]">
                {pricing.custom.name}
              </span>
              <p className="text-[22px] font-bold leading-tight tracking-[-0.02em] text-[#1A1A1A] lg:text-[28px]">
                {pricing.custom.headline}
              </p>
            </div>
            <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
              <ul className="grid grid-cols-1 gap-x-8 gap-y-3.5 md:grid-cols-2 md:gap-y-2">
                {pricing.custom.features.map((f) => (
                  <li
                    key={f}
                    className="flex items-start gap-2.5 text-[13px] leading-5 text-[#7A7A78]"
                  >
                    <span
                      aria-hidden
                      className="flex h-[1.25rem] w-4 shrink-0 items-center justify-center text-[11px] leading-none text-[#EC784F]"
                    >
                      ✦
                    </span>
                    <span className="min-w-0">{f}</span>
                  </li>
                ))}
              </ul>
              <a
                href={pricing.custom.cta.href}
                className="shrink-0 bg-[#1A1A1A] px-8 py-3.5 text-[13px] font-semibold uppercase tracking-[0.06em] text-white transition-colors hover:bg-[#333]"
              >
                {pricing.custom.cta.label}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
