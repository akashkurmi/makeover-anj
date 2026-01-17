"use client";
import { Instagram, Facebook, MessageCircle, ArrowRight } from "lucide-react";
import Link from "next/link";
import Footer from "./Page/comp/footer/Footer";
import Home from "./Page/Home/Home";

export default function Page() {
  return (
    <main className="relative min-h-screen bg-black text-white selection:bg-pink-500">
      <div
        className="fixed top-6 left-1/2 -translate-x-1/2 flex flex-row gap-6 z-50 
                      md:top-8 md:left-8 md:translate-x-0 md:flex-col md:gap-8"
      >
        <Link
          href="https://www.instagram.com/anjalimakeover7879/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-pink-500 transition-all hover:-translate-y-1"
        >
          <Instagram size={22} />
        </Link>

        <Link
          href="https://facebook.com"
          target="_blank"
          className="hover:text-blue-500 transition-all hover:-translate-y-1"
        >
          <Facebook size={22} />
        </Link>

        <Link
          href="/contact"
          className="hover:text-gray-400 transition-all hover:-translate-y-1"
        >
          <MessageCircle size={22} />
        </Link>
      </div>

      <Home />

      <section className="py-20 border-t border-zinc-900 bg-zinc-950/50">
        <Footer />
      </section>
    </main>
  );
}
