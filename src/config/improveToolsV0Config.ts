import type { StackedFeature } from "@/components/improve/FeatureSectionStacked";

export interface ComparisonCardV0 {
  title: string;
  items: string[];
  highlighted?: boolean;
  checkmarks?: boolean;
}

export const heroContent = {
  headline: "Better Tools = Better Information = Better Decisions",
  subhead:
    "See what state-of-the-art financial planning looks like—the same software used by top wealth management firms, now working for you.",
  caption: "Dynamic cash flow visualization—see exactly where your money goes",
};

export const features: StackedFeature[] = [
  {
    id: "monte-carlo",
    title: "Monte Carlo Analysis",
    tagline: "Know your probability of success—not just a single projection.",
    description:
      "Most advisors show you one line on a chart. We run <strong>thousands of scenarios</strong> to show you the range of possibilities and your confidence level at every stage.",
    whyItMatters:
      'A plan that "works" in one scenario might fail in another. Monte Carlo shows you the odds, not just the dream.',
    image: "/assets/rightcapital/monte-carlo-confidence.png",
    imageAlt: "Monte Carlo probability gauge showing confidence bands across retirement timeline",
    aspectRatio: 1.7, // ~17:10
  },
  {
    id: "roth",
    title: "Tax-Smart Roth Conversions",
    tagline: "Fill up tax brackets strategically, not randomly.",
    description:
      "The calibration view shows exactly how much to convert each year to <strong>maximize the value of lower tax brackets</strong> without pushing you into higher ones unnecessarily.",
    whyItMatters:
      "Proper Roth conversions can save <strong>$100K+ in lifetime taxes</strong>. Most advisors guess. We calculate.",
    image: "/assets/rightcapital/roth-conversion-calibration.png",
    imageAlt: "Tax bracket calibration showing optimal Roth conversion strategy over time",
    badge: "Key Feature",
    highlightCallout: true,
    aspectRatio: 1.75,
  },
  {
    id: "roth-slider",
    title: "Interactive Tax Bracket Slider",
    tagline: "See the impact of conversions in real-time.",
    description:
      "Drag the slider to explore different conversion amounts and watch how they fill each tax bracket. The visualization makes complex tax planning <strong>intuitive and actionable</strong>.",
    whyItMatters:
      "Understanding the tradeoffs helps you make confident decisions about your tax strategy.",
    image: "/assets/rightcapital/tax-bracket-slider.gif",
    imageAlt: "Interactive slider showing how Roth conversions fill tax brackets",
    isAnimated: true,
    aspectRatio: 1.6,
  },
  {
    id: "stress-test",
    title: "Stress Testing",
    tagline: "See how your plan survives 2008, 2020, or worse.",
    description:
      "We test your plan against <strong>actual historical crashes</strong> and hypothetical scenarios. You'll know exactly what would have happened—and what adjustments to make now.",
    whyItMatters:
      "Plans look great until markets crash. Stress testing reveals hidden vulnerabilities before they become real problems.",
    image: "/assets/rightcapital/stress-test-chart.png",
    imageAlt: "Stress test chart showing probability of success across different risk scenarios",
    aspectRatio: 2.1, // wider chart
  },
  {
    id: "scenarios",
    title: "What-If Scenarios",
    tagline: "Compare options side-by-side before deciding.",
    description:
      "Retire at 62 vs 65? Buy the vacation home or invest the money? See the <strong>real long-term tradeoffs</strong> of every major decision—before you make it.",
    whyItMatters:
      "Major financial decisions shouldn't be based on gut feelings. See the numbers, then decide confidently.",
    image: "/assets/rightcapital/scenario-comparison.png",
    imageAlt: "Side-by-side comparison of proposed plan vs current plan with probability metrics",
    aspectRatio: 1.7,
  },
  {
    id: "automation",
    title: "Smart Automation",
    tagline: "One click finds the optimal tax strategy.",
    description:
      "The software tests <strong>thousands of combinations</strong> instantly—Social Security timing, Roth conversions, withdrawal sequencing—and surfaces the top strategies ranked by impact.",
    whyItMatters:
      "Human analysis alone can't test every permutation. Software finds opportunities that manual planning misses.",
    image: "/assets/rightcapital/solve-top-strategies.gif",
    imageAlt: "One-click optimization surfacing top tax strategies ranked by impact",
    isAnimated: true,
    aspectRatio: 1.6,
  },
];

export const comparisonCards: ComparisonCardV0[] = [
  {
    title: "Robo-Advisors",
    items: [
      "Automated allocation",
      "Basic rebalancing",
      "Limited personalization",
      "No human judgment",
    ],
  },
  {
    title: "Traditional Advisors",
    items: [
      "Human relationship",
      "Often outdated tools",
      "Varying expertise",
      "AUM fee conflicts",
    ],
  },
  {
    title: "This Approach",
    items: [
      "Industry-leading software",
      "Human judgment + expertise",
      "CFA® + CFP® credentials",
      "Flat fee—no conflicts",
    ],
    highlighted: true,
    checkmarks: true,
  },
];

export const navItems = features.map((f) => ({
  id: f.id,
  label:
    f.id === "monte-carlo"
      ? "Monte Carlo"
      : f.id === "roth"
        ? "Roth Strategy"
        : f.id === "roth-slider"
          ? "Tax Brackets"
          : f.id === "stress-test"
            ? "Stress Testing"
            : f.id === "scenarios"
              ? "Scenarios"
              : f.title,
}));
