import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export function Gallery() {
  const images = [
    "https://images.unsplash.com/photo-1522337660859-02fbefca4702?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1595152452543-e5fc28ebc2b8?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1620331311520-246422fd82f9?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&q=80&w=800"
  ];

  return (
    <section id="gallery" className="py-24 px-6 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16 md:items-center">
        
        <div className="md:w-1/3">
          <span className="text-xs font-semibold tracking-widest text-gray-500 uppercase mb-4 block">OUR WORK</span>
          <h2 className="font-display text-4xl leading-tight font-medium tracking-tight mb-6">Creating Beautiful Transformations</h2>
          <p className="text-gray-500 mb-8 leading-relaxed">
            Every client receives personalized attention and expert care to achieve their perfect look. From subtle highlights to full bridal transformations, we take pride in our artistry.
          </p>
          <a href="#" className="inline-flex items-center text-sm font-semibold hover:text-gray-600 transition-colors">
            View Full Gallery <ArrowRight size={16} className="ml-2" />
          </a>
        </div>

        <div className="md:w-2/3 grid grid-cols-2 gap-4">
          {images.map((img, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="aspect-square bg-gray-100 overflow-hidden"
            >
              <img src={img} alt="Salon work" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
