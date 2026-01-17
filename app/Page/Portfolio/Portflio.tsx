"use client";
import React, { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { ArrowLeft, X } from "lucide-react";
import Image from "next/image"; // Ensure this is imported

const categories = ["All", "Bridal", "Fashion", "Party"];

const shimmer = (w: number, h: number) => `
<svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <linearGradient id="g">
      <stop stop-color="#18181b" offset="20%" />
      <stop stop-color="#27272a" offset="50%" />
      <stop stop-color="#18181b" offset="70%" />
    </linearGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="#18181b" />
  <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
  <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite"  />
</svg>`;

const toBase64 = (str: string) =>
  typeof window === "undefined"
    ? Buffer.from(str).toString("base64")
    : window.btoa(str);

export default function PortfolioPage() {
  const [filter, setFilter] = useState("All");
  const [selectedImg, setSelectedImg] = useState<string | null>(null);
  const [portfolioData, setPortfolioData] = useState<any>(null);

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
        <div className="w-[100px] hidden md:block"></div>
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
          <div key={item.id} className="break-inside-avoid">
            <Link href="https://www.instagram.com/reel/DTXocLTEe0l/">
              <div className="relative group cursor-pointer overflow-hidden rounded-sm bg-zinc-900">
                <div className="overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={500}
                    height={700}
                    placeholder={`data:image/svg+xml;base64,${toBase64(
                      shimmer(500, 700)
                    )}`}
                    unoptimized
                    className="w-full h-auto object-cover transition-all duration-1000 group-hover:scale-110"
                  />
                </div>

                <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10">
                  <h3 className="text-white text-xs uppercase tracking-[0.3em] drop-shadow-md">
                    {item.title}
                  </h3>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {selectedImg && (
        <div className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4">
          <button
            className="absolute top-8 right-8 text-white hover:text-pink-500 transition-colors"
            onClick={() => setSelectedImg(null)}
          >
            <X size={40} strokeWidth={1} />
          </button>
          <div className="relative w-full h-full max-h-[90vh]">
            <Image
              src={selectedImg}
              alt="Enlarged view"
              fill
              className="object-contain"
            />
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
