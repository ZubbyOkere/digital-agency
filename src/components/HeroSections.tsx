import Link from "next/link";

// components/Hero.tsx
interface HeroProps {
  title: string;
  description: string;
  ctaText?: string;
  ctaLink?: string;
  backgroundImage?: string;
}

export default function Hero({
  title,
  description,
  ctaText,
  ctaLink,
  backgroundImage = "https://images.unsplash.com/photo-1747997421995-5ff402818f31?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
}: HeroProps) {
  return (
    <section
      className="relative bg-cover bg-center py-16 sm:py-20 w-full max-w-[100vw] overflow-hidden"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="absolute inset-0 bg-[#1E3A8A]/60" />{" "}
      {/* Semi-transparent overlay */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
          {title}
        </h1>
        <p className="text-white text-base sm:text-lg max-w-3xl mx-auto mb-6">
          {description}
        </p>
        {ctaText && ctaLink && (
          <Link
            href={ctaLink}
            className="inline-block bg-[#60A5FA] text-white px-6 py-3 rounded-md text-base font-medium hover:bg-[#1E3A8A] transition-colors duration-200"
            aria-label={ctaText}
          >
            {ctaText}
          </Link>
        )}
      </div>
    </section>
  );
}
