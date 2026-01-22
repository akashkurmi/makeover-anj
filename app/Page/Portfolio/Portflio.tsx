"use client";
import React, { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { ArrowLeft, X } from "lucide-react";

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
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-6">
        {filteredItems.map((item: any) => (
          <Link key={item.id} href={item.link}>
            <div
              key={item.id}
              className="relative group cursor-pointer overflow-hidden rounded-sm bg-zinc-900 aspect-[9/16]"
              // onClick={() => setSelectedItem(item)}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity flex items-end p-3">
                <h3 className="text-white text-[9px] uppercase tracking-[0.2em] drop-shadow-md">
                  {item.title}
                </h3>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Lightbox / Popup */}
      {selectedItem && (
        <div className="fixed inset-0 z-[100] bg-black/98 flex flex-col items-center overflow-y-auto p-4 md:p-10">
          <button
            className="fixed top-6 right-6 text-white hover:text-pink-500 transition-colors z-[110]"
            onClick={() => setSelectedItem(null)}
          >
            <X size={36} strokeWidth={1} />
          </button>

          <div className="w-full max-w-4xl mt-12 space-y-8 flex flex-col items-center">
            <img
              src={selectedItem.image}
              alt="Main Artistry"
              className="max-h-[85vh] w-auto object-contain rounded-sm"
            />

            {selectedItem.subimages && selectedItem.subimages.length > 0 && (
              <div className="grid grid-cols-2 gap-3 w-full pb-20">
                {selectedItem.subimages.map((subImg: string, idx: number) => (
                  <img
                    key={idx}
                    src={subImg}
                    alt={`Detail ${idx}`}
                    className="w-full h-auto object-cover rounded-sm"
                  />
                ))}
              </div>
            )}
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
