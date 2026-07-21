import Navbar from "../components/layouts/Navbar";
import Hero from "../components/home/Hero";
import Footer from "../components/layouts/Footer";

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