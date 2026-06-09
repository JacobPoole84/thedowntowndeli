import type { Metadata } from "next";
import { Cormorant_Garamond, Work_Sans } from "next/font/google";
import "./globals.css";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.thedowntowndeli.com";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const workSans = Work_Sans({
  variable: "--font-work-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "The Downtown Deli - Florence",
    template: "%s | The Downtown Deli - Florence",
  },
  description:
    "Fresh deli food, good portions, and friendly service in Florence, SC.",
  applicationName: "The Downtown Deli - Florence",
  keywords: [
    "The Downtown Deli - Florence",
    "Florence deli",
    "take-out Florence SC",
    "delivery Florence SC",
    "sandwich shop Florence",
    "catering Florence SC",
    "quality deli",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: "/",
    siteName: "The Downtown Deli - Florence",
    title: "The Downtown Deli - Florence",
    description:
      "Fresh deli food, good portions, and friendly service in Florence, SC.",
    locale: "en_US",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "The Downtown Deli - Florence",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Downtown Deli - Florence",
    description:
      "Fresh deli food, good portions, and friendly service in Florence, SC.",
    images: ["/opengraph-image"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  category: "restaurant",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${workSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
