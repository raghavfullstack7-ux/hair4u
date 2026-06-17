import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6 md:px-12 max-w-7xl mx-auto min-h-[90vh] flex flex-col justify-center">
      <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
        
        {/* Left Content */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-xl"
        >
          <span className="text-xs font-semibold tracking-widest text-gray-500 uppercase mb-4 block">MODERN UNISEX SALON</span>
          <h1 className="font-display text-5xl md:text-7xl font-bold leading-[1.05] tracking-tight mb-6">
            Expert Hair <br className="hidden md:block"/> Treatments & <br className="hidden md:block"/> Styling
          </h1>
          <p className="text-gray-600 text-lg md:text-xl leading-relaxed mb-10">
            Experience professional hair care in a serene, minimalist environment. Our expert stylists deliver exceptional results tailored to you.
          </p>
          
          <div className="flex flex-wrap items-center gap-6">
            <button className="px-8 py-4 bg-black text-white font-medium hover:bg-gray-800 transition-colors">
              Book Now
            </button>
            <a href="#services" className="inline-flex items-center text-sm font-semibold hover:text-gray-600 transition-colors">
              View Services <ArrowRight size={16} className="ml-2" />
            </a>
          </div>

          <div className="mt-16 flex items-center space-x-12 pt-8 border-t border-gray-100">
            <div>
              <p className="text-3xl font-display font-medium text-black">15+</p>
              <p className="text-xs text-gray-500 uppercase mt-1 tracking-wider">Years</p>
            </div>
            <div>
              <p className="text-3xl font-display font-medium text-black">8K+</p>
              <p className="text-xs text-gray-500 uppercase mt-1 tracking-wider">Clients</p>
            </div>
            <div>
              <p className="text-3xl font-display font-medium text-black">4.9</p>
              <p className="text-xs text-gray-500 uppercase mt-1 tracking-wider">Rating</p>
            </div>
          </div>
        </motion.div>

        {/* Right Image */}
        <motion.div
           initial={{ opacity: 0, scale: 0.95 }}
           animate={{ opacity: 1, scale: 1 }}
           transition={{ duration: 0.8, delay: 0.2 }}
           className="relative aspect-[4/5] w-full"
        >
          <img 
            src="https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&q=80&w=1200" 
            alt="Salon treatment" 
            className="w-full h-full object-cover rounded-none"
          />
          <div className="absolute inset-0 bg-black/5 mix-blend-overlay"></div>
        </motion.div>
        
      </div>
    </section>
  );
}
