import type { Metadata } from "next";
import About from "./About";
import JsonLd from "@/components/seo/JsonLd";
import {
  SITE_URL,
  BUSINESS_ID,
  createWebPageSchema,
  createBreadcrumbSchema,
} from "@/lib/seo/schema";

export const metadata: Metadata = {
  title: "About Anjali Gour | Certified Bridal Makeup Artist",
  description:
    "Meet Anjali Gour, Lakmé Academy certified professional bridal makeup artist & founder of Anjali Makeover in Khurai, Sagar (Madhya Pradesh). Dedicated to high-definition beauty and timeless bridal grace.",
  alternates: {
    canonical: "/Page/About",
  },
  openGraph: {
    title: "About Anjali Gour | Lakmé Certified Makeup Artist",
    description:
      "Lakmé Academy certified master makeup artist specializing in HD & airbrush bridal couture in Khurai, Sagar, and destination weddings across India.",
    url: `${SITE_URL}/Page/About`,
  },
};

export default function Page() {
  const pageUrl = `${SITE_URL}/Page/About`;
  const breadcrumbs = createBreadcrumbSchema([
    { name: "Home", url: `${SITE_URL}/` },
    { name: "About Studio", url: pageUrl },
  ]);

  const aboutPageSchema = createWebPageSchema({
    url: pageUrl,
    name: "About Anjali Gour | Certified Bridal Makeup Artist | Anjali Makeover",
    description:
      "Meet Anjali Gour, Lakmé Academy certified professional bridal makeup artist & founder of Anjali Makeover in Khurai, Sagar (Madhya Pradesh).",
    type: "AboutPage",
    breadcrumbId: breadcrumbs["@id"],
  });

  const personSchema = {
    "@type": "Person",
    "@id": `${SITE_URL}/#founder`,
    name: "Anjali Gour",
    jobTitle: "Lead Makeup Artist & Founder",
    worksFor: { "@id": BUSINESS_ID },
    description:
      "Lakmé Academy certified professional specializing in high-definition bridal, airbrush complexion, and luxury vanity styling in Khurai, Sagar (MP).",
    image: `${SITE_URL}/anjHome.png`,
    knowsAbout: [
      "Bridal Makeup",
      "Airbrush Makeup",
      "HD Complexion",
      "Haute Hair Styling",
      "Saree & Lehenga Draping",
    ],
  };

  return (
    <>
      <JsonLd schema={[aboutPageSchema, breadcrumbs, personSchema]} />
      <About />
    </>
  );
}
