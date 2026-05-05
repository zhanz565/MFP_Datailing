import { Sparkles, Check, Car, Truck } from 'lucide-react';

// We reordered this list so IN & OUT is first!
const packages = [
  { 
    name: "IN & OUT DETAILING", 
    sub: "Complete Transformation", 
    prices: { sedan: "160", suv: "190", van: "210" },
    features: ["Exterior hand wash & dry", "Wheels & tires deep clean", "Full interior dusting & vacuum", "Dashboard, console & panels wiped down", "Window cleaning (inside & out)"], 
    highlighted: true 
  },
  { 
    name: "EXTERIOR ONLY", 
    sub: "Professional Exterior Wash", 
    prices: { sedan: "40", suv: "50", van: "60" },
    features: ["Exterior hand wash & dry", "Wheels & tires deep clean", "Tire shine application", "Window & mirror cleaning (outside)"] 
  },
  { 
    name: "INTERIOR ONLY", 
    sub: "Deep Interior Cleaning", 
    prices: { sedan: "120", suv: "140", van: "150" },
    features: ["Full interior dusting & vacuum", "Dashboard, console & panels wiped down", "Leather cleaning & conditioning", "Window & mirror cleaning (inside)"] 
  }
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-16 md:py-24 px-6 bg-[#0c0f17] overflow-hidden">
      <div className="max-w-7xl mx-auto text-center">
        
        <h2 className="text-4xl md:text-5xl font-black mb-2 md:mb-4 tracking-tight">Detailing <span className="text-gold">Packages</span></h2>
        <p className="text-xs md:text-base text-gray-400 mb-8 md:mb-16">Premium auto detailing services tailored to your vehicle's size</p>
        
        {/* Restored Mobile: Horizontal Swipe | Desktop: 3-Column Grid */}
        <div className="flex overflow-x-auto hide-scrollbar snap-x snap-mandatory pb-4 -mx-6 px-6 md:mx-0 md:px-0 md:grid lg:grid-cols-3 gap-4 md:gap-8">
          {packages.map((pkg) => (
            <div key={pkg.name} className={`w-[85vw] md:w-auto shrink-0 snap-center relative p-6 md:p-8 rounded-2xl border flex flex-col ${pkg.highlighted ? 'border-accent bg-[#11141d] shadow-[0_0_30px_rgba(251,191,36,0.1)]' : 'border-white/5 bg-[#0c0f17]'}`}>
              
              {pkg.highlighted && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent text-black font-black px-3 py-0.5 rounded-full text-[10px] md:text-xs flex items-center gap-1 uppercase tracking-tighter">
                  ⭐ Most Popular
                </div>
              )}
              
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/5 flex items-center justify-center mx-auto mb-4 md:mb-6 shrink-0">
                <Sparkles className={`w-5 h-5 md:w-6 md:h-6 ${pkg.highlighted ? "text-accent" : "text-primary"}`} />
              </div>
              
              <h3 className="text-lg md:text-xl font-black tracking-widest text-white">{pkg.name}</h3>
              <p className="text-[10px] md:text-xs text-gray-500 mb-6">{pkg.sub}</p>
              
              {/* TIERED PRICING BOX */}
              <div className="bg-black/30 rounded-xl p-4 mb-8 border border-white/5">
                {/* Sedan/Coupe */}
                <div className="flex justify-between items-center mb-3 pb-3 border-b border-white/5">
                  <div className="flex items-center gap-2 text-gray-400">
                    <Car className="w-4 h-4" />
                    <span className="text-sm">Sedan / Coupe</span>
                  </div>
                  <span className={`text-lg font-bold ${pkg.highlighted ? 'text-accent' : 'text-white'}`}>${pkg.prices.sedan}</span>
                </div>
                {/* SUV */}
                <div className="flex justify-between items-center mb-3 pb-3 border-b border-white/5">
                  <div className="flex items-center gap-2 text-gray-400">
                    <Truck className="w-4 h-4" />
                    <span className="text-sm">SUV</span>
                  </div>
                  <span className={`text-lg font-bold ${pkg.highlighted ? 'text-accent' : 'text-white'}`}>${pkg.prices.suv}</span>
                </div>
                {/* VAN */}
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2 text-gray-400">
                    <Truck className="w-4 h-4" />
                    <span className="text-sm">Van</span>
                  </div>
                  <span className={`text-lg font-bold ${pkg.highlighted ? 'text-accent' : 'text-white'}`}>${pkg.prices.van}</span>
                </div>
              </div>
              
              {/* Features List */}
              <ul className="text-left space-y-3 md:space-y-4 mb-8 md:mb-10 flex-grow">
                {pkg.features.map(f => (
                  <li key={f} className="flex items-start gap-2 md:gap-3 text-xs md:text-sm text-gray-400">
                    <Check className={`w-3 h-3 md:w-4 md:h-4 shrink-0 mt-0.5 ${pkg.highlighted ? 'text-accent' : 'text-primary'}`} />
                    {f}
                  </li>
                ))}
              </ul>
              
              <a href="#contact" className={`block w-full py-3 rounded-lg font-bold text-center text-sm md:text-base transition-all mt-auto ${pkg.highlighted ? 'bg-accent text-black hover:opacity-90' : 'bg-primary text-white hover:bg-primary-dark'}`}>
                Book Now
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}