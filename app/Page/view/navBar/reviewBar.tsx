import Link from "next/link";

const ReviewPanel = () => {
  return (
    <Link
      href="https://share.google/gzG2G7fj9Mk3MkOEn"
      // Changed mobile height to 15vh or 20vh to ensure it is "small"
      className="relative w-full h-[18vh] md:h-[65vh] overflow-hidden group border-b border-white/10 bg-black block"
    >
      {/* Dynamic Overlay */}
      <div className="absolute inset-0 bg-black/40 md:bg-black/60 md:group-hover:bg-black/20 transition-all duration-500" />

      {/* Content */}
      <div className="relative h-full flex flex-col items-center justify-center p-2">
        {/* Title: Reduced font size for mobile (text-4xl) to fit the small height */}
        <h2 className="text-white text-4xl md:text-9xl font-black uppercase italic tracking-tighter transition-all duration-700 md:group-hover:tracking-normal">
          <span className="text-pink-500">Re</span>views
        </h2>

        {/* Action Line: Compact spacing for mobile */}
        <div className="mt-2 md:mt-8 flex items-center space-x-4 opacity-100 translate-y-0 md:opacity-0 md:translate-y-4 md:group-hover:opacity-100 md:group-hover:translate-y-0 transition-all duration-700">
          <span className="h-px w-6 md:w-0 md:group-hover:w-12 bg-pink-500 transition-all duration-700"></span>
          <span className="text-white text-[8px] md:text-[10px] tracking-[0.4em] md:tracking-[1em] uppercase font-bold">
            Client Stories
          </span>
          <span className="h-px w-6 md:w-0 md:group-hover:w-12 bg-pink-500 transition-all duration-700"></span>
        </div>

        {/* Floating Stars: Hidden on mobile to keep it clean, visible on desktop */}
        <div className="hidden md:flex mt-4 gap-1 opacity-60">
          {[...Array(5)].map((_, i) => (
            <span key={i} className="text-pink-500 text-xs">
              ★
            </span>
          ))}
        </div>
      </div>

      {/* Aesthetic Border Frame: Adjusted inset for mobile */}
      <div className="absolute inset-4 md:inset-10 border border-white/10 md:border-white/0 md:group-hover:border-white/20 transition-all duration-700 pointer-events-none" />
    </Link>
  );
};

export default ReviewPanel;
