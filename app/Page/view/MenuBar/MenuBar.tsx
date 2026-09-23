"use client";
import { useState, useEffect } from "react";
import {
  Instagram,
  MessageCircleCode,
  Youtube,
  X,
  Menu,
  Sparkles,
  ArrowRight,
  Phone,
  MessageCircle,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { name: "SERVICES", href: "/#services", subtitle: "Bridal, Hair & Event Menus" },
  { name: "BRIDAL", href: "/#bridal", subtitle: "The Bridal Edit & Packages" },
  { name: "GALLERY", href: "/#gallery", subtitle: "Signature Portfolios & Artistry" },
  { name: "ABOUT", href: "/#about", subtitle: "The Anjali Signature Story" },
  { name: "COLLECTION", href: "/Page/Gayatri-Collection", subtitle: "Couture Bridal Lehengas" },
];

export default function MenuBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu if resized to desktop width (>= 1024px)
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      document.body.style.touchAction = "none";
    } else {
      document.body.style.overflow = "unset";
      document.body.style.touchAction = "auto";
    }
    return () => {
      document.body.style.overflow = "unset";
      document.body.style.touchAction = "auto";
    };
  }, [isOpen]);

  return (
    <>
      {/* FIXED LUXURY HEADER */}
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? "bg-[#120F0C]/95 backdrop-blur-md border-b border-[#3D342B]/80 py-3 sm:py-3.5 shadow-[0_10px_30px_rgba(0,0,0,0.6)]"
            : "bg-gradient-to-b from-[#120F0C]/90 via-[#120F0C]/60 to-transparent backdrop-blur-[2px] border-b border-[#3D342B]/30 py-4 sm:py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 flex items-center justify-between">
          {/* BRAND LOGO */}
          <Link
            href="/"
            onClick={() => setIsOpen(false)}
            className="group flex flex-col items-start tracking-wider select-none py-1"
          >
            <span className="font-serif text-xl sm:text-2xl lg:text-3xl tracking-[0.25em] text-[#F2EDE5] group-hover:text-[#C4A16A] transition-colors font-light">
              ANJALI
            </span>
            <span className="text-[7.5px] sm:text-[8px] lg:text-[9px] uppercase tracking-[0.35em] text-[#A69C91] -mt-0.5 group-hover:text-[#D4B47F] transition-colors font-sans">
              LUXURY BEAUTY STUDIO
            </span>
          </Link>

          {/* DESKTOP NAVIGATION (1024px+ only to prevent awkward wrapping on tablet) */}
          <nav className="hidden lg:flex items-center space-x-8 xl:space-x-10">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-[11px] font-sans tracking-[0.25em] uppercase text-[#A69C91] hover:text-[#F2EDE5] transition-colors duration-300 relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[#C4A16A] hover:after:w-full after:transition-all after:duration-300"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* DESKTOP BOOK BUTTON */}
          <div className="hidden lg:flex items-center space-x-6">
            <Link
              href="/#booking"
              className="inline-flex items-center justify-center px-6 py-2.5 text-[11px] uppercase tracking-[0.25em] font-sans text-[#F2EDE5] border border-[#C4A16A] hover:bg-[#C4A16A] hover:text-[#120F0C] transition-all duration-300 shadow-[0_0_15px_rgba(196,161,106,0.1)] active:scale-95 touch-target"
            >
              BOOK
            </Link>
          </div>

          {/* MOBILE & TABLET HAMBURGER BUTTON (Min 48x48px Touch Target) */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-label={isOpen ? "Close menu" : "Open navigation menu"}
              aria-expanded={isOpen}
              className="min-w-[48px] min-h-[48px] p-3 flex items-center justify-center text-[#F2EDE5] hover:text-[#C4A16A] active:text-[#C4A16A] transition-colors touch-target focus:outline-none"
            >
              {isOpen ? (
                <X size={26} strokeWidth={1.5} className="text-[#C4A16A]" />
              ) : (
                <div className="flex items-center space-x-2">
                  <span className="text-[10px] uppercase tracking-[0.25em] text-[#C4A16A] hidden xs:inline font-sans font-medium">
                    MENU
                  </span>
                  <Menu size={24} strokeWidth={1.5} />
                </div>
              )}
            </button>
          </div>
        </div>
      </header>

      {/* FULL-SCREEN MOBILE & TABLET LUXURY DRAWER */}
      <div
        className={`fixed inset-0 z-50 bg-[#120F0C] lg:hidden transition-all duration-300 ease-in-out flex flex-col justify-between overflow-y-auto ${
          isOpen
            ? "opacity-100 pointer-events-auto translate-x-0"
            : "opacity-0 pointer-events-none translate-x-full"
        }`}
        style={{ paddingBottom: "max(1.5rem, env(safe-area-inset-bottom))" }}
      >
        {/* TOP BAR INSIDE DRAWER */}
        <div className="px-6 sm:px-10 pt-5 pb-4 border-b border-[#3D342B]/60 flex items-center justify-between">
          <Link
            href="/"
            onClick={() => setIsOpen(false)}
            className="flex flex-col items-start"
          >
            <span className="font-serif text-xl tracking-[0.25em] text-[#F2EDE5]">
              ANJALI
            </span>
            <span className="text-[7.5px] uppercase tracking-[0.35em] text-[#A69C91] -mt-0.5">
              LUXURY BEAUTY STUDIO
            </span>
          </Link>

          <button
            onClick={() => setIsOpen(false)}
            aria-label="Close navigation"
            className="min-w-[48px] min-h-[48px] flex items-center justify-center text-[#A69C91] hover:text-[#C4A16A] active:text-[#C4A16A] touch-target"
          >
            <X size={28} strokeWidth={1.5} className="text-[#C4A16A]" />
          </button>
        </div>

        {/* MENU NAVIGATION LINKS */}
        <div className="px-6 sm:px-10 py-6 flex-1 flex flex-col justify-center space-y-3">
          <p className="text-[9px] uppercase tracking-[0.35em] text-[#C4A16A] font-medium font-sans">
            SELECT SECTION
          </p>

          <nav className="flex flex-col space-y-2">
            {navLinks.map((link, idx) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="group flex items-center justify-between py-3.5 border-b border-[#3D342B]/40 active:border-[#C4A16A] touch-target"
              >
                <div>
                  <div className="flex items-baseline space-x-3">
                    <span className="text-xs font-sans text-[#C4A16A] font-light">
                      0{idx + 1}
                    </span>
                    <span className="text-2xl sm:text-3xl font-serif text-[#F2EDE5] group-hover:text-[#C4A16A] group-active:text-[#C4A16A] transition-colors font-light tracking-wide">
                      {link.name}
                    </span>
                  </div>
                  <p className="text-[10px] text-[#A69C91] font-sans pl-7 tracking-wider font-light">
                    {link.subtitle}
                  </p>
                </div>
                <ArrowRight size={16} className="text-[#C4A16A] opacity-70 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
              </Link>
            ))}
          </nav>

          {/* PRIMARY BOOKING TOUCH ACTION */}
          <div className="pt-4">
            <Link
              href="/#booking"
              onClick={() => setIsOpen(false)}
              className="w-full min-h-[50px] flex items-center justify-center space-x-3 text-xs uppercase tracking-[0.3em] font-sans font-medium text-[#120F0C] bg-[#C4A16A] hover:bg-[#D4B47F] active:bg-[#D4B47F] transition-all shadow-xl active:scale-[0.99] touch-target"
            >
              <span>BOOK APPOINTMENT</span>
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>

        {/* BOTTOM QUICK CONTACT STRIP */}
        <div className="px-6 sm:px-10 pt-4 border-t border-[#3D342B]/50 space-y-3">
          <div className="grid grid-cols-3 gap-2">
            <Link
              href="https://wa.me/917879458655"
              target="_blank"
              rel="noopener noreferrer"
              className="min-h-[44px] flex items-center justify-center space-x-1.5 p-2.5 bg-[#1B1510] border border-[#3D342B] text-xs text-[#F2EDE5] hover:text-[#C4A16A] touch-target"
            >
              <MessageCircle size={15} className="text-[#C4A16A]" />
              <span className="text-[10px] uppercase tracking-wider">WhatsApp</span>
            </Link>

            <Link
              href="tel:+917879458655"
              className="min-h-[44px] flex items-center justify-center space-x-1.5 p-2.5 bg-[#1B1510] border border-[#3D342B] text-xs text-[#F2EDE5] hover:text-[#C4A16A] touch-target"
            >
              <Phone size={15} className="text-[#C4A16A]" />
              <span className="text-[10px] uppercase tracking-wider">Call</span>
            </Link>

            <Link
              href="https://www.instagram.com/anjalimakeover7879/"
              target="_blank"
              rel="noopener noreferrer"
              className="min-h-[44px] flex items-center justify-center space-x-1.5 p-2.5 bg-[#1B1510] border border-[#3D342B] text-xs text-[#F2EDE5] hover:text-[#C4A16A] touch-target"
            >
              <Instagram size={15} className="text-[#C4A16A]" />
              <span className="text-[10px] uppercase tracking-wider">Insta</span>
            </Link>
          </div>

          <p className="text-[10px] text-[#A69C91] text-center tracking-wider font-light">
            Bangalore, India • Certified Lakmé Academy
          </p>
        </div>
      </div>
    </>
  );
}
