"use client";
import { motion } from "framer-motion";

export default function LoadingSpinner() {
  // Animation variants for the spinner
  const spinnerVariants = {
    animate: {
      rotate: 360,
      transition: {
        repeat: Infinity,
        duration: 1,
        ease: "linear",
      },
    },
  };

  // Pulse animation for the outer ring
  const pulseVariants = {
    animate: {
      scale: [1, 1.2, 1],
      opacity: [0.5, 0.8, 0.5],
      transition: {
        repeat: Infinity,
        duration: 1.5,
        ease: "easeInOut",
      },
    },
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-[#1E3A8A]/90 backdrop-blur-sm z-50">
      {/* Outer pulse ring */}
      <motion.div
        className="absolute w-16 h-16 rounded-full bg-[#60A5FA]/30"
        variants={pulseVariants}
        animate="animate"
      />
      {/* Spinner */}
      <motion.div
        className="w-12 h-12 border-4 border-t-[#60A5FA] border-l-[#60A5FA] border-b-[#FFFFFF] border-r-[#FFFFFF] rounded-full"
        variants={spinnerVariants}
        animate="animate"
      />
    </div>
  );
}
