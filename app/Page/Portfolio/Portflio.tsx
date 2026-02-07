"use client";
import React, { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { ArrowLeft, X } from "lucide-react";
import Image from "next/image";

const categories = ["All", "Bridal", "Fashion", "Party"];

export default function PortfolioPage() {
  const [filter, setFilter] = useState("All");
  const [selectedItem, setSelectedItem] = useState<any | null>(null);
  const [portfolioData, setPortfolioData] = useState<any[] | null>(null);

  useEffect(() => {
    const cacheBuster = `?t=${new Date().getTime()}`;
    const url = "https://makeover-data.vercel.app/data.json";

    fetch(url + cacheBuster)
      .then((res) => res.json())
      .then((res) => setPortfolioData(res))
      .catch((err) => console.error("Fetch error:", err));
  }, []);
  // Inside PortfolioPage component
  const [currentIndex, setCurrentIndex] = useState(0);

  // Open lightbox at a specific index
  const openLightbox = (item: any) => {
    setSelectedItem(item);
    setCurrentIndex(0); // Start at main image
  };

  // All images combined (Main + Subimages)
  const allImages = useMemo(() => {
    if (!selectedItem) return [];
    return [selectedItem.image, ...(selectedItem.subImages || [])];
  }, [selectedItem]);

  const nextImage = () =>
    setCurrentIndex((prev) => (prev + 1) % allImages.length);
  const prevImage = () =>
    setCurrentIndex((prev) => (prev - 1 + allImages.length) % allImages.length);

  const handleBackgroundClick = (e: React.MouseEvent) => {
    // If the user clicks the actual background (not the image/content), close it
    if (e.target === e.currentTarget) {
      setSelectedItem(null);
    }
  };

  const filteredItems = useMemo(() => {
    if (!portfolioData) return [];
    return filter === "All"
      ? portfolioData
      : portfolioData.filter((item: any) => item.category === filter);
  }, [portfolioData, filter]);

  if (!portfolioData)
    return (
      <div className="min-h-screen bg-black flex items-center justify-center text-zinc-500">
        Loading Artistry...
      </div>
    );

  return (
    <main className="min-h-screen bg-black text-white px-3 md:px-6 py-12">
      {/* Header */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center mb-16 gap-8">
        <Link
          href="/"
          className="flex items-center gap-2 text-zinc-500 hover:text-pink-500 transition-colors group"
        >
          <ArrowLeft
            size={18}
            className="group-hover:-translate-x-1 transition-transform"
          />
          <span className="uppercase tracking-[0.3em] text-[10px]">
            Back to Home
          </span>
        </Link>
        <h1 className="text-4xl md:text-6xl font-serif italic text-center">
          Our Artistry
        </h1>
        <div className="w-[100px] hidden md:block"></div>
      </div>

      {/* STICKY Filter Bar */}
      <div className="sticky top-0 z-50 bg-black/80 backdrop-blur-md py-6 mb-12 border-b border-white/5">
        <div className="flex justify-center gap-4 md:gap-8 flex-wrap">
          {categories.map((cat, index) => (
            <button
              key={`${cat}${index}`}
              onClick={() => {
                setFilter(cat);
                // Optional: Scroll to top of grid when filter changes
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className={`uppercase tracking-[0.2em] md:tracking-[0.4em] text-[10px] pb-2 border-b-2 transition-all duration-500 ${
                filter === cat
                  ? "border-pink-500 text-white"
                  : "border-transparent text-zinc-600 hover:text-zinc-400"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Main Grid */}
      {/* Main Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-6">
        {filteredItems.map((item: any) => (
          <div
            key={item.id}
            className="relative group overflow-hidden rounded-sm bg-zinc-900 aspect-[9/16]"
          >
            {/* 1. Main Image Link */}
            <div
              onClick={() => openLightbox(item)} // Changed this line
              className="block w-full h-full cursor-pointer"
            >
              <Image
                src={item.image}
                alt={item.alt}
                fill
                sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                className="object-cover transition-transform duration-1000 group-hover:scale-105"
                priority={item.id < 5}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity flex items-end p-3">
                <h3 className="text-white text-[9px] uppercase tracking-[0.2em] drop-shadow-md">
                  {item.title}
                </h3>
              </div>
            </div>

            {/* 2. Instagram Icon (Absolute positioned over the link) */}
            {item.link && (
              <Link
                href={item.link || "https://instagram.com"}
                target="_blank"
                rel="noopener noreferrer"
                // Reduced padding to p-1.5 to match the smaller icon scale
                className="absolute top-2 right-2 z-20 p-1.5 bg-black/60 backdrop-blur-md rounded-full text-white hover:text-pink-500 hover:bg-white transition-all duration-300 transform md:translate-y-[-10px] md:opacity-0 group-hover:translate-y-0 group-hover:opacity-100"
                onClick={(e) => e.stopPropagation()}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20" // Scaled down from 30 for both mobile and desktop
                  height="20" // Scaled down from 30 for both mobile and desktop
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2" // Keeps the lines legible at a small size
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
              </Link>
            )}
          </div>
        ))}
      </div>

      {/* Lightbox / Popup */}
      {selectedItem && (
        <div
          onClick={handleBackgroundClick}
          className="fixed inset-0 z-[100] bg-black/40 backdrop-blur-md flex flex-col items-center justify-center p-2 md:p-10 animate-in fade-in duration-300"
        >
          {/* Close Button */}
          <button
            onClick={() => setSelectedItem(null)}
            className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors z-[120] md:block"
          >
            <X size={32} strokeWidth={1} />
          </button>

          <div className="relative w-full max-w-5xl flex flex-col items-center">
            {/* Main Image Container */}
            <div className="relative group w-full flex justify-center items-center min-h-[50vh]">
              {/* Instagram Icon */}
              {selectedItem.link && (
                <Link
                  href={selectedItem.link || "#"}
                  target="_blank"
                  className="absolute top-4 right-4 z-[110] bg-white/90 text-black p-2 rounded-full shadow-xl hover:bg-pink-500 hover:text-white transition-all duration-300"
                >
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                  </svg>
                </Link>
              )}

              {/* Navigation Arrows */}
              {allImages.length > 1 && (
                <>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      prevImage();
                    }}
                    className="absolute left-2 top-1/2 -translate-y-1/2 z-[110] p-2 text-white/30 hover:text-white bg-black/10 hover:bg-black/30 rounded-full transition-all"
                  >
                    <ArrowLeft size={32} strokeWidth={1.5} />
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      nextImage();
                    }}
                    className="absolute right-2 top-1/2 -translate-y-1/2 z-[110] p-2 text-white/30 hover:text-white bg-black/10 hover:bg-black/30 rounded-full transition-all rotate-180"
                  >
                    <ArrowLeft size={32} strokeWidth={1.5} />
                  </button>
                </>
              )}

              {/* Optimized Main Image */}
              <div className="relative w-full h-[75vh] md:h-[80vh]">
                <Image
                  src={allImages[currentIndex]}
                  alt="Gallery View"
                  fill
                  priority // Loads this image immediately
                  className="object-contain rounded-sm shadow-2xl transition-all duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
                />
              </div>
            </div>

            {/* Thumbnail Strip */}
            {allImages.length > 1 && (
              <div className="flex gap-2 mt-6 overflow-x-auto max-w-[90vw] px-2 py-2 no-scrollbar">
                {allImages.map((img: string, idx: number) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentIndex(idx)}
                    className={`relative flex-shrink-0 w-12 h-12 md:w-16 md:h-16 rounded-sm overflow-hidden border-2 transition-all ${
                      currentIndex === idx
                        ? "border-pink-500 scale-105"
                        : "border-transparent opacity-40"
                    }`}
                  >
                    <Image
                      src={img}
                      alt={`Thumbnail ${idx}`}
                      fill
                      className="object-cover"
                      sizes="64px"
                    />
                  </button>
                ))}
              </div>
            )}

            {/* Footer Text */}
            <div className="mt-4 text-center pointer-events-none">
              <h2 className="text-[11px] tracking-[0.3em] uppercase text-white font-medium">
                {selectedItem.title}
              </h2>
              <p className="text-[9px] text-zinc-400 mt-1 tracking-widest">
                {currentIndex + 1} / {allImages.length}
              </p>
            </div>
          </div>
        </div>
      )}
      <footer className="mt-24 text-center pb-10">
        <p className="text-zinc-700 text-[10px] tracking-[1em] uppercase">
          Makeover Anj Artistry
        </p>
      </footer>
    </main>
  );
}
