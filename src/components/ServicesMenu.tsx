import React from 'react';
import { motion } from 'motion/react';
import { serviceCategories } from '../data';

export function ServicesMenu() {
  return (
    <section id="services" className="py-24 bg-secondary px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <span className="text-xs font-semibold tracking-widest text-gray-500 uppercase mb-4 block">OUR SERVICES</span>
          <h2 className="font-display text-4xl md:text-5xl font-medium tracking-tight">What We Offer</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {serviceCategories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-8 group hover:shadow-xl transition-shadow duration-300"
            >
              <div className="text-4xl font-display font-light text-gray-200 mb-6 group-hover:text-black transition-colors">
                {String(index + 1).padStart(2, '0')}
              </div>
              <h3 className="text-xl font-medium mb-3">{category.name}</h3>
              <p className="text-sm text-gray-500 mb-6 h-12">
                Expert treatments tailored to your style.
              </p>
              
              <ul className="space-y-3 mt-auto">
                {category.services.slice(0, 4).map(service => (
                  <li key={service.id} className="flex justify-between items-center text-sm border-b border-gray-100 pb-2">
                    <span className="text-gray-700 truncate mr-4">{service.name}</span>
                    <span className="font-medium flex-shrink-0 text-black">{service.price.split('–')[0]}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
