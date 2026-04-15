import { PageShell } from "./PageShell";
import { Hero } from "./Hero";
import { BeforeAfterSection } from "./BeforeAfterSection";
import { FeaturesSection } from "./FeaturesSection";
import { PricingSection } from "./PricingSection";
import { FaqSection } from "./FaqSection";
import { CtaBanner } from "./CtaBanner";
import { Footer } from "./Footer";

export function LandingPage() {
  return (
    <div className="[font-synthesis:none] flex min-h-screen flex-col items-center overflow-x-hidden bg-transparent text-xs leading-4 antialiased">
      <main className="flex w-full flex-col items-stretch">
        <PageShell as="div">
          <Hero />
        </PageShell>
        <PageShell as="div">
          <BeforeAfterSection />
        </PageShell>
        <PageShell as="div">
          <FeaturesSection />
        </PageShell>
        <PageShell as="div">
          <PricingSection />
        </PageShell>
        <FaqSection />
        <CtaBanner />
        <Footer />
      </main>
    </div>
  );
}
