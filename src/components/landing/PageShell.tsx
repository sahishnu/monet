import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  as?: "div" | "section" | "header" | "footer";
  className?: string;
  id?: string;
};

/** Max-width + horizontal gutter aligned to Paper frame (1440 / 144px padding / 1152 content). */
export function PageShell({ children, as: Tag = "div", className = "", id }: Props) {
  return (
    <Tag
      id={id}
      className={`mx-auto w-full max-w-[var(--page-max)] px-[var(--page-gutter)] ${className}`}
    >
      {children}
    </Tag>
  );
}
