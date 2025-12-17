import { LINKS } from "../../constants";

// Pricing Section Content
export const PRICING_CONTENT = {
  badge: "Simple Pricing",
  headline: "Choose Your Plan",
  subheadline: "Start free and upgrade when you need more power.",
  guarantee: "30-day money-back guarantee",
  toggleMonthly: "Monthly",
  toggleYearly: "Yearly",
  saveBadge: "Save 17%",
};

// Pricing Plans Data
export const PRICING_PLANS = {
  free: {
    id: "free",
    name: "Free",
    monthlyPrice: "$0",
    yearlyPrice: "$0",
    period: "/forever",
    description: "Perfect for getting started",
    features: [
      { text: "5 tooltip previews per day", included: true },
      { text: "Basic task details", included: true },
      { text: "Works on all boards", included: true },
      { text: "Unlimited previews", included: false },
      { text: "Priority support", included: false },
    ],
    cta: "Start Free",
    ctaHref: LINKS.chromeStore,
    isPopular: false,
  },
  pro: {
    id: "pro",
    name: "Pro",
    monthlyPrice: "$5",
    yearlyPrice: "$49",
    monthlyPeriod: "/month",
    yearlyPeriod: "/year",
    description: "For power users who want it all",
    popularBadge: "MOST POPULAR",
    features: [
      { text: "Unlimited tooltip previews", included: true },
      { text: "All task details + description", included: true },
      { text: "Works on all boards", included: true },
      { text: "Priority support", included: true },
      { text: "Future features included", included: true },
    ],
    cta: "Get Pro",
    // Separate links for monthly and yearly
    ctaHrefMonthly: LINKS.gumroadMonthly,
    ctaHrefYearly: LINKS.gumroadYearly,
    isPopular: true,
  },
};
