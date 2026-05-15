/** Sewo notification inbox for leads / scheduling (override via env in deployment). */
export const SEWO_NOTIFICATION_EMAIL =
  process.env.SEWO_NOTIFICATION_EMAIL ?? "solonilua4@gmail.com";

/** Public training line (override via env if needed). */
export const SITE_PHONE_DISPLAY =
  process.env.NEXT_PUBLIC_SITE_PHONE_DISPLAY ?? "(281) 989-9057";

export const SITE_PHONE_TEL =
  process.env.NEXT_PUBLIC_SITE_PHONE_TEL ?? "+12819899057";
