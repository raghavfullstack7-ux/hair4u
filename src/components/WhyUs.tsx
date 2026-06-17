import React from 'react';
import { motion } from 'motion/react';
import { Check } from 'lucide-react';

export function WhyUs() {
  const reasons = [
    { title: "Premium Products", desc: "Professional-grade products for best results" },
    { title: "Expert Stylists", desc: "Trained in latest techniques and trends" },
    { title: "Personalized Care", desc: "Customized approach for each client" },
    { title: "Relaxing Space", desc: "Modern, serene environment in Sector 35D" }
  ];

  return (
    <section className="py-24 px-6 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row gap-16 md:items-center">
        
        <div className="md:w-1/2 overflow-hidden aspect-[4/3] bg-gray-100">
          <img 
            src="https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&q=80&w=1200" 
            alt="Salon interior" 
            className="w-full h-full object-cover"
          />
        </div>

        <div className="md:w-1/2 md:pl-12">
          <span className="text-xs font-semibold tracking-widest text-gray-500 uppercase mb-4 block">WHY US</span>
          <h2 className="font-display text-4xl leading-tight font-medium tracking-tight mb-12">What Makes Us Different</h2>
          
          <div className="space-y-8">
            {reasons.map((reason, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="flex items-start"
              >
                <div className="mt-1 mr-4 bg-secondary p-1 rounded-full text-black">
                  <Check size={16} />
                </div>
                <div>
                  <h4 className="font-medium text-lg mb-1">{reason.title}</h4>
                  <p className="text-sm text-gray-500">{reason.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
