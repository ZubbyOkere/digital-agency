// utils/portfolio.ts
export interface PortfolioItem {
  title: string;
  description: string;
  image: string;
}

export const portfolio: PortfolioItem[] = [
  {
    title: "Comprehensive Registry Management Application",
    description:
      "Esrra is a robust application designed to streamline registry management processes across multiple domains. It consists of four integrated modules—BReMS (Birth Registry Management System), DReMS (Death Registry Management System), MReS (Marriage Registry System), and VARMS (Virtual Affidavit Registry Management System)—each tailored to simplify record-keeping and enhance usability for their specific stakeholders.",
    image: "/assets/images/portfolio1.png",
  },
  {
    title: "Real Estate Rental",
    description:
      "Ekohomes is a full-featured real estate rental platform designed to make finding a home in Lagos simple and stress-free. It helps users discover their perfect rental with ease while giving agents a smooth way to manage listings, connect with tenants, and grow their business. The site combines a clean design, fast performance, and easy navigation for everyone involved.",
    image: "/assets/images/portfolio2.png",
  },
  {
    title: "Virtual Affidavit Processing Systems",
    description:
      "A robust affidavit processing system built for the Abuja High Court that streamlines affidavit management with a modern, user-friendly interface, allowing judicial bodies to process, print, download, or email affidavits directly to deponents quickly and efficiently. It’s the approved affidavit document for embassies and banks in Abuja, featuring barcode and code validation for secure, verifiable records.",
    image: "/assets/images/portfolio3.png",
  },
  {
    title: "Vehicle repair/automotive solutions platform",
    description:
      "Modern Vehicle Maintenance Solution for Vehicle owners and Vehicle Service providers. Balanceè connects vehicle owners with trusted vehicle service providers, while service providers optimize their operations with our dashboard and management tools.",
    image: "/assets/images/portfolio4.png",
  },
  {
    title: "Healthcare and medical diagnostics company",
    description:
      "EaseLab Africa is a healthcare company dedicated to transforming the medical diagnostics landscape across Africa by equipping laboratories with world-class tools, advanced technology, and innovative solutions.",
    image: "/assets/images/portfolio6.png",
  },
  {
    title: "Custom Web App",
    description:
      "A property listing/rental platform that connects property owners, managers, and real estate agents with potential renters or buyers. It features detailed property listings, including descriptions, photos, and amenities, allowing users to search and filter properties based on their criteria. It caters to renters, buyers, property owners, and real estate agents, streamlining the property search and management process.",
    image: "/assets/images/portfolio7.png",
  },
];
