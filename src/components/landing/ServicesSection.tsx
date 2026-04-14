import { services } from "../../content/landing";
import { ServiceIcon } from "./ServiceIcon";

const iconGrad =
  "linear-gradient(135deg, oklab(69.8% 0.118 0.099 / 10%) 0%, oklab(69.8% 0.118 0.099 / 4%) 100%)";

export function ServicesSection() {
  return (
    <section
      id="services"
      className="flex flex-col items-center gap-14 py-24"
      aria-labelledby="services-heading"
    >
      {/* Header */}
      <div className="flex max-w-xl flex-col items-center gap-3 text-center">
        <p className="text-[13px] font-medium uppercase tracking-[0.08em] text-[#B0B0AE]">
          {services.eyebrow}
        </p>
        <h2 id="services-heading" className="flex flex-col items-center">
          <span className="text-[clamp(1.75rem,4vw,2.875rem)] font-bold leading-tight tracking-[-0.04em] text-[#1A1A1A] lg:text-[46px] lg:leading-[1.2]">
            {services.title[0]}
          </span>
          <span className="font-['Instrument_Serif',ui-serif,Georgia,serif] text-[clamp(2rem,4.5vw,3.125rem)] italic tracking-[-0.02em] text-[#1A1A1A] lg:text-[50px] lg:leading-[1.2]">
            {services.titleAccent}
          </span>
        </h2>
        <p className="mt-1 max-w-md text-[15px] leading-relaxed text-[#7A7A78]">
          {services.sub}
        </p>
      </div>

      {/* Services grid — 3 top + 2 bottom centered */}
      <div className="flex w-full max-w-[var(--content-width)] flex-col gap-6">
        {/* Top row: 3 cards */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {services.items.slice(0, 3).map((item) => (
            <div
              key={item.title}
              className="group relative flex flex-col gap-4 border border-[#0000000F] bg-white p-8 transition-all duration-300 hover:border-[#0000001A] hover:shadow-[0_2px_24px_-4px_rgba(0,0,0,0.06)]"
            >
              <div
                className="flex size-10 shrink-0 items-center justify-center text-[#EC784F] transition-transform duration-300 group-hover:scale-110"
                style={{ backgroundImage: iconGrad }}
              >
                <ServiceIcon name={item.icon} />
              </div>
              <h3 className="text-[17px] font-semibold tracking-[-0.02em] text-[#1A1A1A]">
                {item.title}
              </h3>
              <p className="text-[14px] leading-relaxed text-[#7A7A78]">
                {item.body}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom row: 2 cards centered */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:mx-auto md:max-w-[calc(66.666%+0.75rem)]">
          {services.items.slice(3).map((item) => (
            <div
              key={item.title}
              className="group relative flex flex-col gap-4 border border-[#0000000F] bg-white p-8 transition-all duration-300 hover:border-[#0000001A] hover:shadow-[0_2px_24px_-4px_rgba(0,0,0,0.06)]"
            >
              <div
                className="flex size-10 shrink-0 items-center justify-center text-[#EC784F] transition-transform duration-300 group-hover:scale-110"
                style={{ backgroundImage: iconGrad }}
              >
                <ServiceIcon name={item.icon} />
              </div>
              <h3 className="text-[17px] font-semibold tracking-[-0.02em] text-[#1A1A1A]">
                {item.title}
              </h3>
              <p className="text-[14px] leading-relaxed text-[#7A7A78]">
                {item.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
