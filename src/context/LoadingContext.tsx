"use client";
import { createContext, useContext, useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import LoadingSpinner from "@/components/LoadingSpinner";

interface LoadingContextType {
  isLoading: boolean;
  setIsLoading: (loading: boolean) => void;
}

const LoadingContext = createContext<LoadingContextType | undefined>(undefined);

export function LoadingProvider({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(false);
  const pathname = usePathname();

  // Detect route changes using pathname
  useEffect(() => {
    setIsLoading(true); // Show spinner when the pathname changes

    // Simulate route change completion (e.g., after a short delay)
    const timer = setTimeout(() => {
      setIsLoading(false); // Hide spinner after a delay
    }, 500); // Adjust delay as needed (e.g., 500ms)

    return () => clearTimeout(timer); // Cleanup on unmount or pathname change
  }, [pathname]); // Run effect whenever pathname changes

  return (
    <LoadingContext.Provider value={{ isLoading, setIsLoading }}>
      {isLoading && <LoadingSpinner />}
      {children}
    </LoadingContext.Provider>
  );
}

export function useLoading() {
  const context = useContext(LoadingContext);
  if (!context) {
    throw new Error("useLoading must be used within a LoadingProvider");
  }
  return context;
}
