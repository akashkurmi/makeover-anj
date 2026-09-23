"use client";
import Image from "next/image";
import { MapPin, CheckCircle2, Globe, Plane, ArrowLeft, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function About() {
  return (
    <section className="bg-[#120F0C] text-[#F2EDE5] py-20 sm:py-24 px-4 sm:px-8 lg:px-12 border-b border-[#3D342B]/60 relative max-w-full overflow-hidden">
      {/* Top Navigation */}
      <div className="max-w-7xl mx-auto flex items-center justify-between mb-12 sm:mb-20 pt-6">
        <Link
          href="/"
          className="flex items-center gap-2 text-[#A69C91] hover:text-[#C4A16A] active:text-[#C4A16A] transition-colors py-2 touch-target"
        >
          <ArrowLeft size={16} />
          <span className="uppercase tracking-[0.25em] text-[11px] font-sans">
            Back to Home
          </span>
        </Link>

        <Link href="/" className="group flex flex-col items-center">
          <span className="font-serif text-xl sm:text-2xl tracking-[0.25em] text-[#F2EDE5] group-hover:text-[#C4A16A] transition-colors">
            ANJALI
          </span>
          <span className="text-[7.5px] uppercase tracking-[0.35em] text-[#A69C91] -mt-0.5 group-hover:text-[#D4B47F] transition-colors">
            LUXURY BEAUTY STUDIO
          </span>
        </Link>

        <div className="w-[80px] sm:w-[100px] hidden sm:block"></div>
      </div>

      <div className="max-w-7xl mx-auto space-y-20 sm:space-y-32">
        {/* FIRST SECTION: Image + Story */}
        <div className="flex flex-col lg:grid lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-16 items-center">
          <div className="w-full lg:col-span-5 relative">
            <div className="relative mx-auto max-w-sm sm:max-w-md w-full">
              <div className="relative aspect-[4/5] sm:aspect-[3/4] overflow-hidden bg-[#1E1813] border border-[#3D342B] shadow-2xl">
                <Image
                  src="/anjHome.png"
                  alt="Anjali Gour - Lead Artist"
                  fill
                  priority
                  className="object-cover object-top hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 450px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#120F0C]/70 via-transparent to-transparent opacity-60" />
              </div>
              <div className="hidden sm:block absolute -bottom-3 -left-3 w-full h-full border border-[#C4A16A]/40 -z-10" />
            </div>
          </div>

          <div className="w-full lg:col-span-7 space-y-4 sm:space-y-6 pt-2 lg:pt-0">
            <div className="space-y-2.5 sm:space-y-3">
              <div className="flex items-center space-x-2.5">
                <span className="h-px w-6 sm:w-8 bg-[#C4A16A]" />
                <p className="text-[9.5px] sm:text-[10px] uppercase tracking-[0.3em] sm:tracking-[0.35em] text-[#C4A16A]">
                  MEET THE ARTIST
                </p>
              </div>
              <h1 className="text-3xl xs:text-4xl sm:text-6xl font-serif font-light text-[#F2EDE5] leading-tight">
                Anjali <span className="italic font-normal text-[#C4A16A]">Gour</span>
              </h1>
            </div>

            <div className="w-12 sm:w-16 h-px bg-[#C4A16A]/60" />

            <div className="space-y-3 sm:space-y-4 text-[#A69C91] text-sm sm:text-base font-light leading-relaxed">
              <p>
                I am <span className="text-[#F2EDE5] font-normal">Anjali Gour</span>, a certified Lakmé Academy professional dedicated to the craft of high-definition transformation. Based in Bangalore, my work is defined by precision, enduring luxury, and an instinctive understanding of natural facial harmony.
              </p>

              <blockquote className="border-l-2 border-[#C4A16A] pl-3.5 sm:pl-4 py-1 text-[#F2EDE5] font-serif italic text-base sm:text-lg">
                "Makeup should never be a mask; it is a mirror that reflects your most radiant, timeless self."
              </blockquote>

              <p>
                Having prepared hundreds of brides for grand ceremonies and destination weddings across India, my approach merges cinematic long-wear finishes with effortless royal grace.
              </p>
            </div>

            <div className="bg-[#1E1813] border border-[#3D342B] p-4 sm:p-6 flex items-start gap-3 sm:gap-4">
              <MapPin className="text-[#C4A16A] shrink-0 mt-0.5" size={18} />
              <div>
                <h4 className="text-xs uppercase tracking-widest text-[#F2EDE5] font-medium mb-1">
                  On-Location & Destination Artistry
                </h4>
                <p className="text-xs text-[#A69C91] font-light leading-relaxed">
                  Available for venue appointments across Bangalore and premier destination wedding circuits in Rajasthan, Goa, Mumbai, and beyond.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* SECOND SECTION: Pillars */}
        <div className="flex flex-col-reverse lg:grid lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-16 items-center">
          <div className="w-full lg:col-span-7 space-y-4 sm:space-y-6 pt-2 lg:pt-0">
            <div className="space-y-2.5 sm:space-y-3">
              <div className="flex items-center space-x-2.5">
                <span className="h-px w-6 sm:w-8 bg-[#C4A16A]" />
                <p className="text-[9.5px] sm:text-[10px] uppercase tracking-[0.3em] sm:tracking-[0.35em] text-[#C4A16A]">
                  CORE SPECIALIZATIONS
                </p>
              </div>
              <h2 className="text-3xl xs:text-4xl sm:text-6xl font-serif font-light text-[#F2EDE5] leading-tight">
                Our <span className="italic font-normal text-[#C4A16A]">Artistic Pillars</span>
              </h2>
            </div>

            <div className="w-12 sm:w-16 h-px bg-[#C4A16A]/60" />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1 sm:pt-2">
              {[
                {
                  title: "Bridal Couture",
                  desc: "Traditional and modern bridal perfection using luxury global cosmetics with 16-hour sweat-proof endurance.",
                },
                {
                  title: "HD & Airbrush Complexion",
                  desc: "Flawless, photo-ready textures engineered for 4K video capture and ambient lighting.",
                },
                {
                  title: "Editorial & Fashion",
                  desc: "High-impact runway and magazine looks featuring tailored eye drama and luminous skin sculpting.",
                },
                {
                  title: "Haute Hair Architecture",
                  desc: "Bespoke bridal updos, textured waves, and floral ornamentation matching your attire.",
                },
              ].map((item, idx) => (
                <div key={idx} className="p-4 sm:p-5 bg-[#17120E] border border-[#3D342B]/50 space-y-1.5">
                  <div className="flex items-center space-x-2 text-[#C4A16A]">
                    <CheckCircle2 size={15} />
                    <h5 className="text-xs uppercase tracking-wider font-medium text-[#F2EDE5]">
                      {item.title}
                    </h5>
                  </div>
                  <p className="text-xs text-[#A69C91] leading-relaxed font-light">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="w-full lg:col-span-5 relative">
            <div className="relative mx-auto max-w-sm sm:max-w-md w-full">
              <div className="relative aspect-[4/5] sm:aspect-[3/4] overflow-hidden bg-[#1E1813] border border-[#3D342B] shadow-2xl">
                <Image
                  src="/highlight/3.jpg"
                  alt="Bridal Expertise"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 450px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#120F0C]/70 via-transparent to-transparent opacity-60" />
              </div>
              <div className="hidden sm:block absolute -top-3 -right-3 w-full h-full border border-[#C4A16A]/40 -z-10" />
            </div>
          </div>
        </div>

        {/* PAN INDIA SERVICE BANNER: Mobile-first stacked layout */}
        <div className="bg-[#1E1813] border border-[#3D342B] overflow-hidden">
          <div className="flex flex-col md:grid md:grid-cols-12">
            <div className="md:col-span-4 bg-[#C4A16A] text-[#120F0C] p-6 sm:p-10 flex flex-col items-center justify-center text-center space-y-2 sm:space-y-3">
              <Plane size={36} strokeWidth={1.5} />
              <h4 className="text-lg sm:text-xl font-serif tracking-wider uppercase font-medium">
                Pan-India Service
              </h4>
              <p className="text-xs font-sans tracking-wide">
                Destination Weddings & Outstation Vanity
              </p>
            </div>

            <div className="md:col-span-8 p-6 sm:p-8 lg:p-12 space-y-3 sm:space-y-4">
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-serif italic text-[#F2EDE5]">
                Luxury Destination Wedding Support
              </h3>
              <p className="text-xs sm:text-sm text-[#A69C91] leading-relaxed font-light">
                Whether you are hosting a regal palace wedding in Udaipur or Jaipur, a seaside celebration in Goa, or a grand reception in Mumbai or Delhi, our team is equipped with mobile studio lighting, professional vanity kits, and complete logistics for on-site perfection.
              </p>
              <div className="flex items-center space-x-2.5 text-xs text-[#C4A16A] pt-1">
                <Globe size={15} />
                <span>Full vanity logistics & multi-event booking packages available.</span>
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM CTA */}
        <div className="text-center space-y-4 sm:space-y-6 pt-4 sm:pt-8">
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-serif font-light text-[#F2EDE5]">
            Ready for your <span className="italic font-normal text-[#C4A16A]">special day?</span>
          </h2>
          <div className="flex justify-center">
            <Link
              href="/#booking"
              className="w-full sm:w-auto min-h-[48px] inline-flex items-center justify-center space-x-3 px-8 py-3.5 sm:py-4 bg-[#C4A16A] text-[#120F0C] text-xs uppercase tracking-[0.3em] font-medium hover:bg-[#D4B47F] active:bg-[#D4B47F] transition-all shadow-xl touch-target"
            >
              <span>INQUIRE WITH ANJALI</span>
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
