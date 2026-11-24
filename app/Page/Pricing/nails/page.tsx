import type { Metadata } from "next";
import PricingPage from "../PricingPage";
import JsonLd from "@/components/seo/JsonLd";
import {
  SITE_URL,
  createWebPageSchema,
  createBreadcrumbSchema,
} from "@/lib/seo/schema";

export const metadata: Metadata = {
  title: "Nail Extensions & Bridal Art Rates | Anjali Makeover Khurai",
  description:
    "Sculpted gel extensions, Swarovski bridal nail art, chip-free gel polish, and deluxe spa manicure/pedicure rates in Khurai, Sagar, MP.",
  alternates: {
    canonical: "/Page/Pricing/nails",
  },
};

export default function NailsPricingRoute() {
  const pageUrl = `${SITE_URL}/Page/Pricing/nails`;
  const breadcrumbs = createBreadcrumbSchema([
    { name: "Home", url: `${SITE_URL}/` },
    { name: "Pricing", url: `${SITE_URL}/Page/Pricing` },
    { name: "Nails Artistry", url: pageUrl },
  ]);

  const webPageSchema = createWebPageSchema({
    url: pageUrl,
    name: "Nail Extensions & Bridal Art Rates | Anjali Makeover Khurai",
    description:
      "Sculpted gel extensions, Swarovski bridal nail art, chip-free gel polish, and deluxe spa manicure/pedicure rates in Khurai, Sagar, MP.",
    type: "CollectionPage",
    breadcrumbId: breadcrumbs["@id"],
  });

  return (
    <>
      <JsonLd schema={[webPageSchema, breadcrumbs]} />
      <PricingPage initialCategory="nails" />
    </>
  );
}
