import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { PORTFOLIOS } from "../data";
import { ArrowUpRight, CheckCircle2, Cpu, Laptop, Activity } from "lucide-react";
import { PortfolioCategory } from "../types";

interface PortfolioProps {
  onContactClick: (planText: string) => void;
}

// Highly authentic SPEC details containing technical challenge, solution, architectural highlights
const PORTFOLIO_SPECS: Record<string, {
  challenge: string;
  solution: string;
  architectureDetails: string;
  highlights: string[];
}> = {
  svara: {
    challenge: "Menyajikan pemutar audio dengan transisi mulus di latar belakang tanpa terhenti saat pengguna mengunci layar ponsel atau membuka aplikasi lain.",
    solution: "Menggunakan modul pemutar audio tingkat rendah (low-level state machine) untuk mengunci proses latar belakang di iOS & Android, dilengkapi cache lagu offline lokal.",
    architectureDetails: "Database lokal sesaat yang sangat cepat terintegrasi langsung dengan enkripsi file penyimpanan aman untuk kenyamanan pemutaran.",
    highlights: ["Transisi Audio Mulus Latar Belakang", "Sinkronisasi Offline Data Cepat", "Sistem Navigasi yang Sangat Ringan", "Dukungan Responsif Berbagai Gadget"]
  },
  "artha-fin": {
    challenge: "Menampilkan grafik akumulasi kekayaan interaktif yang kompleks secara real-time di browser, namun tetap memiliki performa website yang cepat bagi koneksi internet lambat.",
    solution: "Membangun visual chart berbasis SVG murni dengan kompresi data JSON dinamis, serta rendering statis server (SSR) Next.js berkualitas tinggi.",
    architectureDetails: "Teknologi SSR Next.js dipadukan dengan caching halaman statis global sehingga website termuat dalam sekejap mata.",
    highlights: ["Web Termuat Super Cepat < 1s", "Grafik Keuangan Interaktif Responsif", "SEO Tinggi di Riset Google PageSpeed", "Tampilan Dinamis Sesuai Layar"]
  },
  laksana: {
    challenge: "Menampilkan pelacak armada distribusi pengiriman logistik harian pada layar PC dengan konsumsi memori RAM yang seminim mungkin bagi komputer lawas operasional gudang.",
    solution: "Menggunakan framework Tauri bertenaga Rust untuk membungkus kode program HTML/JS sehingga tidak memerlukan browser Chromium pemicu lag.",
    architectureDetails: "Kompilasi biner native Tauri (.exe dan .app) yang sangat padat dengan konsumsi memori stabil di bawah 80 megabyte (MB).",
    highlights: ["Konsumsi RAM Sangat Rendah < 80MB", "Instalasi Ukuran Ringkas < 15MB", "Keamanan Enkripsi Database Lokal", "Integrasi Printer Kasir & Scanner USB"]
  },
  aksara: {
    challenge: "Halaman informasi portal pembelajaran nasional tenggelam pada mesin pencarian Google dan memiliki skor kecepatan muat buruk yang menurunkan retensi pelajar.",
    solution: "Melakukan rekonstruksi tag meta HTML secara radikal, mengoptimiasikan kompresi gambar, dan memperbaiki kerangka layout shift (CLS) web secara menyeluruh.",
    architectureDetails: "Penyusunan sitemap otomatis yang dinamis serta penerapan lazy-loading aset visual yang sepenuhnya patuh terhadap panduan Google Core Web Vitals.",
    highlights: ["Skor Google PageSpeed 99/100", "Pangkat 1 di Google Pencarian Target", "Trafik Organik Naik 3x Lipat", "Metadata Otomatis Ramah Sosial Media"]
  }
};

export default function Portfolio({ onContactClick }: PortfolioProps) {
  const [filter, setFilter] = useState<PortfolioCategory | "All">("All");
  const [activeHighlightId, setActiveHighlightId] = useState<string>("svara");

const categories: ("All" | PortfolioCategory)[] = [
  "All",
  ...new Set(PORTFOLIOS.flatMap((item) => item.category)),
];

const filteredPortfolios =
  filter === "All"
    ? PORTFOLIOS
    : PORTFOLIOS.filter((item) =>
        item.category.includes(filter)
      );


  const activeSpec = PORTFOLIO_SPECS[activeHighlightId] || PORTFOLIO_SPECS["svara"];
  const activeItem = PORTFOLIOS.find(item => item.id === activeHighlightId) || PORTFOLIOS[0];

  const handleConsultCase = () => {
    const consultationMessage = `Halo Nayaka Labs, saya sangat tertarik mendiskusikan implementasi teknis & arsitektur proyek serupa dengan studi kasus "${activeItem.title}" yang telah Anda kerjakan untuk klien ${activeItem.client}. Tolong bantu jadwalkan konsultasi awal dengan tim desainer & engineer senior Anda.`;
    onContactClick(consultationMessage);
  };

  return (
    <section id="portfolio" className="py-20 md:py-28 bg-slate-950 border-t border-slate-900 overflow-hidden relative">
      {/* Background accents for high-end feel */}
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-sky-500/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-2/3 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-left space-y-4 max-w-3xl mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-sky-400 bg-sky-950/50 border border-sky-900/30 px-3.5 py-1.5 rounded-full inline-block">
            Fokus Karya & Studi Kasus
          </span>
          <h2 className="font-display font-black text-3xl sm:text-4xl text-white leading-tight">
            Karya Rekayasa Sistem & Desain Kami
          </h2>
          <p className="font-sans text-slate-400 text-sm sm:text-base leading-relaxed">
            Kami bangga menghadirkan keunggulan estetika dan mutu pemrograman murni di setiap produk digital mitra kami. Di bawah ini, saksikan bedah kasus desain & solusi fungsional yang kami rancang.
          </p>
        </div>

        {/* 2. MAIN CATALOG SECTIONS (GRID WITH FILTER TABS) */}
        <div>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 border-t border-slate-900 pt-16">
            <div className="text-left space-y-2">
              <span className="text-xs font-bold text-sky-400 font-mono block uppercase">Arsip Karya Digital</span>
              <h3 className="font-display font-black text-xl sm:text-2xl text-white">
                Seluruh Portofolio Proyek Aktif
              </h3>
            </div>

            {/* Filtering buttons */}
            <div className="flex flex-wrap gap-2 justify-start md:justify-end shrink-0">
              {categories.map((category) => (
                <button
                  key={category}
                   onClick={() => setFilter(category)}
                  className={`text-xs font-bold py-2 px-4 rounded-full border cursor-pointer transition-all ${
                    filter === category 
                      ? "bg-sky-500 text-slate-950 border-sky-500 shadow-md shadow-sky-500/10" 
                      : "bg-slate-950 border-slate-800 text-slate-400 hover:bg-slate-900"
                  }`}
                >
                  {category === "All" ? "Semua Kategori" : category}
                </button>
              ))}
            </div>
          </div>

          {/* Catalog grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
            <AnimatePresence mode="popLayout">
              {filteredPortfolios.map((item) => {
                const isSelectedInSpotlight = item.id === activeHighlightId;
                return (
                  <motion.div
                    layout
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.4 }}
                    key={item.id}
                    className={`bg-slate-900 rounded-3xl border overflow-hidden flex flex-col justify-between group transition-all duration-300 ${
                      isSelectedInSpotlight 
                        ? "border-sky-500/40 shadow-2xl shadow-sky-500/5" 
                        : "border-slate-800/80 hover:border-sky-500/20 shadow-2xl shadow-slate-950/20"
                    }`}
                  >
                    {/* Visual Image container & overlay details */}
                    <div className="relative aspect-[16/9] overflow-hidden bg-slate-950">
                      <img
                        src={item.image}
                        alt={item.title}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
                      />
                     
                      <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                        {item.category.map((cat) => (
                          <span
                            key={cat}
                            className="bg-slate-950/90 backdrop-blur-md text-white font-mono text-[9px] uppercase font-bold tracking-widest px-3 py-1.5 rounded-full border border-slate-800"
                          >
                            {cat}
                          </span>
                        ))}
                      </div>

                      {isSelectedInSpotlight && (
                        <div className="absolute top-4 right-4 bg-sky-500 text-slate-950 font-mono text-[9px] uppercase font-black tracking-widest px-3 py-1.5 rounded-full shadow-lg shadow-sky-500/20">
                          Sedang Disorot
                        </div>
                      )}
                    </div>
                    {/* add portofolio categories to array */}

                    {/* Info and stats details */}
                    <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between text-left">
                      <div className="space-y-4">
                        {/* Client name / brand label */}
                        <div className="flex items-center justify-between">
                          <span className="text-[10px] font-mono tracking-widest text-sky-400 block uppercase font-bold">
                            CLIENT: {item.client}
                          </span>
                          {!isSelectedInSpotlight && (
                            <button
                              onClick={() => {
                                setActiveHighlightId(item.id);
                                const element = document.getElementById("portfolio");
                                if (element) {
                                  element.scrollIntoView({ behavior: "smooth" });
                                }
                              }}
                              className="text-[10px] text-slate-400 hover:text-sky-400 font-bold transition-colors cursor-pointer uppercase font-mono bg-slate-950 hover:bg-slate-850 px-2 py-0.5 rounded border border-slate-800"
                            >
                              Lihat Detail&rarr;
                            </button>
                          )}
                        </div>

                        {/* Title */}
                        <div className="flex items-start justify-between gap-4">
                          <h4 className="font-display font-black text-xl text-white hover:text-sky-400 transition-colors">
                            {item.title}
                          </h4>
                          {item.link && (
                            <a
                              href={item.link}
                              target="_blank"
                              rel="noreferrer"
                              className="bg-slate-950 border border-slate-800 hover:bg-slate-850 hover:text-sky-300 text-sky-400 p-2.5 rounded-full transition-colors flex items-center justify-center shrink-0"
                              aria-label={`Kunjungi situs ${item.client}`}
                            >
                              <ArrowUpRight className="w-4 h-4" />
                            </a>
                          )}
                        </div>

                        {/* Summary paragraphs */}
                        <p className="font-sans text-xs sm:text-sm text-slate-400 leading-relaxed">
                          {item.summary}
                        </p>
                      </div>

                      {/* Highlight core business metric */}
                      <div className="mt-6 p-4 bg-emerald-950/30 border border-emerald-900/40 rounded-2xl flex items-center gap-3 animate-fade-in">
                        <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                        <div>
                          <span className="text-[10px] uppercase font-mono text-emerald-400 block font-bold leading-none">KEY IMPACT METRIC</span>
                          <span className="text-xs font-bold text-slate-200 font-display mt-1.5 block leading-tight">{item.metrics}</span>
                        </div>
                      </div>

                      {/* Bottom techs strip info */}
                      <div className="border-t border-slate-800/80 pt-5 mt-6 flex flex-wrap gap-1.5 items-center">
                        {item.techs.map((tech, idx) => (
                          <span key={idx} className="text-[10px] font-mono font-medium bg-slate-950 text-slate-350 px-2.5 py-0.5 rounded border border-slate-800/80">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>
        </div>

      </div>
    </section>
  );
}
