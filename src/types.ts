export interface Treatment {
  id: string;
  name: string;
  category: 'skin' | 'hair';
  description: string;
  benefits: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  category: 'skin' | 'hair';
  rating: number;
  treatment: string;
  review: string;
}

export interface InstagramReel {
  id: string;
  reelId: string;
  url: string;
  title: string;
  author: string;
  handle: string;
  tagline: string;
  image?: string;
  category?: 'skin' | 'hair' | 'clinic';
  views?: string;
}

export interface BeforeAfterCase {
  id: string;
  tabKey: string;
  tabLabel: string;
  tag: string;
  title: string;
  treatmentName: string;
  period: string;
  report: string;
  image: string;
}

export interface TrustFactor {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface LeadFormData {
  fullName: string;
  phoneNumber: string;
  email: string;
  consultationType: 'IN-CLINIC' | 'ONLINE';
}
