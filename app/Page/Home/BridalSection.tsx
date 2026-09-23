"use client";
import Image from "next/image";
import Link from "next/link";
import { Check, ArrowRight } from "lucide-react";

const bridalFeatures = [
  "Personalized consultation & bridal look trial",
  "HD & airbrush long-wear waterproof complexion",
  "Haute couture hair styling & floral ornamentation",
  "Saree, lehenga & jewelry draping coordination",
  "Complimentary luxury touch-up guidance & kit",
];

export default function BridalSection() {
  return (
    <section
      id="bridal"
      className="relative bg-[#EBE4DA] text-[#120F0C] py-16 sm:py-24 lg:py-36 px-5 sm:px-8 lg:px-16 overflow-hidden max-w-full"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* MOBILE-FIRST: LARGE BRIDAL CAMPAIGN IMAGE (Positioned to frame bride face) */}
          <div className="w-full lg:col-span-6 relative">
            <div className="relative mx-auto max-w-sm sm:max-w-md lg:max-w-lg w-full">
              {/* Outer champagne border (strictly bounded) */}
              <div className="hidden sm:block absolute -top-3 -left-3 w-full h-full border border-[#C4A16A]/50 -z-0" />

              <div className="relative aspect-[4/5] sm:aspect-[3/4] overflow-hidden bg-[#120F0C] shadow-2xl z-10">
                <Image
                  src="/images/_5.jpg"
                  alt="Anjali Makeover Signature Royal Bride"
                  fill
                  className="object-cover object-[center_18%] sm:object-[center_22%] lg:object-center hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 600px"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#120F0C]/75 via-transparent to-transparent opacity-75" />

                {/* Caption overlay */}
                <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6 text-white z-10">
                  <span className="text-[8px] sm:text-[9px] uppercase tracking-[0.3em] text-[#D4B47F]">
                    Campaign 2026
                  </span>
                  <h3 className="text-lg sm:text-xl font-serif italic text-[#F2EDE5]">
                    The Royal Heritage Glow
                  </h3>
                </div>
              </div>
            </div>
          </div>

          {/* EDITORIAL CONTENT & MINIMAL BENEFIT LIST */}
          <div className="w-full lg:col-span-6 space-y-6 sm:space-y-8 pt-2 lg:pt-0">
            <div className="space-y-3 sm:space-y-4">
              <div className="flex items-center space-x-2.5">
                <span className="h-px w-6 sm:w-8 bg-[#C4A16A]" />
                <p className="text-[9.5px] sm:text-[11px] lg:text-xs uppercase tracking-[0.3em] sm:tracking-[0.35em] text-[#A88349] font-sans font-medium">
                  THE BRIDAL EDIT
                </p>
              </div>

              <h2 className="text-3xl xs:text-4xl sm:text-6xl lg:text-7xl font-serif font-light text-[#120F0C] leading-[1.08] tracking-tight">
                A bridal look as <br />
                <span className="italic font-normal text-[#A88349]">unique as you.</span>
              </h2>
            </div>

            <div className="w-12 sm:w-16 h-px bg-[#C4A16A]/60" />

            <p className="text-sm sm:text-base lg:text-lg text-[#4A423A] font-sans font-light leading-relaxed">
              Your wedding is a once-in-a-lifetime symphony of emotion, heritage, and photographic memories. We craft a bespoke bridal look that respects your personal vision, enhances your innate bone structure, and stays immaculate from the dawn pheras to the midnight reception.
            </p>

            {/* TOUCH-FRIENDLY BRIDAL BENEFIT LIST */}
            <div className="space-y-3 pt-1 sm:pt-2">
              {bridalFeatures.map((feature, i) => (
                <div key={i} className="flex items-center space-x-3 text-xs sm:text-sm font-sans text-[#2A241E]">
                  <span className="w-4 h-4 rounded-full bg-[#C4A16A]/20 flex items-center justify-center text-[#A88349] shrink-0">
                    <Check size={11} strokeWidth={2.5} />
                  </span>
                  <span className="tracking-wide">{feature}</span>
                </div>
              ))}
            </div>

            {/* FULL-WIDTH TOUCH CTA ON MOBILE */}
            <div className="pt-4 sm:pt-6">
              <Link
                href="/#booking"
                className="w-full sm:w-auto min-h-[48px] inline-flex items-center justify-center space-x-3 px-8 py-3.5 sm:py-4 bg-[#120F0C] text-[#F2EDE5] text-xs uppercase tracking-[0.25em] font-sans font-medium hover:bg-[#C4A16A] hover:text-[#120F0C] active:bg-[#C4A16A] active:text-[#120F0C] transition-all duration-300 shadow-xl active:scale-[0.98] touch-target"
              >
                <span>ENQUIRE FOR BRIDAL</span>
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
