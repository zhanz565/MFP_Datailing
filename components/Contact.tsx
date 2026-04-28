// components/Contact.tsx
"use client";

import { useState } from 'react';
import { Phone, Mail, MapPin, Clock, CheckCircle2, AlertCircle } from 'lucide-react';
import { sendEmail } from '@/actions/sendEmail';

export default function Contact() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  // Form handler
  async function action(formData: FormData) {
    setStatus('loading');
    const result = await sendEmail(formData);
    
    if (result?.error) {
      setStatus('error');
    } else {
      setStatus('success');
    }
  }

  return (
    <section id="contact" className="py-24 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-black tracking-tight">Get In <span className="text-primary">To</span><span className="text-accent">uch</span></h2>
          <p className="text-gray-400 mt-4">Ready to give your car the treatment it deserves? Contact us today</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left Form */}
          <div className="bg-[#0c0f17] p-8 rounded-2xl border border-white/5 relative overflow-hidden">
            <h3 className="text-2xl font-bold text-white mb-2">Send Us a Message</h3>
            <p className="text-sm text-gray-400 mb-8">Fill out the form and we'll respond promptly</p>
            
            {status === 'success' ? (
              <div className="absolute inset-0 bg-[#0c0f17] flex flex-col items-center justify-center p-8 text-center animate-in fade-in duration-500">
                <CheckCircle2 className="w-16 h-16 text-green-500 mb-4" />
                <h4 className="text-2xl font-bold text-white mb-2">Message Sent!</h4>
                <p className="text-gray-400">Thanks for reaching out. We'll get back to you shortly to confirm your detailing package.</p>
                <button onClick={() => setStatus('idle')} className="mt-8 text-primary hover:text-white transition-colors">Send another message</button>
              </div>
            ) : (
              <form action={action} className="space-y-4">
                {/* Note the added 'name' attributes on the inputs! */}
                <input required type="text" name="name" placeholder="Your Name" className="w-full bg-[#11141d] border border-white/5 p-4 rounded-xl text-white placeholder-gray-500 focus:border-primary outline-none transition" />
                <input required type="email" name="email" placeholder="Email Address" className="w-full bg-[#11141d] border border-white/5 p-4 rounded-xl text-white placeholder-gray-500 focus:border-primary outline-none transition" />
                <input type="tel" name="phone" placeholder="Phone Number" className="w-full bg-[#11141d] border border-white/5 p-4 rounded-xl text-white placeholder-gray-500 focus:border-primary outline-none transition" />
                <textarea required name="message" rows={4} placeholder="Tell us about your vehicle and service needs" className="w-full bg-[#11141d] border border-white/5 p-4 rounded-xl text-white placeholder-gray-500 focus:border-primary outline-none transition"></textarea>
                
                {status === 'error' && (
                  <p className="text-red-500 text-sm flex items-center gap-2"><AlertCircle className="w-4 h-4" /> Failed to send message. Please try again.</p>
                )}

                <button 
                  disabled={status === 'loading'}
                  className="w-full bg-primary py-4 rounded-xl font-bold text-white hover:bg-primary-dark transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {status === 'loading' ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            )}
          </div>

          {/* Right Info Boxes (Unchanged) */}
          <div className="space-y-4">
            {/* ... Your existing info boxes mapping code ... */}
            {[
              { icon: Phone, title: "Phone", info: "905-906-5555" },
              { icon: Mail, title: "Email", info: "info@mfpautoservice.com" },
              { icon: MapPin, title: "Location", info: "1161 Pettit Rd, Burlington, ON L7P 2K3" },
              { icon: Clock, title: "Hours", info: "Mon - Sat: 8:00 AM - 6:00 PM\nSun: Closed" }
            ].map((item) => (
              <div key={item.title} className="flex items-center gap-6 p-6 bg-[#0c0f17] rounded-2xl border border-white/5">
                <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center shrink-0">
                  <item.icon className="text-primary w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm text-white font-bold mb-1">{item.title}</p>
                  <p className="text-sm text-gray-400 whitespace-pre-line">{item.info}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}