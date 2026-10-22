import type { Metadata } from "next";
import PricingPage from "../PricingPage";
import JsonLd from "@/components/seo/JsonLd";
import {
  SITE_URL,
  createWebPageSchema,
  createBreadcrumbSchema,
} from "@/lib/seo/schema";

export const metadata: Metadata = {
  title: "Skin Prep, Pre-Bridal Facials & Waxing Rates | Anjali Makeover Khurai",
  description:
    "Pre-bridal skincare, O3+ whitening facials, herbal detan, and Italian Rica waxing treatments at Anjali Makeover in Khurai, Sagar, MP.",
  alternates: {
    canonical: "/Page/Pricing/skin",
  },
};

export default function SkinPricingRoute() {
  const pageUrl = `${SITE_URL}/Page/Pricing/skin`;
  const breadcrumbs = createBreadcrumbSchema([
    { name: "Home", url: `${SITE_URL}/` },
    { name: "Pricing", url: `${SITE_URL}/Page/Pricing` },
    { name: "Skin Care", url: pageUrl },
  ]);

  const webPageSchema = createWebPageSchema({
    url: pageUrl,
    name: "Skin Prep & Pre-Bridal Facials Rates | Anjali Makeover Khurai",
    description:
      "Pre-bridal skincare, O3+ whitening facials, herbal detan, and Italian Rica waxing treatments in Khurai, Sagar, MP.",
    type: "CollectionPage",
    breadcrumbId: breadcrumbs["@id"],
  });

  return (
    <>
      <JsonLd schema={[webPageSchema, breadcrumbs]} />
      <PricingPage initialCategory="skin" />
    </>
  );
}
