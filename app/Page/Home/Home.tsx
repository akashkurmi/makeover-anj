"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image"; // Import Next.js Image
import { ArrowRight } from "lucide-react";
import TestimonialSection from "../Review/ReviewCustomer";
import Bookingform from "../view/booking/Bookingform";

const Home = () => {
  const heroImageUrl = "/anjHome.png";

  const navSections = [
    {
      title: "Portfolio",
      href: "/Page/Portfolio",
      img: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=1600&auto=format&fit=crop",
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

  return (
    <>
      {/* 2. HERO & MAIN NAVIGATION */}
      <section className="relative h-screen flex flex-col items-center justify-center px-4 overflow-hidden">
        {/* BACKGROUND IMAGE LAYER */}
        <div className="absolute inset-0 z-0">
          <Image
            src={heroImageUrl}
            alt="Hero Background"
            fill // Replaces w-full h-full
            priority // Loads hero image immediately
            className="object-cover opacity-30 grayscale-[20%]"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>

        {/* CONTENT LAYER */}
        <div className="relative z-10 text-center mb-16">
          <h1 className="text-5xl md:text-8xl font-light tracking-tighter uppercase mb-2">
            <span className="font-serif italic text-pink-500">Anjali</span>{" "}
            Makeover
          </h1>
          <div className="h-px w-24 bg-pink-500 mx-auto opacity-50"></div>
        </div>

        <nav className="relative z-10 flex flex-col space-y-6 text-center">
          <button
            onClick={handleScroll}
            className="group flex items-center justify-center space-x-4 cursor-pointer bg-transparent border-none"
          >
            <span className="text-2xl md:text-4xl font-light uppercase tracking-widest text-gray-400 group-hover:text-white transition-all duration-300">
              Booking
            </span>
            <ArrowRight className="opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-pink-500" />
          </button>
        </nav>
      </section>

      {/* 3. VERTICAL NAVIGATION BANNERS */}
      <div className="flex flex-col">
        {navSections.map((section, index) => (
          <Link
            key={index}
            href={section.href}
            className="relative w-full h-[40vh] md:h-[50vh] overflow-hidden group border-b border-white/5"
          >
            <Image
              src={section.img}
              alt={section.title}
              fill
              sizes="100vw"
              className="object-cover grayscale-[50%] group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/60 group-hover:bg-pink-900/20 transition-colors duration-500" />

            <div className="relative h-full flex flex-col items-center justify-center">
              <h2 className="text-white text-5xl md:text-8xl font-black uppercase tracking-tighter transition-transform duration-500 group-hover:tracking-widest">
                {section.title}
              </h2>
              <span className="text-white/0 group-hover:text-white transition-all duration-700 translate-y-4 group-hover:translate-y-0 text-xs tracking-[0.5em] mt-4 uppercase font-light">
                Explore Now
              </span>
            </div>
          </Link>
        ))}
      </div>

      <TestimonialSection />

      <section
        id="booking"
        className="bg-black py-24 px-6 border-t border-white/5"
      >
        <Bookingform />
      </section>
    </>
  );
};

export default Home;
