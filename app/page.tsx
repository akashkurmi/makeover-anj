import type { Metadata } from "next";
import Home from "./Page/Home/Home";
import JsonLd from "@/components/seo/JsonLd";
import {
  createWebPageSchema,
  createCoreServicesSchema,
  SITE_URL,
} from "@/lib/seo/schema";

export const metadata: Metadata = {
  title: "Best Bridal Makeup Artist & Studio in Khurai, Sagar | Anjali Makeover",
  description:
    "Certified Lakmé Academy bridal makeup artist & beauty studio in Khurai, Sagar (Madhya Pradesh). Flawless HD & Airbrush bridal makeup, party makeup, engagement looks, and pre-wedding styling.",
  alternates: {
    canonical: "/",
  },
};

export default function Page() {
  const homePageSchema = createWebPageSchema({
    url: `${SITE_URL}/`,
    name: "Best Bridal Makeup Artist & Studio in Khurai, Sagar | Anjali Makeover",
    description:
      "Certified Lakmé Academy bridal makeup artist & beauty studio in Khurai, Sagar (Madhya Pradesh). Flawless HD & Airbrush bridal makeup, party makeup, engagement looks, and pre-wedding styling.",
  });

  const servicesSchema = createCoreServicesSchema();

  return (
    <div className="relative min-h-screen bg-[#120F0C] text-[#F2EDE5] selection:bg-[#C4A16A] selection:text-[#120F0C]">
      <JsonLd schema={[homePageSchema, ...servicesSchema]} />
      <Home />
    </div>
  );
}
