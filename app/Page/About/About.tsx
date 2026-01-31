import Image from "next/image";
import { MapPin, Sparkles, Camera, Award } from "lucide-react";

const About = () => {
  return (
    <section className="bg-black py-20 px-6 md:px-12 border-b border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
          {/* Left Side: Visual Identity */}
          <div className="w-full lg:w-5/12 relative">
            <div className="relative aspect-[3/4] overflow-hidden rounded-sm border border-zinc-800">
              <Image
                src="/anjHome.png"
                alt="Anjali - Professional Makeup Artist"
                fill
                className="object-cover transition-all duration-1000"
              />
            </div>
            {/* Experience Tag */}
            <div className="absolute -bottom-4 -left-4 bg-pink-600 text-white p-6 shadow-2xl">
              <p className="text-4xl font-serif italic leading-none">5+</p>
              <p className="text-[10px] uppercase tracking-[0.2em] mt-1 font-bold">
                Years of Artistry
              </p>
            </div>
          </div>

          {/* Right Side: Professional Story */}
          <div className="w-full lg:w-7/12 space-y-8">
            <div className="space-y-4">
              <h2 className="text-white text-5xl md:text-7xl font-black uppercase italic tracking-tighter">
                <span className="text-pink-500">Ab</span>out Me
              </h2>
              <div className="h-1 w-20 bg-pink-500"></div>
            </div>

            <div className="space-y-6 text-zinc-400 text-lg leading-relaxed">
              <p>
                I am <span className="text-white font-medium">Anjali Gour</span>
                , a Lakmé Academy Certified professional dedicated to the art of
                transformation. Based in{" "}
                <span className="text-white">Bangalore</span>, my work is
                defined by precision, luxury, and a deep understanding of
                natural features.
              </p>

              <p className="text-zinc-300">
                Specializing in{" "}
                <span className="text-white underline decoration-pink-500 underline-offset-4">
                  Bridal, Event, Fashion, and HD Makeup
                </span>
                , I ensure every look is camera-ready and flawless under any
                lighting. Whether it is a grand wedding or a high-fashion
                editorial shoot, my mission is to reveal your most radiant self.
              </p>

              {/* Venue Booking Highlight */}
              <div className="bg-zinc-950 border border-zinc-900 p-6 rounded-sm flex items-start gap-4 group hover:border-pink-500/30 transition-colors">
                <MapPin className="text-pink-500 shrink-0 mt-1" size={24} />
                <div>
                  <h4 className="text-white font-bold uppercase tracking-widest text-sm mb-1">
                    On-Location Services
                  </h4>
                  <p className="text-zinc-500 text-sm italic">
                    For your comfort, I provide **Venue Bookings**. I travel to
                    your wedding destination or event location to provide a
                    stress-free, luxury makeover experience on-site.
                  </p>
                </div>
              </div>
            </div>

            {/* Specialties Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4">
              {[
                { label: "Bridal", icon: <Sparkles size={16} /> },
                { label: "HD Makeup", icon: <Camera size={16} /> },
                { label: "Fashion", icon: <Award size={16} /> },
                { label: "Events", icon: <MapPin size={16} /> },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2 text-zinc-500 text-[11px] uppercase tracking-widest font-bold"
                >
                  <span className="text-pink-500">{item.icon}</span>
                  {item.label}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
