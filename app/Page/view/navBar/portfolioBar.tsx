import Image from "next/image";
import Link from "next/link";

const portfolioPreview = [
  "/images/_1.jpg",
  "/images/_3.jpg",
  "/images/_10.jpg",
  "/images/_11.jpg",
];
const PortfolioBar = () => {
  return (
    <>
      <Link
        href="/Page/Portfolio"
        className="relative w-full h-[50vh] md:h-[65vh] overflow-hidden group border-b border-white/10 bg-black"
      >
        {/* The Moving Track */}
        {/* Mobile: opacity-80 | Desktop: opacity-40 (80 on hover) */}
        <div className="absolute inset-0 flex items-center transition-opacity duration-1000 opacity-80 md:opacity-40 md:group-hover:opacity-80">
          <div className="flex w-fit gap-4 animate-marquee whitespace-nowrap">
            {[...portfolioPreview, ...portfolioPreview].map((src, i) => (
              <div
                key={i}
                className="relative w-[250px] h-[350px] md:w-[350px] md:h-[450px] flex-shrink-0"
              >
                <Image
                  src={src}
                  alt="Bridal HD Makeup look for Indian wedding by Anjali Makeover, Anjali Makeup artist"
                  fill
                  fetchPriority="high"
                  className="object-cover transition-all duration-700 rounded-sm grayscale-0 md:grayscale md:group-hover:grayscale-0"
                />
              </div>
            ))}
          </div>
        </div>

        {/* STATIC TEXT LAYER */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/60 flex flex-col items-center justify-center">
          <div className="overflow-hidden border-y border-pink-500/30 py-4 px-12 transform -rotate-2 group-hover:rotate-0 transition-transform duration-700">
            <h2 className="text-white text-6xl md:text-9xl font-black uppercase italic tracking-tighter">
              <span className="text-pink-500">Por</span>tfolio
            </h2>
          </div>
          <span className="mt-8 text-pink-500 text-xs tracking-[1em] uppercase font-bold animate-pulse">
            Enter Gallery
          </span>
        </div>
      </Link>
    </>
  );
};

export default PortfolioBar;
