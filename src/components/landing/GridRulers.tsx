import { columnPositions } from "../../lib/grid";

function TopRuler({ cols }: { cols: number }) {
  const positions = columnPositions(cols);
  return (
    <div className="absolute inset-x-0 top-0 h-6">
      {Array.from({ length: cols }, (_, i) => {
        const rightEdgePct = positions[i + 1];
        return (
          <span
            key={i}
            className="absolute top-1 translate-x-[calc(-100%-3px)] text-right text-[10px] font-medium tabular-nums text-[rgb(0_0_0/0.12)]"
            style={{ left: `${rightEdgePct}%` }}
          >
            {i + 1}
          </span>
        );
      })}
    </div>
  );
}

/** Column numbers along the top, aligned to the paper grid. */
export function GridRulers() {
  return (
    <div
      className="pointer-events-none absolute inset-0 z-20 select-none overflow-hidden"
      aria-hidden
    >
      <div className="md:hidden">
        <TopRuler cols={4} />
      </div>
      <div className="hidden md:block lg:hidden">
        <TopRuler cols={8} />
      </div>
      <div className="hidden lg:block">
        <TopRuler cols={12} />
      </div>
    </div>
  );
}
