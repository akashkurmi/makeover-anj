import type { Metadata } from "next";
import GayatriCollection from "./GayatriCollectionHome";
import JsonLd from "@/components/seo/JsonLd";
import {
  SITE_URL,
  createWebPageSchema,
  createBreadcrumbSchema,
} from "@/lib/seo/schema";

export const metadata: Metadata = {
  title: "The Gayatri Collection | Designer Bridal Lehengas & Couture",
  description:
    "Discover the Gayatri Collection: bespoke designer bridal lehengas, royal wedding couture, and luxury reception wear curated by Anjali Makeover in Khurai, Sagar (MP).",
  alternates: {
    canonical: "/Page/Gayatri-Collection",
  },
  openGraph: {
    title: "The Gayatri Collection | Bridal Lehengas by Anjali Makeover",
    description:
      "Handcrafted luxury bridal lehengas, reception ensembles, and wedding couture styling.",
    url: `${SITE_URL}/Page/Gayatri-Collection`,
  },
};

export default function Page() {
  const pageUrl = `${SITE_URL}/Page/Gayatri-Collection`;
  const breadcrumbs = createBreadcrumbSchema([
    { name: "Home", url: `${SITE_URL}/` },
    { name: "Gayatri Bridal Collection", url: pageUrl },
  ]);

  const collectionPageSchema = createWebPageSchema({
    url: pageUrl,
    name: "The Gayatri Collection | Designer Bridal Lehengas | Anjali Makeover",
    description:
      "Curated bridal lehenga and couture collection presented by Anjali Makeover for weddings and destination celebrations.",
    type: "CollectionPage",
    breadcrumbId: breadcrumbs["@id"],
  });

  return (
    <>
      <JsonLd schema={[collectionPageSchema, breadcrumbs]} />
      <GayatriCollection />
    </>
  );
}
