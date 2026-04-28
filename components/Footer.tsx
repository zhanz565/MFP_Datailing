export default function Footer() {
  return (
    <footer className="bg-[#0a0c13] pt-24 pb-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-16">
          
          {/* Column 1: Brand Info */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              {/* Box Logo matching the 'P' from the screenshot */}
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary-dark rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-white font-black text-2xl">M</span>
              </div>
              <div>
                <h3 className="text-xl font-black text-white tracking-tighter uppercase">MFP Detailing</h3>
                <p className="text-xs text-gray-400">Premium Auto Detailing</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed pr-4">
              MFP Detailing is a professional auto detailing and ceramic coating business dedicated to restoring, protecting, and enhancing every vehicle's appearance. Using expert techniques and premium products, we deliver showroom-quality results and long-lasting protection.
            </p>
          </div>

          {/* Column 2: Services Links */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-8 h-[2px] bg-accent"></div>
              <h4 className="text-white font-bold uppercase tracking-widest text-sm">Services</h4>
            </div>
            <ul className="space-y-4">
              {['Starter Package', 'Premier Detail', 'VIP Package', 'Ceramic Coating', 'Paint Correction'].map((service) => (
                <li key={service}>
                  <a href="#services" className="text-gray-400 text-sm hover:text-primary transition-colors">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-8 h-[2px] bg-accent"></div>
              <h4 className="text-white font-bold uppercase tracking-widest text-sm">Contact</h4>
            </div>
            <ul className="space-y-4">
              {[
                "905-906-5555",
                "info@mfpautoservice.com",
                "1161 Pettit Rd",
                "Burlington, ON L7P 2K3, Canada"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-sm text-gray-400">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary shrink-0 shadow-[0_0_8px_rgba(59,130,246,0.8)]"></div>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Copyright Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/5 text-xs text-gray-500">
          <p>© 2026 MFP Detailing. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}