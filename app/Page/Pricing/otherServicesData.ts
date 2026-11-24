export interface OtherServiceItem {
  id: string;
  name: string;
  category: "hair" | "skin" | "nails";
  priceFormatted: string;
  duration?: string;
  description: string;
  includes: string[];
}

export const hairServices: OtherServiceItem[] = [
  {
    id: "hair-bridal-styling",
    name: "Bridal Couture Hair Artistry",
    category: "hair",
    priceFormatted: "₹2,500 - ₹4,500",
    duration: "60 - 90 mins",
    description: "Intricate traditional buns, textured braids, or contemporary Hollywood waves styled with floral & jewel accessories.",
    includes: [
      "Floral / Accessory Placement",
      "Heat Protection & Texture Prep",
      "All-day Setting Spray",
      "Dupatta / Veil Pinning Support",
    ],
  },
  {
    id: "hair-party-styling",
    name: "Party & Occasion Hairstyling",
    category: "hair",
    priceFormatted: "₹1,200 - ₹2,000",
    duration: "45 mins",
    description: "Sleek blowouts, voluminous curls, half-up styles, or messy buns for sangeet, cocktail, and wedding guests.",
    includes: [
      "Thermal Styling & Curls",
      "Volume Boost & Shine Mist",
      "Hairpin Placement",
    ],
  },
  {
    id: "hair-luxury-spa",
    name: "Deep Restorative Hair Spa",
    category: "hair",
    priceFormatted: "₹1,500 - ₹2,800",
    duration: "60 mins",
    description: "Nourishing protein treatment with steam infusion and scalp massage to rejuvenate chemically treated or dry hair.",
    includes: [
      "Scalp Cleansing & Exfoliation",
      "Intense Moisture Mask",
      "Steaming & Relaxing Massage",
      "Serum Gloss Finish",
    ],
  },
  {
    id: "hair-smoothening-botox",
    name: "Hair Botox / Keratin Treatment",
    category: "hair",
    priceFormatted: "From ₹4,500",
    duration: "3 - 4 hours",
    description: "Long-lasting frizz reduction, mirror shine, and structural repair for silky, effortlessly manageable hair.",
    includes: [
      "Consultation & Strand Test",
      "Formaldehyde-Safe Application",
      "Blowdry & High-precision Sealing",
      "Post-Care Product Guide",
    ],
  },
];

export const skinServices: OtherServiceItem[] = [
  {
    id: "skin-o3-bridal-facial",
    name: "O3+ Bridal Radiant Whitening & Glow Facial",
    category: "skin",
    priceFormatted: "₹2,500 - ₹4,000",
    duration: "75 mins",
    description: "World-class bridal brightening facial that removes tan, evens skin tone, and creates an illuminated, camera-ready bridal base.",
    includes: [
      "Double Deep Cleansing & Exfoliation",
      "Tan Removal & O3+ Serum Infusion",
      "Lymphatic Drainage Massage",
      "Radiance Peel-Off Rubber Mask",
    ],
  },
  {
    id: "skin-bleach-detan",
    name: "Full Face Detan & Herbal Bleach",
    category: "skin",
    priceFormatted: "₹800 - ₹1,500",
    duration: "35 mins",
    description: "Gentle herbal skin lightening that softens facial hair, removes persistent sun pigmentation, and balances skin brightness.",
    includes: [
      "Pre-bleach soothing lotion",
      "Even application with precision timing",
      "Post-bleach cooling aloe pack",
    ],
  },
  {
    id: "skin-body-waxing",
    name: "Honey / Rica Body Waxing",
    category: "skin",
    priceFormatted: "₹1,200 - ₹2,500",
    duration: "45 - 60 mins",
    description: "Painless Italian Rica or gentle Honey wax that eliminates dead skin cells, prevents ingrowns, and leaves silky smooth skin.",
    includes: [
      "Arms + Legs + Underarms",
      "Pre-wax sanitizing prep",
      "Post-wax soothing Rica oil",
    ],
  },
  {
    id: "skin-pre-bridal-cleanup",
    name: "Hydra Glow Express Skin Cleanup",
    category: "skin",
    priceFormatted: "₹1,200 - ₹1,800",
    duration: "45 mins",
    description: "Deep pore suction, comedone extraction, and high-hydration floral mist to revive tired or polluted skin.",
    includes: [
      "Ultrasonic Pore Cleansing",
      "Steam & Blackhead Extraction",
      "Hydrating Sheet Mask",
    ],
  },
];

export const nailServices: OtherServiceItem[] = [
  {
    id: "nails-gel-extensions",
    name: "Full Set Gel Nail Extensions",
    category: "nails",
    priceFormatted: "₹1,800 - ₹2,800",
    duration: "75 mins",
    description: "Durable, non-damaging sculpted gel extensions tailored to your ideal shape (Almond, Coffin, Square, or Stiletto).",
    includes: [
      "Cuticle Care & Nail Bed Prep",
      "Sculpted Gel Tips Application",
      "Gel Polish Color Coating",
      "UV High-Gloss Top Coat",
    ],
  },
  {
    id: "nails-bridal-nail-art",
    name: "Bridal 3D Nail Art & Chrome Embellishments",
    category: "nails",
    priceFormatted: "₹2,200 - ₹3,500",
    duration: "90 mins",
    description: "Luxurious Swarovski crystals, 3D acrylic roses, french ombre, or mirror chrome accents crafted to match your lehenga.",
    includes: [
      "Custom Lehenga Motif Matching",
      "Precision Hand-painted Accents",
      "Swarovski Crystal Setting",
      "Reinforced Long-wear Sealer",
    ],
  },
  {
    id: "nails-gel-polish",
    name: "Chip-Free Gel Polish On Natural Nails",
    category: "nails",
    priceFormatted: "₹800 - ₹1,200",
    duration: "40 mins",
    description: "Up to 3-week mirror shine with zero chipping, peeling, or fading across a palette of 100+ premium shades.",
    includes: [
      "Dry Manicure & Buffing",
      "Dehydrator & Primer Base",
      "Two Coats Premium Gel Color",
      "LED Cure & Cuticle Oil Massage",
    ],
  },
  {
    id: "nails-deluxe-mani-pedi",
    name: "Deluxe Manicure & Spa Pedicure",
    category: "nails",
    priceFormatted: "₹1,500 - ₹2,500",
    duration: "60 mins",
    description: "Aromatherapy foot soak, callus buffing, exfoliating scrub, and nourishing massage for perfectly pampered hands and feet.",
    includes: [
      "Rose Petal & Sea Salt Soak",
      "Callus Smoothing & Scrub",
      "Moisturizing Cream Massage",
      "Classic Nail Polish / Buff Shine",
    ],
  },
];
