"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ArrowUpRight, X, ChevronLeft, ChevronRight } from "lucide-react";

interface GalleryItem {
  id: number;
  category: string;
  title: string;
  image: string;
  mobileClass: string;
}

const galleryItems: GalleryItem[] = [
  {
    id: 1,
    category: "BRIDAL MAKEUP",
    title: "The Royal Heritage Bride",
    image: "/images/_5.jpg",
    mobileClass: "col-span-2 aspect-[4/3] sm:aspect-[16/10] lg:col-span-2 lg:row-span-2 lg:aspect-auto lg:h-[620px]",
  },
  {
    id: 2,
    category: "EVENTS GLAMOUR",
    title: "Sangeet Radiance",
    image: "/highlight/2.jpg",
    mobileClass: "col-span-1 aspect-[3/4] lg:h-[300px] lg:aspect-auto",
  },
  {
    id: 3,
    category: "HAIR ARTISTRY",
    title: "Bridal Wave Sculpture",
    image: "/highlight/hair.jpg",
    mobileClass: "col-span-1 aspect-[3/4] lg:h-[300px] lg:aspect-auto",
  },
  {
    id: 4,
    category: "EYE MAKEUP",
    title: "Cut-Crease Precision",
    image: "/highlight/eye.jpeg",
    mobileClass: "col-span-1 aspect-[3/4] lg:h-[300px] lg:aspect-auto",
  },
  {
    id: 5,
    category: "BRIDAL HD",
    title: "Luminous Reception Muse",
    image: "/highlight/m1.jpg",
    mobileClass: "col-span-1 aspect-[3/4] lg:h-[300px] lg:aspect-auto",
  },
  {
    id: 6,
    category: "PRE-WEDDING",
    title: "Golden Hour Glow",
    image: "/highlight/4.jpg",
    mobileClass: "col-span-1 sm:col-span-2 aspect-[4/3] lg:col-span-2 lg:h-[300px] lg:aspect-auto",
  },
  {
    id: 7,
    category: "PARTY MAKEUP",
    title: "Dewy Champagne Cocktail",
    image: "/highlight/m2.jpg",
    mobileClass: "col-span-1 sm:col-span-2 aspect-[4/3] lg:col-span-2 lg:h-[300px] lg:aspect-auto",
  },
];

export default function Highlight() {
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);
  const [selectedIndex, setSelectedIndex] = useState<number>(0);

  // Touch swipe handling for mobile lightbox
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const minSwipeDistance = 45;

  const openLightbox = (item: GalleryItem, index: number) => {
    setSelectedItem(item);
    setSelectedIndex(index);
    if (typeof document !== "undefined") {
      document.body.style.overflow = "hidden";
    }
  };

  const closeLightbox = () => {
    setSelectedItem(null);
    if (typeof document !== "undefined") {
      document.body.style.overflow = "unset";
    }
  };

  const nextImage = () => {
    const nextIdx = (selectedIndex + 1) % galleryItems.length;
    setSelectedIndex(nextIdx);
    setSelectedItem(galleryItems[nextIdx]);
  };

  const prevImage = () => {
    const prevIdx = (selectedIndex - 1 + galleryItems.length) % galleryItems.length;
    setSelectedIndex(prevIdx);
    setSelectedItem(galleryItems[prevIdx]);
  };

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    if (distance > minSwipeDistance) {
      nextImage();
    } else if (distance < -minSwipeDistance) {
      prevImage();
    }
  };

  return (
    <section
      id="gallery"
      className="bg-[#17120E] py-16 sm:py-24 lg:py-36 px-4 sm:px-8 lg:px-12 border-b border-[#3D342B]/60 max-w-full overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        {/* HEADER */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-16 gap-4 sm:gap-6">
          <div className="space-y-3 sm:space-y-4">
            <div className="flex items-center space-x-2.5">
              <span className="h-px w-6 sm:w-8 bg-[#C4A16A]" />
              <p className="text-[9.5px] sm:text-[11px] lg:text-xs uppercase tracking-[0.3em] sm:tracking-[0.35em] text-[#C4A16A] font-sans">
                ARTISTRY GALLERY
              </p>
            </div>
            <h2 className="text-3xl xs:text-4xl sm:text-6xl lg:text-7xl font-serif font-light text-[#F2EDE5] leading-[1.08] tracking-tight">
              Selected <span className="italic font-normal text-[#C4A16A]">portraits.</span>
            </h2>
          </div>

          <div className="flex flex-col md:items-end gap-3 sm:gap-4">
            <p className="text-xs sm:text-sm font-sans text-[#A69C91] tracking-wider font-light md:text-right max-w-sm">
              Signature transformations captured on brides and fashion muses.
            </p>
            <Link
              href="/Page/Portfolio"
              className="w-full xs:w-auto inline-flex items-center justify-center space-x-2.5 px-6 sm:px-7 py-3 sm:py-3.5 bg-[#C4A16A] hover:bg-[#D4B47F] active:bg-[#D4B47F] text-[#120F0C] font-sans font-medium text-[11px] sm:text-xs uppercase tracking-[0.22em] border border-[#E0C392]/40 transition-all duration-300 shadow-[0_4px_20px_rgba(196,161,106,0.25)] hover:shadow-[0_8px_30px_rgba(196,161,106,0.45)] active:scale-[0.98] group touch-target min-h-[46px]"
            >
              <span>VIEW FULL GALLERY</span>
              <ArrowUpRight size={15} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200 shrink-0 text-[#120F0C]" />
            </Link>
          </div>
        </div>

        {/* MOBILE-FIRST OPTIMIZED GRID: 2-column on mobile, 4-column on desktop */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-4 lg:gap-5">
          {galleryItems.map((item, index) => (
            <div
              key={item.id}
              onClick={() => openLightbox(item, index)}
              className={`group relative overflow-hidden bg-[#1E1813] cursor-pointer border border-[#3D342B]/50 hover:border-[#C4A16A]/70 active:border-[#C4A16A] transition-all duration-300 ${item.mobileClass}`}
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                sizes={
                  index === 0
                    ? "(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 50vw"
                    : "(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                }
                priority={index === 0}
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />

              {/* OVERLAY: Subtly visible on mobile for immediate reading */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#120F0C]/90 via-[#120F0C]/30 to-transparent opacity-75 group-hover:opacity-90 transition-opacity" />

              {/* CONTENT OVERLAY */}
              <div className="absolute inset-0 p-3.5 sm:p-5 lg:p-6 flex flex-col justify-between z-10">
                <div className="flex justify-end">
                  <span className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#120F0C]/70 backdrop-blur-md border border-[#3D342B] flex items-center justify-center text-[#F2EDE5] group-hover:bg-[#C4A16A] group-hover:text-[#120F0C] transition-all">
                    <ArrowUpRight size={13} />
                  </span>
                </div>

                <div>
                  <span className="text-[7.5px] sm:text-[8.5px] lg:text-[9px] uppercase tracking-[0.25em] text-[#C4A16A] block mb-0.5">
                    {item.category}
                  </span>
                  <h3 className="text-xs sm:text-base lg:text-xl font-serif text-[#F2EDE5] tracking-wide line-clamp-1">
                    {item.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* FULL-SCREEN TOUCH-OPTIMIZED LIGHTBOX */}
      {selectedItem && (
        <div
          onClick={closeLightbox}
          className="fixed inset-0 z-[100] bg-[#120F0C]/95 backdrop-blur-xl flex flex-col items-center justify-between p-4 sm:p-8 animate-in fade-in duration-200"
          style={{ paddingTop: "max(1rem, env(safe-area-inset-top))", paddingBottom: "max(1rem, env(safe-area-inset-bottom))" }}
        >
          {/* Top Bar inside Lightbox */}
          <div className="w-full max-w-5xl flex items-center justify-between z-[120] pb-2">
            <span className="text-[9px] sm:text-[10px] uppercase tracking-[0.3em] text-[#C4A16A]">
              {selectedIndex + 1} / {galleryItems.length}
            </span>

            <button
              onClick={closeLightbox}
              className="min-w-[48px] min-h-[48px] p-2 flex items-center justify-center text-[#A69C91] hover:text-[#C4A16A] active:text-[#C4A16A] transition-colors touch-target"
              aria-label="Close image popup"
            >
              <X size={28} strokeWidth={1.5} />
            </button>
          </div>

          {/* Active Image Stage with Touch-Swipe */}
          <div
            onClick={(e) => e.stopPropagation()}
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
            className="relative w-full max-w-4xl flex-1 flex flex-col items-center justify-center touch-pan-y"
          >
            {/* Prev / Next controls (Touch targets min 48x48px) */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                prevImage();
              }}
              className="absolute left-1 sm:left-4 top-1/2 -translate-y-1/2 min-w-[48px] min-h-[48px] p-3 text-[#F2EDE5]/80 hover:text-[#120F0C] active:text-[#120F0C] bg-[#1E1813]/85 hover:bg-[#C4A16A] active:bg-[#C4A16A] transition-all border border-[#3D342B] z-[120] touch-target"
              aria-label="Previous image"
            >
              <ChevronLeft size={22} />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                nextImage();
              }}
              className="absolute right-1 sm:right-4 top-1/2 -translate-y-1/2 min-w-[48px] min-h-[48px] p-3 text-[#F2EDE5]/80 hover:text-[#120F0C] active:text-[#120F0C] bg-[#1E1813]/85 hover:bg-[#C4A16A] active:bg-[#C4A16A] transition-all border border-[#3D342B] z-[120] touch-target"
              aria-label="Next image"
            >
              <ChevronRight size={22} />
            </button>

            {/* Responsive Main Image */}
            <div className="relative w-full h-[60svh] sm:h-[70svh] select-none">
              <Image
                src={selectedItem.image}
                alt={selectedItem.title}
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100vw, 1000px"
                priority
              />
            </div>
          </div>

          {/* Caption */}
          <div className="mt-2 text-center z-[120]">
            <p className="text-[8.5px] sm:text-[9.5px] uppercase tracking-[0.3em] text-[#C4A16A]">
              {selectedItem.category}
            </p>
            <h4 className="text-base sm:text-xl font-serif italic text-[#F2EDE5] mt-0.5">
              {selectedItem.title}
            </h4>
          </div>
        </div>
      )}
    </section>
  );
}
