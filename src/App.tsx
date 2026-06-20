import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TrustedLogos from "./components/TrustedLogos";
import About from "./components/About";
import Services from "./components/Services";
import Advantages from "./components/Advantages";
import Portfolio from "./components/Portfolio";
import Process from "./components/Process";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  const [prefilledPlan, setPrefilledPlan] = useState("");

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // Offset for sticky navbar
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  const handlePrefilledEstimator = (planText: string) => {
    setPrefilledPlan(planText);
    setTimeout(() => {
      scrollToSection("contact");
    }, 100);
  };

  return (
    <div className="min-h-screen bg-slate-950 antialiased font-sans text-slate-100 selection:bg-sky-500 selection:text-slate-950">
      {/* Floating Header */}
      <Navbar
        onContactClick={() => {
          setPrefilledPlan("");
          scrollToSection("contact");
        }}
        onServicesClick={() => scrollToSection("services")}
        onPortfolioClick={() => scrollToSection("portfolio")}
        onProcessClick={() => scrollToSection("process")}
        onFaqClick={() => scrollToSection("faq")}
      />

      {/* Main Structural Flow */}
      <main>
        {/* Hero Section */}
        <Hero
          onContactClick={() => {
            setPrefilledPlan("");
            scrollToSection("contact");
          }}
          onServicesClick={() => scrollToSection("services")}
        />

        {/* Gray trusted b2b dynamic track */}
        <TrustedLogos />

        {/* Corporate introduction segment */}
        <About />

        {/* Interactive service catalog + estimator widget */}
        <Services onContactClick={handlePrefilledEstimator} />

        {/* Professional Bento-grid of custom metrics */}
        <Advantages />

        {/* Portfolio catalog with item categories */}
        <Portfolio onContactClick={handlePrefilledEstimator} />

        {/* Modern timeline process structure */}
        <Process />

        {/* Credibility validation grid */}
        <Testimonials />

        {/* FAQs */}
        <FAQ />

        {/* Interactive Secure Contact form */}
        <Contact prefilledPlan={prefilledPlan} />
      </main>

      {/* Footer legalities & newsletter */}
      <Footer />
    </div>
  );
}
