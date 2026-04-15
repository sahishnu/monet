import { privacy } from "../../content/privacy";
import { PageShell } from "./PageShell";
import { BrandWordmark } from "./BrandWordmark";
import { Footer } from "./Footer";
import { LogoMark } from "./LogoMark";

export function PrivacyPage() {
  return (
    <div className="[font-synthesis:none] flex min-h-screen flex-col items-center overflow-x-hidden bg-transparent text-xs leading-4 antialiased">
      <main className="flex w-full flex-col items-stretch">
        <PageShell as="div" className="pt-12 pb-8 lg:pt-16 lg:pb-12">
          <div className="flex w-full max-w-[var(--content-width)] flex-col gap-10">
            <a href="/" className="inline-flex items-center overflow-visible self-start">
              <LogoMark className="relative z-0" />
              <BrandWordmark
                variant="header"
                className="relative z-10 -ml-4 min-w-0 pl-1"
              />
            </a>

            <header className="flex flex-col gap-3">
              <p className="text-[13px] font-medium uppercase tracking-[0.08em] text-[#B0B0AE]">
                {privacy.eyebrow}
              </p>
              <h1 className="flex flex-col">
                <span className="text-[clamp(1.75rem,4vw,2.875rem)] font-bold leading-tight tracking-[-0.04em] text-[#1A1A1A] lg:text-[46px] lg:leading-[1.2]">
                  {privacy.title[0]}
                </span>
                <span className="font-['Instrument_Serif',ui-serif,Georgia,serif] text-[clamp(2rem,4.5vw,3.125rem)] italic tracking-[-0.02em] text-[#1A1A1A] lg:text-[50px] lg:leading-[1.2]">
                  {privacy.title[1]}
                </span>
              </h1>
              <p className="text-[13px] text-[#B0B0AE]">{privacy.lastUpdated}</p>
            </header>
          </div>
        </PageShell>

        <PageShell as="div" className="pb-24 lg:pb-32">
          <article className="paper-texture paper-texture-light w-full max-w-[var(--content-width)] border border-[#0000000F] bg-white">
            <div className="border-b border-[#0000000F] px-6 py-8 lg:px-10 lg:py-10">
              <p className="text-[15px] leading-relaxed text-[#7A7A78] lg:text-[17px] lg:leading-relaxed">
                {privacy.intro}
              </p>
            </div>

            <div className="flex flex-col">
              {privacy.sections.map((section, i) => (
                <section
                  key={section.id}
                  id={section.id}
                  className="border-b border-[#0000000F] px-6 py-8 last:border-b-0 lg:px-10 lg:py-10"
                  aria-labelledby={`${section.id}-heading`}
                >
                  <h2
                    id={`${section.id}-heading`}
                    className="flex items-start gap-4 text-[17px] font-semibold tracking-[-0.01em] text-[#1A1A1A] lg:gap-5 lg:text-[19px]"
                  >
                    <span className="flex size-8 shrink-0 items-center justify-center bg-[#F5F5F4] text-[12px] font-bold text-[#B0B0AE] lg:size-9 lg:text-[13px]">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="min-w-0 flex-1 pt-0.5 leading-snug">{section.title}</span>
                  </h2>
                  <div className="mt-4 flex flex-col gap-4 pl-[calc(2rem+1rem)] lg:pl-[calc(2.25rem+1.25rem)]">
                    {section.paragraphs.map((p, pi) => (
                      <p
                        key={pi}
                        className="text-[15px] leading-relaxed text-[#7A7A78] lg:text-[17px] lg:leading-relaxed"
                      >
                        {p}
                      </p>
                    ))}
                  </div>
                  {section.id === "contact" && (
                    <p className="mt-6 pl-[calc(2rem+1rem)] text-[15px] font-medium text-[#1A1A1A] lg:pl-[calc(2.25rem+1.25rem)] lg:text-[17px]">
                      <a
                        href={`mailto:${privacy.contactEmail}`}
                        className="text-[#EC784F] underline decoration-[#EC784F]/35 underline-offset-[3px] transition hover:decoration-[#EC784F]"
                      >
                        {privacy.contactEmail}
                      </a>
                    </p>
                  )}
                </section>
              ))}
            </div>
          </article>
        </PageShell>

        <Footer />
      </main>
    </div>
  );
}
