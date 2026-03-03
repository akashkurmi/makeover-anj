"use client";
import { useState, useEffect } from "react";
import {
  Instagram,
  MessageCircleCode,
  Youtube,
  Menu,
  X,
  Home,
  User,
  Briefcase,
  ReceiptIndianRupee,
} from "lucide-react";
import Link from "next/link";

const pageLinks = [
  { name: "Home", href: "/", icon: Home },
  { name: "Portfolio", href: "/Page/Portfolio", icon: Briefcase },
  { name: "Pricing", href: "/Page/Pricing", icon: ReceiptIndianRupee },
  { name: "About", href: "/Page/About", icon: User },
];

const socialLinks = [
  {
    icon: Instagram,
    label: "Instagram",
    href: "https://www.instagram.com/anjalimakeover7879/",
    color: "hover:text-pink-500",
  },
  {
    icon: Youtube,
    label: "YouTube",
    href: "https://www.youtube.com/@anjaligourmakeover",
    color: "hover:text-gray-400",
  },
  {
    icon: MessageCircleCode,
    label: "Threads",
    href: "https://www.threads.com/@anjalimakeover7879",
    color: "hover:text-blue-500",
  },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Close drawer/popup on window resize to prevent UI glitches
  useEffect(() => {
    const handleResize = () => setIsOpen(false);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      {/* MENU BUTTON - Fixed Top Right for all screens */}
      <div className="fixed top-6 right-6 z-[70]">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-3 bg-zinc-900/80 backdrop-blur rounded-full border border-zinc-800 text-white hover:border-pink-500 transition-all active:scale-95 shadow-2xl"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* DESKTOP POPUP (Shows only on MD+) */}
        {isOpen && (
          <div className="hidden md:block absolute right-0 mt-4 w-48 bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden shadow-2xl animate-in fade-in zoom-in duration-200">
            <div className="flex flex-col py-2">
              {pageLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="px-4 py-3 text-sm font-medium text-zinc-300 hover:bg-zinc-800 hover:text-pink-500 transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* MOBILE DRAWER (Left Side - MD Hidden) */}
      <div
        className={`fixed inset-y-0 left-0 z-[60] w-72 bg-black border-r border-zinc-900 transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-500 ease-in-out md:hidden`}
      >
        <div className="flex flex-col h-full p-8 pt-20">
          {/* Section 1: Page Links */}
          <div className="space-y-6 mb-12">
            <p className="text-zinc-600 text-[10px] uppercase tracking-[0.3em] font-bold">
              Navigation
            </p>
            {pageLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="flex items-center gap-4 text-2xl font-serif italic text-white hover:text-pink-500 transition-all"
              >
                <link.icon size={20} className="text-pink-500" />
                {link.name}
              </Link>
            ))}
          </div>

          <div className="h-[1px] bg-zinc-900 w-full mb-10" />

          {/* Section 2: Social Links */}
          <div className="space-y-6">
            <p className="text-zinc-600 text-[10px] uppercase tracking-[0.3em] font-bold">
              Socials
            </p>
            <div className="flex flex-col gap-5">
              {socialLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  className="flex items-center gap-4 text-zinc-400 hover:text-white transition-colors group"
                >
                  <link.icon size={22} className={link.color} />
                  <span className="text-sm tracking-wide">{link.label}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* DESKTOP SIDEBAR (Keep current behavior or remove if no longer needed) */}
      <div className="hidden md:flex fixed top-8 left-8 flex-col gap-8 z-50">
        {socialLinks.map((link) => (
          <Link
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className={`group relative transition-all hover:-translate-y-1 ${link.color} text-white`}
          >
            <link.icon size={22} />
          </Link>
        ))}
      </div>
    </>
  );
}
