import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import { LoadingProvider } from "@/context/LoadingContext";
import FloatingIcons from "@/components/FloatingIcons";
// import { LoadingProvider } from "@/context/LoadingContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ZubbyTech Digital Solutions",
  description:
    "ZubbyTech offers websites design and building/development, mobile apps, e-commerce website solutions, digital marketing, and social media management to empower businesses. Boost visibility and grow with expert services. Contact us!",
  keywords:
    "ZubbyTech, Digital Solutions, Web Development, Mobile App Development, E-commerce, Digital Marketing, Social Media Management, Website Design, SEO, SEM, PPC, Content Marketing, Email Marketing, Web Design, Web Development, Web Designing, Web Development, Web Designing, Web Development, Web Designing, Web Development, Web Designing, Web Development, Web Designing, Web Development, Web Designing, Web Development, Web Designing, Web",
  icons: {
    icon: "/assets/images/IMG_5987[1].PNG",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <LoadingProvider>
          <Navbar />
          {children}
          <Footer />
          <FloatingIcons />
        </LoadingProvider>
      </body>
    </html>
  );
}
