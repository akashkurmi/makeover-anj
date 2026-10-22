import type { Metadata } from "next";
import PricingPage from "../PricingPage";
import JsonLd from "@/components/seo/JsonLd";
import {
  SITE_URL,
  createWebPageSchema,
  createBreadcrumbSchema,
} from "@/lib/seo/schema";

export const metadata: Metadata = {
  title: "Hairstyling & Hair Artistry Rates in Khurai | Anjali Makeover",
  description:
    "Couture bridal hairstyles, Hollywood waves, floral styling, and restorative hair spa packages at Anjali Makeover studio in Khurai, Sagar, MP.",
  alternates: {
    canonical: "/Page/Pricing/hair",
  },
};

export default function HairPricingRoute() {
  const pageUrl = `${SITE_URL}/Page/Pricing/hair`;
  const breadcrumbs = createBreadcrumbSchema([
    { name: "Home", url: `${SITE_URL}/` },
    { name: "Pricing", url: `${SITE_URL}/Page/Pricing` },
    { name: "Hair Styling", url: pageUrl },
  ]);

  const webPageSchema = createWebPageSchema({
    url: pageUrl,
    name: "Hair Artistry & Styling Rates | Anjali Makeover Khurai",
    description:
      "Couture bridal hairstyles, Hollywood waves, floral styling, and restorative hair spa packages in Khurai, Sagar, MP.",
    type: "CollectionPage",
    breadcrumbId: breadcrumbs["@id"],
  });

  return (
    <>
      <JsonLd schema={[webPageSchema, breadcrumbs]} />
      <PricingPage initialCategory="hair" />
    </>
  );
}
