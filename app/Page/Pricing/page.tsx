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
  title: "Services & Rates Menu | Bridal & Party Makeup Packages",
  description:
    "Transparent pricing for bridal makeup (₹8,000+), HD airbrush makeup (₹15,000+), engagement (₹3,500), and party makeup (₹1,500) by Anjali Makeover in Khurai, Sagar & MP.",
  alternates: {
    canonical: "/Page/Pricing",
  },
  openGraph: {
    title: "Services & Rates Menu | Anjali Makeover Khurai, Sagar",
    description:
      "Curated bridal, engagement, and party makeup rate packages for Madhya Pradesh and destination weddings.",
    url: `${SITE_URL}/Page/Pricing`,
  },
};

export default function Page() {
  const pageUrl = `${SITE_URL}/Page/Pricing`;
  const breadcrumbs = createBreadcrumbSchema([
    { name: "Home", url: `${SITE_URL}/` },
    { name: "Services & Rates", url: pageUrl },
  ]);

  const webPageSchema = createWebPageSchema({
    url: pageUrl,
    name: "Services & Rates Menu | Bridal & Party Makeup Packages | Anjali Makeover",
    description:
      "Transparent pricing for bridal makeup, HD airbrush makeup, engagement, party makeup, and pre-wedding packages by Anjali Makeover in Khurai, Sagar, and Madhya Pradesh.",
    type: "CollectionPage",
    breadcrumbId: breadcrumbs["@id"],
  });

  // Service offer catalog with genuine prices from priceData.json (Madhya Pradesh)
  const pricingServiceSchema = {
    "@type": "Service",
    "@id": `${pageUrl}#service-catalog`,
    name: "Anjali Makeover Curated Beauty Services & Rates",
    provider: { "@id": BUSINESS_ID },
    areaServed: BUSINESS_INFO.areaServed,
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Madhya Pradesh Makeup & Bridal Rates",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Basic Makeup",
            description: "Subtle, natural, and radiant makeover in Khurai, Sagar.",
          },
          price: "1500",
          priceCurrency: "INR",
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Pre-wedding Makeup",
            description: "Perfect for camera and outdoor pre-wedding shoots.",
          },
          price: "3000",
          priceCurrency: "INR",
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Engagement Makeup",
            description: "Glamorous evening transformation for ring ceremony and sangeet.",
          },
          price: "3500",
          priceCurrency: "INR",
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Basic Bridal Makeup",
            description: "Traditional bridal elegance and grace with hairstyling and draping.",
          },
          price: "8000",
          priceCurrency: "INR",
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "HD Bridal Makeup",
            description: "High-definition, camera-ready long-lasting bridal finish.",
          },
          price: "15000",
          priceCurrency: "INR",
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Airbrush & Glass Skin Bridal Makeup",
            description: "Celebrity-style waterproof radiant glow for grand weddings.",
          },
          price: "20000",
          priceCurrency: "INR",
        },
      ],
    },
  };

  return (
    <>
      <JsonLd schema={[webPageSchema, breadcrumbs, pricingServiceSchema]} />
      <PricingPage />
    </>
  );
}
