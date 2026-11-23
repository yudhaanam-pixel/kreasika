export interface ServiceItem {
  id: string;
  iconName: string;
  badge?: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  category: 'photography' | 'videography' | 'design' | 'social_media' | 'web';
  features: string[];
  deliverables: string[];
  turnaroundTime: string;
  priceStartingFrom: string;
}

export interface PortfolioProject {
  id: string;
  title: string;
  client: string;
  category: 'photography' | 'videography' | 'design' | 'social_media';
  categoryLabel: string;
  thumbnailUrl: string;
  galleryImages: string[];
  description: string;
  impactMetric: string;
  serviceTags: string[];
  year: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  company: string;
  avatarUrl: string;
  rating: number;
  content: string;
  highlightMetric?: string;
  highlightMetricLabel?: string;
  serviceUsed: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  tagline: string;
  badge?: string;
  isPopular?: boolean;
  projectPrice: string;
  monthlyPrice: string;
  features: {
    included: boolean;
    text: string;
  }[];
  ctaText: string;
  highlightNotes: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}
