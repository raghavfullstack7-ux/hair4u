import React from 'react';
import { motion } from 'motion/react';
import { packages } from '../data';
import { cn } from '../lib/utils';

interface PackagesProps {
  onSelect: (pkgId: string) => void;
}

export function Packages({ onSelect }: PackagesProps) {
  return (
    <section className="py-24 bg-secondary px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <span className="text-xs font-semibold tracking-widest text-gray-500 uppercase mb-4 block">PACKAGES</span>
          <h2 className="font-display text-4xl md:text-5xl font-medium tracking-tight">Service Packages</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 items-center">
          {packages.map((pkg, index) => (
            <motion.div
              key={pkg.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={cn(
                "relative p-8 border transition-all duration-300 flex flex-col h-full bg-white",
                pkg.isPopular ? "border-black shadow-xl md:-translate-y-4" : "border-gray-200 hover:border-black"
              )}
            >
              {pkg.isPopular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-black text-white text-[10px] uppercase tracking-widest px-3 py-1">
                  Popular
                </div>
              )}
              
              <h3 className="text-xl font-medium mb-4">{pkg.name}</h3>
              <div className="mb-8 font-display text-4xl">{pkg.price}</div>
              
              <ul className="space-y-4 mb-10 flex-grow text-sm text-gray-600">
                {pkg.includes.split(', ').map((item, i) => (
                  <li key={i} className="flex items-center before:content-[''] before:w-1.5 before:h-1.5 before:bg-black before:rounded-full before:mr-3">
                    {item}
                  </li>
                ))}
              </ul>
              
              <button 
                onClick={() => onSelect(pkg.id)}
                className={cn(
                  "w-full py-3 text-sm font-medium transition-colors border",
                  pkg.isPopular 
                    ? "bg-black text-white border-black hover:bg-gray-800" 
                    : "bg-transparent text-black border-gray-200 hover:border-black"
                )}
              >
                Select Package
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
