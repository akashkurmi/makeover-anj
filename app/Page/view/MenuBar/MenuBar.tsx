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
  ChevronDown,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const serviceSubLinks = [
  { name: "Makeup", tag: "Bridal, HD & Airbrush", href: "/#services-makeup" },
  { name: "Hair", tag: "Haute Sculpting & Styling", href: "/#services-hair" },
  { name: "Skin", tag: "Prep, Glass Skin & Draping", href: "/#services-skin" },
  { name: "Nails", tag: "Art, Extensions & Care", href: "/#services-nails" },
];

const navLinks = [
  {
    name: "SERVICES",
    href: "/#services",
    subtitle: "Makeup, Hair, skin and nails",
    isServices: true,
  },
  {
    name: "GALLERY",
    href: "/#gallery",
    subtitle: "Signature Portfolios & Artistry",
  },
  {
    name: "ABOUT",
    href: "/#about",
    subtitle: "The Anjali Signature Story",
  },
  {
    name: "COLLECTION",
    href: "/Page/Gayatri-Collection",
    subtitle: "Couture Bridal Lehengas",
  },
];

export default function MenuBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

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
        setServicesOpen(false);
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
            {navLinks.map((link) => {
              if (link.isServices) {
                return (
                  <div
                    key={link.name}
                    className="relative py-2"
                    onMouseEnter={() => setServicesOpen(true)}
                    onMouseLeave={() => setServicesOpen(false)}
                  >
                    <div className="flex items-center space-x-1">
                      <Link
                        href={link.href}
                        className="text-[11px] font-sans tracking-[0.25em] uppercase text-[#A69C91] hover:text-[#F2EDE5] transition-colors duration-300 relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[#C4A16A] hover:after:w-full after:transition-all after:duration-300"
                      >
                        {link.name}
                      </Link>
                      <button
                        type="button"
                        onClick={() => setServicesOpen(!servicesOpen)}
                        aria-label="Toggle services dropdown"
                        className="text-[#A69C91] hover:text-[#C4A16A] transition-colors p-0.5"
                      >
                        <ChevronDown
                          size={13}
                          className={`transition-transform duration-300 ${
                            servicesOpen ? "rotate-180 text-[#C4A16A]" : ""
                          }`}
                        />
                      </button>
                    </div>

                    {/* LUXURY DESKTOP DROPDOWN */}
                    <div
                      className={`absolute top-full left-1/2 -translate-x-1/2 w-64 pt-2 transition-all duration-200 z-50 ${
                        servicesOpen
                          ? "opacity-100 translate-y-0 pointer-events-auto"
                          : "opacity-0 -translate-y-2 pointer-events-none"
                      }`}
                    >
                      <div className="bg-[#17120E] border border-[#3D342B] shadow-[0_20px_45px_rgba(0,0,0,0.85)] p-2.5 backdrop-blur-md">
                        <div className="px-3 py-2 border-b border-[#3D342B]/60 mb-1">
                          <p className="text-[9px] uppercase tracking-[0.3em] text-[#C4A16A] font-medium font-sans">
                            SERVICES MENU
                          </p>
                          <p className="text-[11px] text-[#A69C91] font-sans font-light">
                            Makeup, Hair, Skin & Nails
                          </p>
                        </div>

                        <div className="space-y-0.5">
                          {serviceSubLinks.map((sub) => (
                            <Link
                              key={sub.name}
                              href={sub.href}
                              onClick={() => setServicesOpen(false)}
                              className="group/sub flex items-center justify-between px-3 py-2 hover:bg-[#221B15] transition-colors"
                            >
                              <div>
                                <span className="text-xs uppercase tracking-[0.2em] font-sans text-[#F2EDE5] group-hover/sub:text-[#C4A16A] transition-colors font-medium">
                                  {sub.name}
                                </span>
                                <p className="text-[9.5px] text-[#8C8277] font-sans font-light">
                                  {sub.tag}
                                </p>
                              </div>
                              <ArrowRight
                                size={12}
                                className="text-[#C4A16A] opacity-0 group-hover/sub:opacity-100 transition-opacity"
                              />
                            </Link>
                          ))}
                        </div>

                        <div className="mt-2 pt-2 border-t border-[#3D342B]/60 px-3 py-1 flex items-center justify-between">
                          <Link
                            href="/#services"
                            onClick={() => setServicesOpen(false)}
                            className="text-[10px] uppercase tracking-[0.2em] text-[#C4A16A] hover:text-[#F2EDE5] transition-colors font-sans flex items-center space-x-1"
                          >
                            <span>All Services</span>
                            <ArrowRight size={11} />
                          </Link>
                          <Link
                            href="/Page/Pricing"
                            onClick={() => setServicesOpen(false)}
                            className="text-[10px] uppercase tracking-[0.2em] text-[#A69C91] hover:text-[#C4A16A] transition-colors font-sans"
                          >
                            Rate Menu
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              }

              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-[11px] font-sans tracking-[0.25em] uppercase text-[#A69C91] hover:text-[#F2EDE5] transition-colors duration-300 relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[#C4A16A] hover:after:w-full after:transition-all after:duration-300"
                >
                  {link.name}
                </Link>
              );
            })}
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
            {navLinks.map((link, idx) => {
              if (link.isServices) {
                return (
                  <div
                    key={link.name}
                    className="py-3 border-b border-[#3D342B]/40"
                  >
                    <Link
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className="group flex items-center justify-between touch-target"
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
                        <p className="text-[11px] text-[#C4A16A] font-sans pl-7 tracking-wider pt-0.5 font-normal">
                          {link.subtitle}
                        </p>
                      </div>
                      <ArrowRight
                        size={16}
                        className="text-[#C4A16A] opacity-70 group-hover:opacity-100 group-hover:translate-x-1 transition-all"
                      />
                    </Link>

                    {/* Touch-Friendly Sub-Service Pills */}
                    <div className="pl-7 pt-3 flex flex-wrap gap-2">
                      {serviceSubLinks.map((sub) => (
                        <Link
                          key={sub.name}
                          href={sub.href}
                          onClick={() => setIsOpen(false)}
                          className="min-h-[42px] px-3.5 py-2 bg-[#1B1510] border border-[#3D342B] active:border-[#C4A16A] active:bg-[#251E17] text-xs uppercase tracking-wider text-[#F2EDE5] active:text-[#C4A16A] flex items-center justify-center font-sans touch-target"
                        >
                          {sub.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                );
              }

              return (
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
                  <ArrowRight
                    size={16}
                    className="text-[#C4A16A] opacity-70 group-hover:opacity-100 group-hover:translate-x-1 transition-all"
                  />
                </Link>
              );
            })}
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
