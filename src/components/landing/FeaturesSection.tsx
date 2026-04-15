import { features } from "../../content/landing";

const indexLabels = ["01", "02", "03"] as const;

export function FeaturesSection() {
  return (
    <section
      id="work"
      className="flex flex-col items-center"
      aria-labelledby="features-heading"
    >
      <div className="w-full max-w-[var(--content-width)] py-16 lg:py-20">
        <div className="overflow-hidden border border-[#0000000D] bg-[#FAFAF8] shadow-[0_1px_0_rgb(0_0_0/0.04)]">
          <div className="relative w-full overflow-hidden">
            <img
              src="/images/painting-reading-lady.jpeg"
              alt="Classical garden scene with a statue reading a book, a rose-covered stone arch, lily pond, and butterflies in sunlight."
              className="h-[min(52vh,28rem)] w-full object-cover sm:h-[min(48vh,26rem)] lg:h-[min(55vh,32rem)]"
              width={1440}
              height={720}
              decoding="async"
            />
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(to top, rgba(26,26,26,0.88) 0%, rgba(26,26,26,0.28) 45%, transparent 72%)",
              }}
            />
            <div className="absolute inset-x-0 bottom-0 flex flex-col gap-2 px-6 pb-10 pt-20 sm:px-10 sm:pb-12 lg:px-12">
              <p className="text-[11px] font-medium uppercase tracking-[0.14em] text-white/55">
                {features.eyebrow}
              </p>
              <h2 id="features-heading" className="flex w-full flex-col gap-0.5">
                <span className="text-[clamp(1.75rem,4vw,2.75rem)] font-bold leading-[1.1] tracking-[-0.04em] text-white lg:text-[2.75rem]">
                  {features.titleBold}
                </span>
                <span className="font-['Instrument_Serif',ui-serif,Georgia,serif] text-[clamp(2rem,4.5vw,3.125rem)] italic leading-[1.08] tracking-[-0.02em] text-white lg:text-[3rem]">
                  {features.titleItalic}
                </span>
              </h2>
            </div>
          </div>

          <ul className="grid grid-cols-1 md:grid-cols-3">
            {features.items.map((item, i) => (
              <li key={item.title} className="features-card-separator min-w-0">
                <article className="paper-texture paper-texture-dark panel-dark-depth group relative flex h-full flex-col overflow-hidden">
                  {/* Hover wash — single high-impact moment */}
                  <div
                    className="pointer-events-none absolute -right-1/4 -top-1/2 z-[2] h-[140%] w-[70%] rounded-full opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100"
                    style={{
                      background:
                        "radial-gradient(closest-side, oklab(69.8% 0.118 0.099 / 18%) 0%, transparent 70%)",
                    }}
                  />
                  <div
                    className="pointer-events-none absolute inset-0 z-[2] bg-white/[0.045] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                    aria-hidden
                  />
                  <div className="relative z-[3] px-8 py-10 sm:px-10 sm:py-12 lg:px-11 lg:py-14">
                    <div className="flex items-start gap-5">
                      <span
                        className="shrink-0 font-['Instrument_Serif',ui-serif,Georgia,serif] text-[2rem] leading-none italic tracking-[-0.03em] text-[#EC784F]"
                        aria-hidden
                      >
                        {indexLabels[i]}
                      </span>
                      <div className="min-w-0 flex-1 pt-1">
                        <h3 className="text-[17px] font-semibold leading-snug tracking-[-0.03em] text-[#FFFFFFEE] lg:text-lg">
                          {item.title}
                        </h3>
                      </div>
                    </div>
                  </div>
                </article>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
