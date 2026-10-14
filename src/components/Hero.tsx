import { motion } from "motion/react";
import { ArrowRight, CheckCircle } from "lucide-react";

interface HeroProps {
  onContactClick: () => void;
  onServicesClick: () => void;
}

const BENEFITS = [
  "Tampilan elegan & konsisten",
  "Dibuat untuk performa",
  "Siap untuk scale-up",
];

const focusRing =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-300 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950";

const buttonBase =
  "inline-flex w-full items-center justify-center rounded-full px-7 py-4 font-display text-xs font-bold uppercase tracking-wider transition-all duration-200 hover:-translate-y-0.5 sm:w-auto";

// Animasi masuk yang sama untuk semua elemen, hanya beda delay
const fadeUp = (delay: number, duration = 0.6) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration, delay },
});

export default function Hero({ onContactClick, onServicesClick }: HeroProps) {
  return (
<section className="relative isolate overflow-hidden bg-slate-950 pt-32 pb-20 md:pt-44 md:pb-28">
  {/* Background image */}
  <div
    className="absolute inset-0 -z-10 bg-cover bg-center"
    style={{
      backgroundImage: "url('/images/hero-bg.png')",
    }}
  />

  {/* Overlay untuk menjaga keterbacaan teks */}
  <div className="absolute inset-0 -z-10 bg-slate-950/30" />

  {/* Konten Hero lu tetap di sini */}
    {/* Dekorasi latar */}
      <div className="pointer-events-none absolute left-[10%] top-1/4 h-96 w-96 glow-indigo opacity-25" />
      <div className="pointer-events-none absolute bottom-[20%] right-[10%] h-[500px] w-[500px] glow-sky opacity-20" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto flex w-full max-w-5xl flex-col items-center text-center">
          {/* Judul */}
          <motion.h1
            {...fadeUp(0.1)}
            className="max-w-4xl font-display text-4xl font-black leading-[1.12] tracking-tight text-white sm:text-5xl lg:text-6xl"
          >
            Kami Membangun{" "}
            <span className="bg-gradient-to-r from-sky-400 via-indigo-300 to-emerald-400 bg-clip-text text-transparent">
              Produk Digital
            </span>{" "}
            yang Terlihat Premium dan Terasa Meyakinkan.
          </motion.h1>

          {/* Deskripsi */}
          <motion.p
            {...fadeUp(0.2)}
            className="mt-6 max-w-2xl font-sans text-base leading-relaxed text-slate-400 sm:text-lg"
          >
            Nayaka Labs membantu brand dan bisnis bertumbuh lewat website,
            aplikasi, dan pengalaman digital yang lebih rapi, modern, cepat,
            dan nyaman dipakai.
          </motion.p>

          {/* Tombol CTA */}
          <motion.div
            {...fadeUp(0.3)}
            className="mt-8 flex w-full flex-col items-stretch justify-center gap-3 sm:w-auto sm:flex-row sm:items-center sm:gap-4"
          >
            <button
              type="button"
              onClick={onContactClick}
              className={`${buttonBase} ${focusRing} bg-sky-500 text-slate-950 shadow-lg shadow-sky-500/10 hover:bg-sky-400 hover:shadow-sky-500/20`}
            >
              Konsultasi Gratis
            </button>

            <button
              type="button"
              onClick={onServicesClick}
              className={`${buttonBase} ${focusRing} group gap-2.5 border border-slate-800 bg-slate-900 text-slate-200 hover:border-slate-700 hover:bg-slate-800 hover:text-white`}
            >
              Lihat Layanan
              <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
            </button>
          </motion.div>

          {/* Benefit */}
          <motion.ul
            {...fadeUp(0.45, 0.7)}
            className="mt-12 grid w-full max-w-4xl grid-cols-1 gap-4 border-t border-slate-800/80 pt-8 sm:grid-cols-3 sm:gap-5"
          >
            {BENEFITS.map((benefit) => (
              <li
                key={benefit}
                className="flex items-center justify-center gap-2.5"
              >
                <CheckCircle className="h-4 w-4 shrink-0 text-emerald-400" />
                <span className="font-sans text-sm font-medium text-slate-300">
                  {benefit}
                </span>
              </li>
            ))}
          </motion.ul>
        </div>
      </div>
    </section>
  );
}