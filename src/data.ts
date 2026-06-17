import { Package, ServiceCategory, Stylist, Testimonial } from "./types";

export const businessInfo = {
  name: "Hair4U Unisex Salon",
  address: "First Floor, SCO 287, Above Rajesh Sweets, Market 35 D, Sector 35D, Chandigarh – 160035",
  phone: "+91 98765 43210", // Placeholder
  whatsapp: "+91 98765 43210", // Placeholder
  email: "hello@hair4uchandigarh.com",
  instagram: "@hair4uchandigarh",
  facebook: "Hair4U Unisex Salon",
  hours: [
    { day: "Monday", hours: "9:00 AM – 8:00 PM" },
    { day: "Tuesday", hours: "9:00 AM – 8:00 PM" },
    { day: "Wednesday", hours: "9:00 AM – 8:00 PM" },
    { day: "Thursday", hours: "9:00 AM – 8:00 PM" },
    { day: "Friday", hours: "9:00 AM – 8:00 PM" },
    { day: "Saturday", hours: "9:00 AM – 9:00 PM" },
    { day: "Sunday", hours: "10:00 AM – 7:00 PM" },
  ]
};

export const serviceCategories: ServiceCategory[] = [
  {
    id: "women-hair",
    name: "Women's Hair Services",
    services: [
      { id: "wh1", name: "Haircut (Basic)", price: "₹200 – 400" },
      { id: "wh2", name: "Haircut + Wash + Blow Dry", price: "₹400 – 700" },
      { id: "wh3", name: "Hair Wash + Conditioning", price: "₹150 – 300" },
      { id: "wh4", name: "Keratin Treatment", price: "₹2500 – 6000" },
      { id: "wh5", name: "Smoothening", price: "₹2000 – 5000" },
      { id: "wh6", name: "Hair Spa", price: "₹500 – 1500" },
      { id: "wh7", name: "Hair Botox", price: "₹3000 – 7000" },
    ]
  },
  {
    id: "women-color",
    name: "Women's Color Services",
    services: [
      { id: "wc1", name: "Global Hair Color", price: "₹800 – 2500" },
      { id: "wc2", name: "Highlights (Full)", price: "₹1500 – 4000" },
      { id: "wc3", name: "Balayage", price: "₹2500 – 6000" },
      { id: "wc4", name: "Root Touch-Up", price: "₹500 – 1200" },
    ]
  },
  {
    id: "women-skin",
    name: "Women's Skin & Face",
    services: [
      { id: "ws1", name: "Facial (Premium/Gold/Diamond)", price: "₹1000 – 3000" },
      { id: "ws2", name: "Cleanup", price: "₹300 – 600" },
      { id: "ws3", name: "Waxing (Full Body)", price: "₹1200 – 2500" },
      { id: "ws4", name: "Threading (Eyebrows)", price: "₹30 – 50" },
    ]
  },
  {
    id: "men-services",
    name: "Men's Services",
    services: [
      { id: "ms1", name: "Haircut + Wash", price: "₹150 – 400" },
      { id: "ms2", name: "Beard Styling", price: "₹100 – 200" },
      { id: "ms3", name: "Clean Shave", price: "₹100 – 200" },
      { id: "ms4", name: "Facial (Premium)", price: "₹700 – 1500" },
      { id: "ms5", name: "Keratin / Smoothening", price: "₹2000 – 5000" },
    ]
  },
  {
    id: "bridal",
    name: "Bridal & Party",
    services: [
      { id: "b1", name: "Bridal Makeup (Premium)", price: "₹12000 – 25000" },
      { id: "b2", name: "Party Makeup", price: "₹1500 – 4000" },
      { id: "b3", name: "Pre-Bridal Package", price: "₹8000 – 20000" },
    ]
  }
];

export const packages: Package[] = [
  {
    id: "p1",
    name: "Glow Package",
    includes: "Facial, D-Tan, Threading",
    price: "₹1200"
  },
  {
    id: "p2",
    name: "Full Day Pamper",
    includes: "Haircut, Facial, Manicure, Pedicure",
    price: "₹2500",
    isPopular: true
  },
  {
    id: "p3",
    name: "Bridal Essentials",
    includes: "Facial, Waxing, Threading, Mehendi",
    price: "₹6000"
  }
];

export const stylists: Stylist[] = [
  {
    id: "s1",
    name: "Karan Singh",
    role: "Creative Director",
    image: "https://images.unsplash.com/photo-1618090584126-129cd1f3f4c6?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "s2",
    name: "Priya Sharma",
    role: "Color Specialist",
    image: "https://images.unsplash.com/photo-1595152772835-219674b2a8a6?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "s3",
    name: "Rahul Verma",
    role: "Senior Stylist",
    image: "https://images.unsplash.com/photo-1622286342621-4bd786c2447c?auto=format&fit=crop&q=80&w=800"
  }
];

export const testimonials: Testimonial[] = [
  {
    id: "t1",
    name: "Anjali Gupta",
    content: "The best salon experience in Chandigarh. The team completely transformed my hair and I couldn't be happier with the balayage.",
    rating: 5
  },
  {
    id: "t2",
    name: "Vikram Ahuja",
    content: "Professional and worth every penny. Got a great fade and beard styling. They really listen to what you want.",
    rating: 5
  },
  {
    id: "t3",
    name: "Sneha Reddy",
    content: "From the moment you walk in, you feel special. Got my bridal makeup done here and it stayed flawless all night long.",
    rating: 5
  }
];
