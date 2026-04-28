import { Sparkles, Check } from 'lucide-react';

const packages = [
  { name: "STARTER", price: "100 – $150", sub: "In & Out Package", features: ["Exterior hand wash & dry", "Wheels & tires deep clean + tire shine", "Light interior dusting & vacuum", "Window & mirror cleaning (inside & out)"] },
  { name: "PREMIER", price: "200 – $250", sub: "Full Detail", features: ["Exterior hand wash & dry", "Exterior hand polish", "Wheels & tires deep clean", "Full interior dusting & vacuum", "Dashboard, console & panels cleaned", "Leather cleaning & conditioning", "Window & mirror cleaning"] },
  { name: "VIP", price: "300 – $350", sub: "Ultimate Package", features: ["Everything in Premier", "Paint correction (Stage 1)", "Bug, tar, & road grime removal", "Trim cleaning & restoration", "Complete interior cleaning", "Carpet & upholstery shampoo", "Odor removal & interior refresh"], highlighted: true }
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-16 md:py-24 px-6 bg-[#0c0f17] overflow-hidden">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-black mb-2 md:mb-4 tracking-tight">Detailing <span className="text-gold">Packages</span></h2>
        <p className="text-xs md:text-base text-gray-400 mb-8 md:mb-16">Premium auto detailing services tailored to your vehicle's needs</p>
        
        {/* Mobile: Horizontal Swipe | Desktop: Grid */}
        <div className="flex overflow-x-auto hide-scrollbar snap-x snap-mandatory pb-4 -mx-6 px-6 md:mx-0 md:px-0 md:grid lg:grid-cols-3 gap-4 md:gap-8">
          {packages.map((pkg) => (
            <div key={pkg.name} className={`w-[85vw] md:w-auto shrink-0 snap-center relative p-6 md:p-8 rounded-2xl border ${pkg.highlighted ? 'border-accent bg-[#11141d] shadow-[0_0_30px_rgba(251,191,36,0.1)]' : 'border-white/5 bg-[#0c0f17]'}`}>
              {pkg.highlighted && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent text-black font-black px-3 py-0.5 rounded-full text-[10px] md:text-xs flex items-center gap-1 uppercase tracking-tighter">
                  ⭐ Best Value
                </div>
              )}
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/5 flex items-center justify-center mx-auto mb-4 md:mb-6">
                <Sparkles className={`w-5 h-5 md:w-6 md:h-6 ${pkg.highlighted ? "text-accent" : "text-primary"}`} />
              </div>
              <h3 className="text-lg md:text-xl font-black tracking-widest text-white">{pkg.name}</h3>
              <p className="text-[10px] md:text-xs text-gray-500 mb-2 md:mb-4">{pkg.sub}</p>
              <p className={`text-3xl md:text-4xl font-black mb-6 md:mb-8 ${pkg.highlighted ? 'text-accent' : 'text-white'}`}>${pkg.price}</p>
              
              <ul className="text-left space-y-3 md:space-y-4 mb-8 md:mb-10 min-h-[180px] md:min-h-[300px]">
                {pkg.features.map(f => (
                  <li key={f} className="flex items-start gap-2 md:gap-3 text-xs md:text-sm text-gray-400">
                    <Check className={`w-3 h-3 md:w-4 md:h-4 shrink-0 mt-0.5 ${pkg.highlighted ? 'text-accent' : 'text-primary'}`} />
                    {f}
                  </li>
                ))}
              </ul>
              
              <button className={`w-full py-3 rounded-lg font-bold text-sm md:text-base transition-all ${pkg.highlighted ? 'bg-accent text-black hover:opacity-90' : 'bg-primary text-white hover:bg-primary-dark'}`}>
                Book Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}