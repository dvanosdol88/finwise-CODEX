# Step 3 — Calculator core (shared math + shareable state)

## Files added
- `src/lib/feeProjection.ts` — single source of truth for the math/projection
- `src/lib/calculatorState.ts` — parse inputs from query params + build share/deep links
- `src/lib/format.ts` — USD formatting helpers

## Why this matters
- Landing calculator, `/save`, and `/how-it-works` all use the SAME projection function.
- URLs carry state: portfolio/years/growth/fee (and preserve UTM params).
