import Image from 'next/image';

export default function OurWork() {
  return (
    <section id="work" className="py-16 md:py-24 px-6 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto text-center">
        
        {/* Adjusted spacing and text sizes for mobile */}
        <h2 className="text-4xl md:text-5xl font-black mb-2 md:mb-4 tracking-tight">
          Our <span className="text-primary">Wo</span><span className="text-accent">rk</span>
        </h2>
        <p className="text-xs md:text-base text-gray-400 mb-8 md:mb-16">See the difference professional detailing makes</p>
        
        {/* Mobile: Horizontal Swipe | Desktop: Grid */}
        <div className="flex overflow-x-auto hide-scrollbar snap-x snap-mandatory pb-4 -mx-6 px-6 md:mx-0 md:px-0 md:grid md:grid-cols-3 gap-4 md:gap-6">
          {/* Add 3 images to your /public folder named work-1.jpg, etc. */}
          {['/work-1.jpg', '/work-2.jpg', '/work-3.jpg'].map((src, i) => (
            <div 
              key={i} 
              // Added width constraints, shrink-0, and snap-center for mobile swipe
              className="w-[85vw] md:w-auto shrink-0 snap-center relative aspect-square md:aspect-[4/3] rounded-2xl overflow-hidden border border-white/10 group"
            >
              <Image 
                src={src} 
                alt={`Detailing work ${i + 1}`} 
                fill 
                className="object-cover group-hover:scale-105 transition-transform duration-500" 
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}