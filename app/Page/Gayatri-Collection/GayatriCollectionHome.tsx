"use client";
import React, { useState, useEffect, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Sparkles,
  SlidersHorizontal,
  X,
  MapPin,
  Loader2,
  ArrowLeft,
} from "lucide-react";
import SidebarFilter from "./SideFilter";
import { getCollectionData } from "./getCollectionData";
import ProductCard from "../comp/ProductCard";

const GayatriCollection = () => {
  const [outfits, setOutfits] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [priceRange, setPriceRange] = useState(15000);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedColor, setSelectedColor] = useState<string | null>(null);
  const [location, setLocation] = useState("Khurai");

  // Inside GayatriCollection component
  const [selectedItem, setSelectedItem] = useState<any | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Combine main image and sub-images into one array
  const allImages = useMemo(() => {
    if (!selectedItem) return [];
    // Adjust key names based on your JSON (e.g., item.imageUrl or item.image)
    const main = selectedItem.imageUrl || selectedItem.image;
    const subs = selectedItem.subImages || [];
    return [main, ...subs];
  }, [selectedItem]);

  const openLightbox = (item: any) => {
    setSelectedItem(item);
    setCurrentIndex(0);
  };

  const nextImage = () =>
    setCurrentIndex((prev) => (prev + 1) % allImages.length);
  const prevImage = () =>
    setCurrentIndex((prev) => (prev - 1 + allImages.length) % allImages.length);

  // Handle Click Outside to close
  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) setSelectedItem(null);
  };
  // State for Mobile Filter Overlay
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);

  useEffect(() => {
    const loadData = async () => {
      setLoading(true);
      const data = await getCollectionData();
      setOutfits(data || []);
      setLoading(false);
    };
    loadData();
  }, []);

  const filteredOutfits = outfits.filter((item) => {
    const matchesPrice = item.pricePerDay <= priceRange;
    const matchesCategory =
      selectedCategory === "All" || item.category === selectedCategory;
    const matchesColor =
      !selectedColor || item.color.tailwind === selectedColor;
    return matchesPrice && matchesCategory && matchesColor;
  });

  return (
    <div className="bg-[#120F0C] min-h-screen text-[#F2EDE5] font-sans">
      {/* --- HEADER SECTION --- */}
      <section className="pt-28 pb-12 px-6 text-center border-b border-[#3D342B]/60">
        <div className="flex items-center justify-center gap-2 mb-3">
          <Sparkles size={14} className="text-[#C4A16A]" />
          <span className="text-[10px] uppercase tracking-[0.4em] text-[#A69C91]">
            Anjali Makeover Presents
          </span>
        </div>
        <h1 className="text-4xl md:text-7xl font-serif font-light tracking-tight uppercase mb-6 text-[#F2EDE5]">
          The <span className="italic font-normal text-[#C4A16A]">Gayatri</span>{" "}
          Collection
        </h1>

        {/* Location Selector */}
        <div className="relative inline-flex items-center group">
          <MapPin size={14} className="absolute left-3.5 text-[#C4A16A]" />
          <select
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="bg-[#1E1813] border border-[#3D342B] text-[#F2EDE5] text-[10px] uppercase tracking-[0.2em] rounded-full py-2 pl-10 pr-8 appearance-none focus:outline-none focus:border-[#C4A16A] cursor-pointer transition-all"
          >
            <option value="Khurai" className="bg-[#120F0C]">Khurai</option>
            <option value="Bangalore" className="bg-[#120F0C]">Bangalore</option>
          </select>
        </div>
      </section>

      <main className="max-w-7xl mx-auto px-6 py-12">
        {location === "Bangalore" ? (
          <div className="py-32 flex flex-col items-center justify-center text-center">
            <MapPin size={32} className="text-[#C4A16A] mb-6" />
            <h2 className="text-xl uppercase tracking-widest text-[#F2EDE5]">
              Branch coming soon
            </h2>
          </div>
        ) : loading ? (
          <div className="flex flex-col items-center justify-center py-20">
            <Loader2 className="animate-spin text-[#C4A16A] mb-4" size={32} />
            <p className="text-[10px] uppercase tracking-widest text-[#A69C91]">
              Loading Collection...
            </p>
          </div>
        ) : (
          <div className="flex flex-col md:flex-row gap-12">
            {/* --- MOBILE FILTER TRIGGER --- */}
            <div className="md:hidden mb-8">
              <button
                onClick={() => setIsMobileFilterOpen(true)}
                className="w-full flex items-center justify-center gap-3 py-4 border border-[#3D342B] bg-[#1E1813] rounded-sm text-[10px] uppercase tracking-[0.3em] hover:border-[#C4A16A] transition-colors text-[#F2EDE5]"
              >
                <SlidersHorizontal size={16} className="text-[#C4A16A]" />
                Filter Collection
              </button>
            </div>

            {/* Desktop Sidebar */}
            <aside className="hidden md:block w-64 space-y-10 sticky top-24 h-fit">
              <SidebarFilter
                priceRange={priceRange}
                setPriceRange={setPriceRange}
                selectedCategory={selectedCategory}
                setSelectedCategory={setSelectedCategory}
                selectedColor={selectedColor}
                setSelectedColor={setSelectedColor}
              />
            </aside>

            {/* Product Grid */}
            <div className="flex-1">
              {filteredOutfits.length === 0 ? (
                <div className="text-center py-20 text-gray-500 uppercase text-xs tracking-widest">
                  No outfits match your filters.
                </div>
              ) : (
                /* Changed grid-cols-1 to grid-cols-2 */
                /* Added gap-4 for mobile and gap-x-6 gap-y-12 for desktop */
                <div className="grid grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-x-6 md:gap-y-12">
                  {filteredOutfits.map((item) => (
                    <ProductCard
                      key={item.id}
                      item={item}
                      onOpenLightbox={openLightbox}
                    />
                  ))}
                </div>
              )}
            </div>
          </div>
        )}
        {/* --- LIGHTBOX MODAL --- */}
        {selectedItem && (
          <div
            onClick={handleBackdropClick}
            className="fixed inset-0 z-[150] bg-black/95 backdrop-blur-xl flex flex-col items-center justify-center animate-in fade-in duration-300"
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedItem(null)}
              className="absolute top-8 right-8 text-white/50 hover:text-white z-[160] transition-colors"
            >
              <X size={40} strokeWidth={1} />
            </button>

            <div className="relative w-full max-w-5xl h-[70vh] md:h-[80vh] flex flex-col items-center">
              {/* Navigation Arrows */}
              {allImages.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 -translate-y-1/2 z-[160] p-4 text-white/20 hover:text-white transition-all"
                  >
                    <ArrowLeft size={48} strokeWidth={1} />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 -translate-y-1/2 z-[160] p-4 text-white/20 hover:text-white transition-all rotate-180"
                  >
                    <ArrowLeft size={48} strokeWidth={1} />
                  </button>
                </>
              )}

              {/* Main Image Display */}
              <div className="relative w-full h-full p-4">
                <Image
                  src={allImages[currentIndex]}
                  alt="Gallery"
                  fill
                  className="object-contain"
                  priority
                  unoptimized={true} // Set true if fetching from external URLs
                />
              </div>

              {/* Thumbnails & Info */}
              <div className="mt-8 text-center">
                <h2 className="text-[10px] uppercase tracking-[0.4em] text-[#C4A16A] mb-2 font-medium">
                  {selectedItem.name}
                </h2>

                {/* Thumbnail Strip */}
                <div className="flex gap-2 justify-center mt-4">
                  {allImages.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentIndex(idx)}
                      className={`w-12 h-16 relative overflow-hidden border transition-all ${
                        currentIndex === idx
                          ? "border-[#C4A16A] opacity-100 scale-110"
                          : "border-transparent opacity-40 hover:opacity-80"
                      }`}
                    >
                      <Image
                        src={img}
                        alt="thumb"
                        fill
                        className="object-cover"
                      />
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </main>

      {/* --- MOBILE FILTER OVERLAY --- */}
      {isMobileFilterOpen && (
        <div className="fixed inset-0 z-[100] bg-[#120F0C] p-8 overflow-y-auto animate-in fade-in slide-in-from-bottom duration-300">
          <div className="flex justify-between items-center mb-12">
            <div className="flex items-center gap-2">
              <SlidersHorizontal size={14} className="text-[#C4A16A]" />
              <span className="text-xs uppercase tracking-[0.3em] text-[#F2EDE5]">
                Filters
              </span>
            </div>
            <button
              onClick={() => setIsMobileFilterOpen(false)}
              className="p-2 text-[#A69C91] hover:text-[#C4A16A] transition-colors"
            >
              <X size={24} />
            </button>
          </div>

          <div className="mb-20">
            <SidebarFilter
              priceRange={priceRange}
              setPriceRange={setPriceRange}
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}
              selectedColor={selectedColor}
              setSelectedColor={setSelectedColor}
            />
          </div>

          <button
            onClick={() => setIsMobileFilterOpen(false)}
            className="fixed bottom-8 left-8 right-8 py-4 bg-[#C4A16A] text-[#120F0C] text-xs uppercase tracking-[0.3em] font-medium shadow-2xl"
          >
            Show {filteredOutfits.length} Results
          </button>
        </div>
      )}
    </div>
  );
};

export default GayatriCollection;
