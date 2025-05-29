// app/about/page.tsx
import Link from "next/link";
import Technologies from "@/components/techStack/Technologies";

import AboutAccordion from "@/components/about/AboutAccordian";
import FAQAccordion from "@/components/about/FaqAccordian";
import Hero from "@/components/HeroSections";

export default async function About() {
  return (
    <>
      <Hero
        title="About Us"
        description="We are redefining digital excellence through technology and vision. Every project we craft merges technical expertise with unwavering integrity, creative innovation, and a relentless pursuit of quality that transforms how brands connect with their audience."
        backgroundImage="https://images.unsplash.com/photo-1605379399642-870262d3d051?q=80&w=1506&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        ctaText="Get Started"
        ctaLink="/contact"
      />
      <div className="bg-white">
        <section className="py-12 sm:py-16 w-full max-w-[100vw] overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1E3A8A] text-center mb-4">
              Who We Are
            </h1>
            <p className="text-[#1F2937] text-base sm:text-lg text-center max-w-3xl mx-auto mb-8">
              At our core, we are a tech and digital solutions company dedicated
              to transforming businesses through innovative digital solutions.
              Our values—creativity, integrity, and excellence—drive us to
              deliver exceptional results. We specialize in website development,
              mobile and web app creation, SEO, e-commerce solutions, digital
              marketing, and social media management. With expertise in
              technologies like HTML, CSS, Tailwind CSS, JavaScript, React.js,
              Next.js, Node.js, Express.js, MongoDB, Supabase, WordPress,
              WooCommerce, and Shopify, our skilled team crafts tailored
              solutions that enhance online presence, engage audiences, and fuel
              growth. Partner with us to elevate your brand in the digital
              landscape.
            </p>
          </div>
        </section>
        <AboutAccordion />
        <section className="py-8 w-full max-w-[100vw] overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/contact"
              className="bg-[#1E3A8A] text-white px-6 py-3 rounded-md text-base font-medium hover:bg-[#60A5FA] transition-colors duration-200 text-center"
              aria-label="Contact us"
            >
              Contact Us
            </Link>
            <Link
              href="/services"
              className="bg-[#60A5FA] text-white px-6 py-3 rounded-md text-base font-medium hover:bg-[#1E3A8A] transition-colors duration-200 text-center"
              aria-label="Explore our services"
            >
              Explore Our Services
            </Link>
          </div>
        </section>

        <Technologies />
        <FAQAccordion />
      </div>
    </>
  );
}
