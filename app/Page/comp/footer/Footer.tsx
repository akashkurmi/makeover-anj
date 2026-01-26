import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  const instaLink = "https://www.instagram.com/anjalimakeover7879/";

  return (
    <footer className="w-full bg-black py-16 border-t border-zinc-900">
      <div className="max-w-6xl mx-auto px-8">
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-12">
          {/* Left Section: QR Code */}
          <div className="flex flex-col items-center shrink-0 group">
            <Link
              href={instaLink}
              target="_blank"
              rel="noopener noreferrer"
              className="relative block bg-white p-3 rounded-xl shadow-lg w-32 h-32 md:w-40 md:h-40 transition-all duration-500 hover:shadow-pink-500/20 overflow-hidden"
            >
              <Image
                src="/insta.png"
                alt="Instagram QR Code"
                fill
                sizes="(max-width: 768px) 128px, 160px"
                className="object-contain p-2"
                priority
              />
              <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4 z-10">
                <span className="text-white text-[9px] font-medium tracking-tighter break-all text-center leading-tight">
                  @anjalimakeover7879
                </span>
              </div>
            </Link>
            <p className="mt-4 text-[11px] tracking-[0.2em] uppercase text-pink-500 font-medium">
              Follow us on Instagram
            </p>
          </div>

          {/* Right Section: Contact Info & Certification */}
          <div className="flex-1 w-full pt-4">
            <div className="flex flex-col lg:flex-row justify-between gap-12">
              {/* Contact Grid */}
              <div className="text-center md:text-left">
                <h2 className="text-4xl font-serif italic mb-10 text-white">
                  Get in Touch
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 text-sm tracking-[0.2em] uppercase text-gray-400">
                  <div className="space-y-2">
                    <p className="text-white font-semibold">Location</p>
                    <p className="leading-relaxed">Bangalore, India</p>
                  </div>
                  <div className="space-y-2">
                    <p className="text-white font-semibold">Email</p>
                    <p className="lowercase tracking-normal">
                      anjaligour761@gmail.com
                    </p>
                  </div>
                  <div className="space-y-2">
                    <p className="text-white font-semibold">Phone</p>
                    <p className="tracking-widest">+91 78794 58655</p>
                  </div>
                </div>
              </div>

              {/* Lakme Certification Badge */}
              <div className="flex flex-col items-center lg:items-end justify-center lg:justify-start shrink-0">
                <div className="relative w-45 h-30 mb-3">
                  <Image
                    src="/lakmeAcd.png" // Ensure this image exists in your public folder
                    alt="Lakme Academy Certified"
                    fill
                    className="object-contain grayscale hover:grayscale-0 transition-all duration-500"
                  />
                </div>
                <div className="text-center lg:text-right">
                  <p className="text-pink-500 text-[10px] tracking-[0.3em] uppercase font-bold">
                    Certified Professional
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-20 pt-8 border-t border-zinc-900 text-center">
          <p className="text-[10px] text-zinc-600 tracking-[0.5em] uppercase">
            © 2026 ANJALI MAKEOVER. ALL RIGHTS RESERVED.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
