/**
 * Global Constants
 * These are site-wide configuration values that may be used across multiple components
 */

// Site Configuration
export const SITE_CONFIG = {
  name: "Monday Quick Peek Pro",
  tagline: "Preview Monday.com Tasks Without Clicking",
  description:
    "Hover over any task to see details instantly. Save hours every week.",
};

// External Links
export const LINKS = {
  chromeStore:
    "https://chromewebstore.google.com/detail/monday-quick-peek/gebhiogfbilahnkeapiklhmmkohambcb",
  gumroadMonthly: "https://gumroad.com/l/monday-quick-peek-pro",
  gumroadYearly: "https://busymind.gumroad.com/l/acgkd",
  // Loom video embed URL - IMPORTANT: Use /embed/ not /share/
  loomVideo: "https://www.loom.com/embed/17793a28d7d84b3c93b3b3bb082f8bdd",
  website: "https://mondayquickpeek.com",
  privacyPolicy: "/privacy",
  termsOfService: "/terms",
  // Gmail compose URL - works reliably across all browsers
  contact:
    "https://mail.google.com/mail/?view=cm&fs=1&to=omerbussy1995@gmail.com&su=Monday%20Quick%20Peek%20Pro%20-%20Contact",
};

// Social Links
export const SOCIAL_LINKS = {
  twitter: "https://twitter.com/mondayquickpeek",
  linkedin: "https://linkedin.com/company/mondayquickpeek",
  youtube: "https://youtube.com/@mondayquickpeek",
};

// Global Stats (can be updated across the site)
export const STATS = {
  rating: "5/5",
  users: "1,000+",
  reviews: "200+",
};

// Theme Colors (for reference)
export const COLORS = {
  primary: {
    main: "#6366f1", // Indigo-500
    dark: "#4f46e5", // Indigo-600
    light: "#a5b4fc", // Indigo-300
  },
  secondary: {
    main: "#10b981", // Emerald-500
    dark: "#059669", // Emerald-600
    light: "#6ee7b7", // Emerald-300
  },
  accent: {
    main: "#f59e0b", // Amber-500
    dark: "#d97706", // Amber-600
    light: "#fcd34d", // Amber-300
  },
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
