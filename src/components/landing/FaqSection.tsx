import { faq } from "../../content/landing";

export function FaqSection() {
  return (
    <section
      id="faq"
      className="mx-auto flex w-full max-w-[var(--page-max)] flex-col items-center px-[var(--page-gutter)] py-24 pt-20"
      aria-labelledby="faq-heading"
    >
      <div className="mb-14 flex w-full max-w-[var(--content-width)] flex-col items-center gap-2 text-center">
        <p className="text-[13px] font-medium uppercase tracking-[0.08em] text-[#B0B0AE]">
          {faq.eyebrow}
        </p>
        <h2 id="faq-heading" className="flex flex-col items-center">
          <span className="text-[clamp(1.75rem,4vw,2.875rem)] font-bold leading-tight tracking-[-0.04em] text-[#1A1A1A] lg:text-[46px] lg:leading-[1.2]">
            {faq.title[0]}
          </span>
          <span className="font-['Instrument_Serif',ui-serif,Georgia,serif] text-[clamp(2rem,4.5vw,3.125rem)] italic tracking-[-0.02em] text-[#1A1A1A] lg:text-[50px] lg:leading-[1.2]">
            {faq.title[1]}
          </span>
        </h2>
      </div>

      <div className="flex w-full max-w-[var(--content-width)] flex-col">
        {faq.items.map((item, i) => (
          <details
            key={i}
            className="faq-card group paper-texture paper-texture-light overflow-hidden border border-[#0000000F] border-t-0 first:border-t bg-white"
          >
            <summary className="flex cursor-pointer list-none items-center gap-5 p-6 text-left select-none lg:p-8 [&::-webkit-details-marker]:hidden">
              <span className="flex size-10 shrink-0 items-center justify-center text-[15px] font-bold bg-[#F5F5F4] text-[#B0B0AE] transition-colors duration-200 group-open:bg-[#EC784F] group-open:text-white">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="flex-1 text-[15px] font-semibold leading-normal tracking-[-0.01em] text-[#1A1A1A] lg:text-[17px]">
                {item.question}
              </span>
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                className="shrink-0 text-[#B0B0AE] transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-open:rotate-180 group-open:text-[#EC784F]"
              >
                <path
                  d="M3 6L8 11L13 6"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </summary>
            <div className="pb-6 pr-6 pl-[calc(2.5rem+1.25rem+1.5rem)] lg:pb-8 lg:pr-8 lg:pl-[calc(2.5rem+1.25rem+2rem)]">
              <p className="text-[13px] leading-relaxed text-[#7A7A78] lg:text-[15px] lg:leading-relaxed">
                {item.answer}
              </p>
            </div>
          </details>
        ))}
      </div>
    </section>
  );
}
