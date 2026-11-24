import React from "react";
import { Check, Gift, Sparkles, MessageCircle, HeartHandshake } from "lucide-react";
import { BridalPackage, getWhatsAppInquiryUrl } from "../bridalData";

interface PremiumPackageCardProps {
  pkg: BridalPackage;
}

export default function PremiumPackageCard({ pkg }: PremiumPackageCardProps) {
  const whatsappUrl = getWhatsAppInquiryUrl(
    `Package ${pkg.number}: ${pkg.title}`
  );

  return (
    <div
      className={`group relative flex flex-col justify-between rounded-xl p-5 sm:p-7 transition-all duration-300 backdrop-blur-md bg-[#1E1813]/90 border ${
        pkg.isPopular
          ? "border-[#C4A16A] shadow-[0_8px_32px_rgba(196,161,106,0.18)]"
          : "border-[#3D342B]/80 hover:border-[#C4A16A]/60 shadow-lg"
      }`}
    >
      {/* Subtle Popular Badge on Package 1 */}
      {pkg.isPopular && (
        <div className="absolute -top-3 left-6 z-10">
          <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-[10px] sm:text-xs font-sans font-semibold uppercase tracking-wider bg-[#C4A16A] text-[#120F0C] shadow-md">
            <Sparkles size={11} className="shrink-0" />
            {pkg.popularLabel || "Popular Package"}
          </span>
        </div>
      )}

      <div>
        {/* Package Header */}
        <div className="flex items-center justify-between gap-3 mb-2">
          <span className="text-[11px] font-sans uppercase tracking-widest text-[#C4A16A] font-medium">
            Package {pkg.number}
          </span>
          <span className="inline-flex items-center gap-1 text-[11px] font-sans font-semibold text-[#4ade80] bg-[#4ade80]/10 px-2 py-0.5 rounded border border-[#4ade80]/20">
            {pkg.savingsFormatted}
          </span>
        </div>

        <h3 className="font-serif text-xl sm:text-2xl font-medium text-[#F2EDE5] group-hover:text-[#C4A16A] transition-colors duration-200 mb-4 leading-snug">
          {pkg.title}
        </h3>

        {/* Pricing & Savings Box */}
        <div className="p-3.5 sm:p-4 rounded-lg bg-[#120F0C]/85 border border-[#3D342B]/60 mb-5">
          <div className="flex items-baseline justify-between gap-2">
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs text-[#8E8377] line-through font-sans">
                  {pkg.originalPriceFormatted}
                </span>
                <span className="text-[10px] uppercase font-sans tracking-wide text-[#A69C91]">
                  Original
                </span>
              </div>
              <div className="font-serif text-2xl sm:text-3xl font-bold text-[#F2EDE5] tracking-tight mt-0.5">
                {pkg.packagePriceFormatted}
              </div>
            </div>
            <div className="text-right">
              <span className="text-[11px] font-sans text-[#A69C91] block">
                All functions included
              </span>
              <span className="text-[11px] font-sans text-[#C4A16A]">
                Single Bride All-Inclusive
              </span>
            </div>
          </div>
        </div>

        {/* Wedding Functions Included */}
        <div className="mb-5">
          <p className="text-[11px] font-sans uppercase tracking-wider text-[#A69C91] font-medium mb-2.5">
            Wedding Functions Covered
          </p>
          <div className="flex flex-wrap gap-1.5">
            {pkg.weddingFunctions.map((fn, idx) => (
              <span
                key={idx}
                className="inline-flex items-center gap-1.5 text-xs font-sans text-[#F2EDE5] bg-[#120F0C] border border-[#3D342B] px-2.5 py-1 rounded-md"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#C4A16A]" />
                {fn}
              </span>
            ))}
          </div>
        </div>

        {/* Complimentary Services */}
        <div className="mb-5 p-3 sm:p-3.5 rounded-lg bg-[#120F0C]/50 border border-[#3D342B]/40">
          <div className="flex items-center gap-1.5 text-[11px] font-sans uppercase tracking-wider text-[#C4A16A] font-medium mb-2">
            <Gift size={13} className="shrink-0" />
            <span>Complimentary Services</span>
          </div>
          <div className="grid grid-cols-2 gap-x-2 gap-y-1.5">
            {pkg.complimentaryServices.map((comp, idx) => (
              <div
                key={idx}
                className="flex items-center gap-1.5 text-xs font-sans text-[#D6CEC4]"
              >
                <Check size={12} className="text-[#C4A16A] shrink-0 stroke-[2.5]" />
                <span className="truncate">{comp}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Pre-Bridal Services (if available in this package) */}
        {pkg.preBridalServices.length > 0 && (
          <div className="mb-6 p-3 sm:p-3.5 rounded-lg bg-[#C4A16A]/5 border border-[#C4A16A]/20">
            <div className="flex items-center gap-1.5 text-[11px] font-sans uppercase tracking-wider text-[#F2EDE5] font-medium mb-2">
              <HeartHandshake size={13} className="text-[#C4A16A] shrink-0" />
              <span>Pre-Bridal Grooming Services</span>
            </div>
            <ul className="space-y-1.5">
              {pkg.preBridalServices.map((service, idx) => (
                <li
                  key={idx}
                  className="flex items-center gap-2 text-xs font-sans text-[#E2DACF]"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C4A16A]" />
                  <span>{service}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* Action CTA Button */}
      <div className="pt-2">
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-md text-xs font-sans font-medium uppercase tracking-wider transition-all duration-300 bg-[#C4A16A] text-[#120F0C] hover:bg-[#D4B27D] active:scale-[0.98] shadow-md hover:shadow-[0_4px_20px_rgba(196,161,106,0.3)]"
        >
          <MessageCircle size={15} />
          <span>Enquire About This Package</span>
        </a>
      </div>
    </div>
  );
}
