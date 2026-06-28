import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import LogoStrip from "@/components/LogoStrip";
import About from "@/components/About";
import ProjectGrid from "@/components/ProjectGrid";
import Services from "@/components/Services";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />

      {/* Main Portfolio Sections matching the Mockup */}
      <Hero />
      <LogoStrip />
      <About />
      <ProjectGrid />
      <Services />
      <Contact />
      <Footer />
    </main>
  );
}
