import Navbar from "../components/layout/Navbar";
import Hero from "../components/home/Hero";
import Footer from "../components/layout/Footer";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />

        {/* Upcoming Sections */}
        {/* <Stats /> */}
        {/* <Features /> */}
        {/* <Modules /> */}
        {/* <WhyChooseUs /> */}
        {/* <Pricing /> */}
        {/* <Testimonials /> */}
        {/* <FAQ /> */}
        {/* <CTA /> */}
      </main>

      <Footer />
    </>
  );
}