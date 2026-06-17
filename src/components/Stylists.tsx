import React from 'react';
import { motion } from 'motion/react';
import { stylists } from '../data';

export function Stylists() {
  return (
    <section id="team" className="py-24 px-6 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <span className="text-xs font-semibold tracking-widest text-gray-500 uppercase mb-4 block">EXPERT TEAM</span>
          <h2 className="font-display text-4xl md:text-5xl font-medium tracking-tight">Our Stylists</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {stylists.map((stylist, index) => (
            <motion.div
              key={stylist.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="aspect-[3/4] overflow-hidden mb-6 bg-gray-100">
                <img 
                  src={stylist.image} 
                  alt={stylist.name} 
                  className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                />
              </div>
              <h3 className="text-xl font-medium font-display">{stylist.name}</h3>
              <p className="text-sm text-gray-500 mt-1">{stylist.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
