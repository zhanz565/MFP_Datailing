import { Sparkles, Wind, Shield, Droplet, Star, Package } from 'lucide-react';

const services = [
  {
    title: "Exterior Detailing",
    description: "Complete wash, clay bar treatment, polish, and wax for a showroom finish.",
    features: ["Hand Wash", "Clay Bar", "Polish & Wax", "Wheel Cleaning"],
    icon: Sparkles,
    highlighted: true, // This triggers the active styles from your screenshot
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
    <section id="services" className="py-24 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-black mb-4 tracking-tight">
            Our <span className="text-primary">Serv</span><span className="text-accent">ices</span>
          </h2>
          <p className="text-gray-400">Professional detailing services tailored to your vehicle's needs</p>
        </div>

        {/* 6-Card Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div 
              key={service.title} 
              className={`p-8 rounded-2xl border transition-all duration-300 ${
                service.highlighted 
                  ? 'bg-[#0e121e] border-primary/40 shadow-[0_0_20px_rgba(59,130,246,0.05)]' 
                  : 'bg-[#0c0f17] border-white/5 hover:border-white/10'
              }`}
            >
              {/* Icon Box */}
              <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center mb-6">
                <service.icon className={`w-6 h-6 ${service.highlighted ? 'text-accent' : 'text-primary'}`} />
              </div>
              
              {/* Text Content */}
              <h3 className={`text-xl font-bold mb-3 ${service.highlighted ? 'text-primary' : 'text-white'}`}>
                {service.title}
              </h3>
              <p className="text-sm text-gray-400 mb-8 leading-relaxed min-h-[60px]">
                {service.description}
              </p>
              
              {/* Custom Bullet List */}
              <ul className="space-y-3">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-sm text-gray-300">
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