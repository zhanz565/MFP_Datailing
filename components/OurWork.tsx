import Image from 'next/image';

export default function OurWork() {
  return (
    <section id="work" className="py-24 px-6 bg-background">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-5xl font-black mb-4 tracking-tight">
          Our <span className="text-primary">Wo</span><span className="text-accent">rk</span>
        </h2>
        <p className="text-gray-400 mb-16">See the difference professional detailing makes</p>
        
        <div className="grid md:grid-cols-3 gap-6">
          {/* Add 3 images to your /public folder named work-1.jpg, etc. */}
          {['/work-1.jpg', '/work-2.jpg', '/work-3.jpg'].map((src, i) => (
            <div key={i} className="relative aspect-square md:aspect-[4/3] rounded-2xl overflow-hidden border border-white/10 group">
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