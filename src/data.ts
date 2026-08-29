import { Treatment, Testimonial, BeforeAfterCase } from './types';
import beforeAfter1 from './assets/result_1.jpeg';
import beforeAfter2 from './assets/result_2.jpeg';
import beforeAfter3 from './assets/result_3.jpeg';
import beforeAfter4 from './assets/result_4.jpeg';
import beforeAfter5 from './assets/result_5.jpeg';

export const skinTreatments: Treatment[] = [
  {
    id: 'anti-acne',
    name: 'Anti Acne Treatment',
    description: 'Advanced clinical protocols, salicylic peels, and deep pore purification to control active breakouts and prevent future acne.',
    benefits: ['Clears active acne & pustules', 'Regulates excess sebum secretion', 'Prevents permanent acne scarring']
  },
  {
    id: 'botox-fillers',
    name: 'Botox & Fillers',
    description: 'FDA-approved anti-wrinkle neuromodulators and dermal fillers for natural facial contouring, volume restoration, and wrinkle smoothing.',
    benefits: ['Smooths dynamic lines & wrinkles', 'Restores lost facial volume', 'Natural, youth-enhancing contouring']
  },
  {
    id: 'mnrf-meso-glow',
    name: 'MNRF & Meso Glow',
    description: 'Micro-Needling Fractional Radiofrequency combined with meso vitamin infusions for collagen remodeling and glass-skin radiance.',
    benefits: ['Tightens pores & smooths pitted scars', 'Stimulates deep collagen synthesis', 'Imparts instant luminous meso glow']
  },
  {
    id: 'glutathione-skin',
    name: 'Glutathione Treatment for Skin',
    description: 'Medical antioxidant dermal infusions and brightening therapy to correct stubborn hyperpigmentation and reveal an even complexion.',
    benefits: ['Lightens stubborn hyperpigmentation', 'Neutralizes oxidative damage', 'Improves overall skin luminosity']
  },
  {
    id: 'excell-gfc-skin',
    name: 'Excell GFC Skin',
    description: 'Next-generation concentrated autologous growth factor therapy for cellular skin renewal, scar healing, and youthful elasticity.',
    benefits: ['Accelerates cellular skin repair', 'Improves deep dermal texture', 'Rejuvenates tired, aging skin']
  },
  {
    id: 'carbon-laser',
    name: 'Carbon Laser Therapy',
    description: 'Hollywood carbon peel laser toning for instant pore tightening, blackhead clearance, and refreshed, glowing skin.',
    benefits: ['Deeply purifies congested pores', 'Reduces excess oil & blackheads', 'Provides instant red-carpet brightness']
  },
  {
    id: 'laser-hair-removal',
    name: 'Full Body Laser Hair Removal',
    description: 'Painless triple-wavelength diode laser technology for permanent, silky smooth, and ingrown-free skin across all body areas.',
    benefits: ['Permanent hair reduction', 'Painless cooling tip technology', 'Eliminates ingrown hairs & strawberry skin']
  }
];

export const hairTreatments: Treatment[] = [
  {
    id: 'hair-transplant',
    name: 'Hair Transplant',
    description: 'Advanced FUE & FUT surgical hair restoration with microscopic graft mapping for dense, natural-looking permanent hairline regrowth.',
    benefits: ['Permanent, natural hairline design', 'Maximum graft survival rate', 'Minimal downtime & scarring']
  },
  {
    id: 'excell-gfc-hair',
    name: 'Excell GFC',
    description: 'High-concentration autologous growth factor concentrate therapy engineered for superior follicle stimulation and rapid density improvement.',
    benefits: ['Concentrated platelet growth factors', 'Revitalizes dormant hair follicles', 'Significant density improvement in weeks']
  },
  {
    id: 'prp-gfc-hair',
    name: 'PRP, GFC Therapy',
    description: 'Combined Platelet-Rich Plasma and GFC protocols to strengthen weak hair roots, thicken thinning strands, and halt shedding.',
    benefits: ['Dual-action follicular revival', 'Thickens individual hair shafts', '100% natural, autologous procedure']
  },
  {
    id: 'anti-dandruff',
    name: 'Anti Dandruff Treatment',
    description: 'Medical-grade anti-fungal scalp scaling, clarifying peel therapy, and root purification to eradicate persistent flakes and itchiness.',
    benefits: ['Eliminates chronic flaking & scaling', 'Relieves stubborn scalp itchiness', 'Restores balanced, healthy scalp microbiome']
  },
  {
    id: 'micro-needling-hair',
    name: 'Micro Needling (Scalp)',
    description: 'Precision automated micro-channeling on the scalp to activate hair follicle stem cells and maximize therapeutic serum penetration.',
    benefits: ['Stimulates dermal papilla stem cells', 'Boosts scalp blood circulation', 'Enhances peptide & minoxidil absorption']
  },
  {
    id: 'low-level-laser-hair',
    name: 'Low Level Laser Hair Therapy',
    description: 'FDA-cleared cold laser photobiomodulation (LLLT) to stimulate cellular ATP synthesis and energize weak, miniaturized follicles.',
    benefits: ['Clinically proven LLLT cold laser', 'Increases cellular energy & blood flow', 'Non-invasive, painless sessions']
  },
  {
    id: 'hair-fall-control',
    name: 'Hair Fall Control',
    description: 'Scientific scalp diagnostics, nutritional deficiency correction, and dermatological protocols to arrest acute & progressive hair loss.',
    benefits: ['Halts active excessive hair fall', 'Strengthens root anchorage', 'Dermatologist-guided customized protocol']
  }
];

export const beforeAfterCases: BeforeAfterCase[] = [
  {
    id: 'case-1',
    title: 'Hair Regrowth & Density Restoration',
    treatment: 'Excell GFC & PRP Therapy',
    sessions: '4 Sessions over 3 Months',
    description: 'Significant reduction in crown thinning and healthy new hairline density.',
    beforeImage: beforeAfter1,
    afterImage: beforeAfter1
  },
  {
    id: 'case-2',
    title: 'Acne Scar Smoothing & Texture Renewal',
    treatment: 'MNRF & Meso Glow Therapy',
    sessions: '3 Sessions over 8 Weeks',
    description: 'Deep pitted acne scars visibly smoothed with balanced skin complexion.',
    beforeImage: beforeAfter2,
    afterImage: beforeAfter2
  },
  {
    id: 'case-3',
    title: 'Scalp Detox & Dandruff Elimination',
    treatment: 'Anti-Dandruff Scalp Clarifying',
    sessions: '2 Sessions over 4 Weeks',
    description: 'Complete clearance of stubborn flaking, reduced irritation and root strengthening.',
    beforeImage: beforeAfter3,
    afterImage: beforeAfter3
  },
  {
    id: 'case-4',
    title: 'Facial Brightening & Glow Rejuvenation',
    treatment: 'Carbon Laser & Glutathione Care',
    sessions: '3 Sessions over 6 Weeks',
    description: 'Faded stubborn sun spots, narrowed pores, and radiant luminous skin.',
    beforeImage: beforeAfter4,
    afterImage: beforeAfter4
  },
  {
    id: 'case-5',
    title: 'Permanent Silky Smooth Skin',
    treatment: 'Full Body Laser Hair Removal',
    sessions: '5 Sessions over 5 Months',
    description: 'Over 95% permanent reduction with zero ingrown hairs or irritation.',
    beforeImage: beforeAfter5,
    afterImage: beforeAfter5
  }
];

export const testimonials: Testimonial[] = [
  {
    id: 't-1',
    name: 'Karthik Raja',
    rating: 5,
    treatment: 'Hair Transplant & GFC',
    review: 'Bonitaa Clinic provided wonderful results. My hair thinning stopped completely within 2 months of GFC sessions, and the newly transplanted hairline looks 100% natural. Highly recommended in Hosur!',
    date: '2 weeks ago'
  },
  {
    id: 't-2',
    name: 'Priyanka Sharma',
    rating: 5,
    treatment: 'Anti Acne & MNRF',
    review: 'I suffered from chronic cystic acne and dark marks for years. The doctors gave a clear roadmap with medical peels and MNRF. My face is completely clear now without scarring.',
    date: '1 month ago'
  },
  {
    id: 't-3',
    name: 'Suresh Kumar',
    rating: 5,
    treatment: 'PRP Hair Regrowth',
    review: 'Very professional, clean clinic with advanced equipment. The free consultation was very informative and transparent. Visible difference in hair volume after 3 sessions.',
    date: '3 weeks ago'
  },
  {
    id: 't-4',
    name: 'Divya Venkatesh',
    rating: 5,
    treatment: 'Carbon Laser & Glow',
    review: 'Had the carbon laser peel before my sister’s wedding. Instant glow, completely painless, and my skin felt so smooth and clear. Best dermatology clinic in Hosur!',
    date: 'Just recently'
  }
];

export const clinicHighlights = [
  {
    title: 'US-FDA Approved Tech',
    description: 'Equipped with gold-standard dermatological lasers, cold photobiomodulation, and sterile growth factor kits.'
  },
  {
    title: 'Expert Senior Doctors',
    description: 'Qualified dermatologists and trichologists with 12+ years of clinical aesthetic experience.'
  },
  {
    title: '10,000+ Happy Patients',
    description: 'Over 10,000+ successful transformations across Hosur, Krishnagiri, and surrounding regions.'
  },
  {
    title: 'Zero Hidden Costs',
    description: 'Transparent pricing with free initial clinical scalp and skin diagnostics for online registrations.'
  }
];
