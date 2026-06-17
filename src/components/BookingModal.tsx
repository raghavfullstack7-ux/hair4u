import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Calendar, User, Phone, Mail, CheckCircle2 } from 'lucide-react';
import { serviceCategories, stylists } from '../data';
import { cn } from '../lib/utils';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedPackageId?: string | null;
}

export function BookingModal({ isOpen, onClose, preselectedPackageId }: BookingModalProps) {
  const [step, setStep] = useState(1);
  // Simulated form state
  const [formData, setFormData] = useState({
    category: '', service: '', date: '', time: '', stylist: '', name: '', phone: '', email: ''
  });

  // Reset step when opened
  React.useEffect(() => {
    if (isOpen) setStep(1);
  }, [isOpen]);

  const handleNext = () => setStep(s => Math.min(s + 1, 4));
  const handleComplete = (e: React.FormEvent) => {
    e.preventDefault();
    setStep(4);
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
        <motion.div 
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
          className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          onClick={onClose}
        />
        <motion.div 
          initial={{ opacity: 0, y: 20, scale: 0.95 }} 
          animate={{ opacity: 1, y: 0, scale: 1 }} 
          exit={{ opacity: 0, scale: 0.95 }}
          className="relative w-full max-w-2xl bg-white shadow-2xl flex flex-col md:max-h-[90vh] max-h-[100vh] overflow-hidden"
        >
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-100">
            <div>
              <h3 className="font-display text-2xl font-medium">Book Appointment</h3>
              {step < 4 && <p className="text-sm text-gray-500 mt-1">Step {step} of 3</p>}
            </div>
            <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full transition-colors"><X size={20}/></button>
          </div>

          {/* Body */}
          <div className="p-6 md:p-8 overflow-y-auto min-h-[400px]">
            {step === 1 && (
              <div className="space-y-6">
                <h4 className="font-medium text-lg">Select Service</h4>
                <div className="space-y-4">
                  <label className="block text-sm">Category</label>
                  <select 
                    className="w-full border border-gray-200 p-3 outline-none focus:border-black transition-colors"
                    value={formData.category}
                    onChange={e => setFormData({...formData, category: e.target.value, service: ''})}
                  >
                    <option value="">Select a category</option>
                    {serviceCategories.map(c => <option key={c.id} value={c.id}>{c.name}</option>)}
                  </select>
                </div>
                {formData.category && (
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-4">
                    <label className="block text-sm">Service</label>
                    <select 
                      className="w-full border border-gray-200 p-3 outline-none focus:border-black transition-colors"
                      value={formData.service}
                      onChange={e => setFormData({...formData, service: e.target.value})}
                    >
                      <option value="">Select a service</option>
                      {serviceCategories.find(c => c.id === formData.category)?.services.map(s => (
                        <option key={s.id} value={s.id}>{s.name} - {s.price}</option>
                      ))}
                    </select>
                  </motion.div>
                )}
                {formData.service && (
                  <button onClick={handleNext} className="w-full bg-black text-white py-3 font-medium mt-8 hover:bg-gray-800">Continue</button>
                )}
              </div>
            )}

            {step === 2 && (
              <div className="space-y-6">
                <h4 className="font-medium text-lg">Date & Time</h4>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <label className="block text-gray-500 mb-2">Date</label>
                    <input 
                      type="date" 
                      className="w-full border border-gray-200 p-3 outline-none focus:border-black"
                      value={formData.date}
                      onChange={e => setFormData({...formData, date: e.target.value})}
                    />
                  </div>
                  <div>
                    <label className="block text-gray-500 mb-2">Time</label>
                    <select 
                      className="w-full border border-gray-200 p-3 outline-none focus:border-black transition-colors bg-white"
                      value={formData.time}
                      onChange={e => setFormData({...formData, time: e.target.value})}
                    >
                      <option value="">Select time</option>
                      <option value="09:00 AM">09:00 AM</option>
                      <option value="09:30 AM">09:30 AM</option>
                      <option value="10:00 AM">10:00 AM</option>
                      <option value="10:30 AM">10:30 AM</option>
                      <option value="11:00 AM">11:00 AM</option>
                      <option value="11:30 AM">11:30 AM</option>
                      <option value="12:00 PM">12:00 PM</option>
                      <option value="12:30 PM">12:30 PM</option>
                      <option value="01:00 PM">01:00 PM</option>
                      <option value="01:30 PM">01:30 PM</option>
                      <option value="02:00 PM">02:00 PM</option>
                      <option value="02:30 PM">02:30 PM</option>
                      <option value="03:00 PM">03:00 PM</option>
                      <option value="03:30 PM">03:30 PM</option>
                      <option value="04:00 PM">04:00 PM</option>
                      <option value="04:30 PM">04:30 PM</option>
                      <option value="05:00 PM">05:00 PM</option>
                      <option value="05:30 PM">05:30 PM</option>
                      <option value="06:00 PM">06:00 PM</option>
                      <option value="06:30 PM">06:30 PM</option>
                      <option value="07:00 PM">07:00 PM</option>
                      <option value="07:30 PM">07:30 PM</option>
                      <option value="08:00 PM">08:00 PM</option>
                    </select>
                  </div>
                </div>

                <div className="pt-4">
                   <label className="block text-sm mb-4">Preferred Stylist (Optional)</label>
                   <div className="grid grid-cols-3 gap-4">
                     {stylists.map(s => (
                       <div 
                         key={s.id} 
                         onClick={() => setFormData({...formData, stylist: s.id})}
                         className={cn(
                           "border cursor-pointer text-center p-3 transition-colors",
                           formData.stylist === s.id ? "border-black border-2" : "border-gray-200 hover:border-gray-400"
                         )}
                       >
                         <img src={s.image} alt={s.name} className="w-12 h-12 rounded-full mx-auto mb-2 object-cover" />
                         <span className="text-xs font-medium block whitespace-nowrap overflow-hidden text-ellipsis">{s.name}</span>
                       </div>
                     ))}
                   </div>
                </div>

                <div className="flex gap-4 mt-8">
                  <button onClick={() => setStep(1)} className="w-1/3 border border-gray-200 py-3 font-medium hover:bg-gray-50">Back</button>
                  <button 
                    disabled={!formData.date || !formData.time}
                    onClick={handleNext} 
                    className="w-2/3 bg-black text-white py-3 font-medium hover:bg-gray-800 disabled:opacity-50"
                  >
                    Continue
                  </button>
                </div>
              </div>
            )}

            {step === 3 && (
              <form onSubmit={handleComplete} className="space-y-6">
                <h4 className="font-medium text-lg">Your Details</h4>
                <div className="space-y-4">
                  <div className="relative">
                    <User className="absolute left-3 top-3.5 text-gray-400" size={18} />
                    <input required type="text" placeholder="Full Name" className="w-full border border-gray-200 p-3 pl-10 outline-none focus:border-black text-sm" />
                  </div>
                  <div className="relative">
                    <Phone className="absolute left-3 top-3.5 text-gray-400" size={18} />
                    <input required type="tel" placeholder="Phone Number" className="w-full border border-gray-200 p-3 pl-10 outline-none focus:border-black text-sm" />
                  </div>
                  <div className="relative">
                    <Mail className="absolute left-3 top-3.5 text-gray-400" size={18} />
                    <input required type="email" placeholder="Email Address" className="w-full border border-gray-200 p-3 pl-10 outline-none focus:border-black text-sm" />
                  </div>
                </div>

                <div className="bg-gray-50 p-4 border border-gray-100 text-sm mt-6">
                  <p className="font-medium mb-1">Appointment Summary</p>
                  <p className="text-gray-500">You will pay at the salon after your service.</p>
                </div>

                <div className="flex gap-4 mt-8">
                  <button type="button" onClick={() => setStep(2)} className="w-1/3 border border-gray-200 py-3 font-medium hover:bg-gray-50">Back</button>
                  <button type="submit" className="w-2/3 bg-black text-white py-3 font-medium hover:bg-gray-800">Confirm Booking</button>
                </div>
              </form>
            )}

            {step === 4 && (
              <div className="flex flex-col items-center justify-center py-12 text-center h-full">
                <CheckCircle2 size={64} className="text-black mb-6" />
                <h4 className="font-display text-3xl font-medium mb-2">Booking Confirmed</h4>
                <p className="text-gray-500 max-w-sm mb-8">
                  Your appointment request has been received. We will send you a confirmation message on WhatsApp shortly.
                </p>
                <button onClick={onClose} className="bg-black text-white px-8 py-3 font-medium hover:bg-gray-800">Done</button>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
