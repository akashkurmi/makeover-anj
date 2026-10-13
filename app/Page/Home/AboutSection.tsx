"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronDown } from "lucide-react";

export default function AboutSection() {
  const [isDescOpen, setIsDescOpen] = useState(false);

  return (
    <section
      id="about"
      className="relative bg-[#F2EDE5] text-[#120F0C] py-16 sm:py-24 lg:py-36 px-5 sm:px-8 lg:px-16 overflow-hidden max-w-full"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* MOBILE: PHOTO SHOWCASED EARLY OR SIDE-BY-SIDE */}
          <div className="w-full lg:col-span-5 relative order-1 lg:order-2">
            <div className="relative mx-auto max-w-sm sm:max-w-md w-full">
              {/* Outer decorative border (kept strictly within bounds) */}
              <div className="hidden sm:block absolute -top-3 -right-3 w-full h-full border border-[#C4A16A]/40 -z-0" />

              {/* Main Image Card */}
              <div className="relative aspect-[4/5] sm:aspect-[3/4] overflow-hidden bg-[#EBE4DA] z-10 shadow-xl">
                <Image
                  src="/anjHome.png"
                  alt="Anjali Gour - Lead Makeup Artist"
                  fill
                  className="object-cover object-top hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 450px"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#120F0C]/70 via-transparent to-transparent opacity-70" />

                <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6 text-white z-10">
                  <p className="text-[8.5px] sm:text-[9px] uppercase tracking-[0.3em] text-[#D4B47F]">
                    Lead Makeup Artist & Founder
                  </p>
                  <p className="text-lg sm:text-xl font-serif italic text-[#F2EDE5]">
                    Anjali Gour
                  </p>
                </div>
              </div>

              {/* Badge */}
              <div className="absolute -bottom-4 -left-3 sm:-bottom-5 sm:-left-5 z-20 bg-[#120F0C] text-[#F2EDE5] px-4 py-3 sm:p-5 shadow-xl border border-[#3D342B]">
                <p className="text-xl sm:text-2xl font-serif italic text-[#C4A16A]">100+</p>
                <p className="text-[7.5px] sm:text-[8px] uppercase tracking-[0.25em] text-[#A69C91]">
                  Bridal Transformations
                </p>
              </div>
            </div>
          </div>

          {/* EDITORIAL COPY */}
          <div className="w-full lg:col-span-7 space-y-6 sm:space-y-8 order-2 lg:order-1 pt-4 lg:pt-0">
            <div className="space-y-3 sm:space-y-4">
              <div className="flex items-center space-x-2.5">
                <span className="h-px w-6 sm:w-8 bg-[#C4A16A]" />
                <span className="text-[9.5px] sm:text-[11px] uppercase tracking-[0.3em] sm:tracking-[0.35em] text-[#A88349] font-medium font-sans">
                  The Anjali Signature
                </span>
              </div>

              {/* Mobile Title with Accordion Toggle Button (Hidden on desktop & tablet) */}
              <div className="w-full">
                <button
                  type="button"
                  onClick={() => setIsDescOpen(!isDescOpen)}
                  className="flex sm:hidden items-center justify-between w-full text-left group py-1 cursor-pointer"
                  aria-expanded={isDescOpen}
                  aria-label={isDescOpen ? "Collapse studio description" : "Expand studio description"}
                >
                  <h2 className="text-3xl xs:text-4xl font-serif font-light text-[#120F0C] leading-[1.08] tracking-tight">
                    Beauty, <br />
                    <span className="italic font-normal text-[#A88349]">elevated.</span>
                  </h2>

                  <span className="w-11 h-11 min-w-[44px] min-h-[44px] rounded-full border border-[#C4A16A]/60 bg-[#EBE4DA] text-[#A88349] group-hover:border-[#C4A16A] group-active:bg-[#C4A16A] group-active:text-[#120F0C] flex items-center justify-center transition-all duration-300 shadow-sm shrink-0 ml-4">
                    <ChevronDown
                      size={20}
                      className={`transition-transform duration-300 ${
                        isDescOpen ? "rotate-180" : ""
                      }`}
                    />
                  </span>
                </button>

                {/* Desktop & Tablet Heading (No accordion button) */}
                <h2 className="hidden sm:block text-5xl md:text-6xl lg:text-7xl font-serif font-light text-[#120F0C] leading-[1.08] tracking-tight">
                  Beauty, <br />
                  <span className="italic font-normal text-[#A88349]">elevated.</span>
                </h2>
              </div>
            </div>

            <div className="w-12 sm:w-16 h-px bg-[#C4A16A]/60" />

            {/* MOBILE DESCRIPTION (CLOSED BY DEFAULT, TOGGLED VIA TITLE ACCORDION BUTTON) */}
            {isDescOpen && (
              <div className="sm:hidden space-y-3 text-[#4A423A] text-xs font-sans font-light leading-relaxed animate-in fade-in duration-300">
                <p>
                  Led by <span className="text-[#120F0C] font-normal">Anjali Gour</span>, a certified Lakmé Academy professional, our studio embraces the philosophy that makeup is an editorial craft—a thoughtful dialogue between facial architecture, natural radiance, and individual spirit.
                </p>
                <p className="text-[11.5px] text-[#6E6459] italic font-serif leading-relaxed border-l-2 border-[#A88349]/50 pl-3">
                  “True beauty never wears a mask; it is an effortless illumination of who you are at your most unforgettable moment.”
                </p>
              </div>
            )}

            {/* DESKTOP & TABLET DESCRIPTION (ALWAYS OPEN) */}
            <div className="hidden sm:block space-y-4 sm:space-y-5 text-[#4A423A] text-sm sm:text-base lg:text-lg font-sans font-light leading-relaxed max-w-xl">
              <p>
                Led by <span className="text-[#120F0C] font-normal">Anjali Gour</span>, a certified Lakmé Academy professional, our studio embraces the philosophy that makeup is an editorial craft—a thoughtful dialogue between facial architecture, natural radiance, and individual spirit.
              </p>
              <p className="text-xs sm:text-sm md:text-base text-[#6E6459] italic font-serif leading-relaxed">
                “True beauty never wears a mask; it is an effortless illumination of who you are at your most unforgettable moment.”
              </p>
            </div>

            {/* EDITORIAL HIGHLIGHTS: 2 columns */}
            <div className="grid grid-cols-2 gap-4 sm:gap-6 pt-4 border-t border-[#3D342B]/15">
              <div className="space-y-0.5">
                <p className="text-xs font-serif italic text-[#A88349]">01 / Artistry</p>
                <h4 className="text-xs sm:text-sm font-sans uppercase tracking-widest text-[#120F0C] font-medium">
                  HD & Airbrush
                </h4>
                <p className="text-[11px] sm:text-xs text-[#6E6459] font-light">
                  Long-wear camera ready complexion
                </p>
              </div>

              <div className="space-y-0.5">
                <p className="text-xs font-serif italic text-[#A88349]">02 / Credential</p>
                <h4 className="text-xs sm:text-sm font-sans uppercase tracking-widest text-[#120F0C] font-medium">
                  Lakmé Certified
                </h4>
                <p className="text-[11px] sm:text-xs text-[#6E6459] font-light">
                  Master academy trained precision
                </p>
              </div>
            </div>

            {/* TOUCH-FRIENDLY ACTIONS */}
            <div className="pt-2 flex flex-wrap items-center gap-4 sm:gap-6">
              <Link
                href="/Page/About"
                className="inline-flex items-center space-x-2 text-xs uppercase tracking-[0.25em] font-medium text-[#120F0C] hover:text-[#A88349] active:text-[#A88349] transition-colors py-2 touch-target"
              >
                <span>Read Full Story</span>
                <ArrowRight size={14} className="text-[#A88349]" />
              </Link>

              <span className="text-[#A69C91] text-xs font-light hidden sm:inline">•</span>

              <Link
                href="/#booking"
                className="text-xs uppercase tracking-[0.25em] font-medium text-[#A88349] hover:text-[#120F0C] active:text-[#120F0C] transition-colors py-2 touch-target"
              >
                Reserve Date →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
