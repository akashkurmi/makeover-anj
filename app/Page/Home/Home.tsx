"use client";
import Image from "next/image";
import { ArrowRight, Sparkles } from "lucide-react";
import TestimonialSection from "../Review/ReviewCustomer";
import Bookingform from "../view/booking/Bookingform";
import PortfolioBar from "../view/navBar/portfolioBar";
import PricingBar from "../view/navBar/pricingBar";
import ReviewPanel from "../view/navBar/reviewBar";
import Highlight from "./Highlight";
import Link from "next/link";

const Home = () => {
  const heroImageUrl = "/anjHome.png";
  const lehengaThumb = "/anjali-makeover-collection.png";

  return (
    <div className="bg-black">
      <section className="relative h-[70vh] flex flex-col items-center px-4 overflow-hidden">
        {/* --- THE GAYATRI PORTAL: MINIMALIST PILL --- */}
        <div className="hidden md:block absolute top-3.5 right-15 z-20">
          <Link href="/Page/Gayatri-Collection" className="group block">
            <div className="flex items-center bg-white/5 backdrop-blur-xl border border-white/10 pl-4 pr-1.5 py-1.5 rounded-full hover:border-pink-500/50 hover:bg-white/10 transition-all duration-500">
              {/* Left Side: Icon */}
              <Sparkles
                size={14}
                className="text-pink-500 mr-3 group-hover:rotate-12 transition-transform"
              />

              {/* Center: Branding */}
              <div className="flex flex-col pr-4 border-r border-white/10">
                <h2 className="text-[11px] md:text-xs font-serif italic text-white tracking-wider">
                  The Gayatri{" "}
                  <span className="not-italic font-sans text-[8px] uppercase opacity-50 ml-1">
                    Collection
                  </span>
                </h2>
              </div>

              {/* Right Side: Thumbnail */}
              <div className="relative h-8 w-8 ml-2 overflow-hidden rounded-full border border-white/20">
                <Image
                  src={lehengaThumb}
                  alt="Gayatri"
                  fill
                  className="object-cover  group-hover:grayscale-0 scale-110 transition-all duration-700"
                />
              </div>

              {/* Hover Indicator */}
              <div className="w-0 group-hover:w-5 overflow-hidden transition-all duration-300">
                <ArrowRight size={12} className="text-pink-500 ml-1" />
              </div>
            </div>
          </Link>
        </div>

        {/* --- MAIN HERO CONTENT --- */}
        <div className="absolute inset-0 z-0">
          <Image
            src={heroImageUrl}
            alt="Anjali Makeover"
            fill
            className="object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black" />
        </div>

        <div className="relative z-10 text-center w-full max-w-4xl h-full flex flex-col justify-end pb-16">
          <h1 className="text-5xl md:text-8xl font-light tracking-tighter uppercase mb-4">
            <span className="font-serif italic text-pink-500">Anjali</span>{" "}
            <span className="text-white">Makeover</span>
          </h1>

          <div className="h-px w-24 bg-pink-500 mx-auto opacity-50 mb-8"></div>

          <nav className="flex flex-col items-center justify-center gap-3">
            <button
              onClick={() =>
                document
                  .getElementById("booking")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="group flex items-center space-x-4 bg-black/40 backdrop-blur-sm px-6 py-1.5 rounded-full border border-white/10 hover:border-pink-500 transition-all"
            >
              <span className="text-sm font-light uppercase tracking-[0.3em] text-gray-300">
                Book Your Look
              </span>
              <ArrowRight size={16} className="text-pink-500" />
            </button>

            <Link
              href="/Page/About"
              className="group flex items-center space-x-4 bg-black/40 backdrop-blur-sm px-6 py-1.5 rounded-full border border-white/10 hover:border-pink-500 transition-all"
            >
              <span className="text-sm font-light uppercase tracking-[0.3em] text-gray-300">
                About us
              </span>
              <ArrowRight size={16} className="text-pink-500" />
            </Link>
          </nav>
        </div>
      </section>
      <div className="flex flex-col">
        <PortfolioBar />
        <PricingBar />
        <Highlight />
        <ReviewPanel />
      </div>

      <TestimonialSection />

      <section
        id="booking"
        className="bg-black py-24 px-6 border-t border-white/5"
      >
        <Bookingform />
      </section>
    </div>
  );
};

export default Home;
