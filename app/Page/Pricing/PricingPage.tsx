"use client";
import React, { useState, Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { ArrowLeft, Calendar } from "lucide-react";
import ServiceCategoryNav, { ServiceTab } from "./comp/ServiceCategoryNav";
import BridalPricingCard from "./comp/BridalPricingCard";
import PremiumPackageCard from "./comp/PremiumPackageCard";
import BookingCTA from "./comp/BookingCTA";
import OtherServicesSection from "./comp/OtherServicesSection";
import {
  individualBridalServices,
  premiumBridalPackages,
} from "./bridalData";
import {
  hairServices,
  skinServices,
  nailServices,
} from "./otherServicesData";

interface PricingPageProps {
  initialCategory?: ServiceTab;
}

function PricingPageContent({ initialCategory = "packages" }: PricingPageProps) {
  const searchParams = useSearchParams();
  const categoryParam = searchParams.get("category") as ServiceTab | null;
  const validParam =
    categoryParam && ["packages", "makeup", "hair", "skin", "nails"].includes(categoryParam)
      ? categoryParam
      : null;

  const [selectedTab, setSelectedTab] = useState<ServiceTab | null>(null);
  const activeTab: ServiceTab = selectedTab ?? validParam ?? initialCategory;

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
    }
  };

  return (
    <div className="bg-[#120F0C] text-[#F2EDE5] min-h-screen selection:bg-[#C4A16A] selection:text-[#120F0C]">
      {/* Top Breadcrumb Bar */}
      <div className="pt-20 sm:pt-24 px-4 sm:px-8 max-w-7xl mx-auto">
        <div className="flex items-center justify-between pb-4">
          <Link
            href="/"
            className="flex items-center gap-1.5 text-xs font-sans text-[#A69C91] hover:text-[#C4A16A] transition-colors py-1 group"
          >
            <ArrowLeft size={14} className="group-hover:-translate-x-0.5 transition-transform" />
            <span className="uppercase tracking-[0.2em] text-[10.5px]">Home</span>
          </Link>

          <button
            onClick={() => scrollToElement("book-bridal")}
            className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full text-[10.5px] uppercase tracking-wider font-sans font-medium bg-[#C4A16A]/15 text-[#C4A16A] border border-[#C4A16A]/40 hover:bg-[#C4A16A] hover:text-[#120F0C] transition-all"
          >
            <Calendar size={12} />
            <span className="hidden xs:inline">Book Date</span>
          </button>
        </div>
      </div>

      {/* Main Container */}
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
