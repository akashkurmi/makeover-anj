"use client";
import React, { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { ArrowLeft, X } from "lucide-react";
import Image from "next/image";

// Sample Data - You can move this to a separate constants file later
// const portfolioData = [
//   {
//     id: 1,
//     category: "Bridal",
//     title: "Classic Indian Bride",
//     image: "/images/AP_07783.jpg",
//   },
//   {
//     id: 2,
//     category: "Fashion",
//     title: "Editorial Glow",
//     image: "/images/AP_07799.jpg",
//   },
//   {
//     id: 3,
//     category: "Party",
//     title: "Reception Glam",
//     image: "/images/AP_08179.jpg",
//   },
//   {
//     id: 4,
//     category: "Bridal",
//     title: "Minimalist Nude",
//     image: "/images/AP_08328.jpg",
//   },
//   {
//     id: 5,
//     category: "Fashion",
//     title: "Vogue Editorial",
//     image: "/images/AP_08718.jpg",
//   },
//   {
//     id: 6,
//     category: "Party",
//     title: "Cocktail Night",
//     image: "/images/AP_08744.jpg",
//   },
// ];

const categories = ["All", "Bridal", "Fashion", "Party"];

export default function PortfolioPage() {
  const [filter, setFilter] = useState("All");
  const [selectedImg, setSelectedImg] = useState<string | null>(null);
  const [portfolioData, setPortfolioData] = useState<any>(null);

  useEffect(() => {
    fetch(
      "https://gist.githubusercontent.com/akashkurmi/760a6b1bffca62c40f2e6a1e90419c1c/raw/998fa6ba41b776e5e3b7e221f32fc13a377feaf4/gistfile1.txt"
    )
      .then((res: any) => res.json())
      .then((res: any) => {
        console.log(res);
        setPortfolioData(res);
      });
  }, []);

  const filteredItems = useMemo(
    () =>
      filter === "All"
        ? portfolioData
        : portfolioData.filter((item: any) => item.category === filter),
    [portfolioData]
  );

  if (!portfolioData) return <>null</>;
  return (
    <main className="min-h-screen bg-black text-white px-6 py-12">
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
        <div className="w-[100px] hidden md:block"></div> {/* Spacer */}
      </div>

      {/* Filter Bar */}
      <div className="flex justify-center gap-6 mb-12 flex-wrap">
        {categories.map((cat, index) => (
          <button
            key={`${cat}${index}`}
            onClick={() => setFilter(cat)}
            className={`uppercase tracking-[0.4em] text-[10px] pb-2 border-b-2 transition-all duration-500 ${
              filter === cat
                ? "border-pink-500 text-white"
                : "border-transparent text-zinc-600 hover:text-zinc-400"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Masonry Grid */}
      <div className="max-w-7xl mx-auto columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
        {filteredItems.map((item: any) => (
          <div
            key={item.id}
            className="relative break-inside-avoid group cursor-pointer overflow-hidden rounded-sm"
            onClick={() => setSelectedImg(item.image)}
          >
            {/* Container for the Image to ensure zoom stays inside borders */}
            <div className="overflow-hidden">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-auto object-cover transition-transform duration-1000 ease-in-out group-hover:scale-110"
              />
            </div>

            {/* Optional: Subtle title that only appears on hover without a dark background */}
            <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10">
              <h3 className="text-white text-xs uppercase tracking-[0.3em] drop-shadow-md">
                {item.title}
              </h3>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox - Click to enlarge */}
      {selectedImg && (
        <div className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4">
          <button
            className="absolute top-8 right-8 text-white hover:text-pink-500 transition-colors"
            onClick={() => setSelectedImg(null)}
          >
            <X size={40} strokeWidth={1} />
          </button>
          <img
            src={selectedImg}
            className="max-h-[90vh] max-w-full object-contain"
          />
        </div>
      )}

      {/* Simple Footer */}
      <footer className="mt-24 text-center pb-10">
        <p className="text-zinc-700 text-[10px] tracking-[1em] uppercase">
          Makeover Anj Artistry
        </p>
      </footer>
    </main>
  );
}
