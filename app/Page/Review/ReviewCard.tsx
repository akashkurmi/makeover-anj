"use client";
import { Quote, Star } from "lucide-react";

interface ReviewProps {
  review: {
    name: string;
    role: string;
    text: string;
    stars: number;
    occasion?: string;
  };
}

export default function ReviewCard({ review }: ReviewProps) {
  return (
    <div className="group p-8 md:p-10 bg-[#1E1813] border border-[#3D342B]/60 hover:border-[#C4A16A]/60 transition-all duration-500 relative overflow-hidden h-full flex flex-col justify-between shadow-xl">
      {/* Subtle background quote mark */}
      <Quote className="absolute -top-3 -right-3 w-20 h-20 text-[#C4A16A]/[0.04] group-hover:text-[#C4A16A]/[0.08] transition-colors" />

      <div>
        {/* Rating Stars */}
        <div className="flex items-center space-x-1 mb-6">
          {[...Array(review.stars)].map((_, i) => (
            <Star key={i} size={13} className="fill-[#C4A16A] text-[#C4A16A]" />
          ))}
        </div>

        {/* Quote text */}
        <p className="text-[#EBE4DA] font-serif italic text-base md:text-lg leading-relaxed mb-8 font-light">
          "{review.text}"
        </p>
      </div>

      {/* Author Info */}
      <div className="border-t border-[#3D342B]/60 pt-5 flex items-center justify-between">
        <div>
          <p className="text-[#F2EDE5] font-sans font-medium uppercase tracking-[0.2em] text-xs">
            {review.name}
          </p>
          <p className="text-[#A69C91] text-[10px] uppercase tracking-widest mt-0.5">
            {review.role}
          </p>
        </div>
        <span className="w-1.5 h-1.5 rounded-full bg-[#C4A16A]/50" />
      </div>
    </div>
  );
}
