import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "PoliData - Track Federal Legislation in Real-Time",
  description: "Stop spending 2 hours every day checking Congress.gov. Get automated bill tracking and alerts for $100/month.",
  keywords: ["bill tracking", "legislative tracking", "congress", "advocacy", "government affairs"],
  icons: {
    icon: '/logo.svg',
    shortcut: '/logo.svg',
    apple: '/logo.svg',
  },
  openGraph: {
    title: "PoliData - Track Federal Legislation in Real-Time",
    description: "Automated bill tracking for small advocacy teams. $100/month.",
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
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
