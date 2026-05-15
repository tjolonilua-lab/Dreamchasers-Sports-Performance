import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import { Bebas_Neue, Inter } from "next/font/google";
import { InstagramEmbedScript } from "@/components/social/InstagramEmbedScript";
import { BRAND_MONOGRAM_SRC } from "@/lib/brand-assets";
import { getMetadataBase } from "@/lib/site-url";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const display = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-display",
});

const siteTitle =
  "Dreamchasers Sports Performance | Train With a Former NFL Athlete";
const siteDescription =
  "Premium speed, strength, agility, and confidence training for youth athletes—led by Sewo Olonilua. Former Dallas Cowboy and TCU standout.";

const metadataBase = getMetadataBase();

export const metadata: Metadata = {
  metadataBase,
  title: siteTitle,
  description: siteDescription,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: "Dreamchasers Sports Performance",
    title: siteTitle,
    description: siteDescription,
    images: [
      {
        url: "/images/sewo-cowboys-game.png",
        alt: "Sewo Olonilua — Dreamchasers Sports Performance",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    images: ["/images/sewo-cowboys-game.png"],
  },
  // Tab icon: `app/icon.png` (file convention). Apple touch uses the same public asset.
  icons: {
    apple: BRAND_MONOGRAM_SRC,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${display.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full bg-dsp-bg font-sans text-white">
        {children}
        <InstagramEmbedScript />
        <Analytics />
      </body>
    </html>
  );
}
