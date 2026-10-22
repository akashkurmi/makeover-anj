import type { Metadata } from "next";
import PricingPage from "../PricingPage";
import JsonLd from "@/components/seo/JsonLd";
import {
  SITE_URL,
  createWebPageSchema,
  createBreadcrumbSchema,
} from "@/lib/seo/schema";

export const metadata: Metadata = {
  title: "Premium Wedding Packages & Multi-Function Bridal Deals | Anjali Makeover",
  description:
    "Curated all-inclusive wedding makeup packages covering Haldi, Mehndi, Sangeet, Mata Pujan, and Signature Bridal makeup with complimentary perks and pre-bridal services in Khurai, Sagar, MP.",
  alternates: {
    canonical: "/Page/Pricing/packages",
  },
};

export default function PackagesPricingRoute() {
  const pageUrl = `${SITE_URL}/Page/Pricing/packages`;
  const breadcrumbs = createBreadcrumbSchema([
    { name: "Home", url: `${SITE_URL}/` },
    { name: "Pricing", url: `${SITE_URL}/Page/Pricing` },
    { name: "Wedding Packages", url: pageUrl },
  ]);

  const webPageSchema = createWebPageSchema({
    url: pageUrl,
    name: "Premium Wedding Packages | Anjali Makeover Khurai",
    description:
      "Curated multi-function wedding makeup packages from ₹13,500 to ₹20,000 with complimentary hairstyling, draping, and pre-bridal grooming in Khurai, Sagar, MP.",
    type: "CollectionPage",
    breadcrumbId: breadcrumbs["@id"],
  });

  return (
    <>
      <JsonLd schema={[webPageSchema, breadcrumbs]} />
      <PricingPage initialCategory="packages" />
    </>
  );
}
