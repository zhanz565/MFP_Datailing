import Navbar from '@/components/Navbar';
import Services from '@/components/Services';
import OurWork from '@/components/OurWork';
import Pricing from '@/components/Pricing';
import AdditionalServices from '@/components/AdditionalServices';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="relative min-h-screen bg-background text-foreground">
      <Navbar />

      {/* Main Hero Page */}
      <section className="relative h-screen flex items-center pt-20 px-6 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/60 to-transparent z-10" />
          <Image 
            src="/hero-car.jpg" 
            alt="Detailing background" 
            fill 
            className="object-cover opacity-60 grayscale-[50%]"
            priority
          />
        </div>

        <div className="relative z-20 max-w-7xl mx-auto w-full">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 border border-primary/20 rounded-full text-primary text-xs font-bold mb-6">
            ✨ Premium Burlington Detailing
          </div>
          
          <h1 className="text-6xl md:text-8xl font-black leading-[0.9] mb-6">
            <span className="text-glass uppercase">Experience The</span><br />
            <span className="text-primary uppercase">Ultimate</span> <span className="text-white/80 uppercase">Shine</span>
          </h1>

          <p className="max-w-xl text-lg text-gray-400 mb-10 leading-relaxed">
            Professional auto detailing services that restore your vehicle's beauty 
            and protect its value. We bring the showroom finish to your driveway.
          </p>

          <div className="flex flex-wrap gap-4">
            <a href="#pricing" className="bg-primary px-8 py-4 rounded-md font-bold hover:bg-primary-dark transition-all text-white">
              Book Your Detail
            </a>
            <a href="#services" className="bg-white/5 border border-white/10 px-8 py-4 rounded-md font-bold hover:bg-white/10 transition-all text-white">
              View Services
            </a>
          </div>
        </div>
      </section>

      {/* The Section Stack */}
      <Services />
      <OurWork />
      <Pricing />
      <AdditionalServices />
      <Contact />
      <Footer />

    </main>
  );
}