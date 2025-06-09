"use client";
import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { navLinks } from "@/utils/Navlink";
import Image from "next/image";
// import { navLinks } from '../utils/navLinks'; // Import the links

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-[#1E3A8A] text-white sticky top-0 z-50 shadow-lg w-full">
      <div className="w-full max-w-[100vw] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 overflow-x-hidden">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className=" truncate ">
              <Image
                src={"/assets/images/IMG_5995[1].PNG"}
                width={100}
                height={100}
                alt="ZubbyTech"
                className="object-contain "
              />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="hover:bg-[#60A5FA] hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 whitespace-nowrap"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="p-2 rounded-md text-white hover:bg-[#60A5FA] focus:outline-none"
              aria-label={isOpen ? "Close menu" : "Open menu"}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#1E3A8A] border-t border-[#E5E7EB] w-full">
          <div className="px-4 py-3 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block px-3 py-2 rounded-md text-base font-medium hover:bg-[#60A5FA] hover:text-white transition-colors duration-200"
                onClick={toggleMenu}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
