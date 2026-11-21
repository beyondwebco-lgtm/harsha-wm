import type { Metadata, Viewport } from "next";
import "./globals.css";
import { BUSINESS_DATA } from "@/data/business";

export const viewport: Viewport = {
  themeColor: "#082B59",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: "Harsha Washing Machine Service Centre | Repair in Hyderabad",
  description:
    "Need washing machine repair in Hyderabad? Harsha Washing Machine Service Centre offers doorstep repair for major brands with 8 years of experience. Call 8465801935.",
  keywords: [
    "Washing Machine Repair in Hyderabad",
    "Washing Machine Service Centre Hyderabad",
    "Washing Machine Repair Near Me",
    "Doorstep Washing Machine Repair Hyderabad",
    "Front Load Washing Machine Repair Hyderabad",
    "Top Load Washing Machine Repair Hyderabad",
    "Samsung Washing Machine Repair Hyderabad",
    "LG Washing Machine Repair Hyderabad",
    "IFB Washing Machine Repair Hyderabad",
    "Washing Machine Technician Hyderabad"
  ],
  authors: [{ name: "Harsha Washing Machine Service Centre" }],
  creator: "Harsha Washing Machine Service Centre",
  publisher: "Harsha Washing Machine Service Centre",
  formatDetection: {
    telephone: true,
    address: true,
    email: false,
  },
  openGraph: {
    title: "Harsha Washing Machine Service Centre | Repair in Hyderabad",
    description:
      "Expert doorstep washing machine repair and maintenance across Hyderabad. All brands serviced by technicians with 8+ years experience. Call 8465801935.",
    url: "https://harshawashingmachineservice.in",
    siteName: "Harsha Washing Machine Service Centre",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Harsha Washing Machine Service Centre | Hyderabad",
    description:
      "Reliable doorstep washing machine repairs across Hyderabad. Front load, top load, semi automatic. 8+ years experience. Call 8465801935.",
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    name: BUSINESS_DATA.name,
    image: "https://harshawashingmachineservice.in/images/harsha-poster.jpg",
    telephone: BUSINESS_DATA.phone,
    url: "https://harshawashingmachineservice.in",
    priceRange: "₹350 - ₹600+",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Hyderabad",
      addressRegion: "Telangana",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "17.3850",
      longitude: "78.4867",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: "08:00",
        closes: "21:00",
      },
    ],
    areaServed: {
      "@type": "City",
      name: "Hyderabad",
    },
    sameAs: [BUSINESS_DATA.googleBusinessProfile],
    description:
      "Independent professional washing machine repair and doorstep service provider in Hyderabad with 8+ years experience servicing front-load, top-load, and semi-automatic machines.",
  };

  return (
    <html lang="en" className="h-full antialiased scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-[#F5F9FD] text-[#172B4D] selection:bg-[#FFD600] selection:text-[#082B59]">
        {children}
      </body>
    </html>
  );
}
