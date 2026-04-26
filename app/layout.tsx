import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "CheapestWayTo - Compare the Cheapest Ways to Do Almost Anything",
    template: "%s | CheapestWayTo"
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  robots: {
    index: true,
    follow: true
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <div className="root min-h-screen bg-white">
          <SiteHeader />
          {children}
          <SiteFooter />
        </div>
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-YPVSBBEDH2"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-YPVSBBEDH2');
          `}
        </Script>
      </body>
    </html>
  );
}
