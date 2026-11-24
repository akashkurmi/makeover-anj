import React from "react";
import { Check, Clock, MessageCircle } from "lucide-react";
import { OtherServiceItem } from "../otherServicesData";
import { getWhatsAppInquiryUrl } from "../bridalData";

interface OtherServicesSectionProps {
  category?: "hair" | "skin" | "nails";
  title: string;
  items: OtherServiceItem[];
}

export default function OtherServicesSection({
  title,
  items,
}: OtherServicesSectionProps) {
  return (
    <section className="py-6 sm:py-10">
      <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10 px-4">
        <span className="text-xs uppercase tracking-[0.25em] text-[#C4A16A] font-sans font-medium">
          Professional Salon Services
        </span>
        <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-[#F2EDE5] mt-2">
          {title}
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 max-w-5xl mx-auto">
        {items.map((item) => {
          const whatsappUrl = getWhatsAppInquiryUrl(
            `${item.name} (${item.category.toUpperCase()} service)`
          );

          return (
            <div
              key={item.id}
              className="flex flex-col justify-between rounded-xl p-5 sm:p-6 bg-[#1E1813]/90 border border-[#3D342B]/80 hover:border-[#C4A16A]/60 transition-all duration-300 shadow-lg group backdrop-blur-md"
            >
              <div>
                <div className="flex items-start justify-between gap-3 mb-2">
                  <h3 className="font-serif text-lg sm:text-xl font-medium text-[#F2EDE5] group-hover:text-[#C4A16A] transition-colors">
                    {item.name}
                  </h3>
                  {item.duration && (
                    <span className="inline-flex items-center gap-1 text-[11px] font-sans text-[#A69C91] bg-[#120F0C] border border-[#3D342B] px-2 py-0.5 rounded shrink-0">
                      <Clock size={11} className="text-[#C4A16A]" />
                      <span>{item.duration}</span>
                    </span>
                  )}
                </div>

                <p className="text-xs text-[#A69C91] font-sans font-light leading-relaxed mb-4">
                  {item.description}
                </p>

                {/* Price Display */}
                <div className="py-2.5 px-3.5 rounded-lg bg-[#120F0C] border border-[#3D342B]/60 mb-4 flex items-baseline justify-between">
                  <span className="text-[11px] font-sans uppercase tracking-wider text-[#A69C91]">
                    Starting Rate
                  </span>
                  <span className="font-serif text-xl sm:text-2xl font-bold text-[#C4A16A]">
                    {item.priceFormatted}
                  </span>
                </div>

                {/* Inclusions */}
                <div className="space-y-1.5 mb-5">
                  <span className="text-[10.5px] uppercase font-sans tracking-wider text-[#A69C91] block font-medium">
                    What&apos;s Included:
                  </span>
                  <ul className="space-y-1.5 text-xs font-sans text-[#D6CEC4]">
                    {item.includes.map((inc, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <Check size={12} className="text-[#C4A16A] shrink-0 stroke-[2.5]" />
                        <span>{inc}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-md text-xs font-sans font-medium uppercase tracking-wider transition-all duration-300 bg-[#C4A16A]/15 text-[#C4A16A] border border-[#C4A16A]/50 hover:bg-[#C4A16A] hover:text-[#120F0C]"
                >
                  <MessageCircle size={14} />
                  <span>Enquire On WhatsApp</span>
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
