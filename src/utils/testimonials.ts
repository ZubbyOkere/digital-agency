// utils/testimonials.ts
export interface Testimonial {
  name: string;
  quote: string;
  photo: string;
  location: string;
}

export const testimonials: Testimonial[] = [
  {
    name: "Ikenna Okpara",
    quote:
      "Their team transformed our online presence with a stunning website and effective SEO strategies. Highly recommend their expertise!",
    photo: "/assets/images/Ikenna.jpg",
    location: "London, United Kingdom",
  },
  {
    name: "Keynes Chukwu",
    quote:
      "The e-commerce platform they built for us is user-friendly and has significantly boosted our sales, because they also did the SEO and gave our business a fresh look. Exceptional service!",
    photo: "/assets/images/Kentoraray.jpg",
    location: "Tennessee, United States",
  },
  {
    name: "Walter Wucci",
    quote:
      "Their social media management turned my personal brand into something else. I got the best possible result even for such a low budget. Professional, creative, and results-driven team they've got!",
    photo: "/assets/images/Wucci.jpg",
    location: "Luton, United Kingdom",
  },
  {
    name: "Tochukwu Celestine",
    quote:
      "The web application they developed streamlined our operations, helping us to manage our inventory and tracking sales. Their support and attention to detail were outstanding.",
    photo: "/assets/images/Too.jpg",
    location: "Abuja, Nigeria",
  },
];
