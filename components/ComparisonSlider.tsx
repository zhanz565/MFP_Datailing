"use client";
import { useState } from "react";
import Image from "next/image";

export default function ComparisonSlider() {
  const [sliderPosition, setSliderPosition] = useState(50);

  const handleMove = (e: React.MouseEvent | React.TouchEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = "touches" in e ? e.touches[0].clientX : (e as React.MouseEvent).clientX;
    const position = ((x - rect.left) / rect.width) * 100;
    setSliderPosition(Math.max(0, Math.min(100, position)));
  };

  return (
    <section className="py-24 bg-surface/30">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">THE TRANSFORMATION</h2>
          <p className="text-gray-400">See the results of our multi-stage paint correction process.</p>
        </div>

        <div 
          className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl cursor-ew-resize select-none border border-white/10"
          onMouseMove={handleMove}
          onTouchMove={handleMove}
        >
          {/* After Image */}
          <Image
            src="/after.jpg" // Add your "Clean" car image here
            alt="After detailing"
            fill
            className="object-cover"
          />

          {/* Before Image (Clipped) */}
          <div 
            className="absolute inset-0 z-10 w-full overflow-hidden"
            style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
          >
            <Image
              src="/before.jpg" // Add your "Dirty" car image here
              alt="Before detailing"
              fill
              className="object-cover"
            />
          </div>

          {/* Slider Line */}
          <div 
            className="absolute inset-y-0 z-20 w-1 bg-primary shadow-[0_0_15px_rgba(59,130,246,0.5)]"
            style={{ left: `${sliderPosition}%` }}
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white shadow-xl">
              <span className="text-xs font-bold">↔</span>
            </div>
          </div>
          
          {/* Labels */}
          <div className="absolute bottom-4 left-4 z-30 px-3 py-1 bg-black/60 backdrop-blur-md rounded text-xs font-bold text-white uppercase tracking-widest">Before</div>
          <div className="absolute bottom-4 right-4 z-30 px-3 py-1 bg-primary/80 backdrop-blur-md rounded text-xs font-bold text-white uppercase tracking-widest">After</div>
        </div>
      </div>
    </section>
  );
}