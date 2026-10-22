import React from "react";
import { MessageCircle, Phone, Instagram, Globe, MapPin, Sparkles } from "lucide-react";
import { getWhatsAppInquiryUrl } from "../bridalData";

export default function BookingCTA() {
  const defaultWhatsAppUrl = getWhatsAppInquiryUrl();
  const phoneCallUrl = "tel:+917879458655";
  const instagramUrl = "https://www.instagram.com/anjalimakeover7879/";
  const websiteUrl = "https://anjalimakeover.co.in";

  return (
    <section id="book-bridal" className="py-14 sm:py-20 relative overflow-hidden">
      {/* Subtle ambient glow behind */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#C4A16A]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-4xl mx-auto rounded-2xl bg-gradient-to-b from-[#1E1813] to-[#120F0C] border border-[#C4A16A]/40 p-6 sm:p-10 md:p-12 text-center shadow-[0_10px_50px_rgba(0,0,0,0.5)]">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-sans font-medium uppercase tracking-widest text-[#C4A16A] bg-[#C4A16A]/10 border border-[#C4A16A]/30 mb-4">
          <Sparkles size={12} />
          <span>Exclusive Wedding Bookings</span>
        </div>

        <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-[#F2EDE5] font-normal tracking-tight mb-8">
          Let&apos;s Plan Your Bridal Look
        </h2>

        {/* Primary Contact CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 max-w-md mx-auto mb-10">
          <a
            href={defaultWhatsAppUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto flex-1 flex items-center justify-center gap-2.5 py-3.5 px-6 rounded-md text-xs sm:text-sm font-sans font-semibold uppercase tracking-wider bg-[#25D366] text-white hover:bg-[#20ba59] transition-all duration-300 shadow-[0_4px_20px_rgba(37,211,102,0.3)] active:scale-[0.98]"
          >
            <MessageCircle size={18} />
            <span>Book on WhatsApp</span>
          </a>

          <a
            href={phoneCallUrl}
            className="w-full sm:w-auto flex-1 flex items-center justify-center gap-2.5 py-3.5 px-6 rounded-md text-xs sm:text-sm font-sans font-medium uppercase tracking-wider bg-[#C4A16A] text-[#120F0C] hover:bg-[#D4B27D] transition-all duration-300 active:scale-[0.98] shadow-md"
          >
            <Phone size={16} />
            <span>Call Now</span>
          </a>
        </div>

        {/* Studio Info & Links Grid */}
        <div className="pt-8 border-t border-[#3D342B]/80 grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs font-sans text-[#A69C91]">
          {/* Location */}
          <div className="flex items-center justify-center gap-2 p-2.5 rounded-lg bg-[#120F0C]/60 border border-[#3D342B]/50">
            <MapPin size={15} className="text-[#C4A16A] shrink-0" />
            <div className="text-left">
              <span className="block text-[10px] uppercase tracking-wider text-[#7E7469]">
                Studio Location
              </span>
              <span className="text-[#F2EDE5] font-medium">
                Khurai, Sagar, MP
              </span>
            </div>
          </div>

          {/* Instagram */}
          <a
            href={instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 p-2.5 rounded-lg bg-[#120F0C]/60 border border-[#3D342B]/50 hover:border-[#C4A16A]/50 transition-colors group"
          >
            <Instagram size={15} className="text-[#C4A16A] group-hover:scale-110 transition-transform" />
            <div className="text-left">
              <span className="block text-[10px] uppercase tracking-wider text-[#7E7469]">
                Instagram
              </span>
              <span className="text-[#F2EDE5] font-medium group-hover:text-[#C4A16A] transition-colors">
                @anjalimakeover7879
              </span>
            </div>
          </a>

          {/* Website */}
          <a
            href={websiteUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 p-2.5 rounded-lg bg-[#120F0C]/60 border border-[#3D342B]/50 hover:border-[#C4A16A]/50 transition-colors group"
          >
            <Globe size={15} className="text-[#C4A16A] group-hover:scale-110 transition-transform" />
            <div className="text-left">
              <span className="block text-[10px] uppercase tracking-wider text-[#7E7469]">
                Official Website
              </span>
              <span className="text-[#F2EDE5] font-medium group-hover:text-[#C4A16A] transition-colors">
                anjalimakeover.co.in
              </span>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
