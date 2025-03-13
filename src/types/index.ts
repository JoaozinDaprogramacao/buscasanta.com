import { LucideIcon } from 'lucide-react';

export interface Church {
  name: string;
  image: string;
  address: string;
  schedule: string;
  phone: string;
  slug: string;
}

export interface Event {
  title: string;
  image: string;
  date: string;
  time: string;
  location: string;
  description: string;
}

export interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
  linkText: string;
  href: string;
} 