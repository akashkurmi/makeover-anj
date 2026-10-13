"use client";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const services = [
  {
    id: "services-makeup",
    title: "Makeup",
    image: "/service/makeup.jpg",
    href: "/Page/Pricing",
  },
  {
    id: "services-hair",
    title: "Hair",
    image: "/service/hair.jpg",
    href: "/Page/Pricing",
  },
  {
    id: "services-skin",
    title: "Skin",
    image: "/service/skin.jpg",
    href: "/Page/Pricing",
  },
  {
    id: "services-nails",
    title: "Nails",
    image: "/service/nails.jpg",
    href: "/Page/Pricing",
  },
];

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="bg-[#120F0C] text-[#F2EDE5] py-10 sm:py-14 lg:py-16 px-4 sm:px-8 lg:px-12 border-b border-[#3D342B]/60 max-w-full overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        {/* SECTION HEADER */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-6 sm:mb-8 lg:mb-10 gap-3 sm:gap-6">
          <div className="space-y-1.5 sm:space-y-2.5">
            <div className="flex items-center space-x-2.5">
              <span className="h-px w-5 sm:w-7 bg-[#C4A16A]" />
              <p className="text-[9px] sm:text-[10px] lg:text-[11px] uppercase tracking-[0.3em] sm:tracking-[0.35em] text-[#C4A16A] font-sans font-medium">
                OUR SERVICES
              </p>
            </div>

            <h2 className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-serif font-light text-[#F2EDE5] leading-[1.1] tracking-tight">
              Designed for{" "}
              <span className="italic font-normal text-[#C4A16A]">your moment.</span>
            </h2>
          </div>

          <div className="max-w-xs md:text-right pt-1 md:pt-0">
            <p className="text-[11px] sm:text-xs font-sans text-[#A69C91] leading-relaxed tracking-wider font-light">
              Every service includes skin prep, premium global cosmetics, and meticulous styling.
            </p>
            <Link
              href="/Page/Pricing"
              className="inline-flex items-center space-x-1.5 text-[10px] sm:text-[11px] uppercase tracking-[0.22em] text-[#C4A16A] hover:text-[#F2EDE5] active:text-[#F2EDE5] transition-colors mt-1.5 py-1 touch-target group"
            >
              <span>View Full Rate Menu</span>
              <ArrowRight size={12} className="text-[#C4A16A] group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </div>
        </div>

        {/* RESPONSIVE SQUARE GRID:
            - Desktop (lg:grid-cols-4): 4 cards in ONE SINGLE ROW (Makeup | Hair | Skin | Nails)
            - Tablet & Mobile (grid-cols-2): 2 cards per row (Makeup | Hair, then Skin | Nails)
            - Square shape (aspect-square) with subtle background imagery
            - Service title is the primary focal point, perfectly centered
            - Consistent Explore → CTA aligned at the bottom of every card
        */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-5">
          {services.map((item) => (
            <Link
              key={item.id}
              id={item.id}
              href={item.href}
              className="group relative aspect-square bg-[#17120E] border border-[#3D342B]/80 hover:border-[#C4A16A] transition-all duration-500 overflow-hidden cursor-pointer shadow-xl hover:shadow-[0_12px_36px_rgba(196,161,106,0.2)] active:scale-[0.99] scroll-mt-24"
            >
              {/* Service Background Image - brighter and more highlighted */}
              <Image
                src={item.image}
                alt={item.title}
                fill
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 25vw"
                className="object-cover object-center opacity-75 group-hover:opacity-90 transition-all duration-700 ease-out group-hover:scale-105"
              />

              {/* Refined gradient overlay: clean upper image visibility + text contrast at bottom */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#120F0C]/90 via-[#120F0C]/25 to-[#120F0C]/20 group-hover:from-[#120F0C]/85 group-hover:via-[#120F0C]/15 transition-colors duration-500" />

              {/* Subtle top gold accent line on hover */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#C4A16A] to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out z-20" />

              {/* Card Content: Title positioned slightly below center; Explore CTA at bottom */}
              <div className="absolute inset-0 p-3.5 xs:p-4 sm:p-5 flex flex-col justify-between items-center text-center z-10">
                {/* Top spacer allowing service imagery to be showcased clearly */}
                <div className="flex-[1.5] w-full" aria-hidden="true" />

                {/* 1. SERVICE TITLE — SLIGHTLY BELOW CENTER */}
                <div className="flex flex-col items-center justify-center px-1 pb-1">
                  <h3 className="text-2xl xs:text-3xl sm:text-3xl lg:text-3xl xl:text-4xl font-serif font-semibold text-[#F2EDE5] group-hover:text-[#C4A16A] transition-colors duration-300 tracking-wide drop-shadow-[0_3px_12px_rgba(0,0,0,0.95)]">
                    {item.title}
                  </h3>
                </div>

                {/* 2. EXPLORE CTA — BOTTOM */}
                <div className="flex-1 flex items-end justify-center pb-0.5">
                  <span className="inline-flex items-center space-x-1.5 text-[10px] xs:text-[11px] sm:text-xs font-sans font-medium tracking-[0.2em] uppercase text-[#C4A16A] group-hover:text-[#F2EDE5] transition-colors duration-300 bg-[#120F0C]/65 backdrop-blur-sm px-3 py-1 rounded-full border border-[#C4A16A]/30 group-hover:border-[#C4A16A]">
                    <span>Explore</span>
                    <span className="text-xs sm:text-sm transition-transform duration-300 group-hover:translate-x-1">→</span>
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
