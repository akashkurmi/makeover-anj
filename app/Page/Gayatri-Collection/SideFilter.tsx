"use client";
import React from "react";

type TFilter = {
  priceRange: number;
  setPriceRange: (value: number) => void;
  selectedCategory: string;
  setSelectedCategory: (value: string) => void;
  selectedColor: string | null;
  setSelectedColor: (value: string | null) => void;
};

const SidebarFilter = ({
  priceRange,
  setPriceRange,
  selectedCategory,
  setSelectedCategory,
  selectedColor,
  setSelectedColor,
}: TFilter) => {
  const categories = ["All", "Women's Wear", "Men's Wear", "Accessories"];

  // These should ideally match the 'tailwind' property in your data objects
  const colors = [
    { name: "Red", class: "bg-red-800" },
    { name: "Emerald", class: "bg-emerald-800" },
    { name: "Gold", class: "bg-yellow-600" },
    { name: "Pink", class: "bg-pink-300" },
    { name: "Black", class: "bg-zinc-900" },
  ];

  return (
    <div className="space-y-10">
      {/* Category Filter */}
      <div>
        <h3 className="text-[10px] uppercase tracking-[0.4em] text-pink-500 mb-6 font-bold">
          Category
        </h3>
        <ul className="space-y-4">
          {categories.map((cat) => (
            <li
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className="flex items-center gap-3 group cursor-pointer"
            >
              <div
                className={`w-3 h-3 border transition-all ${
                  selectedCategory === cat
                    ? "bg-pink-500 border-pink-500"
                    : "border-white/20 group-hover:border-pink-500"
                }`}
              />
              <span
                className={`text-xs font-light uppercase tracking-widest transition-colors ${
                  selectedCategory === cat
                    ? "text-white"
                    : "text-gray-400 group-hover:text-white"
                }`}
              >
                {cat}
              </span>
            </li>
          ))}
        </ul>
      </div>

      {/* Price Range Filter */}
      <div>
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-[10px] uppercase tracking-[0.4em] text-pink-500 font-bold">
            Max Price
          </h3>
          <span className="text-[10px] text-gray-400 font-mono">
            ₹{priceRange}
          </span>
        </div>
        <input
          type="range"
          min="1000"
          max="15000"
          step="500"
          value={priceRange}
          onChange={(e) => setPriceRange(parseInt(e.target.value))}
          className="w-full h-1 bg-zinc-800 accent-pink-500 appearance-none cursor-pointer"
        />
      </div>

      {/* Color Palette Filter */}
      <div>
        <h3 className="text-[10px] uppercase tracking-[0.4em] text-pink-500 mb-6 font-bold">
          Palette
        </h3>
        <div className="flex flex-wrap gap-4">
          {colors.map((color) => (
            <button
              key={color.class}
              onClick={() =>
                setSelectedColor(
                  selectedColor === color.class ? null : color.class
                )
              }
              className={`w-6 h-6 rounded-full border transition-all hover:scale-110 ${
                color.class
              } ${
                selectedColor === color.class
                  ? "ring-2 ring-pink-500 ring-offset-2 ring-offset-black border-white"
                  : "border-white/10"
              }`}
              title={color.name}
            />
          ))}
        </div>
        {selectedColor && (
          <button
            onClick={() => setSelectedColor(null)}
            className="mt-4 text-[8px] uppercase tracking-widest text-gray-500 hover:text-white transition-colors"
          >
            Clear Color Filter [x]
          </button>
        )}
      </div>
    </div>
  );
};

export default SidebarFilter;
