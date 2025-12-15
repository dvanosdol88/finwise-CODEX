# Step 6 — QA checklist (developer)

## Functional
- [ ] Slider changes update chart and headline savings immediately
- [ ] Share button copies a URL that restores the same slider state
- [ ] “How it works” and “See deeper proof” links preserve state (and UTM params)
- [ ] `/save` renders charts without console errors
- [ ] `/how-it-works` shows the same computed savings as landing for identical inputs

## UX
- [ ] Landing page has minimal trust nav only (optional)
- [ ] Upgrade → Improve → Save sections are scrollable and simple (no carousel)
- [ ] Disclosures in footer are present and readable

## Performance
- [ ] No external font loading via `<link>` or `<style>`
- [ ] Charts are responsive on mobile
