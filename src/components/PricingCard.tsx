// components/pricing/PricingCard.tsx
import Link from "next/link";

interface PricingCardProps {
  title: string;
  price: string;
  features: string[];
  isFeatured?: boolean;
  whatsappLink: string;
}

export default function PricingCard({
  title,
  price,
  features,
  isFeatured = false,
  whatsappLink,
}: PricingCardProps) {
  return (
    <div
      className={`bg-white rounded-lg shadow-lg p-6 flex flex-col justify-between transition-all duration-300 hover:shadow-2xl ${
        isFeatured ? "scale-105 lg:scale-110" : ""
      }`}
    >
      <div>
        <h3 className="text-2xl font-semibold text-[#1E3A8A] mb-2">{title}</h3>
        <p className="text-3xl font-bold text-[#1F2937] mb-4">{price}</p>
        <ul className="space-y-2 mb-6">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <svg
                className="w-5 h-5 text-[#60A5FA] mr-2 mt-1"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="text-[#1F2937] text-base">{feature}</span>
            </li>
          ))}
        </ul>
      </div>
      <Link
        href={whatsappLink}
        className="block text-center bg-[#1E3A8A] text-white px-6 py-3 rounded-md text-base font-medium hover:bg-[#60A5FA] transition-colors duration-200"
        aria-label={`Start your ${title} project`}
        target="_blank"
        rel="noopener noreferrer"
      >
        Start Your Project
      </Link>
    </div>
  );
}
