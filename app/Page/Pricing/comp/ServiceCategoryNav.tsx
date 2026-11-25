"use client";
import React, { useState, useEffect } from "react";
import { Sparkles, X } from "lucide-react";

export type ServiceTab = "packages" | "makeup" | "hair" | "skin" | "nails";

interface ServiceCategoryNavProps {
  activeTab: ServiceTab;
  onTabChange: (tab: ServiceTab) => void;
}

export default function ServiceCategoryNav({
  activeTab,
  onTabChange,
}: ServiceCategoryNavProps) {
  const [isVisible, setIsVisible] = useState(true);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<string | null>(null);

  useEffect(() => {
    let lastScrollY = typeof window !== "undefined" ? window.scrollY : 0;

    const handleScroll = () => {
      const currentScrollY = Math.max(0, window.scrollY);
      const diff = currentScrollY - lastScrollY;

      // Keep filter visible near the top of the page
      if (currentScrollY < 140) {
        setIsVisible(true);
      } else if (Math.abs(diff) > 6) {
        // Scrolling DOWN -> hide filter; Scrolling UP -> show filter
        setIsVisible(diff < 0);
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle ESC key and lock body scroll when pop-up is open
  useEffect(() => {
    if (!isPopupOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsPopupOpen(false);
      }
    };

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isPopupOpen]);

  const tabs: { id: ServiceTab; label: string; isUnavailable: boolean }[] = [
    { id: "packages", label: "PACKAGES", isUnavailable: false },
    { id: "makeup", label: "MAKEUP", isUnavailable: false },
    { id: "hair", label: "HAIR", isUnavailable: true },
    { id: "skin", label: "SKIN", isUnavailable: true },
    { id: "nails", label: "NAILS", isUnavailable: true },
  ];

  const handleTabClick = (tab: { id: ServiceTab; label: string; isUnavailable: boolean }) => {
    if (tab.isUnavailable) {
      setSelectedService(tab.label);
      setIsPopupOpen(true);
      return;
    }
    onTabChange(tab.id);
  };

  return (
    <>
      <div
        className={`sticky top-[54px] sm:top-[64px] z-30 bg-[#120F0C]/95 backdrop-blur-md py-2.5 sm:py-3.5 border-b border-[#3D342B]/60 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 mb-8 sm:mb-12 shadow-[0_4px_20px_rgba(0,0,0,0.5)] transition-all duration-300 ease-out ${
          isVisible
            ? "translate-y-0 opacity-100 pointer-events-auto"
            : "-translate-y-full opacity-0 pointer-events-none"
        }`}
      >
        <div className="w-full max-w-lg sm:max-w-2xl mx-auto">
          <div className="grid grid-cols-5 gap-1 xs:gap-1.5 sm:gap-2.5">
            {tabs.map((tab) => {
              const isActive = activeTab === tab.id;
              const isUnavailable = tab.isUnavailable;

              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => handleTabClick(tab)}
                  aria-disabled={isUnavailable ? "true" : undefined}
                  title={
                    isUnavailable
                      ? `${tab.label} (Upcoming soon - Anjali Makeup studio Khurai, MP)`
                      : undefined
                  }
                  className={`flex items-center justify-center py-2 sm:py-3 px-0.5 xs:px-1 sm:px-2 text-[9px] xs:text-[10.5px] sm:text-xs font-sans tracking-[0.06em] xs:tracking-[0.1em] sm:tracking-[0.18em] uppercase transition-all duration-300 border ${
                    isUnavailable
                      ? "border-[#2A231C] text-[#6E645A] bg-[#14100D]/80 opacity-60 hover:opacity-90 hover:border-[#C4A16A]/40 cursor-not-allowed"
                      : isActive
                      ? "border-[#C4A16A] text-[#C4A16A] bg-[#C4A16A]/15 shadow-[0_0_16px_rgba(196,161,106,0.2)] font-semibold"
                      : "border-[#3D342B] text-[#A69C91] bg-[#17120E] hover:border-[#C4A16A]/50 hover:text-[#F2EDE5]"
                  }`}
                >
                  <span className="truncate flex items-center justify-center gap-1">
                    <span>{tab.label}</span>
                    {isUnavailable && (
                      <span className="hidden sm:inline-block text-[8px] tracking-normal text-[#C4A16A]/75 font-normal">
                        (Soon)
                      </span>
                    )}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Upcoming Soon Info Pop-up */}
      {isPopupOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="upcoming-popup-title"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={() => setIsPopupOpen(false)}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-sm rounded-2xl bg-[#1A1410] border border-[#C4A16A]/50 p-6 sm:p-7 text-center shadow-[0_20px_60px_rgba(0,0,0,0.85)] animate-in zoom-in-95 duration-200"
          >
            {/* Top Gold Accent Glow Bar */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-[2px] bg-gradient-to-r from-transparent via-[#C4A16A] to-transparent" />

            {/* Close 'X' Button */}
            <button
              type="button"
              onClick={() => setIsPopupOpen(false)}
              aria-label="Close dialog"
              className="absolute top-3.5 right-3.5 p-1.5 rounded-full text-[#A69C91] hover:text-[#F2EDE5] hover:bg-[#3D342B]/50 transition-colors"
            >
              <X size={16} />
            </button>

            {/* Info Icon with Ambient Glow */}
            <div className="w-12 h-12 rounded-full bg-[#C4A16A]/15 border border-[#C4A16A]/40 text-[#C4A16A] flex items-center justify-center mx-auto mb-3.5 shadow-[0_0_24px_rgba(196,161,106,0.2)]">
              <Sparkles size={22} className="text-[#C4A16A]" />
            </div>

            {/* Highlight Badge */}
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-sans font-semibold uppercase tracking-[0.2em] bg-[#C4A16A]/20 text-[#C4A16A] border border-[#C4A16A]/40 mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C4A16A] animate-pulse" />
              <span>Upcoming Soon</span>
            </div>

            {/* Studio Info Highlight */}
            <div className="space-y-1">
              <h3
                id="upcoming-popup-title"
                className="font-serif text-xl sm:text-2xl text-[#F2EDE5] font-medium leading-snug"
              >
                Anjali Makeup Studio
              </h3>
              <p className="text-xs uppercase tracking-[0.2em] text-[#C4A16A] font-sans font-medium">
                Khurai, MP
              </p>
            </div>

            {/* Info Highlight Box */}
            <div className="mt-4 p-3 rounded-lg bg-[#C4A16A]/10 border border-[#C4A16A]/30 text-center">
              <p className="text-xs font-sans text-[#F2EDE5] font-medium leading-relaxed">
                {selectedService ? `${selectedService} Service` : "This Service"} is{" "}
                <span className="text-[#C4A16A] font-semibold underline decoration-[#C4A16A]/60">
                  Upcoming Soon
                </span>
              </p>
              <p className="text-[11px] text-[#A69C91] font-sans font-light mt-1">
                Currently not available. We will be launching soon at our Khurai studio!
              </p>
            </div>

            <p className="text-xs text-[#A69C91] font-sans font-light mt-3.5 leading-relaxed">
              Bridal &amp; Wedding Makeup packages are open and available for booking.
            </p>

            {/* Action / Dismiss Button */}
            <div className="mt-5">
              <button
                type="button"
                onClick={() => setIsPopupOpen(false)}
                className="w-full py-2.5 px-4 rounded-lg text-xs font-sans font-semibold uppercase tracking-wider bg-[#C4A16A] text-[#120F0C] hover:bg-[#D4B27D] active:scale-[0.98] transition-all shadow-md"
              >
                Got It
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
