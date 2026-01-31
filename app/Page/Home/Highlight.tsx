import Image from "next/image";
import { useState, useEffect } from "react";

const Highlight = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Images for the Carousel in Column 1
  const carouselImages = [
    "/images/_5.jpg",
    "/highlight/2.jpg",
    "/highlight/3.jpg",
    "/highlight/4.jpg",
  ];

  // Auto-play logic
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
    }, 4000); // Change image every 4 seconds
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="bg-black py-16 md:py-20 px-4 md:px-10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-serif italic text-pink-500 mb-2">
            Artistry Gallery
          </h2>
          <p className="text-gray-400 uppercase tracking-widest text-[10px] md:text-xs">
            A glimpse of our signature transformations
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-3 md:gap-4 h-auto md:h-[650px]">
          {/* COLUMN 1: The Carousel Highlight (60% Width on Desktop) */}
          <div className="col-span-2 md:col-span-3 relative overflow-hidden group rounded-sm h-[350px] md:h-full bg-zinc-900">
            {carouselImages.map((src, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                  index === currentSlide ? "opacity-100" : "opacity-0"
                }`}
              >
                <Image
                  src={src}
                  alt={`Highlight ${index + 1}`}
                  fill
                  priority={index === 0}
                  className="object-cover"
                />
              </div>
            ))}

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end p-6 z-10">
              <div className="flex flex-col gap-2">
                <p className="text-white text-xs md:text-lg tracking-[0.3em] uppercase font-light">
                  The Signature Bride
                </p>
                {/* Carousel Indicators */}
                <div className="flex gap-2">
                  {carouselImages.map((_, i) => (
                    <div
                      key={i}
                      className={`h-1 transition-all duration-500 ${
                        i === currentSlide
                          ? "w-8 bg-pink-500"
                          : "w-2 bg-white/30"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* COLUMN 2: Balanced Pair (20% Width) */}
          <div className="col-span-1 md:col-span-1 grid grid-rows-2 gap-3 md:gap-4 h-[400px] md:h-full">
            <div className="relative overflow-hidden group rounded-sm">
              <Image
                src="/highlight/m1.jpg"
                alt="Bride Glam"
                fill
                className="object-cover transition-all duration-700"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors flex items-end p-3">
                <p className="text-white text-[9px] tracking-widest uppercase">
                  Glam
                </p>
              </div>
            </div>
            <div className="relative overflow-hidden group rounded-sm">
              <Image
                src="/highlight/m2.jpg"
                alt="Reception Look"
                fill
                className="object-cover transition-all duration-700"
              />
            </div>
          </div>

          {/* COLUMN 3: Details Stack (20% Width) */}
          <div className="col-span-1 md:col-span-1 grid grid-rows-4 gap-3 md:gap-4 h-[400px] md:h-full">
            <div className="relative overflow-hidden group rounded-sm row-span-1">
              <Image
                src="/highlight/eye.jpeg"
                alt="Eye Detail"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/20 flex items-end p-3">
                <p className="text-white text-[8px] tracking-widest uppercase">
                  Eyes
                </p>
              </div>
            </div>
            <div className="relative overflow-hidden group rounded-sm row-span-3">
              <Image
                src="/highlight/hair.jpg"
                alt="Hair Look"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/20 flex items-end p-3">
                <p className="text-white text-[8px] tracking-widest uppercase">
                  Hair
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Highlight;
