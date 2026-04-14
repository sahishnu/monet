import { brand } from "../../content/landing";

type Variant = "header" | "footer";

const styles: Record<
  Variant,
  { wrap: string; serif: string; sans: string }
> = {
  header: {
    wrap: "inline-flex items-center gap-2 leading-inherit",
    serif:
      "font-['Instrument_Serif',ui-serif,Georgia,serif] text-3xl font-normal italic tracking-[-0.02em] text-[#1A1A1A]",
    sans:
      "font-['Rubik',ui-sans-serif,system-ui,sans-serif] text-xl font-regular tracking-[-0.02em] text-[#1A1A1A]",
  },
  footer: {
    wrap: "inline-flex items-center gap-1 leading-[max(1.5rem,calc(var(--grid-unit)/2))]",
    serif:
      "font-['Instrument_Serif',ui-serif,Georgia,serif] text-2xl font-normal italic tracking-[-0.02em] text-[#FAFAF8]",
    sans:
      "font-['Rubik',ui-sans-serif,system-ui,sans-serif] text-base font-regular text-[#FAFAF8]",
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
