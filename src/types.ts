export interface Service {
  id: string;
  name: string;
  price: string;
}

export interface ServiceCategory {
  id: string;
  name: string;
  services: Service[];
}

export interface Package {
  id: string;
  name: string;
  includes: string;
  price: string;
  isPopular?: boolean;
}

export interface Stylist {
  id: string;
  name: string;
  role: string;
  image: string;
}

export interface Testimonial {
  id: string;
  name: string;
  content: string;
  rating: number;
}
