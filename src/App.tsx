import { Helmet, HelmetProvider } from "react-helmet-async";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import Process from "./components/Process";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <HelmetProvider>
      <div className="min-h-screen selection:bg-primary/20 selection:text-primary">
        <Helmet>
          <title>Jasa Pembuatan Website & Aplikasi Bondowoso | Nayaka Labs</title>
          <meta name="description" content="Nayaka Labs adalah studio teknologi terdepan di Bondowoso. Melayani jasa pembuatan website profesional, aplikasi mobile Android/iOS, dan sistem informasi instansi." />
          <meta name="keywords" content="jasa pembuatan website bondowoso, jasa pembuatan aplikasi bondowoso, web developer bondowoso, software house bondowoso, jasa website jawa timur, nayaka labs" />
          
          {/* Open Graph */}
          <meta property="og:title" content="Nayaka Labs - Jasa Pembuatan Website & Aplikasi Bondowoso" />
          <meta property="og:description" content="Bangun infrastruktur digital premium untuk bisnis Anda di Bondowoso bersama partner teknologi terpercaya." />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://nayakalabs.com" />
          
          <link rel="canonical" href="https://nayakalabs.com" />
        </Helmet>

        <Navbar />
        
        <main>
          <Hero />
          <About />
          <Services />
          <Portfolio />
          <Process />
          <Contact />
        </main>

        <Footer />
      </div>
    </HelmetProvider>
  );
}
