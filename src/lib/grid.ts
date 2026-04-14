/** Matches vertical guides in GridOverlay / `--grid-cols` in global.css. */
export const GRID_GUTTER_PCT = 10;

export function columnPositions(cols: number): number[] {
  const contentPct = 100 - GRID_GUTTER_PCT * 2;
  const step = contentPct / cols;
  return Array.from({ length: cols + 1 }, (_, i) => GRID_GUTTER_PCT + i * step);
}
