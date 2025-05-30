// components/contact/ContactForm.tsx
"use client";

import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("Submitting...");

    // Placeholder for form submission (e.g., API call)
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setStatus("Thank you! We’ll get back to you soon.");
      setFormData({ name: "", email: "", phone: "", message: "" });
    } catch (error) {
      setStatus(
        "Error submitting form. Please try again or click on WhatsApp icon to reach out."
      );
      console.log(error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white rounded-lg shadow-lg p-6 flex-1"
    >
      <h3 className="text-2xl font-semibold text-[#1E3A8A] mb-4">
        Send Us a Message
      </h3>
      <div className="mb-4">
        <label
          htmlFor="name"
          className="block text-[#1F2937] text-sm font-medium mb-1"
        >
          Name *
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border border-[#E5E7EB] rounded-md focus:outline-none focus:ring-2 focus:ring-[#60A5FA] text-[#1F2937]"
          placeholder="Your Name"
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="email"
          className="block text-[#1F2937] text-sm font-medium mb-1"
        >
          Email *
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border border-[#E5E7EB] rounded-md focus:outline-none focus:ring-2 focus:ring-[#60A5FA] text-[#1F2937]"
          placeholder="your.email@example.com"
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="phone"
          className="block text-[#1F2937] text-sm font-medium mb-1"
        >
          Phone
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-[#E5E7EB] rounded-md focus:outline-none focus:ring-2 focus:ring-[#60A5FA] text-[#1F2937]"
          placeholder="+234 123 456 7890"
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="message"
          className="block text-[#1F2937] text-sm font-medium mb-1"
        >
          Message *
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={4}
          className="w-full px-4 py-2 border border-[#E5E7EB] rounded-md focus:outline-none focus:ring-2 focus:ring-[#60A5FA] text-[#1F2937]"
          placeholder="Tell us about your project..."
        />
      </div>
      <button
        type="submit"
        className="w-full bg-[#1E3A8A] text-white px-6 py-3 rounded-md text-base font-medium hover:bg-[#60A5FA] transition-colors duration-200"
      >
        Submit
      </button>
      {status && <p className="mt-4 text-center text-[#1F2937]">{status}</p>}
    </form>
  );
}
