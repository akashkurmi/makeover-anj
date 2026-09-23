"use client";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const services = [
  {
    num: "01",
    title: "BRIDAL",
    category: "Signature Artistry",
    desc: "Complete bridal transformations crafted for unmatched camera-readiness, 16-hour long wear, bespoke skin preparation, and flawless dupatta & jewelry draping.",
    price: "From ₹15,000",
    href: "/#bridal",
  },
  {
    num: "02",
    title: "HAIR",
    category: "Haute Sculpting",
    desc: "Architectural bridal buns, flowing textured Hollywood waves, traditional floral jadai artistry, and contemporary red-carpet hairstyles.",
    price: "Custom Styling",
    href: "/Page/Pricing",
  },
  {
    num: "03",
    title: "EVENTS",
    category: "Sangeet & Reception",
    desc: "High-impact evening glamour tailored to ambient venue lighting, statement eye artistry, radiant glass skin, and sophisticated party themes.",
    price: "From ₹5,000",
    href: "/Page/Pricing",
  },
  {
    num: "04",
    title: "PRE-WEDDING",
    category: "Cinematic Shoots",
    desc: "Luminous, camera-tested aesthetics engineered for daylight outdoor shoots, destination portraits, and cinematic couple films.",
    price: "From ₹5,000",
    href: "/Page/Pricing",
  },
];

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="bg-[#120F0C] text-[#F2EDE5] py-16 sm:py-24 lg:py-36 px-5 sm:px-8 lg:px-12 border-b border-[#3D342B]/60 max-w-full overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        {/* SECTION HEADER */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 lg:mb-24 gap-4 sm:gap-6">
          <div className="space-y-3 sm:space-y-4">
            <div className="flex items-center space-x-2.5">
              <span className="h-px w-6 sm:w-8 bg-[#C4A16A]" />
              <p className="text-[9.5px] sm:text-[11px] lg:text-xs uppercase tracking-[0.3em] sm:tracking-[0.35em] text-[#C4A16A] font-sans">
                OUR SERVICES
              </p>
            </div>

            <h2 className="text-3xl xs:text-4xl sm:text-6xl lg:text-7xl font-serif font-light text-[#F2EDE5] leading-[1.08] tracking-tight">
              Designed for <br />
              <span className="italic font-normal text-[#C4A16A]">your moment.</span>
            </h2>
          </div>

          <div className="max-w-xs md:text-right pt-2 md:pt-0">
            <p className="text-xs font-sans text-[#A69C91] leading-relaxed tracking-wider font-light">
              Every service includes skin prep, premium global cosmetics, and meticulous styling.
            </p>
            <Link
              href="/Page/Pricing"
              className="inline-flex items-center space-x-2 text-[11px] uppercase tracking-[0.25em] text-[#C4A16A] hover:text-[#F2EDE5] active:text-[#F2EDE5] mt-2 py-1.5 touch-target"
            >
              <span>View Full Rate Menu</span>
              <ArrowRight size={13} className="text-[#C4A16A]" />
            </Link>
          </div>
        </div>

        {/* RESPONSIVE GRID: 1-col on mobile, 2-col on tablet (md), 4-col on desktop (lg) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-t border-b border-[#3D342B]/60">
          {services.map((item, index) => (
            <div
              key={item.num}
              className={`group relative p-6 sm:p-8 lg:p-10 flex flex-col justify-between transition-colors duration-300 hover:bg-[#1E1813]/60 ${
                index !== services.length - 1
                  ? "border-b md:border-b-0 lg:border-r border-[#3D342B]/60"
                  : ""
              } ${
                index % 2 === 0 && index !== services.length - 2
                  ? "md:border-r md:border-[#3D342B]/60"
                  : ""
              }`}
            >
              {/* Top: Number & Category */}
              <div>
                <div className="flex items-center justify-between mb-4 sm:mb-6 lg:mb-8">
                  <span className="text-xl sm:text-2xl font-serif italic text-[#C4A16A]">
                    {item.num}
                  </span>
                  <span className="text-[8.5px] sm:text-[9px] uppercase tracking-[0.3em] text-[#A69C91]">
                    {item.category}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-2xl sm:text-3xl font-serif font-light text-[#F2EDE5] group-hover:text-[#C4A16A] transition-colors tracking-wide mb-3">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-xs font-sans text-[#A69C91] leading-relaxed font-light mb-6">
                  {item.desc}
                </p>
              </div>

              {/* Bottom: Price & Touch Action */}
              <div className="pt-4 border-t border-[#3D342B]/40 flex items-center justify-between">
                <span className="text-xs font-serif text-[#C4A16A] tracking-wider">
                  {item.price}
                </span>

                <Link
                  href={item.href}
                  className="min-h-[44px] inline-flex items-center space-x-2 text-[10px] uppercase tracking-[0.25em] text-[#F2EDE5] group-hover:text-[#C4A16A] active:text-[#C4A16A] transition-colors py-2 touch-target"
                >
                  <span>EXPLORE</span>
                  <ArrowRight size={13} className="text-[#C4A16A]" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
