"use client";
import Typewriter from "typewriter-effect";
import HeroForm from "./HeroForm";
import Link from "next/link";

export default function Hero() {
  return (
    <section
      className="relative bg-cover bg-center min-h-[400px] sm:min-h-[500px] flex items-center justify-center w-full max-w-[100vw] overflow-hidden"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1605379399843-5870eea9b74e?q=80&w=1498&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
      }}
    >
      {/* Overlay with Blur Effect */}
      <div className="absolute inset-0 bg-[#1E3A8A]/50 backdrop-blur-xs"></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col md:flex-row items-center justify-between gap-8 py-12 sm:py-16">
        {/* Text Content */}
        <div className="text-center md:text-left md:w-2/3">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            ZubbyTech Digital Solutions: Igniting Your Business Online Growth
            Through:
          </h1>
          <div className="text-base sm:text-lg text-[#E5E7EB] max-w-md mx-auto md:mx-0">
            <Typewriter
              options={{ loop: true }}
              onInit={(typewriter) => {
                typewriter
                  .typeString(
                    "Captivating websites to drive your brand growth!"
                  )
                  .pauseFor(1000)
                  .deleteAll()
                  .typeString(
                    "Cutting-edge Mobile Apps that bring your vision to life and streamline operations"
                  )
                  .pauseFor(1000)
                  .deleteAll()
                  .typeString(
                    "Strategic Digital Marketing campaigns targeted to spark engagement and skyrocket conversions."
                  )
                  .start();
              }}
            />
          </div>
          {/* Contact Links */}
          <div className="flex justify-center md:justify-start items-center space-x-4 mt-6">
            <Link
              href="https://wa.me/2341234567890?text=Hello%20ZubbyTech,%20I%27d%20like%20to%20discuss%20a%20project!"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center bg-[#1E3A8A] text-white px-4 py-2 rounded-md text-base font-medium hover:bg-[#60A5FA] transition-colors duration-200"
              aria-label="Contact us via WhatsApp"
            >
              <svg
                className="w-5 h-5 mr-2"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.134.297-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.002-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              WhatsApp
            </Link>
            <Link
              href="tel:+2349076122882"
              className="flex items-center bg-[#1E3A8A] text-white px-4 py-2 rounded-md text-base font-medium hover:bg-[#60A5FA] transition-colors duration-200"
              aria-label="Call us"
            >
              <svg
                className="w-5 h-5 mr-2"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.24 1.02l-2.2 2.2z" />
              </svg>
              Call Us
            </Link>
          </div>
        </div>

        {/* Form */}
        <div className="md:w-1/3">
          <HeroForm />
        </div>
      </div>
    </section>
  );
}
