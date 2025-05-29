// app/services/page.tsx
import Link from "next/link";

import Technologies from "@/components/techStack/Technologies";
import { workflowSteps } from "@/utils/OurServices";
import WorkflowCard from "@/components/services/WorkFlowCard";
import Hero from "@/components/HeroSections";

export default async function Services() {
  return (
    <>
      <Hero
        title="Our Services"
        description="Explore our comprehensive digital solutions, from cutting-edge website and mobile app development to e-commerce, SEO, and digital marketing, designed to drive your business forward."
        ctaText="Get Started"
        ctaLink="/contact"
        backgroundImage="https://images.unsplash.com/photo-1509718443690-d8e2fb3474b7?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
      <div className="bg-white">
        <section className="py-12 sm:py-16 w-full max-w-[100vw] overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1E3A8A] text-center mb-4">
              What We Offer to Your Business
            </h1>
            <p className="text-[#1F2937] text-base sm:text-lg text-center max-w-3xl mx-auto mb-8">
              We specialize in crafting high-performance websites, mobile apps,
              and e-commerce platforms that elevate your brand. Our expert
              development team leverages cutting-edge technologies to deliver
              responsive, user-centric solutions. Beyond development, we enhance
              your online presence with strategic SEO, targeted digital
              marketing, and engaging social media management. Partner with us
              to transform your digital vision into measurable success with
              creativity, precision, and excellence.
            </p>
          </div>
        </section>

        <section className="bg-[#E5E7EB] py-12 sm:py-16 w-full max-w-[100vw] overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1E3A8A] text-center mb-4">
              Our Six-Step Service Delivery Workflow
            </h2>
            <p className="text-[#1F2937] text-base sm:text-lg text-center max-w-3xl mx-auto mb-8">
              We follow a structured six-step process to deliver outstanding
              results for your web development, mobile app development,
              e-commerce solutions, SEO, digital marketing, and social media
              projects. Each step is designed to transform your vision into
              reality with precision and impact.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {workflowSteps.map((step) => (
                <WorkflowCard
                  key={step.title}
                  title={step.title}
                  description={step.description}
                />
              ))}
            </div>
          </div>
        </section>

        <Technologies />
        <section className="bg-white py-12 sm:py-16 w-full max-w-[100vw] overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1E3A8A] text-center mb-4">
              Why Our Process Works
            </h2>
            <p className="text-[#1F2937] text-base sm:text-lg text-center max-w-3xl mx-auto mb-8">
              Our six-step workflow ensures your website, mobile app, e-commerce
              platform, SEO, digital marketing, or social media project is
              delivered with precision and impact. By keeping you involved at
              key stages, we guarantee a final product that reflects your vision
              and drives measurable results. We’re committed to transparency,
              quality, and your success, making us the ideal partner for your
              digital journey.
            </p>
            <div className="flex justify-center mb-10">
              <Link
                href="/contact"
                className="bg-[#1E3A8A] text-white px-6 py-3 rounded-md text-base font-medium hover:bg-[#60A5FA] transition-colors duration-200"
                aria-label="Contact us to start your project"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
