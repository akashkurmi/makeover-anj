import type { Metadata } from "next";
import React from "react";
import PortfolioPage from "./Portflio";
import JsonLd from "@/components/seo/JsonLd";
import {
  SITE_URL,
  createWebPageSchema,
  createBreadcrumbSchema,
} from "@/lib/seo/schema";

export const metadata: Metadata = {
  title: "Our Artistry Portfolio | Real Bridal & Fashion Looks",
  description:
    "Explore curated real bridal makeup transformations, HD reception looks, eye makeup artistry, and haute hair styling by Anjali Makeover in Khurai, Sagar (MP).",
  alternates: {
    canonical: "/Page/Portfolio",
  },
  openGraph: {
    title: "Our Artistry Portfolio | Anjali Makeover Khurai, Sagar",
    description:
      "Signature bridal, engagement, fashion, and party makeup transformations captured on brides and models.",
    url: `${SITE_URL}/Page/Portfolio`,
  },
};

export default function Page() {
  const pageUrl = `${SITE_URL}/Page/Portfolio`;
  const breadcrumbs = createBreadcrumbSchema([
    { name: "Home", url: `${SITE_URL}/` },
    { name: "Artistry Portfolio", url: pageUrl },
  ]);

  const portfolioPageSchema = createWebPageSchema({
    url: pageUrl,
    name: "Our Artistry Portfolio | Bridal & Party Makeup | Anjali Makeover",
    description:
      "Curated gallery of real bridal transformations, HD reception looks, and couture styling by Anjali Makeover in Khurai, Sagar, Madhya Pradesh.",
    type: "CollectionPage",
    breadcrumbId: breadcrumbs["@id"],
  });

  return (
    <>
      <JsonLd schema={[portfolioPageSchema, breadcrumbs]} />
      <PortfolioPage />
    </>
  );
}
