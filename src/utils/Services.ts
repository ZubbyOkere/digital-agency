// utils/services.js
import {
  FaGlobe,
  FaMobileAlt,
  FaSearch,
  FaShoppingCart,
  FaBullhorn,
  FaUsers,
} from "react-icons/fa";
import { ComponentType } from "react";

interface Service {
  title: string;
  description: string;
  icon: ComponentType<{ className?: string; "aria-hidden"?: boolean }>;
}

export const services: Service[] = [
  {
    title: "Website Development",
    description:
      "Craft stunning, responsive websites tailored to your brand. Our expert developers deliver user-friendly, SEO-optimized websites using modern technologies like Next.js and Tailwind CSS to enhance performance and engagement.",
    icon: FaGlobe,
  },
  {
    title: "App Development",
    description:
      "Build powerful mobile and web applications customized for your business needs. From iOS and Android apps to progressive web apps, we create scalable, secure solutions to drive client engagement and growth.",
    icon: FaMobileAlt,
  },
  {
    title: "SEO (Search Engine Optimization)",
    description:
      "Boost your online visibility with our proven SEO strategies. We optimize your website for search engines, improve rankings, and drive organic traffic to maximize your brand’s reach and conversions.",
    icon: FaSearch,
  },
  {
    title: "E-commerce Solutions",
    description:
      "Launch and optimize your online store with our e-commerce expertise. We build secure, user-friendly platforms with seamless payment integration, designed to increase sales and customer satisfaction.",
    icon: FaShoppingCart,
  },
  {
    title: "Digital Marketing",
    description:
      "Grow your brand with comprehensive digital marketing services. From PPC campaigns to content marketing, we create data-driven strategies to enhance your online presence and achieve measurable results.",
    icon: FaBullhorn,
  },
  {
    title: "Social Media Management",
    description:
      "Engage your audience with expert social media management. We create compelling content, manage campaigns, and analyze performance across platforms like Instagram, X, and LinkedIn to build your brand’s community.",
    icon: FaUsers,
  },
];
