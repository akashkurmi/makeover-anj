import type { Metadata } from "next";
import PricingPage from "./PricingPage";
import JsonLd from "@/components/seo/JsonLd";
import {
  SITE_URL,
  BUSINESS_ID,
  BUSINESS_INFO,
  createWebPageSchema,
  createBreadcrumbSchema,
} from "@/lib/seo/schema";

export const metadata: Metadata = {
  title:
    "Bridal Makeup Pricing & Wedding Packages in Khurai, Sagar | Anjali Makeover",
  description:
    "Explore transparent bridal makeup prices and multi-function wedding packages by Anjali Makeover in Khurai, Sagar, MP. HD Bridal (₹8,000), Airbrush (₹16,000), and complete wedding packages starting at ₹13,500.",
  keywords: [
    "Bridal Makeup in Khurai",
    "Bridal Makeup Artist in Khurai",
    "Bridal Makeup Packages in Khurai",
    "Wedding Makeup Packages in Sagar, Madhya Pradesh",
    "HD Bridal Makeup in Khurai",
    "Airbrush Bridal Makeup in Khurai",
    "Pre-Bridal Services in Khurai",
    "Anjali Makeover Pricing",
  ],
  alternates: {
    canonical: "/Page/Pricing",
  },
  openGraph: {
    title:
      "Bridal Makeup Pricing & Premium Packages | Anjali Makeover Khurai",
    description:
      "Transparent bridal makeup pricing and multi-function wedding packages from ₹7,500 to ₹20,000 with complimentary hairstyling, draping, and pre-bridal care.",
    url: `${SITE_URL}/Page/Pricing`,
    type: "website",
  },
};

export default function Page() {
  const pageUrl = `${SITE_URL}/Page/Pricing`;
  const breadcrumbs = createBreadcrumbSchema([
    { name: "Home", url: `${SITE_URL}/` },
    { name: "Service Pricing & Packages", url: pageUrl },
  ]);

  const webPageSchema = createWebPageSchema({
    url: pageUrl,
    name: "Bridal Makeup Pricing & Wedding Packages | Anjali Makeover Khurai",
    description:
      "Transparent bridal makeup pricing, multi-event wedding packages, HD & Airbrush bridal artistry, and pre-bridal grooming in Khurai, Sagar, Madhya Pradesh.",
    type: "CollectionPage",
    breadcrumbId: breadcrumbs["@id"],
  });

  const bridalServiceCatalogSchema = {
    "@type": "Service",
    "@id": `${pageUrl}#bridal-service-catalog`,
    name: "Bridal Makeup & Multi-Function Wedding Packages",
    provider: { "@id": BUSINESS_ID },
    areaServed: BUSINESS_INFO.areaServed,
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Bridal Makeup Services & Packages in Khurai, Sagar",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Matte Makeup",
            description: "Velvet shine-free finish, lens & lashes, and consultation included.",
          },
          price: "7500",
          priceCurrency: "INR",
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "HD Bridal Makeup",
            description: "High-definition camera-ready bridal makeup with draping, lens & lashes included.",
          },
          price: "8000",
          priceCurrency: "INR",
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "No Makeup / Natural Makeup",
            description: "Natural bridal minimalism with draping, lens & lashes, and gel polish included.",
          },
          price: "10000",
          priceCurrency: "INR",
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Bridal Dewy / Radiant Makeup",
            description: "Radiant glass-skin finish with draping, lens & lashes, and gel extensions included.",
          },
          price: "12000",
          priceCurrency: "INR",
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Signature Bridal Makeup",
            description: "Studio signature bridal look with draping, lens & lashes, and gel polish included.",
          },
          price: "15000",
          priceCurrency: "INR",
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Airbrush Bridal Makeup",
            description: "18+ hour waterproof airbrush makeup with draping, lens & lashes, and gel extensions or gel polish included.",
          },
          price: "16000",
          priceCurrency: "INR",
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Package 1: Haldi + Sangeet + Signature Bridal",
            description: "3-function wedding package with complimentary lens & lashes, hairstyle, styling, and free demo.",
          },
          price: "13500",
          priceCurrency: "INR",
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Package 2: Haldi + Sangeet + Mata Pujan + Bridal",
            description: "4-function wedding package with complimentary lens & lashes, hairstyle, styling, and free demo.",
          },
          price: "15000",
          priceCurrency: "INR",
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Package 3: Haldi + Mehndi + Mata Pujan + Sangeet + Signature Bridal",
            description: "5-function wedding package with complimentary lens & lashes, hairstyle, styling, and free demo.",
          },
          price: "16500",
          priceCurrency: "INR",
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Package 4: Haldi + Mehndi + Sangeet + Mata Pujan + Bridal + Pre-Bridal",
            description: "6-function wedding package including O3 Facial x2 + Bleach, Honey Body Wax, and Hair Spa.",
          },
          price: "19500",
          priceCurrency: "INR",
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Package 5: Haldi + Mehndi + Sangeet + Mata Pujan + Bridal + Pre-Bridal",
            description: "All-inclusive wedding package including Facial + Bleach, Oil/Rica Body Wax, Hair Spa, and Manicure & Pedicure.",
          },
          price: "20000",
          priceCurrency: "INR",
        },
      ],
    },
  };

  return (
    <>
      <JsonLd schema={[webPageSchema, breadcrumbs, bridalServiceCatalogSchema]} />
      <PricingPage initialCategory="packages" />
    </>
  );
}
