import { Car } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 px-6 py-4 bg-glass">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center gap-2 group cursor-pointer">
          <Car className="text-primary group-hover:rotate-12 transition-transform" />
          <span className="text-xl font-black tracking-tighter uppercase">
            MFP <span className="text-primary">Detailing</span>
          </span>
        </div>

        <div className="hidden md:flex gap-8 text-sm font-medium text-gray-400">
          <a href="#services" className="hover:text-white transition">Services</a>
          <a href="#work" className="hover:text-white transition">Gallery</a>
          <a href="#pricing" className="hover:text-white transition">Pricing</a>
          <a href="#contact" className="hover:text-white transition">Contact</a>
        </div>

        <a href="#contact" className="bg-primary hover:bg-primary-dark text-white px-5 py-2 rounded-full text-sm font-bold transition-all shadow-[0_0_15px_rgba(59,130,246,0.4)]">
          Book Now
        </a>
      </div>
    </nav>
  );
}