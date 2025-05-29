import Image from "next/image";

// components/TechStackItem.jsx
export default function TechStack({
  name,
  logo,
}: {
  name: string;
  logo: string;
}) {
  return (
    <div className="flex flex-col items-center justify-center p-4 min-w-[120px] sm:min-w-[150px]">
      <Image
        src={logo}
        alt={`${name} logo`}
        width={100}
        height={100}
        className="w-12 h-12 sm:w-16 sm:h-16 mb-2 brightness-200"
        aria-hidden="true"
      />
      <span className="text-[#E5E7EB] text-sm sm:text-base font-medium">
        {name}
      </span>
    </div>
  );
}
