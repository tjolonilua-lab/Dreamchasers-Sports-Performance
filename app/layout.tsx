import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import { Bebas_Neue, Inter } from "next/font/google";
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
  "Dreamchasers Sports Performance | Football Training Houston";
const siteDescription =
  "Youth football training, speed training, and sports performance in the Houston / Kingwood area — led by former NFL running back and TCU standout Sewo Olonilua. Book training, camps, 7v7, and recruiting support.";

const metadataBase = getMetadataBase();

export const metadata: Metadata = {
  metadataBase,
  title: {
    default: siteTitle,
    template: "%s | Dreamchasers Sports Performance",
  },
  description: siteDescription,
  keywords: [
    "football training Houston",
    "youth football training Houston",
    "speed training Houston",
    "sports performance Houston",
    "football camps Houston",
    "7v7 football Houston",
    "football recruiting Houston",
    "Sewo Olonilua",
    "Dreamchasers Sports Performance",
    "Kingwood football training",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
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
  icons: {
    icon: [{ url: BRAND_MONOGRAM_SRC, type: "image/png" }],
    apple: [{ url: BRAND_MONOGRAM_SRC, type: "image/png", sizes: "180x180" }],
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
        <Analytics />
      </body>
    </html>
  );
}
