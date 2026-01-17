"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Maximize2 } from "lucide-react"; // Added Maximize2 for gallery feel
import TestimonialSection from "../Review/ReviewCustomer";
import Bookingform from "../view/booking/Bookingform";

const Home = () => {
  const heroImageUrl = "/anjHome.png";

  const navSections = [
    {
      title: "Portfolio",
      href: "/Page/Portfolio",
      img: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=1600&auto=format&fit=crop",
      isGallery: true,
    },
    {
      title: "Pricing",
      href: "/pricing",
      img: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?q=80&w=1600&auto=format&fit=crop",
    },
    {
      title: "Reviews",
      href: "/testimonials",
      img: "https://images.unsplash.com/photo-1526045612212-70caf35c11bc?q=80&w=1600&auto=format&fit=crop",
    },
  ];

  const handleScroll = () => {
    const element = document.getElementById("booking");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const portfolioPreview = [
    "https://storage.googleapis.com/anjali-makeover/1.JPG",
    "https://storage.googleapis.com/anjali-makeover/2.JPG",
    "https://storage.googleapis.com/anjali-makeover/3.JPG",
    "https://storage.googleapis.com/anjali-makeover/4.JPG",
    "https://storage.googleapis.com/anjali-makeover/5.JPG",
  ];

  return (
    <div className="bg-black">
      {/* 2. HERO SECTION (Limited to 70% height) */}
      <section className="relative h-[70vh] flex flex-col items-center justify-center px-4 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src={heroImageUrl}
            alt="Hero Background"
            fill
            priority
            className="object-cover opacity-40 grayscale-[20%]"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black" />
        </div>

        <div className="relative z-10 text-center">
          <h1 className="text-5xl md:text-8xl font-light tracking-tighter uppercase mb-4">
            <span className="font-serif italic text-pink-500">Anjali</span>{" "}
            <span className="text-white">Makeover</span>
          </h1>
          <div className="h-px w-24 bg-pink-500 mx-auto opacity-50 mb-8"></div>

          <nav className="flex justify-center">
            <button
              onClick={handleScroll}
              className="group flex items-center space-x-4 cursor-pointer bg-black/30 backdrop-blur-sm px-6 py-2 rounded-full border border-white/10 hover:border-pink-500 transition-all duration-300"
            >
              <span className="text-sm md:text-lg font-light uppercase tracking-[0.3em] text-gray-300 group-hover:text-white">
                Book Your Look
              </span>
              <ArrowRight
                size={18}
                className="text-pink-500 group-hover:translate-x-1 transition-transform"
              />
            </button>
          </nav>
        </div>
      </section>

      {/* 3. NAVIGATION BANNERS (Now visible in the bottom 30% and beyond) */}
      <div className="flex flex-col">
        {navSections.map((section, index) =>
          section.title === "Portfolio" ? (
            <Link
              key={index}
              href="/Page/Portfolio"
              className="relative w-full h-[50vh] md:h-[65vh] overflow-hidden group border-b border-white/10 bg-zinc-900"
            >
              {/* RUNNING CONTENT LAYER (Moving Images) */}
              <div className="absolute inset-0 flex items-center opacity-40 group-hover:opacity-70 transition-opacity duration-1000">
                <div className="flex w-[200%] gap-4 animate-scroll-horizontal">
                  {/* First set of images */}
                  {portfolioPreview.map((src, i) => (
                    <div key={i} className="relative w-64 h-80 flex-shrink-0">
                      <Image
                        src={src}
                        alt="preview"
                        fill
                        className="object-cover rounded-sm grayscale group-hover:grayscale-0 transition-all"
                      />
                    </div>
                  ))}
                  {/* Duplicate set for seamless loop */}
                  {portfolioPreview.map((src, i) => (
                    <div
                      key={`dup-${i}`}
                      className="relative w-64 h-80 flex-shrink-0"
                    >
                      <Image
                        src={src}
                        alt="preview"
                        fill
                        className="object-cover rounded-sm grayscale group-hover:grayscale-0 transition-all"
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* STATIC TEXT LAYER */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/60 flex flex-col items-center justify-center">
                <div className="overflow-hidden border-y border-pink-500/30 py-4 px-12 transform -rotate-2 group-hover:rotate-0 transition-transform duration-700">
                  <h2 className="text-white text-6xl md:text-9xl font-black uppercase italic tracking-tighter">
                    Portfolio
                  </h2>
                </div>
                <span className="mt-8 text-pink-500 text-xs tracking-[1em] uppercase font-bold animate-pulse">
                  Enter Gallery
                </span>
              </div>
            </Link>
          ) : (
            <Link
              key={index}
              href={section.href}
              className="relative w-full h-[45vh] md:h-[60vh] overflow-hidden group border-b border-white/10"
            >
              {/* Image Layer */}
              <Image
                src={section.img}
                alt={section.title}
                fill
                sizes="100vw"
                className="object-cover grayscale-[80%] group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-105"
              />

              {/* Dynamic Overlay */}
              <div className="absolute inset-0 bg-black/50 group-hover:bg-black/20 transition-all duration-500" />

              {/* Content */}
              <div className="relative h-full flex flex-col items-center justify-center p-4">
                {/* If it's the Portfolio, add a "Gallery View" icon indicator */}
                {section.isGallery && (
                  <div className="mb-4 opacity-0 group-hover:opacity-100 transition-all duration-700 translate-y-4 group-hover:translate-y-0">
                    <Maximize2 className="text-pink-500 w-8 h-8 md:w-12 md:h-12 stroke-[1px]" />
                  </div>
                )}

                <h2 className="text-white text-4xl md:text-7xl font-light uppercase tracking-[0.2em] transition-all duration-700 group-hover:tracking-[0.4em]">
                  {section.title}
                </h2>

                <div className="mt-6 flex items-center space-x-2">
                  <span className="h-px w-0 group-hover:w-12 bg-pink-500 transition-all duration-700"></span>
                  <span className="text-white/0 group-hover:text-white transition-all duration-700 text-[10px] tracking-[0.6em] uppercase font-medium">
                    {section.isGallery ? "View Gallery" : "View Details"}
                  </span>
                  <span className="h-px w-0 group-hover:w-12 bg-pink-500 transition-all duration-700"></span>
                </div>
              </div>

              {/* Shutter Effect on click/hover - purely aesthetic */}
              <div className="absolute inset-0 border-[0px] group-hover:border-[1px] border-white/20 transition-all duration-500 m-4 pointer-events-none" />
            </Link>
          )
        )}
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
