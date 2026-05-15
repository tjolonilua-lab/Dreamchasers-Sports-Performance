/**
 * Central marketing content & external profiles.
 *
 * Instagram embed posts:
 *   Set `NEXT_PUBLIC_INSTAGRAM_POST_URLS` for extra/manual picks (comma-separated, max 4).
 *   If unset, the site embeds a default flagship post (`DEFAULT_INSTAGRAM_POST_PERMALINKS` in code).
 *
 * YouTube channel browse link:
 *   Defaults to the Sticka4 youth archive. Override with `NEXT_PUBLIC_YOUTUBE_CHANNEL_URL`.
 *
 * Film journey picks:
 *   Curated in `FILM_JOURNEY_VIDEOS`: either a YouTube ID (`watch?v=`) **or** a Hudl embed.
 *   For Hudl, use `hudlEmbedUrl` (iframe `src` from Share → Embed, HTTPS). Optionally set
 *   `hudlPageUrl` for a cleaner “Open on Hudl” link than the embed URL.
 *   Historic youth uploads, including **“Sewo Olonilua #4”**, largely come from **Sticka4**
 *   (`youtube.com/@Sticka4`).
 */

export type AgeBandId = "youth" | "highSchool" | "college" | "pro";

export const instagramUsername = (
  process.env.NEXT_PUBLIC_INSTAGRAM_USERNAME ?? "dcssportsperformance"
).replace(/^@/, "");

export const instagramProfileUrl = `https://www.instagram.com/${instagramUsername}/`;

export const instagramReelsUrl = `https://www.instagram.com/${instagramUsername}/reels/`;

function normalizeInstagramPermalink(url: string): string {
  const trimmed = url.trim();
  try {
    const u = new URL(trimmed);
    if (!u.hostname.endsWith("instagram.com")) {
      return trimmed.split("?")[0]?.split("#")[0] ?? trimmed;
    }
    const path = u.pathname.replace(/\/+$/, "");
    return `${u.origin}${path}/`;
  } catch {
    return trimmed.split("?")[0]?.split("#")[0] ?? trimmed;
  }
}

/** Default embed when no `NEXT_PUBLIC_INSTAGRAM_POST_URLS` (carousel-friendly permalink; embed shows full post). */
const DEFAULT_INSTAGRAM_POST_PERMALINKS = [
  "https://www.instagram.com/p/DF_cqGmOpEA/",
];

export function parseInstagramEmbedUrls(): string[] {
  const raw = process.env.NEXT_PUBLIC_INSTAGRAM_POST_URLS ?? "";
  const fromEnv = raw
    .split(",")
    .map((s) => normalizeInstagramPermalink(s))
    .filter(Boolean)
    .slice(0, 4);
  if (fromEnv.length) return fromEnv;
  return DEFAULT_INSTAGRAM_POST_PERMALINKS.map(normalizeInstagramPermalink);
}

export const youtubeChannelUrl =
  process.env.NEXT_PUBLIC_YOUTUBE_CHANNEL_URL ??
  "https://www.youtube.com/@Sticka4/videos";

export const FILM_JOURNEY_BANDS: {
  id: AgeBandId;
  title: string;
  pitch: string;
}[] = [
  {
    id: "youth",
    title: "Youth & middle school",
    pitch: "Fun, fast movement wins — fundamentals built for younger athletes.",
  },
  {
    id: "highSchool",
    title: "High school",
    pitch: "Explosive speed and confident finishing — game-ready habits.",
  },
  {
    id: "college",
    title: "College film",
    pitch: "Power, patience, and competitive strain against elite defenses.",
  },
  {
    id: "pro",
    title: "Pro journey",
    pitch: "NFL-level execution — training speed and strength at the highest standard.",
  },
];

export type FilmPick =
  | {
      /** YouTube video ID from `youtube.com/watch?v=THIS` */
      youtubeId: string;
      title: string;
      subtitle?: string;
    }
  | {
      /** iframe src from Hudl Share → Embed (must be https://*.hudl.com/...) */
      hudlEmbedUrl: string;
      /** Optional public video URL for “Open on Hudl” (defaults to embed URL). */
      hudlPageUrl?: string;
      title: string;
      subtitle?: string;
    };

/**
 * Curated ladder — youngest Sticka4-era clips through recruiting, TCU, and Cowboys coverage.
 */
export const FILM_JOURNEY_VIDEOS: Record<AgeBandId, FilmPick[]> = {
  youth: [
    {
      youtubeId: "ceSCXfyvC4M",
      title: "Sewo Olonilua #4",
      subtitle: "Opening chapter — grassroots Sewo tape from Sticka4.",
    },
    {
      youtubeId: "CmFHLWAGxMI",
      title: "Sewo Olonilua #4 — 2009",
      subtitle: "Eleven-year-old season highlights.",
    },
    {
      youtubeId: "sDpnf6Bp0rg",
      title: "Sewo Olonilua #4 — 2010",
      subtitle: "Keep stacking reps — youth swagger and explosion.",
    },
    {
      youtubeId: "tNwL3ksEax8",
      title: "Sewo Olonilua #4 — 8th grade",
      subtitle: "Middle-school tempo before the recruiting spotlight.",
    },
    {
      youtubeId: "LkzZofOfGuM",
      title: "Middle school recruiting profile",
      subtitle: "National-scale tape — brand-ready athleticism before varsity.",
    },
  ],
  highSchool: [
    {
      youtubeId: "k9ft_V4kaNY",
      title: "Freshman year highlights",
      subtitle: "Opening high school chapter — early varsity trajectory.",
    },
    {
      hudlEmbedUrl:
        "https://www.hudl.com/embed/video/3/2606556/5721eb9b4df6124b7035406f",
      hudlPageUrl:
        "https://www.hudl.com/video/3/2606556/5721eb9b4df6124b7035406f",
      title: "Junior season — Hudl",
      subtitle: "Varsity junior tape — full highlight reel on Hudl.",
    },
    {
      hudlEmbedUrl:
        "https://www.hudl.com/embed/video/3/2606556/5721c7efbd746d007c66505a",
      hudlPageUrl:
        "https://www.hudl.com/video/3/2606556/5721c7efbd746d007c66505a",
      title: "High school combine — Hudl",
      subtitle: "Testing numbers and movement — recruiting-era combine tape.",
    },
    {
      hudlEmbedUrl:
        "https://www.hudl.com/embed/video/3/2606556/5721e87ddfe23b2d68cc0077",
      hudlPageUrl:
        "https://a.hudl.com/video/3/2606556/5721e87ddfe23b2d68cc0077",
      title: "Senior season — Savage SZN",
      subtitle: "Kingwood High School — senior Hudl highlight reel.",
    },
    {
      youtubeId: "sbSiOoZ66fU",
      title: "High school film",
      subtitle: "More varsity-era highlights from the ladder.",
    },
    {
      youtubeId: "XsWgFPTcjyA",
      title: "Varsity highlights",
      subtitle: "High school ladder — speed and contact balance on tape.",
    },
    {
      youtubeId: "1dsYzZckmag",
      title: "Class of 2016 RB — Humble Kingwood",
      subtitle: "Polished recruiting profile ahead of the TCU leap.",
    },
  ],
  college: [
    {
      youtubeId: "QEMRK16pGC8",
      title: "Versatile — TCU highlights",
      subtitle: "Horned Frogs-era patience and explosion in every phase.",
    },
    {
      youtubeId: "SIW332SOA8c",
      title: "Official TCU highlights",
      subtitle: "Explosive Horned Frogs cut-ups via Andrew LaManna.",
    },
    {
      youtubeId: "905a0Kj4cak",
      title: "TCU RB highlight reel — 2019 season",
      subtitle: "Year-long dominance stitched for Stadium.",
    },
    {
      youtubeId: "LT8gG0gPIPE",
      title: "Top plays through Week 10 (2019)",
      subtitle: "Mid-season momentum snapshot.",
    },
    {
      youtubeId: "OvV0N6Cv9vE",
      title: "Cheez-It Bowl MVP highlights",
      subtitle: "Championship-stage efficiency and finishing.",
    },
    {
      youtubeId: "OizTkrwGYTE",
      title: "Film session — TCU running back",
      subtitle: "Coachable breakdown of RB traits at the college level.",
    },
    {
      youtubeId: "GAheeHgZ4XM",
      title: "Footwork drill session",
      subtitle: "College-era feet and leverage — detail that holds up on Saturdays.",
    },
    {
      youtubeId: "-CXHkAZvDzY",
      title: "College cut-up",
      subtitle: "Horned Frogs ladder — explosion and patience in space.",
    },
  ],
  pro: [
    {
      youtubeId: "59U_m5wRnFo",
      title: "The ‘Wo’ factor lands in Dallas",
      subtitle: "Cowboys-era arrival piece — energy meets NFL expectation.",
    },
    {
      youtubeId: "6LR-UvuK050",
      title: "Earning the Cowboys roster",
      subtitle: "Former TCU tailback grinding through free agency.",
    },
    {
      youtubeId: "9ySTyJN0-Ek",
      title: "Undrafted RB tandem spotlight",
      subtitle: "Alongside Rico Dowdle — blueprint for persistence.",
    },
    {
      youtubeId: "R7fHykrgP6Q",
      title: "Footwork drill mastery",
      subtitle: "Pro-level tempo and detail — combine-training energy.",
    },
    {
      youtubeId: "_2UhH9sxm6Y",
      title: "Pro journey spotlight",
      subtitle: "NFL-phase reps — finishing runs at pro tempo.",
    },
  ],
};
