import React from 'react';
import { motion } from 'motion/react';
import { businessInfo } from '../data';
import { MapPin, Phone, Clock, Instagram, Facebook } from 'lucide-react';

export function Footer({ onBookNow }: { onBookNow: () => void }) {
  return (
    <footer id="contact" className="bg-white border-t border-gray-100">
      
      {/* Ready to Transform Section */}
      <div className="py-24 px-6 text-center max-w-4xl mx-auto">
        <h2 className="font-display text-4xl md:text-5xl font-medium tracking-tight mb-6">Ready to Transform Your Look?</h2>
        <p className="text-gray-500 mb-10 max-w-2xl mx-auto">
          Book your appointment today and experience professional hair care in a relaxing environment. Walk-ins also welcome at our Sector 35D salon.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12 text-sm text-gray-600">
          <span className="flex items-center"><Clock size={16} className="mr-2"/> Mon-Sat: 9AM - 8PM</span>
          <span className="flex items-center"><Phone size={16} className="mr-2"/> {businessInfo.phone}</span>
          <span className="flex items-center"><MapPin size={16} className="mr-2"/> Sector 35D, Chandigarh</span>
        </div>
        <button 
          onClick={onBookNow}
          className="px-8 py-4 bg-black text-white font-medium hover:bg-gray-800 transition-colors"
        >
          Book Appointment
        </button>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 pb-12 pt-12 border-t border-gray-100 flex flex-col md:flex-row justify-between items-start gap-12">
        <div className="max-w-xs">
           <a href="#" className="font-display font-semibold text-xl tracking-tight block mb-4">
            Hair4U <span className="text-gray-500 font-normal">Salon</span>
          </a>
          <p className="text-sm text-gray-500 mb-6">
            Modern hair salon offering expert treatments, precision styling, and personalized service.
          </p>
          <div className="flex space-x-4">
             <a href="#" className="w-10 h-10 border border-gray-200 flex items-center justify-center hover:border-black transition-colors">
               <Instagram size={16} />
             </a>
             <a href="#" className="w-10 h-10 border border-gray-200 flex items-center justify-center hover:border-black transition-colors">
               <Facebook size={16} />
             </a>
          </div>
        </div>

        <div className="flex flex-col gap-3 text-sm">
          <span className="font-semibold mb-2">LINKS</span>
          <a href="#services" className="text-gray-500 hover:text-black">Services</a>
          <a href="#gallery" className="text-gray-500 hover:text-black">Work</a>
          <a href="#team" className="text-gray-500 hover:text-black">Team</a>
          <a href="#contact" className="text-gray-500 hover:text-black">Contact</a>
        </div>

        <div className="flex flex-col gap-4 text-sm max-w-sm">
           <span className="font-semibold mb-1">CONTACT</span>
           <div className="flex items-start text-gray-500">
             <MapPin size={16} className="mr-3 mt-1 flex-shrink-0"/>
             <span>{businessInfo.address}</span>
           </div>
           <div className="flex items-center text-gray-500">
             <Phone size={16} className="mr-3 flex-shrink-0"/>
             <span>{businessInfo.phone}</span>
           </div>
           <div className="mt-4 border border-gray-200 p-1 bg-gray-50 hidden md:block">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3430.404845585523!2d76.7738!3d30.7230!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzDCsDQzJzIyLjgiTiA3NsKwNDYnMjUuNyJF!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin" 
                width="100%" 
                height="150" 
                style={{ border: 0 }} 
                allowFullScreen={false} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Salon Location"
              />
           </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 py-6 border-t border-gray-100 flex flex-col sm:flex-row justify-between items-center text-xs text-gray-400">
        <p>&copy; {new Date().getFullYear()} {businessInfo.name}. All rights reserved.</p>
        <div className="flex space-x-6 mt-4 sm:mt-0">
          <a href="#" className="hover:text-black">Privacy</a>
          <a href="#" className="hover:text-black">Terms</a>
        </div>
      </div>
    </footer>
  );
}
