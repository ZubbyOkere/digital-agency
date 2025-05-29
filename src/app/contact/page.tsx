// app/contact/page.tsx
import Link from "next/link";

import Map from "@/components/Map";
import Hero from "@/components/HeroSections";
import HeroForm from "@/components/hero/HeroForm";

export default async function Contact() {
  return (
    <div className="bg-white">
      <Hero
        title="Contact Us"
        description="Ready to transform your digital presence? Reach out to our team in Abuja, Nigeria, and let’s bring your vision to life."
        ctaText="Send a Message"
        ctaLink="https://shorturl.at/YfsOA"
        backgroundImage="https://images.unsplash.com/photo-1585079542156-2755d9c8a094?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
      <section className="py-12 sm:py-16 w-full max-w-[100vw] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1E3A8A] text-center mb-4">
            Connect With Us Today
          </h1>
          <p className="text-[#1F2937] text-base sm:text-lg text-center max-w-3xl mx-auto mb-8">
            We’re excited to hear about your project! Fill out the form or visit
            our office to start building your website, mobile app, or digital
            campaign with us.
          </p>
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="lg:w-1/2">
              <HeroForm />
            </div>
            <div className="lg:w-1/2">
              <div className="bg-white rounded-lg shadow-lg p-6 transition-all duration-300 hover:shadow-2xl">
                <h3 className="text-2xl font-semibold text-[#1E3A8A] mb-4">
                  Our Location
                </h3>
                <p className="text-[#1F2937] text-base mb-2">
                  <strong>Address:</strong> Bensima House, Aguiyi Ironsi Street,
                  Maitama, Abuja, Nigeria
                </p>
                <p className="text-[#1F2937] text-base mb-2">
                  <strong>Phone:</strong> +2349076122882
                </p>
                <p className="text-[#1F2937] text-base mb-2">
                  <strong>Email:</strong> info@zubbytech.com
                </p>
                <p className="text-[#1F2937] text-base">
                  <strong>Hours:</strong> Monday–Friday, 9:00 AM–5:00 PM
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Map />
      <section className="bg-[#E5E7EB] py-12 sm:py-16 w-full max-w-[100vw] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1E3A8A] mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="text-[#1F2937] text-base sm:text-lg max-w-3xl mx-auto mb-6">
            Explore our services and see how we can transform your digital
            presence with custom websites, mobile apps, and more.
          </p>
          <Link
            href="/services"
            className="inline-block bg-[#1E3A8A] text-white px-6 py-3 rounded-md text-base font-medium hover:bg-[#60A5FA] transition-colors duration-200"
            aria-label="Explore our services"
          >
            Explore Our Services
          </Link>
        </div>
      </section>
    </div>
  );
}
