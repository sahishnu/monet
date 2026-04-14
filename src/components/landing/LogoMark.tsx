type Props = { className?: string; size?: "sm" | "md" };

const gradient =
  "linear-gradient(135deg, oklab(69.8% 0.118 0.099) 0%, oklab(75.4% 0.033 0.079) 33%, oklab(73.7% 0.088 0.076) 66%, oklab(65.1% 0.074 0.072) 100%)";

export function LogoMark({ className = "", size = "md" }: Props) {
  /* Portrait rectangle (taller than wide), sharp corners */
  const dim = size === "sm" ? "h-9 w-5" : "h-12 w-8";
  return (
    <div
      className={`shrink-0 rounded-none ${dim} ${className}`}
      style={{ backgroundImage: gradient }}
      aria-hidden
    />
  );
}
