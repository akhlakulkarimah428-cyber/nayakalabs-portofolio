import { motion } from "motion/react";
import { CheckCircle2, ShieldCheck, HeartHandshake } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div className="relative">
             <div className="absolute -inset-4 bg-accent/5 rounded-[48px] blur-3xl -z-10" />
             <div className="bg-surface border border-slate-100 rounded-[40px] p-10 md:p-14 shadow-sm hover:shadow-xl hover:shadow-blue-500/5 transition-all duration-700">
                <span className="label-mono mb-6 block text-accent">Premium Studio</span>
                <h2 className="font-display text-4xl md:text-5xl font-bold text-ink mb-12 leading-tight">
                   Standar <span className="text-accent underline decoration-slate-200 underline-offset-8">Kualitas</span> <br /> Digital Lokal
                </h2>
                <div className="space-y-12">
                  {[
                    { 
                      icon: ShieldCheck, 
                      title: "Keamanan Terlapis", 
                      text: "Keamanan data adalah prioritas utama dalam setiap baris kode yang kami susun." 
                    },
                    { 
                      icon: HeartHandshake, 
                      title: "Partner Strategis", 
                      text: "Kami tidak sekadar vendor, tapi mitra yang aktif memberi saran teknis terbaik." 
                    },
                  ].map((item) => (
                    <div key={item.title} className="flex gap-8 group">
                      <div className="w-14 h-14 bg-white border border-slate-100 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-sm group-hover:bg-accent group-hover:text-white transition-all">
                        <item.icon className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="font-display font-bold text-xl text-ink mb-2">{item.title}</h3>
                        <p className="text-ink-muted text-sm font-medium leading-relaxed">{item.text}</p>
                      </div>
                    </div>
                  ))}
                </div>
             </div>
          </div>

          <div>
            <div className="inline-flex items-center gap-3 mb-8">
               <div className="h-px w-8 bg-slate-200" />
               <span className="label-mono opacity-50">Studio Manifesto</span>
            </div>
            <h3 className="font-display text-4xl md:text-5xl font-bold text-ink mb-10 leading-[1.2]">
               "Memberdayakan <span className="text-accent">Bondowoso</span> Lewat Kode yang Presisi"
            </h3>
            <p className="text-ink-muted text-lg font-medium leading-relaxed mb-12">
              Kami percaya bahwa teknologi hebat tidak harus datang dari metropolitan. Di sini, kami membuktikan bahwa solusi digital kelas dunia bisa lahir dari talenta lokal yang berdedikasi.
            </p>
            <div className="grid grid-cols-2 gap-12 py-10 border-t border-slate-100">
               <div>
                  <p className="text-5xl font-display font-bold text-ink mb-3">98%</p>
                  <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-ink-muted">Client Loyalty</p>
               </div>
               <div>
                  <p className="text-5xl font-display font-bold text-ink mb-3">0%</p>
                  <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-ink-muted">Failed Project</p>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
