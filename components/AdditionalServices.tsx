import { Shield, Droplet, Lightbulb, Settings } from 'lucide-react';

const addons = [
  { title: "Ceramic X Protection", desc: "6 Month, 1 Year, 2 Year, 5 Year options", icon: Shield },
  { title: "Paint Correction", desc: "Stage 1, Stage 2, Stage 3", icon: Droplet },
  { title: "Headlight Restoration", desc: "Oxidation removal & clarity restoration", icon: Lightbulb },
  { title: "Engine Bay Detail", desc: "Complete engine compartment cleaning", icon: Settings },
];

export default function AdditionalServices() {
  return (
    <section className="py-16 md:py-24 px-6 bg-[#0c0f17] overflow-hidden">
      <div className="max-w-7xl mx-auto text-center">
        
        {/* Adjusted spacing and text sizes for mobile */}
        <h2 className="text-3xl md:text-4xl font-black mb-2 md:mb-4">
          Additional <span className="text-primary">Services</span>
        </h2>
        <p className="text-xs md:text-base text-gray-400 mb-8 md:mb-12">
          Customize your detailing experience with our specialized add-ons
        </p>

        {/* Mobile: Horizontal Swipe | Desktop: Grid */}
        <div className="flex overflow-x-auto hide-scrollbar snap-x snap-mandatory pb-4 -mx-6 px-6 md:mx-0 md:px-0 md:grid md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {addons.map((item) => (
            <div 
              key={item.title} 
              // Added width constraints, shrink-0, and snap-center for mobile swipe
              className="w-[75vw] md:w-auto shrink-0 snap-center bg-[#11141d] p-6 md:p-8 rounded-2xl border border-white/5 flex flex-col items-center text-center hover:border-primary/30 transition-all"
            >
              {/* Scaled down icon sizes slightly for mobile */}
              <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4 md:mb-6">
                <item.icon className="text-primary w-5 h-5 md:w-6 md:h-6" />
              </div>
              <h3 className="text-base md:text-lg font-bold text-white mb-2">{item.title}</h3>
              <p className="text-xs md:text-sm text-gray-400">{item.desc}</p>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
}