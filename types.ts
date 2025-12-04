
import { LucideIcon } from "lucide-react";

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
