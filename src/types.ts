export interface Treatment {
  id: string;
  name: string;
  description: string;
  benefits: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  rating: number;
  treatment: string;
  review: string;
  date: string;
}

export interface BeforeAfterCase {
  id: string;
  title: string;
  treatment: string;
  sessions: string;
  description: string;
  beforeImage: string;
  afterImage: string;
}

export interface LeadFormData {
  fullName: string;
  phoneNumber: string;
  email: string;
  consultationType: string;
}
