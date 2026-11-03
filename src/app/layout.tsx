import type { Metadata, Viewport } from "next";
import "./globals.css";
import { siteConfig } from "@/config/site";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export const viewport: Viewport = {
  themeColor: "#001749",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
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
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen flex flex-col bg-[#F8FAFC] text-slate-800 antialiased selection:bg-[#1E5CD9] selection:text-white">
        <Navbar />
        <main className="flex-1 w-full max-w-full overflow-x-clip">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
