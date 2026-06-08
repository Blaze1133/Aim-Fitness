import type { LucideIcon } from "lucide-react";
import {
  Brain,
  ChevronRight,
  Clock3,
  Dumbbell,
  MapPin,
  Quote,
  Salad,
  Scale,
  Timer,
  Users,
  Zap,
} from "lucide-react";

export const siteNav = [
  { label: "Training", href: "#training" },
  { label: "Programs", href: "#classes" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
] as const;

export const mobileNav = [
  { label: "Training", href: "#training" },
  { label: "Programs", href: "#classes" },
  { label: "Gallery", href: "#gallery" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
] as const;

export const heroImage = "/images/hero.jpg";

export const facilityImage = "/images/facility.jpg";

export type IconItem = {
  label: string;
  icon: LucideIcon;
};

export const disciplines: IconItem[] = [
  { label: "Nutrition Guidance", icon: Salad },
  { label: "Cardio Training", icon: Zap },
  { label: "Strength Build", icon: Dumbbell },
  { label: "Fat Loss", icon: Scale },
  { label: "HIIT Workouts", icon: Timer },
];

export const edgeFeatures = [
  {
    title: "Elite Equipment",
    description: "Top-tier competition racks and calibrated plates for maximum precision.",
    icon: Zap,
  },
  {
    title: "Expert Coaching",
    description: "Performance specialists focused on biomechanics and mental fortitude.",
    icon: Brain,
  },
  {
    title: "Driven Community",
    description: "An exclusive network of athletes committed to relentless improvement.",
    icon: Users,
  },
] as const;

export const galleryImages = [
  {
    src: "/images/dumbbells.jpg",
    alt: "Heavy training session",
    className: "h-[280px] sm:h-[320px] md:col-span-2 md:row-span-2 md:h-auto",
    sizes: "(min-width: 768px) 50vw, 100vw",
  },
  {
    src: facilityImage,
    alt: "Facility equipment",
    className: "h-[240px] sm:h-[280px] md:h-[320px]",
    sizes: "(min-width: 768px) 25vw, 100vw",
  },
  {
    src: "/images/cardio.jpg",
    alt: "Group class",
    className: "h-[240px] sm:h-[280px] md:h-[320px]",
    sizes: "(min-width: 768px) 25vw, 100vw",
  },
  {
    src: "/images/brand-sign.jpg",
    alt: "Functional training",
    className: "h-[240px] sm:h-[280px] md:col-span-2 md:h-[320px]",
    sizes: "(min-width: 768px) 50vw, 100vw",
  },
] as const;

export const testimonials = [
  {
    quote:
      "AIM Fitness is clean, well-equipped, and beginner-friendly. The trainers are respectful and always ready to help. Definitely one of the best gyms to join!",
    name: "Lakshmisri Akula",
    initials: "LA",
    role: "2 months ago",
  },
  {
    quote:
      "Cleanliness maintained, professional trainers, beginner level to advanced equipment. Highly recommend this gym for both women and men.",
    name: "Aksha Epuri",
    initials: "AE",
    role: "6 months ago",
  },
  {
    quote:
      "Good gym with modern equipment and a very positive atmosphere. The trainers here are helpful with workout plans and diet tips. The gym is always clean. Highly recommend this gym for beginners and fitness lovers!",
    name: "Suseel Kumar Nakka",
    initials: "SN",
    role: "6 months ago",
  },
] as const;

export const inquiryGoals = [
  "Hypertrophy & Power",
  "Elite Conditioning",
  "Competition Prep",
  "General Fitness",
] as const;

export const contact = {
  address:
    "First floor, Devi Priya Residency, D/no: 1-69-6, Rythu Bazaar Rd, Opposite Rythu Bazar, Sector 4, MVP Colony, Visakhapatnam, Andhra Pradesh 530017",
  shortAddress: "MVP Colony, Visakhapatnam 530017",
  access: "5.0 ★★★★★ · 160 Reviews",
  email: "hq@aimfitness.com",
  phone: "95506 62004",
  rating: "5.0",
  reviews: "160 Reviews",
  coordinates: "17.7447° N, 83.3302° E",
  whatsappUrl: "https://wa.me/919550662004",
  mapIcon: MapPin,
  clockIcon: Clock3,
  submitIcon: ChevronRight,
  quoteIcon: Quote,
} as const;
