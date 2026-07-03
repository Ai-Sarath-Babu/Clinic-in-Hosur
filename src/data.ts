import { Treatment, Testimonial, FAQ, BeforeAfterCase } from './types';

export const skinTreatments: Treatment[] = [
  {
    id: 'acne',
    name: 'Acne Treatment',
    description: 'Advanced clinical solutions to control active acne breakouts and prevent future recurrences.',
    benefits: ['Reduces active pimples', 'Controls excess sebum production', 'Prevents permanent scarring']
  },
  {
    id: 'pimple',
    name: 'Pimple Treatment',
    description: 'Targeted deep-pore therapy to clear blackheads, whiteheads, and painful red pustules quickly.',
    benefits: ['Rapid redness reduction', 'Unclogs congested pores', 'Gentle on sensitive skin']
  },
  {
    id: 'scars',
    name: 'Scar Removal',
    description: 'Fractional laser & microneedling treatments to smooth deep pitted scars and uneven skin texture.',
    benefits: ['Stimulates fresh collagen', 'Fades deep ice-pick scars', 'Improves overall skin elasticity']
  },
  {
    id: 'pigmentation',
    name: 'Pigmentation Treatment',
    description: 'Dermatological peeling and laser toning to correct dark spots, sun damage, and uneven skin tone.',
    benefits: ['Fades dark spots', 'Restores uniform complexion', 'Inhibits melanin overproduction']
  },
  {
    id: 'melasma',
    name: 'Melasma Treatment',
    description: 'Specialized clinical protocols combining topical therapies and gentle peels for stubborn mask-like pigmentation.',
    benefits: ['Targets deep dermal pigment', 'Evens out skin patches', 'Long-term maintenance plans']
  },
  {
    id: 'chemical-peel',
    name: 'Chemical Peel',
    description: 'Medical-grade exfoliating peels to shed dead skin layers and reveal a fresh, glowing complexion underneath.',
    benefits: ['Smooths fine lines', 'Instantly brightens dull skin', 'Exfoliates dead skin cells']
  },
  {
    id: 'anti-aging',
    name: 'Anti-Aging Treatment',
    description: 'Non-surgical skin tightening, wrinkle reduction, and youth-restoring dermal treatments.',
    benefits: ['Tightens sagging facial skin', 'Softens fine lines & wrinkles', 'Restores natural youthful volume']
  },
  {
    id: 'brightening',
    name: 'Skin Brightening',
    description: 'Hydrating dermal infusions and antioxidant therapies to give your skin a luminous, healthy glow.',
    benefits: ['Deep cellular hydration', 'Boosts natural skin radiance', 'Provides healthy, glass-like skin']
  }
];

export const hairTreatments: Treatment[] = [
  {
    id: 'hair-fall',
    name: 'Hair Fall Treatment',
    description: 'Scientific diagnostics and therapies to halt progressive hair thinning and root weakening.',
    benefits: ['Strengthens hair roots', 'Reduces daily shedding', 'Nourishes scalp follicles']
  },
  {
    id: 'prp',
    name: 'PRP Hair Therapy',
    description: 'Platelet-Rich Plasma therapy using your own growth factors to naturally stimulate hair thickness.',
    benefits: ['Promotes thicker hair shafts', 'Awakens dormant follicles', 'Completely natural procedure']
  },
  {
    id: 'hair-regrowth',
    name: 'Hair Regrowth',
    description: 'Advanced GFC (Growth Factor Concentrate) therapy to stimulate active new hair growth in thinning areas.',
    benefits: ['Accelerates new hair growth', 'Increases active volume density', 'Clinically proven results']
  },
  {
    id: 'dandruff',
    name: 'Dandruff Treatment',
    description: 'Medical-grade anti-fungal scalp scaling and clarifying treatments for persistent flaking and itching.',
    benefits: ['Eliminates stubborn flakes', 'Soothes inflamed scalp itch', 'Restores healthy pH balance']
  },
  {
    id: 'baldness',
    name: 'Baldness Treatment',
    description: 'Comprehensive medical management and follicular restoration therapy for pattern baldness (alopecia).',
    benefits: ['Arrests male & female pattern baldness', 'Preserves existing hair count', 'Dermatologist backed protocol']
  },
  {
    id: 'hair-transplant',
    name: 'Hair Transplant Consultation',
    description: 'Expert pre-surgical assessment, hairline design, and follicular unit mapping for natural looking transplant results.',
    benefits: ['Customized hairline drafting', 'Donor area capacity analysis', 'Realistic graft count estimation']
  },
  {
    id: 'mesotherapy',
    name: 'Hair Mesotherapy',
    description: 'Micro-infusions of premium vitamins, minerals, and amino acids directly into the hair root matrix.',
    benefits: ['Direct nutrient delivery', 'Improves scalp blood circulation', 'Adds natural shine and strength']
  }
];

export const whyChooseUsFeatures = [
  {
    title: 'Experienced Doctors',
    description: 'Consult with double-board certified senior dermatologists and hair transplant specialists with 12+ years of experience.'
  },
  {
    title: 'Personalized Treatment',
    description: 'No one-size-fits-all. Get customized prescription plans and clinical therapy schedules tailored specifically for your skin & hair type.'
  },
  {
    title: 'Latest Technology',
    description: 'Our clinic uses FDA-approved, cutting-edge lasers, GFC machinery, and digital scalp analyzers for highly precise, safe results.'
  },
  {
    title: 'Affordable Pricing',
    description: 'Premium clinical care shouldn\'t break the bank. Get world-class treatments at fair, transparent, and pocket-friendly pricing starting with ₹99 consultation.'
  },
  {
    title: 'Online Consultation',
    description: 'Busy schedule or living outside Hosur? Connect with our top specialists from the comfort of your home via HD video consultations.'
  },
  {
    title: 'Same Day Appointment',
    description: 'Instant clinical attention when you need it. Book online and get confirmed consultation slots on the same day without long waiting times.'
  },
  {
    title: 'Transparent Pricing',
    description: 'Zero hidden charges. Know the complete cost of your sessions, medications, and treatments upfront before starting any plan.'
  },
  {
    title: 'High Success Rate',
    description: 'Over 1,500+ happy patients successfully treated across Hosur, Krishnagiri, and Bangalore with visible, highly rewarding transformations.'
  }
];

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Anitha R.',
    city: 'Hosur',
    rating: 5,
    treatment: 'Acne & Scar Treatment',
    avatarUrl: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=120&h=120&q=80',
    isVerified: true,
    review: 'I was suffering from severe painful acne for 3 years. After consulting here for just ₹99, the doctor explained the root cause and gave me a 3-month treatment plan. Now my skin is 90% clear and the scars are barely visible! Truly the best dermatologist in Hosur.'
  },
  {
    id: '2',
    name: 'Karthik Raja',
    city: 'Krishnagiri',
    rating: 5,
    treatment: 'PRP Hair Therapy',
    avatarUrl: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=120&h=120&q=80',
    isVerified: true,
    review: 'My hair fall was extreme, and I was losing confidence. I took 5 sessions of PRP and GFC therapy here. The results are amazing! My hair density has increased and hair fall has completely stopped. Doctors are extremely professional and friendly.'
  },
  {
    id: '3',
    name: 'Priyanka Sen',
    city: 'Hosur (Shanthi Nagar)',
    rating: 5,
    treatment: 'Pigmentation Treatment',
    avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&h=120&q=80',
    isVerified: true,
    review: 'I had dark patches on my cheeks (Melasma) due to sun exposure. The chemical peel sessions here did magic. My skin is bright, even-toned, and feels super fresh. Excellent care at very reasonable prices.'
  },
  {
    id: '4',
    name: 'Vikram S.',
    city: 'Bangalore Outskirts',
    rating: 5,
    treatment: 'Hair Regrowth Treatment',
    avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&h=120&q=80',
    isVerified: true,
    review: 'Travelled from Bangalore border for my hair treatment. The ₹99 consultation offer is 100% genuine. The doctor advised GFC instead of pushing for expensive transplant directly. Highly honest team and great hygiene!'
  },
  {
    id: '5',
    name: 'Meenakshi Sundaram',
    city: 'Denkanikottai',
    rating: 5,
    treatment: 'Skin Brightening Glow',
    avatarUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=120&h=120&q=80',
    isVerified: true,
    review: 'I booked a skin brightening session before my wedding. The results were fantastic, natural, and my skin was glowing throughout the marriage events. All my family members appreciated it. Thanks to the amazing doctors.'
  },
  {
    id: '6',
    name: 'Suresh Kumar',
    city: 'Hosur',
    rating: 5,
    treatment: 'Baldness & PRP Treatment',
    avatarUrl: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=120&h=120&q=80',
    isVerified: true,
    review: 'Very professional clinic. The scalp analysis showed exactly where thinning was happening. I completed 4 sessions of hair regrowth therapy and the crown bald patch is now covered with healthy hair.'
  },
  {
    id: '7',
    name: 'Deepika Mohan',
    city: 'Hosur',
    rating: 5,
    treatment: 'Pimple & Chemical Peel',
    avatarUrl: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=120&h=120&q=80',
    isVerified: true,
    review: 'Had severe pimples before my college placements. The doctors prescribed a gentle peel and topical creams. Within 2 weeks, my pimples dried up and spots started fading. Gave me so much confidence!'
  },
  {
    id: '8',
    name: 'Arun Prasath',
    city: 'Krishnagiri',
    rating: 5,
    treatment: 'Warts & Mole Removal',
    avatarUrl: 'https://images.unsplash.com/photo-1489980508314-941910ded1f4?auto=format&fit=crop&w=120&h=120&q=80',
    isVerified: true,
    review: 'Had 12 warts on my neck. The doctor removed them in a single painless laser session. Excellent healing, zero scars left. Extremely satisfied with the treatment quality!'
  },
  {
    id: '9',
    name: 'Sangeetha G.',
    city: 'Hosur',
    rating: 5,
    treatment: 'Anti Aging Therapy',
    avatarUrl: 'https://images.unsplash.com/photo-1554151228-14d9def656e4?auto=format&fit=crop&w=120&h=120&q=80',
    isVerified: true,
    review: 'Started noticing fine lines and saggy skin near the jawline. The lifting treatments here have given me a very youthful and natural appearance. No surgery, pure clinical science.'
  },
  {
    id: '10',
    name: 'Harish Babu',
    city: 'Denkanikottai',
    rating: 5,
    treatment: 'Dandruff & Scaling',
    avatarUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&h=120&q=80',
    isVerified: true,
    review: 'My scalp was constantly itchy and flaky. After just 2 sessions of clinical anti-dandruff scaling and specialized lotion, the flakes are 100% gone and my scalp feels incredibly clean.'
  },
  {
    id: '11',
    name: 'Ramya Krishnan',
    city: 'Hosur',
    rating: 5,
    treatment: 'Dark Circles & Skin Glow',
    avatarUrl: 'https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?auto=format&fit=crop&w=120&h=120&q=80',
    isVerified: true,
    review: 'The doctors here are very detailed. They checked my blood reports to address internal deficiencies causing dark spots and circles, alongside external laser treatment. Outstanding holistic approach.'
  },
  {
    id: '12',
    name: 'Nitin Roy',
    city: 'Hosur (Rayakottai Rd)',
    rating: 5,
    treatment: 'Hair Transplant Consultation',
    avatarUrl: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=120&h=120&q=80',
    isVerified: true,
    review: 'Had a detailed hair mapping and graft analysis. The surgeon explained the entire FUE process, hairline mapping, and graft numbers honestly without trying to oversell. Extremely trustable!'
  },
  {
    id: '13',
    name: 'Shalini P.',
    city: 'Hosur',
    rating: 5,
    treatment: 'Acne Scar Laser',
    avatarUrl: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=120&h=120&q=80',
    isVerified: true,
    review: 'Completed 3 sessions of fractional CO2 laser for my deep acne pits. My skin texture is now incredibly smooth, and friends are asking me what treatment I did. Thank you so much, doctor!'
  },
  {
    id: '14',
    name: 'Madhavan E.',
    city: 'Tamil Nadu Border',
    rating: 5,
    treatment: 'PRP Hair Growth',
    avatarUrl: 'https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?auto=format&fit=crop&w=120&h=120&q=80',
    isVerified: true,
    review: 'Highly recommend the PRP package. Compared to Bangalore clinics, the price here is highly affordable, and the results are identical. Very hygienic clinical rooms and professional staff.'
  },
  {
    id: '15',
    name: 'Nandhini Devi',
    city: 'Hosur',
    rating: 5,
    treatment: 'Skin Glow Treatment',
    avatarUrl: 'https://images.unsplash.com/photo-1594744803329-e58b31de215f?auto=format&fit=crop&w=120&h=120&q=80',
    isVerified: true,
    review: 'Best clinic in Shanthi Nagar. The ₹99 consultation got me exactly what I needed. They suggested a simple skin routine that solved all my dry skin issues without putting me on heavy chemicals.'
  }
];

export const faqs: FAQ[] = [
  {
    question: 'Is consultation really ₹99?',
    answer: 'Yes! Our expert skin and hair consultation is really just ₹99. This includes a complete scalp or facial skin examination with our senior specialist, root-cause diagnosis, treatment assessment, and a personalized treatment roadmap. There are no hidden charges or forced session purchases.'
  },
  {
    question: 'Do you provide online consultation?',
    answer: 'Absolutely. We offer online video consultations for patients who are unable to travel to our Hosur clinic or live in remote areas of Krishnagiri, Denkanikottai, and Bangalore outskirts. You will receive a digital prescription that you can use at any local pharmacy.'
  },
  {
    question: 'What treatments do you offer?',
    answer: 'We provide FDA-approved, scientifically-proven treatments for a wide range of concerns including Acne, Pimples, Scar Remodeling, Pigmentation, Melasma, Anti-Aging, Chemical Peels, Skin Glow Hydration, Hair Fall Control, PRP Therapy, GFC Growth Therapy, Dandruff, and complete Hair Transplant Consultations.'
  },
  {
    question: 'Is PRP painful?',
    answer: 'No, it is virtually painless. Prior to the therapy, we apply a high-quality medical-grade topical numbing cream to the scalp for 30-40 minutes. You will only feel light, tiny pressure pinches. Most patients comfortably browse their phones or listen to music during the session.'
  },
  {
    question: 'How many sessions are needed?',
    answer: 'This varies depending on your condition. For skin pigmentation and brightening, visible improvements appear in 3-4 sessions. For hair restoration and PRP/GFC therapies, we recommend a series of 4-6 sessions spaced 3-4 weeks apart to achieve maximum, long-lasting density.'
  },
  {
    question: 'Do you treat hair loss?',
    answer: 'Yes, we are hair loss experts. We offer a comprehensive multi-pronged approach that includes deep diagnostics, scalp health scaling, PRP (Platelet-Rich Plasma), GFC (Growth Factor Concentrate), Hair Mesotherapy, medical prescriptions to halt DHT, and pre/post-op transplant tracking.'
  },
  {
    question: 'Do you provide skin glow treatments?',
    answer: 'Yes, we provide advanced skin brightening, hydrating glow peels, glutathione infusions, carbon facials, and customized chemical exfoliation designed specifically to bring back a natural, long-lasting glass skin glow for both men and women.'
  },
  {
    question: 'What are clinic timings?',
    answer: 'Our clinic is open all 7 days of the week from 9:00 AM to 9:00 PM. Same-day physical consultations and immediate online video sessions are available. However, due to high demand for the ₹99 offer, pre-booking online is highly recommended to avoid waiting times.'
  }
];

export const beforeAfterCases: BeforeAfterCase[] = [
  {
    id: 'case-acne',
    title: 'Severe Acne & Scar Correction',
    category: 'skin',
    treatmentName: 'Acne Laser & Chemical Peel Combo',
    beforeImg: 'https://images.unsplash.com/photo-1614859324967-bdf461fcf769?auto=format&fit=crop&w=500&q=80', // Styled closeup
    afterImg: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=500&q=80',
    details: '90% reduction in active breakouts and scar depth within 3 months.',
    duration: '12 Weeks'
  },
  {
    id: 'case-hair',
    title: 'Crown Baldness & Thinning Recovery',
    category: 'hair',
    treatmentName: 'PRP Hair Therapy + GFC (5 Sessions)',
    beforeImg: 'https://images.unsplash.com/photo-1569956461901-b5e022f4682c?auto=format&fit=crop&w=500&q=80',
    afterImg: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=500&q=80',
    details: 'Significant regrowth of dormant follicles and visible hairline thickening.',
    duration: '16 Weeks'
  },
  {
    id: 'case-pigment',
    title: 'Stubborn Melasma & Pigmentation',
    category: 'skin',
    treatmentName: 'Melasma Peel & Laser Toning',
    beforeImg: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=500&q=80',
    afterImg: 'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&w=500&q=80',
    details: 'Complete clearance of dark cheek patches and restored uniform skin glow.',
    duration: '8 Weeks'
  },
  {
    id: 'case-hairfall',
    title: 'Extreme Hair Fall Correction',
    category: 'hair',
    treatmentName: 'Hair Root Mesotherapy + Supplements',
    beforeImg: 'https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=500&q=80',
    afterImg: 'https://images.unsplash.com/photo-1595959183075-c1d09e37fc16?auto=format&fit=crop&w=500&q=80',
    details: 'Daily hair shedding reduced from 200+ strands to normal rate (<30 strands).',
    duration: '6 Weeks'
  }
];
