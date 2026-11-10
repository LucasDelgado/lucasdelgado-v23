import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import type { Metadata, Viewport } from "next";
import { Encode_Sans_SC } from "next/font/google";
import { SiteConfig } from "../site.config";

const siteUrl = "https://www.lucasdelgado.dev";

const font = Encode_Sans_SC({
  display: "swap",
  subsets: ["latin"],
  weight: ["400", "600"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: SiteConfig.metadata.title,
  description: SiteConfig.metadata.description,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    title: SiteConfig.main.title,
    description: SiteConfig.main.description,
    url: siteUrl,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
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
