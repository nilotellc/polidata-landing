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
      <head>
        {/* Tally Form Script */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              var d=document,w="https://tally.so/widgets/embed.js",v=function(){"undefined"!=typeof Tally?Tally.loadEmbeds():d.querySelectorAll("iframe[data-tally-src]:not([src])").forEach((function(e){e.src=e.dataset.tallySrc}))};if("undefined"!=typeof Tally)v();else if(d.querySelector('script[src="'+w+'"]')==null){var s=d.createElement("script");s.src=w,s.onload=v,s.onerror=v,d.body.appendChild(s);}
            `,
          }}
        />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
