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

  useEffect(() => {
    const loadData = async () => {
      setLoading(true);
      const data = await getCollectionData();
      setOutfits(data || []);
      setLoading(false);
    };
    loadData();
  }, []);

  // Combined Filtering Logic
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
      {/* --- HEADER SECTION --- (Same as before) */}
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
        {/* Location Select UI ... */}
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

            <div className="flex-1">
              {filteredOutfits.length === 0 ? (
                <div className="text-center py-20 text-gray-500 uppercase text-xs tracking-widest">
                  No outfits match your filters.
                </div>
              ) : (
                <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-x-6 gap-y-12">
                  {filteredOutfits.map((item) => (
                    <div key={item.id} className="group cursor-pointer">
                      <div className="aspect-[3/4] relative overflow-hidden bg-zinc-900 mb-4">
                        <Image
                          src={item.imageUrl}
                          alt={item.name}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100"
                        />
                      </div>
                      <div className="space-y-1">
                        <h3 className="text-sm font-light uppercase tracking-wider text-gray-200">
                          {item.name}
                        </h3>
                        <div className="flex justify-between items-center">
                          <p className="text-pink-500 font-serif italic text-lg">
                            ₹{item.pricePerDay.toLocaleString()}
                            <span className="text-[10px] text-gray-500 not-italic ml-1">
                              / Day
                            </span>
                          </p>
                          <Link
                            href={`/inquire/${item.id}`}
                            className="text-[10px] uppercase tracking-widest text-gray-400 border-b border-gray-800 pb-0.5 hover:text-white hover:border-pink-500"
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
    </div>
  );
};

export default GayatriCollection;
