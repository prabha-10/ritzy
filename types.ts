
import { LucideIcon } from "lucide-react";

// --- New Structure Types (Mind Map aligned) ---

export type ServiceCategoryType =
  | 'home-automation'
  | 'commercial'
  | 'home-theater'
  | 'living-room'
  | 'multi-room-av'
  | 'security'
  | 'controllers';

export interface Brand {
  id: string;
  name: string;
  logo: string; // Path to image
  website?: string;
  description?: string;
}

export interface ServiceFeature {
  title: string;
  description?: string;
  brands?: string[]; // Brand IDs associated with this specific feature
  subProducts?: string[]; // e.g., ["Fan", "TV", "Geyser"] for Climate Control
  useCases?: string[]; // e.g. for Commercial
  image?: string;
}

export interface ServiceSection {
  id: string; // e.g., 'home-automation', 'commercial'
  title: string; // e.g., "Home Automation"
  description: string;
  image?: string;
  icon: string; // Lucide icon name or image path

  // Row 2 of Mind Map: Features / Scope / Elements
  offers: ServiceFeature[];

  // Row 3 of Mind Map: Brands
  // We store brand IDs here to link to the centralized Brand definitions
  supportedBrands: string[];

  // Specific for Commercial or others that have sub-sectors
  subSectors?: string[];

  // Additional for details
  heroImage?: string;
}

// --- End New Structure Types ---

// Keep existing types for now to avoid breaking current build until fully migrated
export enum ServiceCategory {
  HOME_AUTOMATION = 'Home Automation',
  HOME_THEATER = 'Home Theater',
  COMMERCIAL = 'Commercial Automation',
  EXTERIOR = 'Exterior & Security',
}

export interface Service {
  id: string;
  title: string;
  description: string;
  category: ServiceCategory;
  icon: LucideIcon;
  features: string[];
  image: string;
}

export interface Product {
  id: string;
  name: string;
  category: string;
  description: string;
  priceRange?: string; // e.g. "$$$"
  image: string;
}

export interface NavItem {
  label: string;
  path: string;
  subItems?: NavItem[];
}

export interface PortfolioProject {
  id: string;
  title: string;
  client: string;
  categories: string[];
  year: string;
  image: string;
}

export interface ServiceDetailFeature {
  title: string;
  description: string;
  image: string;
}

export interface ServiceDetailData {
  id: string;
  title: string;
  subtitle: string;
  heroImage: string;
  introTitle: string;
  introText: string;
  features: ServiceDetailFeature[];
  stats?: { label: string; value: string }[];
}

export interface ProductVariant {
  name: string;
  price: string;
  image: string;
}

export interface ProductFAQ {
  question: string;
  answer: string;
}

export interface ProductDetailData {
  id: string;
  name: string;
  tagline: string;
  rating: number;
  reviews: number;
  heroImage: string;
  description: string;
  quote: string;
  highlights: {
    title: string;
    description: string;
    icon?: LucideIcon;
  }[];
  variantsTitle: string;
  variants: ProductVariant[];
  bannerTitle: string;
  bannerSubtitle: string;
  bannerImage: string;
  featureGrid: {
    title: string;
    description: string;
    image: string;
  }[];
  faqs: ProductFAQ[];
  closingTitle: string;
  closingImage: string;
}

export interface PortfolioDetailData {
  id: string;
  title: string;
  subtitle: string;
  heroImage: string;
  overlayStats: {
    label: string;
    value: string;
  }[];
  descriptionTitle: string;
  description: string;
  details: {
    label: string;
    value: string;
  }[];
  gallery: string[];
}

// JSON Content Types for CMS
export interface ServiceContent {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  category: string;
  icon: string; // lucide-react icon name
  features: string[];
  cardImage: string;
  // Detail page fields
  heroImage: string;
  subtitle: string;
  introTitle: string;
  introText: string;
  featureSections: {
    title: string;
    description: string;
    image: string;
  }[];
}

export interface ProductContent {
  id: string;
  slug: string;
  name: string;
  category: string;
  shortDescription: string;
  cardImage: string;
  // Detail page fields
  heroImage: string;
  tagline: string;
  fullDescription: string;
  quote?: string;
  highlights: {
    title: string;
    description: string;
    icon: string;
  }[];
  variants?: {
    name: string;
    price: string;
    image: string;
  }[];
  bannerImage?: string;
  bannerTitle?: string;
  bannerSubtitle?: string;
  featureGrid?: {
    title: string;
    description: string;
    image: string;
  }[];
  faqs?: {
    question: string;
    answer: string;

  }[];
}

export interface PortfolioContent {
  id: string;
  slug: string;
  title: string;
  client: string;
  categories: string[];
  year: string;
  cardImage: string;
  // Detail page fields
  heroImage: string;
  subtitle: string;
  overview: string;
  challenge?: string;
  solution?: string;
  results?: string;
  gallery?: string[];
  testimonial?: {
    quote: string;
    author: string;
  };
  stats?: {
    label: string;
    value: string;
  }[];
}
