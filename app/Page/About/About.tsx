import Image from "next/image";
import { MapPin, CheckCircle2, Globe, Plane } from "lucide-react";
import Link from "next/link";

const About = () => {
  return (
    <section className="bg-black py-20 px-6 md:px-12 border-b border-white/5 relative">
      {/* Brand Header (Consistent with Nav Bars) */}
      <div className="relative flex flex-col items-center justify-center mb-24">
        <Link href={"/"}>
          <h2 className="text-white text-4xl md:text-6xl font-black uppercase italic tracking-tighter">
            <span className="text-pink-500">Anjali</span> Makeover
          </h2>
        </Link>
        <div className="mt-4 flex items-center space-x-4">
          <span className="h-px w-8 md:w-12 bg-pink-500"></span>
          <span className="text-white text-[10px] tracking-[0.6em] uppercase font-bold">
            Artistry & Vision
          </span>
          <span className="h-px w-8 md:w-12 bg-pink-500"></span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto space-y-32">
        {/* FIRST SECTION: Image Left, Text Right */}
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
          <div className="w-full lg:w-5/12 relative">
            <div className="relative aspect-[3/4] overflow-hidden rounded-sm border border-zinc-800">
              <Image
                src="/anjHome.png"
                alt="Anjali Gour - Lead Artist"
                fill
                className="object-cover transition-all duration-1000"
              />
            </div>
            {/* <div className="absolute -bottom-4 -left-4 bg-pink-600 text-white p-6 shadow-2xl">
              <p className="text-4xl font-serif italic leading-none">5+</p>
              <p className="text-[10px] uppercase tracking-[0.2em] mt-1 font-bold">
                Years of Artistry
              </p>
            </div> */}
          </div>

          <div className="w-full lg:w-7/12 space-y-8">
            <div className="space-y-4">
              {/* Heading in different Serif font style */}
              <h3 className="text-white text-5xl md:text-7xl font-serif italic tracking-tight">
                About <span className="text-pink-500">Me</span>
              </h3>
              <div className="h-1 w-20 bg-pink-500"></div>
            </div>

            <div className="space-y-6 text-zinc-400 text-lg leading-relaxed font-light">
              <p>
                I am <span className="text-white font-medium">Anjali Gour</span>
                , a Lakmé Academy Certified professional dedicated to the art of
                transformation. Based in{" "}
                <span className="text-white font-medium">Bangalore</span>, my
                work is defined by precision, luxury, and a deep understanding
                of natural features.
              </p>

              <p className="text-zinc-300 italic">
                "Makeup should never be a mask; it is a mirror that reflects
                your best self."
              </p>

              <div className="bg-zinc-950 border border-zinc-900 p-6 rounded-sm flex items-start gap-4">
                <MapPin className="text-pink-500 shrink-0 mt-1" size={24} />
                <div>
                  <h4 className="text-white font-bold uppercase tracking-widest text-sm mb-1">
                    On-Location Services
                  </h4>
                  <p className="text-zinc-500 text-sm italic">
                    Providing **Venue Bookings** across Bangalore and
                    destination weddings. I travel to your location for a luxury
                    on-site experience.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* SECOND SECTION: Text Left, Image Right */}
        <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-24">
          <div className="w-full lg:w-7/12 space-y-8">
            <div className="space-y-4">
              <h3 className="text-white text-5xl md:text-7xl font-serif italic tracking-tight">
                Our <span className="text-pink-500">Expertise</span>
              </h3>
              <p className="text-zinc-400 text-lg leading-relaxed font-light">
                We believe in providing more than just a makeover; we provide a
                personalized aesthetic journey tailored to your specific event
                needs.
              </p>
            </div>

            {/* Detailed Info List */}
            <ul className="space-y-4">
              {[
                {
                  title: "Bridal Perfection",
                  desc: "Specialized in traditional and contemporary bridal looks with high-end products.",
                },
                {
                  title: "HD & Airbrush",
                  icon: "Camera",
                  desc: "Long-lasting, camera-ready finishes for photography and film.",
                },
                {
                  title: "Fashion & Creative",
                  desc: "Bold, editorial looks for fashion shoots and creative runway events.",
                },
                {
                  title: "Party & Corporate",
                  desc: "Elegant, sophisticated makeovers for social gatherings and formal events.",
                },
              ].map((item, idx) => (
                <li key={idx} className="flex gap-4 group">
                  <CheckCircle2
                    className="text-pink-500 shrink-0 mt-1 group-hover:scale-110 transition-transform"
                    size={20}
                  />
                  <div>
                    <h5 className="text-white font-bold text-sm uppercase tracking-wider">
                      {item.title}
                    </h5>
                    <p className="text-zinc-500 text-sm">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="w-full lg:w-5/12 relative">
            <div className="relative aspect-[3/4] overflow-hidden rounded-sm border border-zinc-800">
              <Image
                src="/highlight/3.jpg" // Use a different work sample here
                alt="Bridal Expertise"
                fill
                className="object-cover transition-all duration-1000"
              />
            </div>
            {/* Decorative pink frame for the right-side image */}
            <div className="absolute -top-4 -right-4 w-32 h-32 border-t-2 border-r-2 border-pink-500/30 -z-10" />
          </div>
        </div>
      </div>

      {/* Section for later add on */}
      {/* <div className="max-w-7xl mx-auto mt-32">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 py-16 border-y border-white/10 bg-zinc-950/30">
          <div className="flex flex-col items-center text-center space-y-3">
            <div className="p-4 bg-pink-500/10 rounded-full">
              <Users className="text-pink-500" size={28} />
            </div>
            <div>
              <h4 className="text-white text-3xl md:text-5xl font-black tracking-tighter">
                500+
              </h4>
              <p className="text-zinc-500 text-[10px] md:text-xs uppercase tracking-[0.2em] font-bold mt-1">
                Happy Clients
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center text-center space-y-3">
            <div className="p-4 bg-pink-500/10 rounded-full">
              <CheckCircle className="text-pink-500" size={28} />
            </div>
            <div>
              <h4 className="text-white text-3xl md:text-5xl font-black tracking-tighter">
                1200+
              </h4>
              <p className="text-zinc-500 text-[10px] md:text-xs uppercase tracking-[0.2em] font-bold mt-1">
                Makeovers Done
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center text-center space-y-3">
            <div className="p-4 bg-pink-500/10 rounded-full">
              <Heart className="text-pink-500" size={28} />
            </div>
            <div>
              <h4 className="text-white text-3xl md:text-5xl font-black tracking-tighter">
                350+
              </h4>
              <p className="text-zinc-500 text-[10px] md:text-xs uppercase tracking-[0.2em] font-bold mt-1">
                Bridal Stories
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center text-center space-y-3">
            <div className="p-4 bg-pink-500/10 rounded-full">
              <Trophy className="text-pink-500" size={28} />
            </div>
            <div>
              <h4 className="text-white text-3xl md:text-5xl font-black tracking-tighter">
                100%
              </h4>
              <p className="text-zinc-500 text-[10px] md:text-xs uppercase tracking-[0.2em] font-bold mt-1">
                Satisfaction
              </p>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <p className="text-zinc-500 italic font-serif text-xl md:text-2xl">
            "Your special day deserves nothing less than perfection."
          </p>
        </div>
      </div> */}
      {/* ... (Keep Brand Header and Section 1 & 2 from previous steps) ... */}

      <div className="max-w-7xl mx-auto space-y-32 mt-32">
        {/* PAN INDIA & VENUE BOOKING SECTION */}
        <div className="bg-zinc-950 border border-zinc-900 rounded-sm overflow-hidden">
          <div className="flex flex-col md:flex-row">
            {/* Map/Travel Icon Area */}
            <div className="md:w-1/3 bg-pink-600 p-12 flex flex-col items-center justify-center text-center space-y-4">
              <Plane size={48} className="text-white animate-pulse" />
              <h4 className="text-white text-2xl font-black uppercase tracking-tighter">
                Pan India Service
              </h4>
            </div>

            {/* Content Area */}
            <div className="md:w-2/3 p-8 md:p-12 space-y-6">
              <h3 className="text-white text-3xl font-serif italic">
                Premium Venue Bookings
              </h3>
              <p className="text-zinc-400 leading-relaxed">
                Due to high demand, we have expanded our operations to support{" "}
                <span className="text-white font-bold">
                  Destination Weddings and Out-station Events
                </span>{" "}
                across India. Whether it’s a palace wedding in Rajasthan, a
                beach ceremony in Goa, or a corporate gala in Mumbai, our team
                is fully equipped to travel.
              </p>
              <div className="flex items-start gap-4 text-pink-500">
                <Globe size={20} className="shrink-0 mt-1" />
                <p className="text-sm text-zinc-300 italic">
                  Our dedicated logistics team provides **Full Support** for
                  venue bookings, ensuring all vanity requirements and lighting
                  setups are managed professionally at your chosen location.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Final Brand Sign-off */}
        <div className="pt-10 text-center space-y-4">
          <h2 className="text-white text-2xl md:text-4xl font-serif italic">
            Ready for your speacial day?
          </h2>
          <div className="h-px w-24 bg-pink-500 mx-auto opacity-50"></div>
        </div>
      </div>
    </section>
  );
};

export default About;
