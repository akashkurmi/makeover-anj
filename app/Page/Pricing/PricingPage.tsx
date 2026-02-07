import Link from "next/link";

const pricingData = [
  {
    category: "Bridal Makeup",
    services: [
      {
        name: "Traditional Bridal",
        price: "₹15,000",
        details: "Includes hair & draping",
      },
      {
        name: "HD Bridal Makeup",
        price: "₹20,000",
        details: "High-definition finish",
      },
      {
        name: "Airbrush Bridal",
        price: "₹25,000",
        details: "Waterproof & long-lasting",
      },
    ],
  },
  {
    category: "Party & Occasion",
    services: [
      {
        name: "Standard Party Look",
        price: "₹5,000",
        details: "Light base & hairstyle",
      },
      {
        name: "Engagement Makeup",
        price: "₹10,000",
        details: "Full glam look",
      },
    ],
  },
];

const PricingPage = () => {
  return (
    <div className="bg-black text-white min-h-screen py-20 px-8">
      <div className="relative flex flex-col items-center justify-center mb-24">
        <Link href={"/"}>
          <h2 className="text-white text-4xl md:text-6xl font-black uppercase italic tracking-tighter">
            <span className="text-pink-500">Anjali</span> Makeover
          </h2>
        </Link>
      </div>

      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-serif italic text-center mb-16 text-pink-500">
          Our Services & Rates
        </h1>
        <div className="max-w-4xl mx-auto px-4">
          {pricingData.map((section, idx) => (
            <div key={idx} className="mb-12">
              <h2 className="text-xl md:text-2xl tracking-[0.2em] uppercase border-b border-zinc-800 pb-2 mb-6 text-pink-500">
                {section.category}
              </h2>

              <div className="space-y-8">
                {section.services.map((service, sIdx) => (
                  <div
                    key={sIdx}
                    className="flex flex-col md:flex-row md:justify-between md:items-baseline gap-1 group"
                  >
                    <div className="flex-1">
                      <div className="flex justify-between items-baseline">
                        <h3 className="text-lg font-medium text-white group-hover:text-pink-400 transition-colors">
                          {service.name}
                        </h3>
                        {/* Price shows on the right for mobile too, but aligned with title */}
                        <span className="text-pink-500 font-mono text-lg md:hidden">
                          {service.price}
                        </span>
                      </div>
                      <p className="text-zinc-500 text-sm leading-relaxed max-w-md">
                        {service.details}
                      </p>
                    </div>

                    {/* Price hidden on mobile here to prevent double-display, shown on desktop only */}
                    <div className="hidden md:block text-xl font-mono text-pink-500 ml-4">
                      {service.price}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        <p className="text-center text-zinc-500 text-sm italic mt-10">
          *Prices may vary based on location and specific requirements.
        </p>
      </div>
    </div>
  );
};

export default PricingPage;
