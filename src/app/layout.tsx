import { ReactNode } from "react";
import type { Metadata, Viewport } from "next";
import Header from "@/ui/header/header";
import Footer from "@/ui/footer/footer";
import { cn } from "@/lib/utils";
import { IS_PRODUCTION, SITE_URL } from "@/config";
import { buildSiteMetadata, buildSiteViewport } from "@/lib/seo/metadata";
import "@/app/globals.css";
import { Plus_Jakarta_Sans } from "next/font/google";

import { ThemeProvider } from "@/components/theme-provider";
import { JsonLd } from "@/components/json-ld";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = buildSiteMetadata({
  siteUrl: SITE_URL,
  isProduction: IS_PRODUCTION,
});

export const viewport: Viewport = buildSiteViewport();

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: Readonly<RootLayoutProps>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn("font-sans", plusJakarta.variable)}
    >
      <body
        suppressHydrationWarning
        className="flex min-h-screen flex-col font-sans antialiased"
      >
        <JsonLd />
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange
        >
          <Header />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
