import { features } from "../../content/landing";
import { FeatureIcon } from "./FeatureIcon";
import { SectionGrid } from "./SectionGrid";

const iconBg =
  "linear-gradient(135deg, oklab(69.8% 0.118 0.099 / 10%) 0%, oklab(69.8% 0.118 0.099 / 4%) 100%)";

export function FeaturesSection() {
  return (
    <section
      id="work"
      className="flex min-h-[192px] flex-col items-center gap-14 py-24 pt-10"
      aria-labelledby="features-heading"
    >
      <div className="flex flex-col items-center gap-2">
        <p className="text-[13px] font-medium uppercase tracking-[0.08em] text-[#B0B0AE]">
          {features.eyebrow}
        </p>
        <h2 id="features-heading" className="flex flex-col items-center text-center">
          <span className="font-['Instrument_Serif',ui-serif,Georgia,serif] text-[clamp(2rem,4.5vw,3.125rem)] italic tracking-[-0.02em] text-[#1A1A1A] lg:text-[50px] lg:leading-[1.2]">
            {features.titleItalic}
          </span>
          <span className="text-[clamp(1.75rem,4vw,2.875rem)] font-bold leading-tight tracking-[-0.04em] text-[#1A1A1A] lg:text-[46px] lg:leading-[1.2]">
            {features.titleBold}
          </span>
        </h2>
      </div>

      <SectionGrid className="w-full max-w-[var(--content-width)]">
        {features.items.map((item) => (
          <div
            key={item.title}
            className="flex flex-col gap-3 border border-[#0000000F] bg-white p-7 md:col-span-1 lg:col-span-4"
          >
            <div
              className="flex size-8 shrink-0 items-center justify-center"
              style={{ backgroundImage: iconBg }}
            >
              <FeatureIcon name={item.icon} />
            </div>
            <h3 className="text-[15px] font-semibold leading-normal text-[#1A1A1A]">
              {item.title}
            </h3>
            <p className="text-[13px] leading-relaxed text-[#7A7A78]">{item.body}</p>
          </div>
        ))}
      </SectionGrid>
    </section>
  );
}
