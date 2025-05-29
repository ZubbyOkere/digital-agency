import CallToAction from "@/components/CallToAction";
import Hero from "@/components/hero/HeroSection";
import Map from "@/components/Map";
import Portfolio from "@/components/portfolio/Portfolio";
import Services from "@/components/services/Services";
import Technologies from "@/components/techStack/Technologies";
import Testimonials from "@/components/testimonial/Testimonials";
import WhyChooseUs from "@/components/whyChooseUs/WhyChooseUs";

function Home() {
  return (
    <section>
      <Hero />
      <Services />
      <Technologies />
      <WhyChooseUs />
      <Portfolio />
      <Testimonials />
      <CallToAction />
      <Map />
    </section>
  );
}

export default Home;
