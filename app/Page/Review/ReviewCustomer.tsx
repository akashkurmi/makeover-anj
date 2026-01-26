import React, { useState } from "react";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import ReviewCard from "./ReviewCard";

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
  {
    name: "Ananya Iyer",
    role: "Bridal Client",
    text: "The best makeover experience ever. She listens to what you want and executes it perfectly.",
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

  // Logic to determine visible reviews
  // On Desktop: Slice 3 reviews (with wrap-around logic)
  // On Mobile: Only the current review
  const getVisibleReviews = () => {
    const visible = [];
    for (let i = 0; i < 3; i++) {
      visible.push(reviews[(currentIndex + i) % reviews.length]);
    }
    return visible;
  };

  return (
    <section className="bg-black py-20 border-t border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-12">
        {/* Centered Heading */}
        <div className="text-center mb-16">
          <h2 className="text-white text-4xl md:text-6xl font-serif italic">
            Voices of Beauty
          </h2>
          <p className="text-pink-500 uppercase tracking-[0.3em] text-[10px] mt-2 font-bold">
            What my clients say
          </p>
        </div>

        {/* Carousel Wrapper */}
        <div className="relative group px-4 md:px-16">
          {/* LEFT ARROW */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-20 p-2 md:p-4 text-white/50 hover:text-pink-500 transition-all duration-300 bg-zinc-900/50 rounded-full backdrop-blur-sm border border-white/5 hover:border-pink-500/50"
            aria-label="Previous"
          >
            <ChevronLeft size={28} strokeWidth={1} />
          </button>

          {/* RIGHT ARROW */}
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-20 p-2 md:p-4 text-white/50 hover:text-pink-500 transition-all duration-300 bg-zinc-900/50 rounded-full backdrop-blur-sm border border-white/5 hover:border-pink-500/50"
            aria-label="Next"
          >
            <ChevronRight size={28} strokeWidth={1} />
          </button>

          {/* Grid Content */}
          <div className="relative">
            {/* Desktop: Grid of 3 */}
            <div className="hidden md:grid grid-cols-3 gap-6">
              {getVisibleReviews().map((review, index) => (
                <div
                  key={`desktop-${index}`}
                  className="animate-in fade-in duration-700"
                >
                  <ReviewCard review={review} />
                </div>
              ))}
            </div>

            {/* Mobile: Single Card */}
            <div className="md:hidden animate-in slide-in-from-right-5 duration-500">
              <ReviewCard review={reviews[currentIndex]} />
            </div>
          </div>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center gap-3 mt-12">
          {reviews.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              className={`h-1 transition-all duration-500 ${
                i === currentIndex ? "w-12 bg-pink-500" : "w-3 bg-zinc-800"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

// Sub-component for the Review Card to keep code clean
