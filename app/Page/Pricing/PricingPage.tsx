"use client";
import { ChangeEvent, useState } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import priceData from "./priceData.json";

type PriceData = typeof priceData;
type LocationKey = keyof PriceData;

const locations = Object.keys(priceData) as LocationKey[];

export default function PricingPage() {
  const [selectedlocation, setSeletedLocation] = useState(locations[0]);

  return (
    <div className="bg-[#120F0C] text-[#F2EDE5] min-h-screen py-20 sm:py-24 px-4 sm:px-8 lg:px-12 max-w-full overflow-hidden">
      {/* Top Header */}
      <div className="max-w-4xl mx-auto flex items-center justify-between mb-10 sm:mb-16 pt-6">
        <Link
          href="/"
          className="flex items-center gap-2 text-[#A69C91] hover:text-[#C4A16A] active:text-[#C4A16A] transition-colors py-2 touch-target"
        >
          <ArrowLeft size={16} />
          <span className="uppercase tracking-[0.25em] text-[11px] font-sans">
            Back to Home
          </span>
        </Link>

        <Link href="/" className="group flex flex-col items-center">
          <span className="font-serif text-xl sm:text-2xl tracking-[0.25em] text-[#F2EDE5] group-hover:text-[#C4A16A] transition-colors">
            ANJALI
          </span>
          <span className="text-[7.5px] uppercase tracking-[0.35em] text-[#A69C91] -mt-0.5 group-hover:text-[#D4B47F] transition-colors">
            LUXURY BEAUTY STUDIO
          </span>
        </Link>

        <div className="w-[80px] sm:w-[100px] hidden sm:block"></div>
      </div>

      <div className="max-w-4xl mx-auto">
        {/* Title */}
        <div className="text-center mb-10 sm:mb-16 space-y-3 sm:space-y-4">
          <div className="flex items-center justify-center space-x-2.5">
            <span className="h-px w-5 bg-[#C4A16A]" />
            <p className="text-[9.5px] uppercase tracking-[0.3em] text-[#C4A16A]">
              CURATED SERVICE MENU
            </p>
            <span className="h-px w-5 bg-[#C4A16A]" />
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-light text-[#F2EDE5] tracking-tight">
            Services & Rates
          </h1>
          <p className="text-xs text-[#A69C91] tracking-wider max-w-md mx-auto leading-relaxed font-light">
            Transparent pricing for salon visits and on-location destination bridal services.
          </p>
        </div>

        {/* Location Selector Bar */}
        <div className="bg-[#1E1813] border border-[#3D342B] p-4 sm:p-6 mb-8 sm:mb-12 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
          <div>
            <h2 className="text-xs sm:text-sm uppercase tracking-[0.2em] sm:tracking-[0.25em] text-[#C4A16A] font-medium">
              Rate Menu by Region
            </h2>
            <p className="text-[11px] text-[#A69C91] mt-0.5 font-light">
              Select your wedding region for local itinerary rates
            </p>
          </div>

          <div className="flex items-center space-x-3">
            <span className="text-xs uppercase tracking-widest text-[#A69C91]">
              Location:
            </span>
            <select
              value={selectedlocation}
              onChange={(e: ChangeEvent<HTMLSelectElement>) =>
                setSeletedLocation(e.target.value as LocationKey)
              }
              className="min-h-[44px] bg-[#120F0C] text-[#C4A16A] text-xs border border-[#3D342B] px-4 py-2 outline-none focus:border-[#C4A16A] transition-all cursor-pointer font-sans rounded-none flex-1 sm:flex-initial"
            >
              {locations.map((loc) => (
                <option key={loc} value={loc} className="bg-[#120F0C] text-[#F2EDE5]">
                  {loc}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Services List: Mobile-first stacked cards */}
        <div className="space-y-4 sm:space-y-6">
          {priceData[selectedlocation].map((service, sIdx) => (
            <div
              key={sIdx}
              className="p-5 sm:p-6 bg-[#17120E] border border-[#3D342B]/50 hover:border-[#C4A16A]/50 transition-colors flex flex-col sm:flex-row sm:items-center justify-between gap-4"
            >
              <div className="space-y-1 flex-1">
                <div className="flex items-center space-x-2">
                  <span className="text-[10px] text-[#C4A16A] font-serif italic">
                    0{service.id}
                  </span>
                  <h3 className="text-base sm:text-xl font-serif text-[#F2EDE5]">
                    {service.name}
                  </h3>
                </div>
                <p className="text-xs text-[#A69C91] leading-relaxed font-light max-w-lg">
                  {service.details}
                </p>
              </div>

              <div className="flex items-center justify-between sm:justify-end gap-4 pt-3 sm:pt-0 border-t sm:border-t-0 border-[#3D342B]/40">
                <span className="text-lg sm:text-xl font-serif text-[#C4A16A] tracking-wider">
                  ₹{service.price}
                </span>

                <Link
                  href="/#booking"
                  className="min-h-[44px] px-5 py-2.5 text-[10px] uppercase tracking-[0.2em] text-[#120F0C] bg-[#C4A16A] hover:bg-[#D4B47F] active:bg-[#D4B47F] transition-all font-medium shrink-0 flex items-center justify-center touch-target"
                >
                  Book Look
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Note */}
        <p className="text-center text-[#6E6459] text-xs italic font-serif mt-10 sm:mt-12 px-2">
          *Rates exclude travel and accommodation for destination weddings outside city limits. Custom bridal party packages available upon inquiry.
        </p>

        {/* Bottom CTA */}
        <div className="mt-12 sm:mt-16 text-center">
          <Link
            href="/#booking"
            className="w-full sm:w-auto min-h-[48px] inline-flex items-center justify-center space-x-3 px-8 py-3.5 sm:py-4 bg-[#C4A16A] text-[#120F0C] text-xs uppercase tracking-[0.3em] font-sans font-medium hover:bg-[#D4B47F] active:bg-[#D4B47F] transition-all shadow-xl touch-target"
          >
            <span>RESERVE APPOINTMENT</span>
            <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </div>
  );
}
