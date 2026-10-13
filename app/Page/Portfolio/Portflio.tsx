"use client";
import React, { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { ArrowLeft, X, Instagram, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

const categories = ["All", "Bridal", "Fashion", "Party"];

const fallbackPortfolio = [
  {
    id: "fb-1",
    title: "Royal Heritage Bride",
    category: "Bridal",
    image: "/images/_5.jpg",
    subImages: ["/highlight/2.jpg", "/images/_10.jpg"],
    link: "https://www.instagram.com/anjalimakeover7879/",
  },
  {
    id: "fb-2",
    title: "Sangeet Glamour & Glow",
    category: "Party",
    image: "/highlight/2.jpg",
    subImages: ["/highlight/m2.jpg"],
    link: "https://www.instagram.com/anjalimakeover7879/",
  },
  {
    id: "fb-3",
    title: "High-Definition Reception Muse",
    category: "Bridal",
    image: "/highlight/m1.jpg",
    subImages: ["/images/_1.jpg"],
    link: "https://www.instagram.com/anjalimakeover7879/",
  },
  {
    id: "fb-4",
    title: "Haute Hair Sculpture",
    category: "Fashion",
    image: "/highlight/hair.jpg",
    subImages: [],
    link: "https://www.instagram.com/anjalimakeover7879/",
  },
  {
    id: "fb-5",
    title: "Cut-Crease Sunset Eyes",
    category: "Fashion",
    image: "/highlight/eye.jpeg",
    subImages: [],
    link: "https://www.instagram.com/anjalimakeover7879/",
  },
  {
    id: "fb-6",
    title: "Golden Hour Pre-Wedding",
    category: "Bridal",
    image: "/highlight/4.jpg",
    subImages: ["/highlight/3.jpg"],
    link: "https://www.instagram.com/anjalimakeover7879/",
  },
  {
    id: "fb-7",
    title: "Champagne Dewy Cocktail",
    category: "Party",
    image: "/highlight/m2.jpg",
    subImages: [],
    link: "https://www.instagram.com/anjalimakeover7879/",
  },
  {
    id: "fb-8",
    title: "Editorial Fashion Glamour",
    category: "Fashion",
    image: "/highlight/3.jpg",
    subImages: ["/images/_11.jpg"],
    link: "https://www.instagram.com/anjalimakeover7879/",
  },
  {
    id: "fb-9",
    title: "Traditional South Indian Bridal",
    category: "Bridal",
    image: "/images/_1.jpg",
    subImages: ["/images/_3.jpg"],
    link: "https://www.instagram.com/anjalimakeover7879/",
  },
  {
    id: "fb-10",
    title: "Radiant Muhurtham Glow",
    category: "Bridal",
    image: "/images/_10.jpg",
    subImages: [],
    link: "https://www.instagram.com/anjalimakeover7879/",
  },
  {
    id: "fb-11",
    title: "Contemporary Bridal Portrait",
    category: "Bridal",
    image: "/images/_11.jpg",
    subImages: [],
    link: "https://www.instagram.com/anjalimakeover7879/",
  },
  {
    id: "fb-12",
    title: "Subtle Daylight Elegance",
    category: "Party",
    image: "/images/_3.jpg",
    subImages: [],
    link: "https://www.instagram.com/anjalimakeover7879/",
  },
];

export default function PortfolioPage() {
  const [filter, setFilter] = useState("All");
  const [selectedItem, setSelectedItem] = useState<any | null>(null);
  const [portfolioData, setPortfolioData] = useState<any[] | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    fetch("/api/portfolio")
      .then((res) => res.json())
      .then((res) => {
        if (Array.isArray(res) && res.length > 0) {
          setPortfolioData(res);
        } else {
          setPortfolioData(fallbackPortfolio);
        }
      })
      .catch((err) => {
        console.error("Fetch error:", err);
        setPortfolioData(fallbackPortfolio);
      });
  }, []);

  const openLightbox = (item: any) => {
    setSelectedItem(item);
    setCurrentIndex(0);
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

  const allImages = useMemo(() => {
    if (!selectedItem) return [];
    return [selectedItem.image, ...(selectedItem.subImages || [])];
  }, [selectedItem]);

  const nextImage = () =>
    setCurrentIndex((prev) => (prev + 1) % allImages.length);
  const prevImage = () =>
    setCurrentIndex((prev) => (prev - 1 + allImages.length) % allImages.length);

  const handleBackgroundClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      closeLightbox();
    }
  };

  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const minSwipeDistance = 50;

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

  const filteredItems = useMemo(() => {
    const data = portfolioData || fallbackPortfolio;
    return filter === "All"
      ? data
      : data.filter((item: any) => item.category === filter);
  }, [portfolioData, filter]);

  return (
    <main className="min-h-screen bg-[#120F0C] text-[#F2EDE5] px-3.5 sm:px-6 lg:px-8 py-20 sm:py-24 max-w-full overflow-hidden">
      {/* Top Header */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center mb-10 sm:mb-16 gap-4 sm:gap-6 pt-6">
        <Link
          href="/"
          className="flex items-center gap-2 text-[#A69C91] hover:text-[#C4A16A] active:text-[#C4A16A] transition-colors py-2 touch-target"
        >
          <ArrowLeft size={16} />
          <span className="uppercase tracking-[0.25em] text-[11px] font-sans">
            Back to Home
          </span>
        </Link>

        <div className="text-center">
          <div className="flex items-center justify-center space-x-2.5 mb-1.5">
            <span className="h-px w-5 bg-[#C4A16A]" />
            <p className="text-[9.5px] uppercase tracking-[0.3em] text-[#C4A16A]">
              CURATED PORTFOLIO
            </p>
            <span className="h-px w-5 bg-[#C4A16A]" />
          </div>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-light text-[#F2EDE5] tracking-tight">
            Our Artistry
          </h1>
        </div>

        <div className="w-[120px] hidden md:block"></div>
      </div>

      {/* STICKY FILTER BAR: Horizontal swipe on mobile */}
      <div className="sticky top-16 sm:top-20 z-30 bg-[#120F0C]/95 backdrop-blur-md py-3.5 mb-8 sm:mb-12 border-y border-[#3D342B]/60 -mx-3.5 sm:mx-0 px-4 sm:px-0">
        <div className="flex justify-center gap-4 sm:gap-8 overflow-x-auto no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`min-h-[44px] uppercase tracking-[0.2em] sm:tracking-[0.25em] text-[10.5px] sm:text-[11px] px-2 transition-all font-sans relative whitespace-nowrap touch-target ${
                filter === cat
                  ? "text-[#C4A16A] font-medium after:content-[''] after:absolute after:bottom-1 after:left-0 after:w-full after:h-[1px] after:bg-[#C4A16A]"
                  : "text-[#A69C91] hover:text-[#F2EDE5] active:text-[#F2EDE5]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* MAIN GALLERY GRID: 2-col on mobile, 3-col on tablet, 4-col on desktop */}
      <div className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2.5 sm:gap-4 lg:gap-6">
        {filteredItems.map((item: any) => (
          <div
            key={item.id}
            className="group relative overflow-hidden bg-[#1E1813] border border-[#3D342B]/50 hover:border-[#C4A16A]/70 active:border-[#C4A16A] aspect-[9/14] transition-all duration-300 cursor-pointer shadow-lg"
          >
            {/* Main Image Click Area */}
            <div onClick={() => openLightbox(item)} className="block w-full h-full relative">
              <Image
                src={item.image}
                alt={item.title || "Anjali Makeover Portfolio"}
                fill
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#120F0C]/90 via-[#120F0C]/25 to-transparent opacity-75 group-hover:opacity-90 transition-opacity flex flex-col justify-end p-3 sm:p-4">
                <span className="text-[7.5px] sm:text-[8px] uppercase tracking-[0.25em] text-[#C4A16A]">
                  {item.category}
                </span>
                <h3 className="text-white text-[11px] sm:text-xs md:text-sm font-serif italic tracking-wider mt-0.5 line-clamp-1">
                  {item.title}
                </h3>
              </div>
            </div>

            {/* Instagram Link Overlay */}
            <Link
              href={item.link || "https://www.instagram.com/anjalimakeover7879/"}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View look on Instagram"
              className="absolute top-2 right-2 z-20 min-w-[36px] min-h-[36px] w-9 h-9 sm:w-10 sm:h-10 p-2 bg-[#120F0C]/80 backdrop-blur-md rounded-full text-[#A69C91] hover:text-[#120F0C] active:text-[#120F0C] hover:bg-[#C4A16A] active:bg-[#C4A16A] transition-all flex items-center justify-center border border-[#3D342B]/60 hover:border-[#C4A16A] shadow-md group/insta touch-target"
              onClick={(e) => e.stopPropagation()}
            >
              <Instagram size={15} className="transition-transform duration-300 group-hover/insta:scale-110" />
            </Link>
          </div>
        ))}
      </div>

      {/* LUXURY LIGHTBOX MODAL WITH MOBILE SWIPE */}
      {selectedItem && (
        <div
          onClick={handleBackgroundClick}
          className="fixed inset-0 z-[100] bg-[#120F0C]/95 backdrop-blur-xl flex flex-col items-center justify-between p-3 sm:p-8 animate-in fade-in duration-200"
          style={{ paddingTop: "max(1rem, env(safe-area-inset-top))", paddingBottom: "max(1rem, env(safe-area-inset-bottom))" }}
        >
          {/* Top Bar */}
          <div className="w-full max-w-5xl flex items-center justify-between z-[120] pb-2">
            <span className="text-[9px] sm:text-[10px] uppercase tracking-[0.3em] text-[#C4A16A]">
              {currentIndex + 1} / {allImages.length}
            </span>

            <button
              onClick={closeLightbox}
              className="min-w-[48px] min-h-[48px] p-2 flex items-center justify-center text-[#A69C91] hover:text-[#C4A16A] active:text-[#C4A16A] transition-colors touch-target"
              aria-label="Close image popup"
            >
              <X size={28} strokeWidth={1.5} />
            </button>
          </div>

          {/* Interactive Stage */}
          <div
            onClick={(e) => e.stopPropagation()}
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
            className="relative w-full max-w-4xl flex-1 flex flex-col items-center justify-center touch-pan-y"
          >
            {/* Navigation Arrows */}
            {allImages.length > 1 && (
              <>
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
              </>
            )}

            {/* Main Image */}
            <div className="relative w-full h-[60svh] sm:h-[68svh] select-none">
              <Image
                src={allImages[currentIndex]}
                alt={selectedItem.title || "Anjali Makeover"}
                fill
                priority
                className="object-contain"
                sizes="(max-width: 768px) 100vw, 1000px"
              />
            </div>
          </div>

          {/* Caption */}
          <div className="mt-2 text-center z-[120]">
            <span className="text-[8.5px] sm:text-[9.5px] uppercase tracking-[0.3em] text-[#C4A16A]">
              {selectedItem.category}
            </span>
            <h2 className="text-base sm:text-xl font-serif italic text-[#F2EDE5] mt-0.5">
              {selectedItem.title}
            </h2>
          </div>
        </div>
      )}
    </main>
  );
}
