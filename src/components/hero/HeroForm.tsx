"use client";

import { useForm, SubmitHandler } from "react-hook-form";
import emailjs from "@emailjs/browser";
import { useEffect, useState } from "react";

interface FormInputs {
  name: string;
  email: string;
  phone: string;
  message: string;
}

interface HeroFormProps {
  title?: string;
  description?: string;
  buttonText?: string;
  className?: string;
  onSubmit?: (data: FormInputs) => void;
}

export default function HeroForm({
  title = "Schedule Your Appointment",
  description = "Increase Your Brand Visibility and Value! Fill This Form To Get Started.",
  buttonText = "Book Now",
  className = "",
  onSubmit,
}: HeroFormProps) {
  const [showPopup, setShowPopup] = useState<{
    message: string;
    isError: boolean;
  } | null>(null);

  useEffect(() => {
    emailjs.init("YRh_kMbQiJGu09L95");
  }, []);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormInputs>();

  const onSubmitHandler: SubmitHandler<FormInputs> = async (data) => {
    if (onSubmit) {
      onSubmit(data);
      return;
    }
    // service_3wi3i3f

    try {
      const timestamp = new Date().toLocaleString("en-US", {
        timeZone: "Africa/Lagos",
      });
      const formData = { ...data, time: timestamp };
      const result = await emailjs.send(
        "service_li3eomc",
        "template_59xsxtb",
        formData,
        "YRh_kMbQiJGu09L95"
      );
      console.log("email sent", result.text);
      setShowPopup({
        message: "Your email was sent successfully",
        isError: false,
      });
      reset();
    } catch (error) {
      console.error("Submission error:", error);
      setShowPopup({
        message: "There was an error sending your email",
        isError: true,
      });
    }
  };

  useEffect(() => {
    if (showPopup) {
      const timer = setTimeout(() => {
        setShowPopup(null);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [showPopup]);

  return (
    <>
      {/* Popup */}
      {showPopup && (
        <div
          className={`fixed top-12 right-6 z-50 p-4 rounded-l-md shadow-lg transition-transform duration-500 ease-in-out ${
            showPopup.isError
              ? "bg-red-100 text-red-700"
              : "bg-green-100 text-green-700"
          } transform ${showPopup ? "translate-x-0" : "translate-x-full"}`}
        >
          {showPopup.message}
        </div>
      )}

      <section
        className={`relative w-full max-w-[100vw] overflow-hidden py-12 sm:py-16 bg-[#E5E7EB] ${className}`}
      >
        <div className="max-w-lg mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1E3A8A] text-center mb-4">
            {title}
          </h2>
          <p className="text-[#1F2937] text-base text-center mb-6">
            {description}
          </p>
          <form
            onSubmit={handleSubmit(onSubmitHandler)}
            className="flex flex-col gap-4"
          >
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-[#1F2937] mb-1"
              >
                Full Name *
              </label>
              <input
                type="text"
                id="name"
                {...register("name", { required: "Name is required" })}
                placeholder="Enter your full name"
                className="w-full px-4 py-2 rounded-md border border-[#E5E7EB] focus:border-[#60A5FA] focus:ring-[#60A5FA] text-[#1F2937] bg-white"
                aria-invalid={errors.name ? "true" : "false"}
              />
              {errors.name && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.name.message}
                </p>
              )}
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-[#1F2937] mb-1"
              >
                Email Address *
              </label>
              <input
                type="email"
                id="email"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^\S+@\S+$/i,
                    message: "Invalid email address",
                  },
                })}
                placeholder="Enter your email address"
                className="w-full px-4 py-2 rounded-md border border-[#E5E7EB] focus:border-[#60A5FA] focus:ring-[#60A5FA] text-[#1F2937] bg-white"
                aria-invalid={errors.email ? "true" : "false"}
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>

            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-[#1F2937] mb-1"
              >
                Phone Number *
              </label>
              <input
                type="tel"
                id="phone"
                {...register("phone", { required: "Phone number is required" })}
                placeholder="Enter your phone number"
                className="w-full px-4 py-2 rounded-md border border-[#E5E7EB] focus:border-[#60A5FA] focus:ring-[#60A5FA] text-[#1F2937] bg-white"
                aria-invalid={errors.phone ? "true" : "false"}
              />
              {errors.phone && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.phone.message}
                </p>
              )}
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-[#1F2937] mb-1"
              >
                Message *
              </label>
              <textarea
                id="message"
                {...register("message", { required: "Message is required" })}
                placeholder="Tell us about your project or needs"
                rows={4}
                className="w-full px-4 py-2 rounded-md border border-[#E5E7EB] focus:border-[#60A5FA] focus:ring-[#60A5FA] text-[#1F2937] bg-white resize-none"
                aria-invalid={errors.message ? "true" : "false"}
              />
              {errors.message && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.message.message}
                </p>
              )}
            </div>

            <div className="flex justify-center">
              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-[#1E3A8A] text-white px-6 py-3 rounded-md text-base font-medium hover:bg-[#60A5FA] transition-colors duration-200 whitespace-nowrap disabled:opacity-50"
                aria-label={buttonText}
              >
                {isSubmitting ? "Submitting..." : buttonText}
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
