import { Treatment, BeforeAfterCase, TrustFactor, InstagramReel, Testimonial } from './types';

export const CLINIC_PHONE = "9626615566";
export const CLINIC_PHONE_DISPLAY = "9626615566";
export const CLINIC_PHONE_INTL = "+919626615566";
export const CLINIC_NAME = "BONITAA SKIN AND HAIR CARE";
export const CLINIC_LOCATION = "Hosur, Shanthi Nagar";

export const TOP_BAR_ITEMS = [
  { text: "100% FREE CONSULTATION OFFER (ACTIVE TODAY)", icon: "Gift" },
  { text: "SAME DAY APPOINTMENT AVAILABLE", icon: "Calendar" },
  { text: "FDA-APPROVED CLINICAL TREATMENTS", icon: "ShieldCheck" },
  { text: "DOUBLE-BOARD CERTIFIED DERMATOLOGISTS", icon: "Award" }
];

export const SKIN_TREATMENTS: Treatment[] = [
  {
    id: "acne-treatment",
    name: "Acne Treatment",
    category: "skin",
    description: "Advanced clinical solutions to control active acne breakouts and prevent future recurrences.",
    benefits: [
      "Reduces active pimples",
      "Controls excess sebum production",
      "Prevents permanent scarring"
    ]
  },
  {
    id: "pimple-treatment",
    name: "Pimple Treatment",
    category: "skin",
    description: "Targeted deep-pore therapy to clear blackheads, whiteheads, and painful red pustules quickly.",
    benefits: [
      "Rapid redness reduction",
      "Unclogs congested pores",
      "Gentle on sensitive skin"
    ]
  },
  {
    id: "scar-removal",
    name: "Scar Removal",
    category: "skin",
    description: "Fractional laser & microneedling treatments to smooth deep pitted scars and uneven skin texture.",
    benefits: [
      "Stimulates fresh collagen",
      "Fades deep ice-pick scars",
      "Improves overall skin elasticity"
    ]
  },
  {
    id: "pigmentation-treatment",
    name: "Pigmentation Treatment",
    category: "skin",
    description: "Dermatological peeling and laser toning to correct dark spots, sun damage, and uneven skin tone.",
    benefits: [
      "Fades dark spots",
      "Restores uniform complexion",
      "Inhibits melanin overproduction"
    ]
  },
  {
    id: "melasma-treatment",
    name: "Melasma Treatment",
    category: "skin",
    description: "Specialized clinical protocols combining topical therapies and gentle peels for stubborn mask-like pigmentation.",
    benefits: [
      "Targets deep dermal pigment",
      "Evens out skin patches",
      "Long-term maintenance plans"
    ]
  },
  {
    id: "chemical-peel",
    name: "Chemical Peel",
    category: "skin",
    description: "Medical-grade exfoliating peels to shed dead skin layers and reveal a fresh, glowing complexion underneath.",
    benefits: [
      "Smooths fine lines",
      "Instantly brightens dull skin",
      "Exfoliates dead skin cells"
    ]
  },
  {
    id: "anti-aging-treatment",
    name: "Anti-Aging Treatment",
    category: "skin",
    description: "Non-surgical skin tightening, wrinkle reduction, and youth-restoring dermal treatments.",
    benefits: [
      "Tightens sagging facial skin",
      "Softens fine lines & wrinkles",
      "Restores natural youthful volume"
    ]
  },
  {
    id: "skin-brightening",
    name: "Skin Brightening",
    category: "skin",
    description: "Hydrating dermal infusions and antioxidant therapies to give your skin a luminous, healthy glow.",
    benefits: [
      "Deep cellular hydration",
      "Boosts natural skin radiance",
      "Provides healthy, glass-like skin"
    ]
  }
];

export const HAIR_TREATMENTS: Treatment[] = [
  {
    id: "gfc-therapy",
    name: "Advanced GFC Therapy",
    category: "hair",
    description: "Harness your own autologous growth factors to revive dormant hair roots with 3x higher biological potency.",
    benefits: [
      "Stimulates dormant hair follicles",
      "Zero pain & zero risk of rejection",
      "Noticeable density gain in 3-4 sessions"
    ]
  },
  {
    id: "prp-hair-treatment",
    name: "PRP Hair Therapy",
    category: "hair",
    description: "Platelet-Rich Plasma micro-injections rich in cellular cytokines to arrest hair thinning and promote shaft thickening.",
    benefits: [
      "Reduces active hair shedding",
      "Thickens existing hair shafts",
      "Safe, natural biological treatment"
    ]
  },
  {
    id: "hair-transplant",
    name: "FUE Hair Transplant",
    category: "hair",
    description: "Painless micro-follicular extraction and precision slit implantation for permanent, natural hairline restoration.",
    benefits: [
      "Permanent & natural growth",
      "Virtually invisible micro-scars",
      "Maximum graft survival guarantee"
    ]
  },
  {
    id: "anti-dandruff",
    name: "Anti-Dandruff Scalp Treatment",
    category: "hair",
    description: "Deep medical scalp detox to eradicate stubborn fungal dandruff, scaling, itchiness, and folliculitis.",
    benefits: [
      "Deep clarifies congested scalp",
      "Eradicates fungal micro-organisms",
      "Soothes itching and redness"
    ]
  },
  {
    id: "micro-needling-scalp",
    name: "Scalp Microneedling",
    category: "hair",
    description: "Targeted dermaroller micro-punctures to trigger natural collagen synthesis and enhance topical peptide absorption.",
    benefits: [
      "Increases nutrient absorption 5x",
      "Triggers micro-vascular circulation",
      "Revitalizes weakened roots"
    ]
  },
  {
    id: "lllt-laser",
    name: "Low Level Laser Therapy (LLLT)",
    category: "hair",
    description: "Cold laser bio-stimulation delivering cellular ATP photons to energize weakened hair matrix cells.",
    benefits: [
      "100% painless & non-invasive",
      "Enhances scalp micro-circulation",
      "Complements PRP and GFC protocols"
    ]
  },
  {
    id: "hair-fall-control",
    name: "Hair Fall Control Protocol",
    category: "hair",
    description: "Multi-modal trichological diagnosis and custom topical/oral formulations to rapidly halt acute shedding.",
    benefits: [
      "Diagnoses root deficiency causes",
      "Halts active hair shedding",
      "Restores scalp balance"
    ]
  },
  {
    id: "alopecia-care",
    name: "Alopecia Areata Care",
    category: "hair",
    description: "Specialized anti-inflammatory localized intralesional therapy for circular bald patches.",
    benefits: [
      "Controls autoimmune hair loss",
      "Re-stimulates patchy hair growth",
      "Monitored under senior dermatologist"
    ]
  }
];

export const BEFORE_AFTER_CASES: BeforeAfterCase[] = [
  {
    id: "case-acne",
    tabKey: "acne",
    tabLabel: "Acne Case",
    tag: "SKIN TRANSFORMATION",
    title: "Acne Scars & Skin Texture Renewal",
    treatmentName: "MNRF + Fractional CO2 Laser Combo",
    period: "8 Weeks",
    report: "Visible reduction in deep pitted acne scars and uneven texture within 8 weeks.",
    image: "/assets/result_4.jpeg"
  },
  {
    id: "case-hair",
    tabKey: "hair",
    tabLabel: "Hair Case",
    tag: "HAIR TRANSFORMATION",
    title: "Crown Density & Hairline Thickening",
    treatmentName: "Excell GFC + PRP Growth Therapy (4 Sessions)",
    period: "12 Weeks",
    report: "Marked increase in follicular thickness and complete coverage of crown thinning patch.",
    image: "/assets/result_1.jpeg"
  },
  {
    id: "case-pigmentation",
    tabKey: "pigmentation",
    tabLabel: "Pigmentation Case",
    tag: "SKIN TRANSFORMATION",
    title: "Melasma & Dark Patch Clarification",
    treatmentName: "Q-Switch Laser Toning + Medical Peels",
    period: "6 Weeks",
    report: "Significant lightening of stubborn epidermal pigmentation with unified skin radiance.",
    image: "/assets/result_3.jpeg"
  },
  {
    id: "case-hairline",
    tabKey: "hairline",
    tabLabel: "Hairline Case",
    tag: "HAIR TRANSFORMATION",
    title: "Temporal Receding Hairline Restoration",
    treatmentName: "Micro-FUE Grafting + GFC Boost",
    period: "16 Weeks",
    report: "Natural, dense hairline framing with high graft survival and seamless blending.",
    image: "/assets/result_2.jpeg"
  },
  {
    id: "case-skin",
    tabKey: "skin",
    tabLabel: "Skin Case",
    tag: "SKIN TRANSFORMATION",
    title: "Open Pores & Post-Inflammatory Glow",
    treatmentName: "Carbon Laser Peel + Meso Infusion",
    period: "4 Weeks",
    report: "Pore size reduced by 75%, excess oil regulated, and radiant glowing complexion.",
    image: "/assets/result_5.jpeg"
  }
];

export const TRUST_FACTORS: TrustFactor[] = [
  {
    id: "experienced-doctors",
    title: "Experienced Doctors",
    description: "Consult with double-board certified senior dermatologists and hair transplant specialists with 12+ years of experience.",
    iconName: "Stethoscope"
  },
  {
    id: "personalized-treatment",
    title: "Personalized Treatment",
    description: "No one-size-fits-all. Get customized prescription plans and clinical therapy schedules tailored specifically for your skin & hair type.",
    iconName: "Sliders"
  },
  {
    id: "latest-technology",
    title: "Latest Technology",
    description: "Our clinic uses FDA-approved, cutting-edge lasers, GFC machinery, and digital scalp analyzers for highly precise, safe results.",
    iconName: "Cpu"
  },
  {
    id: "affordable-pricing",
    title: "Affordable Pricing",
    description: "Premium clinical care shouldn't break the bank. Get world-class treatments at fair, transparent, and pocket-friendly pricing starting with a 100% Free consultation.",
    iconName: "Tag"
  },
  {
    id: "online-consultation",
    title: "Online Consultation",
    description: "Busy schedule or living outside Hosur? Connect with our top specialists from the comfort of your home via HD video consultations.",
    iconName: "Video"
  },
  {
    id: "same-day-appointment",
    title: "Same Day Appointment",
    description: "Instant clinical attention when you need it. Book online and get confirmed consultation slots on the same day without long waiting times.",
    iconName: "CalendarCheck"
  },
  {
    id: "transparent-pricing",
    title: "Transparent Pricing",
    description: "Zero hidden charges. Know the complete cost of your sessions, medications, and treatments upfront before starting any plan.",
    iconName: "FileCheck"
  },
  {
    id: "high-success-rate",
    title: "High Success Rate",
    description: "Over 1,500+ happy patients successfully treated across Hosur, Krishnagiri, and Bangalore with visible, highly rewarding transformations.",
    iconName: "TrendingUp"
  }
];

export const INSTAGRAM_REELS: InstagramReel[] = [
  {
    id: "reel-1",
    reelId: "DOSiucPEgHu",
    url: "https://www.instagram.com/reels/DOSiucPEgHu/",
    title: "Patient Skin & Hair Care Experience",
    author: "bonitaaskinandhaircarehosur",
    handle: "@bonitaaskinandhaircarehosur",
    tagline: "Bonitaa Skin & Hair Care • Hosur",
    image: "/assets/result_1.jpeg",
    category: "skin",
    views: "18.4k"
  },
  {
    id: "reel-2",
    reelId: "DWtd0YFCEL9",
    url: "https://www.instagram.com/reels/DWtd0YFCEL9/",
    title: "Clinical Procedure & Results",
    author: "bonitaaskinandhaircarehosur",
    handle: "@bonitaaskinandhaircarehosur",
    tagline: "Bonitaa Skin & Hair Care • Hosur",
    image: "/assets/result_4.jpeg",
    category: "hair",
    views: "24.1k"
  },
  {
    id: "reel-3",
    reelId: "DPCFysvEqMt",
    url: "https://www.instagram.com/reels/DPCFysvEqMt/",
    title: "Advanced Aesthetic Transformation",
    author: "bonitaaskinandhaircarehosur",
    handle: "@bonitaaskinandhaircarehosur",
    tagline: "Bonitaa Skin & Hair Care • Hosur",
    image: "/assets/result_5.jpeg",
    category: "skin",
    views: "31.7k"
  }
];

export const REVIEWS: Testimonial[] = [
  {
    id: "rev-1",
    name: "Anitha R.",
    location: "Hosur",
    category: "skin",
    rating: 5,
    treatment: "Acne & Scar Treatment",
    review: "I was suffering from severe painful acne for 3 years. After booking a free consultation here, the doctor explained the root cause and gave me a 3-month treatment plan. Now my skin is 90% clear and the scars are barely visible! Truly the best dermatologist in Hosur."
  },
  {
    id: "rev-2",
    name: "Karthik Raja",
    location: "Krishnagiri",
    category: "hair",
    rating: 5,
    treatment: "PRP Hair Therapy",
    review: "My hair fall was extreme, and I was losing confidence. I took 5 sessions of PRP and GFC therapy here. The results are amazing! My hair density has increased and hair fall has completely stopped. Doctors are extremely professional and friendly."
  },
  {
    id: "rev-3",
    name: "Priyanka Sen",
    location: "Hosur (Shanthi Nagar)",
    category: "skin",
    rating: 5,
    treatment: "Pigmentation Treatment",
    review: "I had dark patches on my cheeks (Melasma) due to sun exposure. The chemical peel sessions here did magic. My skin is bright, even-toned, and feels super fresh. Excellent care at very reasonable prices."
  },
  {
    id: "rev-4",
    name: "Vikram S.",
    location: "Bangalore Outskirts",
    category: "hair",
    rating: 5,
    treatment: "Hair Regrowth Treatment",
    review: "Travelled from Bangalore border for my hair treatment. The Free consultation offer is 100% genuine. The doctor advised GFC instead of pushing for expensive transplant directly. Highly honest team and great hygiene!"
  },
  {
    id: "rev-5",
    name: "Meenakshi Sundaram",
    location: "Denkanikottai",
    category: "skin",
    rating: 5,
    treatment: "Skin Brightening Glow",
    review: "I booked a skin brightening session before my wedding. The results were fantastic, natural, and my skin was glowing throughout the marriage events. All my family members appreciated it. Thanks to the amazing doctors."
  },
  {
    id: "rev-6",
    name: "Suresh Kumar",
    location: "Hosur",
    category: "hair",
    rating: 5,
    treatment: "Baldness & PRP Treatment",
    review: "Very professional clinic. The scalp analysis showed exactly where thinning was happening. I completed 4 sessions of hair regrowth therapy and the crown bald patch is now covered with healthy hair."
  },
  {
    id: "rev-7",
    name: "Deepa Nandhini",
    location: "Hosur SIPCOT",
    category: "skin",
    rating: 5,
    treatment: "Fractional Laser & Carbon Peel",
    review: "The clinic ambiance and hygiene standards are top-notch. My stubborn pimple marks cleared within 4 sessions. Very satisfied with the outcome!"
  },
  {
    id: "rev-8",
    name: "Rajesh Kannan",
    location: "Hosur Rayakottai Road",
    category: "hair",
    rating: 5,
    treatment: "Excell GFC Hair Regrowth",
    review: "Best experience with GFC hair therapy. Zero pain during injections and visible hair sprouting in 2 months. Strongly recommended clinic for hair problems in Hosur."
  },
  {
    id: "rev-9",
    name: "Lavanya Mohan",
    location: "Krishnagiri",
    category: "skin",
    rating: 5,
    treatment: "Anti-Acne & Glow Dermal Peel",
    review: "Dermatologist took 30 minutes to understand my routine and suggested a minimal, highly effective treatment. Transparent billing and genuinely caring staff."
  }
];
