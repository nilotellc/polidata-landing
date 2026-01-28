import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  title: "PoliData - Track Federal Legislation in Real-Time",
  description: "Stop spending 2 hours every day checking Congress.gov. Get automated bill tracking and alerts starting at $79/month.",
  keywords: ["bill tracking", "legislative tracking", "congress", "advocacy", "government affairs"],
  icons: {
    icon: '/logo.svg',
    shortcut: '/logo.svg',
    apple: '/logo.svg',
  },
  openGraph: {
    title: "PoliData - Track Federal Legislation in Real-Time",
    description: "Automated bill tracking for small advocacy teams. Starting at $79/month.",
    type: "website",
    url: "https://getpolidata.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Google Analytics 4 */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-9LEH2YD3K4"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-9LEH2YD3K4');
          `}
        </Script>
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
