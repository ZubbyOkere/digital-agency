// utils/whyChooseUs.js
import {
  FaRocket,
  FaUsersCog,
  FaLightbulb,
  FaShieldAlt,
  FaClock,
  FaTrophy,
} from "react-icons/fa";
import { ComponentType } from "react";

interface WhyChooseUs {
  title: string;
  description: string;
  icon: ComponentType<{ className?: string; "aria-hidden"?: boolean }>;
}

export const whyChooseUs: WhyChooseUs[] = [
  {
    title: "Innovative Solutions",
    description:
      "We deliver cutting-edge digital solutions tailored to your business, leveraging the latest technologies to drive growth and engagement.",
    icon: FaRocket,
  },
  {
    title: "Expert Team",
    description:
      "Our skilled professionals bring years of experience in web, app, and marketing to deliver exceptional results for your project.",
    icon: FaUsersCog,
  },
  {
    title: "Client-Centric Approach",
    description:
      "Your vision is our priority. We collaborate closely to ensure your project aligns with your goals and exceeds expectations.",
    icon: FaLightbulb,
  },
  {
    title: "Proven Results",
    description:
      "Our data-driven strategies in SEO, e-commerce, and digital marketing deliver measurable outcomes, boosting your brand’s success.",
    icon: FaTrophy,
  },
  {
    title: "Reliable Support",
    description:
      "We provide ongoing support and maintenance to ensure your digital solutions remain secure, updated, and high-performing.",
    icon: FaShieldAlt,
  },
  {
    title: "Timely Delivery",
    description:
      "We respect your deadlines, delivering projects on time without compromising quality, ensuring your business stays on track.",
    icon: FaClock,
  },
];
