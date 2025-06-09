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
  description: "Tech/Digital Solutions that power up businesses",
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
