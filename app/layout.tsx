import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AIOW.io - Private AI Solutions & AI Computers",
  description: "Lokale AI-oplossingen en krachtige AI computers voor bedrijven die voorop willen lopen. Privacy, snelheid en volledige controle.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl" className="smooth-scroll">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
