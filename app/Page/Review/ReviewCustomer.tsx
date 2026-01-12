"use client";
import React from "react";
import { Star, Quote } from "lucide-react";

const reviews = [
  {
    name: "Priya Sharma",
    role: "Bridal Client",
    text: "Anj transformed me for my big day! The makeup was flawless and stayed perfect for 12 hours. Highly recommended!",
    stars: 5,
  },
  {
    name: "Sneha Kapoor",
    role: "Fashion Shoot",
    text: "Professional, punctual, and an incredible eye for detail. The glow she achieved was exactly what I wanted.",
    stars: 5,
  },
  {
    name: "Riya Varma",
    role: "Party Makeup",
    text: "I've never felt more beautiful. She really knows how to enhance your natural features without making it look heavy.",
    stars: 5,
  },
];

export default function TestimonialSection() {
  return (
    <section className="bg-black py-20 border-t border-white/5">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
          <div>
            <h2 className="text-white text-4xl md:text-6xl font-serif italic">
              Voices of Beauty
            </h2>
            <p className="text-pink-500 uppercase tracking-[0.3em] text-[10px] mt-2 font-bold">
              What my clients say
            </p>
          </div>
          <div className="text-zinc-500 text-xs tracking-widest uppercase">
            Over 200+ Happy Brides
          </div>
        </div>

        {/* Review Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="group p-8 bg-zinc-950 border border-zinc-900 hover:border-pink-500/30 transition-all duration-500 relative overflow-hidden"
            >
              <Quote className="absolute -top-2 -right-2 w-20 h-20 text-white/[0.03] group-hover:text-pink-500/10 transition-colors" />

              <div className="flex gap-1 mb-4">
                {[...Array(review.stars)].map((_, i) => (
                  <Star
                    key={i}
                    size={12}
                    className="fill-pink-500 text-pink-500"
                  />
                ))}
              </div>

              <p className="text-zinc-300 italic mb-6 leading-relaxed relative z-10">
                "{review.text}"
              </p>

              <div>
                <p className="text-white font-bold tracking-widest uppercase text-xs">
                  {review.name}
                </p>
                <p className="text-zinc-500 text-[10px] uppercase tracking-tighter mt-1">
                  {review.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
