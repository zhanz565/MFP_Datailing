import { Shield, Droplet, Lightbulb, Settings } from 'lucide-react';

const addons = [
  { title: "Ceramic X Protection", desc: "6 Month, 1 Year, 2 Year, 5 Year options", icon: Shield },
  { title: "Paint Correction", desc: "Stage 1, Stage 2, Stage 3", icon: Droplet },
  { title: "Headlight Restoration", desc: "Oxidation removal & clarity restoration", icon: Lightbulb },
  { title: "Engine Bay Detail", desc: "Complete engine compartment cleaning", icon: Settings },
];

export default function AdditionalServices() {
  return (
    <section className="py-16 px-6 bg-[#0c0f17]">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-black mb-4">Additional <span className="text-primary">Services</span></h2>
        <p className="text-gray-400 mb-12">Customize your detailing experience with our specialized add-ons</p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {addons.map((item) => (
            <div key={item.title} className="bg-[#11141d] p-8 rounded-2xl border border-white/5 flex flex-col items-center text-center hover:border-primary/30 transition-all">
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                <item.icon className="text-primary w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
              <p className="text-sm text-gray-400">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}