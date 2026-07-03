export interface Treatment {
  id: string;
  name: string;
  description: string;
  benefits: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  city: string;
  rating: number;
  review: string;
  treatment: string;
  avatarUrl: string;
  isVerified: boolean;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface LeadFormInput {
  fullName: string;
  mobileNumber: string;
  age: string;
  gender: string;
  city: string;
  treatmentInterested: string;
  preferredDate: string;
  consultationType: 'Online' | 'In-Clinic';
  message: string;
}

export interface BeforeAfterCase {
  id: string;
  title: string;
  category: 'skin' | 'hair';
  treatmentName: string;
  beforeImg: string;
  afterImg: string;
  details: string;
  duration: string;
}
