---
name: redesigning-sections
description: "Generates 3-5 design variants for a website component, section, or text element and adds a floating picker to toggle between them. Use when asked to redesign, restyle, rework, or propose alternatives for any UI element."
---

# Redesigning Sections

Generate multiple design variants for a website element and let the user preview them with a floating picker.

## Workflow

### Step 1 — Understand the Target

1. Read the component or section the user wants redesigned.
2. Note existing conventions: Tailwind classes, shadcn/ui primitives, Framer Motion usage, typography, color palette, spacing patterns.
3. Identify what specifically should change (layout, copy, style, animation, all of the above).

### Step 2 — Create 3-5 Variants

1. Design **3-5 meaningfully different** approaches. Each variant should represent a distinct design direction, not just minor tweaks. For example:
   - Different layouts (grid vs. stack vs. split-screen)
   - Different visual styles (minimal vs. bold vs. editorial)
   - Different content hierarchies or emphasis
   - Different animation/interaction patterns
2. Implement each variant as a separate named component in the **same file** as the original, suffixed with `VariantA`, `VariantB`, etc. (e.g., `HeroSectionVariantA`, `HeroSectionVariantB`).
3. Keep the original component intact — do not modify it.
4. All variants must use the project's existing libraries (Tailwind v4, shadcn/ui, Framer Motion, Lucide icons). Do not introduce new dependencies.

### Step 3 — Add the Variant Picker

1. Create a `VariantPicker` component (if it doesn't already exist) at `client/src/components/VariantPicker.tsx`. This is a small floating UI that lets the user cycle through variants.
2. The picker should:
   - Float in the bottom-right corner with `fixed` positioning and a high `z-index`.
   - Show the current variant label (e.g., "Variant A", "Variant B", "Original").
   - Have **Previous / Next** buttons to cycle through variants.
   - Include an **"Original"** option so the user can compare against the unchanged version.
   - Be styled unobtrusively — semi-transparent background, small text, rounded corners.
   - Use Tailwind classes only, no inline styles.
3. In the **parent page or layout** that renders the target component, wrap the section in a switcher:
   - Import all variants and the `VariantPicker`.
   - Use a `useState` to track the active variant index.
   - Render the active variant conditionally.
   - Render `<VariantPicker>` alongside it.

### Step 4 — Present to the User

1. Briefly describe each variant (1-2 sentences each) so the user understands the design direction before previewing.
2. Tell the user to run the dev server (if not already running) and toggle through variants in the browser.

### Step 5 — Finalize Selection

When the user picks a variant:

1. Replace the original component's implementation with the chosen variant's code.
2. Remove all other variant components from the file.
3. Remove the `VariantPicker` import and usage from the parent.
4. Delete `client/src/components/VariantPicker.tsx` if no other redesign is in progress.
5. Clean up any unused imports.

## VariantPicker Reference Implementation

```tsx
import { useState } from "react";

interface VariantPickerProps {
  variants: string[];
  activeIndex: number;
  onChange: (index: number) => void;
}

export function VariantPicker({ variants, activeIndex, onChange }: VariantPickerProps) {
  return (
    <div className="fixed bottom-4 right-4 z-[9999] flex items-center gap-2 rounded-full bg-black/80 px-4 py-2 text-sm text-white shadow-lg backdrop-blur-sm">
      <button
        onClick={() => onChange((activeIndex - 1 + variants.length) % variants.length)}
        className="rounded-full p-1 transition-colors hover:bg-white/20"
        aria-label="Previous variant"
      >
        ←
      </button>
      <span className="min-w-[80px] text-center font-medium">
        {variants[activeIndex]}
      </span>
      <button
        onClick={() => onChange((activeIndex + 1) % variants.length)}
        className="rounded-full p-1 transition-colors hover:bg-white/20"
        aria-label="Next variant"
      >
        →
      </button>
    </div>
  );
}
```

## Rules

- Never delete or modify the original component until the user makes a final selection.
- Each variant must be self-contained — no shared state or wrappers between variants.
- Keep all variant code in the same file as the original to minimize file churn.
- Respect the project's existing design language (colors, fonts, spacing) unless the user explicitly asks for a departure.
- If the component is very large (> 200 lines), consider redesigning only the specific sub-section the user mentions rather than the entire component.
