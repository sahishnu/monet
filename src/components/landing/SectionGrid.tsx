import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
};

/** 1 col mobile → 3 col tablet → 12-col (4+4+4) desktop aligned to Paper grid. */
export function SectionGrid({ children, className = "" }: Props) {
  return (
    <div
      className={`grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-6 lg:grid-cols-12 lg:gap-0 ${className}`}
    >
      {children}
    </div>
  );
}
