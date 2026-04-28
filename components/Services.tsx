import { Sparkles, Wind, Shield, Droplet, Star, Package } from 'lucide-react';

const services = [
  {
    title: "Exterior Detailing",
    description: "Complete wash, clay bar treatment, polish, and wax for a showroom finish.",
    features: ["Hand Wash", "Clay Bar", "Polish & Wax", "Wheel Cleaning"],
    icon: Sparkles,
    highlighted: true,
  },
  {
    title: "Interior Detailing",
    description: "Deep cleaning of interior surfaces, upholstery, and conditioning.",
    features: ["Vacuum & Shampoo", "Leather Conditioning", "Dashboard Care", "Odor Removal"],
    icon: Wind,
    highlighted: false,
  },
  {
    title: "Ceramic Coating",
    description: "Premium protection with long-lasting hydrophobic ceramic coating.",
    features: ["9H Hardness", "UV Protection", "5+ Year Warranty", "Enhanced Shine"],
    icon: Shield,
    highlighted: false,
  },
  {
    title: "Paint Correction",
    description: "Remove swirls, scratches, and oxidation to restore paint clarity.",
    features: ["Swirl Removal", "Scratch Repair", "Oxidation Treatment", "Mirror Finish"],
    icon: Droplet,
    highlighted: false,
  },
  {
    title: "Premium Packages",
    description: "Complete transformation with our comprehensive detailing packages.",
    features: ["Full Service", "Engine Bay", "Headlight Restoration", "Trim Restoration"],
    icon: Star,
    highlighted: false,
  },
  {
    title: "Maintenance Plans",
    description: "Regular service packages to keep your vehicle in pristine condition.",
    features: ["Monthly Service", "Priority Booking", "Discounted Rates", "Free Touch-ups"],
    icon: Package,
    highlighted: false,
  }
];

export default function Services() {
  return (
    <section id="services" className="py-16 md:py-24 px-6 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-8 md:mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-2 md:mb-4 tracking-tight">
            Our <span className="text-primary">Serv</span><span className="text-accent">ices</span>
          </h2>
          <p className="text-xs md:text-base text-gray-400">Professional detailing services tailored to your vehicle's needs</p>
        </div>

        {/* Mobile: Horizontal Swipe | Desktop: Grid */}
        <div className="flex overflow-x-auto hide-scrollbar snap-x snap-mandatory pb-4 -mx-6 px-6 md:mx-0 md:px-0 md:grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {services.map((service) => (
            <div 
              key={service.title} 
              className={`w-[85vw] md:w-auto shrink-0 snap-center p-6 md:p-8 rounded-2xl border transition-all duration-300 ${
                service.highlighted 
                  ? 'bg-[#0e121e] border-primary/40 shadow-[0_0_20px_rgba(59,130,246,0.05)]' 
                  : 'bg-[#0c0f17] border-white/5 hover:border-white/10'
              }`}
            >
              {/* Icon Box */}
              <div className="w-10 h-10 md:w-12 md:h-12 bg-white/5 rounded-xl flex items-center justify-center mb-4 md:mb-6">
                <service.icon className={`w-5 h-5 md:w-6 md:h-6 ${service.highlighted ? 'text-accent' : 'text-primary'}`} />
              </div>
              
              {/* Text Content */}
              <h3 className={`text-lg md:text-xl font-bold mb-2 md:mb-3 ${service.highlighted ? 'text-primary' : 'text-white'}`}>
                {service.title}
              </h3>
              <p className="text-xs md:text-sm text-gray-400 mb-6 md:mb-8 leading-relaxed min-h-[40px] md:min-h-[60px]">
                {service.description}
              </p>
              
              {/* Custom Bullet List */}
              <ul className="space-y-2 md:space-y-3">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-xs md:text-sm text-gray-300">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary shrink-0 shadow-[0_0_8px_rgba(59,130,246,0.8)]" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}