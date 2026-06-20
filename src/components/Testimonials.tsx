import { TESTIMONIALS } from "../data";
import { Star, MessageSquareQuote, Check } from "lucide-react";

export default function Testimonials() {
  return (
    <section className="py-20 md:py-28 bg-slate-900/10 border-t border-slate-900 overflow-hidden text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Core Header Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-16">
          <div className="lg:col-span-8 space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-sky-400 bg-sky-950/50 border border-sky-900/30 px-3.5 py-1.5 rounded-full inline-block">
              Testimoni Klien
            </span>
            <h2 className="font-display font-black text-3xl sm:text-4xl text-white leading-tight">
              Apa yang Mereka Katakan Tentang Kerja Sama dengan Nayaka Labs
            </h2>
            <p className="font-sans text-slate-400 text-sm max-w-2xl">
              Kami meletakkan kesuksesan mitra bisnis kami di jantung setiap keputusan teknis. Baca pengalaman tulus para pimpinan teknologi yang telah bertumbuh bersama kami.
            </p>
          </div>

          {/* Average Rating Box Summary */}
          <div className="lg:col-span-4 bg-slate-900 p-5 rounded-2xl border border-slate-800/80 shadow-md flex items-center justify-between gap-4">
            <div>
              <span className="font-display font-black text-3xl text-white block leading-none">
                5.0<span className="text-sky-400">/5.0</span>
              </span>
              <span className="text-[10px] text-slate-500 block font-mono mt-1 uppercase font-bold">Clutch & G2 Rating</span>
            </div>
            <div className="flex flex-col gap-1 items-end">
              <div className="flex gap-0.5">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star key={s} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <span className="text-xs text-sky-400 font-semibold flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-emerald-400" />
                100% Verified
              </span>
            </div>
          </div>
        </div>

        {/* Testimonials Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((testi) => (
            <div
              key={testi.id}
              className="bg-slate-900 border border-slate-800/80 p-6 sm:p-8 rounded-2xl shadow-xl shadow-slate-950/10 hover:shadow-slate-950/20 hover:border-sky-500/20 transition-all duration-300 flex flex-col justify-between group"
            >
              <div className="space-y-4">
                {/* Rating stars and quote quote */}
                <div className="flex items-center justify-between">
                  <div className="flex gap-0.5">
                    {[...Array(testi.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <MessageSquareQuote className="w-8 h-8 text-slate-850 group-hover:text-slate-800 transition-colors" />
                </div>

                {/* Content body text */}
                <p className="font-sans text-xs sm:text-sm text-slate-300 leading-relaxed italic">
                  "{testi.content}"
                </p>
              </div>

              {/* Author bio details */}
              <div className="flex items-center gap-3.5 pt-6 mt-6 border-t border-slate-800/80">
                <img
                  src={testi.avatar}
                  alt={testi.name}
                  referrerPolicy="no-referrer"
                  className="w-10 h-10 rounded-full object-cover border border-slate-800 shadow-sm"
                />
                <div className="space-y-0.5">
                  <h4 className="font-display font-bold text-xs sm:text-sm text-white leading-none">
                    {testi.name}
                  </h4>
                  <p className="font-sans text-[11px] text-slate-400 leading-tight">
                    {testi.role}, <span className="font-semibold text-sky-400">{testi.company}</span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
