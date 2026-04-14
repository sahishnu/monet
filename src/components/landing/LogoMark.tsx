type Props = { className?: string; size?: "sm" | "md" };

const gradient =
  "linear-gradient(135deg, oklab(69.8% 0.118 0.099) 0%, oklab(75.4% 0.033 0.079) 33%, oklab(73.7% 0.088 0.076) 66%, oklab(65.1% 0.074 0.072) 100%)";

export function LogoMark({ className = "", size = "md" }: Props) {
  /* Portrait rectangle, width:height = 2:3, sharp corners */
  const h = size === "sm" ? "h-9" : "h-12";
  return (
    <div
      className={`aspect-[2/3] w-auto shrink-0 rounded-none ${h} ${className}`}
      style={{ backgroundImage: gradient }}
      aria-hidden
    />
  );
}
