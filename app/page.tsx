"use client";
import React, { useState } from "react";
import { Instagram, Facebook, MessageCircle, ArrowRight } from "lucide-react";
import Link from "next/link";
import TestimonialSection from "./Page/Review/ReviewCustomer";

const menuItems = [
  { title: "Portfolio Gallery", href: "/portfolio", type: "link" },
  { title: "Service Pricing", href: "/pricing", type: "link" },
  { title: "Client Testimonials", href: "/testimonials", type: "link" },
  { title: "Booking", href: "booking", type: "scroll" }, // Marked as scroll type
];
const navSections = [
  {
    title: "Portfolio",
    href: "/Page/Portfolio",
    image:
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=1600&auto=format&fit=crop", // Makeup kit/Artistry
  },
  {
    title: "Pricing",
    href: "/pricing",
    image:
      "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?q=80&w=1600&auto=format&fit=crop", // Luxury products
  },
  {
    title: "Reviews",
    href: "/testimonials",
    image:
      "https://images.unsplash.com/photo-1526045612212-70caf35c11bc?q=80&w=1600&auto=format&fit=crop", // Happy client/glow
  },
];

export default function Home() {
  return (
    <main className="relative min-h-screen bg-black text-white selection:bg-pink-500">
      {/* 1. SOCIAL ICONS (Fixed Left) */}
      <div className="fixed top-8 left-8 flex flex-col gap-8 z-50">
        <a
          href="https://www.instagram.com/anjalimakeover7879/"
          className="hover:text-pink-500 transition-all hover:-translate-y-1"
        >
          <Instagram size={22} />
        </a>
        <a
          href="#"
          className="hover:text-blue-500 transition-all hover:-translate-y-1"
        >
          <Facebook size={22} />
        </a>
        <a
          href="#"
          className="hover:text-gray-400 transition-all hover:-translate-y-1"
        >
          <MessageCircle size={22} />
        </a>
      </div>
      {/* 2. HERO & MAIN NAVIGATION (Middle) */}
      <section className="h-screen flex flex-col items-center justify-center px-4">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-8xl font-light tracking-tighter uppercase mb-2">
            <span className="font-serif italic text-pink-500">Anjali</span>{" "}
            Makeover
          </h1>
          <div className="h-[1px] w-24 bg-pink-500 mx-auto opacity-50"></div>
        </div>

        {/* The Clickable Menu */}
        <nav className="flex flex-col space-y-6 text-center">
          {menuItems.map((item, index) => {
            if (item.type === "scroll") {
              return (
                <button
                  key={index}
                  onClick={() => {
                    const element = document.getElementById(item.href);
                    element?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="group flex items-center justify-center space-x-4 cursor-pointer bg-transparent border-none"
                >
                  <span className="text-2xl md:text-4xl font-light uppercase tracking-widest text-gray-500 group-hover:text-white transition-all duration-300">
                    {item.title}
                  </span>
                  <ArrowRight className="opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-pink-500" />
                </button>
              );
            }

            return (
              <Link
                key={index}
                href={item.href}
                className="group flex items-center justify-center space-x-4"
              >
                <span className="text-2xl md:text-4xl font-light uppercase tracking-widest text-gray-500 group-hover:text-white transition-all duration-300">
                  {item.title}
                </span>
                <ArrowRight className="opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-pink-500" />
              </Link>
            );
          })}
        </nav>
      </section>
      {/* Vertical Navigation Banners */}
      <div className="flex flex-col">
        {navSections.map((section, index) => (
          <Link
            key={index}
            href={section.href}
            className="relative w-full h-[40vh] md:h-[50vh] overflow-hidden group border-b border-white/5"
          >
            {/* Background Image */}
            <img
              src={section.image}
              className="absolute inset-0 w-full h-full object-cover grayscale-[50%] group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-110"
              alt={section.title}
            />

            {/* Dark Overlay - Subtle pink tint on hover */}
            <div className="absolute inset-0 bg-black/60 group-hover:bg-pink-900/20 transition-colors duration-500" />

            {/* Content Container */}
            <div className="relative h-full flex flex-col items-center justify-center">
              <h2 className="text-white text-5xl md:text-8xl font-black uppercase tracking-tighter transition-transform duration-500 group-hover:tracking-widest">
                {section.title}
              </h2>
              <span className="text-white/0 group-hover:text-white/100 transition-all duration-700 translate-y-4 group-hover:translate-y-0 text-xs tracking-[0.5em] mt-4 uppercase font-light">
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
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-white text-4xl md:text-6xl font-serif italic mb-4">
              Reserve Your Date
            </h2>
            <p className="text-zinc-500 uppercase tracking-[0.3em] text-xs">
              Book your transformation session
            </p>
          </div>

          <form className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Name */}
            <div className="flex flex-col space-y-2">
              <label className="text-zinc-400 text-[10px] uppercase tracking-widest ml-1">
                Full Name
              </label>
              <input
                type="text"
                placeholder="Enter your name"
                className="bg-zinc-950 border border-zinc-800 p-4 text-white focus:outline-none focus:border-pink-500 transition-colors"
              />
            </div>

            {/* Email */}
            <div className="flex flex-col space-y-2">
              <label className="text-zinc-400 text-[10px] uppercase tracking-widest ml-1">
                Email Address
              </label>
              <input
                type="email"
                placeholder="email@example.com"
                className="bg-zinc-950 border border-zinc-800 p-4 text-white focus:outline-none focus:border-pink-500 transition-colors"
              />
            </div>

            {/* Date */}
            <div className="flex flex-col space-y-2">
              <label className="text-zinc-400 text-[10px] uppercase tracking-widest ml-1">
                Event Date
              </label>
              <input
                type="date"
                className="bg-zinc-950 border border-zinc-800 p-4 text-white focus:outline-none focus:border-pink-500 transition-colors appearance-none"
              />
            </div>

            {/* Service Type */}
            <div className="flex flex-col space-y-2">
              <label className="text-zinc-400 text-[10px] uppercase tracking-widest ml-1">
                Service Required
              </label>
              <select className="bg-zinc-950 border border-zinc-800 p-4 text-white focus:outline-none focus:border-pink-500 transition-colors">
                <option>Bridal Makeup</option>
                <option>Party/Event Look</option>
                <option>Editorial/Fashion</option>
                <option>Makeup Masterclass</option>
              </select>
            </div>

            {/* Message */}
            <div className="flex flex-col space-y-2 md:col-span-2">
              <label className="text-zinc-400 text-[10px] uppercase tracking-widest ml-1">
                Additional Details
              </label>
              <textarea
                rows={4}
                placeholder="Tell us more about your event..."
                className="bg-zinc-950 border border-zinc-800 p-4 text-white focus:outline-none focus:border-pink-500 transition-colors"
              />
            </div>

            {/* Submit Button */}
            <div className="md:col-span-2 pt-6">
              <button
                type="submit"
                className="w-full bg-white text-black py-4 uppercase font-bold tracking-[0.4em] text-xs hover:bg-pink-500 hover:text-white transition-all duration-500"
              >
                Send Booking Request
              </button>
            </div>
          </form>
        </div>
      </section>
      {/* 3. CONTACT SECTION (Bottom) */}
      <section className="py-20 border-t border-zinc-900 bg-zinc-950/50">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <h2 className="text-3xl font-serif italic mb-8">Get in Touch</h2>
          <div className="grid md:grid-cols-3 gap-8 text-sm tracking-widest uppercase text-gray-400">
            <div>
              <p className="text-white mb-2">Location</p>
              <p>Mumbai, India</p>
            </div>
            <div>
              <p className="text-white mb-2">Email</p>
              <p>hello@makeoveranj.com</p>
            </div>
            <div>
              <p className="text-white mb-2">Phone</p>
              <p>+91 98765 43210</p>
            </div>
          </div>
          <p className="mt-16 text-[10px] text-zinc-600 tracking-[0.5em]">
            © 2024 MAKEOVER ANJ. ALL RIGHTS RESERVED.
          </p>
        </div>
      </section>
    </main>
  );
}
