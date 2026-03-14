"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Sparkles, SlidersHorizontal, X, MapPin, Loader2 } from "lucide-react";
import SidebarFilter from "./SideFilter";
import { getCollectionData } from "./getCollectionData";

const GayatriCollection = () => {
  const [outfits, setOutfits] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [priceRange, setPriceRange] = useState(15000);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedColor, setSelectedColor] = useState<string | null>(null);
  const [location, setLocation] = useState("Khurai");

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
    <div className="bg-black min-h-screen text-white font-sans">
      {/* --- HEADER SECTION --- */}
      <section className="pt-24 pb-12 px-6 text-center border-b border-white/5">
        <div className="flex items-center justify-center gap-2 mb-3">
          <Sparkles size={14} className="text-pink-500" />
          <span className="text-[10px] uppercase tracking-[0.5em] text-gray-400">
            Anjali Makeover Presents
          </span>
        </div>
        <h1 className="text-5xl md:text-7xl font-light tracking-tighter uppercase mb-6">
          The <span className="font-serif italic text-pink-500">Gayatri</span>{" "}
          Collection
        </h1>

        {/* Location Selector */}
        <div className="relative inline-flex items-center group">
          <MapPin size={14} className="absolute left-3 text-pink-500" />
          <select
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="bg-zinc-900 border border-white/10 text-gray-300 text-[10px] uppercase tracking-[0.2em] rounded-full py-2 pl-10 pr-8 appearance-none focus:outline-none focus:border-pink-500 cursor-pointer transition-all"
          >
            <option value="Khurai">Khurai</option>
            <option value="Bangalore">Bangalore</option>
          </select>
        </div>
      </section>

      <main className="max-w-7xl mx-auto px-6 py-12">
        {location === "Bangalore" ? (
          <div className="py-32 flex flex-col items-center justify-center text-center">
            <MapPin size={32} className="text-pink-500 mb-6" />
            <h2 className="text-xl uppercase tracking-widest">
              Branch coming soon
            </h2>
          </div>
        ) : loading ? (
          <div className="flex flex-col items-center justify-center py-20">
            <Loader2 className="animate-spin text-pink-500 mb-4" size={32} />
            <p className="text-[10px] uppercase tracking-widest text-gray-500">
              Loading Collection...
            </p>
          </div>
        ) : (
          <div className="flex flex-col md:flex-row gap-12">
            {/* --- MOBILE FILTER TRIGGER --- */}
            <div className="md:hidden mb-8">
              <button
                onClick={() => setIsMobileFilterOpen(true)}
                className="w-full flex items-center justify-center gap-3 py-4 border border-white/10 bg-zinc-900/50 rounded-lg text-[10px] uppercase tracking-[0.3em] hover:bg-zinc-900 transition-colors"
              >
                <SlidersHorizontal size={16} className="text-pink-500" />
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
                    <div key={item.id} className="group cursor-pointer">
                      <div className="aspect-[3/4] relative overflow-hidden bg-zinc-900 mb-3 md:mb-4">
                        <Image
                          src={item.imageUrl}
                          alt={item.name}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100"
                        />
                      </div>
                      <div className="space-y-1">
                        {/* Adjusted text size for mobile (text-[10px]) vs desktop (text-sm) */}
                        <h3 className="text-[10px] md:text-sm font-light uppercase tracking-wider text-gray-200 line-clamp-1">
                          {item.name}
                        </h3>
                        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-1">
                          <p className="text-pink-500 font-serif italic text-sm md:text-lg">
                            ₹{item.pricePerDay.toLocaleString()}
                            <span className="text-[8px] md:text-[10px] text-gray-500 not-italic ml-1 uppercase">
                              / Day
                            </span>
                          </p>
                          <Link
                            href={`/inquire/${item.id}`}
                            className="text-[8px] md:text-[10px] uppercase tracking-widest text-gray-400 border-b border-gray-800 pb-0.5 hover:text-white hover:border-pink-500 transition-all"
                          >
                            Inquire
                          </Link>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}
      </main>

      {/* --- MOBILE FILTER OVERLAY --- */}
      {isMobileFilterOpen && (
        <div className="fixed inset-0 z-[100] bg-black p-8 overflow-y-auto animate-in fade-in slide-in-from-bottom duration-300">
          <div className="flex justify-between items-center mb-12">
            <div className="flex items-center gap-2">
              <SlidersHorizontal size={14} className="text-pink-500" />
              <span className="text-xs uppercase tracking-[0.3em] text-white">
                Filters
              </span>
            </div>
            <button
              onClick={() => setIsMobileFilterOpen(false)}
              className="p-2 hover:bg-white/10 rounded-full transition-colors"
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
            className="fixed bottom-8 left-8 right-8 py-4 bg-pink-600 text-white text-xs uppercase tracking-[0.4em] font-bold shadow-2xl"
          >
            Show {filteredOutfits.length} Results
          </button>
        </div>
      )}
    </div>
  );
};

export default GayatriCollection;
