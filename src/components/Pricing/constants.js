// Pricing Section Content
export const PRICING_CONTENT = {
  badge: "Simple Pricing",
  headline: "Choose Your Plan",
  subheadline: "Start free and upgrade when you need more power.",
  guarantee: "7-day money-back guarantee. No questions asked.",
};

// Pricing Plans Data
export const PRICING_PLANS = [
  {
    id: "free",
    name: "Free",
    price: "$0",
    period: "forever",
    description: "Perfect for trying out Quick Peek",
    features: [
      "Basic hover tooltips",
      "Item name & description",
      "Status column preview",
      "Works on all boards",
      "Community support",
    ],
    notIncluded: [
      "Custom tooltip layouts",
      "All column types",
      "Advanced filtering",
      "Priority support",
    ],
    cta: "Get Started Free",
    ctaHref: "#",
    isPopular: false,
  },
  {
    id: "pro",
    name: "Pro",
    price: "$5",
    period: "/month",
    description: "For power users who want it all",
    features: [
      "Everything in Free, plus:",
      "Custom tooltip layouts",
      "All 20+ column types",
      "Updates & activity preview",
      "Date column integration",
      "People column details",
      "Advanced filtering options",
      "Keyboard shortcuts",
      "Priority email support",
      "Regular feature updates",
    ],
    notIncluded: [],
    cta: "Start Pro Trial",
    ctaHref: "#",
    isPopular: true,
  },
];
