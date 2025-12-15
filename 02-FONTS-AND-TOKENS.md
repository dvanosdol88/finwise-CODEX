# Step 2 — Add Inter (next/font) + Tailwind token wiring

## Files added/updated
- `src/app/fonts.ts` (Inter via `next/font/google`)
- `src/app/layout.tsx` (apply font variables)
- `src/styles/tokens.ts` (brand + typography tokens)
- `tailwind.config.ts` (map tokens into Tailwind + set fontFamily)

## Notes
- Do NOT load Google fonts via `<style>` or `<link>`. Use `next/font/google` only.
- Inter becomes the global `font-sans`.

Apply the code files from this bundle.
