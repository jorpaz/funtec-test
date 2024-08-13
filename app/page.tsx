import Hero from "@/app/components/Hero";
import PracticeSection from "@/app/components/PracticeSection";
import WhoWeAre from "@/app/components/WhoWeAre";
import Testimonials from "@/app/components/Testimonials";
import Attorneys from "@/app/components/Attorneys";
import ContactUs from "@/app/components/ContactUs";
import ContactUs2 from "@/app/components/ContacUs2";
import Footer from "@/app/components/Footer";

export default function Home() {
  return (
    <main>
        <Hero />
        <PracticeSection />
        <WhoWeAre />
        <Testimonials />
        <Attorneys />
        <ContactUs />
        <ContactUs2 />
        <Footer />
    </main>
  );
}
