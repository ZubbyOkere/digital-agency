// components/Services.jsx
import { services } from "@/utils/Services";
import ServiceCard from "./ServiceCard";

export default function Services() {
  return (
    <section className="bg-[#E5E7EB] py-12 sm:py-16 w-full max-w-[100vw] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-[#1E3A8A] text-center mb-4">
          Our Services
        </h2>
        <p className="text-[#1F2937] text-base sm:text-lg text-center max-w-2xl mx-auto mb-8">
          Discover our comprehensive digital solutions designed to elevate your
          brand and drive business success.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <ServiceCard
              key={service.title}
              title={service.title}
              description={service.description}
              icon={service.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
