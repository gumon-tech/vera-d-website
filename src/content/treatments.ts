/**
 * Treatment menu — typed source of truth.
 * Prices/durations follow the posters in assets/images/ (agreed 2026-07-18,
 * pending คุณนก's final confirmation). Edit here to change any price or step.
 */

export type Treatment = {
  slug: string;
  name: string;
  /** Optional second line under the name, e.g. an upgrade or sub-title. */
  subtitle?: string;
  therapists: number;
  duration: string;
  price: number;
  /** Short marketing description. */
  description: string;
  /** Ordered process steps shown as an icon-flow. */
  process?: string[];
  /** "Suitable for" chips. */
  suitableFor?: string[];
  /** Optional upgrade line (e.g. Head Spa grand ritual). */
  upgrade?: { name: string; duration: string; price: number };
  featured?: boolean;
};

export type Category = {
  id: string; // anchor id
  name: string;
  eyebrow: string;
  tagline: string;
  intro: string;
  /** Placeholder image for the category card / header. */
  image: string;
  treatments: Treatment[];
};

export const categories: Category[] = [
  {
    id: 'massage',
    name: 'Royal Therapeutic Massage',
    eyebrow: 'Signature',
    tagline: 'Ancient Wisdom · Modern Science',
    intro:
      'Traditional Thai technique guided by modern anatomy — every treatment begins with a posture and muscle assessment so each touch is intentional, precise, and deeply restorative.',
    image: '/images/photos/hero-massage.webp',
    treatments: [
      {
        slug: 'relaxing-aromatherapy-massage',
        name: 'Relaxing Aromatherapy Massage',
        therapists: 1,
        duration: '60 min',
        price: 125,
        description:
          'A deeply relaxing full-body massage using premium essential-oil blends to calm the mind, reduce stress and restore overall well-being.',
        process: [
          'Aromatherapy Massage',
          'Essential Oil Therapy',
          'Relaxation Techniques',
          'Scalp & Foot Relaxation',
        ],
      },
      {
        slug: 'royal-thai-therapeutic-massage',
        name: 'Royal Thai Therapeutic Massage',
        therapists: 1,
        duration: '90 min',
        price: 170,
        featured: true,
        description:
          'A traditional Thai massage using ancient techniques of assisted stretching and acupressure to relieve muscle tension, improve flexibility and restore energy flow.',
        process: [
          'Consultation',
          'Posture & Muscle Assessment',
          'Thai Pressure Point Therapy',
          'Deep Muscle Release',
          'Custom Herbal Oil Therapy',
          'Stretching & Relaxation',
        ],
        suitableFor: [
          'Neck & Shoulder Pain',
          'Office Syndrome',
          'Lower Back Pain',
          'Hip Tightness',
          'Muscle Fatigue',
          'Stress Relief',
        ],
      },
      {
        slug: 'royal-element-massage',
        name: 'Royal Element Massage',
        subtitle: 'Personalised Four-Elements herbal oil therapy',
        therapists: 1,
        duration: '120 min',
        price: 195,
        description:
          'Personalised herbal-oil therapy harnessing the power of the Four Elements to balance body, mind and energy — a bespoke blend selected for your constitution.',
        process: [
          'Element Assessment',
          'Personalised Herbal Oil',
          'Thai Therapeutic Massage',
          'Deep Tissue Release',
          'Relaxation & Stretching',
        ],
      },
      {
        slug: 'imperial-royal-therapeutic-massage',
        name: 'Imperial Royal Therapeutic Massage',
        subtitle: 'Four-hands, two therapists in synchronisation',
        therapists: 2,
        duration: '60 min',
        price: 220,
        description:
          'The ultimate therapeutic experience. Two therapists apply advanced techniques simultaneously — upper and lower body worked in perfect synchronisation for maximum release with minimum recovery time.',
        process: [
          'Synchronised Massage',
          'Deep Muscle Release',
          'Herbal Oil Therapy',
          'Head & Scalp Revitalisation',
          'Stretching & Relaxation',
        ],
      },
    ],
  },
  {
    id: 'head-spa',
    name: 'Royal Head Spa',
    eyebrow: 'Scalp & Hair Wellness',
    tagline: 'The Art of Scalp & Hair Wellness',
    intro:
      'A ritual for the scalp and senses — cleansing, nourishing and restoring hair while releasing tension held in the head, neck and shoulders.',
    image: '/images/photos/hero-head-spa.webp',
    treatments: [
      {
        slug: 'the-royal-four-hands',
        name: 'The Royal Four-Hands',
        subtitle: 'Two therapists in synchrony',
        therapists: 2,
        duration: '60 min',
        price: 165,
        featured: true,
        description:
          'Two therapists work in harmony for a profoundly immersive scalp and hair ritual — the pinnacle of the Head Spa collection.',
        upgrade: {
          name: 'Ultimate Indulgence — Grand Wellness Ritual',
          duration: '90 min',
          price: 210,
        },
        process: [
          'Scalp Consultation',
          'Cleansing & Exfoliation',
          'Four-Hands Massage',
          'Nourishing Treatment',
          'Neck & Shoulder Release',
        ],
      },
      {
        slug: 'scalp-renewal-therapy',
        name: 'Scalp Renewal Therapy',
        therapists: 1,
        duration: '45 min',
        price: 95,
        description:
          'A revitalising cleanse and exfoliation to renew the scalp, remove build-up and restore a healthy foundation for hair growth.',
        process: ['Scalp Analysis', 'Deep Cleansing', 'Exfoliation', 'Scalp Massage'],
      },
      {
        slug: 'nourish-and-repair-ritual',
        name: 'Nourish & Repair Ritual',
        therapists: 1,
        duration: '60 min',
        price: 125,
        description:
          'Intensive nourishment for stressed, dry or damaged hair — replenishing moisture and strength from root to tip.',
        process: ['Consultation', 'Cleansing', 'Repair Mask', 'Nourishing Massage'],
      },
      {
        slug: 'anti-hair-loss-therapy',
        name: 'Anti-Hair Loss Therapy',
        therapists: 1,
        duration: '75 min',
        price: 145,
        description:
          'A targeted treatment to strengthen the follicle, stimulate circulation and support healthier, fuller hair over time.',
        process: [
          'Scalp Diagnosis',
          'Stimulating Cleanse',
          'Anti-Loss Serum',
          'Circulation Massage',
        ],
      },
      {
        slug: 'royal-deluxe-head-spa',
        name: 'Royal Deluxe Head Spa',
        therapists: 1,
        duration: '90 min',
        price: 175,
        description:
          'The complete Head Spa journey — cleansing, exfoliation, treatment and extended massage for total scalp and sensory renewal.',
        process: [
          'Consultation',
          'Cleansing & Exfoliation',
          'Aromatic Steam',
          'Deluxe Treatment',
          'Extended Massage',
        ],
      },
    ],
  },
  {
    id: 'hand-foot',
    name: 'Hand & Foot Rituals',
    eyebrow: 'Exclusive Treatment',
    tagline: 'Care from fingertips to soles',
    intro:
      'Restorative rituals for hands and feet — relieving tired, aching extremities with warm therapy, pressure work and meticulous care.',
    image: '/images/photos/card-thai-stretch.webp',
    treatments: [
      {
        slug: 'royal-ritual',
        name: 'Royal Ritual',
        therapists: 1,
        duration: '90 min',
        price: 95,
        description:
          'A soothing hand-and-foot ritual combining warm therapy, reflex pressure work and nourishing care to revive tired extremities.',
        process: ['Warm Soak', 'Exfoliation', 'Reflex Pressure', 'Nourishing Care'],
      },
      {
        slug: 'special-royal-ritual',
        name: 'Special Royal Ritual',
        subtitle: 'Two therapists',
        therapists: 2,
        duration: '90 min',
        price: 175,
        featured: true,
        description:
          'An elevated hand-and-foot experience with two therapists working simultaneously for continuous, immersive relaxation.',
        process: [
          'Warm Soak',
          'Dual Exfoliation',
          'Synchronised Pressure Work',
          'Nourishing Care',
        ],
      },
      {
        slug: 'imperial-therapy',
        name: 'Imperial Therapy',
        subtitle: 'Hand, foot & facial care',
        therapists: 2,
        duration: '90 min',
        price: 199,
        description:
          'Our most complete ritual — hand, foot and facial care combined, delivered by two therapists for head-to-toe restoration.',
        process: [
          'Hand Ritual',
          'Foot Ritual',
          'Facial Care',
          'Relaxation & Finishing',
        ],
      },
    ],
  },
  {
    id: 'facial',
    name: 'Luxury Facial Therapy',
    eyebrow: 'Aesthetic Innovation',
    tagline: 'Beauty & Wellness',
    intro:
      'Advanced technology, natural beauty. True therapy for your skin and true relaxation for your soul — no injections, no surgery, no downtime.',
    image: '/images/photos/owner-facial.webp',
    treatments: [
      {
        slug: 'luxury-facial-therapy',
        name: 'Luxury Facial Therapy',
        subtitle: 'Deep facial massage & natural rejuvenation',
        therapists: 1,
        duration: '90 min',
        price: 185,
        featured: true,
        description:
          'A deeply restorative facial combining deep cleansing, aromatic steam, facial muscle massage and LED photon therapy for brighter, naturally radiant skin.',
        process: [
          'Deep Cleansing',
          'Aromatic Steam',
          'Facial Muscle Massage',
          'Lymphatic Drainage',
          'Collagen Gel Mask',
          'LED Photon Therapy',
        ],
      },
      {
        slug: 'gua-sha-facial-sculpting',
        name: 'Gua Sha Facial Sculpting',
        subtitle: 'Advanced Glass Skin Therapy',
        therapists: 1,
        duration: '90 min',
        price: 220,
        description:
          'Traditional Gua Sha sculpting elevated with advanced glass-skin technology — lifting, contouring and defining for a luminous, sculpted complexion.',
        process: [
          'Deep Cleansing',
          'Gua Sha Sculpting',
          'Lift & Contour',
          'Glass Skin Treatment',
          'Finishing Glow',
        ],
      },
    ],
  },
];

/** Flat lookup by slug (handy for future detail routes). */
export const allTreatments: Treatment[] = categories.flatMap((c) => c.treatments);

/** Four Elements — a brand signature. */
export const fourElements = [
  { symbol: '🌱', name: 'Earth', meaning: 'Stability & Strength' },
  { symbol: '💧', name: 'Water', meaning: 'Flow & Hydration' },
  { symbol: '🌬', name: 'Wind', meaning: 'Movement & Lightness' },
  { symbol: '🔥', name: 'Fire', meaning: 'Energy & Transformation' },
] as const;

/** The four trust pillars from the poster benefit row. */
export const trustBadges = [
  'Traditional Thai Wisdom',
  'Anatomical Precision',
  'Herbal Oil Therapy',
  'Safe & Professional',
] as const;

export const whyVeraD = [
  {
    title: 'Expert Therapists',
    body: 'Highly trained and experienced — over fifteen years of practice honed in London.',
  },
  {
    title: 'Premium Herbal Oils',
    body: 'Custom-blended for your body and your treatment, never one-size-fits-all.',
  },
  {
    title: 'Anatomical Approach',
    body: 'Safe, effective and precise — technique guided by a real understanding of the body.',
  },
  {
    title: 'Four-Element Assessment',
    body: 'Earth, Water, Wind and Fire — a personalised reading that shapes every treatment.',
  },
  {
    title: 'Luxury Environment',
    body: 'Relaxing, private and appointment-only — a sanctuary made for you alone.',
  },
] as const;
