import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "SchoolFoundry | Complete School Management for Africa",
  description: "The leading School Management System (SMS) for Southern Africa. Works 100% offline for rural schools and offers a powerful cloud roadmap for connected institutions.",
  openGraph: {
    title: "SchoolFoundry | Complete School Management for Africa",
    description: "Move from paper registers to a robust SMS. Works 100% offline with zero internet required.",
    url: "https://schoolfoundry.io/",
    siteName: "SchoolFoundry",
    images: [
      {
        url: "/opengraph.jpg",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SchoolFoundry | Complete School Management for Africa",
    description: "Move from paper registers to a robust SMS. Works 100% offline with zero internet required.",
    images: ["/opengraph.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} antialiased bg-[#07090E] text-foreground font-sans`}
      >
        <TooltipProvider>
          <Navigation />
          <main>{children}</main>
          <Footer />
          <Toaster />
        </TooltipProvider>
      </body>
    </html>
  );
}
