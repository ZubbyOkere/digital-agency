// components/CallToAction.tsx
import Link from "next/link";

export default function CallToAction() {
  return (
    <section className="bg-[#1E3A8A] py-12 sm:py-16 w-full max-w-[100vw] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-[#FFFFFF] mb-4">
          Ready to Transform Your Digital Presence?
        </h2>
        <p className="text-[#E5E7EB] text-base sm:text-lg max-w-2xl mx-auto mb-6">
          Partner with us to unlock innovative solutions tailored to your
          business goals. Let’s build something extraordinary together.
        </p>
        <Link
          href="/contact"
          className="bg-[#60A5FA] text-white px-6 py-3 rounded-md text-base font-medium hover:bg-[#FFFFFF] hover:text-[#1E3A8A] transition-colors duration-200"
          aria-label="Get started with your project"
        >
          Get Started
        </Link>
      </div>
    </section>
  );
}
