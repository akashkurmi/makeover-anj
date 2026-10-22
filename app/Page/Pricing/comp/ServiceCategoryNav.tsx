"use client";
import React, { useState, useEffect } from "react";

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

  const tabs: { id: ServiceTab; label: string }[] = [
    { id: "packages", label: "PACKAGES" },
    { id: "makeup", label: "MAKEUP" },
    { id: "hair", label: "HAIR" },
    { id: "skin", label: "SKIN" },
    { id: "nails", label: "NAILS" },
  ];

  return (
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
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => onTabChange(tab.id)}
                className={`flex items-center justify-center py-2 sm:py-3 px-0.5 xs:px-1 sm:px-2 text-[9px] xs:text-[10.5px] sm:text-xs font-sans tracking-[0.06em] xs:tracking-[0.1em] sm:tracking-[0.18em] uppercase transition-all duration-300 border ${
                  isActive
                    ? "border-[#C4A16A] text-[#C4A16A] bg-[#C4A16A]/15 shadow-[0_0_16px_rgba(196,161,106,0.2)] font-semibold"
                    : "border-[#3D342B] text-[#A69C91] bg-[#17120E] hover:border-[#C4A16A]/50 hover:text-[#F2EDE5]"
                }`}
              >
                <span className="truncate">{tab.label}</span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
