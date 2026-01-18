import Image from "next/image";
import Link from "next/link";

const ReviewPanel = () => {
  return (
    <Link
      href="/testimonials"
      className="relative w-full h-[50vh] md:h-[65vh] overflow-hidden group border-b border-white/10 bg-black"
    >
      {/* Image Layer */}
      <Image
        src="https://images.unsplash.com/photo-1526045612212-70caf35c11bc?q=80&w=1600&auto=format&fit=crop"
        alt="Reviews"
        fill
        sizes="100vw"
        /* Mobile: Color & Scale | Desktop: Grayscale until hover */
        className="object-cover transition-all duration-1000 grayscale-0 md:grayscale-[80%] md:group-hover:grayscale-0 scale-105 md:scale-100 md:group-hover:scale-105"
      />

      {/* Dynamic Overlay */}
      <div className="absolute inset-0 bg-black/40 md:bg-black/60 md:group-hover:bg-black/20 transition-all duration-500" />

      {/* Content */}
      <div className="relative h-full flex flex-col items-center justify-center p-4">
        {/* Title: Updated to match Portfolio/Pricing style */}
        <h2 className="text-white text-6xl md:text-9xl font-black uppercase italic tracking-tighter transition-all duration-700 md:group-hover:tracking-normal">
          Reviews
        </h2>

        {/* Action Line: Always visible on mobile, reveal on desktop hover */}
        <div className="mt-8 flex items-center space-x-4 opacity-100 translate-y-0 md:opacity-0 md:translate-y-4 md:group-hover:opacity-100 md:group-hover:translate-y-0 transition-all duration-700">
          <span className="h-px w-8 md:w-0 md:group-hover:w-12 bg-pink-500 transition-all duration-700"></span>
          <span className="text-white text-[10px] tracking-[0.6em] md:tracking-[1em] uppercase font-bold">
            Client Stories
          </span>
          <span className="h-px w-8 md:w-0 md:group-hover:w-12 bg-pink-500 transition-all duration-700"></span>
        </div>

        {/* Floating Stars/Rating Hint (Optional aesthetic touch) */}
        <div className="mt-4 flex gap-1 opacity-60">
          {[...Array(5)].map((_, i) => (
            <span key={i} className="text-pink-500 text-xs">
              ★
            </span>
          ))}
        </div>
      </div>

      {/* Aesthetic Border Frame - Visible on mobile default */}
      <div className="absolute inset-6 md:inset-10 border border-white/10 md:border-white/0 md:group-hover:border-white/20 transition-all duration-700 pointer-events-none" />
    </Link>
  );
};

export default ReviewPanel;
