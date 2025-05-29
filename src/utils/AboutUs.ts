// utils/aboutUs.ts
export interface AboutSection {
  title: string;
  content: string;
  teamMembers?: TeamMember[]; // Optional for Our Team section
}

export interface TeamMember {
  name: string;
  position: string;
  image: string;
}

export const aboutSections: AboutSection[] = [
  {
    title: "Our Vision",
    content:
      "To become the premier catalyst for digital transformation, delivering innovative technology solutions that redefine excellence and empower businesses worldwide.",
  },
  {
    title: "Our Mission",
    content:
      "To empower businesses with cutting-edge digital solutions, engineering exceptional websites, powerful applications, and strategic marketing campaigns that drive sustainable growth and meaningful engagement.",
  },
  {
    title: "Our Team",
    content:
      "Our team of skilled developers, designers, and marketers brings diverse expertise in web development, app creation, SEO, and digital marketing. Passionate and collaborative, we work tirelessly to exceed client expectations.",
    teamMembers: [
      {
        name: "Josiah Okere",
        position: "Head of Software Engineering",
        image: "/assets/images/Zubby.jpg",
      },
      {
        name: "Precious Okechukwu",
        position: "Head of Digital Marketing and Social Media Management",
        image: "/assets/images/Oke.jpg",
      },
      {
        name: "Chinaza Precious",
        position: "Lead SEO specialist",
        image: "/assets/images/Chinaza.jpg",
      },
    ],
  },
];
