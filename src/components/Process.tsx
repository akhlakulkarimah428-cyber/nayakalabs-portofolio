import { PROCESS_STEPS } from "../data";
import { Check, ClipboardList, RefreshCw, Layers, ShieldCheck } from "lucide-react";

export default function Process() {
  const getStepIcon = (num: string) => {
    switch (num) {
      case "01":
        return <ClipboardList className="w-5 h-5 text-sky-400" />;
      case "02":
        return <Layers className="w-5 h-5 text-sky-400" />;
      case "03":
        return <RefreshCw className="w-5 h-5 text-sky-400 animate-spin" style={{ animationDuration: '8s' }} />;
      default:
        return <ShieldCheck className="w-5 h-5 text-sky-400" />;
    }
  };

  return (
    <section id="process" className="py-20 md:py-28 bg-slate-950 border-t border-slate-900 overflow-hidden relative">
      <div className="absolute top-1/2 left-0 w-80 h-80 glow-sky opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-sky-400 bg-sky-950/50 border border-sky-900/30 px-3.5 py-1.5 rounded-full inline-block">
          Cara Kami Mewujudkan Solusi Digital Anda
          </span>
          <h2 className="font-display font-black text-3xl sm:text-4xl text-white leading-tight">
            Proses Terstruktur untuk Keberhasilan Mutlak
          </h2>
          <p className="font-sans text-slate-400 text-sm">
            Kami mengeliminasi tebak-tebakan. Mengombinasikan kejelasan proses Blueprint dengan eksekusi Agile iteratif setiap minggu untuk hasil produk digital terbaik.
          </p>
        </div>

        {/* Process steps visual layout */}
        <div className="relative">
          {/* Connecting line on desktop */}
          <div className="hidden lg:block absolute top-[24px] left-[8%] right-[8%] h-0.5 bg-gradient-to-r from-slate-900 via-sky-500/20 to-slate-900 z-0" />

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 relative z-10">
            {PROCESS_STEPS.map((step, idx) => (
              <div key={idx} className="flex flex-col text-left space-y-4 group">
                {/* Step indicator Row */}
                <div className="flex lg:flex-col items-center lg:items-start gap-4">
                  {/* Circle number */}
                  <div className="w-12 h-12 rounded-full bg-slate-950 border-2 border-sky-500/80 text-sky-400 flex items-center justify-center font-display font-black text-lg shadow-md md:group-hover:scale-105 group-hover:bg-sky-500 group-hover:text-slate-950 transition-all z-10">
                    {step.number}
                  </div>
                  
                  {/* Step Title inside flex */}
                  <div className="flex items-center gap-2 lg:mt-4">
                    <span className="p-1 px-2 border border-sky-900/50 bg-sky-950/50 text-sky-400 font-mono text-[9px] rounded uppercase font-bold tracking-wider">
                      PHASE {step.number}
                    </span>
                  </div>
                </div>

                {/* Content details */}
                <div className="space-y-3 bg-slate-900 p-6 rounded-2xl border border-slate-800/80 flex-1 hover:border-sky-500/20 transition-all duration-300">
                  <div className="flex items-center gap-2 mb-2">
                    {getStepIcon(step.number)}
                    <h3 className="font-display font-bold text-base text-white group-hover:text-sky-400 transition-colors">
                      {step.title}
                    </h3>
                  </div>

                  <p className="font-sans text-xs text-slate-400 leading-relaxed">
                    {step.description}
                  </p>

                  {/* Output deliverables badges */}
                  <div className="pt-4 border-t border-slate-800/80 space-y-2">
                    <span className="text-[9px] uppercase font-mono tracking-widest text-sky-400 font-extrabold block">
                      DELIVERABLES:
                    </span>
                    <ul className="space-y-1.5">
                      {step.deliverables.map((item, dIdx) => (
                        <li key={dIdx} className="flex items-center gap-2 text-[11px] text-slate-300">
                          <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
