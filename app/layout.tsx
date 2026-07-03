import type { Metadata } from "next";
import { Inter, Source_Serif_4 } from "next/font/google";
import "./globals.css";

import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";

const ui = Inter({
  subsets: ["latin"],
  variable: "--font-ui",
  display: "swap",
});

const serif = Source_Serif_4({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-serif-display",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://aiow.io"),
  title: {
    default: "AIOW · AI voor het MKB, werkend in 4 tot 6 weken",
    template: "%s | AIOW",
  },
  description:
    "AIOW bouwt AI die vandaag werkt voor Nederlandse MKB-bedrijven: klantintake, planning, kennisbank en leadopvolging. Vaste pilotprijs, live bij echte klanten.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl" data-theme="light" className={`${ui.variable} ${serif.variable}`}>
      <body>
        <SiteNav />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
