import CustomServicesCard from "@/components/CustomServicesCard";
import Hero from "@/components/HeroSections";
import PricingCard from "@/components/PricingCard";
import {
  customServices,
  customServicesWhatsappLink,
  pricingPlans,
} from "@/utils/Pricing";

export default async function Pricing() {
  return (
    <div className="bg-white">
      <Hero
        title="Pricing Plans"
        description="Discover flexible pricing options tailored to your needs. From website development to digital marketing, our transparent plans ensure value and results."
        ctaText="Get Started"
        ctaLink="/contact"
        backgroundImage="https://plus.unsplash.com/premium_photo-1661963874418-df1110ee39c1?q=80&w=1386&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
      <section className="py-12 sm:py-16 w-full max-w-[100vw] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h5 className="text-lg font-medium text-[#1F2937] text-center underline mb-2">
            Pricing Plan
          </h5>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1E3A8A] text-center mb-8">
            Web Development and App Pricing Plans
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pricingPlans.map((plan) => (
              <PricingCard
                key={plan.title}
                title={plan.title}
                price={plan.price}
                features={plan.features}
                isFeatured={plan.isFeatured}
                whatsappLink={plan.whatsappLink}
              />
            ))}
          </div>
          <h5 className="text-lg font-medium text-[#1F2937] text-center underline mb-4 mt-12 md:mt-18">
            Custom Digital Services
          </h5>
          <div className="grid grid-cols-1">
            <CustomServicesCard
              services={customServices}
              whatsappLink={customServicesWhatsappLink}
            />
          </div>
        </div>
      </section>
    </div>
  );
}
