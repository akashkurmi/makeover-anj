import type { Metadata } from "next";
import { Cormorant_Garamond, Montserrat } from "next/font/google";
import "./globals.css";
import Footer from "./Page/comp/footer/Footer";
import MenuBar from "./Page/view/MenuBar/MenuBar";
import JsonLd from "@/components/seo/JsonLd";
import {
  createLocalBusinessSchema,
  createWebSiteSchema,
  SITE_URL,
} from "@/lib/seo/schema";

const cormorantGaramond = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Anjali Makeover | Best Bridal Makeup Artist & Studio in Khurai, Sagar",
    template: "%s | Anjali Makeover",
  },
  description:
    "Certified Lakmé Academy bridal makeup artist & beauty studio in Khurai, Sagar (Madhya Pradesh). Specializing in HD & Airbrush bridal makeup, engagement, party makeup, and destination wedding vanity.",
  keywords: [
    "makeup artist in Khurai",
    "makeup artist Khurai",
    "bridal makeup artist Khurai",
    "bridal makeup Khurai",
    "makeup studio in Khurai",
    "makeup studio Khurai",
    "Anjali Makeover Khurai",
    "Anjali Makeup Studio Khurai",
    "bridal makeup artist in Sagar",
    "makeup artist in Sagar Madhya Pradesh",
    "bridal makeup in Sagar",
    "party makeup in Khurai",
    "engagement makeup in Khurai",
    "wedding makeup in Khurai",
    "pre-wedding makeup in Khurai",
    "hair styling Khurai",
    "beauty and makeup services Khurai",
    "Anjali Gour",
  ],
  authors: [{ name: "Anjali Gour", url: SITE_URL }],
  creator: "Anjali Gour",
  publisher: "Anjali Makeover",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "Anjali Makeover | Best Bridal Makeup Artist in Khurai, Sagar",
    description:
      "Certified Lakmé Academy professional specializing in flawless HD & Airbrush bridal makeup transformations in Khurai, Sagar (MP).",
    url: SITE_URL,
    siteName: "Anjali Makeover",
    images: [
      {
        url: `${SITE_URL}/anjHome.png`,
        width: 1200,
        height: 630,
        alt: "Anjali Makeover - Bridal Makeup Studio Khurai, Sagar",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Anjali Makeover | Bridal Makeup Artist Khurai, Sagar",
    description:
      "Certified Lakmé Academy professional for your dream bridal look in Khurai, Sagar (MP).",
    images: [`${SITE_URL}/anjHome.png`],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Canonical root schemas: LocalBusiness / BeautySalon + WebSite
  const rootSchema = [createLocalBusinessSchema(), createWebSiteSchema()];

  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${cormorantGaramond.variable} ${montserrat.variable} antialiased bg-[#120F0C] text-[#F2EDE5] font-sans selection:bg-[#C4A16A] selection:text-[#120F0C]`}
      >
        <JsonLd schema={rootSchema} />
        <MenuBar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
