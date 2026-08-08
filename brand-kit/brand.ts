/**
 * Dreamchasers Sports Performance — portable brand kit for sibling apps
 * (e.g. football training app). Import or copy these constants; keep in sync
 * with the marketing site when names/tokens change.
 */

/** Legal / public brand name */
export const BRAND_NAME = "Dreamchasers Sports Performance";

/** Short lockup used in headers */
export const BRAND_LOCKUP = {
  primary: "DREAMCHASERS",
  secondary: "Sports Performance",
  abbreviation: "DSP",
} as const;

/** Coach / talent identity tied to the brand */
export const BRAND_TALENT = {
  fullName: "Sewo Olonilua",
  shortName: "Sewo",
  jerseyNumber: 4,
  monogramLabel: "Sewo Olonilua monogram (SO + crown)",
} as const;

/** Social / contact defaults from the marketing site */
export const BRAND_CONTACT = {
  instagramUsername: "dcssportsperformance",
  instagramUrl: "https://www.instagram.com/dcssportsperformance/",
  phoneDisplay: "(281) 989-9057",
  phoneTel: "+12819899057",
} as const;

/**
 * Asset paths relative to this brand-kit folder (`brand-kit/assets/…`).
 * On the marketing site they also live under `public/images/…`.
 */
export const BRAND_ASSETS = {
  /** White SO + crown mark on black — primary logo / favicon */
  monogram: "./assets/sewo-monogram.png",
  /** Hero / Open Graph athlete photo (Cowboys game) */
  heroAthlete: "./assets/sewo-cowboys-game.png",
  /** About portrait (TCU game action) */
  aboutAthlete: "./assets/sewo-tcu-game.png",
  /** Programs / skill development (Cowboys practice) */
  practiceAthlete: "./assets/sewo-cowboys-practice.png",
} as const;

/** Site-relative paths if you keep assets under `public/` like the marketing site */
export const BRAND_PUBLIC_PATHS = {
  monogram: "/images/brand/sewo-monogram.png",
  heroAthlete: "/images/sewo-cowboys-game.png",
  aboutAthlete: "/images/sewo-tcu-game.png",
  practiceAthlete: "/images/sewo-cowboys-practice.png",
} as const;

export const BRAND_COLORS = {
  bg: "#04070f",
  navy: "#0a1628",
  surface: "#0d1729",
  blue: "#00d4ff",
  blueDeep: "#0095c7",
  text: "#f4f7fb",
  textBody: "rgba(244, 247, 251, 0.62)",
  textMuted: "rgba(244, 247, 251, 0.45)",
  border: "rgba(255, 255, 255, 0.07)",
} as const;

export const BRAND_TYPOGRAPHY = {
  /** Display / athletic headlines — always uppercase in marketing UI */
  display: {
    family: "Bebas Neue",
    weight: 400,
    googleFont: "Bebas_Neue",
    cssVariable: "--font-display",
    usage: "Hero, section titles, program names, CTAs that need punch",
    style: "uppercase, tight leading (~0.92–0.98), tracking ~0.02–0.12em",
  },
  /** UI / body */
  sans: {
    family: "Inter",
    googleFont: "Inter",
    cssVariable: "--font-inter",
    usage: "Body copy, nav, form labels, supporting sentences",
  },
  /** Micro labels / eyebrows */
  eyebrow: {
    size: "10–11px",
    weight: 600,
    tracking: "0.22–0.34em",
    transform: "uppercase",
    color: "var(--dsp-blue) / rgba(0,212,255,0.82)",
  },
} as const;

export const BRAND_MOTION = {
  heroPhotoDrift: "22s ease-in-out infinite alternate (subtle scale/pan)",
  mediaRingPulse: "5s ease-in-out infinite (cyan ring on media frames)",
  galleryRise: "0.65s ease-out fade + translateY(14px)",
  buttonHover: "scale 1.03; active 0.99; respect prefers-reduced-motion",
} as const;

export const BRAND_SHAPE = {
  /** Primary CTA clip-path — angled athletic polygon */
  buttonClipPath:
    "polygon(8% 0, 100% 0, 100% 72%, 92% 100%, 0 100%, 0 28%)",
  cardClipPath: "polygon(0 0, 100% 3%, 100% 100%, 0 97%)",
  radius: {
    sm: "2–6px (prefer sharp over pill)",
    md: "8–12px",
    avoid: "rounded-full pills except small badges",
  },
} as const;

/** Voice, slogans, and reusable marketing lines */
export const BRAND_VOICE = {
  tone: [
    "Elite but approachable for youth/family audiences",
    "Confident, athletic, pro-standard — never slangy or meme-y",
    "Outcome-forward: speed, strength, agility, confidence, discipline",
    "Proof-backed: NFL / TCU / Combine credibility without bragging fluff",
  ],
  taglines: {
    primary: "Train Like An NFL Athlete",
    supporting:
      "Speed, strength, agility, and confidence training for young athletes ready to level up.",
    footer: "Train with intention. Improve your game.",
    ctaBand: "Start training this season",
    ctaBandSupporting:
      "Elite coaching for athletes who expect more from every rep.",
    metaDescription:
      "Premium speed, strength, agility, and confidence training for youth athletes—led by Sewo Olonilua. Former Dallas Cowboy and TCU standout.",
  },
  hashtagsAndPhrases: [
    "#DawgWork",
    "Dream Chasers Only",
    "Dreamchasers",
  ],
  credibilityChips: [
    "Former Dallas Cowboy",
    "TCU Football",
    "Youth Performance Coach",
  ],
  pillars: [
    {
      title: "Strength",
      description: "Foundational power built for real sport demands.",
    },
    {
      title: "Speed",
      description: "Acceleration and mechanics that transfer to game speed.",
    },
    {
      title: "Agility & Footwork",
      description: "Sharp cuts, reactive movement, and clean foot strike.",
    },
    {
      title: "Confidence",
      description: "Discipline, body control, and a competitive mindset.",
    },
  ],
  programs: [
    {
      title: "1-on-1 Training",
      body: "Personalized coaching for athletes who want focused development.",
    },
    {
      title: "Group Training",
      body: "High-energy sessions for athletes who want to compete and improve together.",
      badge: "Most popular",
    },
    {
      title: "Youth Performance Camps",
      body: "Structured multi-week programs focused on movement, discipline, and confidence.",
    },
    {
      title: "Football Skill Development",
      body: "Position-aware performance training built from Sewo’s playing experience.",
    },
  ],
  primaryCta: "Book a Session",
  secondaryCtas: ["View Programs", "Watch The Journey"],
  do: [
    "Lead with brand name or monogram at hero scale",
    "Use cyan accent sparingly on dark navy/black fields",
    "Keep headlines in Bebas Neue + uppercase",
    "Write short supporting lines; one job per section",
  ],
  dont: [
    "Purple-on-white / cream-terracotta / newspaper layouts",
    "Emoji-heavy UI or soft pastel sports-app tropes",
    "Override brand with generic Inter-only headlines",
    "Flat single-color backgrounds with no atmosphere",
  ],
} as const;

/** SEO / share defaults used by the marketing site */
export const BRAND_META = {
  siteTitle:
    "Dreamchasers Sports Performance | Train With a Former NFL Athlete",
  siteDescription: BRAND_VOICE.taglines.metaDescription,
  ogImageAlt: "Sewo Olonilua — Dreamchasers Sports Performance",
  locale: "en_US",
} as const;
