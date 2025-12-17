// Site Configuration
export const SITE_CONFIG = {
  name: "Monday Quick Peek Pro",
  tagline: "Preview Monday.com Tasks Without Clicking",
  description:
    "Hover over any task to see details instantly. Save hours every week.",
};

// Links
export const LINKS = {
  chromeStore:
    "https://chrome.google.com/webstore/detail/monday-quick-peek-pro/YOUR_EXTENSION_ID",
  demoVideo: "https://www.youtube.com/watch?v=YOUR_VIDEO_ID",
  website: "https://mondayquickpeek.com",
  privacyPolicy: "/privacy",
  termsOfService: "/terms",
  contact: "mailto:support@mondayquickpeek.com",
};

// Social Links
export const SOCIAL_LINKS = {
  twitter: "https://twitter.com/mondayquickpeek",
  linkedin: "https://linkedin.com/company/mondayquickpeek",
  youtube: "https://youtube.com/@mondayquickpeek",
};

// Stats
export const STATS = {
  rating: "5/5",
  users: "1,000+",
  reviews: "200+",
};

// Pricing
export const PRICING = {
  free: {
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
    ctaLink: "#pricing",
  },
  pro: {
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
    ctaLink: "#pricing",
    popular: true,
  },
};

// FAQ Data
export const FAQ_DATA = [
  {
    question: "Is my Monday.com data safe?",
    answer:
      "Absolutely! Quick Peek Pro processes everything locally in your browser. Your data never leaves your computer and is never sent to any external servers. We take privacy seriously.",
  },
  {
    question: "Does it work with all Monday.com boards?",
    answer:
      "Yes! Quick Peek Pro works with any board type - Main boards, Private boards, Shareable boards, and even Dashboard views. It automatically detects Monday.com pages.",
  },
  {
    question: "Will it slow down Monday.com?",
    answer:
      "Not at all. Quick Peek Pro is highly optimized and only activates when you hover over items. There's no impact on page load times or Monday.com performance.",
  },
  {
    question: "Can I customize what shows in tooltips?",
    answer:
      "Pro users can fully customize tooltip content. Choose which columns to display, set the order, and even create custom layouts for different board types.",
  },
  {
    question: "What's the difference between Free and Pro?",
    answer:
      "The free version includes basic hover tooltips with item name, description, and status. Pro unlocks all 20+ column types, custom layouts, updates preview, and advanced features.",
  },
  {
    question: "How do I cancel my subscription?",
    answer:
      "You can cancel anytime from your account settings. No questions asked. You'll continue to have Pro access until the end of your billing period.",
  },
];

// Pain Points Data
export const PAIN_POINTS = [
  {
    id: 1,
    title: "Endless Clicking",
    description:
      "Click task → wait for modal → close → repeat. Hundreds of times per day.",
    icon: "MousePointer",
  },
  {
    id: 2,
    title: "Lost Context",
    description:
      "By the time the modal loads, you forgot what you were looking for.",
    icon: "Brain",
  },
  {
    id: 3,
    title: "Wasted Time",
    description: "Studies show context switching costs 23 minutes to refocus.",
    icon: "Clock",
  },
];

// Features Data
export const FEATURES = [
  {
    id: 1,
    title: "Instant Item Preview",
    description:
      "Hover over any item to see its full details, updates, and status without clicking.",
    icon: "Eye",
    color: "indigo",
  },
  {
    id: 2,
    title: "Lightning Fast",
    description:
      "Zero loading time. Information appears instantly as you hover.",
    icon: "Zap",
    color: "yellow",
  },
  {
    id: 3,
    title: "Beautiful Tooltips",
    description:
      "Clean, modern design that matches Monday.com's aesthetic perfectly.",
    icon: "Palette",
    color: "pink",
  },
  {
    id: 4,
    title: "Customizable Display",
    description:
      "Choose what information shows in tooltips. Status, dates, people, and more.",
    icon: "Settings",
    color: "emerald",
  },
  {
    id: 5,
    title: "Privacy First",
    description:
      "All processing happens locally. Your data never leaves your browser.",
    icon: "Shield",
    color: "blue",
  },
  {
    id: 6,
    title: "Seamless Integration",
    description:
      "Works automatically on any Monday.com board. No setup required.",
    icon: "Puzzle",
    color: "purple",
  },
];

// How It Works Steps
export const HOW_IT_WORKS = [
  {
    number: "01",
    title: "Install the Extension",
    description:
      "Add Quick Peek Pro to Chrome in one click. No account needed.",
    icon: "Chrome",
  },
  {
    number: "02",
    title: "Open Monday.com",
    description: "Navigate to any of your Monday.com boards as usual.",
    icon: "Target",
  },
  {
    number: "03",
    title: "Hover & Peek",
    description: "Simply hover over any item to see its details instantly.",
    icon: "Eye",
  },
];

// Navigation Links
export const NAV_LINKS = [
  { href: "#features", label: "Features" },
  { href: "#how-it-works", label: "How It Works" },
  { href: "#pricing", label: "Pricing" },
  { href: "#faq", label: "FAQ" },
];

// Colors
export const COLORS = {
  primary: "#6366f1", // Indigo
  primaryDark: "#4f46e5",
  secondary: "#10b981", // Emerald
  secondaryDark: "#059669",
  accent: "#f59e0b", // Amber
  accentDark: "#d97706",
  text: {
    primary: "#111827", // Gray-900
    secondary: "#4b5563", // Gray-600
    muted: "#9ca3af", // Gray-400
  },
  background: {
    primary: "#ffffff",
    secondary: "#f9fafb", // Gray-50
    tertiary: "#f3f4f6", // Gray-100
  },
};
