import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#E5E7EB] px-4 sm:px-6 lg:px-8">
      <div className="max-w-md text-center">
        <h1 className="text-5xl sm:text-6xl font-bold text-[#1E3A8A] mb-4">
          404
        </h1>
        <h2 className="text-2xl sm:text-3xl font-semibold text-[#1F2937] mb-6">
          Page Not Found
        </h2>
        <p className="text-[#1F2937] mb-8">
          Oops! The page you’re looking for doesn’t exist. It might have been
          moved or deleted.
        </p>
        <Link
          href="/"
          className="inline-flex items-center bg-[#1E3A8A] text-white px-6 py-3 rounded-md text-base font-medium hover:bg-[#60A5FA] transition-colors duration-200"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}
