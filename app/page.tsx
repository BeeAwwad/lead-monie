import Features from "@/components/home/Features";
import Hero from "@/components/home/Hero";
import Nav from "@/components/home/Nav";
import HowItWorks from "@/components/home/HowItWorks";
import Testimonials from "@/components/home/Testimonials";
import Faq from "@/components/home/Faq";
import NewsLetter from "@/components/home/NewsLetter";
import Footer from "@/components/home/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <Testimonials />
        <Faq />
        <NewsLetter />
        <Footer />
      </main>
    </>
  );
}
