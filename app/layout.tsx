import { Instagram, MessageCircleCode, Youtube } from "lucide-react";
import type { Metadata } from "next";
import { Cormorant_Garamond, Montserrat } from "next/font/google";
import Link from "next/link";
import Script from "next/script";
import "./globals.css";
import Footer from "./Page/comp/footer/Footer";
import MenuBar from "./Page/view/MenuBar/MenuBar";

const domain = "https://anjalimakeover.co.in";

const cormorantGaramond = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Anjali Makeover | Best Bridal Makeup Artist in Bangalore",
  description:
    "Certified Lakmé Academy professional specializing in Bridal, HD, Fashion and Party Makeup transformations.",
  openGraph: {
    title: "Anjali Makeover | Professional Bridal Artistry",
    description:
      "Transforming your special day with flawless HD & Airbrush Makeup. Certified by Lakmé Academy.",
    url: domain,
    siteName: "Anjali Makeover",
    images: [
      {
        url: `${domain}/anjHome.png`, // UPDATED PREVIEW IMAGE
        width: 1200,
        height: 630,
        alt: "Anjali Makeover Signature Look",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    title: "Anjali Makeover | Bridal Makeup Bangalore",
    description:
      "Certified Lakmé Academy professional for your dream bridal look.",
    images: [`${domain}/anjHome.png`], // UPDATED
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BeautySalon",
        "@id": `${domain}/#organization`,
        name: "Anjali Makeover",
        url: domain,
        telephone: "+917879458655",
        image: `${domain}/images/_5.jpg`,
        sameAs: [
          "https://www.instagram.com/anjalimakeover7879/",
          "https://www.youtube.com/@anjaligourmakeover",
          "https://www.threads.net/@anjalimakeover7879",
        ],
        address: {
          "@type": "PostalAddress",
          postalCode: "560036",
          addressLocality: "Bangalore",
          addressRegion: "KA",
          addressCountry: "IN",
        },
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "5",
          reviewCount: "200",
        },
      },
      {
        "@type": "Service",
        serviceType: "Bridal Makeup",
        provider: { "@id": `${domain}/#organization` },
        description:
          "Professional HD and Airbrush bridal makeup services including hairstyling and draping.",
        areaServed: "Bangalore",
      },
      {
        "@type": "Service",
        serviceType: "Party & Event Makeup",
        provider: { "@id": `${domain}/#organization` },
        description:
          "Glamorous party and event makeup for bridesmaids, guests, and special occasions.",
        areaServed: "Bangalore",
      },
    ],
  };

  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${cormorantGaramond.variable} ${montserrat.variable} antialiased bg-[#120F0C] text-[#F2EDE5] font-sans selection:bg-[#C4A16A] selection:text-[#120F0C]`}
      >
        {/* Next.js Script component handles the injection order automatically */}
        <Script
          id="schema-markup"
          type="application/ld+json"
          strategy="beforeInteractive"
        >
          {JSON.stringify(jsonLd)}
        </Script>
        <MenuBar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
