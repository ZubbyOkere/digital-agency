// components/TestimonialCard.tsx
import Image from "next/image";

interface TestimonialCardProps {
  name: string;
  quote: string;
  photo: string;
  location: string;
}

export default function TestimonialCard({
  name,
  quote,
  photo,
  location,
}: TestimonialCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center w-full max-w-md mx-auto">
      <Image
        src={photo}
        alt={`${name} photo`}
        width={80}
        height={80}
        className="rounded-full mb-4 object-cover"
        priority={false}
      />
      <p className="text-[#1F2937] text-sm sm:text-base mb-4 italic">
        “{quote}”
      </p>
      <h4 className="text-lg font-semibold text-[#1E3A8A]">{name}</h4>
      <span>{location}</span>
    </div>
  );
}
