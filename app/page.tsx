import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Services from '@/components/Services';
import OurWork from '@/components/OurWork';
import Pricing from '@/components/Pricing';
import AdditionalServices from '@/components/AdditionalServices';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import Image from 'next/image';

// 1. Next.js Metadata API for On-Page SEO
export const metadata: Metadata = {
  title: 'MFP Detailing | Premium Auto Detailing in Burlington',
  description: 'Professional auto detailing, ceramic coating, and paint correction services. Restore your vehicle\'s beauty with absolute precision at our premier detailing studio.',
  openGraph: {
    title: 'MFP Detailing | Premium Auto Detailing',
    description: 'Professional auto detailing, ceramic coating, and paint correction services.',
    type: 'website',
  }
};

export default function Home() {
  // 2. Schema Markup (JSON-LD) for Google Rich Results
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'AutoWash', // Use AutoWash for detailing, or AutoRepair if mechanical is the focus
    name: 'MFP Detailing',
   image: 'https://www.mfpdetailing.ca/hero-car.jpg', // IMPORTANT: Replace with your actual live domain
    url: 'https://www.mfpdetailing.ca', // IMPORTANT: Replace with your actual live domain
    telephone: '+1-343-368-5033', // IMPORTANT: Replace
    address: {
      '@type': 'PostalAddress',
      streetAddress: '1161 Pettit Rd', // IMPORTANT: Replace
      addressLocality: 'Burlington', // Change to Hamilton if the physical shop is there
      addressRegion: 'ON',
      postalCode: 'L7P 2K3', // IMPORTANT: Replace
      addressCountry: 'CA'
    },
    priceRange: '$$'
  };

  return (
    <main className="relative min-h-screen bg-background text-foreground">
      
      {/* 3. Injecting the Schema into the DOM */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Navbar />

      {/* Main Hero Page (Mobile Responsive) */}
      <section className="relative h-screen flex items-center pt-20 px-6 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/60 to-transparent z-10" />
          <Image 
            src="/hero-car.jpg" 
            alt="Professional car detailing and paint correction in Burlington" 
            fill 
            className="object-cover opacity-60 grayscale-[50%]"
            priority
          />
        </div>

        <div className="relative z-20 max-w-7xl mx-auto w-full mt-8 md:mt-0">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 border border-primary/20 rounded-full text-primary text-[10px] md:text-xs font-bold mb-4 md:mb-6">
            ✨ Burlington's Premier Auto Detailing
          </div>
          
          {/* Headline - Scaled for mobile and SEO Optimized */}
          <h1 className="text-5xl sm:text-6xl md:text-8xl font-black leading-[1] md:leading-[0.9] mb-4 md:mb-6">
            <span className="text-glass uppercase tracking-tight">Premium Auto</span><br />
            <span className="text-primary uppercase tracking-tight">Detailing</span> <span className="text-white/80 uppercase tracking-tight">Studio</span>
          </h1>

          {/* Subtext - Corrected to reflect physical shop location */}
          <p className="max-w-xl text-sm md:text-lg text-gray-400 mb-8 md:mb-10 leading-relaxed pr-4">
            Professional auto detailing services that restore your vehicle's beauty 
            and protect its value. Experience absolute precision and showroom perfection 
            at our Burlington shop.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap items-center gap-3 md:gap-4">
            <a href="#pricing" className="bg-primary px-5 py-3 md:px-8 md:py-4 rounded-lg font-bold hover:bg-primary-dark transition-all text-white text-sm md:text-base">
              Book Your Detail <span className="inline-block ml-1">→</span>
            </a>
            <a href="#services" className="bg-white/5 border border-white/10 px-5 py-3 md:px-8 md:py-4 rounded-lg font-bold hover:bg-white/10 transition-all text-white text-sm md:text-base">
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