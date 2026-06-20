import { useState } from "react";
import { SERVICES } from "../data";
import { Layout, Smartphone, Laptop, Activity, Sparkles, ArrowRight, CheckCircle2, Calculator, Shield } from "lucide-react";

interface ServicesProps {
  onContactClick: (prefilledPlan?: string) => void;
}

export default function Services({ onContactClick }: ServicesProps) {
  // Estimator States
  const [selectedPlatform, setSelectedPlatform] = useState<"web" | "mobile" | "desktop" | "seo" | "uiux">("web");
  const [projectSize, setProjectSize] = useState<"mvp" | "professional" | "enterprise">("professional");

  const renderIcon = (iconName: string) => {
    switch (iconName) {
      case "Layout":
        return <Layout className="w-5 h-5 text-sky-400 animate-pulse" />;
      case "Smartphone":
        return <Smartphone className="w-5 h-5 text-sky-400" />;
      case "Laptop":
        return <Laptop className="w-5 h-5 text-sky-400" />;
      case "Activity":
        return <Activity className="w-5 h-5 text-sky-400" />;
      case "Sparkles":
        return <Sparkles className="w-5 h-5 text-sky-400" />;
      default:
        return <Shield className="w-5 h-5 text-sky-400" />;
    }
  };

  // Estimator Calculations
  const getEstimationDetails = () => {
    let timeline = "4-6 Minggu";
    let stack = ["PHP", "Laravel", "Next.js", "TypeScript", "Tailwind CSS", "Cloud"];
    let phases = ["Perencanaan UI/UX (1 mgu)", "Coding Frontend & Backend (3 mgu)", "Staging & Launch (1 mgu)"];
    let name = "Website Development";

    if (selectedPlatform === "mobile") {
      name = "Mobile App Development";
      stack = ["Flutter", "Dart", "Firebase / Supabase"];
      if (projectSize === "mvp") {
        timeline = "4-6 Minggu";
        phases = ["UI/UX Mockup & Flow (1 mgu)", "Coding Fitur Inti (3 mgu)", "Testing & Play Store Submission (1 mgu)"];
      } else if (projectSize === "professional") {
        timeline = "8-10 Minggu";
        phases = ["High-Fi Figma Design (2 mgu)", "Agile Dev Sprints (5 mgu)", "Integrasi Secure API (1.5 mgu)", "QA & App Store Release (1.5 mgu)"];
      } else {
        timeline = "12-16 Minggu";
        phases = ["System Architecture & Flow (2 mgu)", "Dev Sprints & Local Caching (6 mgu)", "Stress-Load Load Testing (2 mgu)", "Audit Security & Store Launch (2 mgu)"];
      }
    } else if (selectedPlatform === "desktop") {
      name = "Desktop App Development";
      stack = ["Tauri", "Rust", "React", "TypeScript"];
      if (projectSize === "mvp") {
        timeline = "3-4 Minggu";
        phases = ["Alur Penggunaan & Mock UI (5 hari)", "Pengembangan Frontend & Database Lokal (10 hari)", "Kompilasi Installer Windows/Mac (5 hari)"];
      } else if (projectSize === "professional") {
        timeline = "6-8 Minggu";
        phases = ["Figma Blueprint Design (10 hari)", "Coding Fitur Inti & Native API (20 hari)", "Uji Kapasitas Lintas Sistem Operasi (10 hari)"];
      } else {
        timeline = "10-14 Minggu";
        phases = ["Spesifikasi Integrasi Hardware (2 mgu)", "Agile Dev & Memory Audit (6 mgu)", "Sandbox Security Testing (2 mgu)", "Deployment Offline Synced (2 mgu)"];
      }
    } else if (selectedPlatform === "seo") {
      name = "SEO Optimization";
      stack = ["Google Search Console", "Google Analytics 4", "Pagespeed Insights"];
      if (projectSize === "mvp") {
        timeline = "2-3 Minggu";
        phases = ["Audit Awal & Analisis Kompetitor (5 hari)", "Perbaikan Struktur Link & HTML (7 hari)", "Google Console Submission (3 hari)"];
      } else if (projectSize === "professional") {
        timeline = "4-6 Minggu";
        phases = ["Riset Kata Kunci & Rencana Konten (10 hari)", "Optimasi Metadata & Gambar (15 hari)", "Submit Sitemaps & Ranking Push (5 hari)"];
      } else {
        timeline = "8-12 Minggu";
        phases = ["Technical SEO Audit & Speed Tuning (2 mgu)", "Core Web Vitals Optimization (3 mgu)", "Riset Lanjutan & Backlink Strategy (4 mgu)", "Reporting Panel Setup (1 mgu)"];
      }
    } else if (selectedPlatform === "uiux") {
      name = "UI / UX Design";
      stack = ["Figma", "Figma Interactive Prototypes", "Design System Componentry"];
      if (projectSize === "mvp") {
        timeline = "1-2 Minggu";
        phases = ["User Persona & Sketsa Alur (3 hari)", "Perancangan UI Visual Utama (5 hari)", "Prototipe Klik Interaktif (4 hari)"];
      } else if (projectSize === "professional") {
        timeline = "3-4 Minggu";
        phases = ["Riset Target & Flow Desain (5 hari)", "Desain Sistem Palet Warna (7 hari)", "Rancangan Pixel-Perfect Semua Layar (12 hari)", "Developer Handoff Package (4 hari)"];
      } else {
        timeline = "6-8 Minggu";
        phases = ["Riset Kualitatif & User Interview (1.5 mgu)", "Figma Master Design Design (2 mgu)", "High-Fidelity Interaction Prototyping (2.5 mgu)", "Usability Testing & Spec Document (1 mgu)"];
      }
    } else {
      // web
      if (projectSize === "mvp") {
        timeline = "2-3 Minggu";
        phases = ["Riset & Wireframing (3 hari)", "Figma Design & Review (5 hari)", "Coding-Frontend (7 hari)", "Setup SEO & Launch (3 hari)"];
      } else if (projectSize === "professional") {
        timeline = "4-6 Minggu";
        phases = ["Perencanaan & Spek (5 hari)", "Figma UI/UX & Prototipe (9 hari)", "Sprint Development (14 hari)", "QA & Live Launch (5 hari)"];
      } else {
        timeline = "8-12 Minggu";
        phases = ["Arsitektur Database (2 mgu)", "UI/UX & Design System (2 mgu)", "Agile Sprint Coding (6 mgu)", "Audit Keamanan & Deployment (2 mgu)"];
      }
    }

    return { timeline, stack, phases, name };
  };

  const currentEst = getEstimationDetails();

  return (
    <section id="services" className="py-20 md:py-28 bg-slate-900/30 border-t border-slate-900/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-sky-400 bg-sky-950/50 border border-sky-900/30 px-3.5 py-1.5 rounded-full inline-block">
            Layanan Utama Kami
          </span>
          <h2 className="font-display font-black text-3xl sm:text-4xl text-white">
            Solusi Rekayasa & Kreatif Digital Handal
          </h2>
          <p className="font-sans text-slate-400 text-sm sm:text-base">
            Kami menghadirkan perpaduan sempurna antara pemrograman berkinerja tinggi, seni desain visual premium, dan strategi pemasaran organiknya.
          </p>
        </div>

        {/* Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {SERVICES.map((service) => (
            <div
              key={service.id}
              className="bg-slate-900 border border-slate-800/85 p-8 rounded-2xl hover:border-sky-500/20 shadow-xl shadow-slate-950/20 hover:shadow-slate-950/40 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Icon & Badge Row */}
                <div className="flex items-center justify-between mb-6">
                  <div className="p-3 bg-slate-950 rounded-xl group-hover:bg-sky-500 group-hover:text-slate-950 transition-colors duration-200 border border-slate-800">
                    {renderIcon(service.icon)}
                  </div>
                  {service.badge && (
                    <span className="text-[10px] font-bold tracking-wide uppercase px-2.5 py-1 bg-emerald-950/30 text-emerald-400 border border-emerald-900/40 rounded-full">
                      {service.badge}
                    </span>
                  )}
                </div>

                {/* Service Title */}
                <h3 className="font-display font-black text-lg text-white group-hover:text-sky-400 transition-colors mb-4">
                  {service.title}
                </h3>

                {/* Service Description */}
                <p className="font-sans text-xs text-slate-400 leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Core Features */}
                <ul className="space-y-3 mb-6">
                  {service.features.map((feat, fIdx) => (
                    <li key={fIdx} className="flex gap-2 items-start text-xs text-slate-350">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technologies strip */}
              <div className="border-t border-slate-800/80 pt-5 mt-4 flex flex-wrap gap-1.5 items-center">
                <span className="text-[9px] uppercase font-mono font-bold text-slate-500 block mr-2">TECH:</span>
                {service.techs.map((tech, tIdx) => (
                  <span
                    key={tIdx}
                    className="text-[9px] font-mono font-medium bg-slate-950 text-slate-300 px-2 py-0.5 rounded border border-slate-800"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Interactive Estimator Core Widget */}
        <div className="bg-slate-900 rounded-3xl border border-slate-800/80 shadow-2xl shadow-slate-950/30 overflow-hidden p-6 sm:p-10 relative">
          <div className="absolute top-0 right-0 w-64 h-64 glow-indigo opacity-20 pointer-events-none" />
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center text-left">
            {/* Left selector details (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-2">

                <h3 className="font-display font-black text-lg sm:text-xl text-white">
                  Estimator Proyek Layanan Kami
                </h3>
              </div>

              <p className="font-sans text-xs sm:text-sm text-slate-400 leading-relaxed">
                Rencanakan estimasi awal produk digital Anda secara instan. Pilih jenis pengerjaan serta skala proyek untuk melihat saran teknologi, rancangan tahapan kerja, serta perkiraan waktu penyelesaian.
              </p>

              {/* Selector Option 1: Platform */}
              <div className="space-y-3">
                <span className="text-xs font-bold text-slate-300 block">1. Pilih Jenis Layanan</span>
                <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
                  {[
                    { id: "web", label: "Web Dev" },
                    { id: "mobile", label: "Mobile Dev" },
                    { id: "desktop", label: "Desktop Dev" },
                    { id: "seo", label: "SEO Opt" },
                    { id: "uiux", label: "UIUX Design" }
                  ].map((plat) => (
                    <button
                      key={plat.id}
                      onClick={() => setSelectedPlatform(plat.id as any)}
                      className={`text-[11px] font-bold py-2 px-1 rounded-lg border cursor-pointer text-center transition-all ${
                        selectedPlatform === plat.id
                          ? "bg-sky-500 text-slate-950 border-sky-500 shadow-md font-black"
                          : "border-slate-800 bg-slate-950 hover:bg-slate-800 text-slate-400"
                      }`}
                    >
                      {plat.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Selector Option 2: Scope Size */}
              <div className="space-y-3">
                <span className="text-xs font-bold text-slate-300 block">2. Tentukan Skala Proyek</span>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { id: "mvp", title: "Ringkas (Sederhana/MVP)", info: "Fitur utama / esensial" },
                    { id: "professional", title: "Menengah (Standard)", info: "Kebutuhan umum bisnis lengkap" },
                    { id: "enterprise", title: "Kompleks (Kustom)", info: "Detail kustom tinggi & performa" }
                  ].map((sz) => (
                    <button
                      key={sz.id}
                      onClick={() => setProjectSize(sz.id as any)}
                      className={`text-left p-3 rounded-lg border cursor-pointer transition-all flex flex-col justify-between ${
                        projectSize === sz.id
                          ? "bg-slate-800 text-sky-400 border-sky-400/40 shadow-sm"
                          : "border-slate-800 bg-slate-950 hover:bg-slate-800"
                      }`}
                    >
                      <span className="text-xs font-bold block text-slate-200">{sz.title}</span>
                      <span className="text-[10px] text-slate-500 mt-0.5 leading-tight">{sz.info}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Estimator results box (5 cols) */}
            <div className="lg:col-span-5 bg-slate-950 text-white rounded-2xl p-6 sm:p-8 space-y-6 relative border border-slate-800/80">
              <div className="space-y-1">
                <span className="text-[10px] uppercase font-mono tracking-widest text-sky-450 block font-bold">RANCANGAN TIMELINE</span>
                <h4 className="text-xl sm:text-2xl font-display font-black text-sky-450">
                  {currentEst.timeline}
                </h4>
                <p className="text-[11px] text-slate-505 text-slate-400">Kerangka waktu berbasis metodologi Agile</p>
              </div>

              {/* Suggested Tech */}
              <div className="space-y-2 border-t border-slate-800/80 pt-4">
                <span className="text-[10px] font-mono tracking-widest text-emerald-450 block font-bold uppercase">REKOMENDASI STACK</span>
                <div className="flex flex-wrap gap-1.5">
                  {currentEst.stack.map((item, idx) => (
                    <span key={idx} className="text-[10px] font-mono font-medium bg-slate-900 text-slate-350 px-2.5 py-0.5 rounded border border-slate-800">
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action plan phases list */}
              <div className="space-y-2 border-t border-slate-800/80 pt-4">
                <span className="text-[10px] font-mono tracking-widest text-sky-450 block font-bold uppercase">TAHAPAN PROSES</span>
                <div className="space-y-2">
                  {currentEst.phases.map((ph, idx) => (
                    <div key={idx} className="flex gap-2 items-start text-xs">
                      <span className="text-[10px] font-bold text-sky-400 bg-sky-450/10 px-1.5 py-0.5 rounded mt-0.5">{idx + 1}</span>
                      <span className="text-slate-300 text-xs">{ph}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Conversion trigger */}
              <button
                onClick={() => onContactClick(`Halo Nayaka Labs, saya tertarik mendiskusikan rencana pengerjaan "${currentEst.name}" skala ${projectSize === "mvp" ? "Sederhana/MVP" : projectSize === "professional" ? "Menengah/Standard" : "Kompleks/Kustom"} dengan rekomendasi estimasi pengerjaan berkisar ${currentEst.timeline}. Mohon bantu hubungi saya kembali.`)}
                className="w-full mt-4 group flex items-center justify-center gap-2 bg-sky-400 hover:bg-sky-350 text-slate-950 py-3.5 px-4 rounded-xl font-display font-extrabold text-xs uppercase tracking-wider cursor-pointer transition-colors shadow-lg shadow-sky-500/10"
              >
                Konsultasikan Rencana Ini
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
