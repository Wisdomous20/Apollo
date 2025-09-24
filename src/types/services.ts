export enum ServiceCategory {
  INJECTION_THERAPIES = 'INJECTION_THERAPIES',
  IV_DRIP_THERAPIES = 'IV_DRIP_THERAPIES',
  ADVANCED_WELLNESS_THERAPIES = 'ADVANCED_WELLNESS_THERAPIES',
}

export interface ServiceItem {
  id: string;
  name: string;
  category: ServiceCategory;
  description: string;
  duration: string;
  price?: number;
  isActive: boolean;
  icon?: string;
}

export interface ServiceCategoryInfo {
  category: ServiceCategory;
  title: string;
  description: string;
  icon: string;
  services: ServiceItem[];
}

// Injection Therapies
export const INJECTION_THERAPY_SERVICES: ServiceItem[] = [
  {
    id: 'ascorbic-acid',
    name: 'Ascorbic Acid (Vitamin C) Injections',
    category: ServiceCategory.INJECTION_THERAPIES,
    description:
      'High-dose vitamin C injections to boost immune system and enhance collagen production.',
    duration: '15-20 min',
    isActive: true,
    icon: '💉',
  },
  {
    id: 'omega-b-complex',
    name: 'Omega B Complex Injections',
    category: ServiceCategory.INJECTION_THERAPIES,
    description:
      'Essential B vitamins to support energy metabolism and nervous system function.',
    duration: '10-15 min',
    isActive: true,
    icon: '💉',
  },
  {
    id: 'biotin',
    name: 'Biotin Injections',
    category: ServiceCategory.INJECTION_THERAPIES,
    description:
      'Support healthy hair, skin, and nails with targeted biotin therapy.',
    duration: '10-15 min',
    isActive: true,
    icon: '💉',
  },
  {
    id: 'glutathione',
    name: 'Glutathione Injections',
    category: ServiceCategory.INJECTION_THERAPIES,
    description:
      'Powerful antioxidant therapy for detoxification and skin brightening.',
    duration: '15-20 min',
    isActive: true,
    icon: '💉',
  },
  {
    id: 'mic-injections',
    name: 'MIC Injections (Methionine, Inositol, Choline, Cyanocobalamin)',
    category: ServiceCategory.INJECTION_THERAPIES,
    description:
      'Lipotropic injections to support metabolism and weight management.',
    duration: '15-20 min',
    isActive: true,
    icon: '💉',
  },
  {
    id: 'methylcobalamin',
    name: 'Methylcobalamin Injections',
    category: ServiceCategory.INJECTION_THERAPIES,
    description:
      'Active form of vitamin B12 for energy support and neurological health.',
    duration: '10-15 min',
    isActive: true,
    icon: '💉',
  },
  {
    id: 'testosterone-supplementation',
    name: 'Testosterone Supplementation (including Testosterone Cypionate)',
    category: ServiceCategory.INJECTION_THERAPIES,
    description:
      'Hormone replacement therapy for men with low testosterone levels.',
    duration: '20-30 min',
    isActive: true,
    icon: '💉',
  },
  {
    id: 'hormone-replacement',
    name: 'Hormone Replacement Therapy',
    category: ServiceCategory.INJECTION_THERAPIES,
    description:
      'Comprehensive hormone balancing therapy for optimal wellness.',
    duration: '30-45 min',
    isActive: true,
    icon: '💉',
  },
];

// IV Drip Therapies
export const IV_DRIP_THERAPY_SERVICES: ServiceItem[] = [
  {
    id: 'immune-booster-iv',
    name: 'Immune Booster IV',
    category: ServiceCategory.IV_DRIP_THERAPIES,
    description:
      'Powerful blend of vitamins and minerals to strengthen your immune system.',
    duration: '45-60 min',
    isActive: true,
    icon: '🩺',
  },
  {
    id: 'energy-booster-iv',
    name: 'Energy Booster IV',
    category: ServiceCategory.IV_DRIP_THERAPIES,
    description:
      'Revitalize your energy levels with B vitamins and essential nutrients.',
    duration: '45-60 min',
    isActive: true,
    icon: '⚡',
  },
  {
    id: 'strength-conditioning-iv',
    name: 'Strength & Conditioning IV',
    category: ServiceCategory.IV_DRIP_THERAPIES,
    description:
      'Optimize athletic performance and recovery with targeted nutrients.',
    duration: '60-75 min',
    isActive: true,
    icon: '💪',
  },
  {
    id: 'anti-aging-iv',
    name: 'Anti-Aging IV',
    category: ServiceCategory.IV_DRIP_THERAPIES,
    description:
      'Combat aging with antioxidants and skin-supporting nutrients.',
    duration: '60-75 min',
    isActive: true,
    icon: '✨',
  },
  {
    id: 'weight-loss-support-iv',
    name: 'Weight Loss Support IV',
    category: ServiceCategory.IV_DRIP_THERAPIES,
    description:
      'Support your weight loss journey with metabolism-boosting nutrients.',
    duration: '45-60 min',
    isActive: true,
    icon: '🎯',
  },
  {
    id: 'apollo-reboot',
    name: 'Apollo Reboot',
    category: ServiceCategory.IV_DRIP_THERAPIES,
    description: 'Our signature recovery and rejuvenation IV therapy.',
    duration: '60-75 min',
    isActive: true,
    icon: '🔄',
  },
  {
    id: 'apollo-myers-cocktail',
    name: "Apollo Myers' Cocktail",
    category: ServiceCategory.IV_DRIP_THERAPIES,
    description: 'Classic nutrient blend for overall wellness and vitality.',
    duration: '45-60 min',
    isActive: true,
    icon: '🍸',
  },
  {
    id: 'apollo-planish-iv',
    name: 'Apollo Planish IV',
    category: ServiceCategory.IV_DRIP_THERAPIES,
    description: 'Specialized IV therapy for cellular repair and regeneration.',
    duration: '60-75 min',
    isActive: true,
    icon: '🌿',
  },
  {
    id: 'apollo-cinderella-drip',
    name: 'Apollo Signature Cinderella Drip',
    category: ServiceCategory.IV_DRIP_THERAPIES,
    description:
      'Luxury beauty and wellness IV for radiant skin and enhanced vitality.',
    duration: '75-90 min',
    isActive: true,
    icon: '👑',
  },
  {
    id: 'apollo-vitamin-c-iv',
    name: 'Apollo Vitamin C IV Solution',
    category: ServiceCategory.IV_DRIP_THERAPIES,
    description:
      'High-dose vitamin C therapy for immune support and antioxidant protection.',
    duration: '45-60 min',
    isActive: true,
    icon: '🍊',
  },
  {
    id: 'iron-infusions',
    name: 'Iron Infusions',
    category: ServiceCategory.IV_DRIP_THERAPIES,
    description:
      'Treat iron deficiency anemia with safe and effective iron therapy.',
    duration: '60-90 min',
    isActive: true,
    icon: '🩸',
  },
  {
    id: 'apollo-super-immune-booster',
    name: 'Apollo Super Immune Booster Infusions',
    category: ServiceCategory.IV_DRIP_THERAPIES,
    description: 'Maximum strength immune support for optimal protection.',
    duration: '75-90 min',
    isActive: true,
    icon: '🛡️',
  },
];

// Advanced Wellness Therapies
export const ADVANCED_WELLNESS_THERAPY_SERVICES: ServiceItem[] = [
  {
    id: 'alpha-stimulation',
    name: 'Alpha Stimulation Therapy',
    category: ServiceCategory.ADVANCED_WELLNESS_THERAPIES,
    description:
      'Advanced brainwave stimulation for enhanced mental clarity and relaxation.',
    duration: '30-45 min',
    isActive: true,
    icon: '🧠',
  },
  {
    id: 'olylife-tera-p90',
    name: 'OlyLife Tera P90 Pulsed Electromagnetic',
    category: ServiceCategory.ADVANCED_WELLNESS_THERAPIES,
    description:
      'Cutting-edge electromagnetic therapy for cellular regeneration.',
    duration: '45-60 min',
    isActive: true,
    icon: '⚡',
  },
  {
    id: 'light-stimulation-led-bed',
    name: 'Light Stimulation LED Bed Therapy',
    category: ServiceCategory.ADVANCED_WELLNESS_THERAPIES,
    description: 'Full-body LED therapy for skin rejuvenation and healing.',
    duration: '20-30 min',
    isActive: true,
    icon: '💡',
  },
];

// All services combined
export const ALL_SERVICES: ServiceItem[] = [
  ...INJECTION_THERAPY_SERVICES,
  ...IV_DRIP_THERAPY_SERVICES,
  ...ADVANCED_WELLNESS_THERAPY_SERVICES,
];

// Service categories with their information
export const SERVICE_CATEGORIES: ServiceCategoryInfo[] = [
  {
    category: ServiceCategory.INJECTION_THERAPIES,
    title: 'Injection Therapies',
    description: 'Targeted nutrient injections for optimal health and wellness',
    icon: '💉',
    services: INJECTION_THERAPY_SERVICES,
  },
  {
    category: ServiceCategory.IV_DRIP_THERAPIES,
    title: 'IV Drip Therapies',
    description: 'Comprehensive intravenous treatments for enhanced wellness',
    icon: '💧',
    services: IV_DRIP_THERAPY_SERVICES,
  },
  {
    category: ServiceCategory.ADVANCED_WELLNESS_THERAPIES,
    title: 'Advanced Wellness Therapies',
    description: 'Cutting-edge therapeutic technologies for holistic health',
    icon: '🔬',
    services: ADVANCED_WELLNESS_THERAPY_SERVICES,
  },
];

// Helper functions
export function getServiceById(id: string): ServiceItem | undefined {
  return ALL_SERVICES.find((service) => service.id === id);
}

export function getServicesByCategory(
  category: ServiceCategory
): ServiceItem[] {
  return ALL_SERVICES.filter((service) => service.category === category);
}

export function getCategoryInfo(
  category: ServiceCategory
): ServiceCategoryInfo | undefined {
  return SERVICE_CATEGORIES.find((cat) => cat.category === category);
}

export function getActiveServices(): ServiceItem[] {
  return ALL_SERVICES.filter((service) => service.isActive);
}
