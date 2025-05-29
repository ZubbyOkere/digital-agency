// components/Footer.tsx
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#1E3A8A] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand and Description */}
          <div className="text-center md:text-left">
            <Link href="/" className="text-2xl font-bold">
              ZubbyTech
            </Link>
            <p className="mt-2 text-sm text-[#E5E7EB] max-w-xs">
              We build game-changing digital solutions that drive real business
              growth. From custom web platforms and mobile apps to e-commerce
              systems and strategic digital marketing, we turn your vision into
              measurable results.
            </p>
            <div className="flex justify-center md:justify-start space-x-4 mt-4">
              <Link
                href="https://x.com/stackupacademy?s=21?text=Hello%MeetUs,%20I%27d%20like%20to%20discuss%20a%20project!"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#E5E7EB] hover:text-[#60A5FA] transition-colors duration-200"
                aria-label="Follow us on Twitter"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                </svg>
              </Link>
              <Link
                href="https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3B2h%2BtXcdlRies0leEKS3hbA%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#E5E7EB] hover:text-[#60A5FA] transition-colors duration-200"
                aria-label="Follow us on LinkedIn"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                </svg>
              </Link>
              <Link
                href="https://shorturl.at/kl928?text=Hello%MeetUs,%20I%27d%20like%20to%20discuss%20a%20project!"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#E5E7EB] hover:text-[#60A5FA] transition-colors duration-200"
                aria-label="Follow us on Instagram"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.982-6.98.058-1.281.072-1.689.072-4.948 0-3.259-.014-3.667-.072-4.947-.2-4.358-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="text-center">
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <div className="flex flex-col space-y-3">
              <Link
                href="/"
                className="text-sm font-medium hover:text-[#60A5FA] transition-colors duration-200"
              >
                Home
              </Link>
              <Link
                href="/about"
                className="text-sm font-medium hover:text-[#60A5FA] transition-colors duration-200"
              >
                About Us
              </Link>
              <Link
                href="/services"
                className="text-sm font-medium hover:text-[#60A5FA] transition-colors duration-200"
              >
                Services
              </Link>
              <Link
                href="/pricing"
                className="text-sm font-medium hover:text-[#60A5FA] transition-colors duration-200"
              >
                Pricing
              </Link>
              <Link
                href="/contact"
                className="text-sm font-medium hover:text-[#60A5FA] transition-colors duration-200"
              >
                Contact Us
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div className="text-center md:text-right">
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <p className="text-sm text-[#E5E7EB] mb-2">
              Bensima House, Aguiyi Ironsi Street, Maitama, Abuja, Nigeria
            </p>
            <p className="text-sm text-[#E5E7EB] mb-2">
              <Link
                href="tel:+2349076122882"
                className="hover:text-[#60A5FA] transition-colors duration-200"
              >
                +234 907 612 2882
              </Link>
            </p>
            <p className="text-sm text-[#E5E7EB] mb-2">
              <Link
                href="mailto:info@zubbytech.com"
                className="hover:text-[#60A5FA] transition-colors duration-200"
              >
                info@zubbytech.com
              </Link>
            </p>
            <p className="text-sm text-[#E5E7EB]">
              Monday–Friday, 9:00 AM–5:00 PM
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="my-8 border-t border-[#E5E7EB]" />

        {/* Copyright */}
        <div className="text-center text-sm text-[#E5E7EB]">
          © 2025 ZubbyTech. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
