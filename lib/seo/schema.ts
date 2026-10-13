/**
 * Centralized Schema.org Structured Data Builders for Anjali Makeover
 * Optimized for Local SEO in Khurai, Sagar, Madhya Pradesh, India
 * Conforms strictly to Schema.org and Google Rich Results Guidelines
 */

export const SITE_URL = "https://anjalimakeover.co.in";
export const BUSINESS_ID = `${SITE_URL}/#business`;
export const WEBSITE_ID = `${SITE_URL}/#website`;

export const BUSINESS_INFO = {
  name: "Anjali Makeover",
  alternateNames: [
    "Anjali Makeup Studio",
    "Anjali Gour Makeover",
    "Anjali Makeover Khurai",
    "Anjali Makeup Studio Khurai",
  ],
  description:
    "Professional bridal, party, and HD makeup studio led by Lakmé Academy certified artist Anjali Gour in Khurai, Sagar, Madhya Pradesh. Specializing in bridal transformations, airbrush makeup, and event hair styling.",
  telephone: "+917879458655",
  email: "anjaligour761@gmail.com",
  founder: "Anjali Gour",
  logo: `${SITE_URL}/anjHome.png`,
  image: `${SITE_URL}/images/_5.jpg`,
  priceRange: "₹1,500 - ₹25,000",
  socialProfiles: [
    "https://www.instagram.com/anjalimakeover7879/",
    "https://www.youtube.com/@anjaligourmakeover",
    "https://www.threads.net/@anjalimakeover7879",
  ],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Khurai",
    addressRegion: "Madhya Pradesh",
    addressCountry: "IN",
  },
  areaServed: [
    {
      "@type": "City",
      name: "Khurai",
    },
    {
      "@type": "AdministrativeArea",
      name: "Sagar",
    },
    {
      "@type": "State",
      name: "Madhya Pradesh",
    },
  ],
};

/**
 * Primary LocalBusiness / BeautySalon Schema
 */
export function createLocalBusinessSchema() {
  return {
    "@type": ["BeautySalon", "ProfessionalService"],
    "@id": BUSINESS_ID,
    name: BUSINESS_INFO.name,
    alternateName: BUSINESS_INFO.alternateNames,
    description: BUSINESS_INFO.description,
    url: `${SITE_URL}/`,
    telephone: BUSINESS_INFO.telephone,
    email: BUSINESS_INFO.email,
    logo: {
      "@type": "ImageObject",
      "@id": `${SITE_URL}/#logo`,
      url: BUSINESS_INFO.logo,
      caption: "Anjali Makeover - Luxury Beauty Studio",
    },
    image: BUSINESS_INFO.image,
    priceRange: BUSINESS_INFO.priceRange,
    address: BUSINESS_INFO.address,
    areaServed: BUSINESS_INFO.areaServed,
    sameAs: BUSINESS_INFO.socialProfiles,
    founder: {
      "@type": "Person",
      name: BUSINESS_INFO.founder,
      jobTitle: "Lead Makeup Artist & Founder",
      description: "Lakmé Academy Certified Professional Makeup Artist",
      knowsAbout: [
        "Bridal Makeup",
        "HD Makeup",
        "Airbrush Makeup",
        "Haute Hair Styling",
        "Saree & Lehenga Draping",
      ],
    },
  };
}

/**
 * WebSite Schema connected to the primary business publisher
 */
export function createWebSiteSchema() {
  return {
    "@type": "WebSite",
    "@id": WEBSITE_ID,
    url: `${SITE_URL}/`,
    name: BUSINESS_INFO.name,
    alternateName: "Anjali Makeup Studio",
    description: BUSINESS_INFO.description,
    inLanguage: "en-IN",
    publisher: {
      "@id": BUSINESS_ID,
    },
  };
}

/**
 * WebPage Schema helper with canonical links to WebSite & LocalBusiness
 */
export function createWebPageSchema({
  url,
  name,
  description,
  type = "WebPage",
  breadcrumbId,
}: {
  url: string;
  name: string;
  description: string;
  type?: "WebPage" | "AboutPage" | "CollectionPage" | "ContactPage";
  breadcrumbId?: string;
}) {
  const schema: any = {
    "@type": type,
    "@id": `${url}#webpage`,
    url,
    name,
    description,
    inLanguage: "en-IN",
    isPartOf: {
      "@id": WEBSITE_ID,
    },
    about: {
      "@id": BUSINESS_ID,
    },
  };

  if (breadcrumbId) {
    schema.breadcrumb = {
      "@id": breadcrumbId,
    };
  }

  return schema;
}

/**
 * BreadcrumbList Schema generator
 */
export function createBreadcrumbSchema(
  items: Array<{ name: string; url: string }>
) {
  const lastItem = items[items.length - 1];
  const listId = `${lastItem.url}#breadcrumb`;

  return {
    "@type": "BreadcrumbList",
    "@id": listId,
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

/**
 * Core Service Schemas supported by the studio in Khurai, Sagar (MP)
 */
export function createCoreServicesSchema() {
  return [
    {
      "@type": "Service",
      "@id": `${SITE_URL}/#service-bridal-makeup`,
      name: "Bridal Makeup",
      serviceType: "Bridal Makeup & Styling",
      description:
        "High-definition and airbrush bridal makeup with traditional and modern artistry, floral hairstyle sculpture, and lehenga/saree draping coordination in Khurai and Sagar.",
      provider: {
        "@id": BUSINESS_ID,
      },
      areaServed: BUSINESS_INFO.areaServed,
      offers: {
        "@type": "Offer",
        priceCurrency: "INR",
        price: "8000",
        description: "Starting from ₹8,000 in Madhya Pradesh (Basic to HD & Airbrush)",
        url: `${SITE_URL}/Page/Pricing`,
      },
    },
    {
      "@type": "Service",
      "@id": `${SITE_URL}/#service-hd-airbrush`,
      name: "HD & Airbrush Bridal Makeup",
      serviceType: "HD & Airbrush Makeup",
      description:
        "Long-wear camera ready 16-hour sweat-proof waterproof airbrush complexion for grand weddings and receptions.",
      provider: {
        "@id": BUSINESS_ID,
      },
      areaServed: BUSINESS_INFO.areaServed,
      offers: {
        "@type": "Offer",
        priceCurrency: "INR",
        price: "15000",
        url: `${SITE_URL}/Page/Pricing`,
      },
    },
    {
      "@type": "Service",
      "@id": `${SITE_URL}/#service-engagement-makeup`,
      name: "Engagement Makeup",
      serviceType: "Engagement & Sangeet Makeup",
      description:
        "Glamorous evening and ring ceremony makeover featuring tailored eye artistry and dewy champagne complexion.",
      provider: {
        "@id": BUSINESS_ID,
      },
      areaServed: BUSINESS_INFO.areaServed,
      offers: {
        "@type": "Offer",
        priceCurrency: "INR",
        price: "3500",
        url: `${SITE_URL}/Page/Pricing`,
      },
    },
    {
      "@type": "Service",
      "@id": `${SITE_URL}/#service-prewedding-makeup`,
      name: "Pre-Wedding Shoot Makeup",
      serviceType: "Pre-Wedding Makeup",
      description:
        "Natural, luminous makeup engineered for outdoor natural sunlight and high-resolution camera lenses.",
      provider: {
        "@id": BUSINESS_ID,
      },
      areaServed: BUSINESS_INFO.areaServed,
      offers: {
        "@type": "Offer",
        priceCurrency: "INR",
        price: "3000",
        url: `${SITE_URL}/Page/Pricing`,
      },
    },
    {
      "@type": "Service",
      "@id": `${SITE_URL}/#service-hair-styling`,
      name: "Haute Hair Styling",
      serviceType: "Bridal & Event Hair Styling",
      description:
        "Haute couture bridal hair architecture, textured Hollywood waves, traditional braids, and fresh floral ornamentation.",
      provider: {
        "@id": BUSINESS_ID,
      },
      areaServed: BUSINESS_INFO.areaServed,
    },
    {
      "@type": "Service",
      "@id": `${SITE_URL}/#service-party-makeup`,
      name: "Party & Reception Makeup",
      serviceType: "Party Makeup",
      description:
        "Subtle, radiant, and elegant makeup transformations for bridesmaids, family members, and party guests.",
      provider: {
        "@id": BUSINESS_ID,
      },
      areaServed: BUSINESS_INFO.areaServed,
      offers: {
        "@type": "Offer",
        priceCurrency: "INR",
        price: "1500",
        url: `${SITE_URL}/Page/Pricing`,
      },
    },
  ];
}
