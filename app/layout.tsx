import type { Metadata } from "next";
import { Bebas_Neue, Inter } from "next/font/google";
import { BRAND_MONOGRAM_SRC } from "@/lib/brand-assets";
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

export const metadata: Metadata = {
  title: "Dreamchasers Sports Performance | Train With a Former NFL Athlete",
  description:
    "Premium speed, strength, agility, and confidence training for youth athletes—led by Sewo Olonilua. Former Dallas Cowboy and TCU standout.",
  icons: {
    icon: [{ url: BRAND_MONOGRAM_SRC, type: "image/png" }],
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
      <body className="min-h-full bg-dsp-bg font-sans text-white">{children}</body>
    </html>
  );
}
