import "./globals.css";
import { Analytics } from '@vercel/analytics/react';
import type { Metadata } from "next";
import { Encode_Sans_SC } from "next/font/google";
import { SiteConfig } from "../site.config";

const font = Encode_Sans_SC({
  display: "swap",
  subsets: ["latin"],
  weight: ["400", "600"],
});

export const metadata: Metadata = {
  title: SiteConfig.metadata.title,
  description: SiteConfig.metadata.description,
  viewport: "width=device-width, initial-scale=1",
  openGraph: {
    type: "website",
    title: SiteConfig.main.title,
    description: SiteConfig.main.description,
    url: "https://lucasdelgado.com",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={font.className}>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
