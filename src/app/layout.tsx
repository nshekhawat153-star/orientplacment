import type { Metadata, Viewport } from "next";
import { Instrument_Serif, Inter_Tight, Fraunces, Inter } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/config/site";

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-instrument-serif",
  display: "swap",
});

const interTight = Inter_Tight({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-inter-tight",
  display: "swap",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-fraunces",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#040D21",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: `${siteConfig.name} — ${siteConfig.tagline}`,
  description: siteConfig.description,
  keywords: [
    "executive search firm",
    "legal recruitment agency",
    "healthcare staffing",
    "technology recruiting",
    "accounting and finance staffing",
    "headhunting firms NYC NJ",
    "construction recruiting",
    "contingency search firm",
    "Orion Placement",
    "Justin Sofman",
    "Jon Missirlian",
  ],
  authors: [{ name: "Orion Placement LLC" }],
  openGraph: {
    title: `${siteConfig.name} — ${siteConfig.tagline}`,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    locale: "en_US",
    type: "website",
  },
  icons: {
    icon: "/images/orion-logo.png",
    apple: "/images/orion-logo.png",
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
      className={`scroll-smooth ${fraunces.variable} ${inter.variable} ${instrumentSerif.variable} ${interTight.variable}`}
    >
      <body className="min-h-screen flex flex-col bg-[#FAFBFD] text-slate-800 antialiased selection:bg-[#00D2FF] selection:text-[#040D21] font-sans">
        {children}
      </body>
    </html>
  );
}
