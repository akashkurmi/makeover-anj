import React from "react";
import Image from "next/image";
import { Check, Minus, MessageCircle, Sparkles } from "lucide-react";
import { IndividualBridalService, getWhatsAppInquiryUrl } from "../bridalData";

interface BridalPricingCardProps {
  service: IndividualBridalService;
}

export default function BridalPricingCard({ service }: BridalPricingCardProps) {
  const whatsappUrl = getWhatsAppInquiryUrl(service.name);

  const inclusionItems = [
    { label: "Lens & Lashes", value: service.lensAndLashes },
    { label: "Draping", value: service.draping },
    { label: "Free Trial / Consultation", value: service.freeTrial },
    { label: "Nail Service", value: service.nailService },
  ];

  return (
    <div
      className={`group relative flex flex-col justify-between rounded-xl p-5 sm:p-6 transition-all duration-300 backdrop-blur-md bg-[#1E1813]/90 border ${
        service.isPopularOrFeatured
          ? "border-[#C4A16A]/70 shadow-[0_4px_30px_rgba(196,161,106,0.12)] hover:border-[#C4A16A]"
          : "border-[#3D342B]/80 hover:border-[#C4A16A]/50 shadow-lg"
      }`}
    >
      {/* Featured / Signature badge */}
      {service.isPopularOrFeatured && (
        <div className="absolute -top-3 left-6 z-10">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] sm:text-xs font-sans font-semibold uppercase tracking-wider bg-[#C4A16A] text-[#120F0C] shadow-md">
            <Sparkles size={11} className="shrink-0" />
            {service.featureBadge || "Featured Artistry"}
          </span>
        </div>
      )}

      {/* Card Header & Photo */}
      <div>
        <div className="flex items-start justify-between gap-3 mb-4">
          <div>
            <h3 className="font-serif text-lg sm:text-xl font-medium text-[#F2EDE5] group-hover:text-[#C4A16A] transition-colors duration-200">
              {service.name}
            </h3>
            <p className="text-xs text-[#A69C91] font-sans font-light mt-1 line-clamp-2 leading-relaxed">
              {service.description}
            </p>
          </div>
          {service.image && (
            <div className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-lg overflow-hidden shrink-0 border border-[#3D342B]">
              <Image
                src={service.image}
                alt={`${service.name} look by Anjali Makeover Khurai`}
                fill
                sizes="64px"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          )}
        </div>

        {/* Prominent Price */}
        <div className="py-3 px-3.5 rounded-lg bg-[#120F0C]/80 border border-[#3D342B]/60 mb-5 flex items-baseline justify-between">
          <div>
            <span className="text-[11px] font-sans uppercase tracking-wider text-[#A69C91]">
              Package Rate
            </span>
            <div className="font-serif text-2xl sm:text-3xl font-semibold text-[#F2EDE5] tracking-tight text-[#C4A16A]">
              {service.priceFormatted}
            </div>
          </div>
          <span className="text-[11px] font-sans text-[#A69C91]">
            per bride / look
          </span>
        </div>

        {/* Structured Inclusion List */}
        <div className="space-y-2.5 mb-6">
          <p className="text-[11px] font-sans uppercase tracking-wider text-[#A69C91] font-medium">
            Included In This Look
          </p>
          <ul className="space-y-2">
            {inclusionItems.map((item, idx) => {
              const isIncluded =
                item.value.toLowerCase().includes("included") ||
                item.value.toLowerCase().includes("gel") ||
                item.value.toLowerCase().includes("worth");

              return (
                <li
                  key={idx}
                  className="flex items-start justify-between text-xs font-sans gap-2 py-1 border-b border-[#3D342B]/30 last:border-0"
                >
                  <span className="text-[#D6CEC4] font-light">{item.label}</span>
                  <div className="flex items-center gap-1.5 text-right shrink-0">
                    {isIncluded ? (
                      <>
                        <span className="w-4 h-4 rounded-full bg-[#C4A16A]/15 border border-[#C4A16A]/40 flex items-center justify-center shrink-0">
                          <Check size={10} className="text-[#C4A16A] stroke-[2.5]" />
                        </span>
                        <span className="text-[#F2EDE5] font-medium text-[11.5px]">
                          {item.value}
                        </span>
                      </>
                    ) : (
                      <>
                        <Minus size={12} className="text-[#7E7469] shrink-0" />
                        <span className="text-[#8E8377] text-[11.5px]">
                          {item.value}
                        </span>
                      </>
                    )}
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      {/* Action CTA */}
      <div className="pt-2">
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-md text-xs font-sans font-medium uppercase tracking-wider transition-all duration-300 bg-[#C4A16A]/15 text-[#C4A16A] border border-[#C4A16A]/50 hover:bg-[#C4A16A] hover:text-[#120F0C] active:scale-[0.98]"
        >
          <MessageCircle size={14} />
          <span>Enquire Now</span>
        </a>
      </div>
    </div>
  );
}
