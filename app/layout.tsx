import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.mfpautogroup.com"),
  title: "MFP Detailing | Premium Auto Detailing in Burlington, ON",
  description: "Top-rated professional auto detailing in Burlington & Hamilton. Specializing in ceramic coating, paint correction, interior deep cleaning, and safe hand washes.",
  keywords: ["car detailing Burlington", "ceramic coating Hamilton", "paint correction Oakville", "auto detailing near me", "hand car wash", "interior detailing"],
  openGraph: {
    title: "MFP Detailing | Premium Auto Detailing in Burlington",
    description: "Expert auto detailing, paint correction, and ceramic coating services in Burlington, Ontario.",
    url: "https://www.mfpautogroup.com",
    siteName: "MFP Detailing",
    locale: "en_CA",
    type: "website",
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Local SEO Schema Markup - Feeds directly to Google Maps algorithm
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoDetailing",
    "name": "MFP Detailing",
    "image": "https://www.mfpautogroup.com/hero-car.jpg",
    "@id": "https://www.mfpautogroup.com",
    "url": "https://www.mfpautogroup.com",
    "telephone": "+13433685033",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "1161 Pettit Rd",
      "addressLocality": "Burlington",
      "addressRegion": "ON",
      "postalCode": "L7P 2K3",
      "addressCountry": "CA"
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      "opens": "09:00",
      "closes": "19:00"
    },
    "priceRange": "$$"
  };

  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}