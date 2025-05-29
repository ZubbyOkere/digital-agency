// components/Technologies.jsx
"use client";

import { techStack } from "@/utils/TechStack";
import TechStack from "./TechStack";

export default function Technologies() {
  // Duplicate techStack multiple times for seamless infinite scroll
  const extendedTechStack = [
    ...techStack,
    ...techStack,
    ...techStack,
    ...techStack,
  ];

  return (
    <section className="bg-[#1E3A8A] py-12 sm:py-16 w-full max-w-[100vw] overflow-hidden mb-11">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading and Sub-heading */}
        <div className="relative">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#FFFFFF] text-center mb-4">
            Technologies We Use
          </h1>
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-48 h-2 bg-[#60A5FA] rounded-full opacity-80"></div>
          <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-64 h-1 bg-[#FFFFFF] rounded-full opacity-60 rotate-3"></div>
        </div>
        <div className="relative mt-6">
          <h4 className="text-xl sm:text-2xl font-semibold text-[#E5E7EB] text-center mb-6">
            Our Tech Stack
          </h4>
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-32 h-2 bg-[#60A5FA] rounded-full opacity-80"></div>
          <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-40 h-1 bg-[#FFFFFF] rounded-full opacity-60 -rotate-3"></div>
        </div>

        {/* Description */}
        <p className="text-[#E5E7EB] text-base sm:text-lg text-center max-w-3xl mx-auto mb-8">
          We leverage cutting-edge technologies to deliver innovative digital
          solutions. From crafting responsive interfaces with{" "}
          <strong>HTML</strong>, <strong>CSS</strong>, and{" "}
          <strong>Tailwind CSS</strong>, to building dynamic applications with{" "}
          <strong>JavaScript</strong>, <strong>React.js</strong>, and{" "}
          <strong>Next.js</strong>, our front-end expertise ensures seamless
          user experiences. On the back end, we use <strong>Node.js</strong>,{" "}
          <strong>Express.js</strong>, <strong>MongoDB</strong>, and{" "}
          <strong>Supabase</strong> for robust, scalable systems. For e-commerce
          and content management, we specialize in <strong>WordPress</strong>,{" "}
          <strong>WooCommerce</strong>, and <strong>Shopify</strong>, empowering
          businesses with tailored, high-performance platforms.
        </p>

        {/* Infinite Slider */}
        <div className="overflow-hidden">
          <div className="flex animate-slide">
            {extendedTechStack.map((tech, index) => (
              <TechStack
                key={`${tech.name}-${index}`}
                name={tech.name}
                logo={tech.logo}
              />
            ))}
          </div>
        </div>
      </div>

      {/* CSS for Infinite Scroll */}
      <style jsx>{`
        .animate-slide {
          display: flex;
          width: max-content;
          animation: slide 30s linear infinite;
        }
        @keyframes slide {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-25%);
          }
        }
        @media (prefers-reduced-motion: reduce) {
          .animate-slide {
            animation: none;
          }
        }
      `}</style>
    </section>
  );
}
