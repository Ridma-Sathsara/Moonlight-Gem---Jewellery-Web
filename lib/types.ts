export interface FeaturedItem {
  id: number;
  title: string;
  description: string;
  image: string;
  badge: string;
  badgeStyle: string;
  link: string;
  hoverText: string;
  animationDelay?: string;
}

export interface Gem {
  id: number;
  title: string;
  description: string;
  image: string;
  link: string;
  animationDelay?: string;
}

export interface CustomerService {
  id: number;
  title: string;
  description: string;
  icon: string;
  animationDelay?: string;
}

export interface Testimonial {
  id: number;
  review: string;
  author: string;
  source: string;
  initials: string;
  animationDelay?: string;
}