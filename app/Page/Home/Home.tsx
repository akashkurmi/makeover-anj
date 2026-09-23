"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Sparkles, MessageCircle } from "lucide-react";
import AboutSection from "./AboutSection";
import ServicesSection from "./ServicesSection";
import BridalSection from "./BridalSection";
import Highlight from "./Highlight";
import TestimonialSection from "../Review/ReviewCustomer";
import Bookingform from "../view/booking/Bookingform";

const heroSlides = [
  {
    image: "/anjHome.png",
    subtitle: "DISCOVER THE ART OF BEAUTY",
    titleLine1: "Where Beauty",
    titleLine2: "Becomes Art",
    desc: "Tailored hair, makeup, and bridal beauty in a world of timeless luxury.",
    tag: "Signature Bridal & Editorial",
    position: "object-[65%_18%] sm:object-[60%_20%] lg:object-center",
  },
  {
    image: "/highlight/2.jpg",
    subtitle: "HAUTE BRIDAL COUTURE",
    titleLine1: "A Bridal Look As",
    titleLine2: "Unique As You",
    desc: "Certified Lakmé Academy mastery specializing in high-definition radiance and flawless endurance.",
    tag: "Royal Heritage Glamour",
    position: "object-[60%_15%] sm:object-[55%_20%] lg:object-center",
  },
  {
    image: "/images/_5.jpg",
    subtitle: "TIMELESS ELEGANCE",
    titleLine1: "Sculpted For",
    titleLine2: "Your Moment",
    desc: "Bespoke on-location vanity services across Bangalore and premier destination venues throughout India.",
    tag: "Couture Reception Artistry",
    position: "object-[55%_18%] sm:object-[50%_20%] lg:object-center",
  },
];

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  const slide = heroSlides[currentSlide];

  return (
    <div className="bg-[#120F0C] text-[#F2EDE5] overflow-x-hidden max-w-full">
      {/* ============================================================ */}
      {/* MOBILE-FIRST CINEMATIC HERO SECTION */}
      {/* ============================================================ */}
      <section className="relative min-h-[92svh] sm:min-h-[94svh] lg:min-h-screen w-full flex flex-col justify-end lg:justify-center overflow-hidden">
        {/* BACKGROUND SLIDES: Calibrated object-position so model face is protected */}
        {heroSlides.map((item, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? "opacity-100 z-0" : "opacity-0 -z-10 pointer-events-none"
            }`}
          >
            <Image
              src={item.image}
              alt="Anjali Makeover Luxury Artistry"
              fill
              priority={index === 0}
              className={`object-cover ${item.position} transition-transform duration-[8000ms] ease-out ${
                index === currentSlide ? "scale-105" : "scale-100"
              }`}
              sizes="100vw"
            />
          </div>
        ))}

        {/* GRADIENTS: Bottom-up for mobile readability, Left-to-right for desktop */}
        {/* Mobile & Tablet Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#120F0C] from-25% via-[#120F0C]/85 via-60% to-[#120F0C]/25 lg:hidden z-10" />
        {/* Desktop Gradient Overlays */}
        <div className="hidden lg:block absolute inset-0 bg-gradient-to-r from-[#120F0C] via-[#120F0C]/85 to-transparent z-10 w-3/4" />
        <div className="hidden lg:block absolute inset-0 bg-gradient-to-t from-[#120F0C] via-transparent to-[#120F0C]/40 z-10" />
        {/* Dark Vignette */}
        <div className="absolute inset-0 bg-[#120F0C]/20 z-10 pointer-events-none" />

        {/* THE GAYATRI COLLECTION PILL: DESKTOP (Top Right) */}
        <div className="hidden lg:block absolute top-28 right-12 z-20">
          <Link href="/Page/Gayatri-Collection" className="group block">
            <div className="flex items-center bg-[#1E1813]/85 backdrop-blur-md border border-[#3D342B] pl-4 pr-2 py-2 rounded-full hover:border-[#C4A16A] transition-all duration-300 shadow-2xl">
              <Sparkles size={13} className="text-[#C4A16A] mr-3 group-hover:rotate-12 transition-transform" />
              <div className="flex flex-col pr-4 border-r border-[#3D342B]">
                <span className="text-[11px] font-serif italic text-[#F2EDE5] tracking-wider">
                  The Gayatri <span className="not-italic font-sans text-[8px] uppercase tracking-widest text-[#C4A16A] ml-1">Collection</span>
                </span>
                <span className="text-[7.5px] uppercase tracking-widest text-[#A69C91]">
                  Bridal Lehengas
                </span>
              </div>
              <div className="relative h-7 w-7 ml-2 overflow-hidden rounded-full border border-[#C4A16A]/40">
                <Image
                  src="/anjali-makeover-collection.png"
                  alt="Gayatri Collection"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <ArrowRight size={12} className="text-[#C4A16A] ml-2 group-hover:translate-x-0.5 transition-transform" />
            </div>
          </Link>
        </div>

        {/* MAIN HERO CONTENT */}
        <div className="relative z-20 max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 w-full pt-28 pb-14 sm:pb-16 lg:py-0">
          <div className="max-w-2xl space-y-4 sm:space-y-6">
            {/* Small uppercase eyebrow */}
            <div className="flex items-center space-x-2.5">
              <span className="h-px w-6 sm:w-8 bg-[#C4A16A]" />
              <p className="text-[9.5px] sm:text-[11px] lg:text-xs uppercase tracking-[0.3em] sm:tracking-[0.35em] text-[#C4A16A] font-sans font-medium">
                {slide.subtitle}
              </p>
            </div>

            {/* Responsive Editorial Heading: Fluid Mobile Clamp */}
            <h1 className="text-[2.6rem] xs:text-[3.2rem] sm:text-6xl md:text-7xl lg:text-[5.5rem] font-serif font-light text-[#F2EDE5] leading-[1.04] tracking-tight">
              {slide.titleLine1} <br />
              <span className="italic font-normal text-[#C4A16A]">
                {slide.titleLine2}
              </span>
            </h1>

            {/* Small gold horizontal line */}
            <div className="w-12 sm:w-16 h-px bg-[#C4A16A]" />

            {/* Description */}
            <p className="text-xs sm:text-sm lg:text-base text-[#A69C91] font-sans font-light leading-relaxed max-w-lg">
              {slide.desc}
            </p>

            {/* Touch-Friendly Action Buttons: Full-width on mobile */}
            <div className="pt-2 sm:pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
              <Link
                href="/#booking"
                className="w-full sm:w-auto min-h-[48px] inline-flex items-center justify-center space-x-3 px-7 py-3.5 bg-[#C4A16A] hover:bg-[#D4B47F] active:bg-[#D4B47F] text-[#120F0C] font-sans font-medium text-xs uppercase tracking-[0.25em] transition-all duration-300 shadow-xl active:scale-[0.98] touch-target"
              >
                <span>BOOK APPOINTMENT</span>
                <ArrowRight size={14} />
              </Link>

              <Link
                href="/#services"
                className="w-full sm:w-auto min-h-[48px] inline-flex items-center justify-center space-x-3 px-7 py-3.5 bg-transparent border border-[#C4A16A]/70 hover:border-[#C4A16A] hover:bg-[#C4A16A]/10 text-[#F2EDE5] font-sans text-xs uppercase tracking-[0.25em] transition-all duration-300 active:scale-[0.98] touch-target"
              >
                <span>EXPLORE SERVICES</span>
                <ArrowRight size={14} className="text-[#C4A16A]" />
              </Link>
            </div>

            {/* MOBILE GAYATRI COLLECTION LINK */}
            <div className="pt-2 lg:hidden">
              <Link
                href="/Page/Gayatri-Collection"
                className="inline-flex items-center space-x-2 text-[10px] uppercase tracking-[0.2em] text-[#A69C91] hover:text-[#C4A16A] py-1"
              >
                <Sparkles size={12} className="text-[#C4A16A]" />
                <span>Explore The Gayatri Bridal Collection →</span>
              </Link>
            </div>
          </div>
        </div>

        {/* BOTTOM HERO CONTROLS: Touch-friendly Slide Switcher */}
        <div className="relative lg:absolute lg:bottom-8 z-20 px-5 sm:px-8 lg:px-12 pb-6 lg:pb-0 w-full flex items-center justify-between">
          {/* SLIDE COUNTER (Min 44px Touch Target) */}
          <div className="flex items-center space-x-3 bg-[#120F0C]/80 backdrop-blur-md px-3.5 py-2 border border-[#3D342B]/60 rounded-sm">
            <span className="text-xs font-serif italic text-[#C4A16A]">
              0{currentSlide + 1}
            </span>
            <span className="text-[10px] text-[#A69C91]">/</span>
            <span className="text-[10px] font-sans text-[#A69C91] tracking-widest">
              0{heroSlides.length}
            </span>

            {/* Slide switch buttons */}
            <div className="flex items-center space-x-1.5 ml-2">
              {heroSlides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentSlide(i)}
                  aria-label={`Slide ${i + 1}`}
                  className={`min-h-[30px] flex items-center ${
                    i === currentSlide ? "w-6" : "w-3"
                  }`}
                >
                  <span
                    className={`block h-1 w-full transition-all duration-300 ${
                      i === currentSlide ? "bg-[#C4A16A]" : "bg-[#3D342B] hover:bg-[#A69C91]"
                    }`}
                  />
                </button>
              ))}
            </div>
          </div>

          {/* DESKTOP SCROLL INDICATOR */}
          <div className="hidden lg:flex flex-col items-center space-y-2">
            <span className="text-[8px] uppercase tracking-[0.4em] text-[#A69C91] font-sans">
              Scroll
            </span>
            <div className="w-px h-8 bg-gradient-to-b from-[#C4A16A] to-transparent animate-pulse" />
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 6. ABOUT SECTION: THE ANJALI SIGNATURE */}
      {/* ============================================================ */}
      <AboutSection />

      {/* ============================================================ */}
      {/* 7. SERVICES SECTION: FOUR EDITORIAL COLUMNS */}
      {/* ============================================================ */}
      <ServicesSection />

      {/* ============================================================ */}
      {/* 8. BRIDAL SECTION: THE BRIDAL EDIT */}
      {/* ============================================================ */}
      <BridalSection />

      {/* ============================================================ */}
      {/* 9. GALLERY SECTION: EDITORIAL MASONRY & LIGHTBOX */}
      {/* ============================================================ */}
      <Highlight />

      {/* ============================================================ */}
      {/* 10. REVIEWS SECTION: VOICES OF BEAUTY */}
      {/* ============================================================ */}
      <TestimonialSection />

      {/* ============================================================ */}
      {/* 11. BOOKING / ENQUIRY SECTION */}
      {/* ============================================================ */}
      <section id="booking" className="bg-[#17120E] py-16 sm:py-24 lg:py-36 px-5 sm:px-8 lg:px-12 border-t border-[#3D342B]/60">
        <Bookingform />
      </section>

      {/* ============================================================ */}
      {/* 13. MOBILE & DESKTOP FLOATING WHATSAPP BUTTON */}
      {/* ============================================================ */}
      <Link
        href="https://wa.me/917879458655"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Direct WhatsApp consultation"
        className="fixed z-40 w-14 h-14 rounded-full bg-[#C4A16A] hover:bg-[#D4B47F] active:bg-[#D4B47F] text-[#120F0C] flex items-center justify-center shadow-[0_10px_30px_rgba(0,0,0,0.8)] border border-[#D4B47F]/50 transition-all duration-300 active:scale-95 touch-target"
        style={{
          bottom: "max(1.25rem, calc(1rem + env(safe-area-inset-bottom)))",
          right: "max(1.25rem, calc(1rem + env(safe-area-inset-right)))",
        }}
      >
        <MessageCircle size={26} strokeWidth={2} />
      </Link>
    </div>
  );
}
