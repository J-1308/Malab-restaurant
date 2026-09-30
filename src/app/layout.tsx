import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";

// OFL fonts, self-hosted (licence alongside the files).
const barlowCondensed = localFont({
  src: [
    { path: "./fonts/barlow-condensed-600.woff2", weight: "600" },
    { path: "./fonts/barlow-condensed-700.woff2", weight: "700" },
    { path: "./fonts/barlow-condensed-800.woff2", weight: "800" },
  ],
  variable: "--font-barlow-condensed",
  display: "swap",
});

const barlow = localFont({
  src: [
    { path: "./fonts/barlow-400.woff2", weight: "400" },
    { path: "./fonts/barlow-500.woff2", weight: "500" },
    { path: "./fonts/barlow-600.woff2", weight: "600" },
  ],
  variable: "--font-barlow",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Malab · Somali food & brunch in West Ealing",
  description:
    "Somali food, brunch from 8am and desserts at 157 Uxbridge Road, West Ealing, London W13.",
  // Concept preview: keep it out of search until the owner approves and it goes live.
  robots: { index: false, follow: false },
};

export const viewport: Viewport = {
  themeColor: "#4b0e13",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en-GB" className={`${barlowCondensed.variable} ${barlow.variable}`}>
      <body>{children}</body>
    </html>
  );
}
