/**
 * First and last verticals of the paper grid (10% / 90%), matching GridOverlay.tsx.
 * For full-width dark bands where the global overlay is too subtle or hidden behind content.
 */
export function SectionGridEdgeLines() {
  const stroke = "rgb(255 255 255 / 0.1)";
  return (
    <svg
      className="pointer-events-none absolute inset-0 z-0 h-full min-h-full w-full"
      aria-hidden
    >
      <line
        x1="10%"
        y1="0%"
        x2="10%"
        y2="100%"
        stroke={stroke}
        strokeWidth={1}
        strokeDasharray="8 8"
        vectorEffect="nonScalingStroke"
      />
      <line
        x1="90%"
        y1="0%"
        x2="90%"
        y2="100%"
        stroke={stroke}
        strokeWidth={1}
        strokeDasharray="8 8"
        vectorEffect="nonScalingStroke"
      />
    </svg>
  );
}
