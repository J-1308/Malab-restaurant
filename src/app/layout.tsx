import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";

// OFL fonts, self-hosted (licences alongside the files).
const youngSerif = localFont({
  src: "./fonts/young-serif-400.woff2",
  weight: "400",
  variable: "--font-young-serif",
  display: "swap",
});

const outfit = localFont({
  src: "./fonts/outfit-variable.woff2",
  weight: "100 900",
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Malab · Somali restaurant in West Ealing",
  description:
    "Somali cooking, brunch from 8am and desserts at 157 Uxbridge Road, West Ealing, London W13.",
  // Pitch preview: keep it out of search until the owner approves and it goes live.
  robots: { index: false, follow: false },
};

export const viewport: Viewport = {
  themeColor: "#0e0c0b",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en-GB" className={`${youngSerif.variable} ${outfit.variable}`}>
      <body>{children}</body>
    </html>
  );
}
