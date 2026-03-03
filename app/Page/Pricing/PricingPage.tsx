"use client"; // Required for useState in Next.js App Router
import { ChangeEvent, useState } from "react";
import Link from "next/link";
import priceData from "./priceData.json";

type PriceData = typeof priceData;
type LocationKey = keyof PriceData;

const locations = Object.keys(priceData) as LocationKey[];

const PricingPage = () => {
  // State to manage the selected location
  const [selectedlocation, setSeletedLocation] = useState(locations[0]);

  return (
    <div className="bg-black text-white min-h-screen py-20 px-8">
      <div className="relative flex flex-col items-center justify-center mb-24">
        <Link href={"/"}>
          <h2 className="text-white text-4xl md:text-6xl font-black uppercase italic tracking-tighter">
            <span className="text-pink-500">Anjali</span> Makeover
          </h2>
        </Link>
      </div>

      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-serif italic text-center mb-16 text-pink-500">
          Our Services & Rates
        </h1>

        <div className="max-w-4xl mx-auto px-4">
          <div className="mb-12">
            {/* Header & Dropdown Container */}
            <div className="flex flex-col md:flex-row md:items-center justify-between border-b border-zinc-800 pb-2 mb-6 gap-4">
              <h2 className="text-xl md:text-2xl tracking-[0.2em] uppercase text-pink-500">
                Exclusive Service Menu & Price
              </h2>

              {/* Location Dropdown */}
              <div className="flex items-center gap-2">
                <span className="text-xs uppercase tracking-widest text-zinc-500">
                  Location:
                </span>
                <select
                  value={selectedlocation}
                  onChange={(e: ChangeEvent<HTMLSelectElement>) =>
                    setSeletedLocation(e.target.value as LocationKey)
                  }
                  className="bg-zinc-900 text-pink-500 text-sm border border-zinc-700 rounded px-3 py-1 outline-none focus:border-pink-500 transition-all cursor-pointer"
                >
                  {locations.map((loc) => (
                    <option key={loc} value={loc}>
                      {loc}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="space-y-8">
              {priceData[selectedlocation].map((service, sIdx) => (
                <div
                  key={sIdx}
                  className="flex flex-col md:flex-row md:justify-between md:items-baseline gap-1 group"
                >
                  <div className="flex-1">
                    <div className="flex justify-between items-baseline">
                      <h3 className="text-lg font-medium text-white group-hover:text-pink-400 transition-colors">
                        {service.name}
                      </h3>
                      <span className="text-pink-500 font-mono text-lg md:hidden">
                        {service.price}
                      </span>
                    </div>
                    <p className="text-zinc-500 text-sm leading-relaxed max-w-md">
                      {service.details}
                    </p>
                  </div>

                  <div className="hidden md:block text-xl font-mono text-pink-500 ml-4">
                    {service.price}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <p className="text-center text-zinc-500 text-sm italic mt-10">
          *Prices may vary based on loacation and specific requirements.
        </p>
      </div>
    </div>
  );
};

export default PricingPage;
