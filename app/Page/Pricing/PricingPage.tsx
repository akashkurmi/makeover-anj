"use client";
import React, { useState, Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { ArrowLeft, ArrowRight, Calendar, MapPin } from "lucide-react";
import { scrollToSection } from "@/lib/scroll";
import priceData from "./priceData.json";
import ServiceCategoryNav, { ServiceTab } from "./comp/ServiceCategoryNav";
import BridalPricingCard from "./comp/BridalPricingCard";
import PremiumPackageCard from "./comp/PremiumPackageCard";
import BookingCTA from "./comp/BookingCTA";
import OtherServicesSection from "./comp/OtherServicesSection";
import {
  individualBridalServices,
  premiumBridalPackages,
  getWhatsAppInquiryUrl,
} from "./bridalData";
import {
  hairServices,
  skinServices,
  nailServices,
} from "./otherServicesData";

export type Location = "Madhya Pradesh" | "Karnataka";

interface PricingPageProps {
  initialCategory?: ServiceTab;
}

function PricingPageContent({ initialCategory = "packages" }: PricingPageProps) {
  const searchParams = useSearchParams();

  // Location handling: default is Madhya Pradesh (Khurai studio)
  const locationParam = searchParams.get("location");
  const initialLocation: Location =
    locationParam && locationParam.toLowerCase() === "karnataka"
      ? "Karnataka"
      : "Madhya Pradesh";

  const [selectedLocation, setSelectedLocation] = useState<Location>(initialLocation);

  const handleLocationChange = (loc: Location) => {
    setSelectedLocation(loc);
    if (typeof window !== "undefined") {
      const url = new URL(window.location.href);
      if (loc === "Karnataka") {
        url.searchParams.set("location", "karnataka");
      } else {
        url.searchParams.delete("location");
      }
      window.history.replaceState({}, "", url.toString());
    }
  };

  // Service category handling for MP view
  const categoryParam = searchParams.get("category") as ServiceTab | null;
  const isAvailable = (c: string | null | undefined): c is "packages" | "makeup" =>
    c === "packages" || c === "makeup";

  const validParam = isAvailable(categoryParam) ? categoryParam : null;
  const safeInitial = isAvailable(initialCategory) ? initialCategory : "packages";

  const [selectedTab, setSelectedTab] = useState<ServiceTab | null>(null);
  const activeTab: ServiceTab = selectedTab ?? validParam ?? safeInitial;

  const handleTabChange = (tab: ServiceTab) => {
    setSelectedTab(tab);
    if (typeof window !== "undefined") {
      const url = new URL(window.location.href);
      url.searchParams.set("category", tab);
      window.history.replaceState({}, "", url.toString());
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const scrollToElement = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      scrollToSection("booking");
    }
  };

  return (
    <div className="bg-[#120F0C] text-[#F2EDE5] min-h-screen selection:bg-[#C4A16A] selection:text-[#120F0C]">
      {/* Top Breadcrumb Bar with Location Option at Right Up Corner */}
      <div className="pt-20 sm:pt-24 px-4 sm:px-8 max-w-7xl mx-auto">
        <div className="flex items-center justify-between gap-3 pb-4">
          <Link
            href="/"
            className="flex items-center gap-1.5 text-xs font-sans text-[#A69C91] hover:text-[#C4A16A] transition-colors py-1 group shrink-0"
          >
            <ArrowLeft size={14} className="group-hover:-translate-x-0.5 transition-transform" />
            <span className="uppercase tracking-[0.2em] text-[10.5px]">Home</span>
          </Link>

          {/* Right Up Corner: Location Option & Booking CTA */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Location Option */}
            <div className="flex items-center gap-1.5 bg-[#1E1813] border border-[#C4A16A]/50 hover:border-[#C4A16A] transition-all rounded-full py-1 px-2.5 sm:px-3 text-xs shadow-md">
              <MapPin size={12} className="text-[#C4A16A] shrink-0" />
              <label
                htmlFor="top-location-select"
                className="text-[10px] uppercase font-sans tracking-wider text-[#A69C91] hidden xs:inline"
              >
                Location:
              </label>
              <select
                id="top-location-select"
                aria-label="Select location"
                value={selectedLocation}
                onChange={(e) => handleLocationChange(e.target.value as Location)}
                className="bg-transparent text-[#F2EDE5] text-[11px] sm:text-xs font-sans font-medium outline-none cursor-pointer pr-1 hover:text-[#C4A16A] transition-colors"
              >
                <option value="Madhya Pradesh" className="bg-[#17120E] text-[#F2EDE5]">
                  Madhya Pradesh
                </option>
                <option value="Karnataka" className="bg-[#17120E] text-[#F2EDE5]">
                  Karnataka
                </option>
              </select>
            </div>

            <button
              onClick={() => scrollToElement("book-bridal")}
              className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full text-[10.5px] uppercase tracking-wider font-sans font-medium bg-[#C4A16A]/15 text-[#C4A16A] border border-[#C4A16A]/40 hover:bg-[#C4A16A] hover:text-[#120F0C] transition-all shrink-0"
            >
              <Calendar size={12} />
              <span className="hidden xs:inline">Book Date</span>
            </button>
          </div>
        </div>
      </div>

      {/* VIEW 1: MADHYA PRADESH (New Packages & Services) */}
      {selectedLocation === "Madhya Pradesh" ? (
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 sm:pt-6 pb-24">
          {/* HERO / PAGE HEADING */}
          <div className="text-center max-w-4xl mx-auto mb-8 sm:mb-12">
            <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-[#F2EDE5] font-normal tracking-tight leading-[1.15]">
              Service Pricing &amp; Packages
            </h1>
          </div>

          {/* SERVICE CATEGORY SWITCHER (Packages, Makeup, Hair, Skin, Nails) */}
          <ServiceCategoryNav activeTab={activeTab} onTabChange={handleTabChange} />

          {/* TAB 1: WEDDING PACKAGES */}
          {activeTab === "packages" && (
            <section id="bridal-packages" className="scroll-mt-24">
              <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10 px-4">
                <span className="text-xs uppercase tracking-[0.25em] text-[#C4A16A] font-sans font-medium">
                  Multi-Function Wedding Curation
                </span>
                <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-[#F2EDE5] mt-2">
                  Premium Wedding Packages
                </h2>
              </div>

              {/* 5 Premium Package Cards Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {premiumBridalPackages.map((pkg) => (
                  <PremiumPackageCard key={pkg.id} pkg={pkg} />
                ))}
              </div>
            </section>
          )}

          {/* TAB 2: BRIDAL & PARTY MAKEUP LOOKS */}
          {activeTab === "makeup" && (
            <section id="individual-services" className="scroll-mt-24">
              <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10 px-4">
                <span className="text-xs uppercase tracking-[0.25em] text-[#C4A16A] font-sans font-medium">
                  Artistry By The Look
                </span>
                <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-[#F2EDE5] mt-2">
                  Bridal Makeup Services
                </h2>
              </div>

              {/* 6 Individual Cards Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
                {individualBridalServices.map((service) => (
                  <BridalPricingCard key={service.id} service={service} />
                ))}
              </div>
            </section>
          )}

          {/* TAB 2: HAIR ARTISTRY & STYLING */}
          {activeTab === "hair" && (
            <OtherServicesSection
              category="hair"
              title="Hair Artistry & Styling Rates"
              items={hairServices}
            />
          )}

          {/* TAB 3: SKIN PREP & FACIALS */}
          {activeTab === "skin" && (
            <OtherServicesSection
              category="skin"
              title="Skin Prep & Pre-Bridal Facials"
              items={skinServices}
            />
          )}

          {/* TAB 4: NAIL EXTENSIONS & ART */}
          {activeTab === "nails" && (
            <OtherServicesSection
              category="nails"
              title="Nail Extensions & Bridal Art"
              items={nailServices}
            />
          )}

          {/* SECTION F: BOOKING AND CONTACT SECTION */}
          <BookingCTA />
        </main>
      ) : (
        /* VIEW 2: KARNATAKA (Older Package & Screen View) */
        <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 sm:pt-6 pb-24">
          {/* Header & Subtitle */}
          <div className="text-center mb-10 sm:mb-14 space-y-3 sm:space-y-4">
            <div className="flex items-center justify-center space-x-2.5">
              <span className="h-px w-5 bg-[#C4A16A]" />
              <p className="text-[9.5px] uppercase tracking-[0.3em] text-[#C4A16A]">
                CURATED SERVICE MENU
              </p>
              <span className="h-px w-5 bg-[#C4A16A]" />
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-light text-[#F2EDE5] tracking-tight">
              Services &amp; Rates
            </h1>
            <p className="text-xs text-[#A69C91] tracking-wider max-w-md mx-auto leading-relaxed font-light">
              Transparent pricing for salon visits and on-location destination bridal services.
            </p>
          </div>

          {/* Rate Menu by Region Selector Bar */}
          <div className="bg-[#1E1813] border border-[#3D342B] p-4 sm:p-6 mb-8 sm:mb-12 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 rounded-xl">
            <div>
              <h2 className="text-xs sm:text-sm uppercase tracking-[0.2em] sm:tracking-[0.25em] text-[#C4A16A] font-medium">
                Rate Menu by Region
              </h2>
              <p className="text-[11px] text-[#A69C91] mt-0.5 font-light">
                Select your wedding region for local itinerary rates
              </p>
            </div>

            <div className="flex items-center space-x-3">
              <span className="text-xs uppercase tracking-widest text-[#A69C91]">
                Location:
              </span>
              <select
                aria-label="Select region"
                value={selectedLocation}
                onChange={(e) => handleLocationChange(e.target.value as Location)}
                className="min-h-[44px] bg-[#120F0C] text-[#C4A16A] text-xs border border-[#3D342B] px-4 py-2 outline-none focus:border-[#C4A16A] transition-all cursor-pointer font-sans rounded-none flex-1 sm:flex-initial"
              >
                <option value="Madhya Pradesh" className="bg-[#120F0C] text-[#F2EDE5]">
                  Madhya Pradesh
                </option>
                <option value="Karnataka" className="bg-[#120F0C] text-[#F2EDE5]">
                  Karnataka
                </option>
              </select>
            </div>
          </div>

          {/* Older Stacked Services List for Karnataka */}
          <div className="space-y-4 sm:space-y-6">
            {priceData.Karnataka.map((service, sIdx) => {
              const whatsappUrl = getWhatsAppInquiryUrl(
                `${service.name} (Karnataka Rate: ₹${service.price})`
              );
              return (
                <div
                  key={sIdx}
                  className="p-5 sm:p-6 bg-[#17120E] border border-[#3D342B]/50 hover:border-[#C4A16A]/50 transition-colors flex flex-col sm:flex-row sm:items-center justify-between gap-4 rounded-lg"
                >
                  <div className="space-y-1 flex-1">
                    <div className="flex items-center space-x-2">
                      <span className="text-[10px] text-[#C4A16A] font-serif italic">
                        0{service.id}
                      </span>
                      <h3 className="text-base sm:text-xl font-serif text-[#F2EDE5]">
                        {service.name}
                      </h3>
                    </div>
                    <p className="text-xs text-[#A69C91] leading-relaxed font-light max-w-lg">
                      {service.details}
                    </p>
                  </div>

                  <div className="flex items-center justify-between sm:justify-end gap-4 pt-3 sm:pt-0 border-t sm:border-t-0 border-[#3D342B]/40">
                    <span className="text-lg sm:text-xl font-serif text-[#C4A16A] tracking-wider font-semibold">
                      ₹{service.price}
                    </span>

                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="min-h-[44px] px-5 py-2.5 text-[10px] uppercase tracking-[0.2em] text-[#120F0C] bg-[#C4A16A] hover:bg-[#D4B47F] active:bg-[#D4B47F] transition-all font-medium shrink-0 flex items-center justify-center rounded-none shadow-md"
                    >
                      Book Look
                    </a>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Note */}
          <p className="text-center text-[#8E8377] text-xs italic font-serif mt-10 sm:mt-12 px-2">
            *Rates exclude travel and accommodation for destination weddings outside city limits. Custom bridal party packages available upon inquiry.
          </p>

          {/* Bottom CTA */}
          <div className="mt-12 sm:mt-16 text-center">
            <Link
              href="/#booking"
              onClick={(e) => scrollToSection("booking", e)}
              className="w-full sm:w-auto min-h-[48px] inline-flex items-center justify-center space-x-3 px-8 py-3.5 sm:py-4 bg-[#C4A16A] text-[#120F0C] text-xs uppercase tracking-[0.3em] font-sans font-medium hover:bg-[#D4B47F] active:bg-[#D4B47F] transition-all shadow-xl"
            >
              <span>RESERVE APPOINTMENT</span>
              <ArrowRight size={14} />
            </Link>
          </div>
        </main>
      )}
    </div>
  );
}

export default function PricingPage({ initialCategory }: PricingPageProps) {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-[#120F0C] flex items-center justify-center">
          <div className="w-8 h-8 rounded-full border-2 border-[#C4A16A] border-t-transparent animate-spin" />
        </div>
      }
    >
      <PricingPageContent initialCategory={initialCategory} />
    </Suspense>
  );
}
