import Image from "next/image";
import Link from "next/link";

const PricingBar = () => {
  return (
    <>
      {" "}
      <Link
        href="/pricing"
        className="relative w-full h-[50vh] md:h-[70vh] overflow-hidden group border-b border-white/10 bg-black"
      >
        {/* BACKGROUND LAYER */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/wpp.jpeg"
            alt="Pricing Background"
            fill
            className="object-cover opacity-50 md:opacity-30 grayscale-0 md:grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-[3000ms] ease-out"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black" />
        </div>

        {/* FLOATING PRICE ELEMENTS */}
        {/* Mobile: Always visible (opacity-100) | Desktop: Hidden until hover (md:opacity-0) */}
        <div className="absolute inset-0 z-10 pointer-events-none">
          {/* Price Tag 1 */}
          <div className="absolute top-[15%] left-[8%] md:top-[20%] md:left-[15%] opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-all duration-700 translate-y-0 md:translate-y-4 md:group-hover:translate-y-0">
            <p className="text-white/60 md:text-white/40 text-[9px] md:text-[10px] tracking-widest uppercase">
              Bridal
            </p>
            <p className="text-pink-500 text-xl md:text-2xl font-light">
              ₹15,000+
            </p>
          </div>

          {/* Price Tag 2 */}
          <div className="absolute bottom-[20%] right-[8%] md:bottom-[25%] md:right-[15%] text-right opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-all duration-700 translate-y-0 md:translate-y-4 md:group-hover:translate-y-0">
            <p className="text-white/60 md:text-white/40 text-[9px] md:text-[10px] tracking-widest uppercase">
              Party
            </p>
            <p className="text-pink-500 text-xl md:text-2xl font-light">
              ₹5,000+
            </p>
          </div>
        </div>

        {/* RUNNING OFFER SIGN */}
        {/* Reduced size for mobile so it doesn't clutter the screen */}
        <div className="absolute top-4 right-0 md:top-8 md:right-8 z-20">
          <div className="bg-pink-600 text-white text-[8px] md:text-[9px] font-bold tracking-[0.2em] px-3 py-1 uppercase -rotate-45 shadow-xl animate-pulse">
            OFFER
          </div>
        </div>

        {/* CENTER TEXT LAYER */}
        <div className="relative z-20 h-full flex flex-col items-center justify-center">
          <h2 className="text-white text-5xl md:text-9xl font-black uppercase italic tracking-tighter">
            Pricing
          </h2>

          {/* Mobile-only CTA */}
          <span className="md:hidden mt-4 text-pink-500 text-[8px] tracking-[0.5em] uppercase border-b border-pink-500/30 pb-1">
            Tap to View Full Rates
          </span>
        </div>

        {/* SCANNER LINE (Keep it for mobile too, looks cool!) */}
        <div className="absolute left-0 w-full h-[1px] bg-pink-500/20 top-0 animate-scan pointer-events-none" />
      </Link>
    </>
  );
};

export default PricingBar;
