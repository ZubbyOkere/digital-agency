// components/Testimonials.tsx
"use client";

import { testimonials } from "@/utils/testimonials";
import TestimonialCard from "./TestimonialCard";
import { useEffect, useState } from "react";

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);
  return (
    <section className="bg-[#E5E7EB] py-12 sm:py-16 w-full max-w-[100vw] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-[#1E3A8A] text-center mb-4">
          What Our Clients Say
        </h2>
        <p className="text-[#1F2937] text-base sm:text-lg text-center max-w-3xl mx-auto mb-8">
          Hear from our satisfied clients who have experienced the impact of our
          innovative digital solutions. Their success stories reflect our
          commitment to excellence.
        </p>
        <div className="relative overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {testimonials.map((testimonial) => (
              <div key={testimonial.name} className="min-w-full">
                <TestimonialCard
                  name={testimonial.name}
                  quote={testimonial.quote}
                  photo={testimonial.photo}
                  location={testimonial.location}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
