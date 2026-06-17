import React from 'react';
import { motion } from 'motion/react';
import { testimonials } from '../data';
import { Star } from 'lucide-react';

export function Testimonials() {
  return (
    <section className="py-24 px-6 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <span className="text-xs font-semibold tracking-widest text-gray-500 uppercase mb-4 block">TESTIMONIALS</span>
          <h2 className="font-display text-4xl md:text-5xl font-medium tracking-tight">Client Reviews</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="border border-gray-100 p-8 hover:border-gray-300 transition-colors"
            >
              <div className="flex space-x-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={16} className="fill-black text-black" />
                ))}
              </div>
              <p className="text-gray-600 mb-8 italic text-sm leading-relaxed">
                "{testimonial.content}"
              </p>
              <p className="font-medium text-sm">{testimonial.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
