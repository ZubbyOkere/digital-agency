// components/Portfolio.tsx
import { portfolio } from "@/utils/Portfolio";
import PortfolioCard from "./PortfolioCard";
import Link from "next/link";

export default function Portfolio() {
  return (
    <section className="bg-white py-16 sm:py-16 w-full max-w-[100vw] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-[#1E3A8A] text-center mb-4">
          Portfolio
        </h2>
        <p className="text-[#1F2937] text-base sm:text-lg text-center max-w-3xl mx-auto mb-8">
          Explore our diverse portfolio of successful projects, showcasing our
          expertise in delivering innovative digital solutions. From responsive
          websites and mobile apps to SEO-driven campaigns and e-commerce
          platforms, our work empowers businesses to thrive in the digital
          landscape.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolio.map((project) => (
            <PortfolioCard
              key={project.title}
              title={project.title}
              description={project.description}
              image={project.image}
            />
          ))}
        </div>
        <div className="flex justify-center mt-8">
          <Link
            href="/contact"
            className="bg-[#1E3A8A] text-white px-6 py-3 rounded-md text-base font-medium hover:bg-[#60A5FA] transition-colors duration-200"
            aria-label="Request portfolio details"
          >
            Request Portfolio Details
          </Link>
        </div>
      </div>
    </section>
  );
}
