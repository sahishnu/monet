/**
 * Solid horizontals + dashed verticals in the 10% / 80% / 10% band.
 * Column count (and thus cell size + row density) steps down on small screens:
 * 4 cols (< md), 8 cols (md–lg), 12 cols (lg+).
 */
const GUTTER_PCT = 10;

function columnPositions(cols: number): number[] {
  const contentPct = 100 - GUTTER_PCT * 2;
  const step = contentPct / cols;
  return Array.from({ length: cols + 1 }, (_, i) => GUTTER_PCT + i * step);
}

function VerticalGuides({ cols }: { cols: number }) {
  const positions = columnPositions(cols);
  return (
    <svg className="absolute inset-0 h-full w-full">
      {positions.map((pct, i) => (
        <line
          key={i}
          x1={`${pct}%`}
          y1="0%"
          x2={`${pct}%`}
          y2="100%"
          stroke="rgba(0,0,0,0.06)"
          strokeWidth={1}
          strokeDasharray="8 8"
          vectorEffect="nonScalingStroke"
        />
      ))}
    </svg>
  );
}

export function GridOverlay() {
  return (
    <div
      className="pointer-events-none fixed inset-0 z-0"
      aria-hidden
    >
      <div className="absolute inset-0 grid-overlay-horizontal" />
      {/* One guide set per breakpoint so column count matches --grid-cols in global.css */}
      <div className="md:hidden">
        <VerticalGuides cols={4} />
      </div>
      <div className="hidden md:block lg:hidden">
        <VerticalGuides cols={8} />
      </div>
      <div className="hidden lg:block">
        <VerticalGuides cols={12} />
      </div>
    </div>
  );
}
