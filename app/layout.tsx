import { Instagram, MessageCircleCode, Youtube } from "lucide-react";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import Script from "next/script"; // Import the Script component
import "./globals.css";
import Footer from "./Page/comp/footer/Footer";

const domain = "https://anjalimakeover.co.in";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
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
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black`}
      >
        {/* Next.js Script component handles the injection order automatically */}
        <Script
          id="schema-markup"
          type="application/ld+json"
          strategy="beforeInteractive"
        >
          {JSON.stringify(jsonLd)}
        </Script>
        <div
          className="fixed top-6 left-1/2 -translate-x-1/2 flex flex-row gap-6 z-50 
                      md:top-8 md:left-8 md:translate-x-0 md:flex-col md:gap-8"
        >
          {/* Instagram */}
          <Link
            href="https://www.instagram.com/anjalimakeover7879/"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative hover:text-pink-500 transition-all hover:-translate-y-1"
          >
            <Instagram size={22} />
            <span
              className="absolute left-1/2 -translate-x-1/2 top-10 md:left-12 md:top-1/2 md:-translate-y-1/2 md:translate-x-0 
                           scale-0 group-hover:scale-100 transition-all duration-200 
                           bg-zinc-800 text-white text-[10px] uppercase tracking-widest px-2 py-1 rounded shadow-xl"
            >
              Instagram
            </span>
          </Link>

          {/* YouTube */}
          <Link
            href="https://www.youtube.com/@anjaligourmakeover"
            className="group relative hover:text-gray-400 transition-all hover:-translate-y-1"
          >
            <Youtube size={22} />
            <span
              className="absolute left-1/2 -translate-x-1/2 top-10 md:left-12 md:top-1/2 md:-translate-y-1/2 md:translate-x-0 
                           scale-0 group-hover:scale-100 transition-all duration-200 
                           bg-zinc-800 text-white text-[10px] uppercase tracking-widest px-2 py-1 rounded shadow-xl"
            >
              YouTube
            </span>
          </Link>

          {/* Threads */}
          <Link
            href="https://www.threads.com/@anjalimakeover7879"
            target="_blank"
            className="group relative hover:text-blue-500 transition-all hover:-translate-y-1"
          >
            <MessageCircleCode size={22} />
            <span
              className="absolute left-1/2 -translate-x-1/2 top-10 md:left-12 md:top-1/2 md:-translate-y-1/2 md:translate-x-0 
                           scale-0 group-hover:scale-100 transition-all duration-200 
                           bg-zinc-800 text-white text-[10px] uppercase tracking-widest px-2 py-1 rounded shadow-xl"
            >
              Threads
            </span>
          </Link>
        </div>

        <main>{children}</main>

        <section className="mt-[5px] p-0 border-t border-zinc-900 bg-zinc-950/50">
          <Footer />
        </section>
      </body>
    </html>
  );
}
