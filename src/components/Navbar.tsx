import { motion } from "motion/react";
import { Code2, ChevronRight, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const waLink = `https://wa.me/${import.meta.env.VITE_WHATSAPP_NUMBER}?text=Halo%20Nayaka%20Labs,%20saya%20ingin%20konsultasi%20mengenai%20layanan%20pembuatan%20website/aplikasi.`;

  const navLinks = [
    { name: "Tentang", href: "#about" },
    { name: "Layanan", href: "#services" },
    { name: "Portofolio", href: "#portfolio" },
    { name: "Proses", href: "#process" },
    { name: "Hubungi", href: "#contact" },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? "bg-white/80 backdrop-blur-xl border-b border-slate-100 py-4 shadow-sm" : "bg-transparent py-8"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-3 group">
          <div className="w-10 h-10 bg-accent rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-all duration-500">
            <Code2 className="text-white w-6 h-6" />
          </div>
          <span className="font-display font-bold text-2xl tracking-tighter text-ink">
            Nayaka<span className="text-accent">Labs</span>
          </span>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <a 
              key={link.name}
              href={link.href}
              className="px-5 py-2 text-[13px] uppercase tracking-widest font-bold text-ink-muted hover:text-accent transition-all relative group"
            >
              {link.name}
              <span className="absolute bottom-1 left-5 right-5 h-0.5 bg-accent scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
            </a>
          ))}
          <div className="w-px h-4 bg-slate-200 mx-4" />
          <a 
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[13px] font-bold text-ink border border-slate-200 px-6 py-2.5 rounded-full hover:bg-slate-50 transition-all"
          >
            Start Inquiry
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-full left-0 right-0 bg-white border-b border-gray-100 p-6 flex flex-col gap-4 md:hidden"
        >
          {navLinks.map((link) => (
            <a 
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-lg font-bold text-ink-muted hover:text-accent transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a 
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-accent text-white p-4 rounded-2xl text-center font-bold"
          >
            Start Inquiry
          </a>
        </motion.div>
      )}
    </nav>
  );
}
