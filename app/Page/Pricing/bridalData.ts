export interface IndividualBridalService {
  id: string;
  name: string;
  price: number;
  priceFormatted: string;
  description: string;
  lensAndLashes: string;
  draping: string;
  freeTrial: string;
  nailService: string;
  isPopularOrFeatured?: boolean;
  featureBadge?: string;
  image?: string;
}

export interface BridalPackage {
  id: string;
  number: number;
  title: string;
  isPopular?: boolean;
  popularLabel?: string;
  weddingFunctions: string[];
  complimentaryServices: string[];
  preBridalServices: string[];
  preWeddingMakeup: string;
  originalPrice: number;
  originalPriceFormatted: string;
  packagePrice: number;
  packagePriceFormatted: string;
  savings: number;
  savingsFormatted: string;
}

export const individualBridalServices: IndividualBridalService[] = [
  {
    id: "matte-makeup",
    name: "Matte Makeup",
    price: 7500,
    priceFormatted: "₹7,500",
    description: "Classic velvet matte finish engineered for sebum control, shine-free comfort, and enduring elegance under warm venue lighting.",
    lensAndLashes: "Included",
    draping: "Not specified",
    freeTrial: "Included",
    nailService: "Not specified",
    image: "/highlight/m1.jpg",
  },
  {
    id: "hd-bridal-makeup",
    name: "HD Bridal Makeup",
    price: 8000,
    priceFormatted: "₹8,000",
    description: "High-definition micro-fine pigments crafted for crystal-clear 4K close-up photography and natural skin-texture radiance.",
    lensAndLashes: "Included",
    draping: "Included",
    freeTrial: "Included",
    nailService: "Not specified",
    image: "/images/_5.jpg",
  },
  {
    id: "natural-no-makeup",
    name: "No Makeup / Natural Makeup",
    price: 10000,
    priceFormatted: "₹10,000",
    description: "Sophisticated minimalism that enhances authentic beauty with seamless soft-focus coverage and delicate blush tones.",
    lensAndLashes: "Included",
    draping: "Included",
    freeTrial: "Included",
    nailService: "Gel Polish",
    image: "/images/_3.jpg",
  },
  {
    id: "dewy-radiant-makeup",
    name: "Bridal Dewy / Radiant Makeup",
    price: 12000,
    priceFormatted: "₹12,000",
    description: "Youthful glass-skin luminosity enriched with deep hydration, golden highlights, and multidimensional bridal glow.",
    lensAndLashes: "Included",
    draping: "Included",
    freeTrial: "Included",
    nailService: "Gel Extensions (worth ₹800)",
    image: "/highlight/m2.jpg",
  },
  {
    id: "signature-bridal-makeup",
    name: "Signature Bridal Makeup",
    price: 15000,
    priceFormatted: "₹15,000",
    description: "Our studio's crowning couture look personally designed by Anjali Gour for a regal, unforgettable bridal presence.",
    lensAndLashes: "Included",
    draping: "Included",
    freeTrial: "Included",
    nailService: "Gel Polish",
    isPopularOrFeatured: true,
    featureBadge: "Signature Artistry",
    image: "/images/_1.jpg",
  },
  {
    id: "airbrush-bridal-makeup",
    name: "Airbrush Bridal Makeup",
    price: 16000,
    priceFormatted: "₹16,000",
    description: "Celebrity-grade micro-atomized formula providing 18+ hour waterproof, tear-proof, and humidity-resistant endurance.",
    lensAndLashes: "Included",
    draping: "Included",
    freeTrial: "Included",
    nailService: "Gel Extensions or Gel Polish (worth ₹2,000)",
    isPopularOrFeatured: true,
    featureBadge: "Flawless Airbrush",
    image: "/images/_10.jpg",
  },
];

export const premiumBridalPackages: BridalPackage[] = [
  {
    id: "pkg-1",
    number: 1,
    title: "Haldi + Sangeet + Signature Bridal",
    isPopular: true,
    popularLabel: "Popular Package",
    weddingFunctions: ["Haldi", "Sangeet", "Signature Bridal Makeup"],
    complimentaryServices: [
      "Lens & Lashes",
      "Hairstyle",
      "Styling",
      "Free Demo",
    ],
    preBridalServices: [],
    preWeddingMakeup: "Not specified",
    originalPrice: 19500,
    originalPriceFormatted: "₹19,500",
    packagePrice: 13500,
    packagePriceFormatted: "₹13,500",
    savings: 6000,
    savingsFormatted: "Save ₹6,000",
  },
  {
    id: "pkg-2",
    number: 2,
    title: "Haldi + Sangeet + Mata Pujan + Bridal",
    weddingFunctions: ["Haldi", "Sangeet", "Mata Pujan", "Bridal Makeup"],
    complimentaryServices: [
      "Lens & Lashes",
      "Hairstyle",
      "Styling",
      "Free Demo",
    ],
    preBridalServices: [],
    preWeddingMakeup: "Not specified",
    originalPrice: 21000,
    originalPriceFormatted: "₹21,000",
    packagePrice: 15000,
    packagePriceFormatted: "₹15,000",
    savings: 6000,
    savingsFormatted: "Save ₹6,000",
  },
  {
    id: "pkg-3",
    number: 3,
    title: "Haldi + Mehndi + Mata Pujan + Sangeet + Signature Bridal",
    weddingFunctions: [
      "Haldi",
      "Mehndi",
      "Mata Pujan",
      "Sangeet",
      "Signature Bridal Makeup",
    ],
    complimentaryServices: [
      "Lens & Lashes",
      "Hairstyle",
      "Styling",
      "Free Demo",
    ],
    preBridalServices: [],
    preWeddingMakeup: "Not specified",
    originalPrice: 22500,
    originalPriceFormatted: "₹22,500",
    packagePrice: 16500,
    packagePriceFormatted: "₹16,500",
    savings: 6000,
    savingsFormatted: "Save ₹6,000",
  },
  {
    id: "pkg-4",
    number: 4,
    title: "Haldi + Mehndi + Sangeet + Mata Pujan + Bridal + Pre-Bridal",
    weddingFunctions: [
      "Haldi",
      "Mehndi",
      "Sangeet",
      "Mata Pujan",
      "Bridal Makeup",
      "Pre-Bridal Services",
    ],
    complimentaryServices: [
      "Pre-Wedding Makeup",
      "Lens & Lashes",
      "Hairstyle",
      "Styling",
      "Free Demo",
    ],
    preBridalServices: [
      "O3 Facial × 2 + Bleach",
      "Honey Body Wax",
      "Hair Spa",
    ],
    preWeddingMakeup: "Included",
    originalPrice: 25500,
    originalPriceFormatted: "₹25,500",
    packagePrice: 19500,
    packagePriceFormatted: "₹19,500",
    savings: 6000,
    savingsFormatted: "Save ₹6,000",
  },
  {
    id: "pkg-5",
    number: 5,
    title: "Haldi + Mehndi + Sangeet + Mata Pujan + Bridal + Deluxe Pre-Bridal",
    weddingFunctions: [
      "Haldi",
      "Mehndi",
      "Sangeet",
      "Mata Pujan",
      "Bridal Makeup",
      "Pre-Bridal Services",
    ],
    complimentaryServices: [
      "Pre-Wedding Makeup",
      "Lens & Lashes",
      "Hairstyle",
      "Styling",
      "Free Demo",
    ],
    preBridalServices: [
      "Facial + Bleach",
      "Oil / Rica Body Wax",
      "Hair Spa",
      "Manicure & Pedicure",
    ],
    preWeddingMakeup: "Included",
    originalPrice: 27000,
    originalPriceFormatted: "₹27,000",
    packagePrice: 20000,
    packagePriceFormatted: "₹20,000",
    savings: 7000,
    savingsFormatted: "Save ₹7,000",
  },
];

export const getWhatsAppInquiryUrl = (serviceOrPkgName?: string) => {
  const phone = "917879458655";
  let msg = "Hello Anjali Makeup Studio, I would like to inquire about booking bridal makeup services. Please share availability and details.";
  if (serviceOrPkgName) {
    msg = `Hello Anjali Makeup Studio, I am interested in ${serviceOrPkgName}. Please share availability and booking details.`;
  }
  return `https://wa.me/${phone}?text=${encodeURIComponent(msg)}`;
};
