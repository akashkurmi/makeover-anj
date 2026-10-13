"use client";
import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import ReviewCard from "./ReviewCard";

const reviews = [
  {
    name: "Priya Sharma",
    role: "Bangalore Wedding",
    text: "Anjali transformed me for my wedding day! The HD makeup was truly weightless and stayed immaculate across 14 hours of ceremonies and photography. The compliments haven't stopped.",
    stars: 5,
  },
  {
    name: "Sneha Kapoor",
    role: "Fashion & Editorial Shoot",
    text: "Incredible eye for bone structure and skin textures. She achieved that coveted celebrity glass-skin glow without looking heavy. Punctual, professional, and a true artist.",
    stars: 5,
  },
  {
    name: "Riya Varma",
    role: "Sangeet & Reception",
    text: "I have never felt more radiant. She listens deeply to what you envision and elevates it with subtle champagne accents and gorgeous hair sculpting.",
    stars: 5,
  },
  {
    name: "Ananya Iyer",
    role: "Destination Bride, Udaipur",
    text: "The ultimate luxury bridal experience. Anjali traveled with us for our destination wedding and handled all my ceremony looks with serenity and perfection.",
    stars: 5,
  },
];

export default function TestimonialSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + 1 >= reviews.length ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? reviews.length - 1 : prevIndex - 1
    );
  };

  const getVisibleReviews = () => {
    const visible = [];
    for (let i = 0; i < 3; i++) {
      visible.push(reviews[(currentIndex + i) % reviews.length]);
    }
    return visible;
  };

  return (
    <section className="bg-[#120F0C] py-16 sm:py-24 lg:py-36 border-b border-[#3D342B]/60 overflow-hidden max-w-full">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        {/* SECTION HEADER */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20 space-y-3 sm:space-y-4">
          <div className="flex items-center justify-center space-x-2.5">
            <span className="h-px w-6 sm:w-8 bg-[#C4A16A]" />
            <p className="text-[9.5px] sm:text-[11px] lg:text-xs uppercase tracking-[0.3em] sm:tracking-[0.35em] text-[#C4A16A] font-sans">
              VOICES OF BEAUTY
            </p>
            <span className="h-px w-6 sm:w-8 bg-[#C4A16A]" />
          </div>

          <h2 className="text-3xl xs:text-4xl sm:text-6xl lg:text-7xl font-serif font-light text-[#F2EDE5] leading-[1.08] tracking-tight">
            Client <span className="italic font-normal text-[#C4A16A]">stories.</span>
          </h2>
        </div>

        {/* CAROUSEL WRAPPER */}
        <div className="relative">
          {/* REVIEWS GRID: 1 card on mobile, 3 cards on desktop */}
          <div className="relative">
            {/* Desktop: 3 Cards */}
            <div className="hidden md:grid grid-cols-3 gap-6">
              {getVisibleReviews().map((review, index) => (
                <div key={`desktop-${index}`} className="animate-in fade-in duration-500">
                  <ReviewCard review={review} />
                </div>
              ))}
            </div>

            {/* Mobile: 1 Card */}
            <div className="md:hidden">
              <ReviewCard review={reviews[currentIndex]} />
            </div>
          </div>

          {/* BOTTOM NAVIGATION CONTROLS (Below the review card) */}
          <div className="flex items-center justify-between sm:justify-center sm:gap-8 mt-6 sm:mt-8 px-2 max-w-xs mx-auto sm:max-w-none">
            <button
              onClick={prevSlide}
              className="min-w-[48px] min-h-[48px] flex items-center justify-center p-3 bg-[#1E1813] border border-[#3D342B] text-[#F2EDE5] hover:text-[#C4A16A] active:bg-[#C4A16A] active:text-[#120F0C] transition-colors touch-target shadow-lg"
              aria-label="Previous review"
            >
              <ChevronLeft size={20} />
            </button>

            <span className="text-xs sm:text-sm font-serif italic text-[#C4A16A]">
              0{currentIndex + 1} / 0{reviews.length}
            </span>

            <button
              onClick={nextSlide}
              className="min-w-[48px] min-h-[48px] flex items-center justify-center p-3 bg-[#1E1813] border border-[#3D342B] text-[#F2EDE5] hover:text-[#C4A16A] active:bg-[#C4A16A] active:text-[#120F0C] transition-colors touch-target shadow-lg"
              aria-label="Next review"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* PAGINATION DOTS */}
        <div className="flex justify-center items-center gap-3 mt-8 sm:mt-12">
          {reviews.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              aria-label={`Go to review ${i + 1}`}
              className="min-h-[30px] flex items-center"
            >
              <span
                className={`block h-1 transition-all duration-300 ${
                  i === currentIndex ? "w-8 bg-[#C4A16A]" : "w-2.5 bg-[#3D342B] hover:bg-[#A69C91]"
                }`}
              />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
