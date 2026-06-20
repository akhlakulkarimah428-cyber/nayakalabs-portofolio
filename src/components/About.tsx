import { ABOUT_STATS } from "../data";
import { Check, Target, Users, Zap } from "lucide-react";

export default function About() {
  const highlights = [
    {
      icon: Target,
      title: "Rekayasa Berorientasi Solusi",
      desc: "Kami tidak hanya menulis kode; kami mengidentifikasi hambatan fungsional utama bisnis Anda.",
    },
    {
      icon: Users,
      title: "Insinyur Senior Berpengalaman",
      desc: "Dipimpin oleh teknisi senior berpengalaman internasional yang berdedikasi melahirkan keunggulan.",
    },
    {
      icon: Zap,
      title: "Iterasi Cepat & Kecepatan Ekskusi",
      desc: "Menghadirkan fitur modern berkualitas tinggi ke pasar dalam hitungan minggu, bukan bulan.",
    },
  ];

  return (
    <section id="about" className="py-20 md:py-28 bg-slate-950 overflow-hidden relative">
      {/* Subtle background glows */}
      <div className="absolute top-1/2 left-0 w-80 h-80 glow-indigo opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Column Left: Visual grid of numbers & values (5 cols) */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="grid grid-cols-2 gap-4">
              {ABOUT_STATS.map((stat, idx) => (
                <div
                  key={idx}
                  className="bg-slate-900 border border-slate-800/80 p-6 sm:p-8 rounded-2xl flex flex-col justify-between hover:shadow-xl hover:shadow-slate-950/50 transition-all group hover:-translate-y-1"
                >
                  <span className="font-display font-black text-3xl sm:text-4xl text-sky-400 block mb-2 group-hover:scale-105 transition-transform origin-left">
                    {stat.value}
                  </span>
                  <span className="font-sans text-xs sm:text-sm font-semibold text-slate-400 leading-snug">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>


          </div>

          {/* Column Right: Copy (7 cols) */}
          <div className="lg:col-span-7 order-1 lg:order-2 space-y-6 text-left">
            <span className="text-xs font-bold uppercase tracking-widest text-sky-400 font-sans block">
              Tentang Nayaka Labs
            </span>
            <h2 className="font-display font-black text-3xl sm:text-4xl text-white leading-tight">
              Mitra Teknologi untuk Melipatgandakan Akselerasi Bisnis Anda.
            </h2>
            <p className="font-sans text-slate-400 leading-relaxed text-base">
              Didirikan dengan tujuan menjembatani jarak antara fungsionalitas kompleks dan desain intuitif, Nayaka Labs hadir bukan sekadar sebagai vendor, melainkan sebagai <strong className="text-sky-400 font-bold">Strategic Technology Partner</strong>. Kami berkomitmen mengawal setiap tahap siklus hidup inovasi produk Anda.
            </p>

            <div className="space-y-4 pt-4 border-t border-slate-800/80">
              {highlights.map((hlt, idx) => {
                const Icon = hlt.icon;
                return (
                  <div key={idx} className="flex gap-4 items-start animate-fade-in">
                    <div className="p-2.5 bg-slate-900 text-sky-400 rounded-xl mt-1 shrink-0 border border-slate-805">
                      <Icon className="w-4 h-4" />
                    </div>
                    <div className="space-y-0.5">
                      <h4 className="font-display font-bold text-sm text-white">
                        {hlt.title}
                      </h4>
                      <p className="font-sans text-xs text-slate-400 leading-normal">
                        {hlt.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
