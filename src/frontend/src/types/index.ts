export interface NavLink {
  label: string;
  href: string;
  to: string;
}

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: string;
  category: MenuCategory;
  imageUrl: string;
  featured?: boolean;
}

export type MenuCategory =
  | "coffee"
  | "tea"
  | "pastries"
  | "breakfast"
  | "desserts";

export interface Testimonial {
  id: string;
  name: string;
  avatar: string;
  rating: number;
  text: string;
  date: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  photo: string;
  bio: string;
}

export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
}

export interface OpeningHours {
  day: string;
  hours: string;
}

export interface ContactInfo {
  address: string;
  phone: string;
  email: string;
  hours: OpeningHours[];
}
