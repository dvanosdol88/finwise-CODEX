# CLAUDE.md
# Location: Project root

## Project: finwise-CODEX (you-are-paying-too-much.com)

See `AGENTS.md` in this directory for full project context, deprecated files, and conventions.

## Project Commands

```bash
npm run dev         # Dev server (Next.js)
npm run build       # Production build
npm run lint        # ESLint
npx tsc --noEmit    # Type check
```

## Stack

- Next.js 14 + TypeScript
- Tailwind CSS
- Recharts (charts/visualizations)
- Lucide React (icons)
- Deployed on Vercel

## Project-Specific Rules

- This is a fee calculator/visualization tool
- Keep the UI simple and focused on the calculator functionality
- Follow existing component patterns in `src/components/`
