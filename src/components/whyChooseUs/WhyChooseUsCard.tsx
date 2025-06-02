// components/WhyChooseUsCard.jsx
import { ComponentType } from "react";

interface WhyChooseUsCardProps {
  title: string;
  description: string;
  icon: ComponentType<{ className?: string; "aria-hidden"?: boolean }>;
}

export default function WhyChooseUsCard({
  title,
  description,
  icon: Icon,
}: WhyChooseUsCardProps) {
  return (
    <div
      className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl hover:bg-royal-blue group"
      role="article"
      aria-labelledby={`why-choose-${title.toLowerCase().replace(/\s/g, "-")}`}
    >
      <Icon
        className="text-[#1E3A8A] group-hover:text-white text-4xl mb-4"
        aria-hidden={true}
      />
      <h3
        id={`why-choose-${title.toLowerCase().replace(/\s/g, "-")}`}
        className="text-xl font-semibold text-[#1E3A8A] group-hover:text-white mb-3"
      >
        {title}
      </h3>
      <p className="text-[#1F2937] text-sm sm:text-base group-hover:text-white">
        {description}
      </p>
    </div>
  );
}
