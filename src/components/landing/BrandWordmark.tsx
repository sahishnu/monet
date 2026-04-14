import { brand } from "../../content/landing";

type Variant = "header" | "footer";

const styles: Record<
  Variant,
  { wrap: string; serif: string; sans: string }
> = {
  header: {
    wrap: "inline-flex items-baseline gap-1.5 leading-inherit",
    serif:
      "font-['Instrument_Serif',ui-serif,Georgia,serif] text-3xl font-normal italic tracking-[-0.02em] text-[#1A1A1A]",
    sans: "text-lg font-medium tracking-[-0.02em] text-[#1A1A1A]",
  },
  footer: {
    wrap: "inline-flex items-baseline gap-1.5 leading-[max(1.5rem,calc(var(--grid-unit)/2))]",
    serif:
      "font-['Instrument_Serif',ui-serif,Georgia,serif] text-2xl font-normal italic tracking-[-0.02em] text-[#FAFAF8]",
    sans: "text-base font-medium tracking-[-0.01em] text-[#FAFAF8]",
  },
};

type BrandWordmarkProps = { variant: Variant; className?: string };

export function BrandWordmark({ variant, className = "" }: BrandWordmarkProps) {
  const s = styles[variant];
  return (
    <span className={[s.wrap, className].filter(Boolean).join(" ")}>
      <span className={s.serif}>{brand.nameSerif}</span>
      <span className={s.sans}>{brand.nameSans}</span>
    </span>
  );
}
