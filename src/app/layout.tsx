import type { Metadata } from "next";
import "./globals.css";

// Placeholder. Replace once the project's name and positioning are confirmed.
export const metadata: Metadata = {
  title: "Untitled site",
  description: "Placeholder metadata — not yet defined for this project.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
