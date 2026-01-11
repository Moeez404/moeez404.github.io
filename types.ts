import { LucideIcon } from "lucide-react";

export interface Skill {
  name: string;
  category: 'Game Dev' | 'Frontend' | 'Backend' | 'Database' | 'Language';
  icon?: LucideIcon;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string; // For the detail page
  role?: string;
  year?: string;
  tags: string[];
  features?: string[]; // Added dynamic features
  imageUrl: string;
  link?: string;
  github?: string;
  featured?: boolean;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: LucideIcon;
}