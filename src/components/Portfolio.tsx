import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  X,
} from "lucide-react";

import { PORTFOLIOS } from "../data";
import type { PortfolioCategory } from "../types";

interface PortfolioProps {
  onContactClick: (planText: string) => void;
}

type PortfolioItem = (typeof PORTFOLIOS)[number] & {
  /** Optional list of screenshots/images for the detail modal. */
  images?: string[];
};

interface PortfolioSpec {
  challenge: string;
  solution: string;
  architectureDetails: string;
  highlights: string[];
}

// Technical details for projects that have a defined case study.
// Projects without an entry will still show their summary, impact, and tech stack.
const PORTFOLIO_SPECS: Record<string, PortfolioSpec> = {
  svara: {
    challenge:
      "Menyajikan pemutar audio dengan transisi mulus di latar belakang tanpa terhenti saat pengguna mengunci layar ponsel atau membuka aplikasi lain.",
    solution:
      "Menggunakan modul pemutar audio tingkat rendah (low-level state machine) untuk mengunci proses latar belakang di iOS & Android, dilengkapi cache lagu offline lokal.",
    architectureDetails:
      "Database lokal sesaat yang sangat cepat terintegrasi langsung dengan enkripsi file penyimpanan aman untuk kenyamanan pemutaran.",
    highlights: [
      "Transisi Audio Mulus Latar Belakang",
      "Sinkronisasi Offline Data Cepat",
      "Sistem Navigasi yang Sangat Ringan",
      "Dukungan Responsif Berbagai Gadget",
    ],
  },
  "artha-fin": {
    challenge:
      "Menampilkan grafik akumulasi kekayaan interaktif yang kompleks secara real-time di browser, namun tetap memiliki performa website yang cepat bagi koneksi internet lambat.",
    solution:
      "Membangun visual chart berbasis SVG murni dengan kompresi data JSON dinamis, serta rendering statis server (SSR) Next.js berkualitas tinggi.",
    architectureDetails:
      "Teknologi SSR Next.js dipadukan dengan caching halaman statis global sehingga website termuat dalam sekejap mata.",
    highlights: [
      "Web Termuat Super Cepat < 1s",
      "Grafik Keuangan Interaktif Responsif",
      "SEO Tinggi di Riset Google PageSpeed",
      "Tampilan Dinamis Sesuai Layar",
    ],
  },
  laksana: {
    challenge:
      "Menampilkan pelacak armada distribusi pengiriman logistik harian pada layar PC dengan konsumsi memori RAM yang seminim mungkin bagi komputer lawas operasional gudang.",
    solution:
      "Menggunakan framework Tauri bertenaga Rust untuk membungkus kode program HTML/JS sehingga tidak memerlukan browser Chromium pemicu lag.",
    architectureDetails:
      "Kompilasi biner native Tauri (.exe dan .app) yang sangat padat dengan konsumsi memori stabil di bawah 80 megabyte (MB).",
    highlights: [
      "Konsumsi RAM Sangat Rendah < 80MB",
      "Instalasi Ukuran Ringkas < 15MB",
      "Keamanan Enkripsi Database Lokal",
      "Integrasi Printer Kasir & Scanner USB",
    ],
  },
  aksara: {
    challenge:
      "Halaman informasi portal pembelajaran nasional tenggelam pada mesin pencarian Google dan memiliki skor kecepatan muat buruk yang menurunkan retensi pelajar.",
    solution:
      "Melakukan rekonstruksi tag meta HTML secara radikal, mengoptimiasikan kompresi gambar, dan memperbaiki kerangka layout shift (CLS) web secara menyeluruh.",
    architectureDetails:
      "Penyusunan sitemap otomatis yang dinamis serta penerapan lazy-loading aset visual yang sepenuhnya patuh terhadap panduan Google Core Web Vitals.",
    highlights: [
      "Skor Google PageSpeed 99/100",
      "Pangkat 1 di Google Pencarian Target",
      "Trafik Organik Naik 3x Lipat",
      "Metadata Otomatis Ramah Sosial Media",
    ],
  },
};

export default function Portfolio({ onContactClick }: PortfolioProps) {
  const [filter, setFilter] = useState<PortfolioCategory | "All">("All");
  const [activeHighlightId, setActiveHighlightId] = useState<string>("svara");
  const [selectedPortfolio, setSelectedPortfolio] =
    useState<PortfolioItem | null>(null);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const categories = useMemo<("All" | PortfolioCategory)[]>(
    () => ["All", ...new Set(PORTFOLIOS.flatMap((item) => item.category))],
    [],
  );

  const filteredPortfolios = useMemo(
    () =>
      filter === "All"
        ? PORTFOLIOS
        : PORTFOLIOS.filter((item) => item.category.includes(filter)),
    [filter],
  );

  const galleryImages = useMemo(() => {
    if (!selectedPortfolio) return [];

    const configuredImages = selectedPortfolio.images?.filter(
      (src) => typeof src === "string" && src.trim().length > 0,
    );

    // Backward compatibility: old data can continue using only `image`.
    return configuredImages?.length
      ? configuredImages
      : [selectedPortfolio.image];
  }, [selectedPortfolio]);

  const selectedSpec = selectedPortfolio
    ? PORTFOLIO_SPECS[selectedPortfolio.id]
    : undefined;

  // Lock background scrolling while the modal is open and support keyboard control.
  useEffect(() => {
    if (!selectedPortfolio) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedPortfolio(null);
      }

      if (galleryImages.length > 1 && event.key === "ArrowLeft") {
        setActiveImageIndex((current) =>
          (current - 1 + galleryImages.length) % galleryImages.length,
        );
      }

      if (galleryImages.length > 1 && event.key === "ArrowRight") {
        setActiveImageIndex((current) => (current + 1) % galleryImages.length);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedPortfolio, galleryImages.length]);

  const openPortfolioDetail = (item: (typeof PORTFOLIOS)[number]) => {
    setSelectedPortfolio(item as PortfolioItem);
    setActiveImageIndex(0);
  };

  const handleConsultCase = (item: PortfolioItem) => {
    const consultationMessage = `Halo Nayaka Labs, saya tertarik mendiskusikan implementasi teknis dan arsitektur proyek serupa dengan studi kasus "${item.title}" yang dikerjakan untuk klien ${item.client}. Tolong bantu jadwalkan konsultasi awal dengan tim desainer dan engineer Anda.`;

    setSelectedPortfolio(null);
    onContactClick(consultationMessage);
  };

  return (
    <section
      id="portfolio"
      className="relative overflow-hidden border-t border-slate-900 bg-slate-950 py-20 md:py-28"
    >
      {/* Background accents */}
      <div className="pointer-events-none absolute left-1/4 top-1/3 h-96 w-96 rounded-full bg-sky-500/5 blur-[120px]" />
      <div className="pointer-events-none absolute right-1/4 top-2/3 h-96 w-96 rounded-full bg-blue-500/5 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="mb-16 max-w-3xl space-y-4 text-left">
          <span className="inline-block rounded-full border border-sky-900/30 bg-sky-950/50 px-3.5 py-1.5 text-xs font-bold uppercase tracking-widest text-sky-400">
            Fokus Karya &amp; Studi Kasus
          </span>

          <h2 className="font-display text-3xl font-black leading-tight text-white sm:text-4xl">
            Karya Rekayasa Sistem &amp; Desain Kami
          </h2>

          <p className="font-sans text-sm leading-relaxed text-slate-400 sm:text-base">
            Kami bangga menghadirkan keunggulan estetika dan mutu pemrograman
            murni di setiap produk digital mitra kami. Di bawah ini, saksikan
            bedah kasus desain &amp; solusi fungsional yang kami rancang.
          </p>
        </div>

        {/* Portfolio catalog and filters */}
        <div>
          <div className="mb-12 flex flex-col justify-between gap-6 border-t border-slate-900 pt-16 md:flex-row md:items-end">
            <div className="space-y-2 text-left">
              <span className="block font-mono text-xs font-bold uppercase text-sky-400">
                Arsip Karya Digital
              </span>
              <h3 className="font-display text-xl font-black text-white sm:text-2xl">
                Seluruh Portofolio Proyek
              </h3>
            </div>

            <div className="flex shrink-0 flex-wrap justify-start gap-2 md:justify-end">
              {categories.map((category) => (
                <button
                  key={category}
                  type="button"
                  onClick={() => setFilter(category)}
                  aria-pressed={filter === category}
                  className={`cursor-pointer rounded-full border px-4 py-2 text-xs font-bold transition-all ${
                    filter === category
                      ? "border-sky-500 bg-sky-500 text-slate-950 shadow-md shadow-sky-500/10"
                      : "border-slate-800 bg-slate-950 text-slate-400 hover:bg-slate-900 hover:text-white"
                  }`}
                >
                  {category === "All" ? "Semua Kategori" : category}
                </button>
              ))}
            </div>
          </div>

          {filteredPortfolios.length === 0 ? (
            <div className="rounded-2xl border border-dashed border-slate-800 p-10 text-center text-sm text-slate-400">
              Belum ada proyek pada kategori ini.
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:gap-10">
              <AnimatePresence mode="popLayout">
                {filteredPortfolios.map((item) => {
                  const isSelectedInSpotlight = item.id === activeHighlightId;
                  const itemWithGallery = item as PortfolioItem;
                  const coverImage =
                    itemWithGallery.images?.find(
                      (src) => typeof src === "string" && src.trim().length > 0,
                    ) || item.image;

                  return (
                    <motion.article
                      layout
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.3 }}
                      key={item.id}
                      className={`group flex flex-col justify-between overflow-hidden rounded-3xl border bg-slate-900 transition-all duration-300 ${
                        isSelectedInSpotlight
                          ? "border-sky-500/40 shadow-2xl shadow-sky-500/5"
                          : "border-slate-800/80 shadow-2xl shadow-slate-950/20 hover:border-sky-500/30"
                      }`}
                    >
                      {/* Project cover */}
                      <button
                        type="button"
                        onClick={() => openPortfolioDetail(item)}
                        aria-label={`Lihat detail proyek ${item.title}`}
                        className="relative block aspect-[16/9] w-full cursor-pointer overflow-hidden bg-slate-950 text-left"
                      >
                        <img
                          src={coverImage}
                          alt={`Tampilan proyek ${item.title}`}
                          loading="lazy"
                          referrerPolicy="no-referrer"
                          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                        />

                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-slate-950/10" />

                        <div className="absolute left-4 top-4 flex flex-wrap gap-2">
                          {item.category.map((category) => (
                            <span
                              key={category}
                              className="rounded-full border border-slate-800 bg-slate-950/90 px-3 py-1.5 font-mono text-[9px] font-bold uppercase tracking-widest text-white backdrop-blur-md"
                            >
                              {category}
                            </span>
                          ))}
                        </div>

                        {isSelectedInSpotlight && (
                          <span className="absolute right-4 top-4 rounded-full bg-sky-500 px-3 py-1.5 font-mono text-[9px] font-black uppercase tracking-widest text-slate-950 shadow-lg shadow-sky-500/20">
                            Sedang Disorot
                          </span>
                        )}

                        <span className="absolute bottom-4 right-4 inline-flex items-center gap-2 rounded-full border border-white/15 bg-slate-950/80 px-3 py-2 text-xs font-bold text-white backdrop-blur transition group-hover:border-sky-400/50 group-hover:text-sky-300">
                          Lihat detail <ArrowUpRight className="h-3.5 w-3.5" />
                        </span>
                      </button>

                      {/* Project information */}
                      <div className="flex flex-1 flex-col justify-between p-6 text-left sm:p-8">
                        <div className="space-y-4">
                          <div className="flex items-center justify-between gap-3">
                            <span className="block font-mono text-[10px] font-bold uppercase tracking-widest text-sky-400">
                              CLIENT: {item.client}
                            </span>

                            <button
                              type="button"
                              onClick={() => {
                                setActiveHighlightId(item.id);
                                openPortfolioDetail(item);
                              }}
                              className="shrink-0 cursor-pointer rounded border border-slate-800 bg-slate-950 px-2.5 py-1.5 font-mono text-[10px] font-bold uppercase text-slate-400 transition hover:border-sky-500/40 hover:text-sky-400"
                            >
                              Detail <span aria-hidden="true">↗</span>
                            </button>
                          </div>

                          <div className="flex items-start justify-between gap-4">
                            <h4 className="font-display text-xl font-black text-white transition-colors group-hover:text-sky-400">
                              {item.title}
                            </h4>

                            {/* {item.link && (
                              <a
                                href={item.link}
                                target="_blank"
                                rel="noreferrer"
                                onClick={(event) => event.stopPropagation()}
                                className="flex shrink-0 items-center justify-center rounded-full border border-slate-800 bg-slate-950 p-2.5 text-sky-400 transition-colors hover:bg-slate-800 hover:text-sky-300"
                                aria-label={`Kunjungi situs ${item.client}`}
                              >
                                <ArrowUpRight className="h-4 w-4" />
                              </a>
                            )} */}
                          </div>

                          <p className="font-sans text-xs leading-relaxed text-slate-400 sm:text-sm">
                            {item.summary}
                          </p>
                        </div>
{/* 
                        <div className="mt-6 flex items-start gap-3 rounded-2xl border border-emerald-900/40 bg-emerald-950/30 p-4">
                          <CheckCircle2 className="h-5 w-5 shrink-0 text-emerald-400" />
                          <div>
                            <span className="block font-mono text-[10px] font-bold uppercase leading-none text-emerald-400">
                              Key Impact
                            </span>
                            <span className="mt-1.5 block font-display text-xs font-bold leading-relaxed text-slate-200">
                              {item.metrics}
                            </span>
                          </div>
                        </div> */}

                        <div className="mt-6 flex flex-wrap items-center gap-1.5 border-t border-slate-800/80 pt-5">
                          {item.techs.map((tech, index) => (
                            <span
                              key={`${tech}-${index}`}
                              className="rounded border border-slate-800/80 bg-slate-950 px-2.5 py-1 font-mono text-[10px] font-medium text-slate-300"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </motion.article>
                  );
                })}
              </AnimatePresence>
            </div>
          )}
        </div>
      </div>

      {/* Detail modal with multi-image gallery */}
      <AnimatePresence>
        {selectedPortfolio && (
          <motion.div
            key="portfolio-detail-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onMouseDown={(event) => {
              if (event.target === event.currentTarget) {
                setSelectedPortfolio(null);
              }
            }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/85 p-3 backdrop-blur-md sm:p-6"
          >
            <motion.div
              initial={{ opacity: 0, y: 24, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 16, scale: 0.98 }}
              transition={{ duration: 0.25 }}
              role="dialog"
              aria-modal="true"
              aria-labelledby="portfolio-modal-title"
              className="relative flex max-h-[92vh] w-full max-w-6xl flex-col overflow-hidden rounded-3xl border border-slate-800 bg-slate-900 shadow-2xl shadow-black/50"
            >
              {/* Modal header */}
              <div className="sticky top-0 z-20 flex shrink-0 items-center justify-between gap-4 border-b border-slate-800 bg-slate-900/95 px-5 py-4 backdrop-blur-xl sm:px-8">
                <div>
                  <span className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-sky-400">
                    Portfolio Detail
                  </span>
                  <p className="mt-1 text-sm font-semibold text-white">
                    Studi Kasus Proyek
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => setSelectedPortfolio(null)}
                  aria-label="Tutup detail portofolio"
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-slate-700 bg-slate-950 text-slate-300 transition hover:border-sky-500 hover:bg-slate-800 hover:text-white"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <div className="min-h-0 flex-1 overflow-y-auto">
                <div className="grid grid-cols-1 gap-8 p-5 sm:p-8 lg:grid-cols-2">
                  {/* Gallery column */}
                  <div className="min-w-0">
                    <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-slate-800 bg-slate-950">
                      <AnimatePresence mode="wait">
                        <motion.img
                          key={`${selectedPortfolio.id}-${activeImageIndex}`}
                          src={
                            galleryImages[activeImageIndex] ||
                            selectedPortfolio.image
                          }
                          alt={`${selectedPortfolio.title} — gambar ${activeImageIndex + 1}`}
                          referrerPolicy="no-referrer"
                          initial={{ opacity: 0, scale: 1.015 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.2 }}
                          className="absolute inset-0 h-full w-full object-contain"
                        />
                      </AnimatePresence>

                      {galleryImages.length > 1 && (
                        <>
                          <button
                            type="button"
                            aria-label="Gambar sebelumnya"
                            onClick={() =>
                              setActiveImageIndex(
                                (current) =>
                                  (current - 1 + galleryImages.length) %
                                  galleryImages.length,
                              )
                            }
                            className="absolute left-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-slate-950/80 text-white backdrop-blur transition hover:bg-sky-500 hover:text-slate-950"
                          >
                            <ChevronLeft className="h-5 w-5" />
                          </button>

                          <button
                            type="button"
                            aria-label="Gambar berikutnya"
                            onClick={() =>
                              setActiveImageIndex(
                                (current) => (current + 1) % galleryImages.length,
                              )
                            }
                            className="absolute right-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-slate-950/80 text-white backdrop-blur transition hover:bg-sky-500 hover:text-slate-950"
                          >
                            <ChevronRight className="h-5 w-5" />
                          </button>

                          <span className="absolute bottom-3 right-3 rounded-full border border-white/10 bg-slate-950/80 px-3 py-1.5 font-mono text-[10px] text-white backdrop-blur">
                            {activeImageIndex + 1} / {galleryImages.length}
                          </span>
                        </>
                      )}
                    </div>

                    {galleryImages.length > 1 && (
                      <div className="mt-4 grid grid-cols-4 gap-3 sm:grid-cols-5">
                        {galleryImages.map((src, index) => (
                          <button
                            key={`${src}-${index}`}
                            type="button"
                            onClick={() => setActiveImageIndex(index)}
                            aria-label={`Tampilkan gambar ${index + 1}`}
                            aria-pressed={activeImageIndex === index}
                            className={`relative aspect-[4/3] overflow-hidden rounded-xl border-2 bg-slate-950 transition ${
                              activeImageIndex === index
                                ? "border-sky-400"
                                : "border-slate-800 opacity-60 hover:opacity-100"
                            }`}
                          >
                            <img
                              src={src}
                              alt={`Thumbnail ${index + 1} — ${selectedPortfolio.title}`}
                              loading="lazy"
                              referrerPolicy="no-referrer"
                              className="h-full w-full object-cover"
                            />
                          </button>
                        ))}
                      </div>
                    )}

                    <p className="mt-3 text-xs leading-relaxed text-slate-500">
                      {galleryImages.length > 1
                        ? "Pilih thumbnail atau gunakan tombol navigasi untuk melihat gambar lainnya. Gunakan tombol panah pada keyboard untuk berpindah gambar."
                        : "Dokumentasi visual proyek."}
                    </p>
                  </div>

                  {/* Project details column */}
                  <div className="flex min-w-0 flex-col gap-6">
                    <div>
                      <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-sky-400">
                        CLIENT: {selectedPortfolio.client}
                      </span>

                      <div className="mt-3 flex flex-wrap gap-2">
                        {selectedPortfolio.category.map((category) => (
                          <span
                            key={category}
                            className="rounded-full border border-sky-900/60 bg-sky-950/50 px-3 py-1.5 font-mono text-[10px] text-sky-300"
                          >
                            {category}
                          </span>
                        ))}
                      </div>

                      <h2
                        id="portfolio-modal-title"
                        className="mt-4 font-display text-2xl font-black leading-tight text-white sm:text-3xl"
                      >
                        {selectedPortfolio.title}
                      </h2>

                      <p className="mt-4 text-sm leading-7 text-slate-400">
                        {selectedPortfolio.summary}
                      </p>
                    </div>

                    <div className="rounded-2xl border border-emerald-900/40 bg-emerald-950/20 p-5">
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-400" />
                        <div>
                          <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-emerald-400">
                            Key Impact
                          </span>
                          <p className="mt-2 text-sm font-semibold leading-relaxed text-slate-200">
                            {selectedPortfolio.metrics}
                          </p>
                        </div>
                      </div>
                    </div>

                    {selectedSpec && (
                      <div className="space-y-5">
                        <div>
                          <h3 className="text-xs font-bold uppercase tracking-widest text-sky-400">
                            Tantangan Proyek
                          </h3>
                          <p className="mt-2 text-sm leading-7 text-slate-400">
                            {selectedSpec.challenge}
                          </p>
                        </div>

                        <div>
                          <h3 className="text-xs font-bold uppercase tracking-widest text-sky-400">
                            Solusi yang Diterapkan
                          </h3>
                          <p className="mt-2 text-sm leading-7 text-slate-400">
                            {selectedSpec.solution}
                          </p>
                        </div>

                        <div>
                          <h3 className="text-xs font-bold uppercase tracking-widest text-sky-400">
                            Arsitektur Sistem
                          </h3>
                          <p className="mt-2 text-sm leading-7 text-slate-400">
                            {selectedSpec.architectureDetails}
                          </p>
                        </div>

                        <div>
                          <h3 className="text-xs font-bold uppercase tracking-widest text-sky-400">
                            Highlight Implementasi
                          </h3>
                          <div className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-2">
                            {selectedSpec.highlights.map((highlight) => (
                              <div
                                key={highlight}
                                className="flex items-start gap-2 rounded-xl border border-slate-800 bg-slate-950/60 p-3"
                              >
                                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-sky-400" />
                                <span className="text-xs leading-relaxed text-slate-300">
                                  {highlight}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}

                    <div>
                      <h3 className="text-xs font-bold uppercase tracking-widest text-sky-400">
                        Teknologi yang Digunakan
                      </h3>
                      <div className="mt-3 flex flex-wrap gap-2">
                        {selectedPortfolio.techs.map((tech, index) => (
                          <span
                            key={`${tech}-${index}`}
                            className="rounded-lg border border-slate-800 bg-slate-950 px-3 py-2 font-mono text-[10px] text-slate-300"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="mt-auto flex flex-col gap-3 border-t border-slate-800 pt-5 sm:flex-row sm:flex-wrap">
                      {/* {selectedPortfolio.link && (
                        <a
                          href={selectedPortfolio.link}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-700 bg-slate-950 px-5 py-3 text-sm font-bold text-slate-200 transition hover:border-sky-500/50 hover:text-sky-300"
                        >
                          Kunjungi Proyek
                          <ArrowUpRight className="h-4 w-4" />
                        </a>
                      )} */}

                      <button
                        type="button"
                        onClick={() => handleConsultCase(selectedPortfolio)}
                        className="inline-flex items-center justify-center gap-2 rounded-xl bg-sky-500 px-5 py-3 text-sm font-bold text-slate-950 transition hover:bg-sky-400"
                      >
                        Diskusikan Proyek Serupa
                        <ArrowRight className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
