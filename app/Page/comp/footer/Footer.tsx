"use client";
import { Instagram, Youtube, MessageCircleCode, Phone, Mail, MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const instaLink = "https://www.instagram.com/anjalimakeover7879/";

  return (
    <footer className="w-full bg-[#120F0C] text-[#F2EDE5] py-16 sm:py-20 border-t border-[#3D342B]/80 max-w-full overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="flex flex-col lg:grid lg:grid-cols-12 gap-10 lg:gap-16 items-start pb-12 sm:pb-16 border-b border-[#3D342B]/60">
          {/* BRAND COLUMN */}
          <div className="w-full lg:col-span-4 space-y-4 sm:space-y-6">
            <Link href="/" className="group flex flex-col items-start tracking-wider">
              <span className="font-serif text-2xl sm:text-3xl tracking-[0.25em] text-[#F2EDE5] group-hover:text-[#C4A16A] transition-colors font-light">
                ANJALI
              </span>
              <span className="text-[8px] sm:text-[9px] uppercase tracking-[0.35em] text-[#A69C91] -mt-0.5 group-hover:text-[#D4B47F] transition-colors font-sans">
                LUXURY BEAUTY STUDIO
              </span>
            </Link>

            <p className="text-xs font-sans text-[#A69C91] leading-relaxed max-w-sm font-light">
              Elevating bridal and high-fashion beauty through certified Lakmé Academy mastery, bespoke skin architecture, and timeless Indian heritage couture.
            </p>

            {/* TOUCHABLE SOCIAL BUTTONS */}
            <div className="flex items-center space-x-3 pt-1">
              <Link
                href={instaLink}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram profile"
                className="min-w-[44px] min-h-[44px] rounded-full bg-[#1E1813] border border-[#3D342B] flex items-center justify-center text-[#A69C91] hover:text-[#C4A16A] active:text-[#C4A16A] hover:border-[#C4A16A] transition-all touch-target"
              >
                <Instagram size={17} />
              </Link>

              <Link
                href="https://www.youtube.com/@anjaligourmakeover"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube channel"
                className="min-w-[44px] min-h-[44px] rounded-full bg-[#1E1813] border border-[#3D342B] flex items-center justify-center text-[#A69C91] hover:text-[#C4A16A] active:text-[#C4A16A] hover:border-[#C4A16A] transition-all touch-target"
              >
                <Youtube size={17} />
              </Link>

              <Link
                href="https://www.threads.net/@anjalimakeover7879"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Threads profile"
                className="min-w-[44px] min-h-[44px] rounded-full bg-[#1E1813] border border-[#3D342B] flex items-center justify-center text-[#A69C91] hover:text-[#C4A16A] active:text-[#C4A16A] hover:border-[#C4A16A] transition-all touch-target"
              >
                <MessageCircleCode size={17} />
              </Link>
            </div>
          </div>

          {/* CONTACT & NAVIGATION GRID */}
          <div className="w-full lg:col-span-5 space-y-5 sm:space-y-6">
            <h4 className="text-[10px] sm:text-xs uppercase tracking-[0.3em] text-[#C4A16A] font-sans font-medium">
              Studio & Destination Inquiries
            </h4>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 text-xs text-[#A69C91] font-light">
              <div className="space-y-1">
                <p className="text-[#F2EDE5] uppercase tracking-wider font-normal text-[11px]">
                  Primary Studio
                </p>
                <p className="leading-relaxed">Bangalore, Karnataka, India</p>
                <p className="text-[10px] text-[#A88349]">Pan-India On-Location Travel</p>
              </div>

              <div className="space-y-1">
                <p className="text-[#F2EDE5] uppercase tracking-wider font-normal text-[11px]">
                  Direct Voice / WhatsApp
                </p>
                <Link href="tel:+917879458655" className="hover:text-[#C4A16A] active:text-[#C4A16A] transition-colors block py-0.5">
                  +91 78794 58655
                </Link>
                <Link href="mailto:anjaligour761@gmail.com" className="hover:text-[#C4A16A] active:text-[#C4A16A] transition-colors block truncate py-0.5">
                  anjaligour761@gmail.com
                </Link>
              </div>
            </div>

            {/* QUICK TOUCH NAVIGATION LINKS */}
            <div className="pt-2 flex flex-wrap gap-x-5 gap-y-2.5 text-[11px] uppercase tracking-[0.2em] text-[#A69C91]">
              <Link href="/#services" className="hover:text-[#C4A16A] active:text-[#C4A16A] py-1 transition-colors">
                Services
              </Link>
              <Link href="/#bridal" className="hover:text-[#C4A16A] active:text-[#C4A16A] py-1 transition-colors">
                Bridal Edit
              </Link>
              <Link href="/Page/Portfolio" className="hover:text-[#C4A16A] active:text-[#C4A16A] py-1 transition-colors">
                Portfolio
              </Link>
              <Link href="/Page/Pricing" className="hover:text-[#C4A16A] active:text-[#C4A16A] py-1 transition-colors">
                Rate Menu
              </Link>
              <Link href="/Page/About" className="hover:text-[#C4A16A] active:text-[#C4A16A] py-1 transition-colors">
                About Studio
              </Link>
              <Link href="/Page/Gayatri-Collection" className="hover:text-[#C4A16A] active:text-[#C4A16A] py-1 transition-colors">
                Gayatri Collection
              </Link>
            </div>
          </div>

          {/* QR CODE & LAKME BADGE */}
          <div className="w-full lg:col-span-3 flex flex-row lg:flex-col items-center lg:items-end justify-between lg:justify-start gap-4 sm:gap-6 pt-2 lg:pt-0">
            {/* Instagram QR Card */}
            <Link
              href={instaLink}
              target="_blank"
              rel="noopener noreferrer"
              className="relative block bg-white p-2 rounded-sm shadow-xl w-24 h-24 sm:w-28 sm:h-28 hover:shadow-[0_0_20px_rgba(196,161,106,0.3)] transition-all duration-300 overflow-hidden shrink-0 group"
            >
              <Image
                src="/insta.png"
                alt="Instagram @anjalimakeover7879"
                fill
                sizes="112px"
                className="object-contain p-1"
              />
              <div className="absolute inset-0 bg-[#120F0C]/85 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-2">
                <span className="text-[7.5px] uppercase tracking-widest text-[#C4A16A] text-center font-medium">
                  Scan for Instagram
                </span>
              </div>
            </Link>

            {/* Lakme Badge */}
            <div className="flex flex-col items-end text-right">
              <div className="relative w-24 sm:w-28 h-12 sm:h-14">
                <Image
                  src="/lakmeAcd.png"
                  alt="Lakmé Academy Certified"
                  fill
                  className="object-contain opacity-75 hover:opacity-100 transition-opacity"
                />
              </div>
              <p className="text-[8.5px] sm:text-[9px] uppercase tracking-[0.25em] text-[#C4A16A] font-medium mt-1">
                Certified Professional
              </p>
            </div>
          </div>
        </div>

        {/* COPYRIGHT */}
        <div className="pt-6 sm:pt-8 flex flex-col sm:flex-row items-center justify-between text-[8.5px] sm:text-[9px] uppercase tracking-[0.3em] sm:tracking-[0.35em] text-[#6E6459] gap-3 text-center sm:text-left">
          <p>© {new Date().getFullYear()} ANJALI MAKEOVER. ALL RIGHTS RESERVED.</p>
          <p className="font-serif italic tracking-widest text-[#A69C91] normal-case text-xs">
            Where Beauty Becomes Art
          </p>
        </div>
      </div>
    </footer>
  );
}
