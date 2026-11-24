import type { Metadata } from "next";
import PricingPage from "../PricingPage";
import JsonLd from "@/components/seo/JsonLd";
import {
  SITE_URL,
  createWebPageSchema,
  createBreadcrumbSchema,
} from "@/lib/seo/schema";

export const metadata: Metadata = {
  title: "Bridal Makeup Pricing & Wedding Packages in Khurai | Anjali Makeover",
  description:
    "Explore transparent bridal makeup prices and multi-function wedding packages by Anjali Makeover in Khurai, Sagar, MP. HD Bridal (₹8,000), Airbrush (₹16,000), and complete packages from ₹13,500.",
  alternates: {
    canonical: "/Page/Pricing/makeup",
  },
};

export default function MakeupPricingRoute() {
  const pageUrl = `${SITE_URL}/Page/Pricing/makeup`;
  const breadcrumbs = createBreadcrumbSchema([
    { name: "Home", url: `${SITE_URL}/` },
    { name: "Pricing", url: `${SITE_URL}/Page/Pricing` },
    { name: "Bridal Makeup", url: pageUrl },
  ]);

  const webPageSchema = createWebPageSchema({
    url: pageUrl,
    name: "Bridal Makeup Pricing & Wedding Packages | Anjali Makeover Khurai",
    description:
      "Explore transparent bridal makeup prices and multi-function wedding packages by Anjali Makeover in Khurai, Sagar, MP.",
    type: "CollectionPage",
    breadcrumbId: breadcrumbs["@id"],
  });

  return (
    <>
      <JsonLd schema={[webPageSchema, breadcrumbs]} />
      <PricingPage initialCategory="makeup" />
    </>
  );
}
