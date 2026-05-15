/**
 * Latest Instagram grid via Meta Graph API (Business / Creator account linked to a Page).
 *
 * Required env (server only — never expose token to the client):
 *   INSTAGRAM_ACCESS_TOKEN — Long-lived Page access token with permissions such as
 *     `instagram_basic`, `pages_read_engagement` (and Page linked to the IG account).
 *   INSTAGRAM_BUSINESS_ACCOUNT_ID — Numeric Instagram Business Account ID
 *     (Graph API → `{page-id}?fields=instagram_business_account`).
 *
 * Optional:
 *   INSTAGRAM_FEED_LIMIT — max posts (default 9).
 *
 * Fallbacks if unset / fetch fails: manual embed URLs (`NEXT_PUBLIC_INSTAGRAM_POST_URLS`)
 * or the setup placeholder in `InstagramTraining`.
 */

export type IgFeedItem = {
  id: string;
  permalink: string;
  imageUrl: string;
  caption: string | null;
  mediaType: string;
};

type GraphChild = {
  media_type?: string;
  media_url?: string;
  thumbnail_url?: string;
};

type GraphMediaNode = {
  id: string;
  caption?: string;
  media_type: string;
  media_url?: string;
  permalink: string;
  thumbnail_url?: string;
  timestamp?: string;
  children?: { data?: GraphChild[] };
};

type GraphMediaResponse = {
  data?: GraphMediaNode[];
  error?: { message?: string };
};

function pickImageUrl(node: GraphMediaNode): string | null {
  const type = node.media_type;
  if (type === "VIDEO") {
    return node.thumbnail_url ?? node.media_url ?? null;
  }
  if (type === "CAROUSEL_ALBUM") {
    const first = node.children?.data?.[0];
    if (!first) return node.thumbnail_url ?? node.media_url ?? null;
    if (first.media_type === "VIDEO") {
      return first.thumbnail_url ?? first.media_url ?? null;
    }
    return first.media_url ?? first.thumbnail_url ?? null;
  }
  return node.media_url ?? node.thumbnail_url ?? null;
}

export async function getInstagramFeed(): Promise<IgFeedItem[] | null> {
  const token = process.env.INSTAGRAM_ACCESS_TOKEN?.trim();
  const igUserId = process.env.INSTAGRAM_BUSINESS_ACCOUNT_ID?.trim();
  if (!token || !igUserId) return null;

  const limit = Math.min(
    Math.max(Number(process.env.INSTAGRAM_FEED_LIMIT) || 9, 1),
    25,
  );

  const fields = [
    "id",
    "caption",
    "media_type",
    "media_url",
    "permalink",
    "thumbnail_url",
    "timestamp",
    "children{media_url,media_type,thumbnail_url}",
  ].join(",");

  const url = new URL(
    `https://graph.facebook.com/v21.0/${encodeURIComponent(igUserId)}/media`,
  );
  url.searchParams.set("fields", fields);
  url.searchParams.set("limit", String(limit));
  url.searchParams.set("access_token", token);

  try {
    const res = await fetch(url.toString(), {
      next: { revalidate: 3600 },
    });

    const json = (await res.json()) as GraphMediaResponse;

    if (!res.ok || json.error) {
      if (process.env.NODE_ENV === "development") {
        console.error(
          "[instagram-feed]",
          json.error?.message ?? res.statusText,
        );
      }
      return null;
    }

    const items: IgFeedItem[] = [];
    for (const node of json.data ?? []) {
      const imageUrl = pickImageUrl(node);
      if (!imageUrl) continue;
      items.push({
        id: node.id,
        permalink: node.permalink,
        imageUrl,
        caption: node.caption?.trim() ? node.caption.trim() : null,
        mediaType: node.media_type,
      });
    }

    return items.length ? items : null;
  } catch (e) {
    if (process.env.NODE_ENV === "development") {
      console.error("[instagram-feed] fetch failed", e);
    }
    return null;
  }
}
