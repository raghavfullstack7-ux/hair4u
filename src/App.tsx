import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ServicesMenu } from './components/ServicesMenu';
import { Gallery } from './components/Gallery';
import { Stylists } from './components/Stylists';
import { WhyUs } from './components/WhyUs';
import { Packages } from './components/Packages';
import { Testimonials } from './components/Testimonials';
import { Footer } from './components/Footer';
import { BookingModal } from './components/BookingModal';
import { Chatbot } from './components/Chatbot';

export default function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState<string | null>(null);

  const handleBookNow = (pkgId?: string) => {
    setSelectedPackage(pkgId || null);
    setIsBookingOpen(true);
  };

  return (
    <div className="relative min-h-screen bg-white">
      <Navbar onBookNow={() => handleBookNow()} />
      
      <main>
        <Hero />
        <ServicesMenu />
        <Gallery />
        <Stylists />
        <WhyUs />
        <Packages onSelect={pkgId => handleBookNow(pkgId)} />
        <Testimonials />
      </main>

      <Footer onBookNow={() => handleBookNow()} />
      
      <BookingModal 
        isOpen={isBookingOpen} 
        onClose={() => setIsBookingOpen(false)} 
        preselectedPackageId={selectedPackage}
      />
      
      <Chatbot />
    </div>
  );
}
