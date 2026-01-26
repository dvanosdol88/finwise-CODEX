# Pre-Upgrade Architecture Summary

**Generated on:** Monday, January 26, 2026
**Purpose:** Document current state before major upgrade (Next.js/Tailwind).

## 1. Project Structure

Standard Next.js 14 App Router project with `src` directory.

```
src/
├── app/                    # App Router pages and layouts
│   ├── api/                # API routes (e.g., /api/quiz/vote)
│   ├── [pages]/            # Feature pages (improve, save, upgrade, etc.)
│   ├── fonts.ts            # Font configuration
│   ├── globals.css         # Global styles (Tailwind directives)
│   └── layout.tsx          # Root layout
├── components/             # React components
│   ├── charts/             # Recharts visualizations
│   ├── improve/            # Components specific to 'Improve' page
│   ├── save/               # Components specific to 'Save' page
│   ├── value-cards/        # Value proposition cards
│   └── [shared].tsx        # Shared UI (CostAnalysisCalculator, etc.)
├── config/                 # Content & Logic Configuration (Key Pattern)
│   ├── improvePageConfig.ts
│   ├── improveToolsPageConfig.ts
│   └── savingsMetersConfig.ts
├── lib/                    # Business Logic & Utilities
│   ├── calculatorState.ts  # URL-based state management
│   ├── feeProjection.ts    # Financial calculation logic
│   └── format.ts           # Formatters
└── styles/                 # Design System
    └── tokens.ts           # Centralized design tokens (colors, typography)
```

## 2. Key Architectural Patterns

*   **Configuration-Driven UI:**
    *   Content (text, images, features) and logic parameters are decoupled from components.
    *   Defined in `src/config/*.ts` and imported into pages/components.
    *   **Risk:** Ensure these config files remain compatible with new component props.

*   **URL-Based State Management:**
    *   The "Calculator" state (`portfolioValue`, `years`, etc.) is synchronized with URL search parameters via `src/lib/calculatorState.ts`.
    *   **Crucial:** This allows sharable links and stateless components.

*   **Centralized Design Tokens:**
    *   `src/styles/tokens.ts` exports a `tokens` object.
    *   `tailwind.config.ts` imports this object to define the Tailwind theme.
    *   **Risk:** If `tailwind.config.ts` format changes (e.g. to v4), this import mechanism might need refactoring.

## 3. Critical Dependencies (Current Versions)

| Package | Version | Notes |
| :--- | :--- | :--- |
| `next` | `^14.2.4` | **Target for upgrade** |
| `react` | `^18.3.1` | React 19 is coming/here |
| `tailwindcss` | `^3.4.1` | **Target for upgrade (v4?)** |
| `typescript` | `^5.4.5` | |
| `framer-motion` | `^12.28.1` | Animations |
| `recharts` | `^2.12.7` | Charts |
| `lucide-react` | `^0.454.0` | Icons |
| `next-view-transitions` | `^0.3.5` | Page transitions |

## 4. Configuration Watchlist

*   **`tailwind.config.ts`**:
    *   **Unusual:** Imports TypeScript file `src/styles/tokens.ts` to feed the theme configuration.
    *   **Action:** Ensure this works in the new version. Tailwind v4 changes how config is handled (CSS-first). This might require a bridge or a rewrite of how tokens are injected.

*   **`next.config.mjs`**:
    *   `experimental: { typedRoutes: true }` is enabled. Check if this is stable or deprecated in the target Next.js version.
