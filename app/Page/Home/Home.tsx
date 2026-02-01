"use client";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import TestimonialSection from "../Review/ReviewCustomer";
import Bookingform from "../view/booking/Bookingform";
import PortfolioBar from "../view/navBar/portfolioBar";
import PricingBar from "../view/navBar/pricingBar";
import ReviewPanel from "../view/navBar/reviewBar";
import Highlight from "./Highlight";
import Link from "next/link";

const Home = () => {
  const heroImageUrl = "/anjHome.png";

  const handleScroll = () => {
    const element = document.getElementById("booking");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="bg-black">
      <section className="relative h-[70vh] flex flex-col items-center px-4 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src={heroImageUrl}
            alt="Bridal HD Makeup look by Anjali Makeover"
            fill
            fetchPriority="high"
            className="object-cover opacity-40 grayscale-[20%]"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/90" />
        </div>

        <div className="relative z-10 text-center w-full max-w-4xl h-full flex flex-col justify-end pb-16">
          <h1 className="text-5xl md:text-8xl font-light tracking-tighter uppercase mb-4">
            <span className="font-serif italic text-pink-500">Anjali</span>{" "}
            <span className="text-white">Makeover</span>
          </h1>

          <div className="h-px w-24 bg-pink-500 mx-auto opacity-50 mb-8"></div>

          <nav className="flex flex-col items-center justify-center gap-3">
            <button
              onClick={handleScroll}
              className="group flex items-center space-x-4 cursor-pointer bg-black/40 backdrop-blur-sm px-6 py-1.5 rounded-full border border-white/10 hover:border-pink-500 transition-all duration-300"
            >
              <span className="text-sm md:text-lg font-light uppercase tracking-[0.3em] text-gray-300 group-hover:text-white">
                Book Your Look
              </span>
              <ArrowRight
                size={18}
                className="text-pink-500 group-hover:translate-x-1 transition-transform"
              />
            </button>

            <Link
              href="/Page/About"
              className="group flex items-center space-x-4 cursor-pointer bg-black/40 backdrop-blur-sm px-6 py-1.5 rounded-full border border-white/10 hover:border-pink-500 transition-all duration-300"
            >
              <span className="text-sm md:text-lg font-light uppercase tracking-[0.3em] text-gray-300 group-hover:text-white">
                About us
              </span>
              <ArrowRight
                size={18}
                className="text-pink-500 group-hover:translate-x-1 transition-transform"
              />
            </Link>
          </nav>
        </div>
      </section>

      {/* 3. NAVIGATION BANNERS (Now visible in the bottom 30% and beyond) */}
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
