import type { ComparisonCard, Feature } from "@/config/improvePageConfig";

type ImproveHero = {
  headline: string;
  subhead: string;
  caption: string;
};

type ImproveVariant = {
  hero: ImproveHero;
  features: Feature[];
  comparisonCards: ComparisonCard[];
};

const baseFeatures: Feature[] = [
  {
    id: "monte-carlo",
    title: "Monte Carlo Analysis",
    tagline: "Know your probability of success—not just a single projection.",
    description:
      "Most advisors show you one line. We run <strong>thousands of scenarios</strong> to show the confidence band around your plan and the odds of success at every stage.",
    whyItMatters:
      "A plan that \"works\" in one scenario might fail in another. Monte Carlo shows you the odds, not just the dream.",
    image: "/assets/rightcapital/monte-carlo-confidence.png",
    imageAlt: "Monte Carlo probability gauge showing confidence bands",
    imagePosition: "right",
  },
  {
    id: "roth",
    title: "Tax-Smart Roth Conversions",
    tagline: "Fill up tax brackets strategically, not randomly.",
    description:
      "See exactly how much to convert each year to <strong>maximize lower tax brackets</strong> without pushing you into higher ones.",
    whyItMatters:
      "Proper Roth conversions can save <strong>$100K+ in lifetime taxes</strong>. Most advisors guess. We calculate.",
    image: "/assets/rightcapital/tax-bracket-slider.gif",
    imageAlt: "Tax bracket slider showing fill up the bracket optimization",
    imagePosition: "left",
    isAnimated: true,
    badge: "Star Feature",
    highlightCallout: true,
  },
  {
    id: "stress-test",
    title: "Stress Testing",
    tagline: "See how your plan survives 2008, 2020, or worse.",
    description:
      "We replay real market crashes and hypothetical shocks so you know <strong>exactly what would have happened</strong>—and what to adjust now.",
    whyItMatters:
      "Plans look great until markets crash. Stress testing reveals hidden vulnerabilities before they become real problems.",
    image: "/assets/rightcapital/stress-test-chart.png",
    imageAlt: "Stress test chart comparing market scenario outcomes",
    imagePosition: "right",
  },
  {
    id: "scenarios",
    title: "What-If Scenarios",
    tagline: "Compare options side-by-side before deciding.",
    description:
      "Retire at 62 vs 65? Buy the vacation home or invest the money? See the <strong>real long-term tradeoffs</strong> before you choose.",
    whyItMatters:
      "Major financial decisions shouldn&apos;t be based on gut feelings. See the numbers, then decide confidently.",
    image: "/assets/rightcapital/scenario-comparison.png",
    imageAlt: "Side-by-side scenario comparison for retirement planning",
    imagePosition: "left",
  },
  {
    id: "automation",
    title: "Smart Automation",
    tagline: "One click finds the optimal tax strategy.",
    description:
      "The software tests <strong>thousands of combinations</strong> instantly—Social Security timing, Roth conversions, and withdrawal sequencing—to surface the best strategies.",
    whyItMatters:
      "Human analysis alone can&apos;t test every permutation. Software finds opportunities that manual planning misses.",
    image: "/assets/rightcapital/solve-top-strategies.gif",
    imageAlt: "One-click optimization finding top tax strategies",
    imagePosition: "right",
    isAnimated: true,
  },
];

const comparisonCards: ComparisonCard[] = [
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
      "Institutional-grade software",
      "Human judgment + expertise",
      "CFA® + CFP® credentials",
      "Flat fee—no conflicts",
    ],
    highlighted: true,
    checkmarks: true,
  },
];

const navItemsForFeatures = (features: Feature[]) =>
  features.map((feature) => ({
    id: feature.id,
    label:
      feature.id === "monte-carlo"
        ? "Monte Carlo"
        : feature.id === "roth"
          ? "Roth Conversions"
          : feature.id === "stress-test"
            ? "Stress Testing"
            : feature.id === "scenarios"
              ? "Scenarios"
              : feature.title,
  }));

export const improveToolsVariants: Record<number, ImproveVariant> = {
  1: {
    hero: {
      headline: "Improved Tools → Better Decisions → Better Outcomes",
      subhead:
        "See what state-of-the-art financial planning looks like—with clean visuals, clear tradeoffs, and data-driven confidence.",
      caption: "Dynamic cash flow visualization—see exactly where your money goes.",
    },
    features: baseFeatures,
    comparisonCards,
  },
  2: {
    hero: {
      headline: "Better Tools → Better Information → Better Decisions",
      subhead:
        "Bring institutional-grade planning to your household with clear insights on taxes, cash flow, and long-term risk.",
      caption: "Cash flow clarity lets you spend confidently without guessing.",
    },
    features: [baseFeatures[1], baseFeatures[0], baseFeatures[3], baseFeatures[2]],
    comparisonCards,
  },
  3: {
    hero: {
      headline: "Plan for the Good, the Bad, and the Unexpected",
      subhead:
        "Stress test your plan, optimize taxes, and compare life decisions side-by-side before you act.",
      caption: "Scenario-based planning keeps surprises from derailing progress.",
    },
    features: [baseFeatures[2], baseFeatures[0], baseFeatures[4], baseFeatures[3]],
    comparisonCards,
  },
};

export const improveToolsNavItems = (version: number) => {
  const variant = improveToolsVariants[version] ?? improveToolsVariants[1];
  return navItemsForFeatures(variant.features);
};
