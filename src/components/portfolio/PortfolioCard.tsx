// components/PortfolioCard.tsx
import { PortfolioItem } from "@/utils/Portfolio";
import Image from "next/image";

export default function PortfolioCard({
  title,
  description,
  image,
}: PortfolioItem) {
  return (
    <div
      className="relative block bg-white rounded-lg overflow-hidden transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-2xl group shadow-2xl shadow-gray-400"
      aria-label={`View ${title} project`}
    >
      <Image
        src={image}
        alt={`${title} screenshot`}
        width={400}
        height={192}
        className="w-full h-62 object-cover"
        priority={false}
      />
      <div className="absolute inset-0 bg-[#1E3A8A]/80 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300">
        <p className="text-white text-sm sm:text-base text-center px-4">
          {description}
        </p>
      </div>
    </div>
  );
}
