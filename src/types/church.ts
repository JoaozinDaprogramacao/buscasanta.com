export interface Church {
  name: string;
  image: string;
  address: string;
  schedule: string;
  phone: string;
  slug: string;
  description: string;
  events?: {
    title: string;
    date: string;
    time: string;
  }[];
} 