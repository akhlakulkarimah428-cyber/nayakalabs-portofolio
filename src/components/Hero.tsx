import { motion } from "motion/react";
import {
  ArrowRight,
  Play,
  Server,
  Smartphone,
  ShieldCheck,
  Sparkles,
  CheckCircle,
  Search,
} from "lucide-react";
import { useState, useEffect } from "react";

interface HeroProps {
  onContactClick: () => void;
  onServicesClick: () => void;
}

export default function Hero({ onContactClick, onServicesClick }: HeroProps) {
  const [activeTab, setActiveTab] = useState<
    "performance" | "security" | "seo"
  >("performance");
  const [metricValue, setMetricValue] = useState(12);

  useEffect(() => {
    const interval = setInterval(() => {
      setMetricValue((prev) => {
        const change = Math.floor(Math.random() * 5) - 2;
        const newVal = prev + change;
        return newVal > 7 && newVal < 19 ? newVal : prev;
      });
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative pt-32 pb-20 md:pt-44 md:pb-28 overflow-hidden bg-slate-950 grid-bg">
      <div className="absolute top-1/4 left-1/10 w-96 h-96 glow-indigo opacity-25 pointer-events-none" />
      <div className="absolute bottom-1/5 right-1/10 w-[500px] h-[500px] glow-sky opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          <div className="lg:col-span-7 flex flex-col text-left">

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-display font-black text-4xl sm:text-5xl lg:text-6xl tracking-tight text-white leading-tight"
            >
              Kami membangun{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-indigo-300 to-emerald-400">
                produk digital
              </span>{" "}
              yang terlihat premium dan terasa meyakinkan.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-6 font-sans text-slate-400 text-base sm:text-lg leading-relaxed max-w-2xl"
            >
              Nayaka Labs membantu brand dan bisnis bertumbuh lewat website,
              aplikasi, dan pengalaman digital yang lebih rapi, modern, cepat,
              dan nyaman dipakai.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-8 flex flex-wrap gap-4 items-center"
            >
              <button
                onClick={onContactClick}
                className="group flex items-center gap-2.5 font-display font-bold text-xs uppercase tracking-wider bg-sky-500 hover:bg-sky-400 text-slate-950 px-7 py-4 rounded-full transition-all duration-200 shadow-lg shadow-sky-500/10 cursor-pointer"
              >
                Konsultasi Gratis
              </button>

              <button
                onClick={onServicesClick}
                className="flex items-center gap-2.5 font-display font-bold text-xs uppercase tracking-wider bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-200 px-7 py-4 rounded-full transition-all cursor-pointer shadow-sm hover:shadow"
              >
                <Play className="w-3.5 h-3.5 fill-slate-200 text-slate-200" />
                Lihat Layanan
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-12 pt-8 border-t border-slate-800/80 grid grid-cols-1 sm:grid-cols-3 gap-4"
            >
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-emerald-400 shrink-0" />
                <span className="font-sans text-sm font-medium text-slate-300">
                  Tampilan elegan & konsisten
                </span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-emerald-400 shrink-0" />
                <span className="font-sans text-sm font-medium text-slate-300">
                  Dibuat untuk performa
                </span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-emerald-400 shrink-0" />
                <span className="font-sans text-sm font-medium text-slate-300">
                  Siap untuk scale-up
                </span>
              </div>
            </motion.div>
          </div>

          <div className="lg:col-span-5 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative mx-auto max-w-md lg:max-w-none bg-slate-900 rounded-2xl shadow-2xl shadow-slate-950/80 border border-slate-800 overflow-hidden"
            >
              <div className="bg-slate-950 px-4 py-3 flex items-center justify-between border-b border-slate-800/80">
                <div className="flex items-center gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                </div>
                <div className="font-mono text-[10px] text-slate-400">
                  nayaka-labs
                </div>
                <div className="w-4 h-4 rounded-full bg-emerald-500/10 flex items-center justify-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                </div>
              </div>

              <div className="border-b border-slate-800/50 bg-slate-950/40 p-1 flex gap-1">
                <button
                  onClick={() => setActiveTab("performance")}
                  className={`flex-1 py-2 px-3 rounded-lg text-xs font-bold flex items-center justify-center gap-1.5 cursor-pointer transition-colors ${
                    activeTab === "performance"
                      ? "bg-slate-800 text-sky-400 border border-slate-700/40"
                      : "text-slate-400 hover:text-slate-200"
                  }`}
                >
                  <Server className="w-3.5 h-3.5" />
                  Website Cepat
                </button>

                <button
                  onClick={() => setActiveTab("security")}
                  className={`flex-1 py-2 px-3 rounded-lg text-xs font-bold flex items-center justify-center gap-1.5 cursor-pointer transition-colors ${
                    activeTab === "security"
                      ? "bg-slate-800 text-sky-400 border border-slate-700/40"
                      : "text-slate-400 hover:text-slate-200"
                  }`}
                >
                  <ShieldCheck className="w-3.5 h-3.5" />
                  Data Aman
                </button>

                <button
                  onClick={() => setActiveTab("seo")}
                  className={`flex-1 py-2 px-3 rounded-lg text-xs font-bold flex items-center justify-center gap-1.5 cursor-pointer transition-colors ${
                    activeTab === "seo"
                      ? "bg-slate-800 text-sky-400 border border-slate-700/40"
                      : "text-slate-400 hover:text-slate-200"
                  }`}
                >
                  <Search className="w-3.5 h-3.5" />
                  Mudah Ditemukan
                </button>
              </div>

              <div className="p-5 h-[21rem] flex flex-col justify-between">
                {activeTab === "performance" && (
                  <div className="space-y-4 animate-in fade-in duration-200">
                    <div className="p-4 bg-slate-950 border border-slate-800 rounded-xl">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs text-slate-400 font-medium">
                          Kecepatan halaman
                        </span>
                        <span className="text-xs font-mono font-bold text-emerald-400">
                          Stabil
                        </span>
                      </div>

                      <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                        <div className="bg-sky-500 h-full w-[86%]" />
                      </div>

                      <p className="mt-3 text-[11px] text-slate-500 leading-relaxed">
                        Website dibuat ringan, cepat dibuka, dan nyaman dipakai
                        di laptop maupun smartphone.
                      </p>
                    </div>

                    <div className="p-3 bg-slate-950 border border-slate-800/80 rounded-xl flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Smartphone className="w-4 h-4 text-sky-400" />
                        <span className="text-xs font-semibold text-slate-300">
                          Tampilan responsif
                        </span>
                      </div>
                      <span className="text-xs font-mono font-extrabold text-emerald-400 bg-emerald-950/30 px-2 py-0.5 rounded-full border border-emerald-900/50">
                        Ready
                      </span>
                    </div>
                  </div>
                )}

                {activeTab === "security" && (
                  <div className="space-y-4 animate-in fade-in duration-200">
                    <div className="p-4 bg-emerald-950/20 border border-emerald-900/40 rounded-xl space-y-2">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                        <span className="text-xs font-bold text-slate-200">
                          Akses lebih terjaga
                        </span>
                      </div>
                      <p className="text-[11px] text-slate-400 leading-relaxed">
                        Alur data ditata agar lebih rapi, aman, dan mudah
                        dikelola oleh tim Anda.
                      </p>
                    </div>

                    <div className="space-y-2">
                      <div className="flex justify-between text-xs font-medium text-slate-400">
                        <span>Kontrol akses</span>
                        <span className="font-semibold text-slate-200">
                          Tertata
                        </span>
                      </div>
                      <div className="w-full bg-slate-950 h-2 rounded-full overflow-hidden border border-slate-800">
                        <div className="bg-emerald-500 h-full w-[92%]" />
                      </div>
                    </div>

                    <div className="p-3 bg-slate-950 border border-slate-800/80 rounded-xl flex items-center justify-between">
                      <span className="text-xs font-semibold text-slate-300">
                        Alur kerja internal
                      </span>
                      <span className="font-mono text-[10px] bg-slate-850 border border-slate-700 text-sky-400 px-2.5 py-1 rounded">
                        ON
                      </span>
                    </div>
                  </div>
                )}

                {activeTab === "seo" && (
                  <div className="space-y-4 animate-in fade-in duration-200">
                    <div className="bg-slate-950 rounded-lg p-3 text-slate-250 font-mono text-[10px] border border-slate-800 overflow-hidden space-y-1">
                      <div className="text-sky-400">
                        &gt; Website lebih mudah dicari di google
                      </div>
                      <div className="text-emerald-400">
                        ✔ Struktur konten lebih jelas
                      </div>
                      <div className="text-slate-500">
                        ✔ Peluang ditemukan calon klien lebih besar
                      </div>
                    </div>

                    <div className="p-3 bg-gradient-to-r from-slate-950 to-emerald-950/20 border border-slate-800 rounded-xl flex items-center justify-between">
                      <div className="space-y-0.5 text-left">
                        <span className="text-xs font-bold text-slate-200 block">
                          Lebih mudah ditemukan
                        </span>
                        <span className="text-[10px] text-slate-400">
                          Isi dan struktur dibuat lebih ramah pengunjung
                        </span>
                      </div>
                      <span className="text-xs font-mono font-bold text-sky-400 bg-slate-900 border border-slate-800 px-3 py-1 rounded-full">
                        Optimal
                      </span>
                    </div>

                    <button
                      onClick={onContactClick}
                      className="w-full bg-sky-500 text-slate-950 rounded-xl py-2.5 text-xs font-bold hover:bg-sky-400 transition shadow cursor-pointer uppercase tracking-wider"
                    >
                      Konsultasi Website
                    </button>
                  </div>
                )}

                <div className="border-t border-slate-800 pt-3 flex items-center justify-between text-[11px] text-slate-500">
                  <span>Studio: Bondowoso, Indonesia</span>
                  <span className="hover:text-sky-400 cursor-pointer transition">
                    View process &gt;
                  </span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="absolute -bottom-6 -left-6 bg-slate-900 border border-slate-800 shadow-xl p-3.5 rounded-xl hidden sm:flex items-center gap-3"
            >
              <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-400">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <div>
                <span className="text-xs text-slate-500 block font-sans">
                  Project handling
                </span>
                <span className="text-sm font-bold text-slate-100">
                  Premium & responsive
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}