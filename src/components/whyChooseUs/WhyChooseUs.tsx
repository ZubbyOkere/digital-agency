// components/WhyChooseUs.jsx
import { whyChooseUs } from "@/utils/WhyChooseUs";
import WhyChooseUsCard from "../WhyChooseUsCard";

export default function WhyChooseUs() {
  return (
    <section className="bg-[#E5E7EB] py-12 sm:py-16 w-full max-w-[100vw] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-[#1E3A8A] text-center mb-8">
          Why Choose Us For Your Next Project
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {whyChooseUs.map((item) => (
            <WhyChooseUsCard
              key={item.title}
              title={item.title}
              description={item.description}
              icon={item.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
