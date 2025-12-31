import { LINKS } from "../../constants";

// Hero Content
export const HERO_CONTENT = {
  badge: "Chrome Extension for Monday.com",
  headline: {
    regular: "Preview Monday.com Tasks",
    highlighted: "Without Clicking",
  },
  subheadline:
    "Hover over any task to see details instantly. Save hours every week.",
};

// Hero CTAs
export const HERO_CTAS = {
  primary: {
    text: "Add to Chrome - Free",
    href: LINKS.chromeStore,
    isExternal: true,
  },
  secondary: {
    text: "Watch Demo",
    // This will trigger the inline video player
    action: "playVideo",
  },
};

// Trust Badges
export const TRUST_BADGES = {
  rating: "5/5 rating",
  users: "1,000+",
  freeTier: "Free tier available",
};

// Demo Preview
export const DEMO_PREVIEW = {
  browserUrl: "monday.com/boards/project",
  floatingBadge: {
    title: "Instant Preview",
    subtitle: "No loading time",
  },
  // YouTube video embed URL
  youtubeEmbedUrl: LINKS.youtubeVideo,
};
