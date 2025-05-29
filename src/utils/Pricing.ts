// utils/pricing.ts
export interface PricingPlan {
  title: string;
  price: string;
  features: string[];
  isFeatured?: boolean;
  whatsappLink: string;
}

export const pricingPlans: PricingPlan[] = [
  {
    title: "Corporate Website",
    price: "$250–$500",
    features: [
      "Domain & Hosting (1 Year)",
      "Professional Business Emails",
      "Up to 5 Custom Pages",
      "Logo Design & Branding",
      "On-Page SEO Optimization",
      "Delivery: 7–14 Days",
    ],
    whatsappLink: "https://shorturl.at/YfsOA",
  },
  {
    title: "E-commerce & Web Apps",
    price: "$1,000–$5,000",
    features: [
      "Domain & Hosting (1 Year)",
      "Professional Business Emails",
      "Logo Design & Branding",
      "On-Page SEO Optimization",
      "Unlimited Dynamic Pages",
      "Secure Payment Gateway",
      "1 Month Post-Launch Support",
      "Analytics Integration",
      "Delivery: 6–12 Weeks",
    ],
    isFeatured: true,
    whatsappLink: "https://shorturl.at/YfsOA",
  },
  {
    title: "Mobile Applications",
    price: "$2,000–$10,000",
    features: [
      "Custom iOS/Android App Development",
      "User-Friendly UI/UX Design",
      "Integration with Web Platforms",
      "Analytics & Crash Reporting",
      "1 Month Post-Launch Support",
      "Delivery: 8–12 Weeks",
    ],
    whatsappLink: "https://shorturl.at/YfsOA",
  },
];

export interface CustomService {
  title: string;
  features: string[];
}

export const customServices: CustomService[] = [
  {
    title: "Digital Marketing",
    features: [
      "Targeted Ad Campaigns (Google Ads, Social Ads)",
      "Content Marketing & Email Campaigns",
      "Conversion Rate Optimization",
      "Detailed Performance Analytics",
      "Custom Strategy Development",
    ],
  },
  {
    title: "SEO Optimization",
    features: [
      "Comprehensive Keyword Research",
      "On-Page & Technical SEO",
      "Link Building & Content Optimization",
      "Local SEO for Your Target Markets",
      "Monthly Performance Reports",
    ],
  },
  {
    title: "Social Media Management",
    features: [
      "Custom Content Creation & Scheduling",
      "Engagement & Community Management",
      "Social Media Advertising",
      "Brand Voice Development",
      "Analytics & Growth Tracking",
    ],
  },
];

export const customServicesWhatsappLink: string = "https://shorturl.at/YfsOA";
