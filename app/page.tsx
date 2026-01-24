"use client";
import { Instagram, Youtube, MessageCircleCode } from "lucide-react";
import Link from "next/link";
import Home from "./Page/Home/Home";

export default function Page() {
  return (
    <main className="relative min-h-screen bg-black text-white selection:bg-pink-500">
      <div
        className="fixed top-6 left-1/2 -translate-x-1/2 flex flex-row gap-6 z-50 
                      md:top-8 md:left-8 md:translate-x-0 md:flex-col md:gap-8"
      >
        {/* Instagram */}
        <Link
          href="https://www.instagram.com/anjalimakeover7879/"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative hover:text-pink-500 transition-all hover:-translate-y-1"
        >
          <Instagram size={22} />
          <span
            className="absolute left-1/2 -translate-x-1/2 top-10 md:left-12 md:top-1/2 md:-translate-y-1/2 md:translate-x-0 
                           scale-0 group-hover:scale-100 transition-all duration-200 
                           bg-zinc-800 text-white text-[10px] uppercase tracking-widest px-2 py-1 rounded shadow-xl"
          >
            Instagram
          </span>
        </Link>

        {/* YouTube */}
        <Link
          href="https://www.youtube.com/@anjaligourmakeover"
          className="group relative hover:text-gray-400 transition-all hover:-translate-y-1"
        >
          <Youtube size={22} />
          <span
            className="absolute left-1/2 -translate-x-1/2 top-10 md:left-12 md:top-1/2 md:-translate-y-1/2 md:translate-x-0 
                           scale-0 group-hover:scale-100 transition-all duration-200 
                           bg-zinc-800 text-white text-[10px] uppercase tracking-widest px-2 py-1 rounded shadow-xl"
          >
            YouTube
          </span>
        </Link>

        {/* Threads */}
        <Link
          href="https://www.threads.com/@anjalimakeover7879"
          target="_blank"
          className="group relative hover:text-blue-500 transition-all hover:-translate-y-1"
        >
          <MessageCircleCode size={22} />
          <span
            className="absolute left-1/2 -translate-x-1/2 top-10 md:left-12 md:top-1/2 md:-translate-y-1/2 md:translate-x-0 
                           scale-0 group-hover:scale-100 transition-all duration-200 
                           bg-zinc-800 text-white text-[10px] uppercase tracking-widest px-2 py-1 rounded shadow-xl"
          >
            Threads
          </span>
        </Link>
      </div>

      <Home />
    </main>
  );
}
